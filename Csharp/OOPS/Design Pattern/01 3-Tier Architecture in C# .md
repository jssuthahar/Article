# 3-Tier Architecture with ADO.NET and SQL Server

This project demonstrates a **3-tier architecture** in .NET using **ADO.NET** to interact with a **SQL Server** database. It covers the use of `ExecuteNonQuery`, `ExecuteScalar`, `SqlDataReader`, and `DataSet`, and explains why queries belong in the Data Access Layer (DAL) while the Business Logic Layer (BLL) handles rules.

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Database Setup](#database-setup)
6. [Layer Responsibilities](#layer-responsibilities)
7. [Implementation Details](#implementation-details)

   * [Data Access Layer (DAL)](#data-access-layer-dal)
   * [Business Logic Layer (BLL)](#business-logic-layer-bll)
   * [Presentation Layer (PL)](#presentation-layer-pl)
8. [ADO.NET Methods](#adonet-methods)
9. [Usage](#usage)
10. [Author](#author)

---

## Overview

The 3-tier architecture separates the application into three distinct layers:

1. **Presentation Layer (PL)** – Manages user interface and user interaction.
2. **Business Logic Layer (BLL)** – Contains all business rules and validations.
3. **Data Access Layer (DAL)** – Handles all database operations (CRUD) using **ADO.NET**.

This separation ensures **modularity, maintainability, and scalability**.

---

## Architecture

```
Presentation Layer (PL)
          │
          ▼
Business Logic Layer (BLL)
          │
          ▼
Data Access Layer (DAL) ←→ SQL Server Database
```

---

## Technologies Used

* **.NET Framework / .NET Core**
* **C#**
* **ADO.NET**
* **SQL Server**
* **Visual Studio**

---

## Project Structure

```
3TierArchitectureDemo/
│
├─ DAL/                  # Data Access Layer
│  ├─ DatabaseHelper.cs
│  └─ CustomerDAL.cs
│
├─ BLL/                  # Business Logic Layer
│  └─ CustomerBLL.cs
│
├─ PL/                   # Presentation Layer (Console / WinForms / WPF)
│  └─ Program.cs
│
└─ README.md
```

---

## Database Setup

1. Create a database named `CustomerDB`.
2. Create a `Customers` table:

```sql
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100),
    Email NVARCHAR(100),
    Age INT
);
```

---

## Layer Responsibilities

| Layer | Responsibility                         | Queries? | SQL Rights? |
| ----- | -------------------------------------- | -------- | ----------- |
| DAL   | Handles all database operations (CRUD) | ✅ Yes    | ✅ Yes       |
| BLL   | Business rules, validations            | ❌ No     | ❌ No        |
| PL    | User interface                         | ❌ No     | ❌ No        |

**Key points:**

* **Queries stay in DAL**: Centralizes database operations, allows reusability, and keeps BLL clean.
* **BLL does not need SQL**: It calls DAL methods and applies business rules before/after operations.

---

## Implementation Details

### Data Access Layer (DAL)

Handles all database operations:

```csharp
using System.Data;
using System.Data.SqlClient;

public class CustomerDAL
{
    private string connectionString = "Server=.;Database=CustomerDB;Trusted_Connection=True;";

    // ExecuteNonQuery - Insert/Update/Delete
    public int AddCustomer(string name, string email, int age)
    {
        using(SqlConnection conn = new SqlConnection(connectionString))
        {
            SqlCommand cmd = new SqlCommand("INSERT INTO Customers (Name, Email, Age) VALUES (@Name, @Email, @Age)", conn);
            cmd.Parameters.AddWithValue("@Name", name);
            cmd.Parameters.AddWithValue("@Email", email);
            cmd.Parameters.AddWithValue("@Age", age);

            conn.Open();
            return cmd.ExecuteNonQuery();
        }
    }

    // ExecuteScalar - Get single value
    public int GetCustomerCount()
    {
        using(SqlConnection conn = new SqlConnection(connectionString))
        {
            SqlCommand cmd = new SqlCommand("SELECT COUNT(*) FROM Customers", conn);
            conn.Open();
            return (int)cmd.ExecuteScalar();
        }
    }

    // DataSet - Retrieve multiple rows
    public DataSet GetAllCustomers()
    {
        using(SqlConnection conn = new SqlConnection(connectionString))
        {
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM Customers", conn);
            DataSet ds = new DataSet();
            da.Fill(ds, "Customers");
            return ds;
        }
    }

    // SqlDataReader - Read row by row
    public void DisplayCustomers()
    {
        using(SqlConnection conn = new SqlConnection(connectionString))
        {
            SqlCommand cmd = new SqlCommand("SELECT * FROM Customers", conn);
            conn.Open();
            using(SqlDataReader reader = cmd.ExecuteReader())
            {
                while(reader.Read())
                {
                    Console.WriteLine($"ID: {reader["CustomerID"]}, Name: {reader["Name"]}, Email: {reader["Email"]}, Age: {reader["Age"]}");
                }
            }
        }
    }
}
```

---

### Business Logic Layer (BLL)

Applies business rules and communicates with DAL:

```csharp
public class CustomerBLL
{
    private CustomerDAL dal = new CustomerDAL();

    public void AddCustomer(string name, string email, int age)
    {
        if(age < 18)
            throw new Exception("Customer must be adult.");
        dal.AddCustomer(name, email, age);
    }

    public void ShowAllCustomers()
    {
        dal.DisplayCustomers();
    }

    public int GetCustomerCount()
    {
        return dal.GetCustomerCount();
    }
}
```

---

### Presentation Layer (PL)

Handles user interaction:

```csharp
class Program
{
    static void Main()
    {
        CustomerBLL bll = new CustomerBLL();

        bll.AddCustomer("John Doe", "john@example.com", 30);
        Console.WriteLine("Total Customers: " + bll.GetCustomerCount());

        Console.WriteLine("Customer List:");
        bll.ShowAllCustomers();

        Console.ReadLine();
    }
}
```

---

## ADO.NET Methods Explained

| Method              | Purpose                                                       |
| ------------------- | ------------------------------------------------------------- |
| **ExecuteNonQuery** | Executes `INSERT`, `UPDATE`, `DELETE`. Returns affected rows. |
| **ExecuteScalar**   | Returns a single value (e.g., COUNT, SUM).                    |
| **SqlDataReader**   | Reads data row by row, forward-only, fast.                    |
| **DataSet**         | Stores multiple tables in memory, can be used offline.        |

---

## Usage

1. Open the solution in **Visual Studio**.
2. Update the connection string in `CustomerDAL.cs`.
3. Run the application to insert, view, and count customers.
4. Modify queries or add new methods in DAL as needed.

---

## Author

- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

