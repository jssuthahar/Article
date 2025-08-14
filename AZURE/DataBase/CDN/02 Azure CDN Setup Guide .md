# 🚀 Azure CDN Setup Guide – Step-by-Step

This guide explains how to set up **Azure Content Delivery Network (CDN)** in the Azure Portal for different Azure services:

- **Azure Blob Storage** (for static website hosting or media)
- **Azure Web Apps** (for frontend static assets)
- **Azure Media Services** (for video streaming)
- **Azure Front Door** (for global web traffic optimization)

---

## 1️⃣ Setup Azure CDN with Azure Blob Storage (Static Website Hosting)

**Use Case:** Store and deliver images, CSS, JavaScript, and other static files globally with low latency.

### Steps:
1. **Create Blob Storage:**
   - Go to **Azure Portal** → **Create a resource** → **Storage account**.
   - Choose **Resource Group**, **Name**, **Region**, and **Replication**.
   - Click **Review + Create**.

2. **Enable Static Website Hosting:**
   - Open your storage account → **Static website** (under **Data management**).
   - Enable **Static website**.
   - Set **Index document name** (e.g., `index.html`) and **Error document path** (e.g., `error.html`).
   - Save.

3. **Upload Content:**
   - Go to **Containers** → `$web` → Upload your static files.

4. **Create a CDN Profile & Endpoint:**
   - In Azure Portal → **Create a resource** → Search **CDN**.
   - Create **CDN profile** → Choose **Azure CDN from Microsoft/Verizon/Akamai**.
   - Add a **CDN Endpoint** and link it to your Blob Storage.

5. **Access via CDN:**
   - Use the **CDN endpoint URL** to serve your static site/media files.

---

## 2️⃣ Setup Azure CDN with Azure Web Apps (Frontend Assets)

**Use Case:** Speed up delivery of JavaScript, CSS, and images for your web app.

### Steps:
1. **Create Web App:**
   - Go to **Create a resource** → **Web App**.
   - Choose runtime stack, region, and pricing plan.
   - Deploy your frontend app (via GitHub Actions, FTP, or VS Code).

2. **Create a CDN Profile:**
   - Go to **Azure CDN** → Create **Profile**.
   - Create **CDN Endpoint** and select **Origin type** = **Web App**.
   - Choose your web app from the **Origin hostname** dropdown.

3. **Update App URLs:**
   - Change your static asset links (CSS, JS, images) in your app to point to the CDN endpoint.

---

## 3️⃣ Setup Azure CDN with Azure Media Services (Video Streaming)

**Use Case:** Deliver videos with smooth playback and low latency worldwide.

### Steps:
1. **Create Azure Media Services:**
   - Go to **Create a resource** → **Media Services**.
   - Set up resource group, name, and storage account.
   - Create and upload your media content.

2. **Enable Streaming Endpoint:**
   - In **Media Services** → **Streaming endpoints** → Start the endpoint.

3. **Link to CDN:**
   - In the **Streaming endpoint settings**, enable **Azure CDN**.
   - Choose the CDN provider and pricing tier.
   - Save changes.

4. **Use CDN URL:**
   - Use the provided CDN streaming URL in your application player.

---

## 4️⃣ Setup Azure CDN with Azure Front Door (Global Traffic Optimization)

**Use Case:** Improve global application performance and availability.

### Steps:
1. **Create Azure Front Door:**
   - Go to **Create a resource** → **Front Door and CDN profiles** → **Front Door**.
   - Add your backend origin (Web App, API, or Storage).
   - Configure routing rules for HTTP/HTTPS traffic.

2. **Enable CDN Integration:**
   - In your Front Door configuration, create a **CDN profile**.
   - Link the Front Door endpoint to the CDN profile for caching and faster delivery.

3. **Set Caching Rules:**
   - Define caching behavior for static and dynamic content.

4. **Use Front Door URL:**
   - Access your application through the **Front Door + CDN** endpoint for optimized delivery.

---

## 🔍 Best Practices

- Use **HTTPS** on CDN endpoints for security.
- Set appropriate **Cache-Control headers** to control caching behavior.
- Use **Custom Domains** with CDN for branding.
- Monitor performance in **Azure Metrics** and **Azure Monitor**.

---

## 📎 References
- [Azure CDN Overview](https://learn.microsoft.com/en-us/azure/cdn/cdn-overview)
- [Static Website Hosting in Azure Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website)
- [Azure Web Apps Documentation](https://learn.microsoft.com/en-us/azure/app-service/)
- [Azure Media Services Documentation](https://learn.microsoft.com/en-us/azure/media-services/latest/)
- [Azure Front Door Documentation](https://learn.microsoft.com/en-us/azure/frontdoor/)
### 🔔 Stay Updated with My Latest Projects

If you enjoy:
- 🧠 AI agents and automation
- 🛠️ Practical tools and utilities
- 📘 Developer tutorials and guides
- 🚀 End-to-end project templates

👉 Then **[Follow me on GitHub](https://github.com/jssuthahar)** to get notified about new repos, ideas, and updates!

[![Follow Me](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)

## ⭐ Start & Follow Me
If you find this repository useful, don't forget to **Star** ⭐ the repo and **Follow** me for more updates!

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)



If you want, I can create a **single visual architecture diagram** showing all **four setups** (Blob, Web App, Media Services, Front Door) pointing to CDN, so your README will be more visual and beginner-friendly. That will make it easier for teams to follow.
