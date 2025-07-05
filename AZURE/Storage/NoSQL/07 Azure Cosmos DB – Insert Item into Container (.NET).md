# 📘 Azure Cosmos DB – Insert Item into Container (.NET)

## 🧾 Overview

This guide shows how to use the Azure Cosmos DB SDK for .NET to:

* Connect to Cosmos DB using a connection string
* Create a database and container (if not exists)
* Add a new document (item) to the container

---

## 🔧 Prerequisites

* .NET 6 or later
* NuGet Package: `Microsoft.Azure.Cosmos`

Install via NuGet:

```bash
dotnet add package Microsoft.Azure.Cosmos
```

---

## 🔐 Get Your Connection String

In the Azure portal:

1. Go to your **Cosmos DB account**.
2. Navigate to **Keys**.
3. Copy the **Primary Connection String**.

Example format:

```
AccountEndpoint=https://<your-account>.documents.azure.com:443/;AccountKey=<your-key>;
```

---

## 💻 Sample Code: Insert Item into Cosmos DB

```csharp
using System;
using System.Threading.Tasks;
using Microsoft.Azure.Cosmos;

namespace CosmosDbInsertDemo
{
    class Program
    {
        private static readonly string connectionString = "<Your_Connection_String>";
        private static readonly string databaseId = "SchoolDB";
        private static readonly string containerId = "Students";

        static async Task Main(string[] args)
        {
            CosmosClient cosmosClient = new CosmosClient(connectionString);

            // Create database and container if they do not exist
            Database database = await cosmosClient.CreateDatabaseIfNotExistsAsync(databaseId);
            Container container = await database.CreateContainerIfNotExistsAsync(containerId, "/id");

            // Create a sample item
            var student = new
            {
                id = Guid.NewGuid().ToString(),
                name = "John Doe",
                grade = "A",
                enrolled = true,
                subjects = new[] { "Math", "Science" },
                createdAt = DateTime.UtcNow
            };

            // Insert item into container
            ItemResponse<dynamic> response = await container.CreateItemAsync(student, new PartitionKey(student.id));

            Console.WriteLine($"Item inserted: {response.Resource}");
        }
    }
}
```

---

## 📄 Example Document Stored in Container

```json
{
  "id": "bde1a123-...-4a7a",
  "name": "John Doe",
  "grade": "A",
  "enrolled": true,
  "subjects": ["Math", "Science"],
  "createdAt": "2025-07-05T10:00:00Z"
}
```

---

## 🧪 Notes

* The `id` field is **mandatory** in Cosmos DB documents.
* The partition key path must match the path you define (e.g., `/id`).
* Use `CreateItemAsync()` to insert one item.
* Use `UpsertItemAsync()` to insert or update an item.

---

## 📚 References

* [Azure Cosmos DB SDK for .NET](https://learn.microsoft.com/en-us/azure/cosmos-db/sql/sql-sdk-dotnet)
* [Cosmos DB CreateItemAsync Docs](https://learn.microsoft.com/en-us/dotnet/api/microsoft.azure.cosmos.container.createitemasync)

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
