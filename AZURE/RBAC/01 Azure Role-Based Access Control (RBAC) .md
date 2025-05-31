# Azure Role-Based Access Control (RBAC) - README

## 📖 Real-World Story: RBAC in Action at Contoso Ltd.

### 📌 Background:

**Contoso Ltd.**, a multinational company, is building an enterprise HR platform hosted on Microsoft Azure. The solution includes:

* A frontend web app hosted in Azure App Service
* A backend running in Azure Kubernetes Service (AKS)
* Azure SQL Database for storing employee records
* Azure Storage for storing documents (resumes, contracts)
* Azure Key Vault for storing secrets and credentials
* CI/CD pipeline set up using Azure DevOps

Contoso wants to:

* Give teams **appropriate access only to their environment**
* Use **automation through service principals**
* Maintain **strong security practices**

---

## 🎯 Goal:

Securely manage access using **Azure RBAC** by defining:

* Who can do it (Security Principal)
* What can be done (Role)
* Where it can be done (Scope)

---

## 👥 Teams & Members

1. **Development Team** – builds and tests the app
2. **DevOps Team** – manages deployments and automation
3. **Security Team** – reviews access and policies
4. **Operations Team** – monitors and maintains the production environment

---

## 🔐 Step-by-Step Use Case with Roles

### 🎬 Step 1: Developer Access to Dev Environment

* **Security Principal**: Group `DevTeam`
* **Scope**: Resource Group `Contoso-HR-Dev-RG`
* **Role**: Contributor

✅ Allows them to deploy and test apps, but **not access production or grant others access**.

---

### 🤖 Step 2: CI/CD Pipeline Deploys to Test and Prod

* **Security Principal**: Service Principal `ContosoPipeline-SP`
* **Scope**:

  * Contributor at `Contoso-HR-Test-RG`
  * Contributor at `Contoso-HR-Prod-RG`
* **Role**: Contributor

✅ This service principal is used by Azure DevOps to deploy infrastructure and application components.
❌ It **cannot access Key Vault secrets directly** unless explicitly assigned.

---

### 🔐 Step 3: Azure Function Accessing SQL DB Securely

* **Security Principal**: Managed Identity from `Contoso-DataProcessor-Function`
* **Scope**: Azure SQL Database
* **Role**: SQL DB Contributor (custom or Data Reader)

✅ Allows function to **read employee data** without managing credentials.
Managed Identity ensures **secure, credential-free access**.

---

### 👁️ Step 4: Operations Team Monitoring Production

* **Security Principal**: Group `OpsTeam`
* **Scope**: Resource Group `Contoso-HR-Prod-RG`
* **Roles**:

  * **Reader** for general resources
  * **Virtual Machine Contributor** for scaling VMs

✅ They can monitor and manage performance.
❌ They cannot delete or modify non-VM resources.

---

### 🛡️ Step 5: Security Team Auditing Access

* **Security Principal**: User `alice@contoso.com`
* **Scope**: Management Group level
* **Role**: Reader

✅ Alice can review access, policies, and audit logs across all subscriptions.
❌ Cannot make changes to any resources.

---

## 💼 Summary of Role Assignments in the Story

| Team/Identity                | Scope Level         | Role                    |
| ---------------------------- | ------------------- | ----------------------- |
| DevTeam (Group)              | Dev Resource Group  | Contributor             |
| ContosoPipeline-SP (SPN)     | Test & Prod RGs     | Contributor             |
| Azure Function (Managed ID)  | Azure SQL Database  | SQL Reader (custom)     |
| OpsTeam (Group)              | Prod Resource Group | Reader + VM Contributor |
| Alice (User) – Security Team | Management Group    | Reader                  |

---

## 🌐 Conclusion

This real-world story shows how **Azure RBAC** supports secure, structured, and flexible access control across environments:

* Developers build and test freely without touching production.
* DevOps automates deployments through secure service principals.
* Operations and Security teams monitor and review resources securely.
* Managed identities avoid secrets and hardcoded credentials.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

