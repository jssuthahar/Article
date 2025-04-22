# 📘 SQL Server Data Types – Complete Guide

## 🧠 Why Learn SQL Data Types?

Data types in SQL define what kind of **data** you can store in each column of a table. Choosing the right data type:
- Saves storage space
- Improves performance
- Maintains data accuracy
- Helps avoid runtime errors

---

## 🔍 What Are SQL Data Types?

SQL Server provides a rich set of data types, categorized into:
- Numeric
- Character/String
- Date and Time
- Binary
- Special (like `XML`, `UNIQUEIDENTIFIER`, etc.)

---

## 🔢 1. Numeric Data Types

| Data Type        | Description                                 | Example               |
|------------------|---------------------------------------------|------------------------|
| `INT`            | Whole numbers (–2,147,483,648 to 2,147,483,647) | 100, 2024             |
| `BIGINT`         | Very large whole numbers                     | 9223372036854775807   |
| `SMALLINT`       | Small range integer (–32,768 to 32,767)     | 255                   |
| `TINYINT`        | Small numbers (0 to 255)                    | 10                    |
| `NUMERIC(p,s)` / `DECIMAL(p,s)` | Fixed precision and scale      | `12345.67` (`NUMERIC(7,2)`) |
| `FLOAT`          | Approximate floating-point number           | 3.14159               |
| `REAL`           | Lower-precision `FLOAT`                     | 1.23E+03              |
| `MONEY`          | Currency (accurate to 4 decimal places)     | 1999.99               |
| `SMALLMONEY`     | Smaller range of money                      | 214748.3647           |

---

## 🔤 2. Character/String Data Types

| Data Type       | Description                                  | Example              |
|------------------|----------------------------------------------|----------------------|
| `CHAR(n)`        | Fixed-length string                          | `'ABC       '` (padded) |
| `VARCHAR(n)`     | Variable-length ASCII string                 | `'Hello'`            |
| `TEXT`           | Deprecated large text (use `VARCHAR(MAX)`)   | Long articles        |
| `NCHAR(n)`       | Fixed-length Unicode string                  | `N'नमस्ते'`          |
| `NVARCHAR(n)`    | Variable-length Unicode string               | `N'你好'`            |
| `NTEXT`          | Deprecated Unicode large text                | Use `NVARCHAR(MAX)`  |

---

## 🕓 3. Date and Time Data Types

| Data Type     | Description                   | Example              |
|---------------|-------------------------------|----------------------|
| `DATE`        | Stores only date              | `'2025-04-22'`       |
| `TIME`        | Stores only time              | `'14:30:00'`         |
| `DATETIME`    | Date and time (legacy type)   | `'2025-04-22 14:30'` |
| `DATETIME2`   | High precision datetime        | `'2025-04-22 14:30:00.1234567'` |
| `SMALLDATETIME` | Rounded datetime             | `'2025-04-22 14:00'` |

---

## 💾 4. Binary Data Types

| Data Type       | Description                         | Example Use Case       |
|------------------|-------------------------------------|-------------------------|
| `BINARY(n)`      | Fixed-length binary                 | Flags, bitmaps          |
| `VARBINARY(n)`   | Variable-length binary              | Files, images           |
| `VARBINARY(MAX)` | Large binary storage                | PDFs, pictures, videos  |
| `IMAGE`          | Deprecated. Use `VARBINARY(MAX)`    |                         |

---

## 🧪 5. Special Data Types

| Data Type           | Description                              | Example                         |
|----------------------|------------------------------------------|----------------------------------|
| `BIT`                | Boolean (0 or 1)                          | `1 = True`, `0 = False`         |
| `UNIQUEIDENTIFIER`   | GUID – globally unique ID                | `6F9619FF-8B86-D011-B42D-00C04FC964FF` |
| `XML`                | Stores XML formatted data                | `<note><to>John</to></note>`   |
| `GEOGRAPHY` / `GEOMETRY` | For spatial data like maps           | Coordinates, locations          |
| `SQL_VARIANT`        | Can store different data types in 1 column | Avoid unless truly needed       |
| `HIERARCHYID`        | Used to represent hierarchical data      | Org charts, folder trees        |

---

## 🛠️ How to Use Data Types (Example)

```sql
CREATE TABLE EmployeeProfile (
  EmpID INT PRIMARY KEY,
  EmpName NVARCHAR(100),
  Salary DECIMAL(10,2),
  JoinDate DATE,
  IsActive BIT,
  ProfilePic VARBINARY(MAX),
  Location GEOGRAPHY
)
```

---

## 📍 Where to Use Which Data Type?

| Scenario               | Suggested Data Type       |
|------------------------|---------------------------|
| Employee Name          | `NVARCHAR`                |
| Salary                 | `DECIMAL` or `MONEY`      |
| Status flag            | `BIT`                     |
| Date of joining        | `DATE` or `DATETIME2`     |
| Upload files/images    | `VARBINARY(MAX)`          |
| Multi-language content | `NVARCHAR`                |
| Unique user IDs        | `UNIQUEIDENTIFIER`        |

---

## 🎯 Interview Questions and Answers

### ❓ Q1: What's the difference between `VARCHAR` and `NVARCHAR`?

**✅ A:**  
- `VARCHAR` supports only ASCII (non-Unicode) data.
- `NVARCHAR` supports Unicode, required for multilingual data.

---

### ❓ Q2: When to use `DECIMAL` instead of `FLOAT`?

**✅ A:**  
Use `DECIMAL`/`NUMERIC` for **precise values** like salary, prices.  
Use `FLOAT` for **scientific or approximate values** like measurements or ratios.

---

### ❓ Q3: What is the default value of a `BIT` column?

**✅ A:**  
If not specified, it's `NULL`. You can set `DEFAULT 0` or `1` explicitly.

---

### ❓ Q4: Can we store images in SQL Server?

**✅ A:**  
Yes, using `VARBINARY(MAX)`, you can store images, PDFs, and other binary data.

---

### ❓ Q5: What is the range of `INT` and `BIGINT`?

**✅ A:**  
- `INT`: –2,147,483,648 to 2,147,483,647  
- `BIGINT`: –9,223,372,036,854,775,808 to 9,223,372,036,854,775,807

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
