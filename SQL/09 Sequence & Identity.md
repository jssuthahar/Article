
# SQL Server: SEQUENCE vs IDENTITY

This document provides a comprehensive explanation of the `SEQUENCE` and `IDENTITY` features in SQL Server. It is tailored for both **beginners** and **advanced** users, and includes **interview questions and answers** for practice.

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
 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
