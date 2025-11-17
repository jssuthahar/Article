# Azure Web App: Stack & Domain Configuration Guide

This guide explains key **stack settings, domain configuration, path mapping, and custom error page settings** for an Azure Web App.

---

## 1. Stack Settings

Stack settings define the **runtime environment** your web app uses. This includes:

| Setting                        | Description                                                                        | Notes                                                                           |
| ------------------------------ | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **Stack / Runtime**            | Choose the language/runtime your app uses (e.g., .NET, Node.js, Java, PHP, Python) | Must match your app’s framework                                                 |
| **Stack Version**              | Specific version of the runtime (e.g., .NET 7, Node.js 20)                         | Ensure compatibility with your code                                             |
| **Web Server**                 | Select the web server (e.g., IIS for .NET, Apache/Nginx for Linux stacks)          | Default recommended by Azure                                                    |
| **Platform (32-bit / 64-bit)** | Architecture for your app                                                          | 64-bit recommended for memory-intensive apps; requires **Basic plan or higher** |

> ⚠️ Changing stack settings may **restart your app**, so schedule during maintenance.

---

## 2. Default Domain

Every Azure Web App has a **default domain**:

* Format: `https://<app-name>.azurewebsites.net`
* Auto-generated when the app is created
* Can be used immediately to access the app
* Can add **custom domains** for branding or SSL support

---

## 3. Path Mapping

Path mapping allows you to **route URL paths to specific directories or virtual applications**:

| Setting                                | Description                                                                         |
| -------------------------------------- | ----------------------------------------------------------------------------------- |
| **Virtual Applications / Directories** | Map a sub-path to a physical folder in your app (e.g., `/api` → `site\wwwroot\api`) |
| **Application Root**                   | Root folder of the web app (default `site\wwwroot`)                                 |
| **Custom Path**                        | Useful for multi-app setups or running legacy applications in the same web app      |

> Example: Map `/admin` to `site\wwwroot\admin` to serve an admin panel separately from the main site.

---

## 4. Custom Error Pages

Azure Web Apps allow you to **customize error pages** for a better user experience:

| Setting                     | Description                                          | Notes                                                                                      |
| --------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **404 Page Not Found**      | Redirect users to a custom 404 page                  | Place HTML page in your app and configure in `web.config` (Windows) or `.htaccess` (Linux) |
| **500 Server Error**        | Redirect users to a custom error page when app fails | Helps maintain branding and user experience                                                |
| **Detailed Error Messages** | Show detailed error only during debugging            | Turn off for production for security                                                       |

> Custom error pages are configured in your app’s **configuration files** or via the Azure portal **App Service → Configuration → Error Pages**.

---

## 5. Recommended Practices

1. Always select the **latest supported stack version** for security and performance.
2. Use **default domain for testing**, but configure a **custom domain with SSL** for production.
3. Use **path mapping** to organize virtual directories or multiple apps in a single Web App.
4. Configure **custom error pages** to improve user experience and reduce exposure of sensitive error details.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
