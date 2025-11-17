
# Azure Web App Configuration Guide

This document explains the **key platform and debugging settings** for an Azure Web App, including publishing, authentication, and runtime options.

---

## 1. Platform Settings

| Setting                                   | Description                                         | Notes / Requirements                                       |
| ----------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------- |
| **64-bit configuration**                  | Runs your app in 64-bit mode                        | Requires **Basic App Service plan or higher**              |
| **Managed pipeline version**              | ASP.NET pipeline type (Integrated/Classic)          | Default is Integrated                                      |
| **SCM Basic Auth Publishing Credentials** | Credentials for deployment via Visual Studio or FTP | Disabled on Free/Shared plans                              |
| **FTP Basic Auth Publishing Credentials** | FTP access to app content                           | Disabled on Free/Shared plans                              |
| **FTP state**                             | Enable or disable FTP access                        | Only enabled if FTP credentials exist                      |
| **HTTP version**                          | Choose HTTP 1.1 or HTTP 2.0                         | Default is HTTP 1.1; HTTP 2.0 supported for modern clients |
| **HTTP 2.0 Proxy**                        | Enable proxy support for HTTP/2                     | Optional                                                   |
| **gRPC Only**                             | Restrict app to gRPC traffic                        | Only available for .NET and Java apps                      |
| **Web sockets**                           | Enable WebSocket support                            | Required for real-time apps like chat                      |
| **Always On**                             | Keeps app alive even without traffic                | Requires **Basic plan or higher**                          |
| **Session affinity**                      | Sticky sessions for client requests                 | Optional; improves session consistency                     |
| **Session affinity proxy**                | Support for reverse proxy                           | Optional                                                   |
| **HTTPS only**                            | Enforce HTTPS connections                           | Recommended for security                                   |
| **Minimum Inbound TLS Version**           | Set minimum TLS version (e.g., 1.2)                 | Recommended for security compliance                        |

---

## 2. Debugging Settings

| Setting                          | Description                                         | Notes / Requirements                                 |
| -------------------------------- | --------------------------------------------------- | ---------------------------------------------------- |
| **Remote debugging**             | Allows attaching Visual Studio debugger to live app | Requires **Basic plan or higher**; select VS version |
| **Incoming client certificates** | Accept certificates from clients                    | Used for mutual TLS authentication                   |
| **Client certificate mode**      | Require, ignore, or optional client certs           | Configurable per security requirement                |

---

## 3. Publishing & Deployment Notes

* **Basic Authentication for publishing** is required to use Visual Studio publish profiles.
* Free or Shared App Service plans **cannot** enable SCM or FTP basic auth.
* Upgrade to **Basic plan or higher** to enable:

  * 64-bit configuration
  * Always On
  * Remote debugging
  * Basic auth publishing credentials

---

## 4. Recommended Setup for Production

1. Use **Basic App Service Plan or higher**.
2. Enable **Always On** for background tasks.
3. Enable **HTTPS Only** and **minimum TLS 1.2** for secure traffic.
4. Enable **Remote Debugging** only when troubleshooting.
5. Configure **session affinity** if your app maintains state.



## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
