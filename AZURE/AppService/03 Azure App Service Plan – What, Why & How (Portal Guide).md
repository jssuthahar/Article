
# 🗂 Azure App Service Plan – What, Why & How (Portal Guide)

## 📘 What is an App Service Plan?

An **App Service Plan** in Azure defines:
- The **location (region)** where your app runs
- The **size and power** of the underlying server
- The **features** available (like scaling, SSL, custom domains)

Think of it like **choosing a mobile data plan** — the plan you choose controls the limits, performance, and cost of your web app.

---

## 💡 Why Do We Need an App Service Plan?

You **cannot create a Web App without an App Service Plan**. It is required because it:

- 📍 Determines **where** (region) your app will run
- 💻 Decides **how much CPU/RAM/storage** your app will get
- 🔐 Enables advanced features like SSL, backups, VNET integration, etc.
- 💰 Controls **how much you pay** (Free, Basic, Premium, etc.)

---

## 🔎 How to Create an App Service Plan (Using Azure Portal)

### Step 1: Sign in
Go to [https://portal.azure.com](https://portal.azure.com)

### Step 2: Search “App Service Plan” in the top search bar

### Step 3: Click **Create**

### Step 4: Fill in the details:
- **Subscription**: Choose your Azure subscription
- **Resource Group**: Create new or use existing
- **Name**: Give a name like `MyAppServicePlan`
- **Region**: Choose a location near your users
- **Pricing Tier**: Click **“Change size”** and choose:
  - Free (F1) – for learning/testing
  - Basic – for dev/test
  - Standard – for production
  - Premium – for high traffic apps

### Step 5: Click **Review + Create**, then **Create**

---

## 🧱 App Service Plan vs Web App

| Feature               | App Service Plan                                 | Web App                      |
|------------------------|--------------------------------------------------|------------------------------|
| Defines compute power  | ✅ Yes                                           | ❌ No                        |
| Can host multiple apps | ✅ Yes                                           | ❌ Each web app is separate |
| Has cost/pricing       | ✅ Yes                                           | ❌ Web App cost is based on plan |
| Created first?         | ✅ Must create this to host a web app           | 🚀 Web App is deployed on the plan |

---

## 📊 Types of Plans (When Selecting Pricing Tier)

| Plan        | Use Case                        | Key Features                          |
|-------------|----------------------------------|----------------------------------------|
| **Free (F1)**   | Learning, testing              | Shared CPU, no SLA                     |
| **Basic**       | Dev/testing                   | Dedicated VM, custom domain            |
| **Standard**    | Production                    | Auto-scale, SSL, daily backups         |
| **Premium**     | High traffic apps             | VNET, faster CPUs, staging slots       |
| **Isolated**    | Secure enterprise apps        | Private environment (ASE), VNET only   |

---

## ⚠️ Do's and Don'ts

### ✅ Do's

- ✔ Choose **Free** for demos or classroom projects
- ✔ Select a **region close to your users**
- ✔ Use the **same plan** to host multiple small apps (to save cost)
- ✔ Use **Standard or Premium** for production apps
- ✔ Monitor performance in the **App Service Plan → Metrics**

### ❌ Don'ts

- ❌ Don’t use Free/Shared for real business apps
- ❌ Don’t deploy high-traffic and low-traffic apps on the same plan
- ❌ Don’t choose a region far from your users (causes latency)
- ❌ Don’t forget to review pricing before deploying

---

## 📚 Resources

- 🔗 [Azure Portal - App Service Plan](https://portal.azure.com)
- 🔗 [Microsoft Docs - App Service Plan](https://learn.microsoft.com/en-us/azure/app-service/overview-hosting-plans)
- 🔗 [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/)

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
