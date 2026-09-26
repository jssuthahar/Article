# Real-World Production Issues Solved in Azure

Critical problems that happen in real projects, why they happen, and how to fix them using Azure. Each case follows the same pattern: **Problem → Root Cause → Solution → Azure Services**.

## Series Index

| Series | Topic | Cases |
|--------|-------|-------|
| 1 | Authentication & Security | 1–8 |
| 2 | Orders & Payments | 9–16 |
| 3 | Performance & Scalability | 17–24 |
| 4 | Database & Data Consistency | 25–31 |
| 5 | Messaging & Integration | 32–37 |
| 6 | Real-Time & Mobile | 38–42 |
| 7 | Resilience & Disaster Recovery | 43–47 |
| 8 | Deployment, Monitoring & Cost | 48–52 |
| 9 | AI & GenAI in Production | 53–55 |

---

## Series 1: Authentication & Security

### 1. Anonymous users calling backend APIs directly
- **Problem:** Public APIs used by the mobile app were being called by scripts and bots, bypassing the app entirely.
- **Root cause:** APIs accepted requests without verifying a token or client identity.
- **Solution:** Require OAuth 2.0 tokens for every API; validate JWTs at the gateway; for pre-login endpoints (register, OTP), issue short-lived anonymous tokens and apply strict rate limits.
- **Azure:** Microsoft Entra External ID, API Management (`validate-jwt`, `rate-limit-by-key`), Azure Front Door WAF.

### 2. Users logged out randomly after scaling out
- **Problem:** After adding more App Service instances, users were logged out or lost session data.
- **Root cause:** Session state stored in server memory; the load balancer sent requests to different instances.
- **Solution:** Make the app stateless with token-based auth and move session data to a distributed cache.
- **Azure:** Azure Cache for Redis, App Service, Entra ID.

### 3. Secrets leaked in source code
- **Problem:** Database connection strings and API keys were found in a public Git repository.
- **Root cause:** Secrets stored in `appsettings.json` and committed to source control.
- **Solution:** Rotate all exposed secrets immediately; move secrets to a vault; use managed identities so apps need no secrets at all; enable secret scanning.
- **Azure:** Key Vault, Managed Identities, GitHub Advanced Security secret scanning, Microsoft Defender for Cloud.

### 4. Brute-force and credential-stuffing attacks on login
- **Problem:** Thousands of failed login attempts per minute from rotating IPs.
- **Root cause:** Custom login endpoint with no lockout, bot protection, or MFA.
- **Solution:** Move to a managed identity provider with smart lockout and MFA; add WAF bot rules and CAPTCHA for suspicious traffic.
- **Azure:** Entra External ID, Azure Front Door WAF (bot manager), Conditional Access.

### 5. Access token stolen and reused
- **Problem:** A leaked long-lived token let an attacker access user data for days.
- **Root cause:** Access tokens valid for 30 days with no revocation.
- **Solution:** Short-lived access tokens (5–60 min) with refresh token rotation; revoke sessions on suspicious activity.
- **Azure:** Entra ID (token lifetime policies, continuous access evaluation), API Management.

### 6. Storage account files publicly accessible
- **Problem:** Customer documents in Blob Storage were accessible via guessable URLs.
- **Root cause:** Container set to public access.
- **Solution:** Disable public access, serve files through short-lived SAS tokens generated after authorization, and use private endpoints.
- **Azure:** Blob Storage (user delegation SAS), Private Endpoints, Azure Policy.

### 7. Database exposed to the internet
- **Problem:** Security scan found the SQL server reachable from any IP.
- **Root cause:** Firewall rule `0.0.0.0–255.255.255.255` added during testing and never removed.
- **Solution:** Remove public access, use private endpoints inside a VNet, and enforce with policy.
- **Azure:** Azure SQL Private Link, Virtual Network, Azure Policy, Defender for SQL.

### 8. DDoS attack took the website down
- **Problem:** Site unreachable during a volumetric attack on a sale day.
- **Root cause:** Origin servers exposed directly with no edge protection.
- **Solution:** Put all traffic behind a global edge with WAF, lock origins to accept only edge traffic, and enable DDoS protection.
- **Azure:** Azure Front Door Premium, WAF, Azure DDoS Protection, Private Link origins.

---

## Series 2: Orders & Payments

### 9. Duplicate orders from double-click or retries
- **Problem:** Customers were charged twice for the same order.
- **Root cause:** User double-clicked "Pay" and the mobile app retried on timeout; the API created a new order each time.
- **Solution:** Client sends an idempotency key per checkout; the API stores the key with the result and returns the same response for repeats.
- **Azure:** Azure Cache for Redis (idempotency keys with TTL), Azure SQL unique constraints, API Management.

### 10. Payment succeeded but order not created
- **Problem:** Money debited, but the order showed as failed.
- **Root cause:** Payment gateway callback timed out, and the app crashed before saving the order.
- **Solution:** Handle payment webhooks idempotently, save the payment event first, and run a reconciliation job against the gateway every few minutes.
- **Azure:** Azure Functions (webhook + timer reconciliation), Service Bus, Azure SQL.

### 11. Order created but payment failed with no rollback
- **Problem:** Inventory reserved for orders whose payment failed, blocking stock.
- **Root cause:** Multi-step checkout without compensation logic.
- **Solution:** Saga pattern: each step has a compensating action (release inventory, cancel order) triggered on failure.
- **Azure:** Durable Functions (orchestration), Service Bus, Azure SQL.

### 12. Overselling during a flash sale
- **Problem:** 1,000 units sold for 500 in stock.
- **Root cause:** Read-then-write stock checks under heavy concurrency.
- **Solution:** Atomic decrement in cache, queue the orders, confirm asynchronously, and reconcile with the database.
- **Azure:** Azure Cache for Redis (atomic `DECR`), Service Bus, Azure SQL (optimistic concurrency).

### 13. Payment webhooks processed multiple times
- **Problem:** Loyalty points credited several times for one payment.
- **Root cause:** Payment providers retry webhooks; the handler was not idempotent.
- **Solution:** Store each webhook's event ID and skip duplicates; use duplicate detection in the queue.
- **Azure:** Service Bus (duplicate detection), Cosmos DB (unique key on event ID), Azure Functions.

### 14. Order and event out of sync (dual-write problem)
- **Problem:** Order saved in the DB but the "OrderCreated" event was never published, so emails and shipping never triggered.
- **Root cause:** App wrote to the DB and message broker separately; the second write failed.
- **Solution:** Transactional outbox: write the event in the same DB transaction, then a relay publishes it.
- **Azure:** Azure SQL (outbox table) or Cosmos DB change feed, Azure Functions, Service Bus.

### 15. Refund processed twice
- **Problem:** Support clicked refund twice; the customer received double money.
- **Root cause:** No state check or lock on refund operations.
- **Solution:** State machine on the order (only `Paid → Refunding` allowed), optimistic concurrency with row versioning, and idempotency keys to the gateway.
- **Azure:** Azure SQL (rowversion), Durable Functions, Key Vault (gateway credentials).

### 16. Checkout slow due to synchronous downstream calls
- **Problem:** Checkout took 8+ seconds and timed out on mobile.
- **Root cause:** API synchronously called email, invoice, analytics, and loyalty services.
- **Solution:** Keep only payment and order creation synchronous; publish an event and process the rest asynchronously.
- **Azure:** Service Bus topics, Azure Functions, Event Grid.

---

## Series 3: Performance & Scalability

### 17. API slow under peak traffic
- **Problem:** Response times went from 200 ms to 10 s at peak hours.
- **Root cause:** Every request hit the database for the same product data.
- **Solution:** Cache-aside for read-heavy data with TTLs and event-based invalidation.
- **Azure:** Azure Cache for Redis, Azure Front Door caching, Application Insights.

### 18. Cache stampede after cache expiry
- **Problem:** Database CPU hit 100% every time a popular key expired.
- **Root cause:** Thousands of requests missed the cache at the same moment and all queried the DB.
- **Solution:** Randomized TTLs, request coalescing with a short lock, and background refresh before expiry.
- **Azure:** Azure Cache for Redis, Azure Functions (refresh jobs).

### 19. Auto-scale too slow for traffic spikes
- **Problem:** A marketing push notification caused a spike; the app crashed before new instances started.
- **Root cause:** Reactive CPU-based scaling with slow cold starts.
- **Solution:** Scheduled pre-scaling before campaigns, event-driven scaling on queue length, and always-ready instances.
- **Azure:** App Service autoscale (scheduled rules), Container Apps / KEDA, Azure Functions Flex Consumption (always-ready).

### 20. Azure Functions cold start delays
- **Problem:** First request after idle took 10+ seconds.
- **Root cause:** Consumption plan scaling to zero.
- **Solution:** Use Premium or Flex Consumption with pre-warmed instances; reduce package size and startup work.
- **Azure:** Azure Functions Premium / Flex Consumption.

### 21. SNAT port exhaustion causing random outbound failures
- **Problem:** Intermittent timeouts when calling external APIs.
- **Root cause:** New `HttpClient` created per request, exhausting outbound SNAT ports.
- **Solution:** Reuse connections via `IHttpClientFactory`; add a NAT Gateway for more outbound ports.
- **Azure:** Azure NAT Gateway, App Service VNet integration, App Service diagnostics.

### 22. Large file uploads failing
- **Problem:** Uploads over 100 MB failed on mobile networks.
- **Root cause:** Files streamed through the API server with request size and timeout limits.
- **Solution:** Upload directly to storage using SAS tokens with chunked, resumable block uploads.
- **Azure:** Blob Storage (block blobs), SAS tokens, Event Grid (upload-complete trigger).

### 23. Slow page loads for users in other countries
- **Problem:** Users in Europe waited 3–4 seconds while Malaysian users were fast.
- **Root cause:** App hosted in a single Asia region; static assets served from origin.
- **Solution:** Serve static content from the edge; deploy read replicas or additional regions for APIs.
- **Azure:** Azure Front Door, Cosmos DB multi-region, Azure SQL geo-replication.

### 24. Noisy tenant affecting all customers
- **Problem:** One large customer's batch import slowed the platform for everyone.
- **Root cause:** Shared resources with no per-tenant limits.
- **Solution:** Per-tenant rate limits and quotas, separate queues for heavy workloads, and tier-based isolation.
- **Azure:** API Management (per-tenant policies), Service Bus, Azure SQL elastic pools.

---

## Series 4: Database & Data Consistency

### 25. Database deadlocks during peak hours
- **Problem:** Transactions failing with deadlock errors.
- **Root cause:** Long transactions updating tables in different orders; missing indexes caused wide locks.
- **Solution:** Consistent update order, shorter transactions, proper indexes, and retry policies for transient errors.
- **Azure:** Azure SQL (Query Store, automatic tuning), Application Insights.

### 26. Cosmos DB throttling (429 errors)
- **Problem:** Requests failing with "Request rate too large."
- **Root cause:** Hot partition key (e.g., `country`) concentrating traffic on one partition.
- **Solution:** Redesign the partition key with high cardinality (e.g., `userId`), use hierarchical partition keys, and enable autoscale throughput.
- **Azure:** Cosmos DB (autoscale RU/s, hierarchical partition keys, Insights).

### 27. Reports slowing down the production database
- **Problem:** Month-end reports made the main app unusable.
- **Root cause:** Heavy analytical queries running on the transactional database.
- **Solution:** Offload reads to replicas and move analytics to a separate store.
- **Azure:** Azure SQL read replicas, Microsoft Fabric Mirroring, Azure Synapse Link for Cosmos DB.

### 28. Stale data shown after update
- **Problem:** Users updated their profile but still saw old data.
- **Root cause:** Cache not invalidated and reads going to lagging replicas.
- **Solution:** Invalidate cache on write, read-your-writes for the updating user, and session consistency.
- **Azure:** Azure Cache for Redis, Cosmos DB (session consistency), Event Grid.

### 29. Accidental data deletion in production
- **Problem:** A script deleted thousands of customer records.
- **Root cause:** Direct production access with no safeguards.
- **Solution:** Point-in-time restore, soft delete, least-privilege access, and just-in-time admin rights.
- **Azure:** Azure SQL point-in-time restore, Blob soft delete, Entra Privileged Identity Management.

### 30. Database migration caused downtime
- **Problem:** A schema change locked a large table for 40 minutes.
- **Root cause:** Blocking `ALTER TABLE` on a hot table during business hours.
- **Solution:** Expand-and-contract migrations, online index operations, and deployment slots for zero-downtime releases.
- **Azure:** Azure SQL (online operations), App Service deployment slots, Azure DevOps pipelines.

### 31. Storage costs growing uncontrolled
- **Problem:** Blob storage bill doubled every few months.
- **Root cause:** Old logs, backups, and media kept in the hot tier forever.
- **Solution:** Lifecycle policies to move data to cool/cold/archive tiers and delete after retention.
- **Azure:** Blob Storage lifecycle management, Cost Management.

---

## Series 5: Messaging & Integration

### 32. Messages lost when the consumer crashed
- **Problem:** Some orders never reached the fulfillment system.
- **Root cause:** Messages removed from the queue before processing completed.
- **Solution:** Peek-lock mode: complete the message only after successful processing.
- **Azure:** Service Bus (peek-lock), Azure Functions.

### 33. Poison message blocking the queue
- **Problem:** One malformed message kept failing and stopped processing.
- **Root cause:** Infinite retries with no dead-letter handling.
- **Solution:** Max delivery count, dead-letter queue, alerts, and a replay tool after fixing data.
- **Azure:** Service Bus dead-letter queues, Azure Monitor alerts, Logic Apps.

### 34. Messages processed out of order
- **Problem:** "OrderCancelled" processed before "OrderCreated."
- **Root cause:** Parallel consumers with no ordering guarantee.
- **Solution:** Session-based ordering per order ID, or partition by key.
- **Azure:** Service Bus sessions, Event Hubs partition keys.

### 35. Third-party API outage breaking the whole app
- **Problem:** The SMS provider went down and the registration flow failed completely.
- **Root cause:** Synchronous dependency with no timeout, retry limit, or fallback.
- **Solution:** Timeouts, retries with backoff, circuit breaker, queue-based retry, and a secondary provider.
- **Azure:** Polly / .NET resilience, Service Bus, Azure Communication Services (fallback SMS).

### 36. Retry storm overloading a recovering service
- **Problem:** After a short outage, retries from all clients crashed the service again.
- **Root cause:** Immediate retries without backoff or jitter.
- **Solution:** Exponential backoff with jitter and circuit breakers; limit concurrency at the gateway.
- **Azure:** API Management (retry and rate-limit policies), Polly.

### 37. Integrating with a slow legacy on-prem system
- **Problem:** Cloud app timed out waiting for the on-prem ERP.
- **Root cause:** Synchronous calls over VPN to a slow system.
- **Solution:** Asynchronous request-reply pattern with a queue and status polling or callbacks.
- **Azure:** Service Bus, Logic Apps, Azure Relay / Hybrid Connections, Durable Functions.

---

## Series 6: Real-Time & Mobile

### 38. Chat messages delayed or dropped at scale
- **Problem:** Messages arrived late when active users crossed 50k.
- **Root cause:** Self-hosted WebSocket server with no backplane across instances.
- **Solution:** Managed real-time service with groups and connection management.
- **Azure:** Azure Web PubSub or Azure SignalR Service, Cosmos DB.

### 39. Push notifications not delivered
- **Problem:** Many Android and iOS users never received notifications.
- **Root cause:** Expired device tokens and direct calls to FCM/APNs with no tracking.
- **Solution:** Central registration management, token refresh on app launch, and delivery telemetry.
- **Azure:** Azure Notification Hubs, Application Insights.

### 40. Offline mobile data conflicts
- **Problem:** Data changed offline overwrote newer server data on sync.
- **Root cause:** No versioning or conflict detection.
- **Solution:** Version numbers or ETags per record, delta sync, and conflict resolution rules.
- **Azure:** Cosmos DB (ETags, change feed), App Service APIs.

### 41. Live location tracking overloading the database
- **Problem:** Driver location updates every 3 seconds overwhelmed the DB.
- **Root cause:** Every GPS ping written directly to the relational database.
- **Solution:** Stream pings through an ingestion service, keep the latest location in cache, and store history in bulk.
- **Azure:** Event Hubs, Azure Cache for Redis (geo), Azure Data Explorer, Azure Maps.

### 42. Mobile app broken after API change
- **Problem:** Older app versions crashed after a backend release.
- **Root cause:** Breaking API changes with no versioning.
- **Solution:** API versioning, backward-compatible changes, and a force-update check for old clients.
- **Azure:** API Management (versions and revisions), App Configuration (minimum app version).

---

## Series 7: Resilience & Disaster Recovery

### 43. Full outage during a regional failure
- **Problem:** The entire app went down when one Azure region had an incident.
- **Root cause:** Single-region deployment.
- **Solution:** Multi-region active-passive or active-active with health-based routing and data replication.
- **Azure:** Azure Front Door, Azure SQL failover groups, Cosmos DB multi-region, geo-redundant storage.

### 44. Zone failure taking down VMs
- **Problem:** Services failed when a datacenter in the region had issues.
- **Root cause:** All instances in one availability zone.
- **Solution:** Zone-redundant deployments for compute, databases, and storage.
- **Azure:** Availability Zones, zone-redundant App Service, AKS, Azure SQL, ZRS storage.

### 45. Backups existed but restore failed
- **Problem:** During an incident, the team discovered backups could not be restored in time.
- **Root cause:** Restores never tested; RTO unknown.
- **Solution:** Define RTO/RPO, automate backups, and run regular restore drills.
- **Azure:** Azure Backup, Azure Site Recovery, Azure SQL long-term retention.

### 46. Ransomware risk on backup data
- **Problem:** Audit found backups could be deleted by a compromised admin account.
- **Root cause:** No immutability or separation of duties.
- **Solution:** Immutable backups, soft delete, and multi-user authorization for critical operations.
- **Azure:** Azure Backup (immutable vaults, multi-user authorization), Blob immutability policies.

### 47. Cascading failure from one slow microservice
- **Problem:** A slow recommendations service made the whole homepage fail.
- **Root cause:** Thread pools exhausted waiting on one dependency.
- **Solution:** Timeouts, bulkheads, circuit breakers, and graceful degradation (show the page without recommendations).
- **Azure:** AKS, Polly, Application Insights dependency tracking.

---

## Series 8: Deployment, Monitoring & Cost

### 48. Bad deployment took production down
- **Problem:** A release with a config bug caused a 2-hour outage.
- **Root cause:** Direct deployment to production with no staging or rollback.
- **Solution:** Deployment slots with warm-up and swap, canary releases, and instant rollback.
- **Azure:** App Service deployment slots, Azure DevOps / GitHub Actions, AKS progressive delivery.

### 49. Issues found by customers before the team
- **Problem:** Customers reported errors hours before engineers noticed.
- **Root cause:** No alerting or distributed tracing.
- **Solution:** End-to-end telemetry, SLO-based alerts, and availability tests.
- **Azure:** Application Insights, Azure Monitor alerts, availability tests, Managed Grafana.

### 50. Unable to trace a request across microservices
- **Problem:** Debugging a failed order took days across 12 services.
- **Root cause:** No correlation IDs or distributed tracing.
- **Solution:** OpenTelemetry instrumentation with correlation IDs propagated through all services and queues.
- **Azure:** Application Insights (application map, transaction search), Azure Monitor OpenTelemetry.

### 51. Feature release needed an emergency rollback
- **Problem:** A new feature caused errors, but rollback required a full redeploy.
- **Root cause:** Features tied directly to deployments.
- **Solution:** Feature flags to turn features on or off instantly, with gradual rollout by percentage.
- **Azure:** Azure App Configuration (Feature Manager).

### 52. Cloud bill spiked unexpectedly
- **Problem:** Monthly cost jumped 3x without any traffic growth.
- **Root cause:** Forgotten test resources, oversized VMs, and verbose logging.
- **Solution:** Budgets and alerts, tagging, rightsizing, reserved capacity, and log sampling.
- **Azure:** Cost Management + Billing, Azure Advisor, Azure Policy (tags), Log Analytics commitment tiers.

---

## Series 9: AI & GenAI in Production

### 53. Chatbot giving wrong or made-up answers
- **Problem:** GenAI assistant answered confidently with incorrect information.
- **Root cause:** LLM answering from general knowledge without company data.
- **Solution:** Retrieval-Augmented Generation (RAG) with hybrid search, citations, and evaluation before release.
- **Azure:** Azure OpenAI / Microsoft Foundry, Azure AI Search (vector + hybrid), Foundry evaluations.

### 54. Azure OpenAI rate limits during peak usage
- **Problem:** Users saw 429 errors when many used the AI feature at once.
- **Root cause:** A single deployment with limited tokens-per-minute quota.
- **Solution:** Load balance across deployments and regions, semantic caching for repeated prompts, and token limits per user.
- **Azure:** API Management (AI gateway, token limit and semantic caching policies), Azure OpenAI provisioned throughput, Azure Cache for Redis.

### 55. Prompt injection and unsafe outputs
- **Problem:** Users tricked the chatbot into revealing system instructions and producing harmful content.
- **Root cause:** No input or output filtering.
- **Solution:** Content filters, prompt shields, grounding checks, and least-privilege access for tools the AI can call.
- **Azure:** Azure AI Content Safety (Prompt Shields, groundedness detection), Entra ID, API Management.

---

## Common Fix Patterns

| Pattern | Solves | Azure |
|---------|--------|-------|
| Idempotency keys | Duplicate orders, double payments | Redis, SQL unique constraints |
| Transactional outbox | Lost events, dual writes | SQL, Cosmos DB change feed |
| Saga | Distributed transaction rollback | Durable Functions |
| Cache-aside | Slow reads, DB overload | Azure Cache for Redis |
| Circuit breaker + retry with jitter | Cascading failures, retry storms | Polly, API Management |
| Queue-based load leveling | Traffic spikes | Service Bus, Event Hubs |
| Dead-letter queue | Poison messages | Service Bus |
| Strangler Fig | Legacy migration | API Management, Front Door |
| Deployment slots + feature flags | Risky releases | App Service, App Configuration |
| Multi-region + health routing | Regional outages | Front Door, Cosmos DB, SQL failover groups |
