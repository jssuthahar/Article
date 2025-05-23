
# Azure API Management – API Versioning Example

This project demonstrates how to implement **API versioning** in **Azure API Management (APIM)**. It includes a sample backend API and APIM configuration that supports multiple versions of the API using different versioning strategies.

## 🚀 Features

- 🎯 API Versioning via:
  - URL Path (e.g., `/v1/products`)
  - Query String (e.g., `/products?api-version=1.0`)
  - HTTP Header (e.g., `api-version: 1.0`)
- 🔐 Azure API Management Gateway integration
- 🌐 Sample Backend API (ASP.NET Core Web API)
- 📘 Swagger UI for each API version
- 🧪 Postman collection for testing

---

## 📁 Project Structure

```plaintext
azure-apim-versioning/
│
├── backend-api/                    # ASP.NET Core Web API
│   └── Controllers/
│       ├── ProductsV1Controller.cs
│       └── ProductsV2Controller.cs
│
├── apim/                           # APIM configuration templates (bicep/ARM)
│   └── api-versioning-config.json
│
├── postman/
│   └── Azure-APIM-Versioning.postman_collection.json
│
└── README.md
````

---

## 🛠️ API Versioning Strategies

Azure API Management supports the following versioning schemes:

### 1. URL Path Versioning

**Example**: `https://<apim-url>/v1/products`

**APIM Config**:

```json
"versioningScheme": "Segment",
"version": "v1"
```

### 2. Query String Versioning

**Example**: `https://<apim-url>/products?api-version=1.0`

**APIM Config**:

```json
"versioningScheme": "Query",
"versionQueryName": "api-version",
"version": "1.0"
```

### 3. HTTP Header Versioning

**Example**: `api-version: 2.0` in request headers

**APIM Config**:

```json
"versioningScheme": "Header",
"versionHeaderName": "api-version",
"version": "2.0"
```

---

## 🚧 Prerequisites

* Azure subscription
* [.NET 6 SDK](https://dotnet.microsoft.com/)
* [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/)
* Postman (optional for testing)

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/<your-org>/azure-apim-versioning.git
cd azure-apim-versioning
```

### 2. Run Backend API

```bash
cd backend-api
dotnet run
```

### 3. Deploy APIM Configuration

> You can use Bicep/ARM templates or manually configure via Azure Portal.

Example:

```bash
az deployment group create --resource-group <your-rg> --template-file apim/api-versioning-config.bicep
```

---

## 📬 Test with Postman

Use the Postman collection provided in the `/postman` folder to test each versioning scheme.

---

## 📚 Documentation

* [Azure API Management Documentation](https://learn.microsoft.com/en-us/azure/api-management/)
* [API Versioning in APIM](https://learn.microsoft.com/en-us/azure/api-management/api-management-api-revisions)

---

---
 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

