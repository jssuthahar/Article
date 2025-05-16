
# Deploying Angular Project to Azure App Service

This guide walks you through deploying an Angular app to Azure App Service.

---

## 🛠️ Prerequisites

- Angular CLI installed (`npm install -g @angular/cli`)
- Azure CLI installed (`npm install -g azure-cli`)
- An Azure subscription
- Visual Studio Code (optional)

---

## 🚀 Step 1: Build Angular App

Run the following command to build your Angular app for production:

```bash
ng build --configuration production
````

This will output the build files into `dist/your-project-name`.

---

## ☁️ Step 2: Create Azure App Service

1. Go to [Azure Portal](https://portal.azure.com)
2. Click on **Create a resource** > **App Service**
3. Provide details:

   * **App Name**
   * **Runtime stack**: Node.js (or others)
   * **Region**
   * **Pricing Plan**
4. Click **Review + Create** > **Create**

---

## 🔐 Step 3: Login to Azure CLI

```bash
az login
```

---

## 📦 Step 4: Deploy Using Azure CLI

Navigate to the build folder:

```bash
cd dist/your-project-name
```

Then deploy:

```bash
az webapp up --name <your-app-service-name> --location <region> --html
```

Replace `<your-app-service-name>` and `<region>` with your Azure app details.

---

## ⚙️ Optional: web.config for IIS (Windows-based App Service)

Create a `web.config` file in the `dist/your-project-name/` folder with the following content:

```xml
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Angular Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/index.html" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

---

## 🌐 Step 5: Access Your App

Visit:

```
https://<your-app-service-name>.azurewebsites.net
```

---

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
