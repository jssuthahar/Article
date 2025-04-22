

## 📘 SQL Practice: Creating and Using a Hotel Employee Database

### 📌 Objective
This guide will help you understand the basics of SQL Server database creation, data types, table design, and inserting/querying data using a real-world example: a hotel employee database.

---

## 🧠 Why Use a Database?
A **database** helps store and manage large volumes of data efficiently. For example, a hotel needs to manage employee details. Storing this in a structured format allows:
- Quick retrieval (`SELECT`)
- Easy updates
- Accurate storage of different data types (e.g., names, dates, salary, yes/no values)

---

## 🔧 What Are We Doing?

We will:
1. Create a **database** named `JSHOTEL`
2. Create a **table** named `EMP3` to store employee details
3. Understand **SQL data types**
4. Insert multilingual data
5. Query the table to retrieve data

---

## 💡 SQL Commands Explained

### 1️⃣ CREATE DATABASE

```sql
CREATE DATABASE JSHOTEL
USE JSHOTEL
```

- Creates a new database named `JSHOTEL` and selects it for use.
- ✅ Use this when starting a new project or organizing a new set of data.

---

### 2️⃣ Understanding SQL Data Types

| Data Type       | Description                                           | Example               |
|------------------|-------------------------------------------------------|------------------------|
| `INT`            | Whole numbers                                         | 10, 1000               |
| `NUMERIC(p,s)`   | Fixed-point numbers with precision and scale          | `NUMERIC(10)` → 11212<br>`NUMERIC(10,2)` → 123456.23 |
| `VARCHAR(n)`     | Variable-length characters (English text)            | 'Vijay'               |
| `NVARCHAR(n)`    | Supports Unicode characters (Multilingual text)      | N'卡尔蒂克扬'          |
| `CHAR(n)`        | Fixed-length characters                              | 'ABC' (padded to 10)  |
| `TEXT`           | Large blocks of text (deprecated, use `VARCHAR(MAX)`)|
| `BIT`            | Boolean (0 or 1)                                      | 1 = Yes, 0 = No       |
| `DATETIME`       | Date and time                                         | '2023-12-01 14:00:00' |

---

### 3️⃣ Create Table

```sql
CREATE TABLE EMP3 (
  ENO NUMERIC(10),
  ENAME NVARCHAR(MAX),
  EMPLOYEE BIT
)
```

- `ENO`: Employee number (numeric).
- `ENAME`: Employee name (supports any language).
- `EMPLOYEE`: Whether the person is an employee (1 = Yes, 0 = No).

---

### 4️⃣ Inserting Data

```sql
-- Example 1: Insert multilingual data
INSERT INTO EMP3 (ENO, ENAME) VALUES (5, N'卡尔蒂克扬')

-- Example 2: Insert multiple employees
INSERT INTO EMP(ENO, ENAME) 
VALUES 
  (1, N'卡尔蒂克扬'),
  (2, 'VIJAY'),
  (3, 'MANI'),
  (4, 'VIGNESH')
```

> ❗ `N` before a string indicates it's a **Unicode string**. Use it when working with non-English characters.

> ❗ Make sure the number of columns in `INSERT` matches the table definition. Missing or extra columns cause errors.

---

### 5️⃣ Querying the Data

```sql
SELECT * FROM EMP
```

- Retrieves all columns and rows from the table `EMP`.

---

## 📍 Where to Use This?

- School/college projects
- Admin panels for apps
- Internal employee tracking systems
- Multilingual systems (Unicode support)
- Applications needing Boolean flags (`BIT`)

---

## 🎯 Interview Questions and Answers

### ❓ Q1: What is the difference between `VARCHAR` and `NVARCHAR`?

**✅ A:**  
- `VARCHAR` is used for English or ASCII characters only.
- `NVARCHAR` supports Unicode, which means it can store characters in any language (e.g., Chinese, Arabic).
- Always prefix Unicode strings with `N` like `N'你好'`.

---

### ❓ Q2: What is the difference between `CHAR` and `VARCHAR`?

**✅ A:**  
- `CHAR(n)` always uses **fixed length**; pads with spaces if the string is shorter.
- `VARCHAR(n)` uses **variable length**; more memory efficient for short strings.

---

### ❓ Q3: What is the use of `BIT` datatype?

**✅ A:**  
`BIT` is used to store Boolean values:  
- 1 = TRUE (Yes)  
- 0 = FALSE (No)  
It is useful for flags like: IsActive, IsDeleted, IsEmployee, etc.

---

### ❓ Q4: What is the error “Column name or number of supplied values does not match table definition.”?

**✅ A:**  
This occurs when:
- You insert fewer or more values than the number of columns in the table.
- You miss specifying column names during `INSERT`.

**Fix:** Always match values to columns or specify column names explicitly.

---

### ❓ Q5: What is `NUMERIC(10,2)`?

**✅ A:**  
It is a **fixed precision and scale** data type.  
- `10` is total digits (precision).  
- `2` is digits after the decimal (scale).  
Example: `12345678.90` (8 digits before decimal + 2 digits after).

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
