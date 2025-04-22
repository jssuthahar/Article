# 🧾 SQL Query Types 

## 🔹 1. DDL – Data Definition Language
DDL commands are used to define and modify the structure of database objects like tables, schemas, indexes, etc.

### ✅ Commands:
- `CREATE` – Create new tables, databases, indexes, etc.
- `ALTER` – Modify existing database objects
- `DROP` – Delete objects like tables or databases
- `TRUNCATE` – Remove all rows from a table quickly
- `RENAME` – Rename database objects (varies by SQL dialect)

### 📌 Example:
```sql
CREATE TABLE Students (
  ID INT,
  Name VARCHAR(100)
)

ALTER TABLE Students ADD Email VARCHAR(100)
DROP TABLE OldStudents
```

---

## 🔹 2. DML – Data Manipulation Language
DML is used to manipulate data inside existing tables (insert, update, delete, and retrieve).

### ✅ Commands:
- `SELECT` – Retrieve data
- `INSERT` – Add new records
- `UPDATE` – Modify existing records
- `DELETE` – Remove records

### 📌 Example:
```sql
INSERT INTO Students (ID, Name) VALUES (1, 'Aarav')
SELECT * FROM Students
UPDATE Students SET Name = 'Aarya' WHERE ID = 1
DELETE FROM Students WHERE ID = 1
```

---

## 🔹 3. DCL – Data Control Language
DCL commands deal with permissions and access control in the database.

### ✅ Commands:
- `GRANT` – Give privileges
- `REVOKE` – Remove privileges

### 📌 Example:
```sql
GRANT SELECT, INSERT ON Students TO User1
REVOKE INSERT ON Students FROM User1
```

---

## 🔹 4. TCL – Transaction Control Language
TCL is used to manage transactions in a database and ensure data consistency.

### ✅ Commands:
- `COMMIT` – Save changes
- `ROLLBACK` – Undo changes
- `SAVEPOINT` – Set a point to rollback to
- `SET TRANSACTION` – Configure transaction properties

### 📌 Example:
```sql
BEGIN TRANSACTION
INSERT INTO Students (ID, Name) VALUES (2, 'Priya')
ROLLBACK  -- undo the insert

BEGIN TRANSACTION
INSERT INTO Students (ID, Name) VALUES (3, 'Ravi')
COMMIT  -- save the insert
```

---

## 🔹 5. DQL – Data Query Language (Sometimes grouped under DML)

### ✅ Command:
- `SELECT` – Used to fetch data from tables

### 📌 Example:
```sql
SELECT * FROM Students WHERE Name LIKE 'A%'
```

> ⚠️ Some people group `SELECT` under DML; others treat it separately as DQL.

---

## 🎯 Quick Recap Table
| Category | Full Form                  | Purpose                        | Example Commands               |
|----------|-----------------------------|---------------------------------|-------------------------------|
| DDL      | Data Definition Language    | Define structure               | `CREATE`, `ALTER`, `DROP`     |
| DML      | Data Manipulation Language  | Work with table data           | `INSERT`, `UPDATE`, `DELETE`  |
| DCL      | Data Control Language       | Manage user permissions        | `GRANT`, `REVOKE`             |
| TCL      | Transaction Control Language| Manage transactions            | `COMMIT`, `ROLLBACK`          |
| DQL      | Data Query Language         | Query the database             | `SELECT`                      |

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
