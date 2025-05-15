
# 📘 Calling Stored Procedure Using ADO.NET (C#)

This guide demonstrates how to **call a stored procedure** using **ADO.NET** with C# in a SQL Server environment. This is a common technique used to encapsulate business logic in the database and improve performance and security.

---

## 🧰 Technologies Used

* **C# (.NET Framework / .NET Core)**
* **ADO.NET**
* **SQL Server**

---

## 🗂️ Prerequisites

* A SQL Server database.
* A stored procedure in your database.
* A working connection string.
* A Windows Forms or Console App project.

---

## 🔧 Example: Stored Procedure

```sql
CREATE PROCEDURE GetProductDetails
    @ProductId INT
AS
BEGIN
    SELECT price, StockQuantity 
    FROM products 
    WHERE productid = @ProductId
END
```

---

## 🧾 C# Code to Call Stored Procedure

```csharp
using System.Data;
using System.Data.SqlClient;

// Define your connection string
string connectionString = "Data Source=DESKTOP-OCCP11M\\SQLEXPRESS;Initial Catalog=JSShopping;Integrated Security=True;Encrypt=false";

// Using block ensures the connection is closed automatically
using (SqlConnection sqlConnection = new SqlConnection(connectionString))
{
    using (SqlCommand sqlCommand = new SqlCommand("GetProductDetails", sqlConnection))
    {
        sqlCommand.CommandType = CommandType.StoredProcedure;

        // Add input parameter to the command
        sqlCommand.Parameters.AddWithValue("@ProductId", cmbProducts.SelectedValue);

        sqlConnection.Open();

        using (SqlDataReader reader = sqlCommand.ExecuteReader())
        {
            if (reader.HasRows && reader.Read())
            {
                txtPrice.Text = reader["price"].ToString();
                txtUnitType.Text = reader["StockQuantity"].ToString();
            }
            else
            {
                MessageBox.Show("No data found");
            }
        }
    }
}
```

---

## ✅ Key Points

### 🔹 `CommandType.StoredProcedure`

* This tells ADO.NET that the command is a **stored procedure**, not a SQL query.

### 🔹 `SqlCommand.Parameters`

* Use `AddWithValue()` to add parameters expected by the stored procedure.
* Alternatively, you can use:

```csharp
sqlCommand.Parameters.Add("@ProductId", SqlDbType.Int).Value = selectedProductId;
```

### 🔹 `SqlDataReader`

* Efficient way to read data **forward-only**.
* Always wrap in a `using` block for proper disposal.

---

## 🧼 Best Practices

* Use `using` blocks for all disposable ADO.NET objects.
* Avoid dynamic SQL. Stored procedures improve maintainability and security.
* Validate all input before passing to the database.
* Handle exceptions with try-catch blocks in production environments.

---

## 🧪 Optional: Handling Output Parameters

If your stored procedure returns output parameters, use:

```sql
CREATE PROCEDURE GetStockStatus
    @ProductId INT,
    @Stock INT OUTPUT
AS
BEGIN
    SELECT @Stock = StockQuantity FROM products WHERE productid = @ProductId
END
```

```csharp
SqlParameter outputParam = new SqlParameter("@Stock", SqlDbType.Int)
{
    Direction = ParameterDirection.Output
};
sqlCommand.Parameters.Add(outputParam);
sqlCommand.ExecuteNonQuery();
int stock = (int)outputParam.Value;
```

---

## 📚 References

* [ADO.NET Overview – Microsoft Docs](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/)
* [SqlCommand – Microsoft Docs](https://learn.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlcommand)
* [Stored Procedures – SQL Server](https://learn.microsoft.com/en-us/sql/relational-databases/stored-procedures/stored-procedures-database-engine)

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
