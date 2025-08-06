# 📘 Azure SQL Database 

Welcome to the Azure SQL Database training session! This document outlines the key concepts and features that will be covered in our **Server > Database** architecture module, focusing on Azure's database offerings.

---

## 📦 Purchase Models in Azure SQL

Azure SQL provides flexibility in how you provision and pay for resources. Here are the key purchase models:

### 🔹 DTU-Based Model (Database Transaction Unit)
- **DTU = Compute + Memory + IO**
- Ideal for small to medium apps with predictable workloads.
- You choose a **fixed performance level** (e.g., Basic, Standard, Premium).

### 🔹 vCore-Based Model (Virtual Core)
- Choose **compute, memory, and storage** independently.
- Better transparency and control than DTU.
- Great for **lift-and-shift** migrations or workloads that need tuning.

### 🔹 Serverless Model
- Best for **intermittent or unpredictable usage**.
- **Auto-pause** when inactive – saves cost.
- Automatically scales compute based on demand.

---

## ⚙️ Elastic Pool – Performance and Scaling

Elastic Pool allows you to share resources between multiple databases:

- Host **Database1**, **Database2**, etc. in one pool.
- Automatically adjusts performance per database.
- Ideal for **multi-tenant apps** or **sporadically used databases**.
- Avoids overprovisioning individual databases.

---

## 📈 Scaling Options

| Model          | Scaling Type         | Use Case                                      |
|----------------|----------------------|-----------------------------------------------|
| DTU            | Fixed scaling        | Predictable workloads                         |
| vCore          | Manual scaling       | Custom control, consistent workloads          |
| Serverless     | Auto-scaling         | Unpredictable usage, cost optimization        |
| Elastic Pool   | Shared scaling       | Many databases with varying usage patterns    |

---

## 🔐 Authentication: Azure Active Directory

Instead of SQL logins, you can use:
- **Azure AD accounts** for secure and centralized authentication.
- Integrates with **RBAC** and organizational policies.

---

## 🌟 Key Features of Azure SQL Database

| Feature                  | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| 🔄 Automatic Backups     | Daily backups stored for up to 35 days.                                     |
| 🕓 Point-in-Time Restore | Restore your database to any point within the retention period.             |
| 🌐 Active Geo Replication| Real-time replication across multiple regions for **read scale-out**.      |
| 🔁 Auto-Failover Groups  | Automate disaster recovery and failover across regions.                     |
| 🧭 Zone Redundancy       | Built-in redundancy across availability zones in the same region.           |

---

## 💡 Summary

By the end of this session, you'll understand:
- Different ways to **buy and scale Azure SQL Database**.
- When to use **Serverless**, **Elastic Pool**, or **vCore** models.
- Key enterprise-grade features for **performance**, **security**, and **resilience**.

---

### 📚 Resources
- [Azure SQL Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/)
- [Microsoft Learn – Azure SQL](https://learn.microsoft.com/en-us/azure/azure-sql/)

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


