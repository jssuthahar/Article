# 🚀 Azure Cosmos DB + Function App with IoT Notification

This README explains a real-world scenario involving Azure Cosmos DB, Function Apps, and IoT-triggered email notifications. The task is to design a solution that meets scalability, cost-efficiency, and notification requirements.

---

## 📘 Scenario Summary

You're building a cloud solution that includes:

* **Azure Cosmos DB** with **SQL API** to store IoT data.
* A **web application** writes new data to Cosmos DB **daily**.
* You need to:

  1. **Trigger a Function App** when new data is added.
  2. **Send email notifications** when IoT-related data arrives.
  3. **Reduce compute cost** (i.e., serverless or consumption-based billing).

---

## ❓ Question:

> You are creating an Azure Cosmos DB account that makes use of the SQL API. Data will be added to the account every day by a web application.
>
> You need to ensure that an **email notification** is sent when **information is received from IoT devices**, and that **compute cost is reduced**.
>
> You decide to deploy a **Function App**.
>
> **Which of the following should you configure the function app to use?**

🧠 **Drag and Drop Configuration Components**:

| Item                  | Description                                                                |
| --------------------- | -------------------------------------------------------------------------- |
| **Cosmos DB Trigger** | Automatically starts the function when a document is inserted or modified. |
| **SendGrid Binding**  | Sends email notifications from the function.                               |
| **Consumption Plan**  | Minimizes compute cost by using serverless billing model.                  |

---

## ✅ Final Answer:

To meet all requirements:

1. **Trigger Type:** Cosmos DB Trigger
2. **Notification Service:** SendGrid Output Binding
3. **Hosting Plan:** Consumption Plan

These selections ensure low cost, automatic scaling, and email notifications on IoT data arrival.

To meet all requirements:

1. **Trigger Type:** Cosmos DB Trigger
2. **Notification Service:** SendGrid Output Binding
3. **Hosting Plan:** Consumption Plan

---

## 🛠️ Real-time Architecture Flow

```plaintext
[Web App]
   ⬇ Writes data daily
[Azure Cosmos DB (SQL API)]
   ⬇ Change Feed Trigger
[Azure Function App]
   ⬇
[SendGrid Binding] → 📧 Email to Alert Team
```

---

## 💡 Key Technologies

### 🔸 Azure Cosmos DB Trigger

* Monitors changes using **change feed**.
* Automatically triggers the function on insert or update.

### 🔸 Consumption Plan

* Serverless plan: **Pay only for usage**.
* Automatically scales and ideal for sporadic workloads like IoT bursts.
  
### 🔸 SendGrid Binding

* Integrated with Azure Functions to send transactional emails.
* Requires SendGrid API key and verified sender.



---

## 📘 References

* [Azure Cosmos DB Triggers for Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger)
* [Azure Functions Consumption Plan](https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale)
* [SendGrid Azure Binding](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-sendgrid)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)

