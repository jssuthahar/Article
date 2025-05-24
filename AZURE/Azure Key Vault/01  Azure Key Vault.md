## 🧠 What is Azure Key Vault?

**Azure Key Vault** is a cloud service by Microsoft Azure that allows you to securely store and manage **secrets**, **encryption keys**, and **certificates**. It protects cryptographic keys and secrets used by cloud applications and services, helping you meet security and compliance requirements.

---

## ❓ Why Use Azure Key Vault?

Modern applications often need to access sensitive information like:
- API Keys
- Connection Strings
- Passwords
- Certificates
- Encryption Keys

Hardcoding or storing these in configuration files is **insecure and risky**. Azure Key Vault:
- Centralizes secret management
- Controls access using **Azure AD**
- Offers **audit logging** for compliance
- Provides **automated key rotation**

---

## ⚙️ How to Use Azure Key Vault?

### 🔑 Step 1: Create a Key Vault
- Go to the Azure Portal
- Search for **Key Vault**
- Click **Create**
- Provide a **name**, **resource group**, and **region**

### 🔐 Step 2: Add Secrets, Keys, or Certificates
- In your Key Vault, click on:
  - **Secrets** to add passwords/API keys
  - **Keys** to create/import encryption keys
  - **Certificates** to upload or auto-renew SSL certificates

### 👤 Step 3: Set Access Policies
- Assign access via **Azure Role-Based Access Control (RBAC)** or **Access Policies**
- Grant permissions like `get`, `list`, `set`, `delete` to selected users/apps

### 💻 Step 4: Access from Code
You can access secrets from:
- **Azure SDKs** (.NET, Python, Java)
- **Azure CLI**
- **PowerShell**
- **ARM templates**

**Example in .NET:**
```csharp
var client = new SecretClient(new Uri("https://<your-vault-name>.vault.azure.net/"), new DefaultAzureCredential());
KeyVaultSecret secret = await client.GetSecretAsync("MySecret");
Console.WriteLine(secret.Value);

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

