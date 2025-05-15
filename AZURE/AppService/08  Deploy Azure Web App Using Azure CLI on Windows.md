
# Deploy Azure Web App Using Azure CLI on Windows

This guide helps you deploy a web app to Azure using Azure CLI from a **Windows machine** (Command Prompt or PowerShell).

---

## Prerequisites

- Install **Azure CLI** for Windows:  
  Download from [https://aka.ms/installazurecliwindows](https://aka.ms/installazurecliwindows) and follow installation instructions.
- Have your app code ready locally (any language/runtime supported by Azure Web Apps).
- Azure account ([Create free account](https://azure.microsoft.com/free/)).

---

## Step 1: Open Command Prompt or PowerShell

Press `Win + R`, type `cmd` or `powershell`, and press Enter.

---

## Step 2: Login to Azure

```powershell
az login
````

* This opens a browser window.
* Log in with your Azure credentials.
* Return to the terminal when complete.

---

## Step 3: Create Resource Group

Choose a name and Azure region.

```powershell
az group create --name MyResourceGroup --location eastus
```

---

## Step 4: Create App Service Plan

Basic Linux plan example (omit `--is-linux` for Windows):

```powershell
az appservice plan create --name MyAppServicePlan --resource-group MyResourceGroup --sku B1 --is-linux
```

---

## Step 5: Create Web App

Make sure the app name is unique globally.

```powershell
az webapp create --resource-group MyResourceGroup --plan MyAppServicePlan --name MyUniqueAppName --runtime "NODE|14-lts"
```

---

## Step 6: Deploy Your Application Code

### Option A: Using ZIP Deploy

1. Open PowerShell in your app folder.
2. Zip your app:

```powershell
Compress-Archive -Path * -DestinationPath app.zip
```

3. Deploy zip:

```powershell
az webapp deployment source config-zip --resource-group MyResourceGroup --name MyUniqueAppName --src app.zip
```

---

### Option B: Using Git Deployment (Optional)

1. Initialize git if not done:

```powershell
git init
git add .
git commit -m "Initial commit"
```

2. Set deployment user (only once):

```powershell
az webapp deployment user set --user-name <username> --password <password>
```

3. Configure local git deployment:

```powershell
az webapp deployment source config-local-git --name MyUniqueAppName --resource-group MyResourceGroup
```

4. Copy the Git remote URL from the output.

5. Add remote and push:

```powershell
git remote add azure <GIT_REMOTE_URL>
git push azure master
```

---

## Step 7: Access Your Web App

Open in browser:

```
https://MyUniqueAppName.azurewebsites.net
```

---

## Step 8: Clean Up Resources (Optional)

```powershell
az group delete --name MyResourceGroup --yes --no-wait
```

---

## Summary

You successfully deployed an Azure Web App using Azure CLI on Windows by:

* Logging in
* Creating resource group & app service plan
* Creating the web app
* Deploying code (zip or git)
* Accessing your app

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
