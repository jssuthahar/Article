# Azure Web App: Publishing & Remote Debugging Guide

This guide explains how to configure an **Azure Web App** for publishing from Visual Studio, enable **Basic Authentication**, and set up **Remote Debugging**.

---

## 1. Prerequisites

* An **Azure account**
* A **Web App** created in Azure
* **Visual Studio** installed with Azure development workload
* Web App **running on Basic App Service Plan or higher**

> ⚠️ Free/Shared plans **cannot** enable Basic Authentication or Remote Debugging.

---

## 2. App Service Plan Requirements

| Feature                                       | Minimum Plan Required |
| --------------------------------------------- | --------------------- |
| Basic Authentication (Publishing Credentials) | Basic                 |
| Always On                                     | Basic                 |
| 64-bit Configuration                          | Basic                 |
| Remote Debugging                              | Basic                 |

> Upgrade your App Service Plan under **Web App → Scale Up (App Service Plan)** if needed.

---

## 3. Enable Basic Authentication for Publishing

1. Go to your **Web App → Deployment Center → FTPS / Publishing Credentials**.
2. Ensure **Basic Authentication** is enabled.
3. Download the **Publish Profile (.publishsettings)** from **Overview → Get publish profile**.
4. In Visual Studio:

   * Right-click your project → **Publish → Import Profile**
   * Select the downloaded `.publishsettings` file
   * Publish your web app

---

## 4. Enable Remote Debugging

1. In Azure Portal, open your **Web App → Configuration → General Settings**.
2. Toggle **Remote Debugging** to **On**.
3. Select your **Visual Studio version** (e.g., 2019, 2022).
4. Save changes.

### Using Remote Debugging in Visual Studio

1. Open Visual Studio → **Debug → Attach to Process → Microsoft Azure App Service**.
2. Select your web app.
3. Visual Studio attaches to the running process.
4. You can now:

   * Set breakpoints
   * Inspect variables
   * Step through code live

> ⚠️ Remote debugging may **slightly slow down your app**. Use it primarily for troubleshooting.

---

## 5. Additional Configuration

* **Always On**: Keep your app alive for background processes
* **HTTPS Only / Minimum TLS Version**: Ensure secure connections
* **64-bit Configuration**: Required for some .NET apps and memory-intensive workloads

---

## 6. Summary

To successfully publish and debug an Azure Web App:

1. Upgrade your **App Service Plan** to Basic or higher.
2. Enable **Basic Authentication** for deployment credentials.
3. Enable **Remote Debugging** to attach Visual Studio to the live app.
4. Use **Visual Studio Publish Profile** for easy deployment.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
