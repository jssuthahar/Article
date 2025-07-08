# 📘 Azure Cosmos DB Stored Procedure Guide 

## 🔰 Table of Contents

1. [What is a Stored Procedure in Cosmos DB?](#1-what-is-a-stored-procedure-in-cosmos-db)
2. [Why Use Stored Procedures?](#2-why-use-stored-procedures)
3. [Stored Procedure Basics](#3-stored-procedure-basics)
4. [Create Your First Stored Procedure](#4-create-your-first-stored-procedure)
5. [Execute Stored Procedure from .NET SDK](#5-execute-stored-procedure-from-net-sdk)
6. [Real-Time Examples](#6-real-time-examples)
7. [Advanced Usage](#7-advanced-usage)
8. [Best Practices](#8-best-practices)
9. [Limitations](#9-limitations)
10. [References](#10-references)

---

## 1. What is a Stored Procedure in Cosmos DB?

A **stored procedure** in Azure Cosmos DB is a **JavaScript function** that runs **within the database engine**. It allows server-side logic like bulk insert, transactional updates, or data validation.

✅ Cosmos DB stored procedures:

* Run **in the scope of a single partition key**
* Execute **atomically** (all or nothing)
* Are written in **JavaScript**

---

## 2. Why Use Stored Procedures?

🔹 Use cases:

* **Transactional logic** (e.g., transfer funds, batch update)
* **Bulk operations** (e.g., bulk insert/update)
* **Performance**: reduces round-trips between app and DB
* **Security**: logic hidden from the client

---

## 3. Stored Procedure Basics

* Written in **JavaScript**
* Always associated with a **container**
* Must be **deployed** to Cosmos DB
* Executed **within a partition**

### Example Syntax

```javascript
function sampleProc() {
    var context = getContext();
    var response = context.getResponse();
    response.setBody("Hello from Cosmos DB!");
}
```

---

## 4. Create Your First Stored Procedure

### 📌 JavaScript Stored Procedure

```javascript
function helloWorld() {
    var context = getContext();
    var response = context.getResponse();
    response.setBody("Hello Cosmos!");
}
```

### Deploy via Azure Portal:

1. Go to **Azure Portal** → Cosmos DB → Data Explorer
2. Select your **container**
3. Click **Stored Procedures** → **New Stored Procedure**
4. Paste the code and click **Save**

---

## 5. Execute Stored Procedure from .NET SDK

### 📦 Install Package

```bash
dotnet add package Microsoft.Azure.Cosmos
```

### ✅ Execute Stored Procedure

```csharp
var cosmosClient = new CosmosClient("<connection-string>");
var container = cosmosClient.GetContainer("databaseId", "containerId");

var result = await container.Scripts.ExecuteStoredProcedureAsync<string>(
    storedProcedureId: "helloWorld",
    partitionKey: new PartitionKey("your-partition-key"),
    parameters: null
);

Console.WriteLine(result.Resource);
```

---

## 6. Real-Time Examples

### 6.1 Bulk Insert

```javascript
function bulkInsert(docs) {
    var context = getContext();
    var container = context.getCollection();
    var count = 0;

    if (!docs) throw new Error("Documents are required");

    var createDoc = function () {
        if (count >= docs.length) return context.getResponse().setBody(count);

        var accepted = container.createDocument(container.getSelfLink(), docs[count], function (err) {
            if (err) throw err;
            count++;
            createDoc();
        });

        if (!accepted) return;
    };

    createDoc();
}
```

### .NET SDK to call:

```csharp
List<object> items = new List<object>
{
    new { id = "1", name = "Item 1" },
    new { id = "2", name = "Item 2" }
};

var result = await container.Scripts.ExecuteStoredProcedureAsync<int>(
    "bulkInsert",
    new PartitionKey("partition-key"),
    new dynamic[] { items }
);
```

---

## 7. Advanced Usage

### 7.1 Read and Update Atomically

```javascript
function updateItem(id, newName) {
    var context = getContext();
    var container = context.getCollection();
    var query = `SELECT * FROM c WHERE c.id = '${id}'`;

    var isAccepted = container.queryDocuments(container.getSelfLink(), query, {}, function (err, docs) {
        if (err) throw new Error("Query failed");
        if (!docs || docs.length !== 1) throw new Error("Item not found");

        var doc = docs[0];
        doc.name = newName;

        var isAccepted = container.replaceDocument(doc._self, doc, function (err, updatedDoc) {
            if (err) throw err;
            context.getResponse().setBody(updatedDoc);
        });

        if (!isAccepted) throw new Error("Replace not accepted");
    });

    if (!isAccepted) throw new Error("Query not accepted");
}
```

---

## 8. Best Practices

✔ Keep stored procedure code minimal and focused
✔ Use stored procedures **only for single-partition operations**
✔ Always **validate inputs**
✔ Catch and log exceptions for debugging
✔ Avoid blocking I/O or infinite loops

---

## 9. Limitations

⚠ Cosmos DB Stored Procedures:

* Only work **within the same partition**
* Are **limited to JavaScript**
* Max execution time: **5 seconds**
* Cannot access other containers or services

---

## 10. References

* [Azure Cosmos DB Documentation](https://learn.microsoft.com/en-us/azure/cosmos-db/)
* [Cosmos DB JavaScript Server-side Programming](https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-write-stored-procedures-triggers-udfs)
* [.NET SDK Guide](https://learn.microsoft.com/en-us/dotnet/api/overview/azure/cosmos-db)

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
