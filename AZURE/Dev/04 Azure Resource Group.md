
# 🌐 Azure Resource Group

## 🧩 What is a Resource Group?

A **Resource Group (RG)** is a **logical container** in Azure that stores related resources such as:

* Virtual Machines
* Databases
* Storage Accounts
* Web Apps, etc.

It helps organize and manage all your Azure resources together.

---

## 🪄 Simple Example

Imagine you have an app called **ShopApp**.
You can create:

```
Resource Group → rg-shopapp-dev
```

Inside it, you add:

* 1 Web App
* 1 SQL Database
* 1 Storage Account

All are part of **one project**, so you manage them as a single group.

---

## 🧠 Key Points to Remember

| Concept           | Description                                        |
| ----------------- | -------------------------------------------------- |
| Logical container | It only groups resources, doesn’t store data       |
| Lifecycle         | Deleting RG deletes all resources inside it        |
| Access Control    | RBAC (role-based access) can be set at RG level    |
| Location          | RG itself has a region (metadata location)         |
| Billing           | RG is **not** a billing boundary (Subscription is) |

---

## 🎯 Why Use a Resource Group?

| Purpose            | Benefit                                          |
| ------------------ | ------------------------------------------------ |
| Organization       | Group related resources together                 |
| Access control     | Assign permissions for the whole group           |
| Cost management    | Apply tags for tracking cost                     |
| Cleanup            | Delete all related resources easily              |
| Policy application | Apply governance (like naming rules or security) |

---

## ⚙️ Simple Rules

1. A resource **must belong** to one and only one RG.
2. Resources in an RG can be in **different regions**.
3. Most resources can be **moved** between RGs.
4. If you **delete the RG**, all its resources are also deleted.
5. RG can hold **up to 980** resource groups per subscription (default limit).

---

## 📘 Example Diagram

```
Subscription
   ├── Resource Group (rg-shopapp-dev)
   │       ├── Web App
   │       ├── SQL Database
   │       └── Storage Account
   ├── Resource Group (rg-shopapp-prod)
           ├── Web App
           ├── SQL Database
           └── Storage Account
```

---

## 💬 Common Interview / AZ-204 Questions

| Question                                      | Answer                                |
| --------------------------------------------- | ------------------------------------- |
| What is a Resource Group?                     | Logical container for Azure resources |
| Can a resource exist in multiple RGs?         | ❌ No                                  |
| What happens if you delete RG?                | All resources inside are deleted      |
| Can RG and resources be in different regions? | ✅ Yes                                 |
| Is RG a billing boundary?                     | ❌ No                                  |
| How many RGs can we create?                   | Up to **980** per subscription        |
| Can we move resources to another RG?          | ✅ Yes (most can be moved)             |

---

## 🧭 Quick Memory Tip

🧱 **Resource Group = Project Folder** in Azure
Everything related to your app stays inside it!

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
