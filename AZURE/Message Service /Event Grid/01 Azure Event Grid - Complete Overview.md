
# 📘 Azure Event Grid Topic & Subscription Demo via Azure Portal

## 🧩 Overview

This guide walks you through a **step-by-step demo** on how to create an **Azure Event Grid Topic**, set up an **Event Subscription**, and test event delivery using the **Azure Portal** — no CLI required.

---

## 📌 What You'll Learn

* Create a **Custom Event Grid Topic**
* Create an **Event Subscription** to receive events
* Use a **Webhook endpoint** (or Logic App/Azure Function) to handle events
* Test and verify event flow using the **Azure Portal**
* Understand a **real-world use case** for applying this setup

---

## 🛠️ Prerequisites

* An active **Azure subscription**
* A **resource group** created
* A **test endpoint** (e.g., [Webhook.site](https://webhook.site) or Azure Function/Logic App)

---

## 🔷 Step 1: Create an Event Grid Topic

1. Go to [Azure Portal](https://portal.azure.com)
2. Search for **“Event Grid Topics”** in the search bar
3. Click **“+ Create”**
4. Fill in the form:

   * **Subscription**: Select your subscription
   * **Resource Group**: Choose an existing one or create new
   * **Topic Name**: e.g., `demo-topic`
   * **Region**: Choose your preferred location
5. Click **Review + Create**, then **Create**

🟢 **Topic created!**

---

## 🔔 Step 2: Create an Event Subscription

1. Navigate to the **Event Grid Topic** you just created
2. In the left panel, click **“Events”** then **“+ Event Subscription”**
3. Fill in the following:

   * **Name**: e.g., `demo-subscription`
   * **Event Schema**: Leave as `Event Grid Schema`
   * **Endpoint Type**: Choose one:

     * **Webhook**: Use [https://webhook.site](https://webhook.site) (copy the unique URL)
     * **Azure Function / Logic App / Service Bus** (select from your account)
   * **Endpoint URL**: Paste or select the endpoint
   * Optionally, add filters for subject or event types
4. Click **Create**

🟢 **Subscription created!**

---

## 📤 Step 3: Publish a Test Event

1. In your **Event Grid Topic** page, select **“Events” > “+ Publish Test Event”**
2. Fill in:

   * **Subject**: e.g., `/demo/test`
   * **Event Type**: e.g., `DemoEventType`
   * **Event Data**:

     ```json
     {
       "message": "Hello from Event Grid!"
     }
     ```
3. Click **Publish Event**

✅ Go to your **Webhook.site**, **Function log**, or **Logic App run history** to see the event payload.

---

## 🧪 Event Testing Results

You should see a JSON payload like this:

```json
[
  {
    "id": "event-id",
    "eventType": "DemoEventType",
    "subject": "/demo/test",
    "data": {
      "message": "Hello from Event Grid!"
    },
    "eventTime": "2025-07-22T12:34:56.789Z",
    "dataVersion": "1.0"
  }
]
```

---

## 💼 Real-Time Use Case: File Upload Notification System

### Scenario:

You’re building a **document processing platform** where users upload PDF documents to Azure Blob Storage. You want to **automatically extract text and generate a summary** when a file is uploaded.

### Architecture:

```text
[User Uploads File to Blob Storage]
              |
              V
  [BlobCreated Event Triggered by Storage]
              |
              V
     [Azure Event Grid Topic]
              |
              V
[Event Subscription → Azure Function]
              |
              V
[Function Reads File → Extracts Text → Saves Result in DB]
```

### Steps:

1. Use **Blob Storage** as a **system topic publisher**
2. Create an **Event Subscription** for the BlobCreated event
3. Connect it to an **Azure Function**
4. In the function:

   * Download the file
   * Extract text using Cognitive Services or PDF SDK
   * Save summary to a database or send it to users

### Benefits:

* Fully automated
* Decoupled and scalable
* Serverless and event-driven

---

## 📊 Monitor & Troubleshoot

* Go to the **Event Subscription** → **Metrics** tab
* View **event delivery status**, failures, and retry attempts
* Use **“Diagnose and solve problems”** for common issues
* Enable **dead-lettering** to store undelivered events

---

## 🧼 Cleanup

To avoid charges:

1. Delete the **Event Subscription**
2. Delete the **Event Grid Topic**
3. Optionally, delete the **resource group**

---

## 📚 Additional Resources

* [Azure Event Grid Documentation](https://learn.microsoft.com/en-us/azure/event-grid/)
* [Custom Topic Portal Quickstart](https://learn.microsoft.com/en-us/azure/event-grid/custom-event-quickstart-portal)
* [Event Schema Details](https://learn.microsoft.com/en-us/azure/event-grid/event-schema)
* [Triggering Azure Functions with Event Grid](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-event-grid)


 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
