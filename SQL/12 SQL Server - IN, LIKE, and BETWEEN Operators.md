# SQL Server - IN, LIKE, and BETWEEN Operators

This README provides a detailed explanation of SQL Server's `IN`, `LIKE`, and `BETWEEN` operators, including syntax, use cases, real-time examples, and interview questions with answers.

---

## 📘 1. Overview

In SQL Server, `IN`, `LIKE`, and `BETWEEN` are used in the `WHERE` clause to filter data based on conditions.

| Operator | Description |
|----------|-------------|
| IN       | Filters records that match any value in a list. |
| LIKE     | Filters records based on pattern matching. |
| BETWEEN  | Filters records within a range of values. |

---

## 🔍 2. IN Operator

### ✅ Syntax:
```sql
SELECT column_name
FROM table_name
WHERE column_name IN (value1, value2, ...);
````

### ✅ Example:

```sql
SELECT * FROM Employees
WHERE Department IN ('HR', 'IT', 'Finance');
```

### ✅ Real-time Use Case:

You want to generate a report for employees working only in selected departments.

---

## 🔍 3. LIKE Operator

### ✅ Syntax:

```sql
SELECT column_name
FROM table_name
WHERE column_name LIKE pattern;
```

### ✅ Wildcard Characters:

| Symbol | Description                        |
| ------ | ---------------------------------- |
| `%`    | Represents zero or more characters |
| `_`    | Represents a single character      |

### ✅ Example:

```sql
SELECT * FROM Customers
WHERE CustomerName LIKE 'A%';
```

This will return all customers whose names start with "A".

### ✅ Real-time Use Case:

Searching for email addresses, names, or product SKUs with a specific pattern.

---

## 🔍 4. BETWEEN Operator

### ✅ Syntax:

```sql
SELECT column_name
FROM table_name
WHERE column_name BETWEEN value1 AND value2;
```

### ✅ Example:

```sql
SELECT * FROM Orders
WHERE OrderDate BETWEEN '2023-01-01' AND '2023-12-31';
```

### ✅ Real-time Use Case:

You need to fetch orders placed within a specific year.

---

## 🛠️ 5. Combined Example

```sql
SELECT * FROM Products
WHERE CategoryID IN (1, 2, 3)
  AND ProductName LIKE '%Pro%'
  AND Price BETWEEN 100 AND 500;
```

### ✅ Real-time Scenario:

You're building a product filter in an e-commerce site where users can:

* Select multiple categories (`IN`)
* Search product by name (`LIKE`)
* Set a price range (`BETWEEN`)

---

## 🎯 6. Interview Questions & Answers

### Q1. What is the difference between `IN` and `=`?

**A:** `=` is used for single value comparison, while `IN` can check multiple values at once.

---

### Q2. Can `LIKE` be used with numeric values?

**A:** Technically yes, but it's intended for text-based pattern matching. Use it carefully.

---

### Q3. What will `BETWEEN 1 AND 10` include?

**A:** It includes both boundary values: 1 and 10.

---

### Q4. Is `IN` faster than multiple `OR` conditions?

**A:** Yes. `IN` is generally optimized better by SQL Server than a long list of `OR` statements.

---

### Q5. How to search for a literal `%` in a `LIKE` clause?

**A:** Escape it using the `ESCAPE` keyword.

```sql
SELECT * FROM Files
WHERE FileName LIKE '%95\%%' ESCAPE '\';
```

---

## 🧪 7. Practice Tasks

1. Get all employees who belong to 'Admin', 'Sales', or 'Marketing' departments.
2. List all customer names that start with 'J' and end with 'n'.
3. Show all products priced between 250 and 750.

---

## 📂 8. Conclusion

Understanding and using `IN`, `LIKE`, and `BETWEEN` can help filter data effectively in SQL Server queries. These are frequently used in real-world applications like search filters, report generation, and conditional queries.

---

## 📌 9. References

* [Microsoft Docs - IN](https://learn.microsoft.com/en-us/sql/t-sql/queries/select-transact-sql)
* [Microsoft Docs - LIKE](https://learn.microsoft.com/en-us/sql/t-sql/queries/select-transact-sql)
* [Microsoft Docs - BETWEEN](https://learn.microsoft.com/en-us/sql/t-sql/queries/select-transact-sql)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
