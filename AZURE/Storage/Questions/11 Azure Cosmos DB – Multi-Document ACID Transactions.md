
# 🌌 Azure Cosmos DB – Multi-Document ACID Transactions

This document explains how to configure **Azure Cosmos DB** to support **ACID transactions across multiple documents** that belong to the same user.

It includes the exam-style question, detailed analysis, correct answers, and reasoning for each option.

---

## ❓ Question

You are updating an application that stores data on Azure and uses **Azure Cosmos DB** for storage.  
The application stores data in **multiple documents associated with a single username**.

The application requires the ability to **update multiple documents for a username in a single ACID operation**.

You need to configure Azure Cosmos DB.

**Which two actions should you perform?**  
> Each correct answer presents part of the solution.  
> NOTE: Each correct selection is worth one point.

---

### Options
A. Create a **collection sharded on username** to store documents.  
B. Configure Azure Cosmos DB to use the **Gremlin API**.  
C. Create an **unsharded collection** to store documents.  
D. Configure Azure Cosmos DB to use the **MongoDB API**.

---

## ✅ Correct Answer
**C and D**

- **C. Create an unsharded collection to store documents**  
- **D. Configure Azure Cosmos DB to use the MongoDB API**

---

## 📖 Detailed Explanation

### 🔑 Core Requirement: Multi-Document ACID Transactions
- **ACID transaction**: A single unit of work where either all operations succeed or none do (Atomic, Consistent, Isolated, Durable).
- Cosmos DB supports **multi-document transactions only within the same logical partition**.
- To meet the requirement:
  - All documents that must be updated together must reside in the **same partition**.
  - The API chosen must support **transactional batch operations**.

---

### 🟩 Correct Options

#### ✅ C. Create an unsharded collection
- An **unsharded collection** in Cosmos DB has **only one partition key** (or no explicit partition key), so all documents reside in the **same logical partition**.
- When all documents are in the same partition, you can execute **multi-document ACID transactions**.
- If you shard on `username` but choose multiple partitions, updates across different partitions cannot be wrapped in one transaction.
- **Key point:** Transactions in Cosmos DB are **partition-scoped**.

---

#### ✅ D. Configure Azure Cosmos DB to use the MongoDB API
- The **MongoDB API** in Cosmos DB supports **multi-document ACID transactions** within the same partition (v4.0+).
- Developers familiar with MongoDB can use:
  ```javascript
  session.startTransaction();
  // perform multiple operations
  session.commitTransaction();

* This API allows you to update **multiple documents in one ACID operation** as long as they are in the same partition (i.e., in the same unsharded collection).


### ❌ Incorrect Options

#### ❌ A. Create a collection sharded on username

* Sharding distributes documents across **multiple partitions**.
* Cosmos DB transactions cannot span multiple partitions.
* Even though sharding by username groups related documents, if the user set is large, each username might still reside in a separate partition, preventing **multi-document transactions across usernames**.

---

#### ❌ B. Configure Azure Cosmos DB to use the Gremlin API

* The **Gremlin API** is for graph data models.
* While it supports transactions for a single graph traversal, it does **not provide multi-document ACID batch updates** across arbitrary JSON documents in the way needed here.

---

## ⚡ Why C + D?

* **Requirement:** Update multiple documents for a single username in one ACID operation.
* To achieve this:

  1. Place all user-related documents in the **same partition** → requires **unsharded collection**.
  2. Use an API that supports multi-document ACID transactions → **MongoDB API**.

---

## 🟢 Best Practices

* When you need transactions across multiple documents, **design the partition key** so that all related items reside in the same partition.
* Choose the **MongoDB API** (or SQL API with transactional batch in the same partition) if your app needs multi-document ACID semantics.
* Avoid sharding when the data volume is small enough to fit into a single partition and you need transactional updates.

---

## 📝 Example Scenario

* Suppose your application stores the following documents for each user:

  * Profile document
  * Settings document
  * Preferences document

You need to update all three together (e.g., during profile migration).
If they’re all in the same partition (via unsharded collection) and you use the MongoDB API, you can update them in **one transaction**.

---

## 🟢 Key Takeaways

* Cosmos DB **ACID transactions are partition-scoped**.
* To transact across multiple documents → keep them in the same partition.
* MongoDB API supports familiar **multi-document transaction syntax**.

---

## 📚 References

* [Multi-document transactions in Azure Cosmos DB](https://learn.microsoft.com/azure/cosmos-db/mongodb/mongodb-introduction#transactions)
* [Designing partition strategies in Cosmos DB](https://learn.microsoft.com/azure/cosmos-db/partitioning-overview)
* [Cosmos DB APIs](https://learn.microsoft.com/azure/cosmos-db/introduction)

---

## 🏆 Summary Table

| Option                            | Description                                                           | Meets Requirement? |
| --------------------------------- | --------------------------------------------------------------------- | ------------------ |
| A. Collection sharded on username | Spreads documents across partitions → no cross-partition transactions | ❌                  |
| B. Gremlin API                    | Good for graph data, no multi-document batch for JSON docs            | ❌                  |
| C. Unsharded collection           | All documents in one partition → ACID batch possible                  | ✅                  |
| D. MongoDB API                    | Supports multi-document ACID transactions in one partition            | ✅                  |

**✔️ Correct Answer:** C and D

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


