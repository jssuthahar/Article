
# 🔹 .NET Core Use-Case Based Interview Questions & Answers

---

## **1. Use Case: Implementing Pagination in a Product API**

**Question:**
You have a `Products` table with thousands of rows. How would you implement **pagination** in your API to avoid fetching all records at once?

**Answer:**

* Use **Skip() and Take()** in EF Core.
* Return only the required page and page size.

**Example:**

```csharp
[HttpGet]
public async Task<IActionResult> GetProducts(int page = 1, int pageSize = 10)
{
    var products = await _context.Products
        .OrderBy(p => p.Id)
        .Skip((page - 1) * pageSize)
        .Take(pageSize)
        .ToListAsync();

    return Ok(products);
}
```

**Tip:** Always include `OrderBy` before `Skip()` for **consistent paging**.

---

## **2. Use Case: Logging All Incoming Requests**

**Question:**
Your manager wants to log **all incoming requests and responses** for debugging. How would you implement this?

**Answer:**

* Create a **custom middleware** to intercept requests and responses.

**Example:**

```csharp
public class LoggingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<LoggingMiddleware> _logger;

    public LoggingMiddleware(RequestDelegate next, ILogger<LoggingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        _logger.LogInformation($"Request: {context.Request.Method} {context.Request.Path}");
        await _next(context);
        _logger.LogInformation($"Response: {context.Response.StatusCode}");
    }
}

// Startup.cs
app.UseMiddleware<LoggingMiddleware>();
```

---

## **3. Use Case: Preventing Circular References in JSON Responses**

**Question:**
You have `Order` and `OrderItems` entities referencing each other. API returns an error due to **circular reference**. How do you fix it?

**Answer:**

* Use `[JsonIgnore]` attribute on one side
* Or configure JSON serializer:

```csharp
builder.Services.AddControllers()
    .AddJsonOptions(options =>
        options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
```

---

## **4. Use Case: Caching Frequently Accessed Data**

**Question:**
Your API fetches a list of countries frequently. How would you **reduce database load**?

**Answer:**

* Use **in-memory cache** for simple scenarios
* Use **distributed cache (Redis)** for multi-server deployment

**Example:**

```csharp
var countries = await _cache.GetStringAsync("countries");
if (countries == null)
{
    countries = JsonSerializer.Serialize(await _context.Countries.ToListAsync());
    await _cache.SetStringAsync("countries", countries, new DistributedCacheEntryOptions
    {
        AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(30)
    });
}
```

---

## **5. Use Case: Secure an API Endpoint**

**Question:**
You need to **secure an endpoint** so only Admin users can access it. How do you implement this?

**Answer:**

* Use **JWT authentication** + role-based authorization

**Example:**

```csharp
[Authorize(Roles = "Admin")]
[HttpGet("admin-data")]
public IActionResult GetAdminData()
{
    return Ok("Secret Admin Data");
}
```

---

## **6. Use Case: Handling Exceptions Globally**

**Question:**
Instead of writing try/catch in every controller, how do you **handle exceptions globally**?

**Answer:**

* Use **exception handling middleware**

**Example:**

```csharp
app.UseExceptionHandler(appError =>
{
    appError.Run(async context =>
    {
        context.Response.StatusCode = 500;
        await context.Response.WriteAsync("Internal Server Error");
    });
});
```

---

## **7. Use Case: Background Email Processing**

**Question:**
You want to **send emails in the background** without blocking the main request. How would you do it?

**Answer:**

* Implement **IHostedService / BackgroundService**

```csharp
public class EmailWorker : BackgroundService
{
    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while(!stoppingToken.IsCancellationRequested)
        {
            // Send emails logic
            await Task.Delay(60000, stoppingToken); // run every 1 min
        }
    }
}
```

---

## **8. Use Case: API Versioning**

**Question:**
You need to **support multiple API versions** for the same endpoint. How?

**Answer:**

* Use **API Versioning package**

**Example:**

```csharp
services.AddApiVersioning(options =>
{
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.DefaultApiVersion = new ApiVersion(1, 0);
    options.ReportApiVersions = true;
});
```

* Controllers:

```csharp
[ApiVersion("1.0")]
[Route("api/v{version:apiVersion}/products")]
public class ProductsV1Controller : ControllerBase {}
```

---

## **9. Use Case: Optimize Database Query Performance**

**Question:**
Your API is slow because `Products` table has 1M rows. How do you **improve EF Core query performance**?

**Answer:**

* Use **AsNoTracking** for read-only queries
* Use **projection** instead of full entity
* Use **pagination**
* Example:

```csharp
var products = await _context.Products
    .AsNoTracking()
    .Select(p => new { p.Id, p.Name, p.Price })
    .Take(100)
    .ToListAsync();
```

---

## **10. Use Case: Multi-tenancy Support**

**Question:**
You need to build an app where **each customer has separate data**. How would you implement multi-tenancy?

**Answer:**

* **Database per tenant** or **shared database with tenantId column**
* Add **tenant middleware** to set current tenant

```csharp
public class TenantMiddleware
{
    public async Task InvokeAsync(HttpContext context, ITenantService tenantService)
    {
        var tenantId = context.Request.Headers["X-Tenant-ID"].ToString();
        tenantService.SetTenant(tenantId);
        await _next(context);
    }
}
```
