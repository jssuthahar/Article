# Airline Ticket Reservation System – Cosmos DB Setup

This document explains **why** and **how** we provision an **Azure Cosmos DB (SQL API)** account for the airline ticket reservation system, along with key **questions and answers** to understand the design decisions.

---

## 📌 Requirements

Our system must:

* ✅ Ensure **99.99% availability** and provide **low latency**.
* ✅ Accept reservations even during **localized network outages** or failures.
* ✅ Process reservations **in the exact sequence submitted** (to minimize overbooking).
* ✅ Allow **simultaneous reservations** with a **5-second tolerance**.

---

## ❓ Questions & Answers

### Q1: Which **consistency level** should we choose?

**Answer:** `BoundedStaleness`

* Ensures reservations are processed **in order**.
* Allows controlled lag (`K` updates or `T` seconds) → matches the **5-second tolerance**.
* Prevents **overbooking/double-booking**.

---

### Q2: How do we ensure the system is **available during outages**?

**Answer:** Enable `--enable-automatic-failover true`

* If the **primary region fails**, traffic **automatically shifts** to the next available region.
* No manual intervention is required.
* Meets the **99.99% SLA** requirement.

---

### Q3: How do we achieve **global availability and low latency**?

**Answer:** Use **multi-region deployment** with `--locations`.

* Example:

  * `southcentralus=0` (Primary write region)
  * `eastus=1` (Failover/read region)
  * `westus=2` (Failover/read region)
* This ensures:

  * **Global customers** experience low latency.
  * Reads/writes are **replicated across regions**.

---

### Q4: Why not use **Strong** or **Eventual consistency**?

* **Strong** → Too strict, increases latency (not needed here).
* **Eventual/Session** → Too relaxed, may cause **out-of-order reservations**.
* **Bounded Staleness** → The perfect balance ✅

---

## 🧩 Key Design Decisions

1. **Consistency Level:** Bounded Staleness
2. **Multi-Region Deployment:** South Central US, East US, West US
3. **Automatic Failover:** Enabled

---

## 🛠️ Azure CLI Commands

```bash
# Create a Cosmos DB SQL API account with bounded staleness and multi-region setup
az cosmosdb create \
  --name airlineCosmosDB \
  --resource-group airlineResourceGroup \
  --kind GlobalDocumentDB \
  --default-consistency-level BoundedStaleness \
  --enable-automatic-failover true \
  --locations "southcentralus=0" "eastus=1" "westus=2"
```

---

## 🚀 Benefits

* **High Availability** → Multi-region replication + 99.99% SLA.
* **Low Latency** → Local reads/writes for global users.
* **Correctness** → Reservation order preserved with bounded staleness.
* **Fault Tolerance** → Automatic failover during outages.

---

## ✅ Conclusion

By choosing **Cosmos DB (SQL API)** with:

* **Bounded Staleness consistency**
* **Multi-region setup**
* **Automatic failover**

Our airline reservation system can:

* Process bookings **safely and in order**,
* Stay **highly available** during outages,
* Serve users **quickly across regions**,
* Prevent **double-booking or overbooking**.
### 🔔 Stay Updated with My Latest Projects

If you enjoy:
- 🧠 AI agents and automation
- 🛠️ Practical tools and utilities
- 📘 Developer tutorials and guides
- 🚀 End-to-end project templates

👉 Then **[Follow me on GitHub](https://github.com/jssuthahar)** to get notified about new repos, ideas, and updates!

[![Follow Me](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)

## ⭐ Start & Follow Me
If you find this repository useful, don't forget to **Star** ⭐ the repo and **Follow** me for more updates!

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)



