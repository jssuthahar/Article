# Azure Real-World Architecture Series

Real-world problems, solved with Azure. Each article takes a problem that happens in production (duplicate orders, failed payments, bots, outages) and shows how to solve it using Azure services.

## Article format

Every use case in every article follows the same structure:

1. **The problem**: what went wrong or what the business needs
2. **Requirements**: the numbers and constraints
3. **Azure solution**: the services and how they fit together
4. **How it works**: the key mechanism, with a diagram
5. **Failure handling**: what happens when parts break
6. **Key lesson**: the reusable pattern

## Status legend

| Status | Meaning |
| --- | --- |
| ✅ Drafted | Article written |
| 📝 Planned | Title ready, not yet written |

---

## Part 1: Foundation Series

### Series 1: Real-World Azure Architecture: 8 Use Case Problems and Their Solutions ✅

| # | Title | Main Azure services |
| --- | --- | --- |
| 1 | E-commerce flash sale crashes and oversells stock | Front Door, Redis, Service Bus, AKS |
| 2 | Ride-hailing app assigns one driver to two passengers | Event Hubs, Redis, Azure Maps, Cosmos DB |
| 3 | Bank fund transfer loses or duplicates transactions | Azure SQL, Service Bus, API Management |
| 4 | Concert ticket booking double-sells seats under 1 million users | Redis, Azure SQL, Front Door |
| 5 | Legacy Java app must leave the datacenter in 3 months | App Service, Redis, Key Vault, Azure Migrate |
| 6 | Fleet tracking for 10,000 trucks with geofence alerts | IoT Edge, IoT Hub, Stream Analytics |
| 7 | Multi-tenant SaaS where one tenant slows everyone down | Azure SQL elastic pools, Front Door, API Management |
| 8 | Recovering from a ransomware attack within 24 hours | Azure Backup, Entra PIM, Site Recovery |

### Series 2: Authentication on Azure: 9 Real-World Use Cases from Login to Anonymous APIs ✅

| # | Title | Main Azure services |
| --- | --- | --- |
| 1 | Customer register and login for a shopping website | Entra External ID, API Management |
| 2 | Product search API called without login: how it is still protected | Front Door WAF, API Management |
| 3 | Guest cart merged into the user's account after login | Cosmos DB, Entra External ID |
| 4 | Mobile app login that stays signed in securely | Entra External ID, MSAL |
| 5 | Step-up authentication before payment or password change | Entra External ID, API Management |
| 6 | Microservices calling each other without passwords | Managed identities, Workload ID, Azure RBAC |
| 7 | Partner companies calling your API | Entra ID client credentials, API Management mTLS |
| 8 | Employee admin portal with least-privilege access | Entra ID, Conditional Access, PIM |
| 9 | Stolen token and "log out from all devices" | Microsoft Graph, Redis |

---

## Part 2: "When Things Go Wrong" Series

Production failures and how to prevent them.

### Series 3: When Orders Go Wrong 📝

| # | Title | Azure fix |
| --- | --- | --- |
| 1 | Duplicate order: user double-clicks "Place order" | Idempotency key, Azure SQL unique constraint |
| 2 | Order created but payment never happened | Saga pattern, Service Bus |
| 3 | Payment taken but no order created | Transactional outbox, Durable Functions reconciliation |
| 4 | Overselling the last item | Redis atomic decrement, Azure SQL conditional update |
| 5 | Price changed during checkout | Redis price lock with expiry |
| 6 | Cart lost after login | Guest cart merge in Cosmos DB |
| 7 | Coupon used twice in two browser tabs | Redis `SETNX`, Azure SQL unique constraint |
| 8 | Order stuck in "Processing" forever | Service Bus dead-letter queue, Durable Functions timeouts |

### Series 4: When Payments Fail 📝

| # | Title | Azure fix |
| --- | --- | --- |
| 1 | Payment failed but money was deducted | Payment status query, webhook reconciliation |
| 2 | Customer charged twice after a retry | Idempotency key to payment gateway |
| 3 | Payment gateway down during a sale | Circuit breaker, Service Bus queue, secondary gateway |
| 4 | Payment webhook arrives before the order is saved | Service Bus with delayed retry |
| 5 | Fake payment webhook claims "paid" | HMAC signature, Key Vault, API Management IP filtering |
| 6 | Refund issued twice | Refund idempotency, Logic Apps approval |
| 7 | Subscription renewal failed silently | Durable Functions retry schedule, email reminders |

### Series 5: When Notifications Misbehave 📝

| # | Title | Azure fix |
| --- | --- | --- |
| 1 | Customer receives the same email 5 times | Service Bus duplicate detection |
| 2 | OTP SMS never arrives | Email fallback, Communication Services delivery reports |
| 3 | "Order confirmed" email sent for a failed order | Send only from committed outbox events |
| 4 | Push notification flood at 3 AM | Rate limits, quiet hours, App Configuration kill switch |

### Series 6: When Login and Accounts Break 📝

| # | Title | Azure fix |
| --- | --- | --- |
| 1 | Account taken over by credential stuffing | Entra External ID MFA, Front Door WAF |
| 2 | Password reset link reused | Single-use tokens with short expiry |
| 3 | User logged out constantly | Refresh tokens with MSAL |
| 4 | Stolen phone still logged in | Session revocation, Redis revocation list |
| 5 | Duplicate accounts for the same person | Account linking in Entra External ID |

### Series 7: When Data Gets Out of Sync 📝

| # | Title | Azure fix |
| --- | --- | --- |
| 1 | Search shows an item that's out of stock | Cosmos DB change feed to Azure AI Search |
| 2 | Two users edit the same record, one change lost | ETags in Cosmos DB, rowversion in Azure SQL |
| 3 | Report numbers don't match the dashboard | Data Factory, single source of truth |
| 4 | Deleted data comes back | Soft delete, Event Grid cache invalidation |
| 5 | Time zone bug books the wrong slot | UTC storage in Azure SQL |

### Series 8: When Traffic Breaks the System 📝

| # | Title | Azure fix |
| --- | --- | --- |
| 1 | Website crashes on sale day | Front Door, waiting room, Service Bus, KEDA |
| 2 | Cache down, database overwhelmed | Zone-redundant Redis, request coalescing |
| 3 | One slow API makes the whole app slow | Timeouts, circuit breakers, bulkheads |
| 4 | Cold start delays the first request | Functions Premium plan |
| 5 | Bots scrape all prices | Front Door WAF bot rules, API Management rate limits |

### Series 9: When File Uploads Go Wrong 📝

| # | Title | Azure fix |
| --- | --- | --- |
| 1 | Large upload fails at 95% | Chunked uploads to Blob Storage |
| 2 | User uploads malware | Defender for Storage malware scanning |
| 3 | Private files accessible by URL | Private containers, short-lived SAS tokens |

### Series 10: When Operations Fail 📝

| # | Title | Azure fix |
| --- | --- | --- |
| 1 | New release breaks production | Canary in AKS, App Service deployment slots |
| 2 | Certificate expired, site down | Key Vault auto-renewal, expiry alerts |
| 3 | Secret leaked to GitHub | Managed identities, Key Vault, secret scanning |
| 4 | Scheduled job ran twice | Durable Functions singleton, blob lease |
| 5 | Scheduled job didn't run at all | Durable Functions timers, missed-run alerts |
| 6 | Region outage stops the business | Front Door failover, Azure SQL failover groups |
| 7 | Backups deleted by an attacker | Immutable Azure Backup vaults |
| 8 | Azure bill doubled overnight | Budgets, cost alerts, autoscale limits |

### Series 11: When Bookings Collide 📝

| # | Title | Azure fix |
| --- | --- | --- |
| 1 | Same seat or room booked twice | Redis hold with expiry, Azure SQL unique constraint |
| 2 | Held seat never released | Redis key expiry |
| 3 | Waitlist user misses a freed slot | Event Grid, Service Bus notifications |

### Series 12: When Delivery Tracking Goes Wrong 📝

| # | Title | Azure fix |
| --- | --- | --- |
| 1 | Driver assigned to two rides | Redis distributed lock |
| 2 | Order status arrives out of order | Event Hubs partitioning, state machine validation |

---

## Part 3: "How Does It Work?" Series

Everyday features explained, built on Azure.

### Series 13: Security and Identity 📝

| # | Title | Main Azure services |
| --- | --- | --- |
| 1 | How does "Forgot password" work safely? | Entra External ID, Communication Services |
| 2 | How do OTP and SMS verification work at scale? | Communication Services, Redis |
| 3 | How do websites stop bots and scrapers? | Front Door WAF, API Management |
| 4 | Where should secrets live? | Key Vault, managed identities |
| 5 | How does "Sign in with Google" actually work? | Entra External ID |
| 6 | How do you secure file uploads? | Blob Storage, Defender for Storage |
| 7 | How do webhooks prove they're genuine? | Functions, Key Vault |

### Series 14: APIs and Integration 📝

| # | Title | Main Azure services |
| --- | --- | --- |
| 1 | What happens when you click "Pay Now"? | Service Bus, Azure SQL |
| 2 | How do API versions work without breaking apps? | API Management |
| 3 | How does rate limiting work? | API Management, Front Door |
| 4 | How do mobile apps work offline? | Cosmos DB, Functions |
| 5 | How do push notifications reach millions of phones? | Notification Hubs |
| 6 | How do uploads work for large files? | Blob Storage |

### Series 15: Data and Storage 📝

| # | Title | Main Azure services |
| --- | --- | --- |
| 1 | How does "Search as you type" work? | Azure AI Search, Redis |
| 2 | How does a website show "Only 3 left in stock"? | Redis, Cosmos DB |
| 3 | How do "Recently viewed" and "Wishlist" work? | Cosmos DB TTL |
| 4 | Where do old data and logs go? | Blob lifecycle, Log Analytics |
| 5 | How do you delete a user's data completely? | Purview, Functions |
| 6 | How do you choose between SQL and Cosmos DB? | Azure SQL, Cosmos DB |
| 7 | How do caches go wrong? | Azure Cache for Redis |

### Series 16: Performance and Scale 📝

| # | Title | Main Azure services |
| --- | --- | --- |
| 1 | How does a website load fast worldwide? | Front Door CDN |
| 2 | How does autoscaling decide when to scale? | KEDA, App Service |
| 3 | Why is my API slow? | Application Insights |
| 4 | How do background jobs work? | Functions, Container Apps jobs |
| 5 | How do scheduled tasks run exactly once? | Durable Functions |

### Series 17: Reliability and Operations 📝

| # | Title | Main Azure services |
| --- | --- | --- |
| 1 | What happens when an Azure region goes down? | Front Door, Site Recovery |
| 2 | How do you deploy without downtime? | App Service slots, AKS |
| 3 | How do you know something broke before customers do? | Azure Monitor |
| 4 | How do you handle a failed dependency? | Retry, circuit breaker, API Management |
| 5 | How does database backup and restore really work? | Azure SQL |
| 6 | How do you change a database without downtime? | Azure SQL |

### Series 18: Real-World Product Features 📝

| # | Title | Main Azure services |
| --- | --- | --- |
| 1 | How does "Track my order" work? | Event Grid, Web PubSub |
| 2 | How does live chat support work? | Web PubSub, Cosmos DB |
| 3 | How do coupons and promo codes work? | Redis, Azure SQL |
| 4 | How does "Book appointment" avoid double booking? | Azure SQL, Redis |
| 5 | How does "Refer a friend" work? | Cosmos DB, Functions |
| 6 | How do email receipts and invoices get generated? | Functions, Communication Services |
| 7 | How does a leaderboard update in real time? | Redis sorted sets |
| 8 | How do QR code payments and tickets work? | Functions, IoT Edge |

### Series 19: Cost and Architecture Decisions 📝

| # | Title | Main Azure services |
| --- | --- | --- |
| 1 | Why is my Azure bill so high? | Cost Management, Azure Advisor |
| 2 | Serverless vs containers vs VMs: which one when? | Functions, Container Apps, AKS, VMs |
| 3 | Monolith vs microservices: when to split? | AKS, API Management |
| 4 | How do you design a multi-tenant SaaS? | Azure SQL elastic pools, deployment stamps |

---

## Part 4: Deep-Dive Troubleshooting Series

Platform-level problems in networking, Kubernetes, databases, and operations.

### Series 20: When Networking Breaks 📝

| # | Title | Azure fix |
| --- | --- | --- |
| 1 | Private endpoint added, app can't connect anymore | Private DNS zones, DNS Private Resolver |
| 2 | Users bypass Front Door and hit the backend directly | Front Door Private Link, origin access restrictions |
| 3 | Outbound calls fail randomly under load (SNAT exhaustion) | NAT Gateway |
| 4 | AKS runs out of IP addresses | Azure CNI Overlay, subnet planning |
| 5 | VPN to on-premises drops and the app fails | ExpressRoute with VPN backup |
| 6 | Servers can reach any website on the internet | Azure Firewall egress rules, forced tunneling |
| 7 | Two teams' VNets use the same IP ranges | IP address planning, Virtual WAN, Azure IPAM |
| 8 | Traffic between regions is slow and expensive | Global VNet peering, data transfer design |

### Series 21: When Kubernetes Misbehaves 📝

| # | Title | Azure fix |
| --- | --- | --- |
| 1 | Pods keep restarting with OOMKilled | Resource requests and limits, Container Insights |
| 2 | ImagePullBackOff after locking down the registry | ACR private endpoint, AKS-ACR integration |
| 3 | Cluster upgrade breaks the application | Deprecated APIs, PodDisruptionBudgets, upgrade channels |
| 4 | Pods stuck in Pending during a traffic spike | Cluster autoscaler, VM quota, node pools |
| 5 | Ingress returns intermittent 502 errors | Readiness probes, timeouts, Application Gateway for Containers |
| 6 | Secrets visible to anyone with cluster access | Key Vault CSI driver, Workload ID |
| 7 | One team's pods starve everyone else | Namespaces, resource quotas, separate node pools |
| 8 | Persistent volume won't attach after zone failure | Zone-redundant storage, StatefulSet design |

### Series 22: When Databases Struggle 📝

| # | Title | Azure fix |
| --- | --- | --- |
| 1 | "Too many connections" errors under load | Connection pooling, Azure SQL limits |
| 2 | One report query slows the whole database | Read replicas, Query Store, workload separation |
| 3 | Cosmos DB returns 429 "Too Many Requests" | RU planning, autoscale, retry policy |
| 4 | Hot partition: one key gets all the traffic | Partition key design, synthetic keys |
| 5 | Deadlocks during peak hours | Transaction design, indexing, Query Store |
| 6 | Read replica shows stale data | Replica lag handling, read-your-writes routing |
| 7 | Database grows to 10 TB and backups take forever | Azure SQL Hyperscale |
| 8 | Accidental DELETE without a WHERE clause | Point-in-time restore, ledger tables |

### Series 23: When Messaging Goes Wrong 📝

| # | Title | Azure fix |
| --- | --- | --- |
| 1 | Poison message blocks the whole queue | Service Bus dead-letter queue, max delivery count |
| 2 | Messages processed out of order | Service Bus sessions, Event Hubs partition keys |
| 3 | Event Hubs consumers fall hours behind | Partition scaling, checkpointing, lag alerts |
| 4 | Event storm: one change triggers 1 million events | Event Grid filtering, batching, throttling |
| 5 | Consumer crashes and messages are lost | Peek-lock, complete after processing |
| 6 | Queue fills up during an outage | Queue sizing, TTL, backpressure |

### Series 24: When Migration Hits Surprises 📝

| # | Title | Azure fix |
| --- | --- | --- |
| 1 | SQL Server features not supported in Azure SQL | SQL Managed Instance, compatibility assessment |
| 2 | File server with 20 TB and complex permissions | Azure Files, Azure File Sync |
| 3 | Moving 100 TB when the network is too slow | Azure Data Box |
| 4 | App uses Windows authentication on IIS | Entra ID, App Service, hybrid identity |
| 5 | Cutover weekend runs out of time | Rehearsal migrations, parallel run, rollback plan |
| 6 | Hardcoded server names and IP addresses everywhere | DNS aliases, App Configuration |
| 7 | Legacy Windows services and scheduled tasks | Container Apps jobs, Functions, Azure VMs |
| 8 | On-premises Active Directory users need Azure access | Entra Connect, hybrid identity |

### Series 25: When Governance Is Missing 📝

| # | Title | Azure fix |
| --- | --- | --- |
| 1 | Developers create public storage accounts | Azure Policy deny rules |
| 2 | Nobody knows who owns 3,000 resources | Mandatory tags, Resource Graph |
| 3 | Dev environments run all weekend | Auto-shutdown, start/stop automation |
| 4 | Orphaned disks and IPs cost money for months | Azure Advisor, Resource Graph queries |
| 5 | Someone changed production in the portal | Azure Policy, resource locks, drift detection |
| 6 | New team needs a subscription today | Subscription vending, landing zone automation |
| 7 | Resources deployed in unapproved regions | Allowed locations policy |

### Series 26: When DevOps Pipelines Fail 📝

| # | Title | Azure fix |
| --- | --- | --- |
| 1 | Works in dev, fails in production | Environment drift, Bicep |
| 2 | Two engineers deploy at the same time | Deployment locks, GitHub environments |
| 3 | Pipeline has production secrets in plain text | OIDC federation, Key Vault |
| 4 | Database change can't be rolled back | Expand-contract migrations |
| 5 | Builds take 45 minutes | Caching, parallel jobs, self-hosted runners |
| 6 | Terraform state file corrupted or conflicting | Remote state in Blob Storage with locking |

### Series 27: When Compliance Comes Knocking 📝

| # | Title | Azure fix |
| --- | --- | --- |
| 1 | Auditor asks who accessed customer data last year | Log Analytics retention, Microsoft Sentinel |
| 2 | Card data found in application logs | Data masking, PCI DSS scope reduction |
| 3 | Customer demands their own encryption keys | Customer-managed keys in Key Vault |
| 4 | Data must stay in Malaysia or Singapore | Region selection, Azure Policy |
| 5 | Prove that backups actually restore | Restore testing, Azure Backup reports |
| 6 | Regulator requires quarterly DR drills | Site Recovery test failover, Chaos Studio |

### Series 28: When Monitoring Fails You 📝

| # | Title | Azure fix |
| --- | --- | --- |
| 1 | Log Analytics bill bigger than the app | Basic and Auxiliary logs, sampling |
| 2 | 500 alerts a day, nobody reads them | Alert tuning, action groups, severity levels |
| 3 | Can't trace one request across 10 services | Distributed tracing, correlation IDs |
| 4 | Outage found by customers on social media | Availability tests, SLO-based alerts |
| 5 | Dashboard shows green while users see errors | User-facing metrics instead of server health |

---

## Part 5: Analytics, Marketing, and Tracking Series

How businesses measure users, run campaigns, and track results on Azure.

### Series 29: Web and App Analytics 📝

| # | Title | Main Azure services |
| --- | --- | --- |
| 1 | How do you track every click on a website with 1 million daily visitors? | Event Hubs, Azure Data Explorer |
| 2 | How do you build a real-time "users online now" dashboard? | Event Hubs, Stream Analytics, Redis |
| 3 | Why are 40% of your page views from bots? | Front Door WAF logs, bot filtering in Azure Data Explorer |
| 4 | How do you track users across web and mobile app? | Cosmos DB identity mapping, Event Hubs |
| 5 | How does funnel analysis find where users drop off? | Azure Data Explorer, Microsoft Fabric |
| 6 | How do you collect analytics from mobile apps that go offline? | Application Insights, local batching, Event Hubs |
| 7 | How do you measure page speed from real users? | Application Insights browser monitoring |
| 8 | How do you keep 3 years of clickstream data cheaply? | ADLS Gen2, lifecycle tiers, Fabric |

### Series 30: Marketing Campaigns 📝

| # | Title | Main Azure services |
| --- | --- | --- |
| 1 | How do you send a campaign email to 5 million customers? | Communication Services Email, Service Bus, Functions |
| 2 | How do you handle unsubscribe and opt-out correctly? | Cosmos DB consent store, Communication Services |
| 3 | Campaign landing page crashes after a TV ad | Static Web Apps, Front Door CDN |
| 4 | How do you run A/B tests on a website? | App Configuration feature flags, Application Insights |
| 5 | How do you target offers to customer segments? | Microsoft Fabric, Azure SQL, Data Factory |
| 6 | How do you send SMS campaigns without spamming? | Communication Services SMS, frequency caps in Redis |
| 7 | How do you schedule campaigns across time zones? | Service Bus scheduled messages, Durable Functions |
| 8 | How do you stop a campaign that was sent by mistake? | App Configuration kill switch, Service Bus purge |

### Series 31: Tracking and Attribution 📝

| # | Title | Main Azure services |
| --- | --- | --- |
| 1 | How do UTM links tell you which campaign brought the sale? | Front Door, Event Hubs, Azure Data Explorer |
| 2 | How does email open and click tracking work? | Functions, Blob Storage tracking pixel, Event Hubs |
| 3 | How do short links track clicks by country and device? | Functions, Cosmos DB, Event Hubs |
| 4 | How do you track conversions server-side when browsers block trackers? | API Management, Functions, Event Hubs |
| 5 | Same event counted twice: how do you deduplicate? | Event IDs, Azure Data Explorer deduplication |
| 6 | How do you track referral and affiliate sales fairly? | Azure SQL, Functions, fraud rules |
| 7 | How do you record user consent before tracking? | Cosmos DB consent store, API Management |
| 8 | How do you delete a user's tracking data on request? | Azure Data Explorer purge, Purview |

### Series 32: Business Reporting and Insights 📝

| # | Title | Main Azure services |
| --- | --- | --- |
| 1 | How do you build a daily sales report without slowing production? | Azure SQL read replica, Data Factory, Fabric |
| 2 | How do you show live sales during a mega sale? | Event Hubs, Stream Analytics, Azure Data Explorer dashboards |
| 3 | How do you calculate customer lifetime value? | Microsoft Fabric, Azure SQL |
| 4 | How do you measure marketing ROI per channel? | Fabric, Data Factory, Power BI |
| 5 | How do you run cohort analysis on user retention? | Azure Data Explorer, Fabric |
| 6 | How do you give each business customer their own report? | Power BI Embedded, row-level security |
| 7 | How do you combine data from 10 systems into one view? | Data Factory, Fabric OneLake |
| 8 | How do you make sure report numbers are trusted? | Purview lineage, data quality checks |

---

## Part 6: Azure Service Deep-Dive Series

One series per Azure service. Each takes a single service and shows the real-world problems it solves and the problems it causes when misconfigured.

This part grew out of Series 1, Use case 1 (the flash sale). That one design uses Front Door, Redis, Service Bus, and AKS together. Here, each service gets its own article:

| Flash sale problem | Service that solves it | Deep-dive series |
| --- | --- | --- |
| 50x traffic spike and bots | Front Door | Series 33 |
| Overselling the last item | Azure Cache for Redis | Series 34 |
| Orders arriving faster than they can be processed | Service Bus | Series 35 |
| Workers not scaling in time | AKS | Series 36 |

### Series 33: Azure Front Door in the Real World 📝

| # | Title | Front Door feature |
| --- | --- | --- |
| 1 | Flash sale traffic spike: serve 90% of requests from the edge | Caching rules, query string caching |
| 2 | Old prices shown after a price change | Cache purge, short TTL for dynamic pages |
| 3 | Bots buy all the stock in seconds | WAF bot manager, rate-limit rules |
| 4 | Attackers bypass Front Door and hit the origin directly | Private Link origins, `X-Azure-FDID` header check |
| 5 | Region goes down during the sale | Health probes, automatic origin failover |
| 6 | Health probe misconfigured, traffic flips between regions | Probe path design, probe frequency |
| 7 | Sale open only to customers in Malaysia and Singapore | WAF geo-filtering rules |
| 8 | 200 brand domains need SSL certificates | Custom domains, managed certificates |

### Series 34: Azure Cache for Redis in the Real World 📝

| # | Title | Redis feature |
| --- | --- | --- |
| 1 | Overselling the last item in stock | Atomic `DECR`, Lua scripts |
| 2 | Cache expires and 10,000 requests hit the database at once | Cache stampede protection, early refresh, locking |
| 3 | One product gets 100,000 requests per second (hot key) | Local in-memory cache, key replication |
| 4 | Redis memory full, user sessions disappear | Eviction policies, separate cache and session instances |
| 5 | Redis failover loses the last few writes | Async replication limits, database as source of truth |
| 6 | Building a fair waiting room for 1 million users | Sorted sets |
| 7 | Users logged out when web servers scale out | Distributed session store |
| 8 | Limiting each user to 5 purchases per sale | Counters with expiry for rate limiting |
| 9 | One huge key slows down every request | Key size design, splitting large values |

### Series 35: Azure Service Bus in the Real World 📝

| # | Title | Service Bus feature |
| --- | --- | --- |
| 1 | Orders arrive faster than the system can process them | Queue-based load leveling |
| 2 | Same order message processed twice | Duplicate detection |
| 3 | One bad message blocks the whole order queue | Dead-letter queue, max delivery count |
| 4 | A customer's order updates processed out of order | Sessions |
| 5 | Retry payment in 5 minutes, not immediately | Scheduled messages, deferral |
| 6 | One "order placed" event needed by 5 services | Topics, subscriptions, filters |
| 7 | Throttling errors at peak sale time | Premium messaging units, partitioning |
| 8 | Message lock expires during slow processing | Lock renewal |
| 9 | Receive one message and send another as one step | Cross-entity transactions |

### Series 36: AKS in the Real World 📝

| # | Title | AKS feature |
| --- | --- | --- |
| 1 | Pods don't scale fast enough when the sale starts | Pre-scaling, overprovisioning, cluster autoscaler |
| 2 | Scale order workers based on queue length | KEDA with Service Bus scaler |
| 3 | Checkout crash takes down the catalog too | Namespaces, resource limits, separate node pools |
| 4 | Deployment during the sale causes errors | Deployment freeze, PodDisruptionBudgets |
| 5 | A node fails and all checkout pods were on it | Availability zones, pod anti-affinity |
| 6 | Node image upgrade starts in the middle of the sale | Planned maintenance windows |
| 7 | One service uses all the CPU on a node | Requests, limits, quality of service classes |

### Series 37: Azure Cosmos DB in the Real World 📝

| # | Title | Cosmos DB feature |
| --- | --- | --- |
| 1 | 429 throttling errors during peak traffic | Autoscale throughput |
| 2 | One partition gets all the traffic | Partition key design |
| 3 | Which consistency level for cart vs catalog? | Consistency levels |
| 4 | Keep search results in sync with the database | Change feed |
| 5 | Two regions update the same record | Multi-region writes, conflict resolution |
| 6 | Bill explodes from cross-partition queries | Query design, indexing policy |
| 7 | Abandoned carts pile up forever | Time to live (TTL) |

### Series 38: Azure SQL in the Real World 📝

| # | Title | Azure SQL feature |
| --- | --- | --- |
| 1 | Prevent overselling with a single SQL statement | Conditional `UPDATE` |
| 2 | "Too many connections" during peak | Connection pooling, service tier limits |
| 3 | Reports slow down the checkout database | Read scale-out replicas |
| 4 | Region failure with minimal data loss | Failover groups |
| 5 | Deadlocks on popular inventory rows | Row locking design, Query Store |
| 6 | Database grows beyond 4 TB | Hyperscale |
| 7 | One long transaction blocks everyone | Blocking analysis, transaction scope |

### Series 39: Azure Event Hubs in the Real World 📝

| # | Title | Event Hubs feature |
| --- | --- | --- |
| 1 | Capture every click during the sale | High-throughput ingestion |
| 2 | How many partitions do you need? | Partition planning |
| 3 | Consumers fall hours behind | Consumer groups, checkpointing, scaling |
| 4 | Save all raw events cheaply | Event Hubs Capture to ADLS Gen2 |
| 5 | Keep events in order per customer | Partition keys |
| 6 | Throughput limit reached at peak | Auto-inflate, Premium and Dedicated tiers |

### Series 40: Azure API Management in the Real World 📝

| # | Title | API Management feature |
| --- | --- | --- |
| 1 | Limit each user to 10 checkout calls per minute | `rate-limit-by-key` policy |
| 2 | Protect a fragile backend during the sale | Quotas, concurrency limits |
| 3 | Validate login tokens before they reach the API | `validate-jwt` policy |
| 4 | Cache product responses at the gateway | Response caching |
| 5 | Stop calling a failing backend | Backend circuit breaker |
| 6 | Release API v2 without breaking the mobile app | Versions and revisions |

### Series 41: Azure Functions in the Real World 📝

| # | Title | Functions feature |
| --- | --- | --- |
| 1 | First requests slow when the sale starts | Premium plan, pre-warmed instances |
| 2 | Job takes longer than the timeout | Durable Functions |
| 3 | Functions scale out and overwhelm the database | Concurrency and scale-out limits |
| 4 | Same trigger fires twice | Idempotent function design |
| 5 | Scheduled job runs on two instances | Singleton timer triggers |

### Series 42: Azure Blob Storage in the Real World 📝

| # | Title | Blob Storage feature |
| --- | --- | --- |
| 1 | Sellers upload 1 million product images | Direct upload with SAS tokens |
| 2 | Keep invoices private but downloadable | Short-lived SAS, private containers |
| 3 | Storage bill grows every month | Lifecycle management, access tiers |
| 4 | Someone deletes a container by mistake | Soft delete, versioning, resource locks |
| 5 | One popular image gets millions of downloads | Front Door CDN in front of storage |

### Series 43: Azure Key Vault in the Real World 📝

| # | Title | Key Vault feature |
| --- | --- | --- |
| 1 | Key Vault throttles during the sale | Cache secrets in the app, don't read per request |
| 2 | Rotate a database password without downtime | Secret versions, rotation with Event Grid |
| 3 | Certificate expires overnight | Auto-renewal, expiry notifications |
| 4 | Key Vault deleted by mistake | Soft delete, purge protection |

### Series 44: Azure Event Grid in the Real World 📝

| # | Title | Event Grid feature |
| --- | --- | --- |
| 1 | Resize images as soon as they're uploaded | Blob Storage events |
| 2 | Only react to the events you care about | Event filtering |
| 3 | Handler is down and events are missed | Retry policy, dead-lettering |
| 4 | One event triggers email, analytics, and search update | Fan-out with multiple subscriptions |

### Series 45: Azure App Service in the Real World 📝

| # | Title | App Service feature |
| --- | --- | --- |
| 1 | Release a new version with zero downtime | Deployment slots and swap |
| 2 | Autoscale reacts too slowly to the sale | Scale-out rules, pre-scaling, automatic scaling |
| 3 | All users stuck on one overloaded instance | ARR affinity settings |
| 4 | Outbound calls fail under heavy load | NAT Gateway, connection reuse |

---

## Series overview

| Part | Series | Articles | Status |
| --- | --- | --- | --- |
| 1 | Series 1–2: Foundation | 2 articles, 17 use cases | ✅ Drafted |
| 2 | Series 3–12: When Things Go Wrong | 10 articles, 50 use cases | 📝 Planned |
| 3 | Series 13–19: How Does It Work? | 7 articles, 43 use cases | 📝 Planned |
| 4 | Series 20–28: Deep-Dive Troubleshooting | 9 articles, 62 use cases | 📝 Planned |
| 5 | Series 29–32: Analytics, Marketing, and Tracking | 4 articles, 32 use cases | 📝 Planned |
| 6 | Series 33–45: Azure Service Deep Dives | 13 articles, 81 use cases | 📝 Planned |
| **Total** | **45 series** | **45 articles, 285 use cases** | |
