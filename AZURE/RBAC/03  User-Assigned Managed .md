
# Azure App Service – User-Assigned Managed Identity Setup Guide

This document explains **User-Assigned Managed Identity**, **when to use it**, and **how to configure it step-by-step** for an **Azure Web App (App Service)** using **`DefaultAzureCredential` in C#**.

---

## 📌 What is User-Assigned Managed Identity?

A **User-Assigned Managed Identity** is an Azure AD identity that:

* Is created as a **separate Azure resource**
* Can be **shared across multiple Azure services**
* Has its **own lifecycle**, independent of apps

Unlike System-Assigned Identity, it is **not deleted** when the Web App is deleted.

---

## 🔍 System-Assigned vs User-Assigned (Quick Comparison)

| Feature                 | System-Assigned | User-Assigned |
| ----------------------- | --------------- | ------------- |
| Lifecycle               | Tied to Web App | Independent   |
| Reusable                | ❌ No            | ✅ Yes         |
| Multiple apps can share | ❌               | ✅             |
| Enterprise scenarios    | ⚠ Limited       | ✅ Best        |
| Complexity              | Simple          | Moderate      |

---

## 🎯 When should you use User-Assigned Identity?

Use **User-Assigned Managed Identity** when:

✔ Multiple Web Apps / Functions need **same identity & permissions**
✔ You want **centralized access control**
✔ You don’t want permissions removed when an app is deleted
✔ Enterprise or multi-environment architecture

---

## 🏗 Architecture Example

```
User-Assigned Managed Identity
        │
        ├── Web App A
        ├── Web App B
        └── Azure Function
                │
                └── Key Vault / Storage / Cosmos DB
```

---

## ✅ Step-by-Step: Create User-Assigned Managed Identity

### Step 1: Open Azure Portal

```
https://portal.azure.com
```

---

### Step 2: Create Managed Identity

```
Azure Portal → Managed Identities → Create
```

Fill details:

* Subscription
* Resource Group
* Name: `my-shared-identity`
* Region

Click **Create**

---

### Step 3: Verify Identity

After creation, note:

* **Client ID**
* **Object (Principal) ID**
* **Tenant ID**

These uniquely identify the identity in Azure AD.

---

## 🔗 Step-by-Step: Attach Identity to Azure Web App

### Step 1: Open Your Web App

```
Azure Portal → App Services → <Your Web App>
```

---

### Step 2: Open Identity

Left menu → **Identity**

---

### Step 3: Go to User Assigned Tab

* Click **User assigned**
* Click **Add**

---

### Step 4: Select Identity

* Choose Subscription
* Select `my-shared-identity`
* Click **Add**

✅ The Web App now uses this identity

---

## 🔑 Step-by-Step: Assign Permissions (RBAC)

Permissions are assigned **to the User-Assigned Identity**, not the Web App.

---

### Example 1: Azure Key Vault

```
Azure Portal → Key Vault → Access control (IAM)
```

Add role:

* Role: **Key Vault Secrets User**
* Assign access to: **Managed identity**
* Select: `my-shared-identity`
* Save

---

### Example 2: Storage Account

Assign role:

```
Storage Blob Data Contributor
```

---

### Example 3: Cosmos DB

Assign role:

```
Cosmos DB Built-in Data Contributor
```

---

## 💻 C# Code – DefaultAzureCredential (Automatic)

### Option 1: Let Azure auto-select (Recommended)

```csharp
var credential = new DefaultAzureCredential();
```

If only **one User-Assigned Identity** is attached, Azure automatically uses it.

---

### Option 2: Explicitly specify Client ID (Best Practice)

Recommended when:

* Multiple identities are attached
* Enterprise clarity is required

```csharp
var credential = new DefaultAzureCredential(
    new DefaultAzureCredentialOptions
    {
        ManagedIdentityClientId = "<USER_ASSIGNED_CLIENT_ID>"
    });
```

✔ Removes ambiguity
✔ Safer for production

---

## 🧪 Local Development vs Azure

| Environment   | Authentication Used            |
| ------------- | ------------------------------ |
| Local machine | Visual Studio / `az login`     |
| Azure Web App | User-Assigned Managed Identity |
| CI/CD         | Environment variables          |

No environment-specific code needed.

---

## ❗ Common Issues & Fixes

### ❌ Error: `Multiple managed identities are assigned`

**Cause**: Multiple user-assigned identities attached
**Fix**: Specify `ManagedIdentityClientId`

---

### ❌ AuthenticationFailedException

**Cause**: Identity attached but no RBAC permission
**Fix**: Assign correct role to the identity

---

### ❌ Works locally but not in Azure

**Cause**: Local user has access, identity does not
**Fix**: Grant permissions to user-assigned identity

---

## 🔍 How to Debug Authentication

Enable diagnostics:

```csharp
var options = new DefaultAzureCredentialOptions
{
    Diagnostics =
    {
        IsLoggingEnabled = true
    }
};

var credential = new DefaultAzureCredential(options);
```

Check logs for:

```
ManagedIdentityCredential authentication succeeded
```

---

## 🔐 Security Best Practices

✔ Prefer User-Assigned Identity for shared services
✔ Explicitly set Client ID in production
✔ Use RBAC instead of access keys
✔ Avoid mixing system & user assigned without clarity

---
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

