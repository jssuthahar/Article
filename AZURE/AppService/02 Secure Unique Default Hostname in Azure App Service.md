
# 🔒 Secure Unique Default Hostname in Azure App Service

## 📘 What is the "Secure Unique Default Hostname"?

Azure App Service assigns every web app a **default hostname** in the format:

```

https\://<app-name>.azurewebsites.net

````

The **"Secure Unique Default Hostname"** feature ensures that **only your app** can respond to requests made to this default hostname. This security setting **prevents hostname takeover attacks** where a malicious app could be deployed with your hostname if your app is deleted or moved.

---

## 🧠 Why is this Feature Important?

Imagine this scenario:

1. You create an app called `mydemoapp` in Azure App Service.
2. Azure assigns the default hostname:  
   `https://mydemoapp.azurewebsites.net`
3. Later, you delete the app or move it to a different region.
4. A malicious user creates a new app with the same name:  
   `mydemoapp.azurewebsites.net`
5. If users still have old links or bookmarks, they will unknowingly visit the **attacker’s app**.

### 🔐 The "Secure Unique Default Hostname" protects against this by:

- Tying your app's default hostname **uniquely to your subscription**.
- Preventing other Azure customers from using that hostname even if your app is deleted.

---

## ✅ Benefits

- 🛡 **Prevents hostname hijacking**
- 🔐 **Secures legacy bookmarks and links**
- 🗂 **Ensures brand and identity continuity**
- 📉 **Reduces phishing and impersonation risks**

---

## 🔧 How to Enable It

This setting is **enabled by default** for new apps, but it's good to verify:

### ✅ Azure Portal

1. Go to your App Service in the Azure Portal.
2. Navigate to:  
   **Settings > Custom domains > Advanced settings**
3. Look for the setting:  
   `Secure default hostname`
4. Ensure it is **enabled**.

### ✅ Azure CLI

To check or enable:

```bash
az webapp update --name <app-name> --resource-group <resource-group-name> --set httpsOnly=true
````

> Note: The CLI does not expose a direct toggle for this feature yet, but `httpsOnly=true` is a best practice and part of the broader security configuration.

---

## ❌ What Happens If It’s Disabled?

* ⚠️ If your app is deleted, **someone else can register the same app name** and receive your old hostname.
* ⚠️ Users visiting old links will be redirected to a potentially **malicious application**.
* ⚠️ You may be exposed to **phishing attacks** or **reputation damage**.
* ⚠️ **Search engines and crawlers** may still index the old hostname, pointing to the wrong app.

---

## 🛠 Best Practices

| Recommendation             | Why                                                    |
| -------------------------- | ------------------------------------------------------ |
| ✅ Always enable HTTPS      | Encrypt traffic and avoid downgrade attacks            |
| ✅ Use custom domains       | Helps branding and avoids relying on default hostnames |
| ✅ Enable secure hostname   | Prevents re-use and impersonation                      |
| ✅ Configure redirect rules | Redirect old links to your main domain                 |
| ✅ Use deployment slots     | Avoid deleting and recreating apps unnecessarily       |

---

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
