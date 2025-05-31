# How to Add a Custom Domain in Microsoft Entra ID

Adding a **custom domain** (like `yourcompany.com`) to your Microsoft Entra ID (formerly Azure AD) allows you to create user accounts with branded email addresses and improves professionalism and identity control.

---

## 🛠️ Prerequisites

- A Microsoft Entra ID tenant (automatically created with Microsoft 365 or Azure subscription).
- Access to your DNS provider (like GoDaddy, Namecheap, Cloudflare, etc.).
- A domain you own (e.g., `msdevbuild.com`).

---

## 📘 Step-by-Step Guide to Add Custom Domain

### ✅ Step 1: Sign in to Microsoft Entra Admin Center

1. Go to: [https://entra.microsoft.com](https://entra.microsoft.com)
2. Sign in with a **Global Administrator** account.

---

### ✅ Step 2: Navigate to Custom Domain Names

1. In the left-hand menu, click on **Identity**.
2. Under **Manage**, click **Custom domain names**.

---

### ✅ Step 3: Add Your Domain Name

1. Click on **+ Add custom domain**.
2. Enter your domain (e.g., `msdevbuild.com`).
3. Click **Add domain**.

---

### ✅ Step 4: Verify the Domain

You now need to **verify ownership** of your domain.

Microsoft provides a **TXT record** like:
```

Type: TXT
Name: @
Value: MS=msXXXXXXXX
TTL: 3600

```

> 📌 Go to your DNS provider’s dashboard (e.g., GoDaddy), and add this TXT record.

---

### ✅ Step 5: Wait and Verify

- After adding the TXT record, go back to Microsoft Entra Admin Center.
- Click **Verify**.
- Verification may take a few minutes to propagate.

If successful, your domain status will show: **Verified** ✅

---

### ✅ Step 6: Set as Primary Domain (Optional)

To make the new domain the **default** for new users:

1. Go to **Custom domain names**.
2. Click on your custom domain.
3. Click **Make primary**.

---

### ✅ Step 7: Start Creating Users with Custom Domain

Now you can create users like:

```

[ceo@msdevbuild.com](mailto:ceo@msdevbuild.com)
[admin@msdevbuild.com](mailto:admin@msdevbuild.com)
[support@msdevbuild.com](mailto:support@msdevbuild.com)

```

instead of using the default `jsdevbrains.onmicrosoft.com`.

---

## 🧠 Tips & Best Practices

- 🔐 Always enable **Multi-Factor Authentication (MFA)** for custom domain users.
- 📌 Keep the `onmicrosoft.com` domain for fallback scenarios; don’t delete it.
- ✅ You can add multiple domains (e.g., `training.msdevbuild.com`) if needed.
- 🛡️ Use **Azure DNS** if you prefer to manage DNS directly from Azure.

---

## 🧪 Real-Time Scenario

**Company:** JSDevBrains Pvt Ltd  
**Domain:** `msdevbuild.com`

**Problem:** The default domain `jsdevbrains.onmicrosoft.com` looked unprofessional in client emails.

**Solution:**
- Registered the custom domain `msdevbuild.com` via GoDaddy.
- Added the TXT verification in GoDaddy DNS.
- Verified the domain in Microsoft Entra ID.
- Created email addresses like `ceo@msdevbuild.com`, `admin@msdevbuild.com`.
- Configured Microsoft 365 services like Exchange Online, Teams, and SharePoint with the custom domain.

**Result:** Increased brand trust and better user experience for employees and clients.

---

## 🔗 Useful Links

- [Microsoft Learn: Add a custom domain](https://learn.microsoft.com/en-us/entra/identity/enterprise-users/domains-add-custom)
- [Entra Admin Center](https://entra.microsoft.com)

---

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
