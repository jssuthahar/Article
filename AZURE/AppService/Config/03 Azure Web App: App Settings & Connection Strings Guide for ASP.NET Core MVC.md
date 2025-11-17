# Azure Web App: App Settings & Connection Strings Guide for ASP.NET Core MVC

This guide explains how to configure **App Settings** and **Connection Strings** in Azure Web Apps and use them in an **ASP.NET Core MVC application**. It also clarifies that no Azure login is required for reading these settings in your app.

---

## 1. Overview

* **App Settings**: Key-value pairs used as environment variables for configuration values (feature flags, API URLs, etc.).
* **Connection Strings**: Securely connect to databases or external services.
* **Azure login** is **not required** for the app to read these values at runtime; Azure automatically injects them into your app’s environment.

---

## 2. Adding App Settings in Azure Portal

1. Open **Azure Portal → Your Web App → Configuration → Application Settings**.
2. Click **+ New application setting**.
3. Enter:

   * **Name** (e.g., `ApiBaseUrl`)
   * **Value** (e.g., `https://api.example.com`)
4. Click **OK** → Then **Save**.
5. The app will **restart automatically** to apply new settings.

**Example App Settings:**

| Key               | Value                      |
| ----------------- | -------------------------- |
| `AppMode`         | `Production`               |
| `FeatureXEnabled` | `true`                     |
| `ApiBaseUrl`      | `https://api.example.com/` |

---

## 3. Adding Connection Strings in Azure Portal

1. Navigate to **Web App → Configuration → Connection Strings → + New connection string**.
2. Enter:

   * **Name**: `DefaultConnection`
   * **Value**: `Server=tcp:mydb.database.windows.net;Database=MyApp;User ID=admin;Password=******;Encrypt=True;`
   * **Type**: SQLAzure (or MySQL/PostgreSQL)
3. Click **OK → Save**.
4. The app will **restart automatically**.

---

## 4. Accessing App Settings in ASP.NET Core MVC

```csharp
// In HomeController.cs
using Microsoft.Extensions.Configuration;

public class HomeController : Controller
{
    private readonly IConfiguration _configuration;

    public HomeController(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public IActionResult Index()
    {
        string apiBaseUrl = _configuration["ApiBaseUrl"];
        ViewBag.ApiBaseUrl = apiBaseUrl;
        return View();
    }
}
```

---

## 5. Accessing Connection Strings in ASP.NET Core MVC

```csharp
// Access connection string in code
string connString = _configuration.GetConnectionString("DefaultConnection");
```

> Azure automatically injects connection strings as environment variables. No Azure login is required.

---

## 6. Recommended Practices

1. Never hardcode credentials or configuration values.
2. Use different **App Settings** and **Connection Strings** for Dev, QA, and Prod.
3. Consider **Azure Key Vault** for highly sensitive secrets.
4. Restarting the app automatically applies new settings in Azure.
5. Always use **IConfiguration** or environment variables to read values in code.

---

## 7. Summary

* **App Settings** and **Connection Strings** make your app **secure, configurable, and portable**.
* Azure Web App automatically injects these values; **no login or authentication with Azure** is required to access them at runtime.
* Use these values in **ASP.NET Core MVC** with `IConfiguration` or `Environment.GetEnvironmentVariable`.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
