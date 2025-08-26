# AZ-204 Exam – Azure Cognitive Search & Query Parameters

This document explains a question from the AZ-204 exam about using **Azure Cognitive Search** in a .NET Core MVC application.

---

## 📘 Topic Overview: Azure Cognitive Search

### What is Azure Cognitive Search?
- A **search-as-a-service** cloud solution from Microsoft Azure.  
- Provides **indexing and querying** of structured and unstructured data.  
- Allows developers to implement powerful search features without building a search engine from scratch.  

### Key Features
- Full-text search across documents.  
- Supports **filters, facets, scoring, and sorting**.  
- Advanced queries with **Lucene syntax** (wildcards, fuzzy search, regex, proximity).  
- Integrates with data from SQL, Cosmos DB, Blob Storage, and more.  

---

## ❓ Question

**Scenario:**  
You are developing a **.NET Core MVC application** that allows customers to research independent holiday accommodation providers.  

- You want to implement **Azure Search** to allow the application to search the index by using various criteria to locate documents.  
- The application must allow customers to search the index by using **regular expressions**.  

**Question:**  
What should you do?  

**Options:**  
A. Configure the **SearchMode** property of the `SearchParameters` class.  
B. Configure the **QueryType** property of the `SearchParameters` class.  
C. Configure the **Facets** property of the `SearchParameters` class.  
D. Configure the **Filter** property of the `SearchParameters` class.  

**Correct Answer:** ✅ **B. Configure the QueryType property of the SearchParameters class**  

---

## ✅ Why Answer B is Correct

- The **QueryType property** determines the syntax of the search query.  
- By default, it is set to **"simple"** (basic keyword search).  
- To use **Lucene query syntax**, including **wildcards, fuzzy search, proximity, and regular expressions**, you must set:  

```csharp
searchParameters.QueryType = QueryType.Full;
````

* This enables advanced search capabilities such as regex.

**Reference:**

* [SearchParameters.QueryType Documentation](https://docs.microsoft.com/en-us/dotnet/api/microsoft.azure.search.models.searchparameters.querytype)

---

## ❌ Why the Other Options Are Incorrect

**A. SearchMode property**

* Determines how multiple search terms are combined (**any** vs **all**).
* Example: `"hotel beach"` could return docs with either word or require both.
* ❌ Does not enable regex search.

**C. Facets property**

* Used for **faceted navigation** (grouping/filtering by categories like price, location, rating).
* Example: Show "10 accommodations in Spain, 5 in Italy".
* ❌ Not related to regex queries.

**D. Filter property**

* Applies **structured filters** using OData syntax (e.g., `price lt 100 and rating ge 4`).
* Used for narrowing results by fields/values, not regex.
* ❌ Does not allow regex queries.

---

## 📚 Topics to Study in Azure for This Question

To fully understand this area, focus on:

1. **Azure Cognitive Search Basics**

   * Indexes, documents, fields
   * Data sources & indexers

2. **Search Query Parameters**

   * `SearchMode`
   * `QueryType` (Simple vs Full Lucene syntax)
   * `Facets`
   * `Filter`

3. **Lucene Query Syntax in Azure Search**

   * Wildcards (`ho*el`)
   * Fuzzy search (`hotel~`)
   * Proximity search (`"beach hotel"~5`)
   * Regular expressions (`/h[ot]{2}el/`)

4. **.NET SDK for Azure Search**

   * Using `SearchParameters` in C#
   * Query construction & result handling

---

## ✅ Summary

* **Correct Answer:** **B. QueryType**
* **Why Correct:** Required to enable **Lucene syntax**, which allows **regex search**.
* **Why Others Are Wrong:**

  * A → Combines search terms, no regex.
  * C → Used for facets/categories.
  * D → Structured filters only, not regex.

➡️ Always configure `QueryType = Full` when you need **advanced search queries (regex, fuzzy, proximity)** in **Azure Cognitive Search**.

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


