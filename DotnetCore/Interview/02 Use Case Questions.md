
## **1. Explain the difference between `IEnumerable` and `IQueryable` in terms of execution**

**Answer:**

* `IEnumerable` – executes **in memory**, after fetching all data from DB. Good for **small datasets**.
* `IQueryable` – builds a **SQL query** and executes it on DB. Optimized for **large datasets**.
* **Tricky point:** Using `.ToList()` too early converts IQueryable → IEnumerable, defeating lazy loading.

---

## **2. What are Tag Helpers, and how do they differ from HTML Helpers?**

**Answer:**

* **HTML Helpers**: Methods that generate HTML inside Razor views (e.g., `Html.TextBoxFor`)
* **Tag Helpers**: More **HTML-like syntax**, cleaner and easier to maintain.
* Example:

```html
<input asp-for="Name" class="form-control" />
```

* Tag Helpers support **attributes, validation, and intellisense**, unlike HTML Helpers.

---

## **3. Difference between `app.Use()` and `app.Run()` in middleware**

**Answer:**

* `app.Use()` – can **pass request to next middleware** using `next()`.
* `app.Run()` – **terminates the pipeline**; does not call next middleware.
* **Trick question:** Placing `app.Run()` too early can break auth, routing, etc.

---

## **4. How do you implement caching in ASP.NET Core, and when to use distributed cache?**

**Answer:**

* **In-Memory Cache:** Single server, simple scenarios.
* **Distributed Cache (Redis / SQL Server):** Multi-server or cloud scenarios.
* **Example:**

```csharp
// In Startup.cs
services.AddStackExchangeRedisCache(options => {
    options.Configuration = "localhost:6379";
});

// In Controller
var cached = await _cache.GetStringAsync("products");
if (cached == null) { /* fetch and set cache */ }
```

* **Tip:** Always consider **cache expiration and invalidation**.

---

## **5. How do you handle circular references in JSON serialization?**

**Answer:**

* Problem occurs when **entities reference each other**, causing JSON infinite loop.
* Solutions:

  1. Use `[JsonIgnore]` attribute
  2. Configure JSON options:

```csharp
builder.Services.AddControllers()
    .AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
```

---

## **6. Explain Health Checks in ASP.NET Core**

**Answer:**

* Health checks monitor **app and external dependencies** (DB, APIs)
* Example:

```csharp
services.AddHealthChecks()
    .AddSqlServer(Configuration.GetConnectionString("DefaultConnection"));
```

* Access via `/health` endpoint; often used in **Kubernetes / Docker deployments**.

---

## **7. Difference between `FromBody`, `FromQuery`, and `FromRoute` in Web API**

| Attribute     | Source of Data          |
| ------------- | ----------------------- |
| `[FromBody]`  | Request body (JSON/XML) |
| `[FromQuery]` | Query string parameters |
| `[FromRoute]` | URL path parameters     |

* **Trick:** `[FromBody]` can be used only **once per action method**.

---

## **8. How does logging work in ASP.NET Core?**

**Answer:**

* Built-in **ILogger<T>** interface
* Supports multiple providers: Console, Debug, EventLog, ApplicationInsights
* Example:

```csharp
public class ProductsController : ControllerBase
{
    private readonly ILogger<ProductsController> _logger;
    public ProductsController(ILogger<ProductsController> logger) => _logger = logger;

    public IActionResult Get() 
    {
        _logger.LogInformation("Fetching all products");
        return Ok();
    }
}
```

* **Trick question:** Ask about **scoped vs singleton logger** – ILogger is thread-safe.

---

## **9. Explain `IHostedService` and background tasks in ASP.NET Core**

**Answer:**

* `IHostedService` runs **background tasks** in a web app.
* Example: Sending emails, cleaning temp files, scheduled jobs.

```csharp
public class EmailWorker : BackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while(!stoppingToken.IsCancellationRequested)
        {
            Console.WriteLine("Sending emails...");
            await Task.Delay(60000, stoppingToken);
        }
    }
}
```

---

## **10. How do you handle API versioning in ASP.NET Core?**

**Answer:**

* Using **Microsoft.AspNetCore.Mvc.Versioning** package

```csharp
services.AddApiVersioning(options => {
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.DefaultApiVersion = new ApiVersion(1,0);
    options.ReportApiVersions = true;
});
```

* Allows supporting `/api/v1/products` and `/api/v2/products` simultaneously.

---

## **11. How do you handle exception globally?**

**Answer:**

* Use **Exception Handling Middleware** instead of try/catch in controllers

```csharp
app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        context.Response.StatusCode = 500;
        await context.Response.WriteAsync("Something went wrong!");
    });
});
```

* Ensures **consistent error response** for APIs.

---

## **12. Microservices-related questions (if applicable)**

* How to **call one service from another**? (Use HTTPClientFactory)
* How to handle **distributed transactions**? (Event-driven, eventual consistency)
* How to implement **retry policies**? (Polly library)
* Containerization: Docker + Kubernetes deployment basics

