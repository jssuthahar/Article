## 1️⃣ Azure Login Types – Big Picture

Azure authentication methods fall into **4 main categories**:

1. **Human (User) Login**
2. **Application / Service Login**
3. **Workload / Resource Login (Managed Identity)**
4. **External / Federated Login**

---

## 2️⃣ Human Login Methods (People)

### 🔹 1. Azure AD User Login (Username & Password)

**Used by:** Developers, admins, users

* Email + password
* Backed by **Microsoft Entra ID (Azure AD)**
* Can use:

  * MFA
  * Conditional Access
  * Role-Based Access Control (RBAC)

**Example:**

```text
Login to Azure Portal
Login to Visual Studio
Login via Azure CLI (az login)
```

✅ Most common
❌ Not suitable for automation

---

### 🔹 2. Multi-Factor Authentication (MFA)

Adds **extra security layer**:

* OTP (Authenticator App)
* SMS / Call
* FIDO2 Security Key

Used with **User Login**

---

### 🔹 3. Azure AD Guest User (B2B)

**Used by:** External users (vendors, partners)

* Invited to your tenant
* Limited access using RBAC

---

## 3️⃣ Application / Service Login (Non-Human)

### 🔹 4. Service Principal (App Registration)

**Used by:**

* CI/CD pipelines
* Background services
* Automation scripts

**How it works:**

* App registered in Azure AD
* Uses:

  * Client ID
  * Tenant ID
  * Client Secret **or**
  * Certificate

**Example:**

```text
Azure DevOps Pipeline
GitHub Actions
Custom backend app
```

**Pros:**

* Fine-grained permissions
* Secure

**Cons:**

* You must manage secrets/certificates

---

## 4️⃣ Managed Identity (🔥 Most Important)

### 🔹 5. Managed Identity (System & User Assigned)

**Best for:**
Azure resources accessing other Azure services **securely without secrets**

### 💡 What is Managed Identity?

A **Microsoft-managed identity** automatically created in Azure AD for a resource.

➡️ **No username**
➡️ **No password**
➡️ **No secret stored in code**

---

### ✅ Types of Managed Identity

| Type                | Description                        |
| ------------------- | ---------------------------------- |
| **System Assigned** | Identity tied to one resource      |
| **User Assigned**   | Reusable identity across resources |

---

### 🔹 System Assigned Managed Identity

* Created automatically when enabled
* Lifecycle tied to resource
* Deleted when resource is deleted

**Example:**

```text
Azure VM → Access Key Vault
Azure App Service → Access Azure SQL
```

---

### 🔹 User Assigned Managed Identity

* Created separately
* Can be attached to multiple resources
* Better for enterprise & shared access

---

### 🔐 How Managed Identity Works (Flow)

1. Azure resource requests token
2. Azure AD issues token
3. Token used to access Azure service
4. Access controlled via RBAC

**Example Code (C#):**

```csharp
var credential = new DefaultAzureCredential();
var client = new SecretClient(new Uri(keyVaultUrl), credential);
```

---

### ⭐ Why Managed Identity is Preferred

✔ No secrets
✔ Auto-rotated credentials
✔ Secure
✔ Azure-recommended best practice

---

## 5️⃣ External / Federated Login

### 🔹 6. Federated Identity (OIDC / SAML)

Used when:

* Azure AD integrates with:

  * Google
  * Facebook
  * GitHub
  * On-prem AD
  * Other identity providers

**Example:**

* Sign in using Google
* Corporate AD login via Azure AD Connect

---

### 🔹 7. Workload Identity Federation (Modern Replacement)

Used mainly in **Kubernetes & CI/CD**

Replaces:
❌ Client secrets
❌ Certificates

Used with:

* AKS
* GitHub Actions
* Azure DevOps

---

## 6️⃣ Azure CLI / PowerShell Login Types

### 🔹 Azure CLI

```bash
az login                # User login
az login --service-principal   # App login
az login --identity     # Managed Identity
```

---

## 7️⃣ Summary Table (Interview Gold ⭐)

| Login Type         | Used By         | Secrets Needed |
| ------------------ | --------------- | -------------- |
| User Login         | Humans          | Password       |
| MFA                | Humans          | OTP            |
| Service Principal  | Apps            | Yes            |
| Managed Identity   | Azure Resources | ❌ No           |
| Federated Identity | External Users  | No             |
| Workload Identity  | CI/CD, AKS      | No             |

---

## 8️⃣ When to Use What?

* **Portal / Dev work** → User Login
* **CI/CD** → Service Principal or Workload Identity
* **Azure resource to resource** → **Managed Identity (Best)**
* **External users** → B2B / Federation

