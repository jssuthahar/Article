# 🔐 Azure Storage Account Access Keys

## 📘 Overview

**Access Keys** are **authentication credentials** used to allow full programmatic access to an Azure Storage account. These keys provide **administrative-level access** to all data in all services (Blob, Queue, Table, File) within the account.

---

## ❓ Why Access Keys Are Important

| 🔍 Feature      | 💬 Description                                                |
| --------------- | ------------------------------------------------------------- |
| 🔑 Full Access  | Grant complete read/write/delete access to storage services   |
| ⚙️ Used in SDKs | Used in apps, CLI, SDKs, and tools to authenticate            |
| ⚠️ Sensitive    | Should be protected like passwords or secrets                 |
| 🔁 Two Keys     | Azure provides 2 keys so you can rotate them without downtime |

---

## 🔄 Where Access Keys Are Used

| Scenario               | Example                                       |
| ---------------------- | --------------------------------------------- |
| Azure CLI / PowerShell | Scripted access to upload/download blobs      |
| Storage Explorer       | Connect and manage files using access key     |
| Application Config     | Connection strings in `appsettings.json`      |
| Backup & Restore Jobs  | Third-party tools connecting to Azure Storage |
| Function Apps          | Connecting to blob triggers or file shares    |

---

## 🧭 Step-by-Step: View and Manage Access Keys in Azure Portal

### ✅ Step 1: Go to Your Storage Account

1. Sign in to [Azure Portal](https://portal.azure.com)
2. Go to **Storage accounts**
3. Click your **target storage account**

---

### ✅ Step 2: Access the Keys

1. In the left-side menu, under **Security + networking**, click **Access keys**
2. You will see:

   * **key1** and **key2**
   * Corresponding **Connection strings** for both keys

---

### ✅ Step 3: Copy the Key or Connection String

* Click **Show keys**
* Click **Copy** next to:

  * The **Key** – to use directly
  * The **Connection string** – to include in applications (preferred for apps)

---

### ✅ Step 4: Rotate Keys (For Security)

1. Switch to the unused key (`key2` if `key1` is active)
2. Update applications to use `key2`
3. Click **Regenerate key1**
4. Repeat rotation every 3–6 months (best practice)

---

## 🔐 Example: Using Access Key in .NET App

```json
{
  "AzureStorage": {
    "ConnectionString": "DefaultEndpointsProtocol=https;AccountName=myaccount;AccountKey=abc123...;EndpointSuffix=core.windows.net"
  }
}
```

Or in code:

```csharp
var storageAccount = CloudStorageAccount.Parse(Configuration["AzureStorage:ConnectionString"]);
```

---

## 🔒 Security Best Practices

| Recommendation                              | Reason                                       |
| ------------------------------------------- | -------------------------------------------- |
| 🔁 Rotate keys regularly                    | Prevent misuse if leaked                     |
| 👀 Never hardcode keys in code              | Use environment variables or Azure Key Vault |
| 🔐 Use Azure Key Vault for storing secrets  | Centralized secret management                |
| 👤 Use Shared Access Signature (SAS) tokens | For limited or temporary access              |
| ❌ Disable unused keys                       | Reduce attack surface                        |

---

## 🧾 Summary Table

| Item                      | Details                                 |
| ------------------------- | --------------------------------------- |
| Total Keys                | 2 (key1 & key2)                         |
| Scope                     | Full access to all storage services     |
| Rotation                  | Manual via portal, CLI, or ARM          |
| Alternatives              | Shared Access Signature (SAS), Azure AD |
| Storage Services Affected | Blob, File, Queue, Table                |

---

## 📁 When Not to Use Access Keys

| Instead Use          | For                                                            |
| -------------------- | -------------------------------------------------------------- |
| **SAS Tokens**       | Limited-time or scoped access (e.g., upload-only)              |
| **Azure AD RBAC**    | Role-based access control with identity protection             |
| **Managed Identity** | For secure access from Azure services (e.g., VM, Function App) |

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
