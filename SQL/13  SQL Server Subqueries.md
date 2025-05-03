# 📘 SQL Server Subqueries

## 🔍 What is a Subquery?

A **Subquery** is a query nested inside another SQL query. It is used to return data that will be used in the main query as a condition or as a data source.

## ✅ Syntax

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (SELECT column_name FROM another_table WHERE condition);
```

---

## 🧠 Why Use Subqueries?

Subqueries can:

* Dynamically filter or fetch data
* Calculate aggregations (MIN, MAX, AVG, etc.)
* Insert or update records based on other tables
* Replace complex joins in some cases

---

## 📂 Types of Subqueries

| Type                    | Description                        | Example                                  |
| ----------------------- | ---------------------------------- | ---------------------------------------- |
| **Single-row Subquery** | Returns only one row               | `=`, `<`, `>` operators                  |
| **Multi-row Subquery**  | Returns multiple rows              | `IN`, `ANY`, `ALL` operators             |
| **Correlated Subquery** | References column from outer query | Executes row by row                      |
| **Nested Subquery**     | Subquery inside another subquery   | Multiple levels                          |
| **Scalar Subquery**     | Returns a single value             | Can be used anywhere a value is expected |

---

## 🔄 Examples

### Example 1: Simple Subquery with `IN`

```sql
SELECT * FROM Users 
WHERE UserId IN (SELECT UserId FROM Orders);
```

🔸 Retrieves all users who have placed at least one order.

---

### Example 2: Multi-level Subquery

```sql
SELECT * FROM Products 
WHERE ProductId IN (
    SELECT ProductId FROM OrderItems 
    WHERE OrderId IN (SELECT OrderId FROM Orders)
);
```

🔸 Retrieves products that are part of any order.

---

### Example 3: Minimum Price

```sql
SELECT * FROM Products 
WHERE Price IN (SELECT MIN(Price) FROM Products);
```

🔸 Returns product(s) with the lowest price.

---

### Example 4: Maximum Price

```sql
SELECT * FROM Products 
WHERE Price IN (SELECT MAX(Price) FROM Products);
```

🔸 Returns product(s) with the highest price.

---

### Example 5: Second Highest Price

```sql
SELECT * FROM Products 
WHERE Price IN (
    SELECT MAX(Price) FROM Products 
    WHERE Price < (SELECT MAX(Price) FROM Products)
);
```

🔸 Returns product(s) with the **second highest** price.

---

## ✍️ INSERT with Subquery

### Example: Insert Data from Another Table

```sql
INSERT INTO ArchivedOrders (OrderId, UserId, OrderDate)
SELECT OrderId, UserId, OrderDate 
FROM Orders 
WHERE OrderDate < '2023-01-01';
```

🔸 Copies orders placed before 2023 into an archive table.

---

### Example: Insert Based on a Join-Like Condition

```sql
INSERT INTO HighValueCustomers (UserId, TotalAmount)
SELECT UserId, SUM(Amount)
FROM Orders
GROUP BY UserId
HAVING SUM(Amount) > 10000;
```

🔸 Inserts users into a high-value customers table based on total order amount.

---

## 🎯 Interview Questions and Answers

### Q1: What is a subquery in SQL Server?

**A:** A subquery is a query within another query, often used for filtering, inserting, or calculating dynamic values.

---

### Q2: Can a subquery be used with INSERT statements?

**A:** Yes. You can use a subquery in `INSERT INTO ... SELECT` to insert data from another table.

---

### Q3: What's the difference between a subquery and a JOIN?

**A:** A `JOIN` combines rows from multiple tables. A subquery returns results used by another query (either as a list, value, or dataset).

---

### Q4: What is a correlated subquery?

**A:** A correlated subquery uses values from the outer query. It runs once per row processed by the outer query.

---

### Q5: How do you insert data using a subquery?

```sql
INSERT INTO new_table (col1, col2)
SELECT col1, col2 FROM old_table WHERE condition;
```

---

### Q6: Can we use subquery in SELECT, INSERT, UPDATE, and DELETE?

**A:** Yes. Subqueries are supported in all these statements.

---

## 📝 Notes

* Always verify subquery performance with `EXPLAIN` or `QUERY PLAN`.
* Use aliases to clarify complex subqueries.
* Subqueries are powerful but may be slower than JOINs in some scenarios.
 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
