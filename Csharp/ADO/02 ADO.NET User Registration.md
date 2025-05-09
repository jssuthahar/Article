# ADO.NET User Registration – Explanation

This README explains how to use **ADO.NET** to register a new user in a SQL Server database using C#. It provides a line-by-line explanation of the following code snippet:

```csharp
SqlConnection sqlConnection = new SqlConnection("Data Source=DESKTOP-OCCP11M\\SQLEXPRESS;Initial Catalog=JSShopping;Integrated Security=True;Encrypt=false");
sqlConnection.Open();
string sql = $"INSERT INTO USERS(FULLNAME,EMAIL,PasswordHash) VALUES('{txtNewUsername.Text}','{txtEmail.Text}','{txtNewPassword.Password}')";
SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
sqlCommand.ExecuteNonQuery();
sqlConnection.Close();
```

---

## 🧾 Prerequisites

* A SQL Server instance (e.g., SQL Server Express)
* A database named `JSShopping`
* A table named `USERS` with columns: `FULLNAME`, `EMAIL`, and `PasswordHash`
* A WinForms/WPF application with the following controls:

  * `txtNewUsername`: TextBox for full name
  * `txtEmail`: TextBox for email
  * `txtNewPassword`: PasswordBox or TextBox for password

---

## 🔍 Code Explanation

### 1. **Establish SQL Connection**

```csharp
SqlConnection sqlConnection = new SqlConnection("Data Source=DESKTOP-OCCP11M\\SQLEXPRESS;Initial Catalog=JSShopping;Integrated Security=True;Encrypt=false");
```

* `SqlConnection` is part of ADO.NET used to connect to SQL Server.
* The **connection string** includes:

  * `Data Source`: SQL Server name (`DESKTOP-OCCP11M\SQLEXPRESS`)
  * `Initial Catalog`: Database name (`JSShopping`)
  * `Integrated Security=True`: Uses Windows Authentication
  * `Encrypt=false`: Disables encryption (used in development environments)

---

### 2. **Open the Connection**

```csharp
sqlConnection.Open();
```

* Opens the SQL connection to allow executing SQL commands.

---

### 3. **Prepare the SQL Insert Command**

```csharp
string sql = $"INSERT INTO USERS(FULLNAME,EMAIL,PasswordHash) VALUES('{txtNewUsername.Text}','{txtEmail.Text}','{txtNewPassword.Password}')";
```

* This line constructs a raw SQL `INSERT` statement using string interpolation.
* `txtNewUsername.Text`, `txtEmail.Text`, and `txtNewPassword.Password` represent user input.
* ⚠️ **Important**: This method is vulnerable to SQL Injection attacks. Use **parameterized queries** for security (see "Security Note" below).

---

### 4. **Create SQL Command**

```csharp
SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
```

* Creates a `SqlCommand` object that will execute the SQL statement using the active connection.

---

### 5. **Execute the Command**

```csharp
sqlCommand.ExecuteNonQuery();
```

* Executes the SQL statement.
* `ExecuteNonQuery()` is used for commands that **do not return results** (e.g., `INSERT`, `UPDATE`, `DELETE`).

---

### 6. **Close the Connection**

```csharp
sqlConnection.Close();
```

* Closes the database connection to free up resources.

---

## ⚠️ Security Note – Avoid SQL Injection

The current approach is **not safe** for real-world applications. It allows attackers to inject malicious SQL code. Instead, use **parameterized queries** like this:

```csharp
string sql = "INSERT INTO USERS(FULLNAME, EMAIL, PasswordHash) VALUES(@FullName, @Email, @Password)";
SqlCommand sqlCommand = new SqlCommand(sql, sqlConnection);
sqlCommand.Parameters.AddWithValue("@FullName", txtNewUsername.Text);
sqlCommand.Parameters.AddWithValue("@Email", txtEmail.Text);
sqlCommand.Parameters.AddWithValue("@Password", txtNewPassword.Password);
sqlCommand.ExecuteNonQuery();
```

---

## ✅ Summary

This sample demonstrates:

* Opening a SQL Server connection using ADO.NET
* Inserting user data into a database
* Executing non-query SQL commands
* The importance of closing the connection
* Why you should use parameterized queries for security

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
