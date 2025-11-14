
# ** Connecting to Azure SQL Database Using VS Code**

This guide explains **how to get your Azure SQL Database connection string**, install and use the **SQL Server extension in VS Code**, and run queries efficiently.

---

## **1. Get SQL Database Connection String**

Connection strings provide the information required for **applications or tools to connect to your SQL Database**.

### **Steps to Retrieve Connection String from Azure Portal:**

1. Open [Azure Portal](https://portal.azure.com) → Navigate to your **SQL Database** (`customerdb` or similar).
2. Go to **Connection strings** under the database menu.
3. You will see connection strings for various protocols:

| Protocol | Example                                                                                                                                                                                                                                      | Notes                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| ADO.NET  | `Server=tcp:jsquare.database.windows.net,1433;Initial Catalog=customerdb;Persist Security Info=False;User ID=<username>;Password=<password>;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;` | Used for .NET applications |
| JDBC     | `jdbc:sqlserver://jsquare.database.windows.net:1433;database=customerdb;user=<username>@jsquare;password=<password>;encrypt=true;trustServerCertificate=false;loginTimeout=30;`                                                              | Java applications          |
| ODBC     | `Driver={ODBC Driver 18 for SQL Server};Server=tcp:jsquare.database.windows.net,1433;Database=customerdb;Uid=<username>;Pwd=<password>;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;`                                         | ODBC-based apps or tools   |
| PHP      | `Server=jsquare.database.windows.net;Database=customerdb;Uid=<username>;Pwd=<password>;Encrypt=yes;`                                                                                                                                         | PHP apps                   |

> **Tip:** Replace `<username>` and `<password>` with your SQL admin credentials.

---

## **2. Install SQL Server Extension in VS Code**

1. Open **Visual Studio Code**.
2. Go to **Extensions** (Ctrl+Shift+X / Cmd+Shift+X).
3. Search for **“SQL Server (mssql)”**.
4. Click **Install**.

### **Features of the SQL Server Extension**

* Connect to Azure SQL Database or on-prem SQL Server
* Run queries directly in VS Code
* View database objects (tables, views, stored procedures)
* Export query results to CSV/JSON/Excel
* Manage multiple connections

---

## **3. Connect to SQL Database Using VS Code**

### **Steps:**

1. Press **Ctrl+Shift+P / Cmd+Shift+P → SQL: Connect**
2. Choose **Create Connection Profile**
3. Enter the following:

| Field               | Example / Notes                            |
| ------------------- | ------------------------------------------ |
| Server name         | `jsquare.database.windows.net`             |
| Database name       | `customerdb` (or leave default for master) |
| Authentication type | SQL Login                                  |
| User name           | `sqladmin`                                 |
| Password            | `<password>`                               |
| Save Password       | Yes / No (optional)                        |
| Profile name        | `JSquare-DB` (any name for reference)      |

4. After configuration, your profile appears under **SQL Server extension → Connections**.
5. Click the connection to **open a new SQL query editor**.

---

## **4. Run Queries in VS Code**

* Open a new query window → **New Query (Ctrl+N / Cmd+N)**
* Use **T-SQL commands**:

```sql
-- Select all customers
SELECT * FROM Customers;

-- Create a new table
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName NVARCHAR(50),
    Price DECIMAL(10,2)
);

-- Insert sample data
INSERT INTO Products (ProductID, ProductName, Price)
VALUES (1, 'Laptop', 1200.50);
```

* Execute query: **Ctrl+Shift+E / Cmd+Shift+E**
* Results appear in the **Results pane**

---

## **5. Tips & Best Practices**

* **Encrypt Connections:** Use `Encrypt=True;TrustServerCertificate=False;` in connection string for secure communication.
* **Use Connection Profiles:** Save multiple profiles for dev, test, and production databases.
* **Check Firewall:** Ensure your local IP is allowed in **Server Firewall settings**.
* **Use IntelliSense:** SQL Server extension provides autocomplete for tables, columns, and procedures.
* **Export Results:** Right-click results → Export to CSV / JSON / Excel for reporting or debugging.

---

## **6. Real-Time Use Cases**

| Scenario    | How VS Code Helps                                     |
| ----------- | ----------------------------------------------------- |
| Development | Run queries, create tables, insert sample data        |
| Testing     | Connect to staging DB with same schema as production  |
| Reporting   | Export query results directly to Excel for analytics  |
| Debugging   | Inspect database objects, stored procedures, and data |

---

✅ **Summary**

1. **Get Connection String** from Azure Portal for your SQL Database
2. **Install SQL Server Extension** in VS Code
3. **Create a connection profile** using credentials and server name
4. **Run T-SQL queries** and manage database objects
5. **Use built-in tools** like IntelliSense, query results export, and multiple connection profiles

### 🔔 Stay Updated with My Latest Projects

If you enjoy:
- 🧠 AI agents and automation
- 🛠️ Practical tools and utilities
- 📘 Developer tutorials and guides
- 🚀 End-to-end project templates

👉 Then **[Follow me on GitHub](https://github.com/jssuthahar)** to get notified about new repos, ideas, and updates!

[![Follow Me](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)

## ⭐ Start & Follow Me
If you find this repository useful, don't forget to **Star** ⭐ the repo and **Follow** me for more updates!

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)


