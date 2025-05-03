# SQL Server Temporary Tables

This document provides a clear overview of the different types of temporary tables available in SQL Server, including their syntax, use cases, and scope.

---

## Types of Temporary Tables in SQL Server

1. **Local Temporary Table**
2. **Global Temporary Table**
3. **Table Variable**
4. **Temporary Table Without `#` (using `DECLARE @TableName TABLE`)**

---

### 1. Local Temporary Table

- **Syntax**:
  ```sql
  CREATE TABLE #LocalTempTable (
      ID INT,
      Name VARCHAR(100)
  );
````

* **Scope**:

  * Available only to the session that created it.
  * Automatically dropped when the session is closed.

* **Use Case**:

  * Used in stored procedures or complex queries to store intermediate results.

---

### 2. Global Temporary Table

* **Syntax**:

  ```sql
  CREATE TABLE ##GlobalTempTable (
      ID INT,
      Description VARCHAR(100)
  );
  ```

* **Scope**:

  * Visible to all sessions.
  * Dropped automatically when the last session referencing it is closed.

* **Use Case**:

  * Shared temporary storage across multiple sessions.

---

### 3. Table Variable (Without `#`)

* **Syntax**:

  ```sql
  DECLARE @TableVariable TABLE (
      ID INT,
      Value VARCHAR(100)
  );
  ```

* **Scope**:

  * Available only within the batch, stored procedure, or function where it is declared.

* **Use Case**:

  * Useful for small sets of data, quick processing, and where indexing is not crucial.

* **Pros**:

  * Memory efficient for small datasets.
  * No need to explicitly drop the table.

---


## Summary Table

| Type                | Syntax Example             | Scope           | Auto Drop | Indexing |
| ------------------- | -------------------------- | --------------- | --------- | -------- |
| Local Temp Table    | `#TableName`               | Session         | Yes       | Yes      |
| Global Temp Table   | `##TableName`              | All Sessions    | Yes       | Yes      |
| Table Variable      | `DECLARE @TableName TABLE` | Batch/Procedure | Yes       | Limited  |

---

## Notes

* Use **local temp tables** for intermediate complex results within one session.
* Use **global temp tables** cautiously in multi-user environments.
* Use **table variables** for small datasets with limited logic.


 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
