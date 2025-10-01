You are developing an application that uses a **premium block blob storage account**. The application processes a **large volume of transactions daily**.

* **Blob storage versioning** is enabled.
* You are optimizing costs by automating **Blob Storage access tiers**.
* Lifecycle management policy rules have been applied to the storage account.

**Question:** For each of the following statements, select **Yes** if true; otherwise, **No**.

---

### Correct Answers

| Box       | Answer  | Explanation                                                                                                                                            |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Box 1** | **No**  | The rule uses **daysAfterCreationGreaterThan**, not **daysAfterModificationGreaterThan**. So it doesn’t trigger based on modification date.            |
| **Box 2** | **No**  | To act on the last access time, the policy must use **daysAfterLastAccessTimeGreaterThan**, which is not used here.                                    |
| **Box 3** | **Yes** | This statement aligns with the configured lifecycle management policy. ✅                                                                               |
| **Box 4** | **Yes** | Lifecycle management allows **transitioning blobs from cool to hot immediately when accessed**, optimizing performance for frequently accessed data. ✅ |

---

### Explanation

* **Lifecycle management policies** in Azure Blob Storage automate:

  * Transitioning blobs between **hot, cool, and archive tiers**.
  * Deleting older blobs or previous blob versions.
* **Predicates used in policies**:

  * `daysAfterCreationGreaterThan` → triggers after a blob is created.
  * `daysAfterModificationGreaterThan` → triggers after a blob is modified.
  * `daysAfterLastAccessTimeGreaterThan` → triggers based on last access time (preview).
* **Premium block blob accounts** support lifecycle policies to optimize performance **without manual intervention**.

---

**Reference:**
[Azure Blob Storage Lifecycle Management Overview](https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview)

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
