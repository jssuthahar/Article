# 📘 Azure Cosmos DB – Delete Item from Container (.NET)

## 🧾 Overview

This guide shows how to delete an item from a container in Azure Cosmos DB using the **.NET SDK**:

* Connect to Cosmos DB using a connection string
* Delete an item by `id` and partition key
* Handle errors gracefully

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

1. Go to your **Cosmos DB account**
2. Navigate to **Keys**
3. Copy the **Primary Connection String**

Format:

```
AccountEndpoint=https://<your-account>.documents.azure.com:443/;AccountKey=<your-key>;
```

---

## 📄 Example Document

```json
{
  "id": "stu01",
  "name": "John Doe",
  "grade": "A",
  "subjects": ["Math", "Science"]
}
```

> 📝 The value of `id` is required to delete the document. The **partition key value** must also be known and provided.

---

## ✅ Delete Item Using `DeleteItemAsync()`

```csharp
using Microsoft.Azure.Cosmos;
using System;
using System.Threading.Tasks;

namespace CosmosDbDeleteDemo
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
            string partitionKey = "stu01"; // Must match the partition key value

            try
            {
                ItemResponse<object> response = await container.DeleteItemAsync<object>(itemId, new PartitionKey(partitionKey));
                Console.WriteLine($"Item with ID '{itemId}' deleted. Status code: {response.StatusCode}");
            }
            catch (CosmosException ex) when (ex.StatusCode == System.Net.HttpStatusCode.NotFound)
            {
                Console.WriteLine("Item not found or already deleted.");
            }
        }
    }
}
```

---

## 🧪 Notes

* `DeleteItemAsync()` requires **both** the `id` and the correct **partition key**.
* Deleting an item does **not require reading** it first (but you can if needed).
* If the item does not exist, it throws a `404 NotFound` exception.

---

## 📚 References

* [DeleteItemAsync Documentation](https://learn.microsoft.com/en-us/dotnet/api/microsoft.azure.cosmos.container.deleteitemasync)
* [Azure Cosmos DB .NET SDK Docs](https://learn.microsoft.com/en-us/azure/cosmos-db/sql/sql-sdk-dotnet-standard)

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
