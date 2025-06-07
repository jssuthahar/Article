# Azure Functions - Pricing, Types

## 🔹 Overview

Azure Functions is a **serverless compute service** that enables you to run event-driven code without having to explicitly provision or manage infrastructure. It supports multiple languages and integrates easily with other Azure services.

---

## 💰 Azure Function Pricing

Azure Functions pricing is primarily based on the **hosting plan** and **execution model** you choose:

### 1. **Consumption Plan (Default)**

* **Pricing**: Pay only for the time your code runs.
* **Execution**: Automatically scales based on the number of incoming events.
* **Free Grant**:

  * 1 million requests per month
  * 400,000 GB-s of resource consumption per month
* **Best For**: Lightweight functions, low-volume or unpredictable workloads.

### 2. **Premium Plan**

* **Pricing**: Based on number of core seconds and memory used.
* **Execution**: Pre-warmed instances to reduce cold start time.
* **Features**:

  * VNET integration
  * Unlimited execution duration
  * Predictable performance
* **Best For**: Enterprise-scale applications, APIs, or workloads with constant or high-demand.

### 3. **Dedicated (App Service) Plan**

* **Pricing**: Based on App Service Plan pricing.
* **Execution**: Functions run on dedicated virtual machines.
* **Best For**: Existing App Service environments with reserved capacity.

--

## 🔐 Access Levels in Azure Functions

| Access Level                         | Description                                                                                                |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| **Anonymous**                        | No API key required. Open to public (use with caution).                                                    |
| **Function**                         | Requires a function key passed in the request. Used for internal apps or service-to-service communication. |
| **Admin**                            | Requires the master key. Provides full access, including to all functions within the app.                  |
| **System-Assigned Managed Identity** | Securely calls other Azure services without managing credentials.                                          |
| **User-Assigned Managed Identity**   | Use a pre-created identity to access services, enabling identity reuse across resources.                   |
| **RBAC (Role-Based Access Control)** | Azure AD roles used for managing function app resource access from Azure Portal or CLI.                    |

---

## 📌 Additional Notes

* Use **Application Insights** to monitor and analyze your Azure Function performance and errors.
* Consider **deployment slots** and **deployment center** for CI/CD and version management.

---

## 📚 Resources

* [Azure Functions Pricing Calculator](https://azure.microsoft.com/en-us/pricing/details/functions/)
* [Azure Functions Documentation](https://learn.microsoft.com/en-us/azure/azure-functions/)
* [Function Triggers and Bindings](https://learn.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
