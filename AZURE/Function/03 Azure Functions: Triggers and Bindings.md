# Azure Functions: Triggers and Bindings

## 📌 Overview

**Azure Functions** is a serverless compute service that allows you to run small pieces of code (functions) without managing infrastructure. Every function needs at least one **trigger** to start execution. Triggers define **how** a function is invoked, and **bindings** allow your function to seamlessly connect to other services.

---

## ⚡ What is a Trigger?

A **trigger** is what causes a function to run. It listens for a specific event or condition and invokes the function when that event occurs.

- Every Azure Function **must have exactly one trigger**.
- Triggers include information from the source event. This information can be used as **parameters** in your function.

---

## 🔁 What is a Binding?

Bindings provide a way to **declaratively connect** your function to data sources and services without writing custom integration code.

- **Input Binding**: Pass data into the function.
- **Output Binding**: Send data from the function to a service.

Bindings are optional — a function must have **one trigger**, but **zero or more bindings**.

---

## 🧾 Trigger Associated Data & Parameters

Each trigger carries **metadata and data** that can be accessed via parameters in the function signature.

### Example (HTTP Trigger)
```csharp
public static async Task<IActionResult> Run(
    [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
    ILogger log)
{
    string name = req.Query["name"];
    log.LogInformation($"Hello, {name}");
    return new OkObjectResult($"Hello, {name}");
}
````

* `req`: The trigger data (in this case, the HTTP request).
* `name`: A query parameter passed in the HTTP request.
* `log`: Logger binding for writing to the console or monitoring.

---

## 🌐 Simple HTTP Trigger Function Example

```csharp
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

public static class HttpTriggerExample
{
    [FunctionName("HttpTriggerExample")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
        ILogger log)
    {
        log.LogInformation("C# HTTP trigger function processed a request.");

        string name = req.Query["name"];
        return name != null
            ? (ActionResult)new OkObjectResult($"Hello, {name}")
            : new BadRequestObjectResult("Please pass a name on the query string.");
    }
}
```

---

## 📥 Passing Input to an Azure Function

There are three ways to pass input to Azure Functions:

1. **Query Strings** — via the URL (for HTTP triggers).
2. **Request Body** — JSON or plain text payloads (HTTP POST).
3. **Path Parameters** — using route templates like `/api/products/{id}`.

---

## 🔗 Common Azure Function Triggers

| Trigger Type                  | Description                                                           |
| ----------------------------- | --------------------------------------------------------------------- |
| **HTTP Trigger**              | Executes on HTTP request. Great for APIs.                             |
| **Timer Trigger**             | Runs on a schedule (CRON expression). Ideal for scheduled tasks.      |
| **Blob Trigger**              | Runs when a blob is added or modified in Azure Blob Storage.          |
| **Queue Trigger**             | Invoked when a new message is added to a Storage Queue.               |
| **Service Bus Trigger**       | Triggered by messages in Azure Service Bus Queue or Topic.            |
| **Event Grid Trigger**        | Subscribes to Azure event sources like Blob Storage, Resource Groups. |
| **Cosmos DB Trigger**         | Executes on changes in Azure Cosmos DB collections.                   |
| **Event Hub Trigger**         | Listens to real-time data streams from Azure Event Hub.               |
| **SignalR Trigger**           | Responds to real-time messages from SignalR.                          |
| **Durable Functions Trigger** | Specialized triggers for orchestrating workflows.                     |

---

## 🧠 Summary

* Every Azure Function **needs one trigger** to start execution.
* Triggers determine **how** and **when** your function runs.
* Trigger-associated **data and metadata** are passed into the function as parameters.
* Bindings allow you to **connect to other services** with minimal code.
* Azure supports various triggers like HTTP, Timer, Blob, Queue, Event Grid, etc.

---

## ✅ Best Practices

* Use the **right trigger** based on the event source.
* **Secure HTTP Triggers** using function-level or key-based authentication.
* Use **Input/Output Bindings** to reduce boilerplate integration code.
* Monitor triggers and logs using **Azure Application Insights**.

---

## 📚 Resources

* [Azure Functions Documentation](https://docs.microsoft.com/en-us/azure/azure-functions/)
* [Trigger and Binding Reference](https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
