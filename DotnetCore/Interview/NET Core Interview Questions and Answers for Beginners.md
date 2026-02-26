# .NET Core Interview Questions and Answers for Beginners

---

## **1. What is .NET Core and how is it different from .NET Framework?**

**Answer:**
.NET Core is an **open-source, cross-platform framework** used to build modern applications. It supports **Windows, Linux, and macOS**, unlike the .NET Framework, which only runs on Windows.

**Differences:**

| Feature             | .NET Framework      | .NET Core                                   |
| ------------------- | ------------------- | ------------------------------------------- |
| Platform            | Windows only        | Cross-platform (Windows, Linux, macOS)      |
| Open Source         | No                  | Yes                                         |
| Performance         | Slower for web apps | High-performance, optimized for modern apps |
| Deployment          | Installed globally  | Can be deployed with app (self-contained)   |
| App Types Supported | Desktop, Web        | Web, Cloud, Console, Microservices          |

---

## **2. What is ASP.NET Core?**

**Answer:**
ASP.NET Core is a **cross-platform, high-performance framework** for building web apps, APIs, and microservices. It’s built on .NET Core and allows developers to create scalable applications using **MVC, Razor Pages, and Web APIs**.

**Key Features:**

* Cross-platform support
* Built-in Dependency Injection (DI)
* Middleware pipeline for request/response handling
* High performance and lightweight

---

## **3. Explain Middleware in ASP.NET Core.**

**Answer:**
Middleware is software that **handles HTTP requests and responses** in a pipeline. Each middleware can:

* Process requests before passing to the next middleware
* Handle the response on the way back

**Example:**

```csharp
public void Configure(IApplicationBuilder app)
{
    app.UseRouting();
    app.UseAuthentication();
    app.UseAuthorization();
    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllers();
    });
}
```

Here, `UseRouting`, `UseAuthentication`, and `UseAuthorization` are middleware components.

---

## **4. What is Dependency Injection (DI) in .NET Core?**

**Answer:**
Dependency Injection is a design pattern where **dependencies are provided rather than created inside a class**. It promotes **loose coupling** and easier testing.

**Example:**

```csharp
public interface IMessageService
{
    void SendMessage(string message);
}

public class EmailService : IMessageService
{
    public void SendMessage(string message) => Console.WriteLine($"Email sent: {message}");
}

public class Notification
{
    private readonly IMessageService _messageService;

    public Notification(IMessageService messageService)
    {
        _messageService = messageService;
    }

    public void Notify(string message) => _messageService.SendMessage(message);
}

// In Startup.cs
services.AddScoped<IMessageService, EmailService>();
```

Here, `Notification` depends on `IMessageService`, and DI provides the actual implementation `EmailService`.

---

## **5. Difference between `IEnumerable` and `IQueryable`**

| Feature            | IEnumerable                       | IQueryable                     |
| ------------------ | --------------------------------- | ------------------------------ |
| Namespace          | System.Collections                | System.Linq                    |
| Execution          | In-memory (LINQ to Objects)       | Query executed on database     |
| Performance        | Slower for large datasets         | Optimized via SQL translation  |
| Deferred Execution | Yes, but only in-memory           | Yes, supports database queries |
| Usage              | Use when working with collections | Use for querying databases     |

---

## **6. How does Routing work in ASP.NET Core?**

**Answer:**
Routing maps **incoming HTTP requests to the appropriate controller/action** or Razor Page.

**Example (Attribute Routing):**

```csharp
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    [HttpGet("{id}")]
    public IActionResult GetProduct(int id)
    {
        return Ok($"Product {id}");
    }
}
```

* URL `/api/products/5` → `GetProduct` action executes.

---

## **7. What is a ViewModel and why is it used?**

**Answer:**
A ViewModel is a **custom object** used to pass data from a controller to a view.
It helps:

* Combine multiple models
* Limit data exposure
* Keep the View simple

**Example:**

```csharp
public class ProductViewModel
{
    public string Name { get; set; }
    public string Category { get; set; }
    public decimal Price { get; set; }
}
```

---

## **8. What is Entity Framework Core?**

**Answer:**
EF Core is an **Object-Relational Mapper (ORM)** that allows developers to interact with databases using **C# objects** instead of SQL queries.

**Example (Code-first approach):**

```csharp
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
}

public class AppDbContext : DbContext
{
    public DbSet<Product> Products { get; set; }
}
```

* `DbSet<Product>` represents the `Products` table.
* Migrations handle database schema changes.

---

## **9. How do you secure an ASP.NET Core API?**

**Answer:**
Common methods:

* **JWT Authentication** (JSON Web Token)
* **ASP.NET Core Identity** for user accounts
* **Role-based Authorization**
* **Policy-based Authorization**

**Example JWT Setup in `Startup.cs`:**

```csharp
services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidIssuer = "YourApp",
        ValidAudience = "YourAppUsers",
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("SecretKey123"))
    };
});
```

---

## **10. Explain `AddSingleton`, `AddScoped`, `AddTransient` in DI.**

| Lifetime  | Description                                    | Example Use Case             |
| --------- | ---------------------------------------------- | ---------------------------- |
| Singleton | Single instance for the **entire application** | Logging, Configuration       |
| Scoped    | One instance per **HTTP request**              | Database context (DbContext) |
| Transient | New instance **every time requested**          | Lightweight services         |

---

## **11. Difference between `Task` and `async/await`**

* `Task` represents **an asynchronous operation** that may return a result in the future.
* `async/await` are **keywords to simplify async programming**:

  * `async` marks a method as asynchronous.
  * `await` waits for the Task to complete without blocking the thread.

**Example:**

```csharp
public async Task<string> GetDataAsync()
{
    var data = await HttpClient.GetStringAsync("https://example.com");
    return data;
}
```

---

## **12. How do you implement pagination in an API?**

**Answer:**
Pagination is used to **limit the number of results** returned by an API.

**Example:**

```csharp
[HttpGet]
public IActionResult GetProducts(int page = 1, int pageSize = 10)
{
    var products = _context.Products
        .Skip((page - 1) * pageSize)
        .Take(pageSize)
        .ToList();
    return Ok(products);
}
```

* `Skip` skips previous pages
* `Take` returns the current page size
