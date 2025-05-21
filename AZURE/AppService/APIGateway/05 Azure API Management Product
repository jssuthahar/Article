# API Gateway using Azure API Management - Product

## 📘 Overview

An **API Gateway** is a server that acts as an intermediary between clients and backend services. It handles common tasks such as:

- Request routing
- Composition
- Authentication and authorization
- Rate limiting and throttling
- Caching and logging
- API version management
- Transformation (request/response)

Microsoft provides **Azure API Management (APIM)** to help you create and manage API gateways easily on the Azure platform.

---

## 🚀 What is Azure API Management (APIM)?

**Azure API Management** is a service that enables organizations to expose their APIs to external, partner, and internal developers securely and at scale. It provides features such as:

- Developer portal
- API gateway
- Analytics and monitoring
- Policy configuration for security and transformation

---

## 🧭 Steps to Create an API Gateway in Azure Using Azure API Management

### ✅ Step 1: Log in to Azure Portal

Go to: [https://portal.azure.com](https://portal.azure.com)

### ✅ Step 2: Create an API Management Service

1. Click **"Create a resource"**
2. Search for **"API Management"**
3. Click **"Create"**
4. Fill in the required details:
   - **Name**: my-apim-gateway
   - **Subscription**: Select your Azure subscription
   - **Resource Group**: Create new or select existing
   - **Location**: Choose your nearest region
   - **Organization Name**: Your company name
   - **Administrator Email**: Your email
   - **Pricing Tier**: Developer (for testing)

Click **"Review + Create"**, then click **"Create"** to provision the service.

> 🕐 It may take 20–30 minutes to deploy the APIM instance.

---

## 📦 Understanding Products in Azure API Management

### ✅ What is a Product?

In **Azure API Management (APIM)**, a **Product** is a bundle of one or more APIs that you can **publish** together and **control access** to as a group.

Products act as **containers** for APIs and help define:

- Who can access the APIs (developers, partners, internal teams)
- Under what conditions (subscription required, rate limits, usage quotas)
- What documentation is exposed in the Developer Portal

### 🔍 Why Use Products?

Products help you **organize APIs logically** and **manage access efficiently**. Here are some key reasons to use them:

| Reason | Description |
|--------|-------------|
| 🔒 **Security & Access Control** | Enforce policies such as subscriptions, rate limits, and quotas per product |
| 🧩 **Modularity** | Group APIs by business domain (e.g., Payment APIs, Order APIs) |
| 👨‍💻 **Developer Experience** | Control what external/internal developers see in the Developer Portal |
| 🧪 **Testing vs Production** | Create separate products for environments like Test and Prod with different configurations |
| 📜 **Documentation Bundling** | APIs in a product appear together with unified documentation |

---

### ⚙️ How to Create and Configure a Product

#### 🧱 Step 1: Create a Product

1. Go to your **API Management instance** in Azure Portal
2. Select **Products > + Add**
3. Provide:
   - **Display Name**: `PetStore Product`
   - **Name**: (auto-generated, used internally)
   - **Description**: APIs for managing pets in the demo pet store
   - **Subscription Required**: ✅ (Recommended)
   - **Approval Required**: ❌ or ✅ depending on use case
   - **Published**: ✅ (to make it available in Developer Portal)

#### ➕ Step 2: Add APIs to the Product

1. After creating the product, open it
2. Click **APIs > + Add API**
3. Select the **PetStore API** (or any others you’ve imported)
4. Click **Add**

Now all APIs within this product will share:
- The same **access policies**
- Be visible together in the **Developer Portal**

#### 🔐 Step 3: Set Policies at the Product Level (Optional)

You can apply **common policies** at the product level, for example:

```xml
<inbound>
    <rate-limit calls="100" renewal-period="60" />
</inbound>
````

This applies a **rate limit of 100 calls per minute** for all APIs under the product.

#### 🧑‍💻 Step 4: Manage Subscriptions

If **Subscription Required** is enabled:

* Developers must **subscribe to the product**
* They receive a **subscription key**
* Use this key when calling APIs (in header `Ocp-Apim-Subscription-Key`)

You can manage developer subscriptions from:

> **APIM > Subscriptions > + Add**

---

### 🎯 Example Use Case: PetStore API in a Product

| Feature                     | Value               |
| --------------------------- | ------------------- |
| Product Name                | PetStore Product    |
| Included APIs               | PetStore API        |
| Rate Limit                  | 100 requests/min    |
| Subscription                | Required            |
| Developer Portal Visibility | Enabled             |
| Approval Required           | No (instant access) |

---

### 🧑‍💼 How Products Help API Providers

* **Control exposure** of APIs (e.g., internal vs external use)
* **Group by customer tiers** (Free vs Premium products)
* **Apply common business rules** at one place (rate limits, authorization, etc.)
* **Improve onboarding** for API consumers via a unified portal

---

## 🔌 Step 3: Add a Sample API (PetStore)

Microsoft provides a **PetStore Swagger/OpenAPI** demo API by default in newly created API Management instances.

### What is PetStore?

**PetStore** is a sample API for learning and demonstration purposes. It mimics a pet store that lets you:

* List pets
* Add pets
* Delete pets
* Update pet records

It follows the [Swagger/OpenAPI Specification](https://swagger.io/specification/) and is used worldwide in API testing tutorials.

### PetStore Swagger URL:

* Swagger URL: `https://petstore.swagger.io/v2/swagger.json`
* API Docs UI: [https://petstore.swagger.io](https://petstore.swagger.io)

---

## ➕ Step 4: Import the PetStore Swagger API

1. Open your API Management instance
2. Go to **APIs** > **+ Add API**
3. Choose **"OpenAPI"**
4. Paste the Swagger URL: `https://petstore.swagger.io/v2/swagger.json`
5. Click **"Create"**

Once imported, you can:

* See all available operations (GET, POST, DELETE, etc.)
* Test the API in the Azure Portal
* Add policies (rate limits, authentication, IP filtering, etc.)

---

## 🌐 Step 5: Access the Developer Portal

Azure APIM provides a built-in **Developer Portal** where external/internal users can view APIs and test them.

1. From your APIM instance, click **"Developer Portal"** (or open its URL)
2. Sign in as admin
3. View the PetStore API under **APIs**
4. Try out each endpoint live

---

## 🔐 Step 6: Apply Policies (Optional)

Policies in APIM are XML-based and can be applied at the API, operation, or product level. You can:

* Add a rate limit:

```xml
<rate-limit calls="10" renewal-period="60" />
```

* Restrict IPs:

```xml
<check-header name="X-Forwarded-For" failed-check-httpcode="403" failed-check-error-message="IP not allowed">
  <value>203.0.113.0</value>
</check-header>
```

More about policies: [Azure API Management Policy Reference](https://learn.microsoft.com/en-us/azure/api-management/api-management-policies)

---

## 🧪 Step 7: Test API Using Built-in Console

1. Go to **APIs > PetStore API**
2. Choose an operation, e.g., `GET /pet/findByStatus`
3. Click **"Test"**
4. Run and observe response

---

## 📈 Step 8: Monitor and Analyze

You can monitor API usage, errors, latency, etc., by enabling:

* **Azure Monitor**
* **Application Insights**
* **APIM Analytics Dashboard**

---

## 📝 Useful Links

* Azure API Management Docs: [https://learn.microsoft.com/en-us/azure/api-management/](https://learn.microsoft.com/en-us/azure/api-management/)
* PetStore Swagger: [https://petstore.swagger.io](https://petstore.swagger.io)
* PetStore Swagger JSON: [https://petstore.swagger.io/v2/swagger.json](https://petstore.swagger.io/v2/swagger.json)
* Swagger UI Demo: [https://petstore.swagger.io](https://petstore.swagger.io)
* API Gateway Concepts: [https://learn.microsoft.com/en-us/azure/architecture/patterns/api-gateway](https://learn.microsoft.com/en-us/azure/architecture/patterns/api-gateway)

---

## 💬 Summary

Using Azure API Management, you can quickly create an API Gateway that:

* Acts as a central gateway for microservices
* Secures your APIs
* Provides monitoring and analytics
* Allows testing and collaboration with external consumers via the Developer Portal

---
 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

