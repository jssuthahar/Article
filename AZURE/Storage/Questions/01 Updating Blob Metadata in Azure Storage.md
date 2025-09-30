# 📦  Updating Blob Metadata in Azure Storage

This README explains how to **update blob metadata** in **Azure Blob Storage**.
We’ll cover the **exam-style DRAG & DROP question**, correct answer order, detailed concepts, and code examples.

---

## ❓ Question

You have an application that uses **Azure Blob Storage**.
You need to **update the metadata of the blobs**.

**Which three methods should you use to develop the solution?**
👉 To answer, move the appropriate methods from the list of methods to the answer area and arrange them in the correct order.

---

## ✅ Correct Answer (Order Matters)

1. **Metadata.Add**

   * Add key/value pairs to the metadata dictionary.

2. **SetMetadataAsync**

   * Apply the metadata to the blob in Azure Storage.

3. **SetPropertiesAsync**

   * Save the changes by updating blob properties (commits updates).

---

## 📝 Detailed Explanation of Concepts

### 🔹 What is Blob Metadata?

* Metadata in Azure Blob Storage = **custom key-value pairs** that describe a blob.
* Example: `"docType=textDocuments"` or `"author=John"`.
* Metadata is stored with the blob but is **not part of the blob content**.

### 🔹 Why Do We Use Metadata?

* Helps **categorize, search, and manage** blobs.
* Example:

  * Store `"project=AIApp"` for all files related to your AI app.
  * Quickly filter blobs by `"environment=production"`.

### 🔹 Methods Used

#### 1. `metadata.Add(key, value)`

* Add custom metadata into a dictionary before applying it.

```csharp
metadata.Add("docType", "textDocuments");
metadata.Add("author", "Suthahar");
```

---

#### 2. `await blob.SetMetadataAsync(metadata)`

* Push metadata from the dictionary to the actual blob in Azure.

```csharp
await blob.SetMetadataAsync(metadata);
```

---

#### 3. `await blob.SetPropertiesAsync()`

* Commit/save blob changes (ensures metadata & properties are persisted).

```csharp
await blob.SetPropertiesAsync();
```

---

## 💻 Full Example Code (C#)

```csharp
// 1. Create metadata dictionary
IDictionary<string, string> metadata = new Dictionary<string, string>();
metadata.Add("docType", "textDocuments");
metadata.Add("author", "Suthahar");

// 2. Set the blob metadata
await blob.SetMetadataAsync(metadata);

// 3. Commit the blob properties
await blob.SetPropertiesAsync();

Console.WriteLine("✅ Metadata updated successfully!");
```

---

## 👶 Kid-Friendly Story

Imagine you have a **box full of toys** 🧸:

1. First, you **stick labels** on the box (metadata.Add → `"color=red"`, `"type=lego"`).
2. Then, you **tell the storage keeper**: "Here are the labels for my toy box" (SetMetadataAsync).
3. Finally, the keeper **writes the labels in the record book** so they are saved forever (SetPropertiesAsync).

Now, anyone who checks the storage can know **what’s inside** without opening the box! 🎁

---

## 📚 Reference

* [Azure Storage Blob Properties and Metadata](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-properties-metadata)

---

## ✅ Summary

* Use **Metadata.Add** to define metadata.
* Use **SetMetadataAsync** to apply it.
* Use **SetPropertiesAsync** to commit/save it.
* Metadata = key-value pairs describing your blob.
* Helps organize and manage blobs effectively.

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


