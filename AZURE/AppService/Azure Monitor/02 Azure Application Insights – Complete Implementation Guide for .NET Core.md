# 📘 Azure Application Insights – Complete Implementation Guide for .NET Core

Azure **Application Insights (App Insights)** is an Application Performance Monitoring (APM) service that helps you monitor live applications. It provides **telemetry**, **performance metrics**, **logs**, **distributed tracing**, **request tracking**, **dependency tracking**, and more.

This guide walks you through how to:

* ✔️ Create Application Insights in Azure
* ✔️ Add AI SDK to .NET Core
* ✔️ Configure instrumentation key / connection string
* ✔️ Track requests, dependencies, exceptions
* ✔️ Write custom traces and events
* ✔️ View logs using KQL
* ✔️ Best practices & diagrams

---

# 📌 **1. What is Application Insights?**

Azure Application Insights is part of Azure Monitor that collects:

* **Requests**
* **Dependencies (SQL, API Calls, HTTP, Storage)**
* **Exceptions**
* **Custom Events & Metrics**
* **Availability Tests**
* **Performance Counters**
* **Live Metrics Stream**

It works for:
ASP.NET Core, Java, Node, Python, Container Apps, Azure Functions etc.

---

# 📐 **2. Architecture Diagram (Simple)**

```
 ┌───────────────────────────┐
 │  .NET Core Web API / MVC  │
 └──────────────┬────────────┘
                │ Telemetry (Requests, Logs, Exceptions)
                ▼
    ┌─────────────────────────────────┐
    │ Azure Application Insights      │
    └──────────────┬──────────────────┘
                   ▼
       ┌───────────────────────────┐
       │ Azure Monitor (Logs/KQL)  │
       └───────────────────────────┘
```

---

# 📘 **3. Step 1 — Create Application Insights in Azure**

1. Go to **Azure Portal**
2. Click **Create Resource**
3. Search **Application Insights**
4. Select **Resource Group**
5. Choose:

   * Application Type: **ASP.NET / .NET Core**
6. Click **Create**
7. Open the resource → Copy **Instrumentation Key** or **Connection String**

---

# 📦 **4. Step 2 — Install Application Insights NuGet Package**

In your .NET Core project:

### **Using Package Manager**

```
Install-Package Microsoft.ApplicationInsights.AspNetCore
```

### **Using .NET CLI**

```
dotnet add package Microsoft.ApplicationInsights.AspNetCore
```

---

# ⚙️ **5. Step 3 — Configure in appsettings.json**

### appsettings.json

```json
{
  "ApplicationInsights": {
    "ConnectionString": "InstrumentationKey=YOUR-KEY;IngestionEndpoint=https://region.applicationinsights.azure.com/"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information"
    }
  }
}
```

---

# 🧩 **6. Step 4 — Add App Insights in Program.cs (.NET 6/7/8)**

```csharp
var builder = WebApplication.CreateBuilder(args);

// Add Application Insights
builder.Services.AddApplicationInsightsTelemetry();

var app = builder.Build();

app.MapControllers();

app.Run();
```

---

# 🧪 **7. Step 5 — Test Application Insights**

Run your application → Make some API calls.

Go to Azure Portal → Application Insights → Observe:

* Requests
* Failures
* Performance
* Dependencies
* Live Metrics

---

# 📊 **8. Tracking Custom Events & Metrics**

Inject **TelemetryClient** into controller:

```csharp
using Microsoft.ApplicationInsights;

public class TestController : ControllerBase
{
    private readonly TelemetryClient _telemetry;

    public TestController(TelemetryClient telemetry)
    {
        _telemetry = telemetry;
    }

    [HttpGet("track")]
    public IActionResult TrackEvent()
    {
        _telemetry.TrackEvent("UserClickedButton", new Dictionary<string, string>
        {
            {"UserId", "123"},
            {"Action", "ButtonClick"}
        });

        return Ok("Event tracked!");
    }
}
```

---

# 🚨 **9. Tracking Custom Exceptions**

```csharp
try
{
    throw new Exception("Sample custom exception!");
}
catch (Exception ex)
{
    _telemetry.TrackException(ex);
}
```

---

# 🔗 **10. Track Dependencies Manually**

Useful for external services:

```csharp
var dependency = new DependencyTelemetry
{
    Name = "External API Call",
    Type = "HTTP",
    Target = "myapi.com",
    Data = "https://myapi.com/data"
};

var watch = Stopwatch.StartNew();

try
{
    // Call external service
    watch.Stop();
    dependency.Duration = watch.Elapsed;
    dependency.Success = true;
}
catch
{
    watch.Stop();
    dependency.Success = false;
}
finally
{
    _telemetry.TrackDependency(dependency);
}
```

---

# 📚 **11. Enable Logging Integration (Serilog + AI)**

Install Serilog AI package:

```
dotnet add package Serilog.Sinks.ApplicationInsights
```

---

# 🔍 **12. Query Logs Using Kusto (KQL)**

### View all requests

```
requests
| order by timestamp desc
```

### Exceptions

```
exceptions
| where severityLevel > 2
```

### Custom events

```
customEvents
| where name == "UserClickedButton"
```

---

# 👍 **13. Best Practices**

* ✔️ Use **Connection String**, not old Instrumentation Key
* ✔️ Enable **Sampling** to reduce cost
* ✔️ Track important business events
* ✔️ Add AI alerts (Error rate > 5%)
* ✔️ Use **Distributed Tracing** with Azure Functions / APIs
* ✔️ Enable **Live Metrics Stream** during production testing

---

# 📦 **14. Optional: Enable Application Insights Profiler**

Useful for performance bottlenecks.

Azure Portal → Application Insights → **Profiler** → Turn ON.

---

# 🎯 **15. Complete Minimal Example**

### Program.cs

```csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddApplicationInsightsTelemetry();
builder.Services.AddControllers();

var app = builder.Build();

app.MapGet("/", () => "Hello with App Insights!");

app.Run();
```

---

### 🔔 Stay Updated with My Latest Projects

If you enjoy:
- 🧠 AI agents and automation
- 🛠️ Practical tools and utilities
- 📘 Developer tutorials and guides
- 🚀 End-to-end project templates

👉 Then **[Follow me on GitHub](https://github.com/jssuthahar)** to get notified about new repos, ideas, and updates!

[![Follow Me](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)

## ⭐ Start & Follow Me
If you find this repository useful, don't forget to **Star** ⭐ the repo and **Follow** me for more updates!

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shield
