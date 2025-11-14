
# **Azure SQL Server Security Overview**

Azure SQL provides a **comprehensive security package** to protect your data both at rest and in transit, detect threats, and manage access. This README explains key security features and how to configure them.

---

## **1. Microsoft Defender for SQL**

Microsoft Defender for SQL is a **unified security solution** for SQL databases that includes:

* **Vulnerability Assessment** – Detect security weaknesses in databases
* **Advanced Threat Protection** – Identify unusual activities, potential SQL injection, and anomalous database access

### **Getting Started**

* **Free Trial:** 30 days
* **Pricing after trial:** ~1247.92 INR per server per month

### **Configuration Options**

| Option                            | Description                                  | Real-Time Use Case                                                       |
| --------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------ |
| Enable Microsoft Defender for SQL | Activates advanced security features         | Production databases storing sensitive data, e.g., finance or healthcare |
| Start Free Trial                  | Try security features at no cost for 30 days | Test environment evaluation                                              |
| Not now                           | Skip enabling security                       | Non-critical dev/test workloads                                          |

---

## **2. Ledger**

Ledger provides **cryptographic verification** of database integrity:

* Detects **tampering** or unauthorized changes
* Ensures **audit compliance**

### **Configuration Options**

| Option           | Description                                 | Use Case                                                  |
| ---------------- | ------------------------------------------- | --------------------------------------------------------- |
| Not configured   | Ledger not enabled                          | Low-risk workloads                                        |
| Configure Ledger | Enable cryptographic integrity verification | Financial systems, supply chain data, compliance auditing |

---

## **3. Server Identity & Managed Identities**

Managed identities provide **centralized access management** between databases and other Azure resources.

* **System-assigned managed identity** – Created and managed by Azure
* **User-assigned managed identity** – Reusable identity across multiple resources

### **Use Cases**

* Securely access **Key Vault** or other Azure services without storing credentials in code
* Automate database maintenance scripts securely

> Identity settings can be updated anytime in the server **‘jsquare’**.

---

## **4. Transparent Data Encryption (TDE)**

TDE encrypts **databases, backups, and logs at rest** without modifying your application.

### **Key Features**

* **Server-level TDE** – Default encryption for all databases
* **Database-level TDE** – Overrides server-level encryption

### **Configuration Options**

| Option                                | Description                                   | Use Case                                             |
| ------------------------------------- | --------------------------------------------- | ---------------------------------------------------- |
| Not configured                        | TDE disabled                                  | Dev/test environments                                |
| Configure Transparent Data Encryption | Enable TDE for sensitive production databases | Protect data at rest for compliance (PCI-DSS, HIPAA) |

> TDE settings can be updated per database or at the server level in **‘jsquare’**.

---

## **5. Always Encrypted**

Always Encrypted protects **sensitive data** from unauthorized access, even from high-privileged users.

* Ensures **data owners** can view data
* Database operators or administrators **cannot read sensitive values**
* Supports **secure enclaves** for advanced computations without exposing plaintext

### **Configuration Options**

| Option | Description              | Use Case                                                                  |
| ------ | ------------------------ | ------------------------------------------------------------------------- |
| ON     | Enable Always Encrypted  | Protect sensitive data such as SSNs, credit card numbers, or patient data |
| OFF    | Disable Always Encrypted | Non-sensitive data                                                        |

---

## **6. Security Flow Diagram**

```
+---------------------------+
|  Azure SQL Server: jsquare |
+---------------------------+
          |
          v
+---------------------------+
| Microsoft Defender for SQL |
| - Threat Detection         |
| - Vulnerability Assessment |
+---------------------------+
          |
          v
+---------------------------+
| Ledger                     |
| - Cryptographic Verification|
+---------------------------+
          |
          v
+---------------------------+
| Managed Identities         |
| - Access Azure Resources   |
+---------------------------+
          |
          v
+---------------------------+
| Transparent Data Encryption|
| - Encrypt DB, Backups, Logs|
+---------------------------+
          |
          v
+---------------------------+
| Always Encrypted           |
| - Protect sensitive columns|
+---------------------------+
```

---

## **7. Real-Time Use Cases**

| Feature                     | Example Use Case                                        |
| --------------------------- | ------------------------------------------------------- |
| Microsoft Defender          | Detect unusual queries on a financial DB                |
| Ledger                      | Verify transaction integrity in banking or supply chain |
| Managed Identities          | Secure access to Key Vault for encryption keys          |
| Transparent Data Encryption | Encrypt sensitive customer data at rest                 |
| Always Encrypted            | Protect SSNs, credit card info from DB admins           |

---

✅ **Summary:**

Azure SQL Security includes multiple layers:

1. **Microsoft Defender for SQL** – threat detection & vulnerability assessment
2. **Ledger** – cryptographically verifiable database integrity
3. **Managed Identities** – secure, centralized access to Azure resources
4. **TDE** – encrypts data at rest
5. **Always Encrypted** – protects sensitive data from unauthorized users

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


