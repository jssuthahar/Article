# 🌌 Azure Cosmos DB with .NET - Create Database & Container

This guide shows how to **connect to Azure Cosmos DB** using the .NET SDK and **create a database and container** programmatically.

---

## 📦 Prerequisites

* [.NET SDK 6.0 or later](https://dotnet.microsoft.com/en-us/download)
* An Azure subscription
* An existing **Azure Cosmos DB SQL API account**
* NuGet package:

  ```
  Microsoft.Azure.Cosmos
  ```

Install via CLI:

```bash
dotnet add package Microsoft.Azure.Cosmos
```

---

## 🛠️ Setup Connection

```csharp
using Microsoft.Azure.Cosmos;

string endpointUri = "<YOUR_COSMOS_DB_URI>";
string primaryKey = "<YOUR_COSMOS_DB_PRIMARY_KEY>";

CosmosClient cosmosClient = new CosmosClient(endpointUri, primaryKey);
```

---

## 🗄️ Create Database

```csharp
string databaseId = "MyDatabase";

// Create the database if it does not exist
Database database = await cosmosClient.CreateDatabaseIfNotExistsAsync(databaseId);
Console.WriteLine($"✅ Database Created: {database.Id}");
```

---

## 📂 Create Container

```csharp
string containerId = "MyContainer";
string partitionKeyPath = "/category"; // Adjust to your data model

Container container = await database.CreateContainerIfNotExistsAsync(containerId, partitionKeyPath);
Console.WriteLine($"✅ Container Created: {container.Id}");
```

---

## 💾 Insert a Sample Document

```csharp
public class Product
{
    public string id { get; set; }
    public string name { get; set; }
    public string category { get; set; }
}

Product item = new Product
{
    id = Guid.NewGuid().ToString(),
    name = "Cosmos Widget",
    category = "Tools"
};

ItemResponse<Product> response = await container.CreateItemAsync(item, new PartitionKey(item.category));
Console.WriteLine($"✅ Item created with RU charge: {response.RequestCharge}");
```

---

## 📁 Full Example

```csharp
using System;
using System.Threading.Tasks;
using Microsoft.Azure.Cosmos;

class Program
{
    private static readonly string EndpointUri = "<YOUR_COSMOS_DB_URI>";
    private static readonly string PrimaryKey = "<YOUR_COSMOS_DB_PRIMARY_KEY>";
    private static CosmosClient cosmosClient;
    private static Database database;
    private static Container container;

    public static async Task Main(string[] args)
    {
        cosmosClient = new CosmosClient(EndpointUri, PrimaryKey);

        database = await cosmosClient.CreateDatabaseIfNotExistsAsync("MyDatabase");
        container = await database.CreateContainerIfNotExistsAsync("MyContainer", "/category");

        var product = new
        {
            id = Guid.NewGuid().ToString(),
            name = "Cosmos DB Example",
            category = "Demo"
        };

        await container.CreateItemAsync(product, new PartitionKey(product.category));
        Console.WriteLine("✅ Item inserted successfully!");
    }
}
```

---

## 🧠 Notes

* `PartitionKey` is **required** for scalability and performance.
* Always use `CreateDatabaseIfNotExistsAsync` and `CreateContainerIfNotExistsAsync` for idempotency.
* RU/s (Request Units per second) are billed — query/insert cost is shown via `response.RequestCharge`.

---

## 📚 Resources

* [Official Cosmos DB .NET SDK Docs](https://learn.microsoft.com/en-us/dotnet/api/overview/azure/cosmosdb)
* [Azure Cosmos DB Pricing](https://azure.microsoft.com/en-us/pricing/details/cosmos-db/)
* [Quickstart with Cosmos DB SQL API](https://learn.microsoft.com/en-us/azure/cosmos-db/sql/sql-api-dotnet-application)

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
