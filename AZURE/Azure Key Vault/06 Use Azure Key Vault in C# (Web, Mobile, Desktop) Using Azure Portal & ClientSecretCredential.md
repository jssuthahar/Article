# 🔐 Use Azure Key Vault in C# (Web, Mobile, Desktop) Using Azure Portal & ClientSecretCredential

This guide walks you through securely accessing Azure Key Vault **without using `DefaultAzureCredential`** or CLI commands. We'll use **Azure Portal only** and configure your app with a **Client ID, Secret, and Tenant ID** for programmatic access.

---

## 🧰 Prerequisites

- Azure Subscription
- Visual Studio 2022+
- .NET 6 or later
- Application: ASP.NET Core, .NET MAUI, WPF, or WinForms

---

## 🌐 Step-by-Step Setup via Azure Portal

### ✅ Step 1: Create a Key Vault

1. Go to [Azure Portal](https://portal.azure.com)
2. Search for **Key Vaults**
3. Click **+ Create**
   - Name: `MyKeyVault`
   - Resource Group: Select or create a new one
   - Region: Select appropriate Azure region
4. Click **Review + Create**, then **Create**

---

### 🔑 Step 2: Add a Secret

1. Open your Key Vault
2. Go to **Secrets** → **+ Generate/Import**
3. Add a name: `MySecret`
4. Enter a value: `YourSecureValueHere`
5. Click **Create**

---

### 👤 Step 3: Register an App in Azure AD

1. Go to **Azure Active Directory** → **App registrations**
2. Click **+ New registration**
   - Name: `MyKeyVaultApp`
   - Leave redirect URI blank (unless for browser auth)
3. Click **Register**
4. After registration, note the:
   - **Application (client) ID**
   - **Directory (tenant) ID**

---

### 🧾 Step 4: Create a Client Secret

1. In the App Registration → Go to **Certificates & secrets**
2. Click **+ New client secret**
   - Description: `KV Access`
   - Expiry: 6 or 12 months
3. Click **Add**
4. **Copy the client secret value** and **save it securely**

---

### 🔒 Step 5: Grant Access to the App

1. Go to your **Key Vault**
2. Navigate to **Access policies** → Click **+ Add Access Policy**
3. Choose:
   - Secret permissions: **Get**, **List**
   - Select Principal: Search your app by name and select
4. Click **Add**, then **Save**

---

## 💻 Step 6: Integrate with C# Code

Install NuGet Packages:

```bash
dotnet add package Azure.Security.KeyVault.Secrets
dotnet add package Azure.Identity
````

### 📦 Sample C# Code (Web, Desktop, MAUI)

```csharp
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;

var tenantId = "<your-tenant-id>";
var clientId = "<your-client-id>";
var clientSecret = "<your-client-secret>";
var keyVaultUrl = "https://<your-keyvault-name>.vault.azure.net/";

var credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
var client = new SecretClient(new Uri(keyVaultUrl), credential);

KeyVaultSecret secret = await client.GetSecretAsync("MySecret");
Console.WriteLine($"Secret value: {secret.Value}");
```

> ✅ Tip: Never hardcode your client secret in production. Use `dotnet user-secrets` or environment variables.

---

## 🔒 Secure Practices

* Use managed identity for production deployments (no secrets required)
* Use separate vaults per environment (dev, staging, prod)
* Periodically rotate secrets and credentials
* Store client secrets securely in development

---

## 📚 Additional Reading

* [Azure Key Vault Overview](https://learn.microsoft.com/en-us/azure/key-vault/general/overview)
* [App Registration Guide](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)
* [Azure.Identity Documentation](https://learn.microsoft.com/en-us/dotnet/api/azure.identity.clientsecretcredential)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
