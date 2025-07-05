
# 📘 Azure Cosmos DB – Update Item in Container (.NET)

## 🧾 Overview

This guide demonstrates how to update an item (document) in Azure Cosmos DB using the **.NET SDK**:

* Connect with connection string
* Read an existing item
* Update item fields
* Replace the item in the container

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

Get your connection string from the **Azure Portal**:

```
AccountEndpoint=https://<your-account>.documents.azure.com:443/;AccountKey=<your-key>;
```

---

## 📄 Sample Document

```json
{
  "id": "stu01",
  "name": "John Doe",
  "grade": "B",
  "subjects": ["Math", "Science"]
}
```

---

## ✅ Updating an Item Using `ReplaceItemAsync()`

```csharp
using Microsoft.Azure.Cosmos;
using System;
using System.Threading.Tasks;

namespace CosmosDbUpdateDemo
{
    class Program
    {
        private static readonly string connectionString = "<Your_Connection_String>";
        private static readonly string databaseId = "SchoolDB";
        private static readonly string containerId = "Students";

        static async Task Main(string[] args)
        {
            CosmosClient client = new CosmosClient(connectionString);
            Container container = client.GetContainer(databaseId, containerId);

            string itemId = "stu01";
            string partitionKey = "stu01";

            try
            {
                // Step 1: Read the existing item
                ItemResponse<dynamic> readResponse = await container.ReadItemAsync<dynamic>(itemId, new PartitionKey(partitionKey));
                dynamic student = readResponse.Resource;

                Console.WriteLine("Before Update:");
                Console.WriteLine(student);

                // Step 2: Modify the item
                student.grade = "A+";
                student.subjects.Add("English");

                // Step 3: Replace the item
                ItemResponse<dynamic> updateResponse = await container.ReplaceItemAsync(student, itemId, new PartitionKey(partitionKey));

                Console.WriteLine("After Update:");
                Console.WriteLine(updateResponse.Resource);
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

## 🛠️ Notes

* `ReplaceItemAsync()` completely replaces the document.
* You must **preserve all required properties**, including `id` and any partition key fields.
* If you omit a field in the replacement, it will be deleted from the document.

---

## 🧪 Alternative: Upsert (Insert or Update)

```csharp
await container.UpsertItemAsync(student, new PartitionKey(student.id));
```

* Automatically inserts if not present, otherwise updates the document.
* Good for merge-like operations.

---

## 📚 References

* [ReplaceItemAsync Documentation](https://learn.microsoft.com/en-us/dotnet/api/microsoft.azure.cosmos.container.replaceitemasync)
* [UpsertItemAsync Documentation](https://learn.microsoft.com/en-us/dotnet/api/microsoft.azure.cosmos.container.upsertitemasync)

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
