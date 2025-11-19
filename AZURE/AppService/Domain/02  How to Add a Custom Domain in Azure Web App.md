# 🌐 How to Add a Custom Domain in Azure Web App

### **Beginner-Friendly Step-by-Step Guide**

This README explains *in very simple words* how you can connect your own domain (example: `www.yourname.com`) to an Azure Web App.
No technical background needed — just follow the steps one by one.

---

## ⭐ What is a Custom Domain?

When you create an Azure Web App, Microsoft gives you a default URL like:

```
yourappname.azurewebsites.net
```

But you may want to use a professional domain name like:

```
www.jsdevbrains.com
www.myshop.com
app.mycompany.com
```

To do this, you must **add a custom domain** to your Azure Web App.

---

## ⭐ Requirements Before You Start

### ✔ 1. You must own a domain

Your domain may be in:

* GoDaddy
* Namecheap
* Hostinger
* Google Domains
* BigRock
* Cloudflare

### ✔ 2. Your App Service Plan must be **Basic (B1)** or higher

Custom domains **do NOT work** on Free (F1) or Shared (D1) plans.

If needed, upgrade your plan:

```
App Service → App Service Plan → Scale Up → Choose B1 or higher
```

---

# 🚀 Step 1: Open Your Azure Web App

1. Go to **[https://portal.azure.com](https://portal.azure.com)**
2. Search for **App Services**
3. Click your Web App name
4. In the left side menu → click **Custom domains**

You will see a screen like:

```
| Custom Domain Name | Status | SSL |
|--------------------|--------|-----|
```

Click **Add custom domain**

---

# 🚀 Step 2: Enter Your Domain Name

You will see a box asking for a domain:

```
Enter domain:  www.yourdomain.com
```

Type your domain and click **Validate**.

Azure will now check if you have created correct DNS records.

You must now configure DNS in your domain provider.

---

# 🚀 Step 3: Configure DNS (VERY IMPORTANT)

This is the step beginners get confused about.
Don’t worry — it is simple.

You need to add a **DNS record** in your domain provider.

There are two types you can use:

---

## ⭐ Option A — CNAME Record (Recommended)

Use this when your domain is like:

```
www.example.com
app.example.com
portal.example.com
```

### Steps:

1. Login to your domain provider (GoDaddy/Hostinger/Namecheap etc)
2. Open **DNS Settings** or **Manage DNS**
3. Click **Add Record**
4. Select **CNAME**

Add these values:

| Field             | Value                     |
| ----------------- | ------------------------- |
| Type              | CNAME                     |
| Name / Host       | www                       |
| Value / Points to | yourapp.azurewebsites.net |

Example:

```
CNAME   www   myapp.azurewebsites.net
```

Save it.

---

## ⭐ Option B — A Record + TXT Record

Use this for **root domain** (without www):

```
example.com
```

Azure will show you:

* **IP address**
* **TXT verification code**

Example:

```
A Record:
Host: @
Value: 20.44.182.10

TXT Record:
Host: @
Value: asuid.myappname
```

Add these two records in your DNS settings.

---

# 🚀 Step 4: Validate Domain in Azure

Once DNS records are created, go back to Azure.

Click **Validate** again.

If the DNS records are correct, Azure will show:

```
✓ Domain ownership validated
```

Now click:

**Add custom domain**

Your domain is now connected! 🎉

---

# 🚀 Step 5: Enable HTTPS (Recommended)

After adding the domain:

1. Go to **TLS/SSL Settings**
2. Click **Private Key Certificates (.pfx)**
3. Click **Create App Service Managed Certificate** (FREE)
4. Bind the certificate to your domain

Then:

5. Go to **Configuration**
6. Switch **HTTPS Only = On**

Your site will now open securely with padlock 🔒.

---

# 🎯 Example Setup

Your Web App name:

```
jsquareapp.azurewebsites.net
```

Your domain:

```
www.jsdevbrains.com
```

DNS entry in Hostinger:

| Type  | Name | Value                        |
| ----- | ---- | ---------------------------- |
| CNAME | www  | jsquareapp.azurewebsites.net |

Then add the domain in Azure → Validate → Add.

---

# 🛠 Common Errors & Fixes

### ❌ Error: “Custom domains are not allowed for this pricing tier.”

You are still on Free (F1) or Shared (D1).
Upgrade to **B1**.

---

### ❌ DNS record not found

Check:

* Correct spelling
* CNAME pointing to `azurewebsites.net`
* No extra www or dots
* TTL set to **1 minute**
* Wait 5–10 minutes for propagation

---

### ❌ Domain already assigned

Remove the domain from old Azure web app or another hosting provider.

---

# 📌 Tips for Beginners

* Use **CNAME** for simple subdomains (`www`, `app`, `portal`)
* Use **A + TXT** only when using root domain (`example.com`)
* DNS changes can take **5–30 minutes** to update
* Use **[https://www.whatsmydns.net/](https://www.whatsmydns.net/)** to check DNS propagation

---

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
