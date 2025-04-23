
# SQL Basics: Create, Insert, Select, Update, and Delete with WHERE Clause

This document demonstrates fundamental SQL operations using a simple `STUD` table.

---

## Table Structure

```sql
CREATE TABLE STUD (
    SNO NUMERIC(10),
    SNAME NVARCHAR(20)
);
```

---

## Inserting Records

```sql
INSERT INTO STUD VALUES 
    (2, 'NIKHIL'),
    (3, 'BHAVIN');
```

---

## Selecting Records

```sql
SELECT * FROM STUD;
```

---

## Using the WHERE Clause

### OR Condition

```sql
SELECT * FROM STUD 
WHERE SNAME = 'nikhil' OR SNO = 1;
```

### AND Condition

```sql
SELECT * FROM STUD 
WHERE SNAME = 'nikhil' AND SNO = 1;
```

---

## Updating Records

### Update all records

```sql
UPDATE STUD 
SET SNO = 15;
```

### Update with WHERE clause

```sql
UPDATE STUD 
SET SNO = 1 
WHERE SNAME = 'bhavin';
```

### Set column to NULL

```sql
UPDATE STUD 
SET SNO = NULL;
```

---

## Deleting Records

### Delete all records

```sql
DELETE FROM STUD;
```

### Delete with WHERE clause

```sql
DELETE FROM STUD 
WHERE SNAME = 'nikhil' AND SNO = 1;
```

---

## Summary

- Use `CREATE` and `INSERT` to define and populate tables.
- Use `SELECT` to retrieve data.
- Use `UPDATE` and `DELETE` to modify or remove data.
- Always use a `WHERE` clause in `UPDATE` and `DELETE` to avoid affecting all rows unintentionally.

> 💡 **Best Practice**: Always test `SELECT` with your `WHERE` clause before running `UPDATE` or `DELETE`.

---

## Interview Questions and Answers

### 1. **What is the purpose of the `WHERE` clause in SQL?**
**Answer:** The `WHERE` clause is used to filter records based on specified conditions. It is used with `SELECT`, `UPDATE`, and `DELETE` statements to target specific rows.

---

### 2. **What happens if you omit the `WHERE` clause in an `UPDATE` or `DELETE` statement?**
**Answer:** Omitting the `WHERE` clause will affect **all rows** in the table. This can result in unintentional data loss or incorrect data updates.

---

### 3. **Can we use the `WHERE` clause with `INSERT` statements?**
**Answer:** No, the `WHERE` clause cannot be used with `INSERT`. It is only valid with `SELECT`, `UPDATE`, and `DELETE`.

---

### 4. **What is the difference between `AND` and `OR` in a `WHERE` clause?**
**Answer:**
- `AND`: All conditions must be true.
- `OR`: At least one condition must be true.

---

### 5. **What does `UPDATE STUD SET SNO = NULL;` do?**
**Answer:** It sets the `SNO` column to `NULL` for all rows in the `STUD` table.

---

### 6. **How can you prevent accidental deletion or update of all rows in a table?**
**Answer:** Always include a `WHERE` clause. Additionally, use transactions and test your condition using a `SELECT` before running `UPDATE` or `DELETE`.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
