
# **Azure SQL Database & SQL Server on VM (Full Guide)**

## **📌 Introduction**

This document explains **Azure SQL Database**, its features, usage, and when to choose **SQL Server on Virtual Machine (VM)** instead.
Perfect for students, developers, architects, and cloud beginners.

---

# **1. Azure SQL Database (PaaS) – Overview**

Azure SQL Database is a fully managed, cloud-based relational database service built on the SQL Server engine. It removes the need to manage hardware, operating systems, and SQL Server instances. All maintenance and infrastructure tasks are handled by Azure.

---

# **2. Key Features of Azure SQL Database**

### ⭐ Fully Managed Service

* Automatic patching
* Automated backups
* Built-in high availability
* No hardware or OS management

### ⭐ High Scalability

* Scale up/down compute and storage on demand
* Supports serverless autoscaling
* Elastic pools for multiple databases

### ⭐ Security

* Data encrypted at rest and in transit
* Advanced Threat Protection
* Azure AD authentication
* Auditing & firewall rules

### ⭐ Performance Optimization

* Automatic tuning
* Intelligent insights
* Query performance analysis

---

# **3. Deployment Models**

### **Single Database**

Independent, isolated database—best for most cloud applications.

### **Elastic Pool**

Group of databases sharing performance resources—cost-effective for variable workloads.

### **Managed Instance**

Fully managed SQL Server instance with near 100% compatibility.

---

# **4. How to Create Azure SQL Database (Portal)**

1. Open Azure Portal
2. Search **SQL Database** → *Create*
3. Select:

   * Resource group
   * Database name
   * Logical server
   * Compute + storage tier
4. Configure networking
5. Enable security options
6. Review & create

---

# **5. Connecting to Azure SQL Database**

### **Via SSMS**

* Server: `yourservername.database.windows.net`
* Authentication: SQL Auth or Azure AD

### **Connection String (C# Example)**

```csharp
var connectionString = "Server=tcp:yourserver.database.windows.net,1433; 
Database=yourdb; 
User ID=adminuser; 
Password=Password123; 
Encrypt=True;";
```

---

# **6. Security Best Practices**

* Use Azure AD authentication
* Enable Microsoft Defender
* Restrict firewall access
* Enable auditing
* Use Always Encrypted for sensitive data

---

# **7. Backup & Restore**

Azure SQL Database provides:

* Automatic backups
* Point-in-time restore
* Geo-redundant backup options
* Long-term retention (LTR) up to 10 years

---

# **8. Monitoring**

Tools:

* Query Performance Insight
* Intelligent Insights
* Metrics & Alerts
* Logs

---

# **9. When to Use Azure SQL Database (PaaS)?**

Use Azure SQL Database if you need:

* Zero maintenance
* Auto-scaling
* High availability built-in
* Cost-efficient cloud database
* Modern cloud-native application backend

---

# **10. SQL Server on Virtual Machine (IaaS)**

SQL Server on Azure VM is a traditional SQL Server installed on a Windows/Linux VM in Azure.
You get full instance control and complete SQL Server feature support.

---

# **11. Difference: Azure SQL Database vs SQL Server on VM**

| Feature           | Azure SQL Database   | SQL Server on VM            |
| ----------------- | -------------------- | --------------------------- |
| Model             | PaaS                 | IaaS                        |
| Maintenance       | Azure manages        | You manage                  |
| High Availability | Automatic            | You configure               |
| Backups           | Automatic            | Manual or custom            |
| Scaling           | Resize DB            | Resize VM                   |
| SQL Server Agent  | ❌ Not supported      | ✔ Supported                 |
| SSIS/SSRS         | Limited/ADF required | ✔ Fully supported           |
| Cross-DB Queries  | Limited              | ✔ Fully supported           |
| Instance Control  | Limited              | ✔ Full control              |
| Best Use          | Modern apps          | Lift-and-shift, legacy apps |

---

# **12. When Should You Choose SQL Server on VM? (Detailed Explanation)**

Below are the full explanations added into one place:

---

## **12.1 You Need Full Instance Control**

SQL Server on VM gives complete control over:

* Server-level settings
* SQL memory, CPU, MAXDOP, parallelism
* Server-level collation
* Installing custom SQL extensions
* Using trace flags
* Managing multiple databases within the same SQL instance
* Custom tempDB configuration
* SQL Server directory control (logs, data files, backup locations)

**Azure SQL Database does not allow instance-level control** because it is fully managed.

---

## **12.2 You Need SQL Server Agent / SSIS / SSRS**

### **SQL Server Agent**

Used for:

* Scheduled jobs
* ETL tasks
* Maintenance plans

Not available in Azure SQL Database.

### **SSIS**

* Full SSIS ETL workload
* On VM: full support
* On Azure SQL: requires Azure Data Factory IR (extra cost)

### **SSRS**

* Full reporting engine available only on SQL VM
* Not supported on Azure SQL Database

If you rely on these features → SQL VM is required.

---

## **12.3 You Are Doing Lift-and-Shift Migration with Minimal Changes**

SQL on VM is ideal when you want:

* To restore a .bak from on-prem
* Zero code changes
* Keep existing stored procedures
* Maintain legacy schema
* Maintain old configurations

Azure SQL Database often requires:

* Schema changes
* Feature adjustments
* Code rewriting

For fast migration → choose SQL VM.

---

## **12.4 Your Application Requires Cross-Database Queries**

Your application may use:

* `SELECT FROM DB1 JOIN DB2`
* Cross-database foreign keys
* Cross-database transactions
* Instance-level stored procedures
* Linked servers
* Distributed transactions (DTC)

Azure SQL Database does **not** support these (except with limited Elastic Queries).

If your app depends on multi-database architecture → SQL VM is required.

---

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


