
# 🧭 Azure  — Delete and Move Resources (Step-by-Step Guide)

## 📘 Overview

The **Azure Portal** provides a visual and user-friendly interface to manage your cloud resources.
This guide explains how to **delete** and **move** Azure resources **safely and effectively using only the Portal**, including **rules, limitations, and best practices**.

---

## 🧹 Part 1: Deleting Azure Resources in the Portal

### 🔍 What Does "Delete" Mean?

Deleting a resource in the Azure Portal **permanently removes** it from your subscription.
Once deleted, you **cannot recover it**, unless that specific service has a **soft-delete** or **retention policy** (like Key Vault or Blob Storage).

---

### ⚙️ Steps to Delete a Resource

#### 🪶 Option 1 — Delete a Single Resource

1. **Go to Azure Portal** → [https://portal.azure.com](https://portal.azure.com)
2. Navigate to the **resource** (e.g., Virtual Machine, Storage Account, Web App).
3. On the **Overview** page, click **Delete** on the top menu bar.
4. Type the **resource name** to confirm deletion.
5. Click **Delete** to permanently remove the resource.

💡 **Tip:** The portal always asks for confirmation before deletion to prevent mistakes.

---

#### 🧱 Option 2 — Delete an Entire Resource Group

Deleting a resource group removes **all resources** inside it (VMs, Networks, IPs, etc.) together.

**Steps:**

1. Navigate to **Resource Groups** in the portal sidebar.
2. Select the **resource group** you want to delete.
3. Click **Delete resource group** at the top.
4. Type the exact **resource group name** for confirmation.
5. Click **Delete**.

⚠️ **Warning:** This is irreversible. Always review the resources listed before confirming.

---

### 🔒 Check for Locks Before Deletion

Some resources or resource groups might be **protected by locks** that prevent deletion.

**To check and remove locks:**

1. Go to the **resource** or **resource group**.
2. In the left menu, select **Locks**.
3. Delete any locks of type:

   * `CanNotDelete` → Prevents deletion
   * `ReadOnly` → Prevents changes and deletion

Then try deleting again.

---

### ♻️ Soft Delete and Recovery (Portal Based)

Some Azure services allow recovery even after deletion:

| Service                    | Feature     | How to Recover                                     |
| -------------------------- | ----------- | -------------------------------------------------- |
| **Key Vault**              | Soft Delete | Go to "Deleted Vaults" and restore                 |
| **Storage Account (Blob)** | Soft Delete | Use “Blob Restore” in the Storage Account          |
| **Azure Backup**           | Retention   | View old backup items from Recovery Services Vault |

💡 Always check if your service has **soft-delete** enabled before deleting.

---

### ✅ Best Practices Before Deleting

* Review **dependencies** (e.g., deleting a VNet might affect multiple VMs).
* Apply **tags** to track ownership and avoid deleting critical resources.
* Use **Activity Log** to confirm who deleted or modified a resource.
* Set **Locks** on production resources to avoid accidental deletion.

---

## 🔄 Part 2: Moving Azure Resources in the Portal

### 🚀 What is a Resource Move?

Moving a resource means transferring it to a **different resource group or subscription** within the same Azure AD tenant.
This helps in **organizing resources**, **billing separation**, or **project migration**.

---

### ⚙️ Steps to Move a Resource in Azure Portal

#### 🪶 Option 1 — Move to Another Resource Group

1. Open the **Azure Portal** → Go to your resource.
2. In the left panel, select **Change Resource Group** or **Move**.
3. Choose **Move to another resource group**.
4. Select the **destination resource group**.
5. Review the list of **dependent resources** (if any).
6. Click **OK** → then **Move**.

💡 The portal validates all dependencies automatically before the move begins.

---

#### 🧭 Option 2 — Move to Another Subscription

1. Open the resource in Azure Portal.
2. Click **Move → Move to another subscription**.
3. Choose:

   * **Destination subscription**
   * **Destination resource group**
4. Wait for the **validation check**.
5. Once validated, click **Move**.

⚠️ Some resources **cannot** move across subscriptions (e.g., Recovery Services Vaults, Azure AD resources).

---

### 🧩 Validation Rules and Limitations

* You **must** have **Owner** or **Contributor** permissions on both source and destination.
* **Locks** must be removed before moving.
* **Dependent resources** (like VM + NIC + Disk) must be moved together.
* Both source and target subscriptions must be under the **same Azure AD tenant**.
* Not all resources can be moved between **regions** through the portal (region moves often require redeployment).

---

### 🔍 How to Check Move Eligibility

1. Select your resource in the Portal.
2. Click **Move → Move to another resource group or subscription**.
3. Azure runs **automatic validation**.

   * ✅ If supported → Proceed with move
   * ❌ If not → The portal lists reasons and unsupported dependencies

---

### 🧠 Best Practices for Resource Moves

* Always perform moves **during maintenance windows** for production workloads.
* Verify **role assignments and permissions** post-move.
* Update **automation scripts**, **monitoring**, and **tags** to reflect the new location.
* Use **Activity Log** to track all move operations.

---

## 📋 Summary

| Operation                 | Purpose                                   | Caution                              |
| ------------------------- | ----------------------------------------- | ------------------------------------ |
| **Delete Resource**       | Permanently removes unwanted resources    | Check dependencies and locks         |
| **Delete Resource Group** | Removes all resources in one action       | Irreversible                         |
| **Move Resource**         | Transfer between RGs or subscriptions     | Some types not supported             |
| **Soft Delete**           | Allows recovery after accidental deletion | Available only for selected services |

---

## 🛡️ Final Tips

* 🏷️ Always tag your resources (Owner, Environment, Project).
* 🔐 Use **Resource Locks** for protection.
* 🧾 Review **Cost Management + Advisor** regularly to delete idle resources.
* 🧰 For large operations, validate in **Portal → Move → Validation Tool** before execution.

---

### 📚 Reference

* [Azure Portal Documentation](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/move-resource-group-and-subscription)
* [Azure Resource Locks](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources)
* [Azure Resource Deletion and Recovery](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/delete-resource-group)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
