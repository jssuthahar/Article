## 🔹 What Is a Sequence?

A `SEQUENCE` is a standalone object that generates **unique numbers** across one or more tables, procedures, or even without a table at all.

### 🆚 Sequence vs Identity

| Feature            | `IDENTITY`                     | `SEQUENCE`                            |
|--------------------|--------------------------------|----------------------------------------|
| Table-bound        | Yes                            | No (independent object)                |
| Multiple Table Use | No                             | Yes                                    |
| Manual Control     | Limited                        | Full control (RESTART, CACHE, etc.)    |
| Gaps               | Possible                       | Still possible (rollbacks, etc.)       |
| Insert Syntax      | Automatic                      | Must call `NEXT VALUE FOR` explicitly  |

---

## 🔧 Syntax: Creating a Sequence

```sql
CREATE SEQUENCE MySequence
    AS INT
    START WITH 1
    INCREMENT BY 1;
```

- `START WITH` – The first number generated.
- `INCREMENT BY` – The step between values (positive or negative).

---

## ➕ Using a Sequence

You can get the next value like this:

```sql
SELECT NEXT VALUE FOR MySequence;
```

Or use it in an `INSERT` statement:

```sql
INSERT INTO Orders (OrderID, CustomerName)
VALUES (NEXT VALUE FOR MySequence, 'John Doe');
```

---

## 🔄 Restart or Alter a Sequence

### Restart from a different value:

```sql
ALTER SEQUENCE MySequence
RESTART WITH 1000;
```

---

## 🚀 Advanced Options

### Caching for Performance

```sql
CREATE SEQUENCE FastSequence
START WITH 1
INCREMENT BY 1
CACHE 100;
```

- SQL Server pre-generates values in memory for faster access.
- ⚠️ On server crash, some cached values might be lost.

### Cycling

```sql
CREATE SEQUENCE CycleSeq
START WITH 1
INCREMENT BY 1
MINVALUE 1
MAXVALUE 10
CYCLE;
```

- Automatically restarts at `MINVALUE` after hitting `MAXVALUE`.

---

## 🔍 Checking Sequence Details

```sql
SELECT * FROM sys.sequences
WHERE name = 'MySequence';
```

---

## 🧹 Dropping a Sequence

```sql
DROP SEQUENCE MySequence;
```

---

## 📌 When to Use `SEQUENCE`

✅ Use when:
- You need unique IDs across multiple tables.
- You want to control start, increment, max/min, caching.
- You want to avoid table-bound ID generation (like in replication, sharded DBs, etc).

❌ Avoid if:
- You just need simple table-local auto-increment.
- You don't want the overhead of managing the sequence separately.

---

Let me know if you want a visual comparison or real-world examples combining sequences with triggers or functions!

If you already have a table with an `IDENTITY` column in SQL Server and you want to **change the increment value**, here's the **key thing to know**:

> ⚠️ **You CANNOT directly alter the `IDENTITY` increment value once the column is created.**  
> SQL Server does not allow altering the `IDENTITY` property (seed or increment) using `ALTER TABLE`.

---

### ✅ Workaround Options

#### ✅ Option 1: Drop and Recreate the Table

If you're in development or can afford to recreate the table:

```sql
-- Step 1: Rename the old table
EXEC sp_rename 'MyTable', 'MyTable_Old';

-- Step 2: Create the new table with a new increment value
CREATE TABLE MyTable (
    ID INT IDENTITY(1, 5),  -- Start at 1, increment by 5
    Name VARCHAR(100)
);

-- Step 3: Copy data (if needed)
INSERT INTO MyTable (Name)
SELECT Name FROM MyTable_Old;

-- Done!
```

---

#### ✅ Option 2: Create a New Table with Correct Identity, and Switch

Same idea as above but planned ahead. This is safe for production with proper care.

---

#### ✅ Option 3: Use a `SEQUENCE` Instead

If you want full control of increments going forward, consider replacing the `IDENTITY` with a `SEQUENCE` object:

```sql
-- Create a sequence with custom increment
CREATE SEQUENCE CustomSeq
START WITH 1
INCREMENT BY 5;

-- Use it in INSERT
INSERT INTO MyTable (ID, Name)
VALUES (NEXT VALUE FOR CustomSeq, 'Alice');
```

You’ll have full control, including restarting, altering increment, etc.

---

#### 🔧 Option 4: Script and Rebuild the Identity Column

If you want to keep the table but change just the identity increment:
1. Create a new column.
2. Drop the old identity column.
3. Rename the new one.
> This is more complex and not recommended for production unless you're careful with constraints, indexes, and relationships.

---

### 🧪 Check Current Identity Settings

```sql
SELECT 
    name AS ColumnName,
    seed_value,
    increment_value,
    last_value
FROM sys.identity_columns
WHERE OBJECT_NAME(object_id) = 'MyTable';
```

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
