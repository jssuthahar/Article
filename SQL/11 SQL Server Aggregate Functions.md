# SQL Server Aggregate Functions – Complete Reference

This document explains all **Aggregate Functions** in SQL Server with examples, output, and key interview questions with answers.

---

## 📘 What Are Aggregate Functions?

Aggregate functions perform a **calculation on a set of values** and return a single value. They are commonly used with `GROUP BY` and `HAVING` clauses.

---

## ✅ List of SQL Server Aggregate Functions

| Function     | Description                                   |
|--------------|-----------------------------------------------|
| `SUM()`      | Returns the total sum of a numeric column     |
| `AVG()`      | Returns the average value                     |
| `MIN()`      | Returns the minimum value                     |
| `MAX()`      | Returns the maximum value                     |
| `COUNT()`    | Returns the count of rows                     |
| `COUNT_BIG()`| Same as `COUNT()` but returns `bigint`        |
| `STDEV()`    | Returns the standard deviation                |
| `STDEVP()`   | Returns the population standard deviation     |
| `VAR()`      | Returns the variance                         |
| `VARP()`     | Returns the population variance               |
| `GROUPING()` | Indicates if a column is aggregated           |
| `CHECKSUM_AGG()` | Returns a checksum of the values         |
| `STRING_AGG()`   | Concatenates values into a string (SQL 2017+) |

---

## 🔍 Examples and Outputs

### 1. `SUM()`
```sql
SELECT SUM(stockquantity) AS TotalStock FROM PRODUCTS;
````

| TotalStock |
| ---------- |
| 2350       |

---

### 2. `AVG()`

```sql
SELECT AVG(stockquantity) AS AverageStock FROM PRODUCTS;
```

| AverageStock |
| ------------ |
| 235.00       |

---

### 3. `MIN()` / `MAX()`

```sql
SELECT MIN(stockquantity), MAX(stockquantity) FROM PRODUCTS;
```

| MinStock | MaxStock |
| -------- | -------- |
| 15       | 500      |

---

### 4. `COUNT()` and `COUNT(column)`

```sql
SELECT COUNT(*) AS TotalUsers, COUNT(phone) AS PhoneCount FROM Users;
```

| TotalUsers | PhoneCount |
| ---------- | ---------- |
| 1200       | 1150       |

---

### 5. `COUNT_BIG()`

```sql
SELECT COUNT_BIG(*) FROM Users;
```

| (No Column Name) |
| ---------------- |
| 1200             |

---

### 6. `STDEV()` and `STDEVP()`

```sql
SELECT STDEV(stockquantity) AS SampleSTD, STDEVP(stockquantity) AS PopulationSTD FROM PRODUCTS;
```

| SampleSTD | PopulationSTD |
| --------- | ------------- |
| 173.45    | 158.34        |

---

### 7. `VAR()` and `VARP()`

```sql
SELECT VAR(stockquantity), VARP(stockquantity) FROM PRODUCTS;
```

| VAR      | VARP     |
| -------- | -------- |
| 30056.78 | 25047.15 |

---

### 8. `CHECKSUM_AGG()`

```sql
SELECT CHECKSUM_AGG(stockquantity) AS ChecksumVal FROM PRODUCTS;
```

| ChecksumVal |
| ----------- |
| 439558210   |

---

### 9. `STRING_AGG()` (SQL Server 2017+)

```sql
SELECT STRING_AGG(product_name, ', ') AS Products FROM PRODUCTS;
```

| Products                     |
| ---------------------------- |
| Laptop, Mouse, Keyboard, ... |

---

## ❓ Interview Questions & Answers

### Q1: What is the difference between `COUNT(*)` and `COUNT(column)`?

* `COUNT(*)` counts all rows including NULLs.
* `COUNT(column)` counts only non-NULL values.

---

### Q2: What is the purpose of `STDEV()` and `STDEVP()`?

* `STDEV()` calculates the **sample** standard deviation.
* `STDEVP()` calculates the **population** standard deviation.

---

### Q3: What is the difference between `VAR()` and `VARP()`?

* `VAR()` returns the **sample** variance.
* `VARP()` returns the **population** variance.

---

### Q4: What is `STRING_AGG()` used for?

It concatenates values from a column into a single string, separated by a delimiter. Useful in reporting and grouping text data.

---

### Q5: When to use `COUNT_BIG()`?

Use `COUNT_BIG()` when dealing with **very large datasets**, as it returns `bigint` instead of `int`.

---

### Q6: Can aggregate functions be used in the `WHERE` clause?

No. Use them in the `HAVING` clause after `GROUP BY`.

---

### Q7: What is `CHECKSUM_AGG()` and when is it used?

It returns the checksum of values in a group. Used for **quick data integrity checks** or detecting changes.

---

## 📦 Example Table: PRODUCTS

| product\_id | product\_name | stockquantity | category    |
| ----------- | ------------- | ------------- | ----------- |
| 1           | Laptop        | 150           | Electronics |
| 2           | Mouse         | 500           | Accessories |
| 3           | Keyboard      | 250           | Accessories |

---

## 📦 Example Table: USERS

| user\_id | name    | phone      |
| -------- | ------- | ---------- |
| 1        | Alice   | 1234567890 |
| 2        | Bob     | NULL       |
| 3        | Charlie | 9876543210 |

---

## 🔚 Summary

SQL aggregate functions are crucial for **data analysis**, **reporting**, and **summarizing** large data sets. Familiarity with all these functions is important for both development and interviews.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
