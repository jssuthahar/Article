# Integrating Entity Framework Core in a .NET Core Web Application

## Step 1: Install Required NuGet Packages

To use Entity Framework Core in a .NET Core Web Application, you need to install the following NuGet packages:

```xml
<PackageReference Include="Microsoft.EntityFrameworkCore" Version="9.0.2" />
<PackageReference Include="Microsoft.EntityFrameworkCore.Design" Version="9.0.2" />
<PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="9.0.2" />
```

### Why These Packages Are Needed?
- **Microsoft.EntityFrameworkCore**: This is the core EF package that provides ORM capabilities.
- **Microsoft.EntityFrameworkCore.Design**: Required for design-time development, like migrations.
- **Microsoft.EntityFrameworkCore.SqlServer**: Enables EF Core to work with SQL Server as the database provider.

## Step 2: Create Model Classes

Define model classes that represent database tables:

```csharp
public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
}

public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }
}
```

## Step 3: Create the DbContext Class

The `DbContext` class manages database interactions:

```csharp
public class AppDBContext : DbContext
{
    public DbSet<Student> Students { get; set; }
    public DbSet<Employee> Employees { get; set; }

    public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)
    {
    }
}
```

### Explanation of `AppDBContext`
1. **`DbSet<Student> Students { get; set; }`**  
   - Represents the `Students` table in the database.
   - Allows CRUD (Create, Read, Update, Delete) operations on `Student` entities.

2. **`DbSet<Employee> Employees { get; set; }`**  
   - Represents the `Employees` table in the database.
   - Enables querying and updating `Employee` records.

3. **Constructor `public AppDBContext(DbContextOptions<AppDBContext> options) : base(options)`**  
   - Passes the `DbContextOptions<AppDBContext>` parameter to the base class (`DbContext`).
   - Enables dependency injection, so `AppDBContext` can be configured in `Program.cs` using `AddDbContext()`.

### Purpose:
This setup ensures that Entity Framework Core understands which models (`Student` and `Employee`) should be mapped to database tables and how the database should be configured.

## Step 4: Configure the Connection String

Add the database connection string in `appsettings.json`:

```json
{
  "ConnectionStrings": {
    "JSconn": "Server=your_server_name;Database=your_database_name;Trusted_Connection=True;MultipleActiveResultSets=true"
  }
}
```

## Step 5: Register DbContext in `Program.cs`

Modify `Program.cs` to add the database context:

```csharp
var connection = builder.Configuration.GetConnectionString("JSconn");

builder.Services.AddDbContext<AppDBContext>(options => options.UseSqlServer(connection));
```

### Explanation of Connection Configuration:
1. **`builder.Configuration.GetConnectionString("JSconn")`**
   - Retrieves the connection string named `JSconn` from `appsettings.json`.
   - Ensures that the database connection settings are managed via configuration files, making it easier to change environments (e.g., development, staging, production).

2. **`builder.Services.AddDbContext<AppDBContext>(options => options.UseSqlServer(connection));`**
   - Registers `AppDBContext` in the dependency injection container.
   - Configures it to use SQL Server with the retrieved connection string.
   - Ensures that the database context is available throughout the application.

## Step 6: Run Entity Framework Core Migrations

### Install EF Core CLI Tool (Optional)
Run the following command in the Package Manager Console or terminal:

```sh
dotnet tool install --global dotnet-ef
```

### Add an Initial Migration
This generates migration files based on the model classes:

```sh
dotnet ef migrations add InitialMigration
```

### Update the Database
Apply the migration to create/update the database schema:

```sh
dotnet ef database update
```

### Update Migrations When Model Changes
If you modify your model classes and need to update the database, follow these steps:

1. **Add a new migration** to reflect the changes:
   
   ```sh
   dotnet ef migrations add UpdateMigration
   ```
   
2. **Apply the migration to the database**:
   
   ```sh
   dotnet ef database update
   ```

## Step 7: Fixing "No project was found" Error
If you encounter the error:

```
No project was found. Change the current working directory or use the --project option.
```

Try the following solution:

```sh
dotnet ef migrations add InitialMigration --project YourProject
```

## Interview Questions and Answers

### 1. What is Entity Framework Core?
**Answer:**
Entity Framework Core (EF Core) is an open-source, lightweight, extensible, and cross-platform Object-Relational Mapper (ORM) for .NET applications. It allows developers to work with databases using C# objects instead of SQL queries.

### 2. What are migrations in Entity Framework Core?
**Answer:**
Migrations in EF Core help manage changes to the database schema over time. It allows adding, modifying, or removing database tables and columns without losing existing data.

### 3. How do you enable migrations in EF Core?
**Answer:**
Run the following CLI command:
```sh
dotnet ef migrations add MigrationName
```

### 4. How do you update the database after modifying a model?
**Answer:**
After modifying the model, run the following commands:
```sh
dotnet ef migrations add UpdateMigration
```
```sh
dotnet ef database update
```

### 5. What is `DbContext` in Entity Framework Core?
**Answer:**
`DbContext` is the primary class in EF Core that manages database connections and operations. It acts as a bridge between the application and the database.

### 6. How do you configure a connection string in EF Core?
**Answer:**
Connection strings are typically stored in `appsettings.json` and retrieved using:
```csharp
var connection = builder.Configuration.GetConnectionString("JSconn");
builder.Services.AddDbContext<AppDBContext>(options => options.UseSqlServer(connection));
```

### 7. What are DbSet properties in DbContext?
**Answer:**
`DbSet<T>` represents a table in the database and allows performing CRUD operations on entities. Example:
```csharp
public DbSet<Student> Students { get; set; }
```


## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

