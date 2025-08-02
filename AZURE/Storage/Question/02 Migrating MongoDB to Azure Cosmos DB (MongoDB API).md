# 🚀 Migrating MongoDB to Azure Cosmos DB (MongoDB API)

This README outlines a real-world scenario on migrating a self-hosted MongoDB database to Azure Cosmos DB using the correct tools and methodology. It includes an evaluation of the provided options and explains why `mongorestore` is the correct answer.

---

## ❓ Question Summary

> Your company has an on-premises deployment of **MongoDB**, and an **Azure Cosmos DB** account that uses the **MongoDB API**.
>
> You need to devise a strategy to migrate MongoDB to the Azure Cosmos DB account.
>
> You include the **Data Management Gateway** tool in your migration strategy.

> **Instructions:** Review the underlined text: `Data Management Gateway`. If it makes the statement correct, select **No change required**. If the statement is incorrect, choose the most appropriate alternative.

### 🔹 Options:

* A. No change required
* B. **mongorestore** ✅
* C. Azure Storage Explorer
* D. AzCopy

### ✅ Correct Answer: **B. mongorestore**

---

## 🔍 Explanation of Options

### 🔸 A. No change required ❌

* **Incorrect.**
* **Data Management Gateway** is used primarily for on-premises data gateway scenarios involving **Power BI**, **Azure Data Factory**, or **Logic Apps**, but **not MongoDB migration**.

### 🔸 B. mongorestore ✅

* **Correct.**
* `mongorestore` is the native MongoDB tool used to restore a **binary backup** created with `mongodump`.
* It supports restoring directly to **Cosmos DB (MongoDB API)**, making it the ideal tool.

### 🔸 C. Azure Storage Explorer ❌

* Used to browse and manage **Azure Storage accounts** (Blob, Queue, Table, File).
* Not related to Cosmos DB MongoDB API or data migration.

### 🔸 D. AzCopy ❌

* AzCopy is used to copy **files** or **blobs** to/from Azure Storage.
* Does **not** support MongoDB-specific document migration.

---

## 🛠️ Migration Strategy Using mongorestore

1. **Dump the MongoDB database**:

```bash
mongodump --uri="mongodb://localhost:27017" --out=/backups/mongodata
```

2. **Restore to Cosmos DB (MongoDB API)**:

```bash
mongorestore --uri="mongodb://<cosmos-db-uri>:10255/?ssl=true&replicaSet=globaldb" /backups/mongodata
```

---

## 📘 Real Use Case

> A healthcare provider running MongoDB on-premises wants to scale globally. By migrating to Azure Cosmos DB with MongoDB API support, they maintain compatibility with existing applications while benefiting from global distribution and low-latency performance. Using `mongorestore`, their migration is seamless and low-risk.

---

## ✅ Best Practice

* Always test `mongorestore` in a **dev/test Cosmos DB account** before applying it to production.
* Monitor performance and ensure data integrity after migration.
* Consider **Indexing policies** and **RU provisioning** in Cosmos DB for optimal performance.

---

## 🔗 References

* [Azure Cosmos DB – MongoDB API](https://learn.microsoft.com/en-us/azure/cosmos-db/mongodb/mongodb-introduction)
* [mongorestore documentation](https://www.mongodb.com/docs/database-tools/mongorestore/)
* [Data Migration with Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/import-data)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)

