
# 🔑 Database Keys Explained (Beginner to Expert)

Database **keys** are essential components of relational databases. They ensure **uniqueness**, enforce **relationships**, and maintain **data integrity**.

This guide covers various types of keys with:
- 🔍 What it is
- 💡 Why it's needed
- 🌍 Where/When to use

---

## 📘 Table of Contents

1. [Primary Key](#primary-key)
2. [Unique Key](#unique-key)
3. [Foreign Key](#foreign-key)
4. [Composite Key](#composite-key)
5. [Candidate Key](#candidate-key)
6. [Alternate Key](#alternate-key)
7. [Super Key](#super-key)
8. [Surrogate Key](#surrogate-key)
9. [Comparison Table](#comparison-table)

---

## 🟢 Primary Key

### 🔍 What:
A column (or set of columns) that **uniquely identifies** each row in a table.

### 💡 Why:
- Prevents duplicate records.
- Essential for joining related tables.
- Used internally for indexing.

### 🌍 Where:
- Every table should have a primary key.
- Commonly used on `ID` columns.

```sql
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100)
);
```

---

## 🔵 Unique Key

### 🔍 What:
A column that **must have unique values**, but can allow **a single NULL** (varies by DBMS).

### 💡 Why:
- Ensures no two rows have the same value in that column.
- Used for fields like `email`, `username`.

### 🌍 Where:
- Use when multiple columns need to be unique besides the primary key.

```sql
CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    Email VARCHAR(100) UNIQUE
);
```

---

## 🟡 Foreign Key

### 🔍 What:
A column that **references the primary key** of another table.

### 💡 Why:
- Maintains **referential integrity**.
- Connects data between related tables.

### 🌍 Where:
- Use when you need **parent-child relationships**, e.g., `Orders -> Customers`.

```sql
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
```

---

## 🟣 Composite Key

### 🔍 What:
A **primary key made of two or more columns**.

### 💡 Why:
- Used when a single column can’t uniquely identify a row.
- Maintains uniqueness using a combination.

### 🌍 Where:
- Use in **many-to-many relationships** or **junction tables**.

```sql
CREATE TABLE Enrollments (
    StudentID INT,
    CourseID INT,
    PRIMARY KEY (StudentID, CourseID)
);
```

---

## 🟠 Candidate Key

### 🔍 What:
All possible columns (or combinations) that can serve as a **primary key**.

### 💡 Why:
- Helps choose the most suitable column for the primary key.

### 🌍 Where:
- Use during **database design** when evaluating multiple unique fields.

```sql
-- Candidate Keys: Email, Username
CREATE TABLE Accounts (
    AccountID INT,
    Email VARCHAR(100) UNIQUE,
    Username VARCHAR(100) UNIQUE,
    PRIMARY KEY (AccountID)
);
```

---

## 🟤 Alternate Key

### 🔍 What:
A **candidate key** that is **not chosen** as the primary key.

### 💡 Why:
- Still maintains uniqueness.
- Can be enforced using `UNIQUE`.

### 🌍 Where:
- Use when multiple candidate keys exist.

```sql
-- Email is alternate key
CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    Email VARCHAR(100) UNIQUE
);
```

---

## ⚫ Super Key

### 🔍 What:
Any combination of columns that can **uniquely identify** a row.

### 💡 Why:
- Theoretical concept used during normalization.
- Includes candidate keys and more.

### 🌍 Where:
- Not directly implemented, but useful in **database theory**.

---

## 🔘 Surrogate Key

### 🔍 What:
An **artificial key**, often auto-incremented and not derived from data.

### 💡 Why:
- Keeps primary keys short and simple.
- Makes changes to natural data less risky.

### 🌍 Where:
- Use when natural keys are large or change frequently.

```sql
CREATE TABLE Products (
    ProductID INT IDENTITY(1,1) PRIMARY KEY,
    ProductName VARCHAR(100)
);
```

---

## 🔄 Comparison Table

| Key Type      | Ensures Uniqueness | Allows NULL | One per Table? | Used for Relationships | Auto-Generated |
|---------------|--------------------|-------------|----------------|-------------------------|----------------|
| Primary Key   | ✅                 | ❌          | ✅             | ✅                      | Optional       |
| Unique Key    | ✅                 | ✅ (1 max)  | ✅             | ❌                      | ❌             |
| Foreign Key   | ❌ (referential)   | ✅          | ✅             | ✅                      | ❌             |
| Composite Key | ✅                 | ❌          | ✅             | ✅                      | ❌             |
| Candidate Key | ✅                 | ❌          | ✅ (any one PK) | ❌                      | ❌             |
| Alternate Key | ✅                 | ❌          | ✅             | ❌                      | ❌             |
| Super Key     | ✅                 | ❌          | Multiple       | ❌                      | ❌             |
| Surrogate Key | ✅                 | ❌          | ✅             | ❌                      | ✅             |

---

## 🎯 Final Thoughts

- Choose a **primary key** that is **stable**, **short**, and **unique**.
- Use **foreign keys** to enforce relationships across tables.
- **Unique** and **alternate keys** help maintain data accuracy.
- Consider **surrogate keys** for simplicity and flexibility.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
