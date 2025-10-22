# Difference Between Azure Account, Tenant, and Subscription

## 1️⃣ Azure Account (User Identity)

* Represents the **user login** (email identity) used to access Azure.
* You can sign in using **Microsoft account** or **Gmail via Microsoft sign-in**.
* One Azure account can have **multiple tenants and subscriptions**.

✅ Example:
`john@gmail.com` or `admin@contoso.com` is an Azure account.

---

## 2️⃣ Azure Tenant (Azure AD / Microsoft Entra ID)

* A **directory** that stores **users, groups, apps, and identities**.
* Created automatically when you sign up for Azure.
* Managed by **Microsoft Entra ID (formerly Azure AD)**.
* A tenant can have **one or more subscriptions** linked to it.

✅ Think of Tenant as:
"An organization's identity and security boundary."

---

## 3️⃣ Azure Subscription (Billing + Resource Boundary)

* A **billing container** for Azure resources.
* Every resource (VM, AppService, Function etc.) must live **inside a subscription**.
* Controls **billing, spending limit, quotas, and access**.
* One tenant can contain **multiple subscriptions**.

✅ Example types of subscriptions:

* Free Trial
* Pay-as-you-Go
* Visual Studio/Developer Subscription
* Sponsorship

---

## 🔁 Relationship Overview

| Term             | Purpose                       | Example           |
| ---------------- | ----------------------------- | ----------------- |
| **Account**      | User identity used to sign in | `user@gmail.com`  |
| **Tenant**       | Directory + security boundary | Contoso Directory |
| **Subscription** | Billing + resource container  | Pay-as-you-Go     |

---

## 🔗 Visual Concept Mapping

```
Azure Account (user/email)
       │
       └── Tenant (Microsoft Entra ID Directory)
               │
               └── Subscription (Billing boundary + resources)
```

---

## ✅ Interview Tip

**Account = Who logs in**
**Tenant = Who owns identities**
**Subscription = Who pays for resources**

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


