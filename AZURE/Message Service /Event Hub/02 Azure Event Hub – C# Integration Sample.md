
# ⚡ Azure Event Hub – C# Integration Sample

This project demonstrates how to **send streaming data/messages to Azure Event Hub** using **C#** and the `Azure.Messaging.EventHubs` SDK.

---

## 📘 What is Azure Event Hub?

**Azure Event Hubs** is a fully managed, real-time data ingestion service. It can **ingest millions of events per second** from applications, devices, and services, and stream them into Azure for real-time analytics or batch processing.

---

## 📦 Use Cases

- Real-time telemetry ingestion
- Logging and monitoring applications
- Clickstream and user activity tracking
- Financial fraud detection
- IoT sensor data collection

---

## 🆚 Event Hub vs. Service Bus

| Feature             | **Event Hub**                       | **Service Bus**                     |
|---------------------|-------------------------------------|-------------------------------------|
| Use Case            | Telemetry, logs, streaming          | Enterprise messaging (queues/topics) |
| Volume              | Millions/sec                        | Thousands/sec                       |
| Message Order       | Per partition                       | FIFO via sessions                   |
| Consumer Model      | Pull-based, multi-consumer          | Queue/Topic subscriptions           |
| Message Retention   | 1 to 7 days (Standard)               | Until processed                     |

---

## 🚀 Quick Start – Sending Messages to Event Hub

### 🔧 Prerequisites

- [.NET 6 SDK](https://dotnet.microsoft.com/)
- Azure Subscription
- Azure Event Hub Namespace and Event Hub

### 🔑 Configuration

Update the following variables in your `Program.cs`:

```csharp
private const string connectionString = "<YOUR_EVENT_HUBS_NAMESPACE_CONNECTION_STRING>";
private const string eventHubName = "<YOUR_EVENT_HUB_NAME>";
````

You can find the connection string from the **Azure Portal > Event Hubs Namespace > Shared Access Policies > RootManageSharedAccessKey**.

---

## 📥 Installation

Install the Event Hubs NuGet package:

```bash
dotnet add package Azure.Messaging.EventHubs
```

---

## 🧪 C# Code – Send Messages

```csharp
using System;
using System.Text;
using System.Threading.Tasks;
using Azure.Messaging.EventHubs;
using Azure.Messaging.EventHubs.Producer;

class Program
{
    private const string connectionString = "<YOUR_EVENT_HUBS_NAMESPACE_CONNECTION_STRING>";
    private const string eventHubName = "<YOUR_EVENT_HUB_NAME>";

    static async Task Main(string[] args)
    {
        await using (var producerClient = new EventHubProducerClient(connectionString, eventHubName))
        {
            using EventDataBatch eventBatch = await producerClient.CreateBatchAsync();

            for (int i = 1; i <= 5; i++)
            {
                string message = $"Message {i} - Sent at {DateTime.UtcNow}";
                eventBatch.TryAdd(new EventData(Encoding.UTF8.GetBytes(message)));
                Console.WriteLine($"Added: {message}");
            }

            await producerClient.SendAsync(eventBatch);
            Console.WriteLine("All events sent to Event Hub!");
        }
    }
}
```

---

## 🧠 Tips & Best Practices

* Use `EventDataBatch` to send efficiently.
* Use **partition keys** if message ordering is important.
* Monitor with **Azure Monitor** and **Azure Diagnostic Logs**.
* Use **Azure Event Hubs Capture** to store data in Blob or Data Lake.

---

## 📚 Additional Resources

* [🔗 Azure Event Hubs Documentation](https://learn.microsoft.com/en-us/azure/event-hubs/)
* [🔗 Azure.Messaging.EventHubs SDK](https://www.nuget.org/packages/Azure.Messaging.EventHubs/)
* [🔗 Event Hub vs Service Bus Comparison](https://learn.microsoft.com/en-us/azure/event-grid/compare-messaging-services)

---

## ✅ Sample Output

```
Added: Message 1 - Sent at 7/29/2025 02:20:15 PM
Added: Message 2 - Sent at 7/29/2025 02:20:15 PM
...
All events sent to Event Hub!
```




L
