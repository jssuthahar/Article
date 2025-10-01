## Question

**Scenario:**
An organization deploys **Azure Cosmos DB**. You need to ensure that the **index is updated immediately** as items are **created, updated, or deleted**.

**Question:** What should you do?

**Options:**
A. Set the indexing mode to Lazy.
B. Set the value of the automatic property of the indexing policy to False.
C. Set the value of the EnableScanInQuery option to True.
D. Set the indexing mode to Consistent.

**Correct Answer:**
**D. Set the indexing mode to Consistent**

---

### Explanation

**Indexing modes in Azure Cosmos DB:**

| Indexing Mode  | Description                                                                                                                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Consistent** | The index is **updated synchronously** whenever items are created, updated, or deleted. This ensures that **query results always reflect the latest data**, respecting the account's consistency level. ✅ |
| **Lazy**       | The index is updated **asynchronously**. Queries may return **stale results** until the index catches up. ❌                                                                                               |
| **None**       | Indexing is disabled; queries must use **manual scans** or filtering. ❌                                                                                                                                   |

**Other options:**

* **Automatic property = False** → disables automatic indexing; not suitable here. ❌
* **EnableScanInQuery = True** → allows queries that scan the container even if items are not indexed; does not guarantee immediate index updates. ❌

---

**Reference:**
[Azure Cosmos DB Indexing Policies](https://learn.microsoft.com/en-us/azure/cosmos-db/index-policy)



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
to do that?
