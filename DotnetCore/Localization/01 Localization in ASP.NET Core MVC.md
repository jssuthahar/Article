# Localization in ASP.NET Core MVC

This project demonstrates how to implement **Globalization and Localization** in an **ASP.NET Core MVC** application using **.NET 6/7/8**.

## Features
- Supports multiple languages: **English (en-US), French (fr-FR), and Spanish (es-ES)**.
- Uses **Resource (.resx) files** for localization.
- Implements **language switching** using cookies.
- Formats **dates, numbers, and currencies** based on the selected culture.
- Localizes **model properties and validation messages**.

# Localization in ASP.NET Core MVC

This document provides a guide to implementing localization in an ASP.NET Core MVC project. It covers configuring localization services, adding resource files, and using them in views, controllers, and models.

## Folder Structure
```
YourProject/
|-- Controllers/
|   |-- HomeController.cs
|   |-- CartController.cs
|   |-- ProductController.cs
|
|-- Views/
|   |-- Shared/
|   |   |-- _Layout.cshtml
|   |-- Cart/
|   |   |-- Index.cshtml
|   |   |-- OrderSuccess.cshtml
|   |-- Product/
|   |   |-- Index.cshtml
|
|-- Models/
|   |-- Product.cs
|   |-- CartItem.cs
|   |-- Order.cs
|
|-- Resources/
|   |-- Controllers/
|   |   |-- CartController.en-US.resx
|   |   |-- CartController.tn-IN.resx
|   |-- Views/
|   |   |-- Shared/_Layout.en-US.resx
|   |   |-- Shared/_Layout.tn-IN.resx
|
|-- Services/
|   |-- EmailService.cs
|
|-- wwwroot/
|   |-- images/
|
|-- Startup.cs
|-- Program.cs
|-- appsettings.json
```

## Setup Instructions

### 1️⃣ Install Required Packages
```sh
dotnet add package Microsoft.Extensions.Localization
```

### 2️⃣ Configure Localization in `Program.cs`
Modify `Program.cs` to **enable localization services**.

```csharp
using Microsoft.AspNetCore.Localization;
using System.Globalization;

var builder = WebApplication.CreateBuilder(args);

// Add Localization Services
builder.Services.AddLocalization(options => options.ResourcesPath = "Resources");

builder.Services.AddControllersWithViews()
    .AddViewLocalization()
    .AddDataAnnotationsLocalization(options =>
    {
        options.DataAnnotationLocalizerProvider = (type, factory) =>
            factory.Create(typeof(Resources.Models.User));
    });

var app = builder.Build();

// Define Supported Cultures
var supportedCultures = new[]
{
    new CultureInfo("en-US"),
    new CultureInfo("fr-FR"),
    new CultureInfo("es-ES")
};

// Apply Localization Middleware
var localizationOptions = new RequestLocalizationOptions
{
    DefaultRequestCulture = new RequestCulture("en-US"),
    SupportedCultures = supportedCultures,
    SupportedUICultures = supportedCultures
};

app.UseRequestLocalization(localizationOptions);

app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();
app.MapControllerRoute(name: "default", pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
```

### 3️⃣ Create Resource Files
1. Create a `Resources` folder in the project root.
2. Inside `Resources`, create a **Controllers** folder.
3. Inside `Resources/Controllers`, add the following `.resx` files:
   - `HomeController.en-US.resx`
   - `HomeController.fr-FR.resx`
   - `HomeController.es-ES.resx`
4. Add translations inside each file:
   
   **HomeController.en-US.resx**
   ```
   Name      | Value
   ---------|--------------------------
   Welcome  | Welcome to our website!
   ```
   **HomeController.fr-FR.resx**
   ```
   Name      | Value
   ---------|--------------------------
   Welcome  | Bienvenue sur notre site !
   ```
   **HomeController.es-ES.resx**
   ```
   Name      | Value
   ---------|--------------------------
   Welcome  | ¡Bienvenido a nuestro sitio web!
   ```

### 4️⃣ Modify `HomeController.cs`
```csharp
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Localization;

namespace LocalizationDemo.Controllers
{
    public class HomeController : Controller
    {
        private readonly IStringLocalizer<HomeController> _localizer;

        public HomeController(IStringLocalizer<HomeController> localizer)
        {
            _localizer = localizer;
        }

        public IActionResult Index()
        {
            ViewData["WelcomeMessage"] = _localizer["Welcome"];
            return View();
        }
    }
}
```

### 5️⃣ Update `Index.cshtml`
```razor
@{
    ViewData["Title"] = "Home Page";
}

<h1>@ViewData["WelcomeMessage"]</h1>

<form method="post" asp-controller="Home" asp-action="ChangeLanguage">
    <label>Select Language:</label>
    <select name="culture">
        <option value="en-US">English</option>
        <option value="fr-FR">Français</option>
        <option value="es-ES">Español</option>
    </select>
    <button type="submit">Change</button>
</form>
```

### 6️⃣ Implement Language Switching
Modify `HomeController.cs` to handle language changes.

```csharp
[HttpPost]
public IActionResult ChangeLanguage(string culture)
{
    Response.Cookies.Append(
        CookieRequestCultureProvider.DefaultCookieName,
        CookieRequestCultureProvider.MakeCookieValue(new RequestCulture(culture)),
        new CookieOptions { Expires = DateTimeOffset.UtcNow.AddYears(1) }
    );
    return RedirectToAction("Index");
}
```

### 7️⃣ Localize Model Properties and Validation Messages
#### **Modify Your Model (`User.cs`)**
```csharp
using System.ComponentModel.DataAnnotations;

public class User
{
    [Display(Name = "UserName", ResourceType = typeof(Resources.Models.User))]
    [Required(ErrorMessageResourceName = "UserNameRequired", ErrorMessageResourceType = typeof(Resources.Models.User))]
    public string Name { get; set; }

    [Display(Name = "Email", ResourceType = typeof(Resources.Models.User))]
    [Required(ErrorMessageResourceName = "EmailRequired", ErrorMessageResourceType = typeof(Resources.Models.User))]
    public string Email { get; set; }
}
```
#### **Create Resource Files (`.resx`) for Model Properties**
Inside `Resources/Models`, create:
- `User.en-US.resx`
- `User.fr-FR.resx`
- `User.es-ES.resx`

Each file contains translations for `UserName` and validation messages.

### 8️⃣ Run the Application
```sh
dotnet run
```
1. Open `http://localhost:5000`
2. Change the language using the dropdown.
3. The **form labels & validation messages** will be localized automatically.

Testing Localization

Set the culture in the browser or add a query parameter:

https://localhost:5001?culture=tn-IN

This will load the tn-IN resource files.
---

## Summary
✅ Configured **Localization Services** in `Program.cs`
✅ Created **Resource Files** for different languages
✅ Used **IStringLocalizer** in Controllers
✅ Implemented **Language Switching** using cookies
✅ Formatted **dates and currencies** dynamically
✅ Localized **Model Properties & Validation Messages**

🚀 Your ASP.NET Core app now fully supports **Globalization and Localization**! 🚀

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

