
# Azure Cache for Redis – Real-Time Example with Auto Refresh

## 📌 Scenario

Let’s say you have an **e-commerce website** showing **product price lists**.
Fetching prices from the **database** every time is slow and puts heavy load on the DB.
Instead, you use **Azure Cache for Redis** to store prices and only refresh them every **15 minutes**.

---

## 🔄 Flow

1. **User requests data** → Application first checks **Redis**.
2. **Cache Hit** → If data exists and is fresh → Return from Redis instantly.
3. **Cache Miss** or **Expired** → Fetch from database → Store in Redis with **15-minute expiration**.
4. **Auto Refresh** → After expiration, next request will trigger DB fetch again.

---

## 🏗 Diagram

```
   User Request
       ↓
   Check Redis
   ┌───────────────┐
   │ Cache Hit?    │───Yes──▶ Return from Redis
   └──────┬────────┘
          │ No / Expired
          ↓
      Fetch from DB
          ↓
      Store in Redis (TTL: 15 min)
          ↓
   Return Response
```

---

## 💻 Example in C# (.NET) with Azure Cache for Redis

```csharp
using System;
using System.Collections.Generic;
using StackExchange.Redis;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        string redisConnection = "myfastcache.redis.cache.windows.net:6380,password=YOUR_PASSWORD,ssl=True,abortConnect=False";
        var redis = await ConnectionMultiplexer.ConnectAsync(redisConnection);
        var db = redis.GetDatabase();

        string cacheKey = "product_prices";

        // Try to get data from cache
        string cachedData = await db.StringGetAsync(cacheKey);

        if (!string.IsNullOrEmpty(cachedData))
        {
            Console.WriteLine("✅ Data from Redis Cache:");
            Console.WriteLine(cachedData);
        }
        else
        {
            Console.WriteLine("⚠ Cache miss. Fetching from database...");

            // Simulate database fetch
            var productPrices = GetProductPricesFromDB();

            // Serialize to JSON for storing in Redis
            string jsonData = System.Text.Json.JsonSerializer.Serialize(productPrices);

            // Store in Redis with TTL of 15 minutes
            await db.StringSetAsync(cacheKey, jsonData, TimeSpan.FromMinutes(15));

            Console.WriteLine("✅ Data fetched from DB and stored in Redis:");
            Console.WriteLine(jsonData);
        }
    }

    // Simulated database call
    static Dictionary<string, decimal> GetProductPricesFromDB()
    {
        return new Dictionary<string, decimal>
        {
            { "Laptop", 1200.99m },
            { "Smartphone", 799.49m },
            { "Headphones", 199.99m }
        };
    }
}
```

---

## 🕒 How the 15-Minute Refresh Works

* When calling `db.StringSetAsync(cacheKey, jsonData, TimeSpan.FromMinutes(15))`
  → This sets a **TTL (Time-To-Live)** for 15 minutes.
* After 15 minutes:

  * The **key automatically expires** from Redis.
  * The **next request** will trigger a **fresh database fetch**.

---

## 📍 Real-World Uses of This Pattern

* **E-commerce** → Product catalog, prices, discounts.
* **Flight booking** → Flight schedules, ticket availability.
* **News websites** → Latest headlines refreshed periodically.
* **Weather apps** → Temperature and forecast updates every few minutes.

---

## 📚 References

* [Azure Cache for Redis TTL Documentation](https://learn.microsoft.com/azure/azure-cache-for-redis/cache-how-to-time-to-live)
* [StackExchange.Redis GitHub](https://github.com/StackExchange/StackExchange.Redis)

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


