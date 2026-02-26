

# 🔹 Advanced Use-Case Based .NET Core Questions & Answers

---

## **11. Use Case: Handling Concurrent Updates (Optimistic Concurrency)**

**Question:**
Two users try to update the same record at the same time. How do you **prevent overwriting changes** in EF Core?

**Answer:**

* Use **Concurrency Tokens** (`[Timestamp]` or `RowVersion`) in the entity.
* EF Core throws `DbUpdateConcurrencyException` if a conflict occurs.

**Example:**

```csharp id="c1og1j"
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    [Timestamp]
    public byte[] RowVersion { get; set; }
}

// In service
try
{
    _context.Update(product);
    await _context.SaveChangesAsync();
}
catch(DbUpdateConcurrencyException)
{
    // Handle conflict: notify user or merge changes
}
```

---

## **12. Use Case: Implement Soft Delete**

**Question:**
Instead of permanently deleting records, how can you **mark them as deleted** while keeping data?

**Answer:**

* Add `IsDeleted` property and filter queries

```csharp id="0xlhwh"
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    public bool IsDeleted { get; set; }
}

// In queries
var activeProducts = _context.Products.Where(p => !p.IsDeleted);
```

* **Optional:** Use **EF Core Global Query Filters**:

```csharp id="9w2vhy"
modelBuilder.Entity<Product>().HasQueryFilter(p => !p.IsDeleted);
```

---

## **13. Use Case: Rate Limiting an API**

**Question:**
You want to **limit API calls** to prevent abuse. How?

**Answer:**

* Use **ASP.NET Core Middleware** or **third-party libraries like AspNetCoreRateLimit**

```csharp id="3oj5qu"
services.AddInMemoryRateLimiting();
app.UseIpRateLimiting();
```

* Real-world scenario: Limit `/login` endpoint to 5 attempts per minute.

---

## **14. Use Case: Returning Partial Data (DTOs)**

**Question:**
You don’t want to expose full DB entities in API. How do you **return only required fields**?

**Answer:**

* Use **DTOs (Data Transfer Objects)**

```csharp id="3p7a9p"
public class ProductDto
{
    public string Name { get; set; }
    public decimal Price { get; set; }
}

var productsDto = _context.Products
    .Select(p => new ProductDto { Name = p.Name, Price = p.Price })
    .ToList();
```

---

## **15. Use Case: Scheduling Tasks (e.g., Cleanup Jobs)**

**Question:**
You want to **run a cleanup task every day at midnight** in your web app. How?

**Answer:**

* Use **IHostedService / BackgroundService** + Cron Scheduler (like **Hangfire**)

```csharp id="6k8qyh"
// Using BackgroundService
protected override async Task ExecuteAsync(CancellationToken stoppingToken)
{
    while(!stoppingToken.IsCancellationRequested)
    {
        if(DateTime.Now.Hour == 0)
        {
            // Perform cleanup
        }
        await Task.Delay(TimeSpan.FromMinutes(1), stoppingToken);
    }
}
```

* **Better approach:** Hangfire or Quartz.NET for precise scheduling.

---

## **16. Use Case: Handling Large File Uploads**

**Question:**
Users need to upload files of **100+ MB**. How do you handle it efficiently?

**Answer:**

* Configure **Kestrel / IIS request limits**
* Use **streaming** to avoid loading full file in memory

```csharp id="3hn8ka"
[HttpPost("upload")]
public async Task<IActionResult> Upload(IFormFile file)
{
    var path = Path.Combine("uploads", file.FileName);
    using(var stream = new FileStream(path, FileMode.Create))
    {
        await file.CopyToAsync(stream);
    }
    return Ok();
}
```

* Optional: Store directly in **cloud storage (Azure Blob, AWS S3)**.

---

## **17. Use Case: Implement Globalization & Localization**

**Question:**
Your app needs to **support multiple languages**. How?

**Answer:**

* Use **`IStringLocalizer`** and resource files

```csharp id="9xmv9j"
services.AddLocalization(options => options.ResourcesPath = "Resources");

[HttpGet]
public IActionResult Greet([FromServices] IStringLocalizer<HomeController> localizer)
{
    return Ok(localizer["Welcome"]);
}
```

* Create **.resx files** for different languages: `HomeController.fr.resx`, `HomeController.en.resx`.

---

## **18. Use Case: Rate Limiting Database Queries**

**Question:**
Your API returns **heavy join queries** causing performance issues. How do you optimize?

**Answer:**

* Use **projection** to return only necessary columns
* Use **AsNoTracking()** for read-only queries
* Use **caching** for frequently accessed data

```csharp id="9xmv3l"
var result = _context.Orders
    .AsNoTracking()
    .Where(o => o.UserId == userId)
    .Select(o => new { o.Id, o.Total })
    .ToList();
```

---

## **19. Use Case: Multi-Environment Configuration**

**Question:**
Your app runs in **Development, Staging, Production** with different DBs. How do you manage settings?

**Answer:**

* Use **appsettings.json** + `appsettings.{Environment}.json`

```json
// appsettings.Production.json
{
  "ConnectionStrings": { "Default": "Prod_DB_Connection_String" }
}
```

* In `Program.cs`:

```csharp id="6axrvi"
var builder = WebApplication.CreateBuilder(args);
builder.Configuration.AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", optional: true);
```

---

## **20. Use Case: Implementing Health Checks**

**Question:**
How do you **monitor app health** and DB connectivity?

**Answer:**

```csharp id="3fhc9l"
services.AddHealthChecks()
    .AddSqlServer(Configuration.GetConnectionString("DefaultConnection"))
    .AddCheck("self", () => HealthCheckResult.Healthy());

app.MapHealthChecks("/health");
```

* Use `/health` endpoint for **load balancers and monitoring tools**.

