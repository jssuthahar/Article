# 📬 Azure Event Grid (Portal-Based Guide)

## 🔷 What is Azure Event Grid?

**Azure Event Grid** is a fully managed event routing service that helps you build scalable, event-driven applications. It routes events from publishers (like Azure services or your custom apps) to event handlers (like Azure Functions, Logic Apps, or Webhooks).

---

## 🧩 Key Concepts

| Concept                | Description                                                                |
| ---------------------- | -------------------------------------------------------------------------- |
| **Event Publisher**    | The source of the event (e.g., Blob Storage, Azure Resources, IoT Hub)     |
| **Event Handler**      | The destination that processes the event (e.g., Azure Function, Logic App) |
| **Event Subscription** | Links a publisher to a handler; lets you filter and route events           |
| **Event**              | The actual notification or message describing something that happened      |

---

## ✅ Where to Use Event Grid

* **Storage Triggering**: Process images when uploaded to Blob Storage
* **Serverless Automation**: Automatically run Logic Apps or Azure Functions on specific changes
* **Resource Lifecycle Events**: Track VM creation/deletion and automate operations
* **IoT & Telemetry Events**: Monitor devices and systems in real time
* **Microservices Communication**: Decouple services using event-driven messaging

---

## 🧭 How to Check if Event Grid is Enabled in Your Subscription

1. Go to [Azure Portal](https://portal.azure.com/)
2. Search for **"Subscriptions"**
3. Select your **current subscription**
4. In the **left menu**, click **"Resource providers"**
5. Search for **`Microsoft.EventGrid`**
6. Ensure the status is **Registered**

> ✅ If not registered, click **Register**. It usually takes a few seconds.

---

## 🚀 How to Create an Event Grid Setup in Portal

### 🔸 Step 1: Create an Event Grid Topic (for custom events)

1. Go to **"Event Grid Topics"** in the Azure portal.
2. Click **“+ Create”**
3. Fill in the form:

   * **Subscription**
   * **Resource group**
   * **Name** of topic (e.g., `mytopic`)
   * **Region**
4. Click **Review + Create** and then **Create**

> 📌 For system topics (like Storage), you don’t need to create a topic manually – it’s generated automatically.

---

### 🔸 Step 2: Create an Event Subscription

1. Go to the **Event Grid Topic** you created (or your resource like Blob Storage)
2. Select **“Events” > “+ Event Subscription”**
3. Fill in:

   * **Name** of subscription
   * **Event Schema** (default: Event Grid Schema)
   * **Endpoint type** (e.g., Azure Function, Logic App, Webhook, Service Bus)
   * **Endpoint URL or resource**
4. Optionally add **filters** (e.g., event type, subject prefix/suffix)
5. Click **Create**

---

### 🔸 Step 3: Trigger and Test

For system topics (e.g., Blob Storage):

* Upload a file to a container
* Your Azure Function, Logic App, or endpoint will receive the event

For custom topics:

* Use a tool like **Postman** or code (C#/Python/JS) to send events to the topic’s **endpoint URL**

---

## 🔍 Monitor Events

1. Go to your **Event Subscription**
2. Under **Metrics**, view delivery status and success/failure count
3. Go to **Diagnose and solve problems** for troubleshooting
4. You can also **enable dead-lettering** to capture failed events

---

## 📚 Additional Learning Resources

* [Event Grid Overview (Microsoft Docs)](https://learn.microsoft.com/en-us/azure/event-grid/overview)
* [Create and Route Events using Portal](https://learn.microsoft.com/en-us/azure/event-grid/custom-event-quickstart-portal)
* [Event Types by Resource](https://learn.microsoft.com/en-us/azure/event-grid/event-schema)



 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
