# 🧾 ADO.NET Login Functionality – Beginner Explanation

This simple login example demonstrates how to use ADO.NET to connect to a SQL Server database and verify user credentials.

---

## 🔗 Step-by-Step Code Explanation

```csharp
SqlConnection sqlConnection = new SqlConnection("Data Source=xyz\\SQLEXPRESS;Initial Catalog=xyzdatasbe;Integrated Security=True;Encrypt=false");
```

### ✅ What this does:

* **SqlConnection**: Creates a connection to a SQL Server database.
* **Data Source**: The SQL Server name (`xyz\SQLEXPRESS`).
* **Initial Catalog**: The database name (`xyzdatasbe`).
* **Integrated Security=True**: Uses Windows Authentication to connect.
* **Encrypt=False**: Disables encryption for the connection (commonly set to false in development environments).

---

```csharp
sqlConnection.Open();
```

### ✅ Opens the database connection.

* Must be done before executing any SQL queries.

---

```csharp
string sql = $"SELECT count(*) from users where fullname='{txtUsername.Text}' and PasswordHash='{txtPassword.Password}'";
```

### ✅ This creates the SQL query:

* It checks how many rows exist in the `users` table where:

  * The `fullname` matches what the user entered.
  * The `PasswordHash` matches the entered password.

> ⚠️ **Note:** This is not secure because it uses **string interpolation** directly with user inputs. This can lead to **SQL Injection** attacks. Use **parameterized queries** instead. (Explained later below.)

---

```csharp
SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
int count = (int)sqlCommand.ExecuteScalar();
```

### ✅ This runs the SQL query:

* `SqlCommand` runs the SQL query using the open connection.
* `ExecuteScalar()` returns a single value – in this case, the count of matching users.
* If the user exists, `count` will be `1` or more.

---

```csharp
sqlConnection.Close();
```

### ✅ Always close the connection after the work is done to free up resources.

---

```csharp
if(count > 0)
{
    MessageBox.Show("Login Successful");
}
else
{
    MessageBox.Show("Invalid Username or Password");
}
```

### ✅ Final decision logic:

* If a user is found, login is successful.
* Otherwise, an error message is shown.

---

## 🛑 Important: Use Parameterized Queries to Prevent SQL Injection

Instead of:

```csharp
string sql = $"SELECT count(*) from users where fullname='{txtUsername.Text}' and PasswordHash='{txtPassword.Password}'";
```

Use:

```csharp
string sql = "SELECT count(*) from users where fullname=@username and PasswordHash=@password";
SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
sqlCommand.Parameters.AddWithValue("@username", txtUsername.Text);
sqlCommand.Parameters.AddWithValue("@password", txtPassword.Password);
```

This way:

* SQL Server treats the values as parameters (data), not part of the query.
* Helps prevent attacks like `' OR '1'='1'`.

---

## ✅ Summary

| Concept              | Description                                                          |
| -------------------- | -------------------------------------------------------------------- |
| `SqlConnection`      | Connects to SQL Server                                               |
| `Open()` / `Close()` | Opens and closes the connection                                      |
| `SqlCommand`         | Executes the SQL query                                               |
| `ExecuteScalar()`    | Returns a single value (like a number)                               |
| Login Logic          | Checks if the entered username & password exist in the `users` table |
| Security             | Avoid string interpolation. Always use **parameterized queries**     |

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
