# Azure App Service – Identity (Managed Identity) Setup Guide

This document explains **what Identity is**, **why it is needed**, and **how to configure it step-by-step** for an **Azure Web App (App Service)** using **`DefaultAzureCredential` in C#**.

---

## 📌 What is Identity in Azure App Service?

**Identity** in Azure App Service refers to **Managed Identity**.

Managed Identity allows your application to:

* Authenticate securely to Azure services
* Without storing **client secrets**, **passwords**, or **keys**
* Using an **automatically managed Azure AD identity**

---

## 🔐 Why use Managed Identity?

| Without Managed Identity            | With Managed Identity     |
| ----------------------------------- | ------------------------- |
| Client ID & Secret stored in config | No secrets at all         |
| Risk of secret leakage              | Azure manages credentials |
| Manual rotation needed              | Automatic rotation        |
| Different config per environment    | Same code everywhere      |

✔ **Recommended by Microsoft**
✔ **Enterprise-grade security**
✔ **Zero secret management**

---

## 🧠 How `DefaultAzureCredential` uses Identity

When your app runs in **Azure Web App**, this code:

```csharp
new DefaultAzureCredential()
```

Automatically authenticates using:
➡ **Managed Identity**

No extra configuration required in code.

---

## 🏗 Types of Managed Identity

### 1️⃣ System-Assigned Managed Identity (Most common)

* Identity is tied to the Web App
* Deleted automatically when Web App is deleted
* **Recommended for most apps**

### 2️⃣ User-Assigned Managed Identity

* Reusable across multiple resources
* Managed separately
* Used in complex enterprise scenarios

👉 This README focuses on **System-Assigned Identity**

---

## ✅ Step-by-Step: Enable Identity in Azure Web App

### Step 1: Open Azure Portal

Go to:

```
https://portal.azure.com
```

---

### Step 2: Navigate to Your Web App

```
Azure Portal → App Services → <Your Web App Name>
```

---

### Step 3: Open Identity Settings

Left menu → **Identity**

You will see:

* System assigned
* User assigned

---

### Step 4: Enable System-Assigned Identity

Under **System assigned**:

* Status → **ON**
* Click **Save**

Azure will prompt:

> “Do you want to enable system-assigned managed identity?”

Click **Yes**

✅ Azure now creates an identity for your Web App

---

### Step 5: Verify Identity Created

After saving, you will see:

* **Object (Principal) ID**
* **Tenant ID**

These represent your Web App’s identity in **Azure Active Directory**

---

## 🔑 Step-by-Step: Assign Permissions (RBAC)

Managed Identity **exists**, but has **NO permissions by default**.

You must grant access explicitly.

---

### Example 1: Access Azure Key Vault

#### Step 1: Open Key Vault

```
Azure Portal → Key Vault → <Your Key Vault>
```

#### Step 2: Open Access Control (IAM)

Left menu → **Access control (IAM)**

#### Step 3: Add Role Assignment

* Click **Add → Add role assignment**
* Role: **Key Vault Secrets User**
* Assign access to: **Managed identity**
* Select: **Your Web App**
* Save

✅ Your Web App can now read secrets

---

### Example 2: Access Storage Account

Role to assign:

```
Storage Blob Data Contributor
```

---

### Example 3: Access Cosmos DB

Role to assign:

```
Cosmos DB Built-in Data Contributor
```

---

## 💻 C# Code Example (No Secrets Needed)

```csharp
using Azure.Identity;
using Azure.Security.KeyVault.Secrets;

var client = new SecretClient(
    new Uri("https://<your-keyvault-name>.vault.azure.net/"),
    new DefaultAzureCredential()
);

var secret = await client.GetSecretAsync("DbPassword");
```

✔ Same code works locally
✔ Same code works in Azure
✔ Identity is resolved automatically

---

## 🧪 Local Development vs Azure

| Environment    | Authentication Method            |
| -------------- | -------------------------------- |
| Local machine  | Visual Studio login / `az login` |
| Azure Web App  | Managed Identity                 |
| CI/CD pipeline | Environment variables            |

No code changes required.

---

## ❗ Common Issues & Fixes

### ❌ Error: `AuthenticationFailedException`

**Cause**: Identity enabled but no permission assigned
**Fix**: Assign correct RBAC role

---

### ❌ Works locally but fails in Azure

**Cause**: Local user has access, Web App identity does not
**Fix**: Grant permissions to Web App identity

---

### ❌ Access denied from Key Vault

**Cause**: Wrong role assigned
**Fix**: Use **Key Vault Secrets User**, not Reader

---

## 🔍 How to Confirm Identity Is Used

Enable logs and look for:

```
ManagedIdentityCredential authentication succeeded
```

You can also enable:

```csharp
DefaultAzureCredentialOptions
{
    Diagnostics =
    {
        IsLoggingEnabled = true
    }
}
```

---

## ✅ Best Practices

✔ Always use Managed Identity in production
✔ Never store client secrets in App Settings
✔ Use RBAC, not access keys
✔ Prefer System-Assigned Identity unless reuse is required

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
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)

