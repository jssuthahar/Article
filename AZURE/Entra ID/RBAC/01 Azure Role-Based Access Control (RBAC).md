# Azure Role-Based Access Control (RBAC)

## 📘 Overview

Azure Role-Based Access Control (RBAC) is an authorization system that helps you manage **who has access** to Azure resources, **what they can do**, and **where** they can do it. RBAC enables fine-grained access management by assigning roles to users, groups, service principals, or managed identities.

RBAC works together with **Authentication and Authorization**:

* **Authentication** verifies *who you are* using Azure Active Directory (Microsoft Entra ID)
* **Authorization** determines *what actions you are allowed to perform* using RBAC

RBAC answers three key questions:

1. **Who** – User, group, service principal, or managed identity
2. **What** – Permissions defined by a role
3. **Where** – Scope (subscription, resource group, or resource)

---

## 🔐 Why Azure RBAC?

* Enforces **least privilege access**
* Centralized and consistent access control
* Improves security and compliance
* Easy integration with Azure Active Directory (Azure AD / Entra ID)

---

## 🧩 Core Components of Azure RBAC

### 1. Security Principal

An identity that requests access to Azure resources.

* User
* Group
* Service Principal
* Managed Identity

### 2. Role Definition

A collection of permissions.

* Defines **allowed actions** (read, write, delete)
* Can be built-in or custom

### 3. Scope

Defines **where** the access applies.

* Management Group
* Subscription
* Resource Group
* Resource

### 4. Role Assignment

Binds a **security principal**, **role**, and **scope** together.

---

## 🏗️ RBAC Scope Hierarchy

```
Management Group
 └── Subscription
      └── Resource Group
           └── Resource
```

Permissions are inherited from parent scopes to child scopes.

---

## 📦 Built-in Azure Roles (Common)

| Role                          | Description                            |
| ----------------------------- | -------------------------------------- |
| Owner                         | Full access including role assignments |
| Contributor                   | Full access except role assignments    |
| Reader                        | View-only access                       |
| User Access Administrator     | Manage user access                     |
| Virtual Machine Contributor   | Manage VMs only                        |
| Storage Blob Data Contributor | Read/write blob data                   |

> Azure provides **100+ built-in roles** across services.

---

## 🛠️ Custom Roles

Custom roles are used when built-in roles do not meet requirements.

### Custom Role Structure

* Actions
* NotActions
* DataActions
* NotDataActions
* AssignableScopes

### Use Case Example

* Allow VM start/stop
* Deny VM delete

---

## 🧪 Example: Assign RBAC Role

### Azure Portal

1. Go to the resource
2. Select **Access Control (IAM)**
3. Click **Add > Role assignment**
4. Choose role
5. Select user/group
6. Assign

---

### Azure CLI Example

```bash
az role assignment create \
  --assignee user@domain.com \
  --role Reader \
  --scope /subscriptions/{subscription-id}
```

---

### PowerShell Example

```powershell
New-AzRoleAssignment \
  -SignInName user@domain.com \
  -RoleDefinitionName Reader \
  -Scope /subscriptions/{subscription-id}
```

---

## 🔑 RBAC vs Azure AD Roles

| Azure RBAC                 | Azure AD Roles        |
| -------------------------- | --------------------- |
| Resource authorization     | Identity management   |
| Applied to Azure resources | Applied to Azure AD   |
| Scope-based                | Tenant-wide           |
| Example: VM Contributor    | Example: Global Admin |

---

## 🧠 Best Practices

* Use **groups** instead of assigning roles to users directly
* Follow **least privilege principle**
* Assign roles at the **lowest required scope**
* Regularly **review role assignments**
* Avoid using **Owner** role unless necessary

---

## 🔍 Auditing & Monitoring

* Azure Activity Logs
* Azure AD Sign-in Logs
* Access Reviews (Entra ID)
* Azure Policy for governance

---

## 🚨 Common Mistakes

* Assigning roles at subscription level unnecessarily
* Using Owner role for daily operations
* Not removing unused role assignments
* Confusing RBAC roles with Azure AD roles

---

## 📚 When to Use RBAC

✔ Managing access to Azure resources
✔ Securing production environments
✔ Enterprise-level governance
✔ Multi-team or multi-subscription environments

---

## 📎 Related Azure Services

* Azure Active Directory (Entra ID)
* Azure Policy
* Azure Blueprints
* Azure Monitor

---

## 📖 References

* Azure RBAC Documentation (Microsoft Learn)
* Azure Identity & Access Management

---

## ✅ Summary

Azure RBAC is a critical security feature that ensures the right people have the right access to the right resources at the right time. Understanding and implementing RBAC correctly is essential for secure and scalable Azure environments.

---
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
