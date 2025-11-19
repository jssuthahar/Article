

# 🚀 How to Upgrade Azure App Service Plan for Custom Domain

### **Complete Step-by-Step Guide**

Custom domains are **not supported** on the Free (F1) or Shared (D1) tiers of Azure App Service.
To use your own domain like `www.yourcompany.com`, you must upgrade your App Service Plan to **Basic (B1) or higher**.

This guide explains:

* Why upgrade is required
* Supported plans
* How to upgrade the App Service Plan
* How to assign custom domains after upgrade
* Troubleshooting
* FAQ

---

## 📌 1. Why You Need to Upgrade the Plan

Azure only allows custom domains on paid plans.
Here is the support level:

| Plan                       | Custom Domain Support |
| -------------------------- | --------------------- |
| Free (F1)                  | ❌ Not supported       |
| Shared (D1)                | ❌ Not supported       |
| Basic (B1, B2, B3)         | ✅ Supported           |
| Standard (S1, S2, S3)      | ✅ Supported           |
| Premium (P1v2, P2v2, P3v2) | ✅ Supported           |
| Isolated                   | ✅ Supported           |

If your app is on **F1 or D1**, you must upgrade the **App Service Plan**, not the Web App.

---

## 📌 2. How to Check Your Current App Service Plan

1. Go to **Azure Portal**
2. Search for **App Services**
3. Select your Web App
4. On the left menu → click **App Service Plan**
5. You will see something like:

* *F1 (Free)*
* *D1 (Shared)*
* *B1 (Basic)* etc.

---

## 📌 3. How to Upgrade Your App Service Plan (Step-by-Step)

### **Step 1 — Open Your App Service Plan**

1. Go to Azure Portal
2. Open your Web App
3. Click **App Service Plan → Scale Up (App Service Plan)**

### **Step 2 — Choose a Plan That Supports Custom Domain**

Select **Basic (B1)** or above.

Recommended starting point:

* **B1 (Basic Tier)**

  * Supports custom domains
  * Affordable
  * Good for small/medium apps

### **Step 3 — Click Apply**

Azure will update the plan within 1–3 minutes.

⚠️ No downtime usually occurs, but plan resize can temporarily reallocate compute.

---

## 📌 4. After Upgrade — How to Add a Custom Domain

### **Step 1 — Go to Custom Domains**

1. Open your Web App in Azure
2. Click **Custom domains** in the left menu

### **Step 2 — Add Your Domain**

Click **Add custom domain**

Enter your domain:
`www.yourcompany.com`

### **Step 3 — Create DNS Record in Domain Provider**

Azure will show two options:

#### **A. CNAME Record (Most Common)**

In your domain portal (GoDaddy, Namecheap, Hostinger, etc.):

| Type  | Name | Value                     |
| ----- | ---- | ------------------------- |
| CNAME | www  | yourapp.azurewebsites.net |

#### **B. A Record (Optional for apex domains)**

Azure will show:

* IP Address
* TXT record for verification

Example:

| Type | Host | Value             |
| ---- | ---- | ----------------- |
| A    | @    | 20.44.xx.xx       |
| TXT  | @    | asuid.yourappname |

### **Step 4 — Verify**

Click **Validate**

If found correctly, Azure will allow you to **Add Domain**.

---

## 📌 5. How to Enable HTTPS (Recommended)

After domain is added:

1. Go to **TLS/SSL Settings**
2. Click **Private Key Certificates (.pfx)**
3. Choose **Create App Service Managed Certificate**
4. Apply SSL Binding
5. Enable **HTTPS Only = On**

---

## 📌 6. Most Common Errors & Fixes

### ❌ **Error: “Custom domains are not allowed on the current pricing tier.”**

You are still on:

* F1 (Free)
* D1 (Shared)

👉 You must upgrade to **B1 or above**.

---

### ❌ “DNS record not found”

Check:

* Correct record type
* No extra spaces
* TTL set to **1 minute**
* CNAME not mixing with A record

DNS may take 5–10 minutes to propagate.

---

### ❌ "Domain already in use"

Another Azure app is using the domain.

Fix:

* Remove domain from the old web app
* Then re-add

---

## 📌 7. Cost Details (Approx.)

Azure pricing varies by region; typical monthly prices:

| Tier   | Approx Cost / Month | Supports Domain |
| ------ | ------------------- | --------------- |
| F1     | Free                | ❌               |
| D1     | $10–$12             | ❌               |
| **B1** | **$13–$15**         | ✅               |
| S1     | $40–$50             | ✅               |

---

## 📌 8. Checklist Before Adding Domain

✔ Upgraded to B1 or higher
✔ Domain DNS managed (GoDaddy / Namecheap / Hostinger)
✔ Created correct CNAME or A + TXT records
✔ DNS fully propagated
✔ HTTPS certificate created

---

## 📌 9. Example Real Scenario

### You want to use domain:

```
www.jsdevbrains.com
```

Steps:

1. Upgrade App Service Plan → B1
2. Add custom domain
3. Go to Hostinger → Add:

```
CNAME → www → yourapp.azurewebsites.net
```

4. Validate in Azure
5. Create free App Service Managed SSL
6. Turn ON HTTPS

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
