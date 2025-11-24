# Azure Deployment Slots Automation 

## 🌟 Overview

Azure Deployment Slots allow you to deploy your application to a **staging environment** before pushing it to production. Automating these deployments ensures **safe, faster, and zero-downtime releases**.

---

## 🔹 What Are Deployment Slots?

A **deployment slot** is a live app environment in Azure App Service that runs alongside your production app.

* Common slots: `staging`, `dev`, `test`.
* You can **swap slots** to push tested code to production without downtime.

**Visual:**

```
[ Dev Slot ] --> [ Staging Slot ] --> [ Production Slot ]
       |           | 
   Deploy        Test 
```

---

## 🔹 Why Automate?

* Deploy automatically on **code commits**.
* Run tests in **staging** before production.
* Enable **blue-green deployments**.
* Reduce **manual errors**.
* Achieve **zero downtime**.

---

## 🔹 Automation Methods

### 1️⃣ Azure DevOps Pipeline

1. Build the application.
2. Deploy to **staging slot**.
3. Run automated tests.
4. Swap **staging → production** if tests pass.

**Sample YAML Snippet:**

```yaml
- task: AzureWebApp@1
  inputs:
    azureSubscription: 'MyAzureSubscription'
    appName: 'my-app'
    slotName: 'staging'
    package: '$(System.DefaultWorkingDirectory)/drop/myapp.zip'

- task: AzureAppServiceManage@0
  inputs:
    Action: 'Swap Slots'
    WebAppName: 'my-app'
    ResourceGroupName: 'myResourceGroup'
    SourceSlot: 'staging'
    TargetSlot: 'production'
```

---

### 2️⃣ GitHub Actions

Automate deployment and swap using **GitHub workflow**.

```yaml
name: Deploy to Azure Slot
on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Deploy to Staging Slot
        uses: azure/webapps-deploy@v2
        with:
          app-name: 'my-app'
          slot-name: 'staging'
          publish-profile: ${{ secrets.AZUREAPPSERVICE_PUBLISHPROFILE }}

      - name: Swap Slots
        run: az webapp deployment slot swap \
              --resource-group myResourceGroup \
              --name my-app \
              --slot staging \
              --target-slot production
```

---

### 3️⃣ Azure CLI / PowerShell

Deploy and swap using **scripts**:

```bash
# Deploy to staging
az webapp deployment source config-zip \
    --resource-group myResourceGroup \
    --name myApp \
    --slot staging \
    --src myapp.zip

# Swap staging → production
az webapp deployment slot swap \
    --resource-group myResourceGroup \
    --name myApp \
    --slot staging \
    --target-slot production
```

> 💡 Tip: You can schedule these scripts using **Azure DevOps**, **GitHub Actions**, or even **Azure Automation**.

---

### 4️⃣ ARM Template / Bicep

* Define slots and deployment settings as **Infrastructure as Code**.
* Deploy consistently using pipelines.

---

## 🔹 Recommended Automation Flow

```
[ Code Commit ] 
       ↓
[ Build Pipeline ]
       ↓
[ Deploy to Staging Slot ]
       ↓
[ Run Tests / QA ]
       ↓
[ Swap Staging → Production ]
       ↓
[ Monitor Logs ]
```

---

## 🔹 Best Practices

* Always test in a **staging slot** before swapping.
* Use **Swap with Preview** to verify before production.
* Store **secrets** in **Azure Key Vault** or pipeline secrets.
* Monitor **deployment logs** for errors.
* Use **slots for blue-green deployment** to reduce downtime.

---

## 🔹 References

* [Azure Deployment Slots Documentation](https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots)
* [Azure CLI Deployment Guide](https://learn.microsoft.com/en-us/cli/azure/webapp/deployment)
* [GitHub Actions for Azure Web Apps](https://github.com/Azure/actions)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)


