# ✅ Day 2 – Azure Free Account & Portal Basics

## 📌 What You Will Learn Today

1. How Azure Free Account works
2. Azure Portal walkthrough
3. Difference between **Account vs Tenant vs Subscription**
4. What is an Azure Subscription (Billing scope)
5. How everything connects together

---

## 1️⃣ Azure Free Account – Quick Overview

Azure provides a **free account** so beginners and developers can explore services without billing risk.

| Feature          | Details                                       |
| ---------------- | --------------------------------------------- |
| Free credit      | 12 months free + USD 200 credit for 30 days   |
| Who can create   | Anyone with Gmail / Outlook / corporate email |
| Purpose          | Learning, POC, sandbox environment            |
| Billing required | Card verification needed                      |

✅ You don’t get charged until you **upgrade** to Pay-as-you-Go.

---

## 2️⃣ Azure Portal – Your Cloud Dashboard

Azure Portal is the **web interface** to manage cloud services.

| UI Section           | Description                                          |
| -------------------- | ---------------------------------------------------- |
| Top right corner     | View/Edit Account, Directory/Tenant switch, Settings |
| Left navigation menu | All Azure services and categories                    |
| Search bar           | Quickly find services or resources                   |
| Notification bell    | Service alerts, deployments, errors                  |
| All Resources        | Lists every deployed Azure resource across services  |

Common Services:

* ✅ App Services → Web apps
* ✅ Function Apps → Serverless APIs
* ✅ Storage Accounts → Files, Blobs, Queues
* ✅ Databases → SQL, Cosmos, PostgreSQL

---

## 3️⃣ Account vs Tenant vs Subscription

| Concept         | Definition                                  | Example                                         |
| --------------- | ------------------------------------------- | ----------------------------------------------- |
| Azure Account   | Your login identity                         | [suthahar@gmail.com](mailto:suthahar@gmail.com) |
| Azure AD Tenant | A secure identity boundary for users & apps | suthahargmail.onmicrosoft.com                     |
| Subscription    | Billing and resource container              | Pay-As-You-Go                                   |

📌 **Tenant = Security/Identity boundary**
📌 **Subscription = Billing/Resource boundary**

You can have:

* One account → multiple tenants
* One tenant → multiple subscriptions
* One subscription → many Azure services

---

## 4️⃣ What is a Subscription?

A subscription defines **billing**, **limits/quotas**, and **resource isolation**.

| Use Case                  | Why Subscription is used                        |
| ------------------------- | ----------------------------------------------- |
| Development vs Production | Different cost and access control               |
| Multiple departments      | HR, IT, Finance can have separate subscriptions |
| Security boundaries       | If one subscription fails, others are safe      |

💡 In real companies:

* Finance Dept → Finance Subscription
* IT Dept → IT Subscription
* Analytics Team → Data Subscription

---

## 5️⃣ How They All Connect (Big Picture)

```
Azure Account (Email/Login)
        │
        └── Azure AD Tenant (Identity boundary)
                   │
                   └── Subscription (Billing & resources)
                             │
                             └── Services (VM, WebApp, DB, etc)
```

This is a very important foundation for all future Azure learning.

---

## ✅ Summary (Interview Ready)

| Question                               | Answer                                        |
| -------------------------------------- | --------------------------------------------- |
| What is Tenant?                        | Identity boundary (Azure AD for users & apps) |
| What is Subscription?                  | Billing + Resource boundary                   |
| Can 1 tenant have many subscriptions?  | Yes                                           |
| Can 1 account create multiple tenants? | Yes                                           |
| Why MS gives free account?             | Learning + sandbox + POC                      |

---

## 6️⃣ Real-Life Business Example

A multinational company like **Contoso Ltd** can have:

| Layer                     | Implementation                      |
| ------------------------- | ----------------------------------- |
| One Azure AD Tenant       | contoso.onmicrosoft.com             |
| Multiple Subscriptions    | Dev, Test, Prod, Finance, HR        |
| Different Access Controls | HR team only inside HR subscription |

```
Tenant (Identity)
 ├── Dev Subscription → Developers
 ├── Prod Subscription → Production Apps
 └── Finance Subscription → Finance workloads
```

This separation improves **cost tracking**, **security**, and **blast radius isolation**.


---

## 🔗 Reference Links (Day 2 Resources)

| Topic                             | Link                                                                                                                                                                                                                                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Azure Learning Guide              | [https://github.com/jssuthahar/Article/blob/main/AZURE/Basic/01%20Azure%20Learning%20Guide%20with%20Microsoft%20Learn.md](https://github.com/jssuthahar/Article/blob/main/AZURE/Basic/01%20Azure%20Learning%20Guide%20with%20Microsoft%20Learn.md)                                         |
| Azure Portal – Quick Start Guide  | [https://github.com/jssuthahar/Article/blob/main/AZURE/04%20Azure%20Portal%20%E2%80%93%20Quick%20Get%20Started%20Guide.md](https://github.com/jssuthahar/Article/blob/main/AZURE/04%20Azure%20Portal%20%E2%80%93%20Quick%20Get%20Started%20Guide.md)                                       |
| Account vs Tenant vs Subscription | [https://github.com/jssuthahar/Article/blob/main/AZURE/05%20%20Difference%20Between%20Azure%20Account%2C%20Tenant%2C%20and%20Subscription.md](https://github.com/jssuthahar/Article/blob/main/AZURE/05%20%20Difference%20Between%20Azure%20Account%2C%20Tenant%2C%20and%20Subscription.md) |
| Azure Subscription Overview       | [https://github.com/jssuthahar/Article/blob/main/AZURE/04%20Introduction%20to%20Azure%20Subscription.md](https://github.com/jssuthahar/Article/blob/main/AZURE/04%20Introduction%20to%20Azure%20Subscription.md)                                                                           |

---

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


