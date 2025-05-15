# ADO.NET SQL DataReader Example

This example demonstrates how to use **ADO.NET** to connect to a SQL Server database, execute a query, and retrieve data using a `SqlDataReader`.

## 🧰 Technologies Used

* **C# (.NET Framework or .NET Core)**
* **ADO.NET**
* **SQL Server**
* **WinForms UI Controls** (`ComboBox`, `TextBox`, `MessageBox`)

---

## 📌 Purpose

This code is designed to:

1. Connect to a SQL Server database.
2. Fetch the **price** and **stock quantity** of a selected product from a `products` table.
3. Display the values in textboxes (`txtPrice`, `txtUnitType`) on a Windows Form.

---

## 💻 Code Explanation

```csharp
SqlConnection sqlConnection = new SqlConnection(
    "Data Source=DESKTOP-OCCP11M\\SQLEXPRESS;Initial Catalog=JSShopping;Integrated Security=True;Encrypt=false");
```

* **SqlConnection**: Establishes a connection to the SQL Server.
* **Connection String**:

  * `Data Source`: SQL Server instance.
  * `Initial Catalog`: Name of the database.
  * `Integrated Security=True`: Uses Windows authentication.
  * `Encrypt=false`: Disables encryption for this connection.

---

```csharp
sqlConnection.Open();
```

* Opens the database connection. Always ensure to close it after use to avoid connection leaks.

---

```csharp
string sql = $"select price, StockQuantity from products where productid={cmbProducts.SelectedValue}";
```

* Dynamic SQL query to fetch the `price` and `StockQuantity` for the selected product.
* `cmbProducts.SelectedValue`: Gets the currently selected `productid` from the dropdown (ComboBox).

> **⚠️ Note**: This form of string interpolation is vulnerable to **SQL Injection**. Prefer using **parameterized queries** for production code.

---

```csharp
SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
```

* Creates a command object with the SQL statement and connection.

---

```csharp
SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
```

* Executes the command and returns a `SqlDataReader` to read the results **forward-only** and **read-only**.

---

```csharp
if(sqlDataReader.HasRows)
{
    if (sqlDataReader.Read())
    {
        txtPrice.Text = sqlDataReader["price"].ToString();
        txtUnitType.Text = sqlDataReader["StockQuantity"].ToString();
    }
}
else
{
    MessageBox.Show("No data found");
}
```

* **HasRows**: Checks if any data is returned.
* **Read()**: Advances to the next row (only one in this case).
* Fills `txtPrice` and `txtUnitType` TextBoxes with data from the database.

---

```csharp
sqlConnection.Close();
```

* Closes the connection after use.

---

## ✅ Best Practices

* Always use **parameterized queries** to prevent SQL Injection.
* Use `using` statements for `SqlConnection`, `SqlCommand`, and `SqlDataReader` to auto-handle resource disposal.
* Validate `cmbProducts.SelectedValue` to ensure it's not null or invalid.
* Use try-catch blocks for better error handling.

---

## 🔄 Improved Version (With Parameters and Using)

```csharp
using (SqlConnection sqlConnection = new SqlConnection("your_connection_string"))
{
    string sql = "SELECT price, StockQuantity FROM products WHERE productid = @productid";
    using (SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection))
    {
        sqlCommand.Parameters.AddWithValue("@productid", cmbProducts.SelectedValue);

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

## 📚 References

* [Microsoft Docs: SqlDataReader](https://learn.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqldatareader)
* [Microsoft Docs: SqlConnection](https://learn.microsoft.com/en-us/dotnet/api/system.data.sqlclient.sqlconnection)
* [ADO.NET Overview](https://learn.microsoft.com/en-us/dotnet/framework/data/adonet/)

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
