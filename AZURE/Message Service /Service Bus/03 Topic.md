

# 📢 Azure Service Bus – Topics & Subscriptions

Azure Service Bus **Topics and Subscriptions** enable **publish-subscribe messaging patterns**, allowing one message to be sent to **multiple consumers** independently. This is ideal for building **loosely coupled, scalable systems**.

---

## ❓ Why We Need Topics and Subscriptions

| Problem                                                  | Solution via Topics                       |
| -------------------------------------------------------- | ----------------------------------------- |
| You need to send a message to **multiple receivers**     | Use a **Topic** instead of a single queue |
| Different consumers need **different filtered messages** | Use **Subscriptions** with rules/filters  |
| Applications must remain **decoupled**                   | Sender does not need to know receivers    |
| Need **broadcasting + filtering + ordering**             | Topics provide this natively              |

---

## 🧠 Where To Use Topics

* 🚛 **Logistics Platform**: Send shipping updates to warehouse, customer, tracking systems.
* 💼 **HR Platform**: Employee onboarding message goes to payroll, IT, security systems.
* 🔔 **Notification System**: A message sent to all users or filtered by region/language.
* 🏢 **Microservices**: One service emits an event → multiple services react differently.

---

## 🛠 How Topics & Subscriptions Work

```
          +-----------------------------+
          |        Topic (Publisher)    |
          +-----------------------------+
                      |
          +-----------+-----------+-----------+
          |                       |           |
+-----------------+    +-----------------+   +------------------+
| Subscription A  |    | Subscription B  |   | Subscription C   |
+-----------------+    +-----------------+   +------------------+
      | Filter: All         | Filter: Region='IN'    | Filter: Priority='High'
```

* **Topic**: Sender sends message **once** to topic.
* **Subscriptions**: Each subscription gets a **copy** of the message.
* **Filters**: Apply rules to receive only required messages.

---

## 🏗️ Step-by-Step: Create Topic and Subscriptions

### 🔧 Prerequisites

* Azure Subscription
* Azure Service Bus Namespace (Standard or Premium Tier)

---

### ✅ Step 1: Create Topic

1. Go to **Azure Portal**
2. Open your **Service Bus Namespace**
3. Under **Entities**, click **Topics**
4. Click **+ Topic**
5. Provide:

   * **Name** (e.g., `notifications`)
   * Set **Max Size**, **TTL**, etc.
6. Click **Create**

---

### ✅ Step 2: Create Subscriptions

1. Open the **Topic** you created (`notifications`)
2. Click **+ Subscription**
3. For each subscription:

   * Name: e.g., `AllUsers`, `IndiaRegion`, `HighPriority`
   * Optional: Add **filters**

     * SQL Filter: `region = 'IN'`
     * SQL Filter: `priority = 'high'`
4. Click **Create**

---

### ✅ Step 3: Send and Receive Messages (C# Example)

#### 🔹 Send Message to Topic

```csharp
string connectionString = "<YourConnectionString>";
string topicName = "notifications";

await using var client = new ServiceBusClient(connectionString);
ServiceBusSender sender = client.CreateSender(topicName);

var message = new ServiceBusMessage("Hello subscribers!");
message.ApplicationProperties.Add("region", "IN");
message.ApplicationProperties.Add("priority", "high");

await sender.SendMessageAsync(message);
```

#### 🔹 Receive Message from Subscription

```csharp
string subscriptionName = "IndiaRegion";

ServiceBusReceiver receiver = client.CreateReceiver(topicName, subscriptionName);
ServiceBusReceivedMessage received = await receiver.ReceiveMessageAsync();

Console.WriteLine(received.Body.ToString());
```

---

## 🔍 Subscription Filters – SQL Examples

| Use Case           | SQL Filter             |
| ------------------ | ---------------------- |
| All messages       | `1=1` (default)        |
| Region specific    | `region = 'IN'`        |
| High-priority only | `priority = 'high'`    |
| User type check    | `userType = 'premium'` |

---

## 📘 Summary

| Feature   | Topics & Subscriptions                    |
| --------- | ----------------------------------------- |
| Pattern   | Publish-Subscribe                         |
| Delivery  | Each subscription gets a message copy     |
| Filters   | Supports SQL filtering rules              |
| Use Cases | Notifications, workflows, multi-consumers |
| Ordering  | Supported via **Sessions**                |

---

## ✅ Benefits Recap

* 🔄 **Decoupled Communication**
* 📨 **One-to-Many Message Delivery**
* 🧠 **Custom Filters for Each Subscriber**
* 🛡 **Reliable Enterprise Messaging**
* 💡 **Ideal for Microservices and Event-Driven Architecture**

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
