
# 🔐 ASP.NET Core 8.0 Azure AD B2C Login & Logout Integration

This guide walks you through integrating **Azure AD B2C authentication** in an **ASP.NET Core 8.0 MVC** app, including login, logout, and a protected **Dashboard** page.

---

## ✅ Prerequisites

- .NET SDK 8.0+
- Azure AD B2C tenant with:
  - Sign-up/sign-in policy
  - App registration (ID token enabled)
  - Redirect URI: `https://localhost:5001/signin-oidc`
- Visual Studio 2022+ or VS Code

---

## 📁 Project Setup

### 1. Create a new project

```bash
dotnet new mvc -n B2CAuthDemo
cd B2CAuthDemo
````

### 2. Add NuGet packages

```bash
dotnet add package Microsoft.Identity.Web
dotnet add package Microsoft.Identity.Web.UI
```

---

## ⚙️ Configure `appsettings.json`

Add your Azure B2C settings:

```json
"AzureAdB2C": {
  "Instance": "https://<your-tenant>.b2clogin.com",
  "ClientId": "<your-client-id>",
  "Domain": "<your-tenant>.onmicrosoft.com",
  "SignUpSignInPolicyId": "B2C_1_signupsignin",
  "ResetPasswordPolicyId": "B2C_1_passwordreset",
  "EditProfilePolicyId": "B2C_1_edit",
  "CallbackPath": "/signin-oidc"
}
```

---

## 🧩 Update `Program.cs`

```csharp
using Microsoft.Identity.Web;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.Identity.Web.UI;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddAuthentication(OpenIdConnectDefaults.AuthenticationScheme)
    .AddMicrosoftIdentityWebApp(builder.Configuration.GetSection("AzureAdB2C"))
    .EnableTokenAcquisitionToCallDownstreamApi()
    .AddInMemoryTokenCaches();

builder.Services.AddControllersWithViews()
    .AddMicrosoftIdentityUI();

builder.Services.AddRazorPages();
builder.Services.AddAuthorization();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapRazorPages();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
```

---

## 👤 Account Controller for Login/Logout

Create `Controllers/AccountController.cs`:

```csharp
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Mvc;

public class AccountController : Controller
{
    public IActionResult SignIn(string returnUrl = "/")
    {
        return Challenge(new AuthenticationProperties { RedirectUri = returnUrl },
            OpenIdConnectDefaults.AuthenticationScheme);
    }

    [HttpPost]
    public IActionResult SignOut()
    {
        return SignOut(new AuthenticationProperties { RedirectUri = "/" },
            OpenIdConnectDefaults.AuthenticationScheme,
            CookieAuthenticationDefaults.AuthenticationScheme);
    }
}
```

---

## 🔐 Secure Page: Dashboard

### Create `Controllers/DashboardController.cs`

```csharp
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace B2CAuthDemo.Controllers
{
    [Authorize] // Requires login
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
```

### Create `Views/Dashboard/Index.cshtml`

```razor
@{
    ViewData["Title"] = "Dashboard";
}

<h2>Dashboard</h2>

<p>Welcome, @User.Identity?.Name!</p>
<p>This page is protected by Azure AD B2C authentication.</p>
```

---

## 🖼️ Add Login/Logout UI

### In `Views/Shared/_Layout.cshtml`

* Add to navigation:

```razor
<li class="nav-item">
    <a class="nav-link" asp-controller="Dashboard" asp-action="Index">Dashboard</a>
</li>
<partial name="_LoginPartial" />
```

### Create `Views/Shared/_LoginPartial.cshtml`

```razor
@if (User.Identity?.IsAuthenticated == true)
{
    <form asp-controller="Account" asp-action="SignOut" method="post">
        <span>Hello, @User.Identity.Name</span>
        <button type="submit" class="btn btn-link">Logout</button>
    </form>
}
else
{
    <a asp-controller="Account" asp-action="SignIn" class="btn btn-link">Login</a>
}
```

---

## 🧪 Run the Application

```bash
dotnet run
```

Visit: `https://localhost:5001`

* Click **Login**
* Authenticate via Azure AD B2C
* Visit **Dashboard**
* Click **Logout** to sign out

---

## 📌 Notes

* Secure secrets using environment variables or Secret Manager.
* Use HTTPS for redirect URIs in production.
* Azure app must have `ID tokens` enabled.

---

## 📚 References

* [Azure AD B2C Documentation](https://learn.microsoft.com/en-us/azure/active-directory-b2c/)
* [Microsoft.Identity.Web Docs](https://github.com/AzureAD/microsoft-identity-web)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
