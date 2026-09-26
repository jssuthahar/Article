# 50 SQL Server Use-Case Interview Questions and Answers

A practical collection of **50 SQL Server interview questions with real-world use cases, SQL queries, explanations, and interview follow-up points**.

This guide is useful for:

* 🎓 College / Campus Interviews
* 👨‍💻 Junior SQL Developers
* 💼 2–5 Years .NET Developers
* 🧑‍💼 SQL Server Developers
* 🚀 ASP.NET Core Developers
* 🏗️ Backend Developers
* 🧠 Logical / Scenario-Based Interviews

The focus is:

> **Don't just learn SQL syntax. Understand when and why you use each SQL Server feature.**

---

# 📚 Table of Contents

1. [Find Employees by Department](#1-how-would-you-find-employees-belonging-to-a-particular-department)
2. [WHERE vs HAVING](#2-what-is-the-difference-between-where-and-having)
3. [GROUP BY](#3-when-would-you-use-group-by)
4. [COUNT](#4-how-would-you-find-the-number-of-employees-in-each-department)
5. [Duplicate Records](#5-how-would-you-find-duplicate-records)
6. [Delete Duplicates](#6-how-would-you-delete-duplicate-records)
7. [Second Highest Salary](#7-how-would-you-find-the-second-highest-salary)
8. [Nth Highest Salary](#8-how-would-you-find-the-nth-highest-salary)
9. [Employees Without Department](#9-how-would-you-find-employees-without-a-department)
10. [JOIN](#10-when-would-you-use-inner-join)
11. [LEFT JOIN](#11-when-would-you-use-left-join)
12. [LEFT JOIN vs INNER JOIN](#12-left-join-vs-inner-join)
13. [Self JOIN](#13-when-would-you-use-self-join)
14. [Three Table JOIN](#14-how-would-you-join-three-tables)
15. [Subquery](#15-when-would-you-use-a-subquery)
16. [EXISTS](#16-when-would-you-use-exists)
17. [IN vs EXISTS](#17-in-vs-exists)
18. [CTE](#18-when-would-you-use-a-cte)
19. [Recursive CTE](#19-when-would-you-use-a-recursive-cte)
20. [Window Functions](#20-when-would-you-use-window-functions)
21. [ROW_NUMBER](#21-how-would-you-generate-row-numbers)
22. [RANK vs DENSE_RANK](#22-rank-vs-dense_rank)
23. [Running Total](#23-how-would-you-calculate-a-running-total)
24. [Latest Record](#24-how-would-you-find-the-latest-record-for-each-customer)
25. [Top N per Group](#25-how-would-you-find-the-top-3-products-in-each-category)
26. [NULL](#26-how-does-sql-server-handle-null)
27. [COALESCE](#27-when-would-you-use-coalesce)
28. [CASE](#28-when-would-you-use-case)
29. [Stored Procedure](#29-when-would-you-use-a-stored-procedure)
30. [Stored Procedure Parameters](#30-how-would-you-pass-parameters-to-a-stored-procedure)
31. [View](#31-when-would-you-use-a-view)
32. [Function](#32-when-would-you-use-a-user-defined-function)
33. [Trigger](#33-when-would-you-use-a-trigger)
34. [Index](#34-why-do-we-use-indexes)
35. [Clustered vs Nonclustered Index](#35-clustered-vs-nonclustered-index)
36. [Composite Index](#36-when-would-you-use-a-composite-index)
37. [Covering Index](#37-what-is-a-covering-index)
38. [Slow Query](#38-how-would-you-investigate-a-slow-query)
39. [Execution Plan](#39-what-is-an-execution-plan)
40. [Transactions](#40-when-would-you-use-a-transaction)
41. [TRY/CATCH](#41-how-would-you-handle-errors-in-a-transaction)
42. [Deadlocks](#42-what-is-a-deadlock-and-how-would-you-handle-it)
43. [Isolation Levels](#43-what-are-transaction-isolation-levels)
44. [Normalization](#44-when-would-you-normalize-a-database)
45. [Denormalization](#45-when-would-you-denormalize)
46. [SQL Injection](#46-how-would-you-prevent-sql-injection)
47. [Pagination](#47-how-would-you-implement-pagination)
48. [Soft Delete](#48-how-would-you-implement-soft-delete)
49. [Audit History](#49-how-would-you-maintain-audit-history)
50. [Banking Transfer](#50-how-would-you-design-a-bank-transfer-transaction)

---

# Sample Tables Used

Most examples use these tables:

```sql
CREATE TABLE Departments
(
    DepartmentId INT PRIMARY KEY,
    DepartmentName VARCHAR(100)
);

CREATE TABLE Employees
(
    EmployeeId INT PRIMARY KEY,
    EmployeeName VARCHAR(100),
    DepartmentId INT,
    Salary DECIMAL(18,2),
    ManagerId INT,
    JoiningDate DATE,
    Email VARCHAR(200),
    IsActive BIT
);
```

Other examples use:

```sql
Customers
Orders
Products
OrderDetails
Payments
```

---

# 1. How would you find employees belonging to a particular department?

### Use Case

HR wants all employees from the IT department.

```sql
SELECT *
FROM Employees
WHERE DepartmentId = 10;
```

### Interview Point

`WHERE` filters rows before the result is returned.

---

# 2. What is the difference between WHERE and HAVING?

### Use Case

Find departments where the average salary is greater than 50,000.

```sql
SELECT
    DepartmentId,
    AVG(Salary) AS AverageSalary
FROM Employees
GROUP BY DepartmentId
HAVING AVG(Salary) > 50000;
```

### Difference

`WHERE` filters rows **before grouping**.

`HAVING` filters groups **after GROUP BY**.

```text
FROM
 ↓
WHERE
 ↓
GROUP BY
 ↓
HAVING
 ↓
SELECT
```

---

# 3. When would you use GROUP BY?

### Use Case

Find the total salary paid by each department.

```sql
SELECT
    DepartmentId,
    SUM(Salary) AS TotalSalary
FROM Employees
GROUP BY DepartmentId;
```

### Common Uses

* Department-wise employees
* Monthly sales
* Product-wise orders
* Customer-wise spending

---

# 4. How would you find the number of employees in each department?

```sql
SELECT
    DepartmentId,
    COUNT(*) AS EmployeeCount
FROM Employees
GROUP BY DepartmentId;
```

Example result:

```text
DepartmentId    EmployeeCount
------------    -------------
10              25
20              15
30              8
```

---

# 5. How would you find duplicate records?

### Use Case

Find customers having duplicate email addresses.

```sql
SELECT
    Email,
    COUNT(*) AS Total
FROM Customers
GROUP BY Email
HAVING COUNT(*) > 1;
```

### Interview Follow-Up

Ask:

> How would you find the complete duplicate rows?

```sql
SELECT *
FROM Customers
WHERE Email IN
(
    SELECT Email
    FROM Customers
    GROUP BY Email
    HAVING COUNT(*) > 1
);
```

---

# 6. How would you delete duplicate records?

Suppose:

```text
Id    Email
1     a@gmail.com
2     a@gmail.com
3     b@gmail.com
```

Use `ROW_NUMBER()`:

```sql
WITH DuplicateRecords AS
(
    SELECT *,
           ROW_NUMBER() OVER
           (
               PARTITION BY Email
               ORDER BY Id
           ) AS RowNumber
    FROM Customers
)
DELETE FROM DuplicateRecords
WHERE RowNumber > 1;
```

The first record is retained.

The remaining duplicates are deleted.

### Important

Always test the CTE with:

```sql
SELECT *
```

before running the `DELETE`.

---

# 7. How would you find the second-highest salary?

### Option 1

```sql
SELECT MAX(Salary)
FROM Employees
WHERE Salary <
(
    SELECT MAX(Salary)
    FROM Employees
);
```

### Option 2

```sql
SELECT DISTINCT Salary
FROM Employees
ORDER BY Salary DESC
OFFSET 1 ROW
FETCH NEXT 1 ROW ONLY;
```

### Interview Follow-Up

Ask:

> What if two employees have the same highest salary?

Use `DISTINCT` or a ranking function depending on the requirement.

---

# 8. How would you find the Nth highest salary?

Using `DENSE_RANK()`:

```sql
WITH SalaryRank AS
(
    SELECT
        EmployeeName,
        Salary,
        DENSE_RANK() OVER
        (
            ORDER BY Salary DESC
        ) AS SalaryRank
    FROM Employees
)
SELECT *
FROM SalaryRank
WHERE SalaryRank = 3;
```

This finds the **third-highest distinct salary**.

---

# 9. How would you find employees without a department?

Use `LEFT JOIN`:

```sql
SELECT
    e.EmployeeId,
    e.EmployeeName
FROM Employees e
LEFT JOIN Departments d
    ON e.DepartmentId = d.DepartmentId
WHERE d.DepartmentId IS NULL;
```

### Use Case

HR has employee records, but some employees haven't been assigned to a department.

---

# 10. When would you use INNER JOIN?

### Use Case

Display employees with their department names.

```sql
SELECT
    e.EmployeeName,
    d.DepartmentName
FROM Employees e
INNER JOIN Departments d
    ON e.DepartmentId = d.DepartmentId;
```

`INNER JOIN` returns only matching records.

---

# 11. When would you use LEFT JOIN?

### Use Case

Display **all employees**, even employees without departments.

```sql
SELECT
    e.EmployeeName,
    d.DepartmentName
FROM Employees e
LEFT JOIN Departments d
    ON e.DepartmentId = d.DepartmentId;
```

Employees without a department will have:

```text
DepartmentName = NULL
```

---

# 12. LEFT JOIN vs INNER JOIN

| Requirement                         | JOIN                |
| ----------------------------------- | ------------------- |
| Only matching records               | INNER JOIN          |
| All employees + matching department | LEFT JOIN           |
| Find unmatched employees            | LEFT JOIN + IS NULL |

### Interview Scenario

> "Show all customers, including customers who have never placed an order."

Use:

```sql
SELECT
    c.CustomerName,
    o.OrderId
FROM Customers c
LEFT JOIN Orders o
    ON c.CustomerId = o.CustomerId;
```

---

# 13. When would you use SELF JOIN?

### Use Case

Employees have managers stored in the same table.

```sql
SELECT
    e.EmployeeName,
    m.EmployeeName AS ManagerName
FROM Employees e
LEFT JOIN Employees m
    ON e.ManagerId = m.EmployeeId;
```

Example:

```text
Employee       Manager
-------        -------
John           David
Suresh         David
David          NULL
```

---

# 14. How would you join three tables?

Suppose:

```text
Customers
   ↓
Orders
   ↓
OrderDetails
```

Query:

```sql
SELECT
    c.CustomerName,
    o.OrderId,
    od.ProductId,
    od.Quantity
FROM Customers c
INNER JOIN Orders o
    ON c.CustomerId = o.CustomerId
INNER JOIN OrderDetails od
    ON o.OrderId = od.OrderId;
```

### Real-World Use

E-commerce order screens frequently require multiple joins.

---

# 15. When would you use a subquery?

### Use Case

Find employees earning more than the average salary.

```sql
SELECT *
FROM Employees
WHERE Salary >
(
    SELECT AVG(Salary)
    FROM Employees
);
```

The inner query calculates the average.

The outer query finds employees above that average.

---

# 16. When would you use EXISTS?

### Use Case

Find customers who have placed at least one order.

```sql
SELECT *
FROM Customers c
WHERE EXISTS
(
    SELECT 1
    FROM Orders o
    WHERE o.CustomerId =
          c.CustomerId
);
```

`EXISTS` checks whether a matching row exists.

---

# 17. IN vs EXISTS

### IN

```sql
SELECT *
FROM Customers
WHERE CustomerId IN
(
    SELECT CustomerId
    FROM Orders
);
```

### EXISTS

```sql
SELECT *
FROM Customers c
WHERE EXISTS
(
    SELECT 1
    FROM Orders o
    WHERE o.CustomerId =
          c.CustomerId
);
```

### Interview Answer

Both can solve similar problems, but the optimizer may choose different execution strategies. For correlated existence checks, `EXISTS` is often a natural choice.

Don't simply claim "`EXISTS` is always faster"; performance depends on data, indexes, query shape, and execution plan.

---

# 18. When would you use a CTE?

CTE = Common Table Expression.

### Use Case

Break a complicated query into a readable step.

```sql
WITH EmployeeSalary AS
(
    SELECT
        DepartmentId,
        AVG(Salary) AS AverageSalary
    FROM Employees
    GROUP BY DepartmentId
)
SELECT *
FROM EmployeeSalary
WHERE AverageSalary > 50000;
```

### Benefits

* Readability
* Complex query organization
* Recursive queries
* Ranking queries

---

# 19. When would you use a Recursive CTE?

### Use Case

Employee hierarchy:

```text
CEO
 ├── Manager 1
 │    ├── Developer 1
 │    └── Developer 2
 └── Manager 2
```

Example:

```sql
WITH EmployeeHierarchy AS
(
    SELECT
        EmployeeId,
        EmployeeName,
        ManagerId,
        0 AS Level
    FROM Employees
    WHERE ManagerId IS NULL

    UNION ALL

    SELECT
        e.EmployeeId,
        e.EmployeeName,
        e.ManagerId,
        h.Level + 1
    FROM Employees e
    INNER JOIN EmployeeHierarchy h
        ON e.ManagerId =
           h.EmployeeId
)
SELECT *
FROM EmployeeHierarchy;
```

### Use Cases

* Organization hierarchy
* Category/subcategory
* Folder structures
* Parent-child data

---

# 20. When would you use Window Functions?

Window functions calculate values across related rows without collapsing them.

Example:

```sql
SELECT
    EmployeeName,
    DepartmentId,
    Salary,
    AVG(Salary) OVER
    (
        PARTITION BY DepartmentId
    ) AS DepartmentAverage
FROM Employees;
```

Unlike `GROUP BY`, employee rows are still returned individually.

---

# 21. How would you generate row numbers?

```sql
SELECT
    EmployeeName,
    Salary,
    ROW_NUMBER() OVER
    (
        ORDER BY Salary DESC
    ) AS RowNumber
FROM Employees;
```

Result:

```text
Employee    Salary    RowNumber
-------     ------    ---------
John        90000     1
David       80000     2
Suresh      70000     3
```

---

# 22. RANK vs DENSE_RANK

Suppose salaries are:

```text
100000
90000
90000
80000
```

### RANK

```sql
SELECT
    EmployeeName,
    Salary,
    RANK() OVER
    (
        ORDER BY Salary DESC
    ) AS SalaryRank
FROM Employees;
```

Ranks can contain gaps:

```text
1
2
2
4
```

### DENSE_RANK

```text
1
2
2
3
```

### Interview Rule

Use `DENSE_RANK()` when you want ranking without gaps after ties.

---

# 23. How would you calculate a running total?

### Use Case

Monthly sales:

```sql
SELECT
    SaleDate,
    Amount,
    SUM(Amount) OVER
    (
        ORDER BY SaleDate
        ROWS BETWEEN
        UNBOUNDED PRECEDING
        AND CURRENT ROW
    ) AS RunningTotal
FROM Sales;
```

Example:

```text
Date        Amount    RunningTotal
01-Jan      1000      1000
02-Jan      2000      3000
03-Jan      1500      4500
```

---

# 24. How would you find the latest record for each customer?

### Use Case

Customer may have multiple orders.

Find the latest order per customer.

```sql
WITH LatestOrders AS
(
    SELECT *,
           ROW_NUMBER() OVER
           (
               PARTITION BY CustomerId
               ORDER BY OrderDate DESC,
                        OrderId DESC
           ) AS RowNumber
    FROM Orders
)
SELECT *
FROM LatestOrders
WHERE RowNumber = 1;
```

This is a very common SQL Server interview question.

---

# 25. How would you find the top 3 products in each category?

```sql
WITH ProductRanking AS
(
    SELECT
        ProductId,
        ProductName,
        CategoryId,
        SalesAmount,
        ROW_NUMBER() OVER
        (
            PARTITION BY CategoryId
            ORDER BY SalesAmount DESC
        ) AS RowNumber
    FROM Products
)
SELECT *
FROM ProductRanking
WHERE RowNumber <= 3;
```

### Interview Concept

This is:

> **Top N per Group**

---

# 26. How does SQL Server handle NULL?

`NULL` means the value is unknown/missing.

Incorrect:

```sql
WHERE DepartmentId = NULL
```

Correct:

```sql
WHERE DepartmentId IS NULL
```

For non-null:

```sql
WHERE DepartmentId IS NOT NULL
```

---

# 27. When would you use COALESCE?

### Use Case

Display `"Not Assigned"` if department is missing.

```sql
SELECT
    EmployeeName,
    COALESCE(
        DepartmentName,
        'Not Assigned'
    ) AS DepartmentName
FROM EmployeeDetails;
```

`COALESCE` returns the first non-null expression.

---

# 28. When would you use CASE?

### Use Case

Classify employees based on salary.

```sql
SELECT
    EmployeeName,
    Salary,
    CASE
        WHEN Salary >= 100000
            THEN 'High'
        WHEN Salary >= 50000
            THEN 'Medium'
        ELSE 'Low'
    END AS SalaryCategory
FROM Employees;
```

### Common Uses

* Status
* Categories
* Conditional calculations
* Reports
* Business rules

---

# 29. When would you use a Stored Procedure?

### Use Case

Create a procedure for retrieving active employees.

```sql
CREATE PROCEDURE GetActiveEmployees
AS
BEGIN
    SELECT *
    FROM Employees
    WHERE IsActive = 1;
END;
```

Execute:

```sql
EXEC GetActiveEmployees;
```

### Benefits

* Reusable database logic
* Centralized SQL
* Parameterization
* Permission control
* Easier application integration

---

# 30. How would you pass parameters to a Stored Procedure?

```sql
CREATE PROCEDURE GetEmployeesByDepartment
    @DepartmentId INT
AS
BEGIN
    SELECT *
    FROM Employees
    WHERE DepartmentId =
          @DepartmentId;
END;
```

Execute:

```sql
EXEC GetEmployeesByDepartment
    @DepartmentId = 10;
```

### Important

Parameterized procedures help avoid unsafe string concatenation.

---

# 31. When would you use a View?

### Use Case

Multiple applications need the same employee information.

```sql
CREATE VIEW EmployeeDepartmentView
AS
SELECT
    e.EmployeeId,
    e.EmployeeName,
    d.DepartmentName,
    e.Salary
FROM Employees e
LEFT JOIN Departments d
    ON e.DepartmentId =
       d.DepartmentId;
```

Then:

```sql
SELECT *
FROM EmployeeDepartmentView;
```

### Benefits

* Simplifies complex queries
* Reusable
* Can provide an abstraction layer
* Can help control access to underlying columns/tables

---

# 32. When would you use a User-Defined Function?

Example:

```sql
CREATE FUNCTION CalculateBonus
(
    @Salary DECIMAL(18,2)
)
RETURNS DECIMAL(18,2)
AS
BEGIN
    RETURN @Salary * 0.10;
END;
```

Use:

```sql
SELECT
    EmployeeName,
    Salary,
    dbo.CalculateBonus(Salary)
        AS Bonus
FROM Employees;
```

### Use Case

Reusable calculation or transformation logic.

### Interview Point

Functions have restrictions and performance considerations; don't automatically use a scalar function for every piece of business logic.

---

# 33. When would you use a Trigger?

### Use Case

Maintain an audit table whenever employee salary changes.

```sql
CREATE TRIGGER trg_EmployeeSalaryAudit
ON Employees
AFTER UPDATE
AS
BEGIN

    INSERT INTO EmployeeAudit
    (
        EmployeeId,
        ChangedDate
    )
    SELECT
        EmployeeId,
        GETDATE()
    FROM inserted;

END;
```

### Important

Triggers execute automatically.

Use them carefully because hidden side effects can make systems harder to understand and debug.

---

# 34. Why do we use indexes?

Suppose:

```sql
SELECT *
FROM Employees
WHERE Email = 'john@gmail.com';
```

If `Email` is frequently searched, an index may improve lookup performance.

```sql
CREATE INDEX IX_Employees_Email
ON Employees(Email);
```

### Index Benefits

* Faster reads
* Faster searches
* Faster joins in suitable cases
* Can support sorting/grouping

### Cost

Indexes also consume storage and can slow down inserts/updates/deletes because indexes must be maintained.

---

# 35. Clustered vs Nonclustered Index

## Clustered Index

Determines the physical/logical organization of the table's data pages around the clustered key.

A table can have only one clustered index.

Example:

```sql
CREATE CLUSTERED INDEX
IX_Employees_EmployeeId
ON Employees(EmployeeId);
```

## Nonclustered Index

Separate index structure that points to the underlying rows.

```sql
CREATE NONCLUSTERED INDEX
IX_Employees_Email
ON Employees(Email);
```

A table can have multiple nonclustered indexes.

---

# 36. When would you use a Composite Index?

Suppose the application frequently executes:

```sql
SELECT *
FROM Orders
WHERE CustomerId = 100
AND OrderDate >= '2026-01-01';
```

A composite index may help:

```sql
CREATE INDEX IX_Orders_Customer_Date
ON Orders
(
    CustomerId,
    OrderDate
);
```

### Interview Point

Column order matters.

An index on:

```text
(CustomerId, OrderDate)
```

is not equivalent to:

```text
(OrderDate, CustomerId)
```

for every query pattern.

Design indexes based on actual workload.

---

# 37. What is a Covering Index?

Suppose the query is:

```sql
SELECT
    OrderDate,
    Amount
FROM Orders
WHERE CustomerId = 100;
```

An index can include additional columns:

```sql
CREATE INDEX IX_Orders_Customer
ON Orders(CustomerId)
INCLUDE
(
    OrderDate,
    Amount
);
```

The index contains the search key plus the included columns needed by the query.

This can reduce lookups to the base table.

---

# 38. How would you investigate a slow query?

A strong SQL Server troubleshooting process:

### Step 1

Run the query and reproduce the issue.

### Step 2

Check the **Actual Execution Plan**.

### Step 3

Look for:

* Table scans
* Expensive operators
* Key lookups
* Bad estimates
* Missing/inefficient indexes
* Large sorts
* Hash operations

### Step 4

Check I/O and time:

```sql
SET STATISTICS IO ON;
SET STATISTICS TIME ON;
```

### Step 5

Review:

* Indexes
* Query predicates
* Joins
* Returned columns
* Statistics
* Data volume

### Interview Answer

> "I don't add an index immediately. First I inspect the actual execution plan and workload, then identify the bottleneck."

---

# 39. What is an Execution Plan?

An execution plan shows how SQL Server intends to execute a query.

For example:

```sql
SELECT *
FROM Employees
WHERE DepartmentId = 10;
```

SQL Server may choose:

```text
Index Seek
     ↓
Return Rows
```

or:

```text
Table Scan
     ↓
Filter
     ↓
Return Rows
```

### Interview Point

A query being logically correct doesn't mean it is performance-efficient.

Execution plans help identify why.

---

# 40. When would you use a Transaction?

### Use Case

Bank transfer:

```text
Account A
   ↓
Withdraw ₹1000
   ↓
Account B
   ↓
Deposit ₹1000
```

Both operations must succeed.

```sql
BEGIN TRANSACTION;

UPDATE Accounts
SET Balance = Balance - 1000
WHERE AccountId = 1;

UPDATE Accounts
SET Balance = Balance + 1000
WHERE AccountId = 2;

COMMIT TRANSACTION;
```

If something fails:

```sql
ROLLBACK TRANSACTION;
```

### Key Concept

A transaction helps maintain **atomicity**.

---

# 41. How would you handle errors in a transaction?

Use `TRY...CATCH`.

```sql
BEGIN TRY

    BEGIN TRANSACTION;

    UPDATE Accounts
    SET Balance = Balance - 1000
    WHERE AccountId = 1;

    UPDATE Accounts
    SET Balance = Balance + 1000
    WHERE AccountId = 2;

    COMMIT TRANSACTION;

END TRY
BEGIN CATCH

    IF XACT_STATE() <> 0
        ROLLBACK TRANSACTION;

    THROW;

END CATCH;
```

### Interview Point

A robust transaction should not leave partial updates behind when an error occurs.

---

# 42. What is a Deadlock?

A deadlock occurs when two transactions wait for resources held by each other.

Example:

```text
Transaction A
    locks Table A
    waits for Table B

Transaction B
    locks Table B
    waits for Table A
```

Neither can continue.

SQL Server detects the deadlock and chooses a victim transaction to terminate.

### How to Reduce Deadlocks

* Keep transactions short
* Access tables/resources in a consistent order
* Avoid unnecessary locks
* Optimize queries
* Use appropriate indexes
* Investigate deadlock graphs

---

# 43. What are Transaction Isolation Levels?

Common SQL Server isolation levels include:

```text
READ UNCOMMITTED
READ COMMITTED
REPEATABLE READ
SNAPSHOT
SERIALIZABLE
```

### Example

`READ UNCOMMITTED` can allow dirty reads.

`READ COMMITTED` is the common default isolation level in SQL Server.

`SERIALIZABLE` provides stronger isolation but can increase blocking.

`SNAPSHOT` uses row versioning and can reduce reader/writer blocking in suitable workloads.

### Interview Question

> Which isolation level would you choose?

Answer:

> "It depends on the application's consistency requirements and concurrency characteristics. I wouldn't choose an isolation level without understanding the workload."

---

# 44. When would you normalize a database?

### Example

Bad design:

```text
Student
--------------------------------
StudentId
Name
Course1
Course2
Course3
```

Better:

```text
Students
Courses
StudentCourses
```

### Benefits

* Reduce duplicate data
* Improve consistency
* Easier updates
* Better relational design

### Common Normal Forms

```text
1NF
2NF
3NF
```

For most transactional applications, normalization is a good starting point.

---

# 45. When would you denormalize?

Suppose a reporting system repeatedly performs expensive joins across millions of rows.

You may intentionally duplicate some derived or frequently accessed data.

Example:

```text
Orders
Customers
Products
Payments
```

A reporting table could contain pre-combined information.

### Benefits

* Faster reads
* Fewer joins
* Better reporting performance in some cases

### Cost

* Duplicate data
* More complicated updates
* Potential consistency issues

### Interview Rule

> Normalize for correctness and maintainability; denormalize deliberately when workload and performance justify it.

---

# 46. How would you prevent SQL Injection?

### Bad

```csharp
string sql =
    "SELECT * FROM Users " +
    "WHERE Email = '" +
    email + "'";
```

An attacker may inject SQL through the input.

### Better

Use parameterized SQL.

Example with ADO.NET:

```csharp
using SqlCommand command =
    new SqlCommand(
        "SELECT * FROM Users " +
        "WHERE Email = @Email",
        connection);

command.Parameters.AddWithValue(
    "@Email",
    email);
```

Even better, specify the parameter type/size explicitly when appropriate.

### EF Core

```csharp
var user =
    await db.Users
        .FirstOrDefaultAsync(
            x => x.Email == email);
```

### Interview Rule

Never concatenate untrusted input into SQL commands.

---

# 47. How would you implement pagination?

Suppose an API should return 20 products per page.

```sql
DECLARE @PageNumber INT = 2;
DECLARE @PageSize INT = 20;

SELECT
    ProductId,
    ProductName,
    Price
FROM Products
ORDER BY ProductId
OFFSET (@PageNumber - 1)
       * @PageSize ROWS
FETCH NEXT @PageSize ROWS ONLY;
```

### Page 1

```text
Rows 1–20
```

### Page 2

```text
Rows 21–40
```

### Important

Pagination should use a deterministic `ORDER BY`.

For very large datasets, **keyset/seek pagination** may perform better than large offsets.

---

# 48. How would you implement Soft Delete?

Instead of physically deleting:

```sql
DELETE FROM Customers
WHERE CustomerId = 100;
```

add:

```sql
IsDeleted BIT
```

Then:

```sql
UPDATE Customers
SET IsDeleted = 1
WHERE CustomerId = 100;
```

Normal query:

```sql
SELECT *
FROM Customers
WHERE IsDeleted = 0;
```

### Benefits

* Recover records
* Maintain history
* Safer deletion
* Audit requirements

### Interview Follow-Up

Ask:

> What happens if developers forget `WHERE IsDeleted = 0`?

You need application-level conventions, reusable query patterns, views, or other safeguards appropriate to the system.

---

# 49. How would you maintain audit history?

### Requirement

Whenever an employee's salary changes, store:

```text
EmployeeId
OldSalary
NewSalary
ChangedBy
ChangedDate
```

Audit table:

```sql
CREATE TABLE EmployeeSalaryAudit
(
    AuditId INT IDENTITY PRIMARY KEY,
    EmployeeId INT,
    OldSalary DECIMAL(18,2),
    NewSalary DECIMAL(18,2),
    ChangedBy VARCHAR(100),
    ChangedDate DATETIME2
);
```

The implementation could use:

* Application/service logic
* SQL Server triggers
* Temporal tables
* Change Data Capture
* Other auditing mechanisms

### Interview Point

Choose the mechanism based on audit requirements and architecture; don't automatically use triggers for everything.

---

# 50. How would you design a bank transfer transaction?

This is one of the best SQL Server scenario questions.

## Requirement

Transfer:

```text
Account A → Account B
```

Amount:

```text
₹10,000
```

The operation must be atomic.

---

## Step 1 — Begin Transaction

```sql
BEGIN TRY

    BEGIN TRANSACTION;
```

---

## Step 2 — Validate Sender

```sql
DECLARE @Balance DECIMAL(18,2);

SELECT @Balance = Balance
FROM Accounts
WHERE AccountId = 1;
```

Check:

```sql
IF @Balance < 10000
BEGIN
    THROW 50001,
          'Insufficient balance',
          1;
END;
```

---

## Step 3 — Debit Sender

```sql
UPDATE Accounts
SET Balance = Balance - 10000
WHERE AccountId = 1;
```

---

## Step 4 — Credit Receiver

```sql
UPDATE Accounts
SET Balance = Balance + 10000
WHERE AccountId = 2;
```

---

## Step 5 — Record Transaction

```sql
INSERT INTO Transactions
(
    FromAccountId,
    ToAccountId,
    Amount,
    TransactionDate
)
VALUES
(
    1,
    2,
    10000,
    SYSDATETIME()
);
```

---

## Step 6 — Commit

```sql
COMMIT TRANSACTION;
```

---

## Step 7 — Rollback on Error

```sql
END TRY

BEGIN CATCH

    IF XACT_STATE() <> 0
        ROLLBACK TRANSACTION;

    THROW;

END CATCH;
```

### What Is the Interviewer Testing?

This single scenario tests:

* Transactions
* Atomicity
* Error handling
* Concurrency
* Data consistency
* Constraints
* Locking
* Isolation
* Business rules

---

# 🔥 Additional SQL Logic Questions

## 51. Find employees earning more than their manager

```sql
SELECT
    e.EmployeeName,
    e.Salary,
    m.EmployeeName AS ManagerName,
    m.Salary AS ManagerSalary
FROM Employees e
INNER JOIN Employees m
    ON e.ManagerId = m.EmployeeId
WHERE e.Salary > m.Salary;
```

### Concept

Self JOIN + business logic.

---

# 52. Find customers who never placed an order

```sql
SELECT
    c.CustomerId,
    c.CustomerName
FROM Customers c
LEFT JOIN Orders o
    ON c.CustomerId = o.CustomerId
WHERE o.OrderId IS NULL;
```

### Concept

`LEFT JOIN` + `IS NULL`.

---

# 53. Find the highest salary in each department

```sql
WITH SalaryRank AS
(
    SELECT
        EmployeeName,
        DepartmentId,
        Salary,
        DENSE_RANK() OVER
        (
            PARTITION BY DepartmentId
            ORDER BY Salary DESC
        ) AS SalaryRank
    FROM Employees
)
SELECT *
FROM SalaryRank
WHERE SalaryRank = 1;
```

---

# 54. Find employees who joined in the last 30 days

```sql
SELECT *
FROM Employees
WHERE JoiningDate >=
      DATEADD(DAY, -30, CAST(GETDATE() AS DATE));
```

---

# 55. Find departments with more than 10 employees

```sql
SELECT
    DepartmentId,
    COUNT(*) AS EmployeeCount
FROM Employees
GROUP BY DepartmentId
HAVING COUNT(*) > 10;
```

---

# 56. Find monthly sales

```sql
SELECT
    YEAR(OrderDate) AS OrderYear,
    MONTH(OrderDate) AS OrderMonth,
    SUM(TotalAmount) AS TotalSales
FROM Orders
GROUP BY
    YEAR(OrderDate),
    MONTH(OrderDate)
ORDER BY
    OrderYear,
    OrderMonth;
```

---

# 57. Find customers spending more than ₹100,000

```sql
SELECT
    CustomerId,
    SUM(TotalAmount) AS TotalSpent
FROM Orders
GROUP BY CustomerId
HAVING SUM(TotalAmount) > 100000;
```

---

# 58. Find the latest order globally

```sql
SELECT TOP 1 *
FROM Orders
ORDER BY OrderDate DESC,
         OrderId DESC;
```

---

# 59. Find employees with the same salary

```sql
SELECT
    Salary,
    COUNT(*) AS EmployeeCount
FROM Employees
GROUP BY Salary
HAVING COUNT(*) > 1;
```

---

# 60. Find the top 5 highest-paid employees

```sql
SELECT TOP 5
    EmployeeName,
    Salary
FROM Employees
ORDER BY Salary DESC;
```

---

# 🎯 SQL Server Interview Progression

## Round 1 — SQL Basics

1. SELECT
2. WHERE
3. ORDER BY
4. GROUP BY
5. HAVING
6. DISTINCT
7. COUNT
8. SUM
9. AVG
10. MIN / MAX

---

## Round 2 — JOIN & Query Logic

11. INNER JOIN
12. LEFT JOIN
13. RIGHT JOIN
14. FULL JOIN
15. SELF JOIN
16. Subquery
17. EXISTS
18. IN
19. CTE
20. UNION

---

## Round 3 — SQL Programming

21. CASE
22. COALESCE
23. Stored Procedure
24. Function
25. View
26. Trigger
27. Temporary Table
28. Table Variable
29. CTE
30. Recursive CTE

---

## Round 4 — Advanced SQL

31. ROW_NUMBER
32. RANK
33. DENSE_RANK
34. PARTITION BY
35. Running Total
36. Top N per Group
37. Latest Record per Group
38. Pagination
39. Dynamic SQL
40. Transactions

---

## Round 5 — Performance & Production

41. Indexes
42. Clustered Index
43. Nonclustered Index
44. Composite Index
45. Covering Index
46. Execution Plan
47. Query Optimization
48. Deadlocks
49. Isolation Levels
50. SQL Injection / Security

---

# 🧠 How to Answer SQL Use-Case Questions

Don't answer only with syntax.

Use this structure:

```text
1. Understand the requirement
        ↓
2. Identify the tables
        ↓
3. Identify relationships
        ↓
4. Choose JOIN / Subquery / CTE
        ↓
5. Write the query
        ↓
6. Consider NULL values
        ↓
7. Consider duplicate records
        ↓
8. Check performance
        ↓
9. Check indexes
        ↓
10. Consider concurrency/security
```

---

# ⭐ Example Interview Answer Pattern

### Question

> "How would you find the latest order for every customer?"

### Strong Answer

> "First I would identify that each customer can have multiple orders. I need one row per customer, so I would use a window function such as `ROW_NUMBER()`, partition by CustomerId and order by OrderDate descending. Then I would select RowNumber = 1. I would also use a deterministic tie-breaker such as OrderId if two orders have the same date."

```sql
WITH LatestOrders AS
(
    SELECT *,
           ROW_NUMBER() OVER
           (
               PARTITION BY CustomerId
               ORDER BY OrderDate DESC,
                        OrderId DESC
           ) AS RowNumber
    FROM Orders
)
SELECT *
FROM LatestOrders
WHERE RowNumber = 1;
```

This demonstrates:

* Requirement analysis
* Window functions
* `PARTITION BY`
* `ORDER BY`
* Handling ties
* Real-world thinking

---

# 🚀 SQL Server Interview Golden Rules

### Rule 1

Don't use `SELECT *` unnecessarily in production queries.

Prefer:

```sql
SELECT
    EmployeeId,
    EmployeeName,
    Salary
FROM Employees;
```

---

### Rule 2

Don't add indexes blindly.

Always consider:

* Query workload
* Execution plan
* Selectivity
* Read/write balance
* Index maintenance cost

---

### Rule 3

Don't assume a query is slow because it has a JOIN.

A well-indexed JOIN can be very efficient.

---

### Rule 4

Don't assume `EXISTS` is always faster than `IN`.

Check the actual execution plan and workload.

---

### Rule 5

Don't use transactions longer than necessary.

Long transactions can increase:

* Blocking
* Lock duration
* Deadlock risk
* Resource usage

---

### Rule 6

Always consider NULL.

Ask:

> "What happens if this column is NULL?"

---

### Rule 7

Always consider duplicate data.

Ask:

> "What happens if two records have the same value?"

---

### Rule 8

Always consider concurrency.

Ask:

> "What happens if two users execute this at the same time?"

---

### Rule 9

Always consider security.

Never build SQL using untrusted string concatenation.

---

### Rule 10

For performance problems:

```text
Don't guess.
     ↓
Reproduce
     ↓
Measure
     ↓
Execution Plan
     ↓
Identify Bottleneck
     ↓
Optimize
     ↓
Measure Again
```

---

# 🏆 Final SQL Server Interview Preparation

A strong SQL Server developer should be able to move through these levels:

```text
SQL Syntax
    ↓
SELECT / WHERE / JOIN
    ↓
GROUP BY / HAVING
    ↓
Subqueries / CTE
    ↓
Window Functions
    ↓
Stored Procedures / Views
    ↓
Indexes
    ↓
Execution Plans
    ↓
Transactions
    ↓
Concurrency
    ↓
Performance
    ↓
Security
    ↓
Real-World Database Design
```

> **Don't just memorize SQL queries. Understand the business problem first, then choose the SQL technique that solves it efficiently and safely.**
