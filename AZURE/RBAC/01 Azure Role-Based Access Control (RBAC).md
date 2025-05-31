# Azure Role-Based Access Control (RBAC)

## Overview

Azure Role-Based Access Control (RBAC) is a system that provides fine-grained access management for Azure resources. It allows you to grant only the amount of access that users need to perform their jobs, following the principle of **least privilege**.

---

## 🔐 What is RBAC?

RBAC in Azure helps manage **who can access what** Azure resources, at **which scope**, and **what actions they can perform**.

RBAC is based on **three key elements**:

1. **Role Definition** – What actions can be performed?
2. **Security Principal** – Who can perform the action?
3. **Scope** – Where can the action be performed?

---

## 🔸 Role Definitions

A role definition is a collection of permissions. Roles define the set of actions (create, read, update, delete) that can be performed on Azure resources.

| **Role Name**                 | **Description**                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------- |
| **Owner**                     | Full access to all resources, including the right to delegate access to others. |
| **Contributor**               | Can create and manage all types of Azure resources but cannot grant access.     |
| **Reader**                    | Can view existing Azure resources. Cannot make changes.                         |
| **User Access Administrator** | Can manage user access to Azure resources.                                      |
| **Storage Blob Contributor**  | Full access to Azure Storage blob containers and data.                          |
| **VM Contributor**            | Manage virtual machines but not access them.                                    |
| **Network Contributor**       | Manage networks but not access them.                                            |

---

## 🧑 Security Principals

These are the identities that request access to Azure resources:

| **Type**              | **Description**                  | **Example Use Case**                        |
| --------------------- | -------------------------------- | ------------------------------------------- |
| **User**              | Individual in Azure AD           | Developer accessing Azure portal            |
| **Group**             | Collection of users              | Team with shared access to a resource group |
| **Service Principal** | App identity to access resources | CI/CD pipeline accessing Azure Key Vault    |
| **Managed Identity**  | System-managed service principal | Azure Function accessing Azure SQL Database |

---

## 🗺️ Scope

In Azure, **scope** refers to the level at which access is granted. You can assign roles at:

| **Scope Level**      | **Description**                 |
| -------------------- | ------------------------------- |
| **Management Group** | Controls multiple subscriptions |
| **Subscription**     | Billing and management boundary |
| **Resource Group**   | Container for related resources |
| **Resource**         | Individual Azure services       |

> 🔹 The lower the scope, the more specific the access.

---

## 🧩 Role Assignment

A **role assignment** is the link between:

* a **role definition**
* a **security principal**
* and a **scope**

### Example:

> 🔹 Assign "Virtual Machine Contributor" to a service principal at the "Resource Group" level
> 🔹 This allows the application to manage VMs in that resource group only

---

## 💼 Real-World Use Case Example

### Scenario:

A company is deploying a web application using CI/CD with Azure DevOps and has multiple environments: Dev, Test, and Prod.

### Setup:

* **Dev Team (Group)**: Assigned **Contributor** role at the **Dev Resource Group** scope.
* **Azure DevOps Pipeline (Service Principal)**: Assigned **Contributor** role to deploy resources to **Test RG**.
* **Operations Team**: Assigned **Reader** on **Prod RG** and **VM Contributor** to manage VM scale-up/down.
* **Azure Function** using **Managed Identity**: Granted access to **Azure SQL DB** for data processing.

---

## 💡 Best Practices

* Use **least privilege** principle.
* Assign roles to **groups** instead of individual users.
* Use **built-in roles** unless custom roles are necessary.
* Monitor and audit access using **Azure Activity Logs**.

---

## 📌 Summary

RBAC provides a secure and flexible way to manage Azure resource access.
It enables you to control **who can do what, where**, ensuring your infrastructure remains protected and compliant.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
