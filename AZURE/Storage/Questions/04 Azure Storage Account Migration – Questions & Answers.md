# Azure Storage Account Migration – Questions & Answers

## Question 1

**Scenario:**

You develop and deploy a web application to Azure App Service. The application accesses data stored in an Azure Storage account. The account contains several containers with several blobs with large amounts of data. You deploy all Azure resources to a single region.

You need to move the Azure Storage account to a new region. You must copy all data to the new region.

**Question:** What should you do **first**?

**Options:**
A. Export the Azure Storage account Azure Resource Manager template
B. Initiate a storage account failover
C. Configure object replication for all blobs
D. Use the AzCopy command line tool
E. Create a new Azure Storage account in the current region
F. Create a new subscription in the current region

**Correct Answer:**
**A. Export the Azure Storage account Azure Resource Manager template**

---

### Question Explanation

* The goal is to **move a storage account to a new region**.
* Azure does **not allow direct regional moves** of storage accounts.
* Therefore, the recommended approach is to **create a copy of the storage account in the new region** and then move the data.
* The ARM template export captures all configuration of the existing storage account, which you can modify to deploy a **new account in the target region**.

---

### Answer Explanation

**A. Export the Azure Storage account Azure Resource Manager template** ✅

* This is the **first step** because it saves all settings (SKU, replication type, networking rules, tags, etc.) in a deployable format.
* After exporting, you can modify the template to change the region and deploy a **new storage account in the target region**.

**B. Initiate a storage account failover** ❌

* Failover is only for **geo-redundant storage accounts (GRS/RA-GRS)**.
* It does not create a storage account in a new region; it just switches access to the secondary region if already configured.

**C. Configure object replication for all blobs** ❌

* Object replication **requires a target storage account** first.
* It cannot be the first step since you don’t yet have a new account in the target region.

**D. Use the AzCopy command line tool** ❌

* AzCopy is used to **transfer data** after the new storage account exists.
* Not the first step.

**E. Create a new Azure Storage account in the current region** ❌

* The target storage account must be in the **new region**, not the current region.

**F. Create a new subscription in the current region** ❌

* Changing subscriptions is unnecessary for migrating storage across regions.

---

### Recommended Migration Sequence

1. **Export ARM template** of the existing storage account (captures configuration).
2. **Modify the template** to deploy a new storage account in the target region.
3. **Deploy the new storage account**.
4. **Copy all data** using AzCopy or object replication.
5. **Update web app** to use the new storage account if needed.
6. **Delete the old storage account** if it is no longer needed.

---

**Reference:**
[Move Azure Storage account to another region](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-move?tabs=azure-portal)

---
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
