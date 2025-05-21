

# 3-Tier Architecture in C# with SQL Insert Example and Common DAL Code Refactoring

## What is 3-Tier Architecture?

3-Tier Architecture divides an application into three distinct layers:

1. **Presentation Layer (UI Layer):** Handles user interaction.
2. **Business Logic Layer (BLL):** Contains business rules and validation.
3. **Data Access Layer (DAL):** Manages database operations.

This separation promotes modularity, maintainability, and scalability.

---

## Why Use 3-Tier Architecture?

* Separation of concerns
* Easier maintenance and testing
* Independent scalability
* Cleaner and reusable code

---

## Layers Communication Flow

* UI Layer → calls → BLL → calls → DAL → interacts → Database
* Responses flow back in reverse order.

---

## Example: Insert Data into SQL Server Using 3-Tier Architecture

### SQL Table Structure

```sql
CREATE TABLE Employees (
    EmployeeId INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100),
    Age INT,
    Position NVARCHAR(100)
);
```

---

## 1. Data Access Layer (DAL) with Common Code Refactoring

### DatabaseHelper.cs — Common DAL Helper for Executing SQL Commands

```csharp
using System.Data.SqlClient;

public class DatabaseHelper
{
    private readonly string connectionString;

    public DatabaseHelper(string connectionString)
    {
        this.connectionString = connectionString;
    }

    /// <summary>
    /// Executes a non-query SQL command like INSERT, UPDATE, DELETE.
    /// </summary>
    /// <param name="query">SQL command text</param>
    /// <param name="parameters">Parameters for the SQL command</param>
    /// <returns>Number of affected rows</returns>
    public int ExecuteNonQuery(string query, params SqlParameter[] parameters)
    {
        using (SqlConnection conn = new SqlConnection(connectionString))
        using (SqlCommand cmd = new SqlCommand(query, conn))
        {
            if (parameters != null)
                cmd.Parameters.AddRange(parameters);

            conn.Open();
            return cmd.ExecuteNonQuery();
        }
    }
}
```

---

### EmployeeDAL.cs — Uses DatabaseHelper to Insert Data

```csharp
using System.Data.SqlClient;

public class EmployeeDAL
{
    private readonly DatabaseHelper dbHelper;

    public EmployeeDAL(string connectionString)
    {
        dbHelper = new DatabaseHelper(connectionString);
    }

    public bool InsertEmployee(string name, int age, string position)
    {
        string query = "INSERT INTO Employees (Name, Age, Position) VALUES (@Name, @Age, @Position)";
        
        SqlParameter[] parameters = {
            new SqlParameter("@Name", name),
            new SqlParameter("@Age", age),
            new SqlParameter("@Position", position)
        };

        int rowsAffected = dbHelper.ExecuteNonQuery(query, parameters);
        return rowsAffected > 0;
    }
}
```

---

## 2. Business Logic Layer (BLL)

Handles validation and business rules before calling DAL.

```csharp
public class EmployeeBLL
{
    private EmployeeDAL employeeDAL;

    public EmployeeBLL(string connectionString)
    {
        employeeDAL = new EmployeeDAL(connectionString);
    }

    public bool AddEmployee(string name, int age, string position)
    {
        if (string.IsNullOrWhiteSpace(name))
            throw new ArgumentException("Name is required.");

        if (age <= 0)
            throw new ArgumentException("Age must be greater than zero.");

        return employeeDAL.InsertEmployee(name, age, position);
    }
}
```

---

## 3. Presentation Layer (Console App Example)

Gets user input and calls BLL to insert employee.

```csharp
using System;

class Program
{
    static void Main()
    {
        string connectionString = "your_connection_string_here";
        EmployeeBLL employeeBLL = new EmployeeBLL(connectionString);

        Console.Write("Enter employee name: ");
        string name = Console.ReadLine();

        Console.Write("Enter employee age: ");
        int age = int.Parse(Console.ReadLine());

        Console.Write("Enter employee position: ");
        string position = Console.ReadLine();

        try
        {
            bool success = employeeBLL.AddEmployee(name, age, position);
            Console.WriteLine(success ? "Employee inserted successfully." : "Insert failed.");
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error: " + ex.Message);
        }
    }
}
```

---

## Benefits of Common DAL Code Refactoring

* **Code Reuse:** Centralizes connection and command execution logic.
* **Maintainability:** Fix bugs or change database interaction in one place.
* **Cleaner DAL:** Focuses on SQL queries and parameters only.

---

## Summary

| Layer                | Responsibility                     | Example Class                   |
| -------------------- | ---------------------------------- | ------------------------------- |
| Presentation Layer   | UI and user input/output           | `Program`                       |
| Business Logic Layer | Validation, rules, business logic  | `EmployeeBLL`                   |
| Data Access Layer    | Database communication and queries | `EmployeeDAL`, `DatabaseHelper` |

---

## Notes

* Replace `"your_connection_string_here"` with your actual database connection string.
* Extend `DatabaseHelper` with more methods for different query types (e.g., `ExecuteScalar`, `ExecuteReader`).
* Consider async versions (`ExecuteNonQueryAsync`) for better performance.
* Use ORM frameworks like Entity Framework for more complex applications.

---
 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

