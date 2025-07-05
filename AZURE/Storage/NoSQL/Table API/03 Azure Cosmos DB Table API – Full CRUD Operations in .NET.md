
# 📘 Azure Cosmos DB Table API – Full CRUD Operations in .NET

## 🧾 Overview

This guide covers how to perform **Create, Read, Update, and Delete (CRUD)** operations on entities in **Azure Cosmos DB Table API** using the **Azure.Data.Tables** SDK in .NET.

✅ Table API is ideal for NoSQL key-value workloads and supports the same programming model as Azure Table Storage, but with global distribution, low latency, and automatic indexing.

---

## 🔧 Prerequisites

* .NET 6 or later
* Azure Cosmos DB Table API account
* Install NuGet package:

```bash
dotnet add package Azure.Data.Tables
```

---

## 🔐 Connection String

From the Azure Portal > Cosmos DB account > **Keys**:

```bash
DefaultEndpointsProtocol=https;AccountName=your-account;AccountKey=your-key;TableEndpoint=https://your-account.table.cosmos.azure.com:443/;
```

---

## 🔨 1. Create Table and Entity

```csharp
using Azure.Data.Tables;

string connectionString = "<Your_Connection_String>";
string tableName = "EmployeeTable";

// Create TableClient
var serviceClient = new TableServiceClient(connectionString);
var tableClient = serviceClient.GetTableClient(tableName);
tableClient.CreateIfNotExists();

// Define entity
var employee = new TableEntity("HR", "E001")
{
    { "Name", "John Doe" },
    { "Email", "john@company.com" },
    { "Role", "Manager" }
};

// Add entity
tableClient.AddEntity(employee);
Console.WriteLine("✅ Entity created.");
```

---

## 📖 2. Read an Entity

```csharp
var entity = tableClient.GetEntity<TableEntity>("HR", "E001");
Console.WriteLine($"Name: {entity.Value["Name"]}, Email: {entity.Value["Email"]}");
```

> 📝 Requires both `PartitionKey` and `RowKey`.

---

## 📝 3. Update an Entity

There are **2 ways**:

### 🔁 Replace Entire Entity

```csharp
var updateEntity = new TableEntity("HR", "E001")
{
    { "Name", "John Doe" },
    { "Email", "john.doe@company.com" }, // updated email
    { "Role", "Senior Manager" }         // updated role
};

tableClient.UpdateEntity(updateEntity, ETag.All, TableUpdateMode.Replace);
Console.WriteLine("🔁 Entity replaced.");
```

### 🧩 Merge (Update Partial Fields)

```csharp
var patchEntity = new TableEntity("HR", "E001")
{
    { "Phone", "1234567890" }
};

tableClient.UpdateEntity(patchEntity, ETag.All, TableUpdateMode.Merge);
Console.WriteLine("🧩 Partial update completed.");
```

---

## ❌ 4. Delete an Entity

```csharp
tableClient.DeleteEntity("HR", "E001");
Console.WriteLine("❌ Entity deleted.");
```

---

## 🧪 Full CRUD Sample Output

```
✅ Entity created.
👀 Reading entity...
Name: John Doe, Email: john@company.com
🔁 Entity replaced.
🧩 Partial update completed.
❌ Entity deleted.
```

---

## 📘 Entity Structure Recap

Each entity must include:

* **PartitionKey** – Logical grouping (e.g., department, customer)
* **RowKey** – Unique ID within partition (e.g., employee ID)
* **Custom properties** – Flexible schema

---

## 📚 References

* [Azure Cosmos DB Table API Overview](https://learn.microsoft.com/en-us/azure/cosmos-db/table/table-overview)
* [Azure.Data.Tables SDK Docs](https://learn.microsoft.com/en-us/dotnet/api/azure.data.tables)

---

## ✅ Next Steps

* Implement **paging and filtering**
* Use **Azure.Identity** for secure auth
* Add **exception handling & logging**
* Explore **batch transactions** for grouped updates

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
