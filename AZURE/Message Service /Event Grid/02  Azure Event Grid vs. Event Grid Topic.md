# ⚡ Azure Event Grid vs. Event Grid Topic (Portal-Based Setup)

This guide will help you understand the difference between **Azure Event Grid** and **Event Grid Topic**, and walk you through how to create and use Event Grid Topics **via the Azure Portal** (no CLI required).

---

## 📘 What is Azure Event Grid?

Azure Event Grid is a **fully managed eventing platform** for routing messages between publishers and subscribers in real-time. It's designed for **event-driven architectures** and integrates seamlessly with Azure services.

---

## 🧩 What is an Event Grid Topic?

An **Event Grid Topic** is a **channel** where applications publish events.

> 🔹 If you're using Azure services like Blob Storage or Resource Groups, Azure automatically manages the topics (System Topics).  
> 🔸 If you're sending custom events from your own application, you need to **create a Custom Topic** manually.

---

## 🔍 Event Grid vs. Event Grid Topic

| Feature             | **Event Grid**                        | **Event Grid Topic**                         |
|---------------------|----------------------------------------|----------------------------------------------|
| Purpose             | Event routing service                 | Destination endpoint to publish events       |
| Managed by          | Azure                                 | You (for custom apps)                        |
| Event Source        | Azure services or custom apps         | Custom apps (user-defined events)            |
| Subscription Scope  | Wide (resource group, subscription)   | Specific to that topic                       |
| Needed for Custom?  | ✅ Yes                                 | ✅ Yes                                        |

---

## 🎯 Why Use Custom Event Grid Topics?

Use **Custom Topics** when:
- You’re building your **own application** that emits events.
- You want **custom event schemas** or fine-grained routing.
- You’re implementing **microservice communication** or **domain-driven events**.

---

## 🛠️ Step-by-Step: Create Event Grid Topic Using Azure Portal

### ✅ Step 1: Create a Custom Event Grid Topic
1. Go to [Azure Portal](https://portal.azure.com/)
2. Search for **"Event Grid Topics"** in the top search bar
3. Click **+ Create**
4. Fill in:
   - **Subscription**: Select your Azure subscription
   - **Resource Group**: Create/select a resource group
   - **Topic Name**: e.g., `order-events-topic`
   - **Region**: Choose location (e.g., East US)
5. Click **Review + Create**, then **Create**

---

### ✅ Step 2: Get Topic Endpoint & Access Key
1. After deployment, go to your **Event Grid Topic**
2. Under **Overview**, copy the **Endpoint URL**
3. Go to **Access Keys**, copy either **Key1** or **Key2**

You’ll use this to **publish events** from your application via HTTP POST.

---

### ✅ Step 3: Publish Events (from Application or Postman)

Use a REST client like Postman to test it:

**POST** to the topic endpoint  
**Headers**:
```

aeg-sas-key: <your-access-key>
Content-Type: application/json

````

**Body**:
```json
[
  {
    "id": "event-id-001",
    "eventType": "myApp.item.created",
    "subject": "/app/items/item1",
    "eventTime": "2025-07-19T10:00:00Z",
    "data": {
      "itemId": "item1",
      "description": "Sample Item Created"
    },
    "dataVersion": "1.0"
  }
]
````

---

### ✅ Step 4: Create Event Subscription

1. Go to your **Event Grid Topic**
2. Click on **+ Event Subscription**
3. Fill in:

   * **Name**: `notify-function`
   * **Event Schema**: Leave as default (Event Grid Schema)
   * **Event Types**: You can filter (e.g., `myApp.item.created`)
   * **Endpoint Type**: Select destination (e.g., Azure Function, Webhook, Logic App)
4. Provide your endpoint URL or select from Azure
5. Click **Create**

---

## 🧪 Test the Flow

Once the topic and subscription are ready:

* Send a custom event using Postman or your app
* The subscriber (Azure Function, webhook, etc.) should receive the event instantly

---

## 💡 Real Use Case Example

**Scenario**: Online Retail System

* Event Grid Topic: `order-events-topic`
* Publisher: Order Management System
* Event Types: `OrderCreated`, `OrderShipped`, `OrderCancelled`
* Subscribers:

  * Inventory API (WebHook)
  * Notification Service (Azure Function)
  * Audit Logger (Logic App)

---

## 🧠 Summary

| Concept              | Description                           |
| -------------------- | ------------------------------------- |
| **Event Grid**       | Azure's event routing system          |
| **Event Grid Topic** | Channel for publishing custom events  |
| **Portal Setup**     | Easy UI-based creation and management |
| **Publish**          | Use Postman, application HTTP client  |
| **Subscribe**        | Azure Functions, Logic Apps, Webhooks |

---

## 📚 References

* [Azure Event Grid Documentation](https://learn.microsoft.com/en-us/azure/event-grid/)
* [Publish Custom Events (Portal)](https://learn.microsoft.com/en-us/azure/event-grid/custom-event-to-webhook)
* [Event Schema Format](https://learn.microsoft.com/en-us/azure/event-grid/event-schema)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
