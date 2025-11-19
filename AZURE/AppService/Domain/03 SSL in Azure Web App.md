
# 🔐 SSL in Azure Web App

### **3 Ways to Add & Manage Certificates**

### **(Managed Certificate, Bring Your Own Certificate, Public Key Certificate)**

Azure App Service supports 3 main types of SSL certificates.
This guide explains **what they are**, **when to use them**, and **how to implement each one** in simple steps.

---

# 🟦 Overview of SSL Options in Azure Web Apps

| SSL Option                               | File Type                             | Cost | Where Used?                                      |
| ---------------------------------------- | ------------------------------------- | ---- | ------------------------------------------------ |
| **1. Managed Certificate (Free)**        | No file (Azure creates automatically) | Free | Basic websites, blogs, apps needing HTTPS        |
| **2. Bring Your Own Certificate (BYOC)** | `.pfx` (Private key)                  | Paid | Professional/enterprise websites                 |
| **3. Public Key Certificate**            | `.cer` (no private key)               | Free | Mutual TLS, backend service trust, custom chains |

---

# 🌟 1. Managed Certificate (Free Azure SSL)

Azure provides a **free Domain Validated SSL certificate**.

### ✅ Pros

* Free
* Automatic renewal
* No files required
* Easy to set up

### ❌ Limitations

* Works **only for CNAME-based** custom domains
* Cannot be exported
* Cannot be used for root domain via A record (unless DNS supports ALIAS/ANAME)

---

## 🔧 How to Add Managed Certificate

### Step 1: Add Custom Domain

Go to:

```
Azure Portal → App Service → Custom Domains → Add Domain
```

Add:

```
www.yourdomain.com
```

Validate your DNS.

---

### Step 2: Create Managed Certificate

Go to:

```
TLS/SSL Settings → Private Key Certificates (.pfx)
```

Click:

```
Create App Service Managed Certificate
```

Select the domain → OK.

---

### Step 3: Bind Certificate

Go to:

```
TLS/SSL Settings → Bindings → Add Binding
```

Choose:

* Domain name
* Certificate
* TLS/SSL Type: **SNI SSL**

Save.

Your free SSL is now active 🔒.

---

# 🌟 2. Bring Your Own Certificate (BYOC) – Upload .PFX

If you have purchased a certificate from:

* GoDaddy
* DigiCert
* Sectigo
* GlobalSign
* Namecheap

They usually provide a **.pfx file** (contains private key + certificate chain).

This gives more trust and works for OV/EV certificates.

---

## 🔧 How to Use BYOC Certificate

### Step 1: Purchase Certificate

Buy an SSL certificate from your provider.

Make sure you export/download:

```
certificate.pfx
password: ****** (your chosen password)
```

---

### Step 2: Upload to Azure

Go to:

```
TLS/SSL Settings → Private Key Certificates (.pfx) → Upload
```

Upload:

* `.pfx` file
* PFX password

Click **Upload**.

---

### Step 3: Bind Certificate

Go to:

```
TLS/SSL Settings → Bindings → Add Binding
```

Select:

* Domain name
* Certificate
* TLS/SSL Type: **SNI SSL**

Save.

Your custom SSL is now active.

---

## ⭐ When to Use BYOC?

* Your company requires **OV/EV certificates**
* You want full trust
* You need wildcard SSL (`*.yourdomain.com`)
* You want same certificate across multiple apps

---

# 🌟 3. Public Key Certificate (.CER)

**Public Key Certificates** in Azure contain **only the public key**, NOT the private key.
They are used for:

* **Client certificates (Mutual TLS)**
* **Backend API trust**
* **Certificate chain installation**
* **Validation only (no HTTPS binding)**

You cannot use `.cer` for HTTPS binding.

---

## 🔧 Scenarios Where .CER Is Used

### ✔ 1. Mutual TLS (Client Certificate Authentication)

* You upload client certificates to Azure
* App verifies clients based on certificate

Path:

```
TLS/SSL Settings → Public Key Certificates (.cer)
```

### ✔ 2. Backend server trust

Example:
Your Web App calls an API that uses SSL pinning.

You upload `.cer` to allow outgoing requests.

### ✔ 3. Intermediate Certificates

If your PFX chain is missing, you upload `.cer` intermediate to complete trust chain.

---

# 🔧 How to Upload Public Key Certificate (.CER)

Go to:

```
TLS/SSL Settings → Public Key Certificates (.cer) → Upload
```

Upload your `.cer`.

Set:

* Store location (CurrentUser or LocalMachine)
* Name

Save.

Azure now trusts this certificate for client authentication or outgoing requests.

---

# 🟦 Complete Comparison Table

| Feature              | Managed Certificate  | BYOC (.pfx)        | Public Key (.cer) |
| -------------------- | -------------------- | ------------------ | ----------------- |
| HTTPS/SSL Binding    | ✔                    | ✔                  | ❌                 |
| Contains Private Key | ✔ (managed by Azure) | ✔                  | ❌                 |
| Price                | Free                 | Paid               | Free              |
| Renewal              | Automatic            | Manual or KeyVault | N/A               |
| Supports Wildcard    | ❌                    | ✔                  | ❌                 |
| Supports EV/OV       | ❌                    | ✔                  | ❌                 |
| Supports Mutual TLS  | ❌                    | ❌                  | ✔                 |
| Upload File Required | No                   | Yes (.pfx)         | Yes (.cer)        |

---

# 🎯 Recommended Usage

| Scenario                | Best Certificate Type |
| ----------------------- | --------------------- |
| Simple website          | Managed Certificate   |
| Enterprise website      | BYOC                  |
| Wildcard domain         | BYOC                  |
| EV/OV needed            | BYOC                  |
| Client certificate auth | Public Key (.cer)     |
| API/backend trust       | Public Key (.cer)     |

---

# 🎉 Summary

Azure supports **3 SSL certificate methods**:

### **1. Managed Certificate**

* Free
* Easiest
* For simple domains

### **2. Bring Your Own Certificate (.pfx)**

* Best for enterprise
* Supports wildcard, OV, EV
* Full control

### **3. Public Key Certificate (.cer)**

* Used for mutual TLS
* Not for HTTPS binding
* Backend/API trust

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
