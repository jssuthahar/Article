# Azure API Management - Mock API

This repository demonstrates how to use **Azure API Management (APIM)** to create a **Mock API**. Mock APIs are helpful for frontend development and testing before the actual backend is available.

## 🧰 Prerequisites

* Azure Subscription
* Access to [Azure Portal](https://portal.azure.com)
* An Azure API Management (APIM) instance

---

## 📌 What is Azure Mock API?

Azure Mock API allows you to simulate the behavior of a real API using API Management. It enables developers to:

* Test and develop applications without backend availability.
* Return static responses without calling the real backend.
* Use response templates or example responses.

---

## 🚀 Steps to Create a Mock API in Azure APIM

### 1. Create or Use an Existing API Management Service

Go to the Azure portal and either:

* Create a new **API Management instance**, or
* Use an existing one.

### 2. Create a New API

1. Navigate to **APIM instance > APIs**.
2. Click **+ Add API** > Select **Blank API**.
3. Provide:

   * **Display Name**: `Mock User API`
   * **Name**: `mock-user-api`
   * **URL suffix**: `mockuser`
   * **Web service URL**: `https://mock.backend/` *(placeholder, won’t be used)*
4. Click **Create**.

### 3. Add an Operation

1. Open the newly created API.
2. Click **+ Add Operation**.
3. Set values like:

   * **Display name**: `Get All Users`
   * **Name**: `get-users`
   * **URL template**: `/users`
   * **Method**: `GET`
4. Add a **Response**:

   * Click **+ Add Response**
   * Choose a status code (e.g., `200 OK`)
   * Click **+ Add Representation** and choose `application/json`
   * Enter a sample JSON body:

     ```json
     [
       { "id": 1, "name": "Alice" },
       { "id": 2, "name": "Bob" }
     ]
     ```
5. Save the operation.

### 4. Enable Mocking

1. Select the `GET /users` operation.
2. Go to the **Frontend** tab.
3. Click **+ Add Policy** at the **Inbound processing** section.
4. Add the following policy to enable mocking:

   ```xml
   <inbound>
     <base />
     <mock-response status-code="200" content-type="application/json" />
   </inbound>
   ```
5. Save the policy.

### 5. Test the Mock API

1. Go to the **Test** tab.
2. Select the `GET /users` operation.
3. Click **Send**.
4. You should receive the static mock JSON response.

---

## 📎 Sample cURL Command

```bash
curl -X GET "https://{your-apim-name}.azure-api.net/mockuser/users" \
  -H "Ocp-Apim-Subscription-Key: {your-subscription-key}"
```

---

## 📚 Resources

* [Azure API Management Documentation](https://learn.microsoft.com/en-us/azure/api-management/)
* [Mocking Responses in APIM](https://learn.microsoft.com/en-us/azure/api-management/mock-api)

---

## 🧠 When to Use Mock APIs

* Backend not ready or under development
* Isolate frontend and backend development
* Load testing or simulating performance

---

---
 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

