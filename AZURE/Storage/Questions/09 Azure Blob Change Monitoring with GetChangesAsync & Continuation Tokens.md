
# 📦 Azure Blob Change Monitoring with GetChangesAsync & Continuation Tokens

This project demonstrates how to **monitor and process changes** in an Azure Blob Storage account using the **Change Feed**.  
It shows how to use `GetChangesAsync()` and **continuation tokens** to keep track of processed events and resume processing later.

---

## 🚀 Features
- 📥 Fetches blob **create, update, and delete events** from the Azure Blob Change Feed.
- 🔁 Uses **continuation tokens** to resume processing from the last checkpoint.
- 💾 Supports **persisting tokens** to a file, database, or storage for reliable restarts.
- ⚡ Enables **incremental processing** for large-scale storage accounts.
- 🛠 Written in **C# (.NET 6/7)**.

---

## 🗂 Project Structure
```

/BlobChangeFeedProcessor
├── Program.cs              # Main application logic
├── README.md               # Documentation
└── ...                     # Additional files if needed

````

---

## 📋 Prerequisites
1. An **Azure Storage Account** with **Change Feed enabled**:
   - Go to **Storage Account → Data Management → Change Feed → Enable**.
2. A valid **connection string** for the storage account.
3. .NET 6 or later installed.

---

## ⚙️ Installation
Clone the repository and install the required NuGet package:

```bash
dotnet add package Azure.Storage.Blobs.ChangeFeed
````

---

## 🔑 Configuration

Set the storage connection string in an environment variable or appsettings:

```bash
export AZURE_STORAGE_CONNECTION_STRING="<YourStorageConnectionString>"
```

---

## 💻 Example Code

```csharp
using Azure.Storage.Blobs.ChangeFeed;
using Azure.Storage.Blobs.ChangeFeed.Models;
using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        string connectionString = Environment.GetEnvironmentVariable("AZURE_STORAGE_CONNECTION_STRING");

        var changeFeedClient = new BlobChangeFeedClient(connectionString);

        // Retrieve saved continuation token (if any)
        string continuationToken = LoadContinuationToken();

        await foreach (Page<BlobChangeFeedEvent> page in changeFeedClient
                            .GetChangesAsync()
                            .AsPages(continuationToken))
        {
            foreach (BlobChangeFeedEvent changeEvent in page.Values)
            {
                Console.WriteLine($"Event Type: {changeEvent.EventType}");
                Console.WriteLine($"Subject   : {changeEvent.Subject}");
                Console.WriteLine($"Time      : {changeEvent.EventTime}");
                Console.WriteLine("---------------------------");

                // Add custom processing logic here
            }

            // Save continuation token for next run
            SaveContinuationToken(page.ContinuationToken);
        }
    }

    static string LoadContinuationToken()
    {
        // Load from file or database
        return null; // Replace with real implementation
    }

    static void SaveContinuationToken(string token)
    {
        // Persist token for future use
        Console.WriteLine($"Saved Continuation Token: {token}");
    }
}
```

---

## 🔥 How It Works

1. The application fetches **change events** (blob created, deleted, updated).
2. It processes each event in batches (pages).
3. After processing, it **stores the continuation token**.
4. On the next run, it resumes from the **last processed point**.

---

## 🟢 Best Practices

* ✅ Always **store the continuation token** after processing each batch.
* ✅ Use a **durable store** like Azure Table, Blob, or Cosmos DB for token persistence.
* ✅ Implement error handling to retry on network failures.
* ✅ Use batching to avoid memory overload in large-scale accounts.

---

## 🧩 When to Use This Approach

* When you need **historical change data** or replay past events.
* For **audit logs** or compliance scenarios.
* When using **batch/offline processing**.
* Not ideal for real-time triggers — use **Event Grid** or **BlobTrigger** for that.

---

## 📚 References

* [Azure Blob Change Feed documentation](https://learn.microsoft.com/azure/storage/blobs/storage-blob-change-feed)
* [Azure.Storage.Blobs.ChangeFeed NuGet package](https://www.nuget.org/packages/Azure.Storage.Blobs.ChangeFeed)
* [BlobTrigger in Azure Functions](https://learn.microsoft.com/azure/azure-functions/functions-bindings-storage-blob-trigger)

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


