# **Creating a New Azure SQL Server in Azure Portal**

This guide explains how to create a **new Azure SQL Server** from the Azure Portal, configure authentication options, and set a **Microsoft Entra (Azure AD) admin**.

---

# **📌 1. What is an Azure SQL Server?**

An **Azure SQL Server** is a logical container used to manage:

* SQL Databases
* Firewall rules
* Authentication and security
* Active Directory admin
* Server-level settings

It is NOT a virtual machine; it's a logical server for PaaS databases.

---

# **📌 2. Steps to Create a New Azure SQL Server**

## **Step 1 — Open Azure Portal**

Go to:
**[https://portal.azure.com](https://portal.azure.com)**

---

## **Step 2 — Search for “SQL Server”**

1. In the search bar, type **SQL Server**
2. Click **SQL Servers** (NOT SQL Virtual Machines)
3. Click **Create**

---

## **Step 3 — Configure Server Basics**

### **🖊️ Server Name**

* Must be globally unique
* Allowed: letters, numbers
* Example:

  * `myserver-suthahar`
  * `company-sql-prod`

This will form your server FQDN:

```
myserver-suthahar.database.windows.net
```

---

### **📍 Location (Region)**

Choose the region closest to:

* Your application
* Your users
* Your compliance requirements

Common options:

* Southeast Asia (Singapore)
* East Asia (Hong Kong)
* Central India
* Australia East
* Japan East

Choosing the right region reduces latency and cost.

---

## **Step 4 — Authentication Method**

Azure SQL Server allows **three types of authentication**:

---

# **🔐 Authentication Options**

## **1️⃣ SQL Authentication (Traditional username/password)**

You create:

* **Admin username**
* **Admin password**

Example:

```
username: sqladmin
password: StrongPassword@123
```

Use this for:

* Tools like SSMS
* Application connection strings

**Pros:** Easy to configure
**Cons:** Less secure than Entra ID

---

## **2️⃣ Microsoft Entra Authentication (Azure AD)**

This allows login via:

* Entra users (e.g., [yourname@company.com](mailto:yourname@company.com))
* Entra groups
* Managed Identities

Benefits:

* Passwordless authentication
* Multi-factor authentication
* Centralized identity management
* Better security & audit

Best practice for enterprises.

---

## **3️⃣ Disable Local Authentication (New Security Option)**

You can turn OFF SQL authentication completely.

Use only Entra ID authentication for:

* Highest security
* Passwordless environment

---

# **📌 Step 5 — Set Microsoft Entra Admin**

Setting an **Entra admin** enables Azure AD authentication.

---

## **How to Set Entra Admin**

1. After creating the server, open the server page
2. On the left menu, click
   **Microsoft Entra ID → Set Admin**
3. Choose:

   * A **user** (your own account)
   * OR an **Entra group** (recommended)
4. Click **Select**
5. Click **Save**

---

## **Why Set an Entra Admin?**

### ✔ Required for Azure AD authentication

### ✔ Allows logins without password

### ✔ Can enforce MFA (multi-factor authentication)

### ✔ Can assign database roles to Entra users/groups

### ✔ Higher security than SQL Authentication

---

# **📌 Step 6 — Configure Networking (Optional but recommended)**

Choose one:

### **1. Public Access**

* Quick setup
* Use firewall rules
* Add current IP

### **2. Private Endpoint**

* Most secure option
* Server accessible only inside VNet

---

# **📌 Step 7 — Review & Create**

Review all settings:

* Server name
* Location
* Authentication settings
* Entra admin
* Networking

Click **Create**.

## 📚 Useful Links

* 🔗 [AWS Educate](https://www.awseducate.com)
* 🔗 [AWS Skill Builder](https://lnkd.in/ddc4GRc7)
* 🔗 [Pearson VUE AWS Exams](https://home.pearsonvue.com/aws)
* 🔗 [AWS Certification Official Page](https://aws.amazon.com/certification/)

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


