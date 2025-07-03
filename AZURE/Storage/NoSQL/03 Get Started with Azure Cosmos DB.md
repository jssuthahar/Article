# 🌍 Get Started with Azure Cosmos DB

Azure Cosmos DB is a fully managed NoSQL database service for modern app development. It offers **global distribution**, **multi-model support**, **guaranteed low latency**, and **elastic scalability**.

---

## 📚 What You’ll Learn

* What is Azure Cosmos DB?
* Key Concepts: Database, Container, Partition
* How to create and connect to a Cosmos DB account
* How to insert, read, and query data
* Real-world use cases

---

## 🚀 What is Azure Cosmos DB?

Azure Cosmos DB is a **globally distributed**, **multi-model** database service. It supports:

* Document (Core SQL API)
* Key-Value (Table API)
* Graph (Gremlin API)
* Column-Family (Cassandra API)
* MongoDB (compatible API)

It guarantees:

* <10 ms reads and writes
* 99.999% availability
* Horizontal scaling with automatic partitioning

---

## 🔑 Key Concepts

| Term              | Description                                                                    |
| ----------------- | ------------------------------------------------------------------------------ |
| **Account**       | The top-level resource. Globally distributed and multi-API                     |
| **Database**      | Logical container for data                                                     |
| **Container**     | Stores JSON documents (or other types depending on API). Scales automatically. |
| **Item**          | A single record (e.g., JSON document)                                          |
| **Partition Key** | Determines how data is distributed                                             |

---

## 🧭 Step-by-Step: Getting Started

### 🏗️ 1. Create a Cosmos DB Account

1. Go to [Azure Portal](https://portal.azure.com/)
2. Click **Create a resource** → **Databases** → **Azure Cosmos DB**
3. Choose the API (e.g., **Core (SQL)**)
4. Enter the **resource group**, **account name**, and **region**
5. Click **Review + Create** → **Create**

---

### 🧱 2. Create a Database and Container

1. Open your Cosmos DB account in the portal
2. Click **Data Explorer**
3. Click **New Database**

   * Enter a **Database ID**
4. Click **New Container**

   * Enter a **Container ID**
   * Choose a **Partition Key** (e.g., `/department`)
   * Set **Throughput (RU/s)** or use shared

---

### 💻 3. Add Sample Data (Documents)

In **Data Explorer**, inside your container:

```json
{
  "id": "1",
  "name": "John Doe",
  "department": "HR",
  "city": "New York"
}
```

Click **Items → New Item** and paste the JSON above → **Save**

---

### 🔌 4. Connect from a C# App

Install NuGet Package:

```bash
dotnet add package Microsoft.Azure.Cosmos
```

Sample C# Code:

```csharp
CosmosClient client = new CosmosClient("<your-endpoint>", "<your-key>");
Database db = await client.CreateDatabaseIfNotExistsAsync("CompanyDB");
Container container = await db.CreateContainerIfNotExistsAsync("Employees", "/department");

var employee = new { id = "2", name = "Jane Doe", department = "IT", city = "Seattle" };
await container.CreateItemAsync(employee, new PartitionKey("IT"));
```

---

## 📊 Real-time Use Cases

* **E-commerce**: Product catalog with JSON documents
* **IoT**: Sensor data ingested at high speed
* **Gaming**: Player stats and session storage
* **Financial Apps**: High availability for transactions across regions

---

## 🌍 Multi-region Writes (Optional)

You can enable **multi-region writes** for high availability:

* Go to your Cosmos DB → **Replicate Data Globally**
* Add additional regions
* Turn on **Multi-region Writes**

---

## 📈 Monitoring & Scaling

* Use **Azure Monitor** and **Metrics** blade
* Auto-scale RU/s for dynamic workloads
* Alerts for RU consumption and throttling

---

## 📎 Notes

* Cosmos DB uses **Request Units (RU/s)** as the pricing model
* You can query data using **SQL-like syntax** (for Core API)
* Avoid hot partitions by choosing a good partition key

---

## 📘 Helpful Links

* [Azure Cosmos DB Documentation](https://learn.microsoft.com/en-us/azure/cosmos-db/)
* [Cosmos DB SQL Query Examples](https://learn.microsoft.com/en-us/azure/cosmos-db/sql-query-getting-started)
* [Azure SDK for .NET](https://github.com/Azure/azure-sdk-for-net)

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
