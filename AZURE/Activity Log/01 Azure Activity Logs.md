# Azure Activity Logs

## 📌 What is Azure Activity Log?

Azure Activity Log is a record of all control-plane operations performed on resources in your Azure subscription. It helps you understand **what actions were taken**, **who performed them**, and **when they occurred**. This log is essential for auditing, monitoring, and troubleshooting activities in Azure.

Unlike **Resource Logs** (which capture data-plane operations inside a resource), the Activity Log records **management operations** such as creating, updating, deleting, or assigning roles to resources.

---

## 🔑 Key Features

* **Tracks Write, Update, and Delete actions** on resources.
* Provides details on **who initiated the action**, their IP, and timestamp.
* Retained by default for **90 days**.
* Can be sent to **Azure Monitor, Log Analytics, Event Hub, or Storage Account** for long-term retention.

---

## 📂 Activity Log Categories

1. **Administrative** – Create, update, delete, or role assignments.
2. **Service Health** – Outages, planned maintenance.
3. **Resource Health** – Availability of individual resources.
4. **Alert** – Triggered alerts.
5. **Autoscale** – Scaling actions.
6. **Recommendation** – Azure Advisor suggestions.

---

## ⚙️ How to Access Activity Logs

1. Sign in to the **Azure Portal**.
2. Go to **Monitor** > **Activity Log**.
3. Use filters such as subscription, resource group, time range, or event severity.
4. Export logs to:

   * **Log Analytics Workspace** (for advanced queries)
   * **Storage Account** (for long-term archival)
   * **Event Hub** (for streaming to external SIEM tools)

---

## 📘 Common Use Cases

* **Auditing** – Who deleted a resource? Who changed permissions?
* **Security** – Detect unauthorized access attempts.
* **Troubleshooting** – Find out why a deployment failed.
* **Compliance** – Retain logs for governance and regulatory needs.

---

## 📊 Interview Questions and Answers

### Q1. What is the difference between Azure Activity Log and Resource Logs?

**Answer:** Activity Logs track **control-plane (management)** actions such as creating or deleting a VM. Resource Logs capture **data-plane (operational)** actions, e.g., querying a database or accessing storage blobs.

### Q2. How long are Azure Activity Logs retained by default?

**Answer:** 90 days. For longer retention, they must be exported to Storage Account, Log Analytics, or Event Hub.

### Q3. Can you get Resource Health events in Activity Log?

**Answer:** Yes. Activity Logs include **Resource Health events**, which show if a resource is available or experiencing downtime.

### Q4. How can Activity Logs help in security monitoring?

**Answer:** They record **who performed an action** and from **which IP address**. This helps detect suspicious activities like unauthorized role assignments.

### Q5. How do you integrate Activity Logs with SIEM tools?

**Answer:** By exporting them to **Azure Event Hub**, which can stream logs to third-party SIEM solutions (e.g., Splunk, Sentinel).

### Q6. Can Activity Logs be queried using KQL (Kusto Query Language)?

**Answer:** Yes, if you send logs to a **Log Analytics Workspace**, you can query them with KQL for advanced analytics.

### Q7. What kind of events are not captured in Activity Logs?

**Answer:** Data-plane activities (like reading a blob or running a SQL query) are not captured. Those are covered by **Resource Logs**.

---

## ✅ Summary

* **Azure Activity Logs** = Control-plane (management) operations.
* Retention: **90 days by default**.
* Export to **Log Analytics, Storage, Event Hub** for extended use.
* Useful for **auditing, security, troubleshooting, and compliance**.

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


