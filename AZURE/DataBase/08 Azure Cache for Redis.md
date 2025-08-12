
# Azure Cache for Redis – Setup in Azure Portal & Key Concepts

## 📌 Introduction

Azure Cache for Redis is a **fully managed, in-memory data store** that provides high performance and low latency for your applications.
This guide explains **how to create** an Azure Cache for Redis instance in the Azure Portal and covers key concepts like **Replica**, **Redis Cluster**, and **Data Persistence**.

---

## 🛠 How to Create Azure Cache for Redis in Azure Portal

### **Step 1: Sign in**

Go to the [Azure Portal](https://portal.azure.com/) and sign in with your Azure account.

---

### **Step 2: Search for Azure Cache for Redis**

1. In the top search bar, type **Azure Cache for Redis**.
2. Select **Azure Cache for Redis** from the results.
3. Click **+ Create**.

---

### **Step 3: Basic Settings**

Fill in the following:

* **Subscription**: Choose your Azure subscription.
* **Resource Group**: Select an existing group or create a new one.
* **DNS name**: Unique name for your cache (e.g., `myfastcache`).
* **Location**: Choose a region close to your application.
* **Pricing tier**: Choose Basic, Standard, Premium, Enterprise, or Enterprise Flash based on your needs.

---

### **Step 4: Networking**

* **Public endpoint**: Default for most scenarios.
* **Private endpoint / VNET**: Use for secure internal communication (Premium tier and above).

---

### **Step 5: Advanced Settings (Optional)**

* **Persistence**: Enable if you want your cache to survive restarts.
* **Clustering**: Enable if you need horizontal scaling across multiple shards.
* **Geo-replication**: Configure if you want a replica in another Azure region.

---

### **Step 6: Review + Create**

* Review your configuration.
* Click **Create**.
* Wait for the deployment to complete.

---

## 📖 Key Concepts

### 1️⃣ **Replica**

* A **replica** is a copy of your primary cache instance.
* Used in **Standard tier and above** for **high availability**.
* If the **primary node** fails, the **replica** takes over automatically (failover).
* **Example**: If Node A (primary) stores session data, Node B (replica) keeps a synchronized copy. On failure, Node B becomes the new primary.

---

### 2️⃣ **Redis Cluster**

* Redis clustering **splits data across multiple nodes** (shards).
* Each shard has its **own primary and replica**.
* Improves:

  * **Scalability** – handle more data and requests.
  * **Performance** – parallel processing.
* **Example**:

  ```
  Cluster with 3 shards:
  Shard 1 → Key1–Key1000
  Shard 2 → Key1001–Key2000
  Shard 3 → Key2001–Key3000
  ```

---

### 3️⃣ **Data Persistence**

* Redis is **in-memory** by default, meaning data is lost if the server restarts.
* **Data persistence** stores a copy on disk for recovery.
* Azure supports:

  * **RDB (Snapshotting)** – saves data periodically.
  * **AOF (Append-Only File)** – logs every write for durability.
* **Example**:

  * Without persistence → Cache cleared after restart.
  * With persistence → Cache restored from saved snapshot.

---

## 💻 Sample .NET Code to Connect to Azure Cache for Redis

```csharp
using StackExchange.Redis;
using System;

class Program
{
    static void Main()
    {
        var connectionString = "myfastcache.redis.cache.windows.net:6380,password=YOUR_PASSWORD,ssl=True,abortConnect=False";
        var redis = ConnectionMultiplexer.Connect(connectionString);
        var db = redis.GetDatabase();

        db.StringSet("username", "JohnDoe");
        Console.WriteLine("Stored: username = JohnDoe");

        var value = db.StringGet("username");
        Console.WriteLine($"Retrieved: username = {value}");
    }
}
```

---

## 📚 References

* [Azure Cache for Redis Documentation](https://learn.microsoft.com/azure/azure-cache-for-redis/)
* [Redis Clustering](https://redis.io/docs/interact/cluster/)
* [Redis Persistence](https://redis.io/docs/management/persistence/)

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


