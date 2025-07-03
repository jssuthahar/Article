# 🌍 Azure Cosmos DB 

Azure Cosmos DB is a globally distributed, multi-model NoSQL database service offered by Microsoft Azure. It is built to provide millisecond response times, elastic scalability, and guaranteed high availability for mission-critical applications.

---

## 📘 What You'll Learn

- What is Azure Cosmos DB?
- Resource hierarchy: Account > Database > Container > Document
- Supported NoSQL models and APIs
- How data is added to Cosmos DB
- Key features and benefits
- Real-world use cases
- Sample code examples

---

## 🧱 Cosmos DB Resource Hierarchy

```

Cosmos DB Account
└── Database
└── Container (aka Collection)
└── Document (aka Item)

````

| Level         | Description                                      |
|---------------|--------------------------------------------------|
| **Account**   | Manages API type, global regions, consistency.   |
| **Database**  | Logical grouping of containers.                  |
| **Container** | Stores documents/items, defines partition key.   |
| **Document**  | The actual JSON object (your data record).       |

---

## 🧾 Example Document

```json
{
  "id": "1",
  "name": "Laptop",
  "category": "Electronics",
  "price": 999
}
````

---

## 💡 How Data Is Added to Cosmos DB

### 🔹 Step-by-Step Process

1. **Create Cosmos DB Account** (choose SQL, MongoDB, etc.)
2. **Create a Database** within the account.
3. **Create a Container** inside the database (define partition key).
4. **Insert Data (Documents)** via SDK, REST API, or Data Explorer.

### 🔹 Common Tools for Inserting Data

* Azure Portal (Data Explorer)
* SDKs: .NET, Java, Node.js, Python, Go, etc.
* REST API
* Azure Functions / Logic Apps / Power Automate

---

## 🧪 Sample Code for Adding Data

### ✅ C# (.NET) – SQL API

```csharp
using Microsoft.Azure.Cosmos;

var client = new CosmosClient("<connection-string>");
var database = await client.CreateDatabaseIfNotExistsAsync("RetailDb");
var container = await database.CreateContainerIfNotExistsAsync("Products", "/category");

var product = new { id = "1", name = "Laptop", category = "Electronics", price = 999 };
await container.CreateItemAsync(product, new PartitionKey(product.category));
```

---

### ✅ JavaScript (Node.js)

```javascript
const { CosmosClient } = require("@azure/cosmos");
const client = new CosmosClient("<connection-string>");

async function run() {
  const db = client.database("RetailDb");
  const container = db.container("Products");

  const product = {
    id: "1",
    name: "Laptop",
    category: "Electronics",
    price: 999
  };

  const { resource } = await container.items.create(product);
  console.log(`Inserted item with id: ${resource.id}`);
}

run();
```

---

### ✅ Python

```python
from azure.cosmos import CosmosClient, PartitionKey

client = CosmosClient("<account-url>", credential="<key>")
database = client.create_database_if_not_exists("RetailDb")
container = database.create_container_if_not_exists(
    id="Products", 
    partition_key=PartitionKey(path="/category")
)

product = {
    "id": "1",
    "name": "Laptop",
    "category": "Electronics",
    "price": 999
}

container.create_item(body=product)
```

---

## 🚀 Key Features

* 🌐 Global distribution
* ⚡ Low latency (<10 ms)
* 📈 Elastic scalability
* 🔁 Multi-model support
* ✅ 99.999% SLA
* 🔐 Built-in security & RBAC
* 💰 Pay-per-use (serverless, autoscale)

---

## 🔁 Consistency Models

| Model                 | Description                 |
| --------------------- | --------------------------- |
| **Strong**            | Linearizability             |
| **Bounded Staleness** | Staleness window            |
| **Session** (default) | Monotonic for a session     |
| **Consistent Prefix** | Ordered reads               |
| **Eventual**          | Fastest, lowest consistency |

---

## 📦 Real-World Use Cases

| Domain       | Use Case Examples                                 |
| ------------ | ------------------------------------------------- |
| E-Commerce   | Product catalogs, shopping carts, recommendations |
| IoT          | Device telemetry, time-series data                |
| Social Media | Graph relationships, chat storage                 |
| Finance      | Fraud detection, transaction logs                 |
| Gaming       | User profiles, scores, inventory tracking         |

---

## 📊 Pricing Options

| Mode                 | Best For                   |
| -------------------- | -------------------------- |
| **Provisioned RU/s** | Predictable workloads      |
| **Autoscale**        | Dynamic workloads          |
| **Serverless**       | Infrequent or bursty usage |

---

## 📚 Resources

* [Azure Cosmos DB Docs](https://learn.microsoft.com/en-us/azure/cosmos-db/introduction)
* [Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/)
* [Sample Code](https://github.com/Azure-Samples/azure-cosmos-db-samples)
* [Quickstart with .NET](https://learn.microsoft.com/en-us/azure/cosmos-db/sql/sql-api-get-started)

---

## ✅ Summary

| Feature                | Cosmos DB                               |
| ---------------------- | --------------------------------------- |
| Models Supported       | Document, Key-Value, Column, Graph      |
| APIs                   | SQL, MongoDB, Cassandra, Table, Gremlin |
| Global Distribution    | ✅ Yes                                   |
| Millisecond Latency    | ✅ Yes                                   |
| Horizontal Scalability | ✅ Yes (via partition key)               |
| Use Cases              | Web apps, IoT, finance, gaming          |

---

Azure Cosmos DB is ideal for building **modern, globally distributed applications** that require **low latency, elastic scaling, and high availability**—all without worrying about infrastructure management.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
