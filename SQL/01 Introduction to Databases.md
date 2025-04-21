
# Introduction to Databases

## 📌 Why Do We Need a Database?

A **database** is a structured way to store, manage, and retrieve data efficiently. In real-world applications, we deal with large amounts of data — customer records, product info, transactions, etc. Storing this data in an organized and secure way is critical.

### 🔍 Why Not Use the File Concept Instead?

In the past, data was often stored in files (like `.txt` or `.csv`), but this approach has many limitations:

| File System Limitations                | Database Advantages                     |
|----------------------------------------|------------------------------------------|
| Difficult to search data               | Powerful search using SQL               |
| No built-in data relationships         | Supports relationships (foreign keys)   |
| Hard to update/delete specific records | Easy to update/delete with queries      |
| No security                            | Built-in user roles and permissions     |
| No concurrency                         | Supports multi-user access              |
| Risk of data redundancy                | Data normalization avoids redundancy    |

## 🗃️ What Is a Database?

A **database** is a collection of related data that is stored in tables. Each table contains rows and columns, just like a spreadsheet.

Example:  
A `Students` table might look like this:

| StudentID | Name     | Age |
|-----------|----------|-----|
| 1         | Alex     | 22  |
| 2         | Priya    | 21  |

## 📋 List of Popular Databases

Here are some commonly used databases:

- Microsoft SQL Server
- MySQL
- PostgreSQL
- Oracle Database
- MongoDB (NoSQL)
- SQLite

## 🔑 Main Differences Between Databases

| Database         | Type     | Best For                            |
|------------------|----------|-------------------------------------|
| SQL Server       | Relational | Enterprise apps on Windows         |
| MySQL            | Relational | Web applications (open-source)     |
| PostgreSQL       | Relational | Advanced data operations            |
| MongoDB          | NoSQL      | JSON-like data (flexible schema)    |
| SQLite           | Relational | Local storage, mobile apps         |

## 🧩 What Are System Databases in SQL Server?

SQL Server comes with some **system databases** used for internal operations:

- **master** – Stores system-level information like login accounts and database names.
- **model** – Template for all new databases.
- **msdb** – Used by SQL Server Agent for scheduling jobs, alerts.
- **tempdb** – Temporary storage for running queries and temporary tables.

> ⚠️ You should **not modify** system databases unless you know what you're doing.

## 🧱 Why Do We Need a Database Before Creating Tables?

You must **first create a database** to define a storage area for your tables. Tables live inside databases — think of a database like a folder, and tables like the files inside.

Example:
```sql
CREATE DATABASE SchoolDB;
GO

USE SchoolDB;

CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name NVARCHAR(100),
    Age INT
);
```

## 🔌 How to Connect to SQL Server

### 🖥️ Using SQL Server Management Studio (SSMS):

1. Open SSMS.
2. Enter your server name (e.g., `localhost\SQLEXPRESS`).
3. Choose Authentication:
   - **Windows Authentication** (if using current Windows user)
   - **SQL Server Authentication** (enter username and password)
4. Click **Connect**.


## ✅ Summary

- **Database** is essential for storing and managing large, structured data.
- File system lacks many features like search, security, concurrency.
- Multiple types of databases are available for different use-cases.
- System databases help SQL Server manage its own operations.
- You must create a database before creating tables inside it.
- Connection to SQL Server can be done using tools like SSMS or code.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
