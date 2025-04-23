
# ALTER Query: Beginner to Expert

This guide covers essential `ALTER` SQL commands from beginner to expert level using examples from the `jshotel` database. It also includes common mistakes, practical tips, and **interview questions and answers** to help you prepare for SQL interviews.

---

## 📌 Table of Contents

1. [Getting Started](#getting-started)
2. [Renaming Tables and Columns](#renaming-tables-and-columns)
3. [Adding and Dropping Columns](#adding-and-dropping-columns)
4. [Modifying Column Data Types](#modifying-column-data-types)
5. [Common Errors](#common-errors)
6. [Cleanup and Best Practices](#cleanup-and-best-practices)
7. [Interview Questions and Answers](#interview-questions-and-answers)

---

## 🏁 Getting Started

Switch to the target database:

```sql
USE jshotel;
```

Check the data in the table:

```sql
SELECT * FROM emptable;
```

---

## ✏️ Renaming Tables and Columns

Rename a table:

```sql
EXEC sp_rename 'emp', 'emptable';
```

Rename a column:

```sql
EXEC sp_rename 'emptable.employee', 'isemployee', 'COLUMN';
```

---

## ➕➖ Adding and Dropping Columns

Drop a column:

```sql
ALTER TABLE emptable DROP COLUMN isemployee;
```

Add a new column with a specific data type:

```sql
ALTER TABLE emptable ADD isemp BIT;
```

---

## 🔄 Modifying Column Data Types

Change the data type of an existing column:

```sql
ALTER TABLE emptable ALTER COLUMN ENO NVARCHAR(20);
```

Attempt to change `ENAME` to numeric (may cause error if data is incompatible):

```sql
ALTER TABLE emptable ALTER COLUMN ENAME NUMERIC(10);
```

> ⚠️ **Note:** This may result in:
> ```
> Error converting data type varchar to numeric.
> The statement has been terminated.
> ```

If the column has no data, this operation will succeed.

---

## ⚠️ Common Errors

Trying to change a `VARCHAR` column to `NUMERIC` when it contains non-numeric values will fail.

### Solution:
Clean the column first:

```sql
DELETE FROM emptable;
```

Then run the command again:

```sql
ALTER TABLE emptable ALTER COLUMN ENAME NUMERIC(10);
```

---

## 🧹 Cleanup and Best Practices

- Always **backup** your data before applying ALTER commands.
- Use **transactions** or scripts with rollback capability if working on production data.
- Validate column values before attempting type changes.
- Use appropriate **data types** from the beginning to avoid conversions.

---

## ❓ Interview Questions and Answers

### 1. **What is the purpose of the ALTER TABLE statement in SQL?**
**Answer:**  
The `ALTER TABLE` statement is used to modify the structure of an existing table. This includes adding or dropping columns, renaming columns, and changing data types or constraints.

---

### 2. **How do you rename a column in SQL Server?**
**Answer:**  
You use the `sp_rename` stored procedure:  
```sql
EXEC sp_rename 'table_name.old_column_name', 'new_column_name', 'COLUMN';
```

---

### 3. **What happens if you try to change the data type of a column with incompatible data?**
**Answer:**  
An error will occur, and the statement will be terminated. You must ensure that all existing data in the column can be converted to the new data type.

---

### 4. **Can you change a column from `VARCHAR` to `NUMERIC`? What are the conditions?**
**Answer:**  
Yes, but only if all the values in the `VARCHAR` column can be successfully converted to `NUMERIC`. If even one value is incompatible, SQL Server will throw an error.

---

### 5. **How do you remove a column from a table?**
**Answer:**  
Use the `DROP COLUMN` clause:
```sql
ALTER TABLE table_name DROP COLUMN column_name;
```

---

### 6. **Is it possible to add multiple columns in a single ALTER TABLE command?**
**Answer:**  
Yes. Example:
```sql
ALTER TABLE table_name 
ADD column1 INT, 
    column2 VARCHAR(100);
```

---

### 7. **What is the difference between ALTER TABLE ADD and ALTER TABLE ALTER COLUMN?**
**Answer:**  
- `ADD`: Introduces a new column to the table.
- `ALTER COLUMN`: Modifies the data type or size of an existing column.

---

## 📚 References

- [Microsoft Docs - ALTER TABLE (Transact-SQL)](https://learn.microsoft.com/en-us/sql/t-sql/statements/alter-table-transact-sql)
- [sp_rename - Rename database objects](https://learn.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/sp-rename-transact-sql)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
