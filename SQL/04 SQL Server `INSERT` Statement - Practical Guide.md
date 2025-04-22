# 📥 SQL Server `INSERT` Statement - Practical Guide

## 🧠 Why Learn the `INSERT` Statement?
The `INSERT` statement allows you to add data into tables in SQL Server. It's one of the most essential commands for working with databases.

Learning how to use `INSERT` effectively helps you:
- Populate your tables with real-world data
- Test business logic and queries
- Understand data types, defaults, and constraints

---

## 🏗️ Basic Syntax
```sql
INSERT INTO TableName (Column1, Column2, ...)
VALUES (Value1, Value2, ...)
```

---

## 🧰 What More Can You Do With `INSERT`?

### 1️⃣ Insert with Specific Columns
```sql
INSERT INTO EMP (ENO, ENAME) VALUES (1, 'VIJAY')
```
✅ Insert only into selected columns.

---

### 2️⃣ Insert Multiple Rows at Once
```sql
INSERT INTO EMP (ENO, ENAME)
VALUES (2, 'MANI'), (3, 'VIGNESH'), (4, 'ARUN')
```
✅ Saves time with fewer queries.

---

### 3️⃣ Insert Unicode Strings
```sql
INSERT INTO EMP (ENO, ENAME) VALUES (5, N'卡尔蒂克扬')
```
✅ Use `N` before the string for multilingual content.

---

### 4️⃣ Insert with `NULL` Values
```sql
INSERT INTO EMP (ENO, ENAME, EMPLOYEE) VALUES (6, 'RAJ', NULL)
```
✅ Understand optional and missing data.

---

### 5️⃣ Insert Using `DEFAULT` Values
```sql
CREATE TABLE Demo (
  ID INT,
  Name VARCHAR(50),
  CreatedAt DATETIME DEFAULT GETDATE()
)

INSERT INTO Demo (ID, Name) VALUES (1, 'Niki')
```
✅ Great for setting automatic values like timestamps.

---

### 6️⃣ Insert from Another Table
```sql
INSERT INTO EMP_BACKUP (ENO, ENAME)
SELECT ENO, ENAME FROM EMP WHERE EMPLOYEE = 1
```
✅ Copy filtered data from one table to another.

---

### 7️⃣ Insert with Type Conversion
```sql
INSERT INTO EMP (ENO, ENAME, EMPLOYEE)
VALUES (CAST('7' AS INT), 'SUDHA', CAST('1' AS BIT))
```
✅ Use `CAST()` or `CONVERT()` when types don't match.

---

### 8️⃣ Insert with Expressions
```sql
INSERT INTO EMP (ENO, ENAME)
VALUES (8, 'EMP_' + CAST(8 AS VARCHAR))
```
✅ Combine strings and values for custom formats.

---

### 9️⃣ Insert with Variables
```sql
DECLARE @id INT = 9
DECLARE @name NVARCHAR(50) = N'பிரியா'

INSERT INTO EMP (ENO, ENAME) VALUES (@id, @name)
```
✅ Helpful in dynamic SQL or stored procedures.

---

## ⚠️ Common Errors to Watch Out For
- ❌ Column count mismatch
- ❌ Data type mismatch
- ❌ NOT NULL constraint violation
- ❌ Unicode string without `N` prefix

---

## 🎯 Student Challenges
- Insert 5 employees with different data types
- Insert names in multiple languages (Tamil, Chinese, etc.)
- Use `GETDATE()` in a `DEFAULT` column
- Copy data from one table to another with `INSERT INTO ... SELECT`
- Insert using `CAST`, `CONVERT`, and variables

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

