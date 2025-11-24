
# 🚀 **Azure App Service Deployment Slots – Complete Beginner to Expert Guide**

Deployment Slots are one of the most powerful and business-critical features in Azure App Service.
They allow you to deploy, test, validate, and release applications with **zero downtime**, **safe rollback**, and **production-like testing environments**.

This README covers everything from **beginner basics** to **advanced enterprise practices**.

---

# 📚 **Table of Contents**

1. What Are Deployment Slots?
2. Why Use Deployment Slots?
3. Requirements & Pricing Tier
4. How Deployment Slots Work
5. Creating Your First Deployment Slot (Step-by-Step)
6. Deployment Slot Settings
7. Swap Operations

   * Normal Swap
   * Swap with Preview
8. Zero Downtime Deployment
9. Testing in a Deployment Slot
10. Typical Multi-Slot Setup (Dev → Staging → Prod)
11. CI/CD With Deployment Slots
12. Rollback Strategy
13. Best Practices
14. Troubleshooting Common Issues
15. Full Hands-On Lab for Students

---

# 🧩 **1. What Are Deployment Slots?**

A **deployment slot** is a live, fully functional environment inside your Azure App Service.
Each slot runs your app independently with its own:

* URL
* Configuration (App Settings + Connection Strings)
* Deployment History
* Authentication settings
* Monitoring logs

Your primary slot is always **Production**, and you can create additional slots such as:

* Staging
* Dev
* QA
* UAT
* Testing

---

# 🚀 **2. Why Use Deployment Slots?**

| Benefit                            | Explanation                                        |
| ---------------------------------- | -------------------------------------------------- |
| **Zero Downtime Deployment**       | New app version is warmed up before going live.    |
| **No Risk of Breaking Production** | Test new changes on staging URL first.             |
| **Fast Rollback**                  | Swap back to previous version in seconds.          |
| **Separate Testing URL**           | Test with real users/business team before release. |
| **Isolated Configurations**        | Each slot can have different settings.             |

Deployment Slots are ideal for:

* Enterprise applications
* E-commerce websites
* Banking/ERP/CRM solutions
* Any application requiring reliable deployments

---

# 💰 **3. Requirements & Pricing Tier**

Deployment slots are available only for these App Service Plans:

| Tier                    | Supports? |
| ----------------------- | --------- |
| Free (F1)               | ❌ No      |
| Shared (D1)             | ❌ No      |
| Basic (B1/B2/B3)        | ❌ No      |
| **Standard (S1/S2/S3)** | ✅ Yes     |
| **Premium (P1/P2/P3)**  | ✅ Yes     |
| **PremiumV2/V3**        | ✅ Yes     |

Minimum required: **Standard S1**

---

# ⚙️ **4. How Deployment Slots Work (Concept)**

Each slot has:

* Separate URL
* Same compute resources
* Separate app settings
* Separate deployment pipelines

When you **swap**, Azure does:

### ✔ Step 1: Warm-up

Starts the app in the target slot.

### ✔ Step 2: Health check

Ensures app works and responds.

### ✔ Step 3: Traffic reroute

Moves production traffic to the new slot instantly.

**Result: Zero downtime!**

---

# 🏗 **5. Creating Your First Deployment Slot (Step-by-Step)**

### **Step 1 — Open Your Azure Web App**

Go to:
Azure Portal → App Services → Your Web App

### **Step 2 — Select Deployment Slots**

Left sidebar → "Deployment Slots"

### **Step 3 — Add a New Slot**

Click:
**➕ Add Slot**

Enter details:

* Slot Name: `staging`
* Clone Settings from: Production ✔ (Recommended)

### **Step 4 — Deploy to Staging Slot**

Deploy your application using:

* Visual Studio
* VS Code
* GitHub Actions
* Azure DevOps
* ZIP Deploy
* FTP

Your staging URL will look like:

```
https://yourapp-staging.azurewebsites.net
```

Test this URL.

---

# 🧩 **6. Deployment Slot Settings**

Each slot has its own:

### ✔ App Settings

(e.g., `ASPNETCORE_ENVIRONMENT`)

### ✔ Connection Strings

(e.g., DB connections)

### ✔ Authentication Settings

(e.g., Azure AD)

### ✔ Environment Variables

### ⭐ **Slot Settings (Very Important)**

Some settings must remain unique per slot.

Mark them as **"Slot Settings"** so they do *not* swap.

Examples:

| Setting                  | Should it swap? |
| ------------------------ | --------------- |
| Production DB Connection | ❌ No            |
| Logging Level            | ❌ No            |
| API Keys                 | ❌ No            |
| Environment Name         | ❌ No            |
| Payment Gateway Keys     | ❌ No            |

---

# 🔄 **7. Swap Operations**

There are **two types** of swaps.

---

## 🔁 **A. Normal Swap**

Instantly swaps:

* Code
* App Settings
* Production traffic

Use when you are already confident.

---

## 🔎 **B. Swap With Preview (Recommended)**

This is a **two-phase** safe swap:

### ✔ Phase 1: PRE-SWAP

Azure applies **production configuration** to the **staging slot only**.

You test:

* Production settings
* Production API
* Production databases
* Full functionality

All WITHOUT affecting live users.

### ✔ Phase 2: SWAP

Once validated, you complete the swap.

This method prevents almost all release errors.

---

# 🟢 **8. Zero Downtime Deployment (How Azure Does It)**

Azure ensures zero downtime by:

### ✔ Preloading & Warm-up

The app is warmed up in staging slot.

### ✔ Health URL

App must return HTTP 200.

### ✔ Traffic Routing

Azure switches routing instantly.

Users experience NO:

* Outages
* Errors
* Restart delays
* Timeout issues

---

# 🧪 **9. Testing in a Deployment Slot Before Going Live**

Use the staging slot as a **full testing environment**.

### You can test:

* New UI
* New API
* New database changes
* Load performance
* Authentication
* Payment gateway
* Integration tests
* UAT (Business User Testing)
* QA sign-off

### Students can test:

* Deployment strategies
* App configuration
* Rollback features

---

# 🏛 **10. Typical Multi-Slot Setup: Dev → Staging → Prod**

A professional deployment pipeline has:

```
Dev Slot → Staging Slot → Production Slot
```

## ✔ DEV SLOT

* For developers
* CI/CD pushes here automatically

## ✔ STAGING SLOT

* For QA/UAT testing
* Swap with preview
* Used for business validation

## ✔ PRODUCTION SLOT

* Live customers
* Locked down
* Swap only after approvals

---

# 🔧 **11. CI/CD With Deployment Slots**

### Supported CI/CD:

* GitHub Actions
* Azure DevOps
* Bitbucket
* GitLab
* Local Git

Example GitHub Actions Flow:

```
build → deploy to dev slot → test → deploy to staging → manual approval → swap to prod
```

---

# 🛑 **12. Rollback Strategy (Instant Revert)**

Rollback is extremely easy.

If the new version fails after swap:

1. Go to Deployment Slots
2. Click Swap
3. Reverse: Production → Staging
4. Complete swap

Your previous stable version goes live in seconds.

---

# 🧠 **13. Best Practices (Beginner to Expert)**

### **Beginner**

✔ Always test in staging before going live
✔ Use Swap with Preview
✔ Avoid connecting staging to production DB

### **Intermediate**

✔ Use Secrets in Key Vault
✔ Enable Health Checks
✔ Enable Application Insights logging

### **Advanced**

✔ Multi-slot rollouts
✔ Canary release using traffic routing (30% → 70% → 100%)
✔ Automation via CI/CD YAML
✔ Use VNet Integration and Private endpoints

---

# ❗ **14. Troubleshooting**

| Issue                       | Fix                                     |
| --------------------------- | --------------------------------------- |
| Swap failed                 | Check warm-up settings, health check    |
| Staging using production DB | Set "Slot Settings" to prevent swapping |
| App slow after swap         | Enable "Always On"                      |
| Staging not loading         | Check firewall / connection strings     |
| URL not working             | Restart the slot                        |

---

# 🧪 **15. Full Hands-On Lab (For Students)**

### **Lab 1 — Create Web App & Staging Slot**

* Create Web App
* Add a "staging" slot
* Deploy code
* Test URL

### **Lab 2 — Swap With Preview**

* Modify UI version
* Deploy to staging
* Swap with preview
* Validate
* Swap to production

### **Lab 3 — Rollback**

* Introduce a bug
* Deploy to staging
* Swap
* Observe issue
* Rollback

### **Lab 4 — CI/CD**

* Configure GitHub Actions
* Deploy to Dev Slot
* Push code and verify

---
## ⭐ Start & Follow Me
If you find this repository useful, don't forget to **Star** ⭐ the repo and **Follow** me for more updates!

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)



