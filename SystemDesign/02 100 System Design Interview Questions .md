# 100 System Design Interview Questions — with Azure

A practical list of the most-asked system design interview questions. Each one has a short approach and the Azure services you would typically use to build it.

## How to Answer Any Question (45 minutes)

| Step | Time | What to cover |
|------|------|---------------|
| 1. Clarify requirements | 5 min | Functional vs non-functional, users, scale, read/write ratio |
| 2. Estimate | 5 min | QPS, storage, bandwidth |
| 3. APIs & data model | 5 min | Endpoints, entities, database choice |
| 4. High-level design | 10 min | Core components and request flow |
| 5. Deep dive | 15 min | Scaling, caching, sharding, failure handling |
| 6. Wrap up | 5 min | Trade-offs, monitoring, future improvements |

---

## Questions

### 1. How would you design a URL shortening service like Bit.ly?
- **Approach:** Generate a unique ID and Base62-encode it into a 7-character key; store key → long URL in a key-value store. Traffic is read-heavy, so cache hot links and return 301/302 redirects.
- **Azure:** App Service or Azure Functions, Cosmos DB, Azure Cache for Redis, Azure Front Door.

### 2. How do you design a scalable notification system?
- **Approach:** API accepts notification requests, pushes them onto a queue, and channel-specific workers (push, SMS, email) deliver them with retries, user preferences, and rate limits.
- **Azure:** Service Bus, Notification Hubs, Azure Communication Services (SMS/email), Azure Functions, Cosmos DB.

### 3. Design a distributed message queue.
- **Approach:** Partitioned, append-only logs replicated across brokers; producers write by partition key, consumer groups track offsets. Support acknowledgements, retention, and dead-letter queues.
- **Azure:** Event Hubs (Kafka-compatible) for streaming, Service Bus for transactional queues.

### 4. How would you design a system like Twitter or Facebook News Feed?
- **Approach:** Hybrid fan-out: fan-out on write for normal users (precomputed timelines in cache), fan-out on read for celebrities. Rank the merged feed at read time.
- **Azure:** Cosmos DB, Azure Cache for Redis, Service Bus, AKS, Azure Front Door.

### 5. How do you design a video streaming platform like YouTube?
- **Approach:** Upload raw video to object storage, transcode asynchronously into multiple resolutions (HLS/DASH), and serve segments through a CDN with adaptive bitrate streaming. Metadata lives in a separate database.
- **Azure:** Blob Storage, Azure Batch or Container Apps jobs (FFmpeg transcoding), Azure Front Door, Cosmos DB.

### 6. How would you design a file storage service like Dropbox or Google Drive?
- **Approach:** Split files into chunks with content hashes for deduplication and delta sync; store chunks in object storage and metadata in a database. Clients sync through a notification channel.
- **Azure:** Blob Storage, Azure SQL Database, Azure SignalR Service, Entra ID.

### 7. How do you design a real-time chat application like WhatsApp?
- **Approach:** Persistent WebSocket connections through a gateway; messages routed by user-to-connection mapping, stored per conversation, and delivered with sent/delivered/read acknowledgements. Offline users get push notifications.
- **Azure:** Azure Web PubSub or SignalR Service, Cosmos DB, Azure Cache for Redis, Notification Hubs.

### 8. How would you design a global online marketplace like Amazon?
- **Approach:** Microservices for catalog, search, cart, orders, payments, and inventory, communicating through events. Multi-region deployment with regional data for low latency.
- **Azure:** AKS, API Management, Cosmos DB (multi-region), Azure SQL, Azure AI Search, Service Bus, Azure Front Door.

### 9. How would you design a scalable search engine like Google?
- **Approach:** Crawl pages, parse and build an inverted index, rank results with signals such as relevance and links, and shard the index across many nodes with a query aggregator.
- **Azure:** Azure AI Search, AKS, Blob Storage, Azure Databricks for indexing pipelines.

### 10. How do you design a cache system for frequently accessed data?
- **Approach:** Use cache-aside with TTLs and LRU eviction; protect against stampedes with locking or request coalescing. Shard with consistent hashing and replicate for availability.
- **Azure:** Azure Cache for Redis (clustering, geo-replication), Azure Front Door caching.

### 11. How would you design a ridesharing system like Uber?
- **Approach:** Drivers stream locations every few seconds; index them with geohash or H3 cells; matching service finds nearby drivers and assigns trips. Trip state is managed as a state machine.
- **Azure:** Azure Maps, Event Hubs, Azure Cache for Redis (geo commands), Cosmos DB, AKS.

### 12. How do you design a real-time collaborative document editor like Google Docs?
- **Approach:** Use Operational Transformation or CRDTs to merge concurrent edits; a session server broadcasts operations over WebSockets and periodically snapshots the document.
- **Azure:** Azure Fluid Relay, Azure Web PubSub, Cosmos DB, Blob Storage.

### 13. How would you design a social media platform like Instagram?
- **Approach:** Media uploads go to object storage with thumbnails generated asynchronously; feed uses fan-out with caching; likes and comments stored separately with counters.
- **Azure:** Blob Storage, Azure Functions, Azure Front Door, Cosmos DB, Azure Cache for Redis.

### 14. How do you design an API rate limiter?
- **Approach:** Token bucket or sliding window counters per user, key, or IP, stored in a shared fast store; return HTTP 429 with retry headers when limits are exceeded.
- **Azure:** API Management (rate-limit and quota policies), Azure Cache for Redis, Azure Front Door WAF.

### 15. How would you design a recommendation system like Netflix?
- **Approach:** Offline training (collaborative filtering, embeddings) plus online candidate generation and ranking; capture user events for feedback and A/B test models.
- **Azure:** Azure Machine Learning, Azure Databricks, Event Hubs, Cosmos DB, Azure AI Search (vector).

### 16. How do you design a key-value store like Redis?
- **Approach:** In-memory hash table with persistence (snapshots + append-only log), partitioning by consistent hashing, primary-replica replication, and eviction policies.
- **Azure:** Azure Cache for Redis / Azure Managed Redis, Cosmos DB (Table API) as a managed alternative.

### 17. How would you design a WebSocket gateway for millions of concurrent connections?
- **Approach:** Stateless gateway nodes hold connections; a connection registry maps users to nodes; a pub/sub backplane routes messages between nodes. Handle heartbeats and reconnects.
- **Azure:** Azure Web PubSub, Azure SignalR Service, Azure Cache for Redis, Azure Front Door.

### 18. How do you design an end-to-end encrypted messaging system?
- **Approach:** Clients generate key pairs and use the Signal protocol (X3DH + Double Ratchet); the server only stores public key bundles and relays ciphertext it cannot read.
- **Azure:** Azure Web PubSub, Cosmos DB (key bundles), Key Vault (server-side secrets), Notification Hubs.

### 19. How would you design a system for tracking user activity in real-time?
- **Approach:** SDKs emit events to an ingestion endpoint, events flow into a stream, a processor aggregates windows, and results land in a fast analytical store and dashboards.
- **Azure:** Event Hubs, Stream Analytics, Azure Data Explorer, Application Insights, Power BI.

### 20. How do you design an order management system using Saga-based distributed transactions?
- **Approach:** Each step (reserve inventory, charge payment, create shipment) is a local transaction with a compensating action; an orchestrator drives the flow and undoes steps on failure.
- **Azure:** Durable Functions (orchestrator), Service Bus, Azure SQL, Cosmos DB.

### 21. How would you design a scalable email delivery system?
- **Approach:** Queue outgoing emails, render templates, send through a provider with retries, and process bounces, complaints, and unsubscribes to protect sender reputation.
- **Azure:** Azure Communication Services Email, Service Bus, Azure Functions, Event Grid (delivery events).

### 22. How do you design a real-time analytics platform?
- **Approach:** Stream ingestion, windowed aggregations, and a columnar store for fast queries; a lambda or kappa architecture combines real-time and historical views.
- **Azure:** Event Hubs, Stream Analytics, Azure Data Explorer, Microsoft Fabric, Power BI.

### 23. How would you design a system to process large volumes of logs?
- **Approach:** Agents ship logs to a buffer, processors parse and enrich them, and they are indexed for search with hot, warm, and cold retention tiers.
- **Azure:** Azure Monitor Logs (Log Analytics), Event Hubs, Azure Data Explorer, Blob Storage (archive).

### 24. How do you design a QR code generation and scan-tracking service?
- **Approach:** Each QR code encodes a short redirect URL; scans hit the redirect service, which logs device, time, and location asynchronously before redirecting.
- **Azure:** Azure Functions, Cosmos DB, Event Hubs, Azure Data Explorer, Azure Front Door.

### 25. How would you design an auto-suggest feature like Google Search?
- **Approach:** Precompute top-K completions per prefix using a trie from query logs; serve from memory or cache with results under 100 ms; refresh popularity offline.
- **Azure:** Azure AI Search (suggesters), Azure Cache for Redis, Azure Databricks for log aggregation.

### 26. How do you design a real-time bidding system for online ads?
- **Approach:** Ad exchange sends bid requests; bidders evaluate targeting and budget within about 100 ms using in-memory data; results logged for billing and pacing.
- **Azure:** AKS (low-latency services), Azure Cache for Redis, Event Hubs, Azure Data Explorer.

### 27. How would you design a system for booking flights?
- **Approach:** Search aggregates availability from inventory systems with caching; booking holds seats temporarily, takes payment, then confirms — with strong consistency on seat inventory.
- **Azure:** Azure SQL Database, Azure Cache for Redis, Service Bus, API Management, Azure AI Search.

### 28. How do you design a distributed file system?
- **Approach:** A metadata (name) service tracks files and block locations; data nodes store replicated blocks; clients read and write blocks directly after a metadata lookup.
- **Azure:** Azure Data Lake Storage Gen2 (hierarchical namespace), Azure Files, Azure NetApp Files.

### 29. How would you design an online banking system?
- **Approach:** Double-entry ledger with ACID transactions, idempotent transfers, strong authentication, full audit logging, and strict regulatory compliance.
- **Azure:** Azure SQL (Hyperscale), Entra ID, Key Vault, Azure Confidential Computing, Microsoft Defender for Cloud.

### 30. How do you design a system for user authentication and authorization?
- **Approach:** Use OAuth 2.0 / OpenID Connect with short-lived JWT access tokens and refresh tokens; enforce role- or attribute-based access control and MFA.
- **Azure:** Microsoft Entra ID, Entra External ID, API Management (token validation), Key Vault.

### 31. How would you design a leaderboard system for a gaming platform?
- **Approach:** Sorted sets keyed by score give O(log n) updates and rank queries; shard by region or season and persist snapshots to a database.
- **Azure:** Azure Cache for Redis (sorted sets), Cosmos DB, Azure Functions, Azure PlayFab.

### 32. How do you design a payment gateway system?
- **Approach:** Tokenize card data, route to acquirers or PSPs, use idempotency keys to avoid double charges, and reconcile against settlement files. Maintain PCI-DSS compliance.
- **Azure:** Azure SQL, Key Vault (Managed HSM), Service Bus, API Management, Azure Firewall.

### 33. How would you design a distributed system for monitoring services?
- **Approach:** Collect metrics, logs, and traces from agents; store metrics in a time-series store; evaluate alert rules and route alerts to on-call channels.
- **Azure:** Azure Monitor, Application Insights, Managed Prometheus, Managed Grafana, Action Groups.

### 34. How do you design a notification system for a ride-hailing service?
- **Approach:** Trip state changes publish events; a notification service maps events to templates and delivers real-time in-app updates plus push and SMS fallbacks.
- **Azure:** Event Grid, Azure Web PubSub, Notification Hubs, Azure Communication Services.

### 35. How would you design a system for handling real-time transactions?
- **Approach:** Validate and write transactions to an ACID store with idempotency; publish events via the outbox pattern for downstream processing and fraud checks.
- **Azure:** Azure SQL, Cosmos DB (change feed), Event Hubs, Stream Analytics.

### 36. How do you design a service for synchronizing data between mobile and cloud?
- **Approach:** Offline-first local database, change tracking with version numbers or timestamps, delta sync, and conflict resolution (last-write-wins or custom merge).
- **Azure:** Azure App Service, Cosmos DB (change feed), Azure SQL, Notification Hubs (sync triggers).

### 37. How would you design a weather forecast system that handles millions of requests?
- **Approach:** Ingest data from providers periodically, precompute forecasts per region grid, and serve heavily cached, read-only responses from the edge.
- **Azure:** Azure Maps Weather, Azure Functions, Azure Cache for Redis, Azure Front Door.

### 38. How do you design a scalable web crawler?
- **Approach:** URL frontier with priority and politeness queues per domain, distributed fetchers, deduplication by URL and content hash, and respect for robots.txt.
- **Azure:** AKS, Service Bus, Blob Storage, Cosmos DB, Azure Cache for Redis (seen-URL set).

### 39. How would you design a hotel reservation system like Booking.com?
- **Approach:** Inventory per room type per date; reservations use optimistic locking or conditional updates to prevent double booking; search uses a separate read index.
- **Azure:** Azure SQL, Azure AI Search, Azure Cache for Redis, Service Bus.

### 40. How do you design a unique ID generator for distributed systems?
- **Approach:** Snowflake-style 64-bit IDs (timestamp + machine ID + sequence) give sortable, collision-free IDs without coordination; handle clock skew.
- **Azure:** AKS or Azure Functions, App Configuration (machine ID assignment), Cosmos DB.

### 41. How would you design a ticket booking system like BookMyShow or Ticketmaster?
- **Approach:** Temporary seat holds with a TTL, a virtual waiting room for high-demand events, and atomic seat confirmation after payment.
- **Azure:** Azure Cache for Redis (seat locks), Azure SQL, Azure Front Door, Service Bus.

### 42. How do you design a distributed job scheduler?
- **Approach:** Store job definitions and next-run times; a leader or partitioned schedulers pick due jobs and dispatch to workers with retries and at-least-once execution.
- **Azure:** Azure Functions (timer triggers), Durable Functions, Container Apps jobs, Service Bus (scheduled messages).

### 43. How would you design a food delivery platform like GrabFood or DoorDash?
- **Approach:** Restaurant search by location, order service with a state machine, courier dispatch based on proximity and ETA, and live tracking.
- **Azure:** Azure Maps, Azure AI Search, Cosmos DB, Event Hubs, Azure Web PubSub.

### 44. How do you design a content delivery network (CDN)?
- **Approach:** Edge points of presence cache content close to users; DNS or anycast routes to the nearest edge; origin shielding and cache invalidation control freshness.
- **Azure:** Azure Front Door (Standard/Premium), Blob Storage as origin.

### 45. How would you design a stock trading platform?
- **Approach:** An order matching engine maintains in-memory order books per symbol, processes orders sequentially for fairness, and persists every event to a journal.
- **Azure:** AKS (low-latency nodes), Event Hubs, Azure SQL, Azure Data Explorer (market data).

### 46. How do you design a distributed lock service?
- **Approach:** Leases with TTLs and fencing tokens; use a consensus-backed store for correctness and renew leases while holding the lock.
- **Azure:** Blob Storage leases, Azure Cache for Redis, Cosmos DB (conditional writes with ETags).

### 47. How would you design a music streaming service like Spotify?
- **Approach:** Audio stored in multiple bitrates and served in chunks through a CDN; metadata and playlists in a database; personalization runs offline.
- **Azure:** Blob Storage, Azure Front Door, Cosmos DB, Azure Machine Learning.

### 48. How do you design a proximity service like Yelp for finding nearby places?
- **Approach:** Index places with geohash or quadtree; search the user's cell and neighbors; place data changes rarely, so cache heavily.
- **Azure:** Azure Maps, Azure AI Search (geo-spatial queries), Cosmos DB (geospatial indexing).

### 49. How would you design a video conferencing system like Zoom?
- **Approach:** WebRTC with Selective Forwarding Units (SFUs) for group calls, TURN servers for NAT traversal, and signaling over WebSockets.
- **Azure:** Azure Communication Services (calling), Azure Web PubSub, AKS for custom SFUs.

### 50. How do you design a system to handle flash sales without overselling?
- **Approach:** Queue incoming requests, atomically decrement stock in memory, confirm orders asynchronously, and throttle traffic at the edge.
- **Azure:** Azure Cache for Redis (atomic counters), Service Bus, Azure Front Door WAF, Azure SQL.

### 51. How would you design a digital wallet system?
- **Approach:** Double-entry ledger per wallet, idempotent top-ups and transfers, KYC verification, and daily reconciliation.
- **Azure:** Azure SQL, Entra External ID, Key Vault, Service Bus, Azure AI Document Intelligence (KYC).

### 52. How do you design a leader election system for distributed services?
- **Approach:** Use a consensus algorithm (Raft) or lease-based election; the leader renews a lease and followers take over on expiry, with fencing to prevent split-brain.
- **Azure:** Blob Storage leases, AKS (Kubernetes lease objects), Cosmos DB (ETag-based leases).

### 53. How would you design a Pastebin-like service?
- **Approach:** Generate unique keys, store content in object storage with metadata in a database, support expiry, and cache popular pastes.
- **Azure:** Blob Storage (lifecycle policies), Cosmos DB, Azure Functions, Azure Front Door.

### 54. How do you design a distributed tracing system?
- **Approach:** Propagate trace and span IDs across services, sample spans, collect them asynchronously, and store them for waterfall and dependency views.
- **Azure:** Application Insights, OpenTelemetry, Azure Monitor.

### 55. How would you design a mapping and navigation system like Google Maps?
- **Approach:** Serve pre-rendered map tiles from a CDN; represent roads as a graph and compute routes with algorithms like A* or contraction hierarchies, using live traffic for ETAs.
- **Azure:** Azure Maps (tiles, routing, traffic), Azure Front Door.

### 56. How do you design an inventory management system?
- **Approach:** Track stock per SKU per warehouse with reservations and releases, event-sourced changes for auditability, and reorder alerts.
- **Azure:** Azure SQL, Cosmos DB (change feed), Service Bus, Azure Functions.

### 57. How would you design a coupon and promo code system?
- **Approach:** Rule engine validates eligibility; atomic redemption counters enforce usage limits; idempotency prevents double redemption.
- **Azure:** Azure Cache for Redis, Azure SQL, Azure Functions, API Management.

### 58. How do you design an object storage service like Amazon S3 or Azure Blob Storage?
- **Approach:** Separate metadata and data layers; store objects as erasure-coded or replicated chunks across failure domains; expose a flat namespace via REST.
- **Azure:** Blob Storage (LRS/ZRS/GRS redundancy, access tiers).

### 59. How would you design a Q&A platform like Stack Overflow?
- **Approach:** Relational store for questions, answers, and votes; full-text search; reputation computed from events; aggressive caching of popular pages.
- **Azure:** Azure SQL, Azure AI Search, Azure Cache for Redis, App Service.

### 60. How do you design a feature flag and configuration management service?
- **Approach:** Central store of flags with targeting rules; SDKs cache flags locally and refresh via polling or push; every change is audited.
- **Azure:** Azure App Configuration (feature manager), Key Vault references, Event Grid.

### 61. How would you design a comment system with nested replies?
- **Approach:** Store comments with parent IDs or materialized paths; paginate top-level comments and lazy-load replies; moderate asynchronously.
- **Azure:** Cosmos DB, Azure Cache for Redis, Azure AI Content Safety.

### 62. How do you design a webhook delivery system with retries?
- **Approach:** Queue events per subscriber, sign payloads with HMAC, retry with exponential backoff, and send permanently failing deliveries to a dead-letter queue.
- **Azure:** Event Grid (webhook subscriptions), Service Bus, Azure Functions.

### 63. How would you design a calendar and scheduling system like Google Calendar?
- **Approach:** Store events with recurrence rules (RRULE) and expand them at query time; handle time zones, free/busy lookups, and reminders.
- **Azure:** Azure SQL, Azure Functions (reminders), Microsoft Graph (calendar APIs), Notification Hubs.

### 64. How do you design an online presence (online/offline) indicator?
- **Approach:** Clients send heartbeats; presence stored with a short TTL; status changes fan out only to interested contacts.
- **Azure:** Azure Web PubSub (connection events), Azure Cache for Redis (TTL keys).

### 65. How would you design an ad click aggregation system?
- **Approach:** Stream clicks, deduplicate them, aggregate by ad and time window, and reconcile with a batch job for accurate billing.
- **Azure:** Event Hubs, Stream Analytics, Azure Data Explorer, Azure Databricks.

### 66. How do you design a trending topics or top-K system?
- **Approach:** Count-Min Sketch plus a heap over sliding windows to find heavy hitters approximately, merged across partitions.
- **Azure:** Event Hubs, Stream Analytics, Azure Cache for Redis (sorted sets).

### 67. How would you design a photo storage and sharing service like Google Photos?
- **Approach:** Upload originals to object storage, generate thumbnails, extract metadata and AI tags, and index for search; move old photos to cooler tiers.
- **Azure:** Blob Storage (hot/cool/archive tiers), Azure AI Vision, Azure AI Search, Azure Functions.

### 68. How do you design a time-series database?
- **Approach:** Append-optimized columnar storage partitioned by time, compression (delta, Gorilla), downsampling, and retention policies.
- **Azure:** Azure Data Explorer, Managed Prometheus, Cosmos DB with TTL.

### 69. How would you design an online code judge like LeetCode?
- **Approach:** Submissions queued and executed in isolated sandboxes with CPU and memory limits; results compared against hidden test cases.
- **Azure:** Container Apps jobs or Azure Container Instances (sandboxes), Service Bus, Azure SQL.

### 70. How do you design a large file upload service with resumable uploads?
- **Approach:** Split files into chunks, upload in parallel with checksums, track progress server-side, and commit when all chunks arrive.
- **Azure:** Blob Storage (block blobs, Put Block / Put Block List), SAS tokens, Azure Functions.

### 71. How would you design a live streaming platform like Twitch?
- **Approach:** Ingest via RTMP/SRT, transcode in real time into HLS segments, distribute through a CDN, and run live chat alongside.
- **Azure:** AKS with transcoding workloads, Azure Front Door, Azure Web PubSub (chat), Blob Storage.

### 72. How do you design a service discovery system?
- **Approach:** Services register with health checks; clients or load balancers resolve healthy instances through DNS or a registry.
- **Azure:** AKS (Kubernetes DNS and services), Container Apps (built-in discovery), Azure Private DNS.

### 73. How would you design a news aggregator like Google News?
- **Approach:** Crawl feeds, deduplicate and cluster similar stories, categorize with NLP, and rank by freshness and relevance.
- **Azure:** Azure Functions, Azure AI Language, Azure AI Search, Cosmos DB.

### 74. How do you design a fraud detection system for payments?
- **Approach:** Real-time rule engine plus ML scoring on streaming transactions, feature store for user history, and human review for borderline cases.
- **Azure:** Event Hubs, Stream Analytics, Azure Machine Learning, Azure Data Explorer.

### 75. How would you design a subscription billing system?
- **Approach:** Plans, subscriptions, and invoices with proration; scheduled billing runs; dunning with retries for failed payments.
- **Azure:** Azure SQL, Durable Functions, Service Bus, Azure Communication Services (invoices).

### 76. How do you design a multi-tenant SaaS platform?
- **Approach:** Choose an isolation model (shared, pooled, or siloed per tenant), route by tenant ID, enforce data isolation, and meter usage per tenant.
- **Azure:** Entra ID, Azure SQL elastic pools, Cosmos DB (partition by tenant), API Management, AKS.

### 77. How would you design a vacation rental platform like Airbnb?
- **Approach:** Listing search with geo and date filters, availability calendars per listing, booking with holds, and payment escrow for hosts.
- **Azure:** Azure AI Search, Azure SQL, Azure Maps, Blob Storage, Service Bus.

### 78. How do you design a distributed counter for likes and views?
- **Approach:** Sharded counters or in-memory increments that are periodically flushed to the database; accept eventual consistency for display.
- **Azure:** Azure Cache for Redis (INCR), Cosmos DB, Event Hubs for batch aggregation.

### 79. How would you design a job portal like LinkedIn Jobs?
- **Approach:** Job postings indexed for search, matching candidates to jobs with skills embeddings, application tracking, and alerts.
- **Azure:** Azure AI Search (hybrid vector search), Azure SQL, Azure OpenAI, Notification Hubs.

### 80. How do you design a "People You May Know" feature?
- **Approach:** Model users as a graph; compute friends-of-friends and shared signals offline; rank candidates and cache results per user.
- **Azure:** Cosmos DB for Apache Gremlin, Azure Databricks, Azure Cache for Redis.

### 81. How would you design an IoT data ingestion platform?
- **Approach:** Secure device provisioning, telemetry ingestion at scale, hot path for alerts, cold path for long-term analytics, and device commands.
- **Azure:** IoT Hub, Device Provisioning Service, Event Hubs, Azure Data Explorer, Stream Analytics.

### 82. How do you design a secrets management system?
- **Approach:** Encrypted storage backed by HSMs, fine-grained access control, automatic rotation, and audit logging of every access.
- **Azure:** Key Vault, Managed HSM, Managed Identities, Azure Monitor (audit logs).

### 83. How would you design an API gateway?
- **Approach:** Single entry point for routing, authentication, rate limiting, request transformation, caching, and observability.
- **Azure:** API Management, Azure Front Door, Application Gateway (WAF).

### 84. How do you design a multi-region active-active architecture?
- **Approach:** Deploy full stacks in multiple regions, route users to the nearest healthy region, replicate data with conflict resolution, and test failover regularly.
- **Azure:** Azure Front Door, Traffic Manager, Cosmos DB (multi-region writes), Azure SQL failover groups.

### 85. How would you design a content moderation system for user-generated content?
- **Approach:** Automated classification of text and images at upload, confidence thresholds for auto-block vs human review, and appeals workflow.
- **Azure:** Azure AI Content Safety, Service Bus, Azure Functions, Cosmos DB.

### 86. How do you design a CI/CD pipeline system?
- **Approach:** Build on commit, run tests and security scans, publish artifacts, and deploy progressively (blue-green or canary) with automated rollback.
- **Azure:** Azure DevOps Pipelines, GitHub Actions, Azure Container Registry, AKS, Azure Monitor.

### 87. How would you design a parking lot reservation system?
- **Approach:** Spots modeled per location and time slot; reservations with holds and confirmation; entry and exit via plates or QR codes.
- **Azure:** Azure SQL, Azure Maps, Azure Functions, IoT Hub (gate sensors).

### 88. How do you design an event-sourced system using CQRS?
- **Approach:** Commands append events to an immutable event store; projections build read models optimized for queries; replay events to rebuild state.
- **Azure:** Cosmos DB (event store with change feed), Azure Functions (projections), Event Hubs, Azure SQL (read models).

### 89. How would you design a live polling and voting system for events?
- **Approach:** High-throughput vote ingestion with deduplication per user, atomic counters, and live result updates pushed to viewers.
- **Azure:** Azure Web PubSub, Azure Cache for Redis, Event Hubs, Azure Functions.

### 90. How do you design a distributed search index like Elasticsearch?
- **Approach:** Documents tokenized into an inverted index, sharded and replicated across nodes; queries scatter to shards and results are gathered and ranked.
- **Azure:** Azure AI Search, Elastic Cloud on Azure.

### 91. How would you design a customer support ticketing system?
- **Approach:** Tickets with states, SLAs, and assignment rules; omnichannel intake (email, chat); AI suggestions and knowledge base search.
- **Azure:** Azure SQL, Logic Apps, Azure Communication Services, Azure OpenAI, Azure AI Search.

### 92. How do you design a system that guarantees exactly-once processing?
- **Approach:** Combine at-least-once delivery with idempotent consumers, deduplication keys, and transactional outbox/inbox patterns.
- **Azure:** Service Bus (duplicate detection, sessions), Cosmos DB, Durable Functions.

### 93. How would you design a healthcare appointment booking system?
- **Approach:** Doctor schedules as time slots, atomic booking, reminders, and strict data privacy and compliance for patient records.
- **Azure:** Azure SQL, Azure Health Data Services (FHIR), Entra ID, Azure Communication Services.

### 94. How do you design a disaster recovery strategy for a critical system?
- **Approach:** Define RTO/RPO, replicate data to a secondary region, automate failover, keep regular backups, and run DR drills.
- **Azure:** Azure Site Recovery, Azure Backup, geo-redundant storage, Azure SQL failover groups, Traffic Manager.

### 95. How would you design an online learning platform like Coursera or Udemy?
- **Approach:** Course catalog, video delivery via CDN, progress tracking, quizzes and certificates, and payments.
- **Azure:** Blob Storage, Azure Front Door, Azure SQL, Azure AI Search, Entra External ID.

### 96. How do you design a data pipeline for both batch and stream processing?
- **Approach:** Ingest into a lakehouse with bronze, silver, and gold layers; stream for real-time views and batch for heavy transforms; orchestrate and monitor jobs.
- **Azure:** Microsoft Fabric, Azure Databricks, Data Factory, Event Hubs, Data Lake Storage Gen2.

### 97. How would you design a Single Sign-On (SSO) system?
- **Approach:** Central identity provider issues tokens via SAML or OpenID Connect; applications trust the IdP; sessions and logout are federated.
- **Azure:** Microsoft Entra ID (enterprise apps, conditional access), Entra External ID.

### 98. How do you design a GenAI chatbot using RAG at scale?
- **Approach:** Chunk and embed documents into a vector index; at query time retrieve relevant chunks, ground the LLM prompt, and cache frequent answers; add guardrails and evaluation.
- **Azure:** Azure OpenAI / Microsoft Foundry, Azure AI Search (vector + hybrid), Azure AI Content Safety, Azure Cache for Redis.

### 99. How would you design a vector search system for semantic search?
- **Approach:** Generate embeddings, index them with ANN algorithms (HNSW), combine with keyword search (hybrid), and re-rank results.
- **Azure:** Azure AI Search, Cosmos DB (vector search), Azure Database for PostgreSQL (pgvector), Azure OpenAI embeddings.

### 100. How do you migrate a monolith to microservices without downtime?
- **Approach:** Apply the Strangler Fig pattern: route traffic through a gateway, carve out one domain at a time, sync data during transition, and use feature flags for safe cutover.
- **Azure:** API Management, Azure Front Door, AKS or Container Apps, App Configuration, Service Bus.

---

## Azure Services Quick Map

| Need | Azure Service |
|------|---------------|
| Compute | App Service, Azure Functions, Container Apps, AKS |
| Relational DB | Azure SQL Database, Azure Database for PostgreSQL |
| NoSQL / Global DB | Cosmos DB |
| Cache | Azure Cache for Redis / Azure Managed Redis |
| Object storage | Blob Storage, Data Lake Storage Gen2 |
| Messaging | Service Bus (queues), Event Hubs (streaming), Event Grid (events) |
| Real-time | Azure Web PubSub, Azure SignalR Service |
| Edge / CDN / Global routing | Azure Front Door, Traffic Manager |
| API management | API Management |
| Search / Vector | Azure AI Search |
| Identity | Microsoft Entra ID, Entra External ID |
| Secrets | Key Vault |
| Analytics | Azure Data Explorer, Microsoft Fabric, Azure Databricks, Stream Analytics |
| Monitoring | Azure Monitor, Application Insights |
| AI | Azure OpenAI / Microsoft Foundry, Azure AI Services |
| Notifications | Notification Hubs, Azure Communication Services |
| DR | Azure Site Recovery, Azure Backup |
