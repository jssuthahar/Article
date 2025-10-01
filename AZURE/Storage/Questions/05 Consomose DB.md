
You are developing an application to collect telemetry data for delivery drivers:

* First name
* Last name
* Package count
* Item ID
* Current location coordinates

The app will store the data in **Azure Cosmos DB**. You need to **configure Cosmos DB** to query the data efficiently.

**Question:** Select the correct values for:

1. **API type**
2. **Partition key**

---

## Correct Answers

| Selection                 | Correct Value  | Explanation                                                                                                                                                                     |
| ------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Box 1 (API type)**      | **Core (SQL)** | Core (SQL) API stores data in **document format (JSON)** and provides the **full SDK and SQL querying capability**. Ideal for telemetry data with complex queries.              |
| **Box 2 (Partition key)** | **item id**    | The partition key should be a value that **uniquely distributes data** and avoids hot partitions. **Item ID** is unique for each record, making it suitable as a partition key. |

---

### Explanation

1. **Core (SQL) API**:

   * Stores data in JSON documents.
   * Supports **rich queries** using SQL-like syntax.
   * Offers full SDK support for multiple languages.
   * Allows **operational and analytical workloads** to run without interference.

2. **Partition key** (item id):

   * Cosmos DB partitions data using the partition key.
   * A good partition key **distributes data evenly** across physical partitions.
   * **Item ID** is unique per document, which avoids “hot partitions” and ensures scalability.

---

**References:**

* [Choose the right Azure Cosmos DB API](https://learn.microsoft.com/en-us/azure/cosmos-db/choose-api)
* [Partitioning overview in Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/partitioning-overview)

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
