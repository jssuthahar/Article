# 🔐 Getting Started with Azure Key Vault in C# (Web, Mobile, Desktop)

This guide helps you integrate **Azure Key Vault** into your C# applications (ASP.NET Core Web, .NET MAUI Mobile/Desktop, or WPF/WinForms Desktop) to securely store and retrieve secrets like API keys, passwords, certificates, and connection strings.

## 🌟 What is Azure Key Vault?

Azure Key Vault is a cloud service that provides secure storage of secrets, keys, and certificates. It helps manage sensitive information securely in cloud-based or hybrid applications.

---

## 📦 Prerequisites

- Azure Subscription
- .NET 6 or later
- Visual Studio 2022 or later
- Azure CLI or Azure Portal access

---

## 🛠️ Installation

Install the Azure Key Vault SDK NuGet packages:

```bash
dotnet add package Azure.Security.KeyVault.Secrets
dotnet add package Azure.Identity
````

---

## 🔧 Step-by-Step Configuration

### 🔑 1. Create a Key Vault in Azure

Use the Azure CLI or Azure Portal.

```bash
az keyvault create --name <YourKeyVaultName> --resource-group <YourResourceGroup> --location <Region>
```

### 🔒 2. Add a Secret to the Key Vault

```bash
az keyvault secret set --vault-name <YourKeyVaultName> --name "MySecret" --value "ThisIsASecretValue"
```

---

### 👤 3. Assign Access Policy

Grant your app or user identity access to the Key Vault via Azure Portal or CLI.

```bash
az keyvault set-policy --name <YourKeyVaultName> --upn <YourAzureEmail> --secret-permissions get list
```

---

## 💻 Usage in C# Code

### 🔐 Authenticate using DefaultAzureCredential

```csharp
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;

var keyVaultUrl = "https://<YourKeyVaultName>.vault.azure.net/";
var client = new SecretClient(new Uri(keyVaultUrl), new DefaultAzureCredential());

KeyVaultSecret secret = await client.GetSecretAsync("MySecret");
Console.WriteLine($"Secret Value: {secret.Value}");
```

---

## 📱 For Mobile (MAUI / Xamarin)

* Add the same packages to your mobile project.
* Make sure you use **interactive authentication** for development or **managed identity** for production.
* Use `TokenCredential` via `DefaultAzureCredential()` or `InteractiveBrowserCredential()` if needed.

---

## 🖥️ For Desktop (WPF / WinForms)

* You can use `DefaultAzureCredential()` on development machines.
* For production, consider using managed identity (if hosted on Azure) or use a client secret or certificate for `ClientSecretCredential`.

---

## 🛡️ Best Practices

* Never store secrets in appsettings or hardcode them.
* Use Managed Identity for production environments when possible.
* Rotate secrets regularly and audit access.

---

## 📚 Resources

* [Azure Key Vault Documentation](https://learn.microsoft.com/en-us/azure/key-vault/)
* [Azure SDK for .NET](https://learn.microsoft.com/en-us/dotnet/azure/)
* [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/keyvault)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
