# 📘 Azure Cosmos DB – Table API

## 🧾 Overview

**Azure Cosmos DB Table API** is a schema-less, key-value NoSQL database that allows you to store and query large amounts of structured and unstructured data using the **Azure Table storage API** — but with Cosmos DB's performance, scalability, and global distribution benefits.

---

## ❓ What Is Table API?

The **Table API** in Azure Cosmos DB is:

* **Compatible** with Azure Table Storage SDKs.
* Designed for applications that already use **Table Storage**, but need:

  * **Low latency**
  * **Global distribution**
  * **High availability**
  * **Automatic indexing**

It provides the **same programming model** as Azure Table Storage, but with additional Cosmos DB features like:

| Feature                    | Azure Table Storage | Cosmos DB Table API |
| -------------------------- | ------------------- | ------------------- |
| Global Distribution        | ❌                   | ✅                   |
| Automatic Indexing         | ❌                   | ✅                   |
| Multi-region Writes        | ❌                   | ✅                   |
| SLAs (Latency, Throughput) | ❌                   | ✅                   |
| Tunable Throughput (RU/s)  | ❌                   | ✅                   |

---

## ✅ Why Use Table API?

* You need **Table Storage features** with **enterprise-grade performance**.
* You want to **migrate existing apps** using Table Storage to Cosmos DB without code changes.
* You need to scale storage and throughput **horizontally across regions**.
* You want **low latency reads/writes** with automatic **indexing**.

---

## 🚀 Steps to Create a Table API Account in Azure

### 🔧 Step 1: Create Azure Cosmos DB Account

1. Go to [Azure Portal](https://portal.azure.com)
2. Search for **"Azure Cosmos DB"**
3. Click **"Create"**
4. Choose **API option**:
   ✅ Select **"Azure Table"** as the API
5. Fill in basic settings:

   * Subscription
   * Resource group
   * Account name
   * Region
6. Click **"Review + Create"**

---

### 🗄️ Step 2: Create Table

1. Once the account is deployed, open the Cosmos DB resource
2. Go to the **"Tables"** blade
3. Click **"Add Table"**
4. Provide a table name (e.g., `EmployeeTable`)
5. Click **"OK"**

---

### 💻 Step 3: Connect and Use

#### .NET Example using Azure.Data.Tables SDK

Install NuGet package:

```bash
dotnet add package Azure.Data.Tables
```

```csharp
using Azure.Data.Tables;

string connectionString = "<Your_Cosmos_Table_API_Connection_String>";
string tableName = "EmployeeTable";

// Create client
TableServiceClient serviceClient = new TableServiceClient(connectionString);

// Create table if not exists
TableClient tableClient = serviceClient.GetTableClient(tableName);
tableClient.CreateIfNotExists();

// Create and insert entity
var employee = new TableEntity("HR", "E001")
{
    { "Name", "John Doe" },
    { "Role", "Manager" }
};

tableClient.AddEntity(employee);
```

---

## 📚 Table Entity Structure

Each entity is stored as:

* **PartitionKey** (string)
* **RowKey** (string)
* **Timestamp** (auto-generated)
* Additional custom properties (Name, Age, etc.)

> PartitionKey + RowKey = Unique Identifier

---

## 📌 Limitations

* Table API supports only **key-value storage** (not document-style like SQL API).
* Querying is limited compared to SQL API (no joins or complex filters).
* SDK support is available for **.NET**, **Java**, **Node.js**, **Python**, etc.

---

## 🔒 Authentication Options

* **Connection string** (from Azure Portal → Keys)
* **Azure AD identity** (with newer SDKs)

---

## 📚 References

* [Azure Cosmos DB Table API Overview](https://learn.microsoft.com/en-us/azure/cosmos-db/table/table-overview)
* [Azure.Data.Tables SDK Docs](https://learn.microsoft.com/en-us/dotnet/api/overview/azure/data.tables-readme)

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
