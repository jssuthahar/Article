
# Azure API Management – Subscription Security and Configuration Guide

This guide explains how to secure APIs using **subscription keys**, manage **multiple subscription keys**, configure **product-level subscription limits**, and **create multiple subscriptions** per user.

---

## 🔐 Subscription Security Authentication in Azure API Management

Azure API Management (APIM) uses **subscription keys** to authenticate API consumers.

* Each **subscription** provides two keys: **Primary** and **Secondary**.
* Consumers must pass a valid key via the HTTP header or query string.

### ✅ Example API Call (Header Authentication):

```http
GET https://your-apim-instance.azure-api.net/api-path
Headers:
  Ocp-Apim-Subscription-Key: your-subscription-key
```

---

## ➕ How to Create Multiple Subscription Keys

A user (developer) can have **multiple subscriptions**, each with **two keys**, allowing multiple independent access credentials.

### 🧭 Steps to Create Multiple Subscriptions (Keys):

1. **Login to Azure Portal**:
   Go to [https://portal.azure.com](https://portal.azure.com) and open your **API Management instance**.

2. **Navigate to Subscriptions**:
   On the left menu, click on **"Subscriptions"**.

3. **Click "+ Add subscription"**.

4. **Fill in the Subscription Details**:

   * **Display name**: Give a meaningful name (e.g., "Dev Env Key", "Mobile App Key").
   * **User**: Select an existing developer or create a new one.
   * **Scope**: Choose the **Product** the subscription applies to.
   * **State**: Leave as **Active** (or set to Awaiting Approval if needed).
   * (Optional) Generate or paste custom keys.

5. **Click "Create"**.

6. 🎉 **Done!** The user now has another subscription key (with its own primary and secondary keys).

7. 🔄 **Repeat steps 3–6** to create as many subscriptions (and keys) as needed.

> 📌 Note: Each subscription is tied to a specific product. You can create **multiple subscriptions to the same product** or different products for the same user.

---

## 📦 Products and Subscription Configuration

### What is a Product?

A **Product** in APIM is a logical container for one or more APIs.

### Product Settings:

| Setting                  | Description                                          |
| ------------------------ | ---------------------------------------------------- |
| **Require Subscription** | Enforces API key requirement                         |
| **Approval Required**    | Admin approval needed for subscription               |
| **Rate Limit / Quota**   | Configure throttling and usage limits                |
| **Visibility**           | Control access via groups (admins, developers, etc.) |

---

## 📊 Managing Subscription Limits

Azure APIM doesn't limit the number of subscriptions per user by default.

If you want to enforce **1 subscription per product per user**, consider:

* Using **Azure Logic Apps / Functions** to monitor and prevent duplicates.
* Custom workflows or policies in the **Developer Portal**.

---

## 🔐 Key Rotation and Security Best Practices

* 🔁 Use **Primary/Secondary keys** for smooth key rotation.
* 🛑 **Revoke compromised** keys immediately by regenerating.
* 🧼 **Clean up** unused subscriptions regularly.
* 🔒 Store keys securely – never expose in frontend code.

---

## ⚙️ Sample Policy to Enforce Subscription Key

You can add a policy to check for the subscription key:

```xml
<inbound>
    <base />
    <check-header name="Ocp-Apim-Subscription-Key" failed-check-httpcode="401" failed-check-error-message="Subscription key is missing." />
</inbound>
```

---

## 📘 Useful Links

* [Azure API Management Documentation](https://learn.microsoft.com/en-us/azure/api-management/)
* [Manage Subscriptions in APIM](https://learn.microsoft.com/en-us/azure/api-management/api-management-subscriptions)
* [Secure APIs with API Keys](https://learn.microsoft.com/en-us/azure/api-management/api-management-subscriptions#require-subscriptions)

---
 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

