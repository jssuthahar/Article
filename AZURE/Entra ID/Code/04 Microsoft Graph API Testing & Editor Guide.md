# 📘 Microsoft Graph API Testing & Editor Guide

## 🔹 1. Introduction

Microsoft Graph is a RESTful web API that enables access to Microsoft 365 services like Azure AD, Outlook, SharePoint, Teams, OneDrive, etc.

This guide will help you:

* Authenticate with Graph API
* Test APIs using Graph Explorer and Postman
* Use Graph API in a `.NET` app to create a user

---

## 🔹 2. Graph API Playground – Graph Explorer (Recommended)

### ✅ Tool: [Microsoft Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer)

#### 🔧 Steps:

1. Go to: [https://developer.microsoft.com/en-us/graph/graph-explorer](https://developer.microsoft.com/en-us/graph/graph-explorer)
2. Click **Sign in** (with an account from your Azure AD or Entra External ID)
3. Try some sample queries like:

#### 🔍 Sample Queries:

* Get logged-in user:

  ```
  GET https://graph.microsoft.com/v1.0/me
  ```

* List all users:

  ```
  GET https://graph.microsoft.com/v1.0/users
  ```

* Create a user:

  ```
  POST https://graph.microsoft.com/v1.0/users
  ```

  Request body:

  ```json
  {
    "accountEnabled": true,
    "displayName": "Test User",
    "mailNickname": "testuser",
    "userPrincipalName": "testuser@yourtenant.onmicrosoft.com",
    "passwordProfile": {
      "forceChangePasswordNextSignIn": false,
      "password": "MyTest@1234!"
    }
  }
  ```

4. Click **Run query**

---

## 🔹 3. Graph API Testing in Postman

### ✅ Setup Postman:

1. Register your app in Azure (Entra ID > App registrations)
2. Add API permissions:

   * `User.ReadWrite.All`
   * `Directory.ReadWrite.All`
3. Grant **admin consent**
4. Get an access token using OAuth 2.0:

#### 🔐 Token Endpoint (client credentials):

```
POST https://login.microsoftonline.com/<tenant-id>/oauth2/v2.0/token
```

#### Form Data:

```
client_id=<your-client-id>
scope=https://graph.microsoft.com/.default
client_secret=<your-client-secret>
grant_type=client_credentials
```

Use the token in headers:

```http
Authorization: Bearer <your-access-token>
Content-Type: application/json
```

Then call Graph APIs like:

```http
GET https://graph.microsoft.com/v1.0/users
```

---

## 🔹 4. .NET Graph API Code Example (User Creation)

```csharp
using Microsoft.Graph;
using Microsoft.Graph.Models;
using Microsoft.Identity.Client;
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

        return new GraphServiceClient(request =>
        {
            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", authResult.AccessToken);
            return Task.CompletedTask;
        });
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
        catch (ServiceException ex)
        {
            Console.WriteLine($"Graph API Error: {ex.Message}");
            return false;
        }
    }
}
```

---

## 🔹 5. Required API Permissions

| Permission                   | Type        | Required for             |
| ---------------------------- | ----------- | ------------------------ |
| `User.Read`                  | Delegated   | Reading logged-in user   |
| `User.ReadWrite.All`         | Application | Creating users           |
| `Directory.ReadWrite.All`    | Application | Managing directory users |
| `openid`, `profile`, `email` | Delegated   | Login flows              |

> Go to **App Registrations → API Permissions → Add Permission**
> Then **"Grant admin consent"** after adding.

---

## 🔹 6. Useful Resources

* [Graph Explorer](https://developer.microsoft.com/en-us/graph/graph-explorer)
* [Microsoft Graph API Docs](https://learn.microsoft.com/en-us/graph/overview)
* [Entra External ID](https://learn.microsoft.com/en-us/entra/external-id/)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
