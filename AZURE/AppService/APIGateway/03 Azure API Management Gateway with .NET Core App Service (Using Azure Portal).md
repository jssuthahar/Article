
# 🌐 Azure API Management Gateway with .NET Core App Service (Using Azure Portal)

This document explains how to set up an **Azure API Management (APIM)** gateway and expose a **.NET Core Web API** hosted on **Azure App Service** — all through the Azure Portal.

---

## 🧰 Prerequisites

- A .NET Core Web API project
- An active Azure subscription
- Basic knowledge of the Azure Portal

---

## 🏗️ Step 1: Create a .NET Core Web API Project (Locally)

1. Open **Visual Studio** or **VS Code**
2. Create a new project:
   - Project type: `ASP.NET Core Web API`
   - Name: `MyApiApp`
   - Framework: `.NET 6` or `.NET 7`

3. Press `F5` or click **Run** to test locally.
4. Verify it runs at `https://localhost:5001/weatherforecast`

---

## 🚀 Step 2: Publish API to Azure App Service

1. In Visual Studio:
   - Right-click the project → **Publish**
   - Choose **Azure** → **Azure App Service (Windows/Linux)**
   - Create a new App Service (if not available)
   - Choose:
     - **App Name**: e.g., `myapiapp2025`
     - **Resource Group**: e.g., `MyAppRG`
     - **Hosting Plan**: Select or create

2. Click **Finish** → **Publish**

3. Once deployed, test your API:
```

[https://myapiapp2025.azurewebsites.net/weatherforecast](https://myapiapp2025.azurewebsites.net/weatherforecast)

```

---

## ⚙️ Step 3: Create Azure API Management (APIM) Instance

1. In Azure Portal, search **API Management services**
2. Click **+ Create**
3. Fill in:
- **Name**: e.g., `my-apim-gateway`
- **Resource Group**: `MyAppRG`
- **Location**: Same as App Service
- **Pricing Tier**: `Developer (no SLA)` for testing

4. Click **Review + Create** → **Create**

> ⏳ Takes ~30–40 mins to provision

---

## 🔗 Step 4: Connect App Service to APIM

1. Go to your **API Management instance**
2. On the left, go to **APIs** → **+ Add API**
3. Select **App Service** (recommended option)

4. Choose your deployed app:
- App: `myapiapp2025`
- App path: auto-filled or set `/weatherforecast`
- API name: `MyAPI`
- API URL suffix: `myapi`
- Web service URL: pre-filled by Azure

5. Click **Create**

---

## 🧪 Step 5: Test Your API via API Management

1. In the APIM service, go to **APIs** → `MyAPI`
2. Click the **Test** tab
3. Choose the `GET /weatherforecast` endpoint
4. Click **Send**

✅ You should get a valid JSON response from your App Service through the API Gateway.

---

## 🔐 Step 6: Remove Subscription Key Requirement (Optional)

By default, APIM requires a subscription key in the header.

To disable it (for open/public APIs):

1. Go to **APIs → MyAPI → Settings**
2. Toggle **Subscription required** to **Off**
3. Save changes

---

## 🌐 Final API URL Format

Once configured, your public API endpoint will look like this:

```

[https://my-apim-gateway.azure-api.net/myapi/weatherforecast](https://my-apim-gateway.azure-api.net/myapi/weatherforecast)

```

You can now share or secure this gateway URL as needed.

---

## 📘 Tips and Enhancements

- 🔄 **Versioning**: Use the Versions tab in APIM to manage multiple API versions.
- 🛡 **Security**: Add JWT/OAuth validation in the **Inbound policy** section.
- 📈 **Analytics**: Monitor traffic and performance in the APIM **Analytics** tab.
- 🌍 **Custom Domain**: Map your own domain to the APIM gateway for branding.

---

## 📎 References

- [API Management Overview](https://learn.microsoft.com/en-us/azure/api-management/api-management-key-concepts)
- [Publish ASP.NET Core to Azure App Service](https://learn.microsoft.com/en-us/aspnet/core/tutorials/publish-to-azure-webapp-using-vs)
- [Use API Management to expose App Services](https://learn.microsoft.com/en-us/azure/api-management/import-app-service-web-app)


## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
f you'd like this version tailored for a **.NET + Angular full-stack app** setup, or if you want to include a **GitHub Actions CI/CD pipeline** for deploying APIs to Azure APIM.
```
