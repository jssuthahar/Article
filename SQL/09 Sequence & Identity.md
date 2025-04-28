
# SQL Server: SEQUENCE vs IDENTITY



---

## 🔢 IDENTITY

The `IDENTITY` property is used with a column to generate **auto-incrementing numbers** in a table.

### ✅ Syntax

```sql
CREATE TABLE TableName (
    ID INT IDENTITY(1,1), -- start from 1, increment by 1
    Name NVARCHAR(50)
);
```

### 🧪 Example

```sql
CREATE TABLE msdevbuild (
    SID NUMERIC(10) IDENTITY(100, 1),
    SNAME NVARCHAR(20),
    COURSE NVARCHAR(20)
);
```

### ⚠️ Rules

- You **cannot insert** values directly into an IDENTITY column unless `IDENTITY_INSERT` is ON.
- Use `SET IDENTITY_INSERT tablename ON` to allow manual insertions.

### 📦 Resetting IDENTITY

```sql
DBCC CHECKIDENT ('msdevbuild', RESEED, 1000);
```

### 📊 Fetching Last Inserted Identity Value

```sql
SELECT @@IDENTITY;         -- Last identity value across all scopes
SELECT SCOPE_IDENTITY();   -- Last identity value in the current scope
SELECT IDENT_CURRENT('TableName'); -- Last identity for a specific table
```

---

## 🔁 SEQUENCE

A `SEQUENCE` is a user-defined object that generates a **sequence of numeric values**, which can be reused across tables.

### ✅ Syntax

```sql
CREATE SEQUENCE seqnumber
    AS INT
    START WITH 1
    INCREMENT BY 1;
```

### 📌 Using SEQUENCE

```sql
SELECT NEXT VALUE FOR seqnumber;
```

### 🔄 Altering a Sequence

```sql
ALTER SEQUENCE seqnumber
    INCREMENT BY 2;

ALTER SEQUENCE seqnumber
    RESTART WITH 1000;
```

### 🧪 Insert with SEQUENCE

```sql
CREATE TABLE STUD (
    SNO NUMERIC(10),
    SNAME NVARCHAR(20),
    MARK NUMERIC(10)
);

INSERT INTO STUD (SNO, SNAME, MARK)
VALUES (NEXT VALUE FOR seqnumber, 'DEVISRI', 100);
```

---

## 🧠 INTERVIEW QUESTIONS & ANSWERS

### 1. What is the difference between IDENTITY and SEQUENCE?

| Feature        | IDENTITY                           | SEQUENCE                                 |
|----------------|------------------------------------|-------------------------------------------|
| Scope          | Table-level                        | Database-level                            |
| Reusability    | One table only                     | Can be used in multiple tables            |
| Manual Insert  | Not allowed unless IDENTITY_INSERT | Fully controllable                        |
| Flexibility    | Limited                            | Highly customizable (RESTART, CYCLE, etc.)|

---

### 2. How do you reset an IDENTITY column?

```sql
DBCC CHECKIDENT ('tablename', RESEED, new_value);
```

---

### 3. How to get the last inserted identity value?

- `@@IDENTITY`: Global last identity
- `SCOPE_IDENTITY()`: Current scope
- `IDENT_CURRENT('table')`: Last identity for specific table

---

### 4. Can you use SEQUENCE for multiple tables?

Yes, SEQUENCE is independent of tables. You can use `NEXT VALUE FOR seqname` in multiple insert statements across tables.

---

### 5. What happens if you try to insert a value into an IDENTITY column?

You get an error unless you enable:

```sql
SET IDENTITY_INSERT tablename ON;
```

---

### 6. Can you decrement values using SEQUENCE?

Yes, simply define it with a negative increment:

```sql
CREATE SEQUENCE myseq
    START WITH 10
    INCREMENT BY -1;
```

---

## 📚 Summary

| Feature         | IDENTITY                         | SEQUENCE                                |
|------------------|----------------------------------|-------------------------------------------|
| Auto Increment   | Yes                              | Yes                                       |
| Table Dependency | Yes                              | No (it's an object)                       |
| Reusability      | No                               | Yes                                       |
| Custom Restart   | With DBCC                        | With ALTER SEQUENCE                       |
| Flexibility      | Limited                          | High                                      |

---

## 🛠️ Practice SQL

```sql
-- Create and use SEQUENCE
CREATE SEQUENCE seqnumber AS INT START WITH 1 INCREMENT BY 1;
SELECT NEXT VALUE FOR seqnumber;

-- Alter sequence
ALTER SEQUENCE seqnumber INCREMENT BY 2;
ALTER SEQUENCE seqnumber RESTART WITH 1000;

-- Insert using sequence
CREATE TABLE STUD(SNO NUMERIC(10), SNAME NVARCHAR(20), MARK NUMERIC(10));
INSERT INTO STUD(SNO, SNAME, MARK) VALUES((NEXT VALUE FOR seqnumber), 'DEVISRI', 100);

-- Create IDENTITY Table
CREATE TABLE msdevbuild(SID NUMERIC(10) IDENTITY(1,1), SNAME NVARCHAR(20), COURSE NVARCHAR(20));

-- Insert into IDENTITY Table
INSERT INTO msdevbuild(SNAME, COURSE) VALUES('xyz', 'qwe');

-- Enable manual insert
SET IDENTITY_INSERT msdevbuild ON;
INSERT INTO msdevbuild(SID, SNAME, COURSE) VALUES(3, 'xyz', 'qwe');
SET IDENTITY_INSERT msdevbuild OFF;
```

# SQL Server IDENTITY vs SEQUENCE
## 🎯 Interview Questions and Answers

## ❓ 1. What is the IDENTITY property in SQL Server?

**Answer:**  
`IDENTITY` is a column property that automatically generates incremental numeric values for new rows in a table.  
It is used to create a unique value for each record without manually specifying the value.

**Example:**
```sql
CREATE TABLE Employee (
    EmpID INT IDENTITY(1,1),
    Name NVARCHAR(100)
);
```

---

## ❓ 2. What is a SEQUENCE in SQL Server?

**Answer:**  
`SEQUENCE` is a user-defined database object that generates a sequence of numeric values according to the specification with which it was created.  
It is independent of any table and can be reused across multiple tables or even procedures.

**Example:**
```sql
CREATE SEQUENCE Seq_EmployeeID
    START WITH 1
    INCREMENT BY 1;
```

---

## ❓ 3. Key Differences between IDENTITY and SEQUENCE?

| Feature              | IDENTITY                        | SEQUENCE                           |
|----------------------|----------------------------------|------------------------------------|
| Level                | Table-specific                  | Database-wide object              |
| Reusable Across Tables | No                            | Yes                                |
| Manual Control        | Limited                         | Full control (alter, restart, etc.)|
| Restarting Values     | Difficult (needs reseed)         | Easy with `ALTER SEQUENCE`         |
| Insert Values Manually | Not allowed unless `IDENTITY_INSERT` is ON | Allowed by using `NEXT VALUE FOR`  |

---

## ❓ 4. How do you insert explicit values into an IDENTITY column?

**Answer:**  
You must enable `IDENTITY_INSERT` for the table.

```sql
SET IDENTITY_INSERT TableName ON;
INSERT INTO TableName (IdentityColumn, OtherColumns)
VALUES (10, 'Value');
SET IDENTITY_INSERT TableName OFF;
```

---

## ❓ 5. How can you reset an IDENTITY column value?

**Answer:**  
Use the `DBCC CHECKIDENT` command to reseed the IDENTITY value.

```sql
DBCC CHECKIDENT ('TableName', RESEED, NewStartingValue);
```

---

## ❓ 6. How to get the last inserted identity value?

**Answer:**

- `@@IDENTITY`: Returns the last identity value generated for any table in the session.
- `SCOPE_IDENTITY()`: Returns the last identity value generated within the current scope and session.
- `IDENT_CURRENT('TableName')`: Returns the last identity value generated for a specific table.

---

## ❓ 7. What happens if you try to insert into an IDENTITY column without setting IDENTITY_INSERT ON?

**Answer:**  
You will get an error:  
> *Cannot insert explicit value for identity column in table 'TableName' when IDENTITY_INSERT is set to OFF.*

---

## ❓ 8. Can you modify an existing SEQUENCE?

**Answer:**  
Yes, you can use the `ALTER SEQUENCE` command to modify the increment, restart value, min/max values, or cycling behavior.

```sql
ALTER SEQUENCE Seq_EmployeeID
    INCREMENT BY 5;
```

---

## ❓ 9. How do you restart a SEQUENCE with a new value?

**Answer:**

```sql
ALTER SEQUENCE Seq_EmployeeID
    RESTART WITH 1000;
```

This restarts the sequence and the next value generated will be 1000.

---

## ❓ 10. Can you have a decreasing SEQUENCE?

**Answer:**  
Yes!  
You can create a sequence that decrements by a negative value.

```sql
CREATE SEQUENCE Seq_Decrement
    START WITH 100
    INCREMENT BY -1;
```

---

## ❓ 11. When should you use SEQUENCE over IDENTITY?

**Answer:**
- When you need a common number generator across multiple tables.
- When you need better flexibility like restarting, cycling, or specifying min/max values.
- When you want full control over number generation outside of table inserts.

---

## ❓ 12. Does SEQUENCE guarantee gap-free numbers?

**Answer:**  
**No.**  
If a transaction rolls back after fetching a sequence value, that value is lost. Similarly, IDENTITY values can also have gaps.

---

## ❓ 13. What will happen if two users select `NEXT VALUE FOR` at the same time?

**Answer:**  
Each user will receive a **different** value.  
SQL Server ensures that `NEXT VALUE FOR` generates **unique and ordered** values even in concurrent environments.

---

## ❓ 14. Is it possible to use a SEQUENCE in a DEFAULT constraint?

**Answer:**  
Yes!

```sql
CREATE TABLE Products (
    ProductID INT DEFAULT NEXT VALUE FOR Seq_Products,
    Name NVARCHAR(100)
);
```

---

## ❓ 15. How can you check the current value of a SEQUENCE?

**Answer:**

```sql
SELECT current_value
FROM sys.sequences
WHERE name = 'Seq_EmployeeID';
```

---


 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
