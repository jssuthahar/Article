
# ** Azure SQL Database Creation (Database Details Explained)**

This guide explains all fields inside the **Database Details** page when creating a new Azure SQL Database in the Azure Portal.

It covers database name, server selection, elastic pools, workload types, compute tiers, and hyperscale settings.

---

# **📌 1. Database Details Page Overview**

When creating an Azure SQL Database, you must configure several required database settings:

* **Database name**
* **Logical SQL Server** (existing or new)
* **Elastic pool** option
* **Workload environment**
* **Compute + storage tier**

These settings determine cost, performance, scalability, and security.

---

# **📌 2. Database Name**

### **Database name**

Enter the name of your database.

Examples:

```
customerdb
salesdb
inventorydb
appdb-prod
```

**Rules:**

* Must be unique within the server
* Cannot use special characters
* Should reflect purpose (dev/test/prod)

---

# **📌 3. Server Selection**

This section allows you to choose where the database will be hosted.

### **Options:**

#### **1️⃣ Select an existing logical server**

Example:

```
jsquare (Central India)
```

A logical server stores:

* Database firewall rules
* Authentication configuration
* Microsoft Entra admin
* Auditing policies

#### **2️⃣ Create new server**

If you have no existing server, click:

**Create new →**
You will configure:

* Server name
* Region (ex: Central India)
* Authentication
* Entra admin

Refer to the previous README if needed.

---

# **📌 4. Elastic Pool Option**

Azure SQL allows databases to run:

### **Option A — Not using an elastic pool**

```
Want to use SQL elastic pool?
No
```

Use this when:

* Single workload
* Predictable performance
* Independent scaling needed

### **Option B — Using an elastic pool**

```
Want to use SQL elastic pool?
Yes
```

Elastic pools are ideal for:

* Many databases
* Unpredictable workloads
* Cost-saving shared resources

**Example:**
If 10 databases spike at different times, elastic pool saves cost.

---

# **📌 5. Workload Environment**

This determines recommended defaults for your environment.

### **Options:**

---

## **1️⃣ Development Environment**

Use this for:

* Testing
* Development
* Student workloads
* Low-cost environments

Characteristics:

* Cheaper compute
* No high availability requirement
* Lower performance

---

## **2️⃣ Production Environment**

Azure recommends defaults for real workloads:

* Higher performance
* Business continuity
* Better security
* Recommended compute size
* Often more expensive

Example in portal:

```
Workload environment: Production
Default settings provided for Production workloads.
```

You can modify any settings even if production is chosen.

---

# **📌 6. Compute + Storage**

This is the most important setting — it controls cost, speed, and scaling.

Example from your configuration:

```
Compute + storage:
Hyperscale
Standard-series (Gen5), 2 vCores, zone redundant disabled
```

---

# **📌 6.1 Service Tier: Hyperscale**

### **Hyperscale Tier**

Best for:

* Very large databases (up to 100 TB)
* High read/write workloads
* Rapid auto-scaling
* Fast backups and restores

Benefits:

* Auto-scale storage
* Up to 30 read replicas
* High throughput

Use this for enterprise-level apps.

---

# **📌 6.2 Compute Tier: Standard-series (Gen5)**

Gen5 is the most common compute generation in Azure SQL.

### **Gen5 Features:**

* Balanced CPU and memory
* Good for general workloads
* Supports up to 80 vCores

---

# **📌 6.3 vCore Configuration**

Example:

```
2 vCores
```

vCore = virtual CPU.

More vCores = more power.

Use cases:

* **2 vCores** → small apps, dev, test
* **4–8 vCores** → medium workloads
* **16+ vCores** → enterprise workloads

---

# **📌 6.4 Zone Redundant**

Example:

```
Zone redundant: Disabled
```

If enabled:

* Database replicas run across Availability Zones
* Protection from datacenter failure
* Slightly higher cost

Recommended for Production databases.

---

# **📌 7. Configure Database (Advanced)**

When you click **Configure database**, you can adjust:

### **✔ vCore count**

### **✔ Storage size**

### **✔ Redundancy options**

### **✔ Backup storage**

### **✔ Read replicas**

### **✔ Hyperscale storage auto-grow**

### **✔ Database-level compute tier**

### **✔ Zone redundancy**

This allows fine-tuning based on performance and cost requirements.

---

# **🎯 Summary Table**

| Setting                  | Description                       |
| ------------------------ | --------------------------------- |
| **Database name**        | Name of your DB                   |
| **Server**               | Logical SQL server hosting DB     |
| **Elastic pool**         | Share resources across DBs        |
| **Workload environment** | Dev or Prod mode defaults         |
| **Compute tier**         | Hyperscale, General Purpose, etc. |
| **vCores**               | CPU power                         |
| **Gen5**                 | Compute generation                |
| **Zone redundancy**      | Multi-AZ protection               |
| **Storage**              | Auto-grow, capacity, redundancy   |

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


