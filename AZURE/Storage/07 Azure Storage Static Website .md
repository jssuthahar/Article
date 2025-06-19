

# 🌐 Azure Storage Static Website – README

## 📘 Overview

**Azure Storage Static Website** allows you to host HTML, CSS, JavaScript, and media files directly from a **Blob Storage account**, making it a **cost-effective** and **scalable** option for deploying static web apps.

---

## ❓ Why Use Static Website Hosting in Azure Storage?

| Benefit                  | Description                                       |
| ------------------------ | ------------------------------------------------- |
| ✅ **Cost-Effective**     | No web servers or app services required           |
| ⚡ **High Availability**  | Globally available via Azure CDN or custom domain |
| 🔐 **Secure & Scalable** | HTTPS, Azure AD, private endpoints supported      |
| 💻 **No Backend Needed** | Perfect for front-end sites or SPAs               |
| 🧪 **Dev/Test Use**      | Great for testing UI before full deployment       |

---

## 💡 Real-Time Use Cases

| Scenario                 | Description                                     |
| ------------------------ | ----------------------------------------------- |
| **Portfolio Website**    | Developers or designers showcasing work         |
| **Company Landing Page** | Simple company or product info page             |
| **Documentation Sites**  | Hosting docs for open-source or internal tools  |
| **Static Web Apps**      | Angular, React, Vue apps (with routing support) |
| **Internal Dashboards**  | Hosted on private networks using static HTML/JS |

---

## 🛠️ Prerequisites

* Azure Subscription
* A **Storage Account** (General-purpose v2 type)
* Basic website files (HTML, CSS, JS)

---

## 🧭 Step-by-Step: Enable Static Website in Azure Portal

### ✅ Step 1: Create a Storage Account

1. Go to [Azure Portal](https://portal.azure.com)
2. Click **"Create a resource" → "Storage account"**
3. Select:

   * **Region**: Choose closest region
   * **Performance**: Standard
   * **Redundancy**: LRS or ZRS
   * **StorageV2 (general purpose v2)** is required
4. Click **Review + Create** → **Create**

---

### ✅ Step 2: Enable Static Website Hosting

1. Open your **Storage Account**
2. In the left menu, scroll to **Data Management**
3. Click on **Static website**
4. Click **"Enable"**
5. Enter:

   * **Index document name**: `index.html`
   * **Error document path (optional)**: `404.html`
6. Click **Save**

✅ A new **\$web container** will be automatically created

---

### ✅ Step 3: Upload Your Website Files

1. Navigate to the **Containers** blade
2. Open the **\$web** container
3. Click **Upload**

   * Select your `index.html`, CSS, JS, and media files
4. Click **Upload**

---

### ✅ Step 4: Access Your Website

* Go back to **Static website** blade
* Copy the **Primary endpoint** URL (e.g., `https://yourstorage.blob.core.windows.net/$web/`)
* Open the link in your browser — your site is live! 🎉

---

## 🌍 Optional Features

| Feature                      | How to Enable                      | Notes                           |
| ---------------------------- | ---------------------------------- | ------------------------------- |
| **Custom Domain**            | "Custom domain" blade in portal    | Use your own domain name        |
| **HTTPS with Custom Domain** | Use Azure CDN or Front Door        | Secure your custom domain       |
| **Private Access**           | Configure private endpoint         | For internal use only           |
| **CI/CD**                    | Use GitHub Actions or Azure DevOps | Automate uploads from your repo |

---

## 🧠 Summary Table

| Feature              | Details                                    |
| -------------------- | ------------------------------------------ |
| Hosting Type         | Static (HTML, JS, CSS only)                |
| Cost                 | Only pay for storage + bandwidth           |
| Storage Container    | `$web`                                     |
| File Types Supported | HTML, CSS, JS, images, etc.                |
| Backend Support      | ❌ No server-side code (PHP, ASP.NET, etc.) |
| Best For             | Portfolio sites, documentation, SPAs       |

---

## 🔎 Quick Example Structure

```
$web/
├── index.html
├── about.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── 404.html
```

---

## 🧾 Final Notes

* Great for **frontend-focused apps**
* Combine with **Azure CDN** for performance boost
* Works well with frameworks like **React** or **Vue** (build → upload `dist` folder)

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
