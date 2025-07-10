
# 🚀 Azure Logic App – HTTP Trigger with Relative Path Parameter (`{name}`)

## 📌 Overview

This guide shows how to create a **Logic App** with an **HTTP trigger** that accepts a parameter via a **relative path**, such as:

```
POST https://your-logic-app-url/api/{name}
```

This is useful when building lightweight APIs or integrations that behave like RESTful services.

---

## 🧱 Prerequisites

* An **Azure Subscription**
* Access to the **Azure Portal**
* Basic understanding of Logic App workflows

---

## 🛠️ Step-by-Step: Create Logic App with `{name}` Path Parameter

### 1. Create a Logic App (Standard)

1. Go to Azure Portal → Search **Logic Apps (Standard)** → Click **Create**
2. Set:

   * **Resource Group**
   * **Name**: `logicapp-with-param`
   * **Region**: (e.g., East US)
3. Choose **Standard** (not Consumption)
4. Click **Review + Create**

---

### 2. Design the Workflow

1. Open the Logic App Designer
2. Choose the **"When an HTTP request is received"** trigger
3. In the **trigger**, expand **+ Add a parameter** → Select **Relative Path**

#### Example Setup:

```json
{
  "method": "GET",
  "relativePath": "/api/{name}"
}
```

4. Save the Logic App

---

### 3. Use the `{name}` Parameter in Logic

1. Add a new step: **"Compose"**
2. In the **Inputs**, use the dynamic content:

   ```
   triggerOutputs()['queries']['name']
   ```

   or for relative path:

   ```
   triggerOutputs()['parameters']['name']
   ```

   💡 Tip: You can also access it using expression:

   ```text
   @{triggerOutputs()['parameters']['name']}
   ```

---

### 4. Example Response Setup (Optional)

Add an **HTTP Response** action:

```json
{
  "statusCode": 200,
  "body": {
    "message": "Hello @{triggerOutputs()['parameters']['name']}!"
  }
}
```

---

## 🔗 Full Workflow Example (JSON)

Here’s a simple HTTP GET Logic App that replies "Hello {name}":

```json
{
  "definition": {
    "$schema": "https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#",
    "actions": {
      "Response": {
        "inputs": {
          "body": {
            "message": "@concat('Hello ', triggerOutputs()['parameters']['name'], '!')"
          },
          "statusCode": 200
        },
        "runAfter": {},
        "type": "Http"
      }
    },
    "triggers": {
      "manual": {
        "inputs": {
          "method": "GET",
          "relativePath": "/api/{name}"
        },
        "kind": "Http",
        "type": "Request"
      }
    }
  }
}
```

---

## 📬 Testing the Logic App

1. After saving the Logic App, copy the **HTTP URL**.
   Example:

   ```
   https://<your-app>.azurewebsites.net/api/{name}?code=xxxx
   ```

2. Replace `{name}` with a real value:

   ```
   https://<your-app>.azurewebsites.net/api/Nikhil?code=xxxx
   ```

3. You will get a response:

   ```json
   {
     "message": "Hello Nikhil!"
   }
   ```

---

## 🔐 Securing the Endpoint

* Use the **built-in access key** (in URL via `?code=`).
* Optionally enable **OAuth2** or **APIM integration** for more secure APIs.

---

## ✅ Summary

| Feature                   | Supported? |
| ------------------------- | ---------- |
| Relative Path Param `{}`  | ✅ Yes      |
| HTTP Method Configuration | ✅ Yes      |
| Query String Support      | ✅ Yes      |
| JSON Response             | ✅ Yes      |
| Security with Key         | ✅ Yes      |
| OAuth / APIM Integration  | ✅ Optional |

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
