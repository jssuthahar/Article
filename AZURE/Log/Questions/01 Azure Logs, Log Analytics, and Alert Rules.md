
# AZ-204 Exam – Azure Logs, Log Analytics, and Alert Rules 

This document explains **Question #21** from the AZ-204 exam about configuring alerts with **Azure Log Analytics Workspace**.

---

## 📘 Key Concepts

### 1. What is Azure Log?
- **Azure Logs** are records of activity, diagnostics, and telemetry from Azure resources, applications, and infrastructure.  
- They help track **performance, security, and auditing**.  
- Common log sources:  
  - Azure Activity Logs (management operations)  
  - Azure Diagnostics Logs (resource-level data)  
  - Application Logs (from apps)  
  - Security Logs (on-premises or Azure resources)  

---

### 2. On-Premises Logging
- On-premises servers (e.g., Windows Server 2012 R2, 2016) can be connected to **Azure Monitor / Log Analytics** using the **Microsoft Monitoring Agent (MMA)**.  
- This allows **hybrid monitoring** – you can send performance counters, event logs, and security data from on-premises servers to Azure.  

---

### 3. Azure Log Analytics Workspace
- A **Log Analytics Workspace** is a central data store in Azure Monitor that collects logs and metrics from different sources:  
  - Azure resources  
  - On-premises servers  
  - Applications  
- You can **query logs**, **create dashboards**, and **configure alerts**.  

---

## ❓ Question #21

**Scenario:**  
Your company’s Azure subscription includes a **Log Analytics workspace**.  

- 100 on-premises servers (Windows Server 2012 R2/2016) are linked to the workspace.  
- The workspace collects **performance counters related to security**.  
- You need to **configure alerts** based on the collected information.  

**Requirements:**  
- Alert rules must allow **dimensions**.  
- **Fast alert creation** is required.  
- A **single notification** should be triggered when the alert is created and when it is resolved.  

**Question:**  
Which signal type should you use when creating the alert rules?  

**Options:**  
A. Activity Log signal type  
B. Application Log signal type  
C. Metric signal type  
D. Audit Log signal type  

**Correct Answer:** ✅ **C. Metric signal type**  

---

## ✅ Why Answer C (Metric signal type) is Correct

- **Metric alerts** in Azure Monitor:  
  - Work on **multi-dimensional platform metrics** (e.g., CPU, memory, security counters).  
  - Provide **fast evaluation** (near real-time) → minimal alert creation time.  
  - Support **dimensions** (filtering metrics by properties like region, instance, or server).  
  - Send **notifications** when the alert condition is met **and** when resolved.  

➡️ This exactly matches the scenario requirements.  

**Reference:** [Azure Metric Alerts Documentation](https://docs.microsoft.com/en-us/azure/azure-monitor/platform/alerts-metric)

---

## ❌ Why the Other Options Are Incorrect

**A. Activity Log signal type**  
- Activity Logs track **management operations** (e.g., resource created, deleted).  
- They are not designed for performance counters or dimensional metrics.  
- ❌ Doesn’t meet the requirement.  

**B. Application Log signal type**  
- Application Logs are used for **app-level tracing/debugging**.  
- More suited for monitoring errors or exceptions, not system performance metrics.  
- ❌ Doesn’t meet the requirement.  

**D. Audit Log signal type**  
- Audit logs track **who did what** (security/audit compliance).  
- They don’t provide **performance counters or metrics**.  
- ❌ Not appropriate for this use case.  

---

## 📚 Topics to Study in Azure for This Question

To fully understand this area, focus on:  

1. **Azure Monitor**  
   - Logs, Metrics, Alerts  
   - Signal types (Metric, Activity log, Application Insights, Log-based alerts)  

2. **Azure Log Analytics**  
   - Workspaces  
   - Kusto Query Language (KQL) for log queries  
   - Integration with on-prem servers  

3. **Autoscaling & Alerts**  
   - Metric Alerts vs. Log Alerts  
   - Alert rules with dimensions  
   - Action groups (email, SMS, webhooks, Logic Apps, etc.)  

4. **Hybrid Monitoring**  
   - Connecting on-premises servers to Azure Monitor  
   - Collecting performance counters & security logs  

---

## ✅ Summary

- **Correct Answer:** **C. Metric signal type**  
- **Why Correct:** Metric alerts allow **dimensions**, have **fast creation times**, and provide **single notification on trigger and resolution**.  
- **Why Others Are Wrong:**  
  - A → Activity Logs only track management events.  
  - B → Application Logs are app-level only.  
  - D → Audit Logs are for compliance/security events, not metrics.  

➡️ Always use **Metric Alerts** when monitoring **performance counters with dimensions**.  

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


