# 📦 Azure Storage Queue - Create & Read Messages using C#

Azure Storage Queue is a simple, scalable messaging service used to decouple components and build resilient applications.

This guide shows how to:

- ✅ Create a queue
- ✉️ Add a message to the queue
- 📥 Read and process messages
- 🧽 Delete a processed message

---

## 📁 Prerequisites

- ✅ .NET Core or .NET 6/7 SDK installed
- ✅ Azure Storage Account
- ✅ Storage Queue connection string

---

## 📦 Install Required NuGet Package

```bash
dotnet add package Azure.Storage.Queues
````

---

## 🔐 Get the Connection String

Go to **Azure Portal → Storage Account → Access Keys**, and copy the **Connection string**.

Example format:

```bash
DefaultEndpointsProtocol=https;AccountName=youraccount;AccountKey=yourkey;EndpointSuffix=core.windows.net
```

---

## 🧪 Sample Code: Create Queue and Send Message

```csharp
using Azure.Storage.Queues;
using Azure.Storage.Queues.Models;
using System;
using System.Threading.Tasks;

class Program
{
    private const string connectionString = "your_connection_string_here";
    private const string queueName = "myqueue";

    static async Task Main()
    {
        // 1. Create the queue client
        QueueClient queueClient = new QueueClient(connectionString, queueName);

        // 2. Create the queue if it doesn't exist
        await queueClient.CreateIfNotExistsAsync();
        Console.WriteLine($"Queue created or already exists: {queueName}");

        // 3. Send a message
        string message = "Hello from C# Queue!";
        await queueClient.SendMessageAsync(message);
        Console.WriteLine("Message sent: " + message);
    }
}
```

---

## 📥 Sample Code: Read & Delete Message

```csharp
using Azure.Storage.Queues;
using Azure.Storage.Queues.Models;
using System;
using System.Threading.Tasks;

class Reader
{
    private const string connectionString = "your_connection_string_here";
    private const string queueName = "myqueue";

    static async Task Main()
    {
        QueueClient queueClient = new QueueClient(connectionString, queueName);

        if (await queueClient.ExistsAsync())
        {
            // 1. Read one message (peek-lock)
            QueueMessage[] messages = await queueClient.ReceiveMessagesAsync(maxMessages: 1);

            foreach (QueueMessage message in messages)
            {
                Console.WriteLine($"Message received: {message.MessageText}");

                // 2. Delete after processing
                await queueClient.DeleteMessageAsync(message.MessageId, message.PopReceipt);
                Console.WriteLine("Message deleted");
            }
        }
        else
        {
            Console.WriteLine("Queue does not exist.");
        }
    }
}
```

---

## 📌 Notes

* **Message visibility timeout** is 30 seconds by default; you can extend it with `ReceiveMessagesAsync(maxMessages, visibilityTimeout: TimeSpan.FromSeconds(60))`
* You can **peek** messages without dequeuing using `PeekMessagesAsync()`
* You can set **Time-to-Live (TTL)** and **delay visibility** when sending messages

---

## 🛠 Useful Methods

| Method                            | Description                        |
| --------------------------------- | ---------------------------------- |
| `CreateIfNotExistsAsync()`        | Create queue if it doesn't exist   |
| `SendMessageAsync(string)`        | Add message to queue               |
| `ReceiveMessagesAsync()`          | Read & hide message for processing |
| `PeekMessagesAsync()`             | View message without dequeuing     |
| `DeleteMessageAsync(id, receipt)` | Remove processed message           |

---

## 📚 References

* [Azure.Storage.Queues Docs](https://learn.microsoft.com/en-us/dotnet/api/azure.storage.queues)
* [Queue Storage Concepts](https://learn.microsoft.com/en-us/azure/storage/queues/storage-queues-introduction)

---

## ✅ Summary

Using Azure Storage Queue in C# is simple and efficient. With just a few lines of code, you can:

* Create a queue
* Send & receive messages
* Delete messages after processing

This is perfect for decoupling services, task queuing, and building scalable cloud-native apps.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
