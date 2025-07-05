# 📘 Azure Cosmos DB – Advanced Querying with `IS_DEFINED`, Arrays, and Nested Objects

## 📌 Overview

Azure Cosmos DB allows querying flexible schema JSON documents using SQL-like syntax. This guide explains:

* Using `IS_DEFINED()` to check for property existence
* Inserting and querying array values
* Adding and working with nested objects (e.g., a list of students inside a document)

---

## ✅ 1. Using `IS_DEFINED()` in Queries

`IS_DEFINED()` checks whether a property **exists** (even if it’s `null`).

### 🔹 Example: Check if `age` is present

```sql
SELECT * FROM c WHERE IS_DEFINED(c.age)
```

### 🔹 Example: Filter only documents **without** a `city` field

```sql
SELECT * FROM c WHERE NOT IS_DEFINED(c.city)
```

> 📝 This is useful in schema-less documents where not all items have the same fields.

---

## 🧾 2. Adding an Array to a Document

You can store arrays like this:

### 📄 Sample Document with Tags

```json
{
  "id": "001",
  "name": "Suthahar",
  "tags": ["azure", "cosmos", "dotnet"]
}
```

### 🔍 Query: Find documents with a specific tag

```sql
SELECT * FROM c WHERE ARRAY_CONTAINS(c.tags, 'cosmos')
```

---

## 🎓 3. Nested Object List: Student List Example

You can nest arrays of objects, such as a list of students inside a school document.

### 📄 Sample Document with `students` array

```json
{
  "id": "school-01",
  "name": "ABC School",
  "location": "Kuala Lumpur",
  "students": [
    {
      "id": "stu01",
      "name": "John",
      "grade": "A"
    },
    {
      "id": "stu02",
      "name": "Mary",
      "grade": "B"
    }
  ]
}
```

---

## 🔍 Querying Nested Objects

### 🔹 Get all students with grade A

```sql
SELECT s.name, s.grade
FROM c
JOIN s IN c.students
WHERE s.grade = 'A'
```

### 🔹 Filter by school + student condition

```sql
SELECT c.name AS schoolName, s.name AS studentName
FROM c
JOIN s IN c.students
WHERE c.location = 'Kuala Lumpur' AND s.grade = 'A'
```

---

## 🛠️ Insert Document via Data Explorer

To add a new document:

1. Go to **Data Explorer > Items > New Item**
2. Paste JSON like this:

```json
{
  "id": "school-02",
  "name": "XYZ School",
  "students": [
    { "id": "stu03", "name": "Arun", "grade": "A+" },
    { "id": "stu04", "name": "Devi", "grade": "A" }
  ]
}
```

3. Click **Save**

---

## 🧪 Best Practices

* Use `IS_DEFINED()` to safely filter optional fields.
* Use `JOIN` when querying inside arrays of nested objects.
* Keep document sizes under 2MB.
* Design for **partitioning** if your nested array grows large.

---

## 📚 References

* [IS\_DEFINED() – Microsoft Docs](https://learn.microsoft.com/en-us/azure/cosmos-db/sql/sql-query-is-defined)
* [SQL Query Examples for Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/sql/query)
* [Modeling Data in Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/modeling-data)

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
