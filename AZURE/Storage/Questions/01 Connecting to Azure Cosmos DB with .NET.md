# 🌍 Connecting to Azure Cosmos DB with .NET

---

## ❓ Question

You develop **Azure solutions**.

* You must connect to a **No-SQL globally-distributed database** using the **.NET API**.
* You need to create an object to **configure and execute requests** in the database.

**Which code segment should you use?**

Options:
A. `new Container(EndpointUri, PrimaryKey);`
B. `new Database(EndpointUri, PrimaryKey);`
C. `new CosmosClient(EndpointUri, PrimaryKey);`

---

## ✅ Correct Answer: **C. CosmosClient**

---

## 📝 Detailed Explanation

### 🔹 Why CosmosClient?

* `CosmosClient` is the **entry point** for working with **Azure Cosmos DB** in .NET.
* You create **one client instance per application** (best practice).
* From the `CosmosClient`, you can:

  * Create or connect to a **Database**
  * Create or connect to a **Container**
  * Execute queries, insert items, delete items, etc.

👉 Example:

```csharp
// Create a new instance of the Cosmos Client
CosmosClient cosmosClient = new CosmosClient(EndpointUri, PrimaryKey);

// Create a database if it doesn't exist
Database database = await cosmosClient.CreateDatabaseIfNotExistsAsync("appDatabase");

// Create a container if it doesn't exist
Container container = await database.CreateContainerIfNotExistsAsync("appContainer", "/partitionKey");
```

---

### 🔹 Why not the others?

* **A. `Container(…)`** → You don’t create a container object directly like this. Containers are created **through CosmosClient**.
* **B. `Database(…)`** → Same issue, database objects are also created **through CosmosClient**.

Both **Database** and **Container** are objects you work with *after* initializing the client.

---

## 👶 Kid-Friendly Analogy

Imagine you’re going to a **big global library (Cosmos DB)** 🌍📚.

* First, you need a **Library Card (CosmosClient)** to get inside.
* With that card, you can open a **Bookshelf Section (Database)**.
* Inside the section, you can open a **Bookshelf (Container)** that stores actual **Books (documents/items)**.

Without the **card (CosmosClient)**, you can’t even reach the shelves.

---

## 📚 Reference

* [Azure Cosmos DB SQL API - Get started with .NET](https://docs.microsoft.com/en-us/azure/cosmos-db/sql-api-get-started)

---

✅ **Answer: C. CosmosClient**

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


