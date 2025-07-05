# 📘 Azure Cosmos DB – Read Item from Container (.NET)

## 🧾 Overview

This guide explains how to read an item from an Azure Cosmos DB container using the **Azure Cosmos DB .NET SDK**:

* Connect using the connection string
* Use `ReadItemAsync()` by ID
* Use `QueryItemsAsync()` with SQL-like syntax

---

## 🔧 Prerequisites

* .NET 6 or later
* NuGet Package: `Microsoft.Azure.Cosmos`

Install with:

```bash
dotnet add package Microsoft.Azure.Cosmos
```

---

## 🔐 Connection String

In the Azure Portal:

1. Open your **Cosmos DB account**
2. Navigate to **Keys**
3. Copy the **Primary Connection String**

Format:

```
AccountEndpoint=https://<your-account>.documents.azure.com:443/;AccountKey=<your-key>;
```

---

## 📄 Sample Document

```json
{
  "id": "stu01",
  "name": "John Doe",
  "grade": "A",
  "subjects": ["Math", "Science"]
}
```

---

## ✅ Method 1: Read Item by `id` using `ReadItemAsync`

```csharp
using Microsoft.Azure.Cosmos;
using System;
using System.Threading.Tasks;

namespace CosmosDbReadDemo
{
    class Program
    {
        private static readonly string connectionString = "<Your_Connection_String>";
        private static readonly string databaseId = "SchoolDB";
        private static readonly string containerId = "Students";

        static async Task Main(string[] args)
        {
            CosmosClient cosmosClient = new CosmosClient(connectionString);
            Container container = cosmosClient.GetContainer(databaseId, containerId);

            string itemId = "stu01";
            string partitionKey = "stu01"; // Must match partition key value

            try
            {
                ItemResponse<dynamic> response = await container.ReadItemAsync<dynamic>(itemId, new PartitionKey(partitionKey));
                Console.WriteLine($"Item read successfully:\n{response.Resource}");
            }
            catch (CosmosException ex) when (ex.StatusCode == System.Net.HttpStatusCode.NotFound)
            {
                Console.WriteLine("Item not found.");
            }
        }
    }
}
```

---

## ✅ Method 2: Read Using SQL Query (`QueryItemsAsync`)

```csharp
string sqlQueryText = "SELECT * FROM c WHERE c.name = @name";

QueryDefinition query = new QueryDefinition(sqlQueryText)
    .WithParameter("@name", "John Doe");

FeedIterator<dynamic> resultSet = container.GetItemQueryIterator<dynamic>(query);

while (resultSet.HasMoreResults)
{
    foreach (var item in await resultSet.ReadNextAsync())
    {
        Console.WriteLine(item);
    }
}
```

---

## 🛠️ When to Use Which

| Method            | Use Case                                                                   |
| ----------------- | -------------------------------------------------------------------------- |
| `ReadItemAsync`   | When you **know the ID and partition key**. Fastest and most efficient.    |
| `QueryItemsAsync` | When you need to **filter based on properties** like `name`, `grade`, etc. |

---

## ⚠️ Tips

* `id` and partition key **must be exact match** for `ReadItemAsync()`.
* Queries consume more RU/s. Use `ReadItemAsync()` for performance-critical access.
* Query supports SQL-like syntax and parameters to avoid injection.

---

## 📚 References

* [ReadItemAsync Docs](https://learn.microsoft.com/en-us/dotnet/api/microsoft.azure.cosmos.container.readitemasync)
* [Querying Cosmos DB with SQL API](https://learn.microsoft.com/en-us/azure/cosmos-db/sql/query-overview)

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
