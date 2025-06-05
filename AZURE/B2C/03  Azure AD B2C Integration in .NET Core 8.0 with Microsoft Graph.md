# ✅ Azure AD B2C Integration in .NET Core 8.0 with Microsoft Graph

This guide walks you through integrating Azure AD B2C authentication in a .NET Core 8.0 MVC app and creating users via Microsoft Graph.

---

## 📦 Prerequisites

* .NET 8.0 SDK
* Azure B2C tenant
* Azure App Registration (with client secret)
* API permissions: `User.ReadWrite.All`, `Directory.ReadWrite.All`
* Visual Studio / VS Code

---

## ⚙️ 1. App Registration in Azure B2C

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Azure AD B2C > App registrations > New registration**
3. Register your app with:

   * **Redirect URI**: `https://localhost:5001/signin-oidc`
4. Save:

   * **Application (client) ID**
   * **Directory (tenant) ID**
   * **Client secret** (from Certificates & secrets)

---

## 🛠️ 2. Configure `appsettings.json`

```json
"AzureAdB2C": {
  "Instance": "https://<your-tenant-name>.b2clogin.com",
  "Domain": "<your-tenant-name>.onmicrosoft.com",
  "ClientId": "<client-id>",
  "ClientSecret": "<client-secret>",
  "TenantId": "<tenant-id>",
  "CallbackPath": "/signin-oidc",
  "SignUpSignInPolicyId": "B2C_1_signupsignin"
},
"GraphSettings": {
  "ClientId": "<client-id>",
  "ClientSecret": "<client-secret>",
  "TenantId": "<tenant-id>"
}
```

---

## 📌 3. Program.cs

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

builder.Services.AddScoped<GraphUserService>();

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

## 👤 4. Create `GraphUserService.cs`

```csharp
using Microsoft.Graph;
using Microsoft.Graph.Models;
using Microsoft.Identity.Client;
using Microsoft.Kiota.Abstractions.Authentication;
using Microsoft.Kiota.Abstractions;
using System.Net.Http.Headers;

public class GraphUserService
{
    private readonly IConfiguration _config;

    public GraphUserService(IConfiguration config)
    {
        _config = config;
    }

    private async Task<GraphServiceClient> GetGraphClientAsync()
    {
        var tenantId = _config["GraphSettings:TenantId"];
        var clientId = _config["GraphSettings:ClientId"];
        var clientSecret = _config["GraphSettings:ClientSecret"];

        var confidentialClient = ConfidentialClientApplicationBuilder
            .Create(clientId)
            .WithClientSecret(clientSecret)
            .WithAuthority($"https://login.microsoftonline.com/{tenantId}")
            .Build();

        var scopes = new[] { "https://graph.microsoft.com/.default" };
        var authResult = await confidentialClient.AcquireTokenForClient(scopes).ExecuteAsync();

        var authProvider = new AccessTokenProvider(authResult.AccessToken);
        return new GraphServiceClient(authProvider);
    }

    public async Task<bool> CreateUserAsync(string email, string displayName, string password)
    {
        var client = await GetGraphClientAsync();

        var user = new User
        {
            AccountEnabled = true,
            DisplayName = displayName,
            MailNickname = email.Split('@')[0],
            UserPrincipalName = email,
            PasswordProfile = new PasswordProfile
            {
                Password = password,
                ForceChangePasswordNextSignIn = false
            }
        };

        try
        {
            await client.Users.PostAsync(user);
            return true;
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error creating user: " + ex.Message);
            return false;
        }
    }
}

public class AccessTokenProvider : IAuthenticationProvider
{
    private readonly string _accessToken;

    public AccessTokenProvider(string accessToken)
    {
        _accessToken = accessToken;
    }

    public Task AuthenticateRequestAsync(RequestInformation request, Dictionary<string, object>? additionalAuthenticationContext = null, CancellationToken cancellationToken = default)
    {
        request.Headers["Authorization"] = new[] { $"Bearer {_accessToken}" };
        return Task.CompletedTask;
    }
}
```

---

## 📂 5. DashboardController.cs (Optional Example)

```csharp
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[Authorize]
public class DashboardController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
```

---

## 🧪 6. Create User (e.g., from Razor or Controller)

```csharp
public class AccountController : Controller
{
    private readonly GraphUserService _graphService;

    public AccountController(GraphUserService graphService)
    {
        _graphService = graphService;
    }

    [HttpPost]
    public async Task<IActionResult> Register(string email, string displayName, string password)
    {
        var result = await _graphService.CreateUserAsync(email, displayName, password);
        return result ? RedirectToAction("Index", "Dashboard") : View("Error");
    }
}
```

---

## ✅ 7. Grant API Permissions in Azure

* Go to App Registration > API Permissions
* Add:

  * `User.ReadWrite.All`
  * `Directory.ReadWrite.All`
* Click “Grant Admin Consent”

---

## 🧾 NuGet Packages

```bash
dotnet add package Microsoft.Graph
dotnet add package Microsoft.Identity.Web
dotnet add package Microsoft.Identity.Client
```

---

## 🎯 Final Notes

* Don’t forget to **enable your B2C sign-up/sign-in policies**.
* Always test using a real B2C tenant and app registration.
* Logging and exception handling should be added for production.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

