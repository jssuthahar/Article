# 📚 Introduction to NoSQL Databases

## 🧠 What You'll Learn

- ✅ What is a NoSQL database?
- ✅ Why and when to use NoSQL?
- ✅ Types of NoSQL databases: Document, Key-Value, Column-Family, and Graph.
- ✅ Key differences between NoSQL and SQL databases.
- ✅ What is Azure Cosmos DB and its NoSQL support?

---

## 🔍 What is a NoSQL Database?

**NoSQL** (Not Only SQL) databases provide a flexible alternative to traditional relational databases. They store and retrieve data in formats other than rows and columns, such as JSON, key-value pairs, or graph structures.

NoSQL databases are designed for:
- High performance
- Horizontal scalability
- Flexibility in data modeling

---

## ❓ Why and When to Use NoSQL?

You should consider NoSQL databases when:

- 🔁 The data structure is **dynamic or frequently changes**.
- 🌍 You need **horizontal scaling** across distributed environments.
- ⚡ You require **low latency and high throughput**.
- 📦 You are handling **large volumes of unstructured or semi-structured data**.
- 💼 Real-world use cases include:
  - Real-time analytics
  - IoT data ingestion
  - Mobile applications
  - Recommendation systems
  - Content management systems

---

## 🧱 Types of NoSQL Databases

### 1. 📄 Document Databases
- **Examples:** MongoDB, CouchDB, Azure Cosmos DB (SQL/Mongo API)
- **Structure:** Stores data in JSON or BSON format.
- **Use Case:** Product catalogs, user profiles, content management.

### 2. 🔑 Key-Value Stores
- **Examples:** Redis, DynamoDB, Azure Cosmos DB (Table API)
- **Structure:** Simple key-value pairs.
- **Use Case:** Caching, session storage, simple lookups.

### 3. 🧮 Column-Family Stores
- **Examples:** Cassandra, HBase, Azure Cosmos DB (Cassandra API)
- **Structure:** Data is stored in rows and columns (wide-column format).
- **Use Case:** Time-series data, real-time analytics, logs.

### 4. 🌐 Graph Databases
- **Examples:** Neo4j, ArangoDB, Azure Cosmos DB (Gremlin API)
- **Structure:** Nodes (entities) and edges (relationships).
- **Use Case:** Social networks, recommendation engines, fraud detection.

---

## 🌐 Azure Cosmos DB — Multi-Model NoSQL Database

**Azure Cosmos DB** is Microsoft Azure’s globally distributed, multi-model NoSQL database service.

### 🔹 Supported Models and APIs

| Data Model         | Cosmos DB API     | Description                                     |
|--------------------|-------------------|-------------------------------------------------|
| Document Store     | SQL API, MongoDB  | JSON document support with rich querying        |
| Key-Value Store    | Table API         | Simple key-value pairs, similar to Azure Tables |
| Column-Family Store| Cassandra API     | Wide-column format for high write throughput    |
| Graph Database     | Gremlin API       | Supports graph traversal and relationship logic |

> You select the API based on your application needs during setup.

### 🧠 Cosmos DB Use Cases

- Real-time personalization and recommendation
- IoT and telemetry data
- Multi-region, globally available applications
- Mobile and web apps with high concurrency

---

## ⚖️ SQL vs NoSQL – Key Differences

| Feature             | SQL (Relational)                     | NoSQL (Non-Relational)                       |
|---------------------|---------------------------------------|----------------------------------------------|
| **Schema**         | Predefined, fixed schema              | Dynamic, flexible schema                     |
| **Data Model**     | Tables (rows & columns)               | Document, Key-Value, Column, Graph           |
| **Scalability**    | Vertical (scale-up)                   | Horizontal (scale-out)                       |
| **Consistency**    | ACID-compliant                        | BASE (Eventual consistency)                  |
| **Query Language** | SQL                                   | Varies: MongoQL, CQL, Gremlin, etc.          |
| **Use Cases**      | Structured data, transactional systems| Big data, real-time, rapidly evolving data   |
| **Examples**       | MySQL, PostgreSQL, SQL Server         | MongoDB, Redis, Cassandra, Cosmos DB         |

---

## 🚀 Conclusion

NoSQL databases offer the scalability and flexibility required by modern applications. Azure Cosmos DB stands out as a **versatile, multi-model** NoSQL solution that supports a wide range of use cases across the enterprise.

---

## 📚 References

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Apache Cassandra](https://cassandra.apache.org/)
- [Redis](https://redis.io/)
- [Neo4j](https://neo4j.com/)
- [Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/introduction)

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
