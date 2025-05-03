# Introduction to Azure Subscription

Welcome to this guide on **Azure Subscription** — the foundation of using Microsoft Azure. In this session, you'll learn what an Azure subscription is, why it's important, how billing works, and how to manage access and limits effectively.

---

## 🔑 What is an Azure Subscription?

An **Azure Subscription** is an agreement with Microsoft to use Azure services. It acts as a **container** for:
- Resources (VMs, storage, databases, etc.)
- Billing and payment
- Access control

> 📦 Think of it like a utility account — you use services and get billed monthly.

---

## 🧱 Hierarchy in Azure

```plaintext
Azure Account (Email / Microsoft ID)
│
├── Subscription(s)
│   ├── Resource Groups
│   │   └── Resources
````

You can have **multiple subscriptions** under one Azure account.

---

## 💳 Types of Azure Subscriptions

| Subscription Type | Description                                    |
| ----------------- | ---------------------------------------------- |
| Free Trial        | ₹13,300 (\$200) free credit for 30 days        |
| Pay-As-You-Go     | Pay only for what you use                      |
| Student           | Free \$100 credit with no credit card required |
| Enterprise        | For large organizations (via volume licensing) |
| CSP               | Through Cloud Solution Providers (resellers)   |

---

## 🧾 Billing & Cost Management

Each subscription has its **own billing**:

* You can view costs in the **Azure Cost Management** blade.
* Set **budgets** and **alerts** to avoid overspending.
* Billing is based on usage of services like compute, storage, networking, etc.

---

## 👥 Access Control (RBAC)

You can **assign roles** to users at the subscription level:

* **Owner** – full control (including billing)
* **Contributor** – can manage resources, but not billing
* **Reader** – view-only access

> ✅ Best practice: Use **least privilege** when assigning roles.

---

## 📌 Subscription Limits & Quotas

Each subscription comes with **default limits**, e.g.:

* 10,000 resource groups
* 250 storage accounts
* VM quotas by region

These can usually be **increased by request**.

---

## 🧪 Real-Life Example

### Scenario:

You’re managing two projects:

* One for internal use by Chennai office
* One for public users in Bangalore

You create:

* `ChennaiDev Subscription` – for internal tools
* `BangaloreApp Subscription` – for the customer-facing app

Each subscription has its **own billing, access control, and limits**.

---

## 📊 Why Use Multiple Subscriptions?

| Use Case                     | Benefit                               |
| ---------------------------- | ------------------------------------- |
| Separate billing per project | Easier cost tracking                  |
| Different access teams       | Improve security                      |
| Environment isolation        | Separate prod/test environments       |
| Legal or compliance needs    | Isolate data for audit/region reasons |

---

## ✅ Summary

| Concept            | Description                               |
| ------------------ | ----------------------------------------- |
| Azure Subscription | Container for billing, usage, and access  |
| Billing Scope      | Usage tracked and billed per subscription |
| Access Control     | Use RBAC to assign roles                  |
| Limits & Quotas    | Each subscription has usage caps          |

---

## 🔗 Useful Links

* [What is an Azure Subscription? (MS Docs)](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/create-subscription)
* [Azure Free Trial](https://azure.microsoft.com/en-in/free/)
* [Azure Student Offer](https://azure.microsoft.com/en-in/free/students/)

---

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
