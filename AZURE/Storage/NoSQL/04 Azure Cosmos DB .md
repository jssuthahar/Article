

# 📘 Azure Cosmos DB 

## 📌 Overview

Azure Cosmos DB is a fully managed NoSQL database for modern app development. The **Data Explorer** in the Azure portal allows developers to view, edit, and query data directly in their Cosmos DB containers.

This README provides guidance on how to:

* Access the Data Explorer
* Write queries using SQL API
* Understand query structure
* Use common filters and operators
* View results and debug

---

## 🚪 Accessing Data Explorer

1. Go to [Azure Portal](https://portal.azure.com).
2. Navigate to your **Cosmos DB account**.
3. On the left panel, select **Data Explorer**.
4. Expand your **Database > Container**.
5. Click on **Items** to view or query documents.

---

## 🔍 Querying Documents

Cosmos DB supports a **SQL-like query language** for JSON documents.

### 🔹 Basic Query

```sql
SELECT * FROM c
```

* Retrieves all documents from container `c`.

### 🔹 Filter by a property

```sql
SELECT * FROM c WHERE c.name = 'John'
```

* Gets all documents where `name` is `"John"`.

### 🔹 Select specific fields

```sql
SELECT c.id, c.name FROM c
```

---

## 🛠️ Query Examples

### 🎯 Using `WHERE`, `AND`, `OR`

```sql
SELECT * FROM c WHERE c.age > 25 AND c.city = 'New York'
```

### 🔄 Using `IN`

```sql
SELECT * FROM c WHERE c.category IN ('Books', 'Electronics')
```

### 🔍 LIKE operator

```sql
SELECT * FROM c WHERE c.name LIKE 'J%'
```

### 📅 Date filter (assuming ISO date format)

```sql
SELECT * FROM c WHERE c.createdAt >= '2024-01-01T00:00:00Z'
```

---

## 🧩 Working with Arrays

### Check if array contains a value

```sql
SELECT * FROM c WHERE ARRAY_CONTAINS(c.tags, 'azure')
```

### Join within array of objects

```sql
SELECT c.id, child.name 
FROM c 
JOIN child IN c.children 
WHERE child.age > 10
```

---

## ⚡ Performance Tips

* Use **SELECT specific fields** rather than `*` to reduce RU consumption.
* Always apply **filters** to avoid full scans.
* Use **pagination** via continuation tokens or `OFFSET LIMIT`.

```sql
SELECT * FROM c OFFSET 0 LIMIT 10
```

---

## 🧪 Query Testing

1. Navigate to your container → Click **New SQL Query**.
2. Paste your query and hit **Execute Query**.
3. Results will appear in the bottom panel.

---

## 📄 Sample Document

```json
{
  "id": "12345",
  "name": "John Doe",
  "age": 32,
  "city": "New York",
  "createdAt": "2024-06-10T12:00:00Z",
  "tags": ["azure", "cosmos", "database"]
}
```

---

## 🧰 Additional Tools

* **Cosmos DB Emulator** for local development
* **Azure SDKs** for querying via .NET, Node.js, Python, etc.
* **Cosmos DB Studio** (third-party tool) for better UX

---

## 📚 References

* [Azure Cosmos DB SQL Query Language](https://learn.microsoft.com/en-us/azure/cosmos-db/sql/sql-query)
* [Azure Data Explorer](https://learn.microsoft.com/en-us/azure/cosmos-db/data-explorer)

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
