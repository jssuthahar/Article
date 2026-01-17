# 🚀 App Registration, API Gateway & JWT Authentication – Complete Guide

---

## 📘 Overview

This document explains how to secure APIs using:

* **Azure App Registration**
* **Microsoft Entra ID**
* **JWT Token Authentication**
* **Azure API Management (API Gateway)**
* **Postman Token Testing**

---

## 🧠 Architecture Diagram

```
Postman / Client App
        |
        v
Azure Entra ID (OAuth 2.0)
        |
   JWT Access Token
        |
        v
Azure API Management (API Gateway)
        |
        v
Backend API (.NET / Node / Java)
```

---

## 🔐 What is App Registration?

App Registration allows your application to:

* Authenticate users or services
* Generate **JWT access tokens**
* Define **API scopes**
* Control **access permissions**

---

## 🔑 What is JWT Token?

JWT = **JSON Web Token**

A secure token used for authorization.

Structure:

```
Header.Payload.Signature
```

Contains:

* Client ID
* Tenant ID
* Scope
* Expiry time
* Digital signature

---

# ⚙️ STEP 1: Create App Registration

### Azure Portal Path

```
Azure Portal
 → Microsoft Entra ID
   → App registrations
     → New registration
```

### Enter Details

| Field        | Value           |
| ------------ | --------------- |
| Name         | Demo-Secure-API |
| Account type | Single tenant   |
| Redirect URI | Not required    |

Click **Register**.

---

### 📌 Save These Values

* Application (Client) ID
* Directory (Tenant) ID

---

# 🔐 STEP 2: Create Client Secret

```
App registration
 → Certificates & secrets
   → New client secret
```

* Name: api-secret
* Expiry: 6 or 12 months
* Click **Add**

⚠️ Copy secret immediately.

---

# 🌐 STEP 3: Expose API

```
App registration
 → Expose an API
```

### Set Application ID URI

```
api://demo-api
```

Click **Save**.

---

### Add API Scope

| Field        | Value             |
| ------------ | ----------------- |
| Scope name   | access_api        |
| Consent name | Access secure API |
| Description  | Allow API access  |

Click **Add scope**.

---

# 🔑 STEP 4: Configure API Permissions

```
App registration
 → API permissions
   → Add permission
     → My APIs
```

Select your API and choose:

```
access_api
```

Click:

```
Grant admin consent
```

---

# 🌐 STEP 5: Create API Gateway (APIM)

```
Azure Portal
 → API Management
   → APIs
     → Add API
       → HTTP API
```

Example:

| Field           | Value                                            |
| --------------- | ------------------------------------------------ |
| API name        | DemoSecureAPI                                    |
| Web service URL | [https://localhost:5001](https://localhost:5001) |
| URL suffix      | secure                                           |

Click **Create**.

---

# 🔐 STEP 6: Configure JWT Validation Policy (UI Steps)

---

## 📍 Navigation

```
API Management
 → APIs
   → DemoSecureAPI
     → Design
       → All operations
         → Inbound processing
```

---

## 🪜 UI Steps

1. Select **All operations**
2. Click **Inbound processing**
3. Click **</> Code view**
4. Add the policy inside `<inbound>`

---

### ✅ JWT Validation Policy

```xml
<validate-jwt header-name="Authorization"
              failed-validation-httpcode="401"
              failed-validation-error-message="Unauthorized">

    <openid-config url="https://login.microsoftonline.com/{TENANT-ID}/v2.0/.well-known/openid-configuration" />

    <required-claims>
        <claim name="aud">
            <value>api://demo-api</value>
        </claim>
    </required-claims>

</validate-jwt>
```

---

### 🔁 Replace Values

| Placeholder      | Value              |
| ---------------- | ------------------ |
| `{TENANT-ID}`    | Azure tenant ID    |
| `api://demo-api` | Application ID URI |

---

## 🔍 What API Gateway Validates

* Token signature
* Token issuer
* Token expiry
* Audience
* Authorization header

---

# 🧪 STEP 7: Generate JWT Token Using Postman

---

## 🔹 Token Endpoint

```
POST
https://login.microsoftonline.com/{TENANT-ID}/oauth2/v2.0/token
```

---

## 🔹 Headers

```
Content-Type: application/x-www-form-urlencoded
```

---

## 🔹 Body (x-www-form-urlencoded)

| Key           | Value                   |
| ------------- | ----------------------- |
| client_id     | Application ID          |
| client_secret | Client secret           |
| scope         | api://demo-api/.default |
| grant_type    | client_credentials      |

---

## ✅ Token Response

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIs...",
  "expires_in": 3600,
  "token_type": "Bearer"
}
```

---

# 🔐 STEP 8: Test API with Token

---

## API Request

```
GET https://{apim-name}.azure-api.net/secure/products
```

---

## Headers

```
Authorization: Bearer <access_token>
```

---

## ✅ Success

```json
[
  {
    "id": 1,
    "name": "Laptop"
  }
]
```

---

## ❌ Without Token

```
401 Unauthorized
```

---

# 🔍 JWT Validation Flow

1. Client requests token
2. Entra ID validates client
3. JWT issued
4. API Gateway validates JWT
5. Request forwarded to backend

---

# ⚠️ Common Errors

| Error            | Cause                  |
| ---------------- | ---------------------- |
| 401              | Missing token          |
| Invalid audience | Wrong API URI          |
| Token expired    | Generate new token     |
| 403              | Permission not granted |

---

# 🧠 Interview Key Points

* OAuth 2.0 authentication
* JWT is stateless
* API Gateway secures APIs
* Backend does not validate JWT
* Token expiry usually 60 minutes
* Supports RBAC and scopes
