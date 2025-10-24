## 🌐 Programming Languages Supported by Azure

Azure is **language-agnostic**, meaning you are not limited to Microsoft-only languages. You can develop Azure applications using multiple languages, including:

| Language           | Usage in Azure                | Common Services                               |
| ------------------ | ----------------------------- | --------------------------------------------- |
| C# (.NET)          | Most used for enterprise apps | Azure Functions, App Service, AKS, Web APIs   |
| Python             | AI/ML, Web apps, Automation   | Azure Functions, Web Apps, ML services        |
| Java               | Enterprise-grade services     | App Service, Spring Apps, Azure Functions     |
| JavaScript/Node.js | Full-stack web development    | Azure Functions, App Service, Static Web Apps |
| Go                 | Microservices & containers    | AKS, Container Apps                           |
| PHP                | Web applications              | Azure App Service                             |
| Ruby               | Legacy web apps               | Azure App Service                             |

Azure also supports **REST APIs + SDKs**, meaning you can connect from **any language** that can make HTTP requests.

---
## 🌍 All Programming Languages Supported by Azure (Native + Custom)

Azure supports two major categories of languages:

### ✅ 1. **Natively Supported Languages (Official SDKs & Runtime)**

These languages are directly supported by Azure with official SDKs, tools, and runtime hosting:

| Language             | Typical Use Case                   |
| -------------------- | ---------------------------------- |
| C# (.NET)            | Enterprise apps, APIs, Functions   |
| Java                 | Enterprise + Spring Boot apps      |
| Python               | AI/ML, automation, APIs            |
| JavaScript / Node.js | Web apps, Functions, microservices |
| Go                   | Cloud-native services, containers  |
| PHP                  | Web applications                   |
| Ruby                 | Web apps (legacy/maintenance)      |

---

### ✅ 2. **Custom Runtime Languages (via Containers / Custom Buildpacks)**

These do not have built-in Azure runtimes, but **can run perfectly on Azure** using Web App for Containers, Azure Container Apps, or AKS.

| Language / Framework | Deployment Method                             |
| -------------------- | --------------------------------------------- |
| Rust                 | Container Apps / AKS / Web App for Containers |
| Elixir (Phoenix)     | Containers / Linux App Service                |
| Dart / Flutter Web   | Static Web Apps / App Service                 |
| Swift                | Containers                                    |
| C / C++              | Containers / AKS                              |
| Haskell              | Containers                                    |
| Perl                 | Containers                                    |
| R (Data Science)     | Containers / VM                               |
| Kotlin               | JVM on App Service / Containers               |
| Scala                | JVM / Containers                              |

This means **any runtime or programming language** can be used with Azure as long as you can package it using a container image or run it on Linux App Service.

---

Azure also supports **custom runtimes** if your application uses a language or framework not officially listed in the Azure portal.

Examples:

* **Rust** using container deployment
* **Elixir/Phoenix** apps using container or App Service (Linux)
* **Dart/Flutter Web** hosted via Static Web Apps / App Service
* **Swift** via Docker containers
* **C++** microservices in AKS or Container Apps
* **Perl** / **Haskell** / **R** via custom container images

### ✅ How to deploy customer/other programming languages

You can deploy *any* language/runtime using:

1. **Docker Container** → Push to Azure Container Apps / AKS / Web App for Containers
2. **Buildpack-based deployment** → Azure App Service (Linux)
3. **Static deployment** → Azure Static Web Apps (for frontend frameworks)

| Deployment Method      | When to Use                              | Languages                         |
| ---------------------- | ---------------------------------------- | --------------------------------- |
| Web App for Containers | Custom runtime or not supported natively | Rust, Elixir, Swift, C++, Haskell |
| Container Apps         | Microservices & lightweight workloads    | Any language                      |
| AKS (Kubernetes)       | Large-scale & enterprise                 | Any runtime                       |
| Static Web Apps        | Client-side/front-end apps               | Flutter Web, React, Vue           |

This means **Azure is not restricted to only Microsoft-supported runtimes** — you can bring your own runtime as long as you can containerize your application.

---
## 🧩 Simple Rule to Remember

| If Azure already supports the language | Use App Service or Functions |
| If Azure does not support it | Use Web App for Containers, Container Apps, or AKS |

---

## ✅ Summary

| Topic            | Key Takeaway                                                   |
| ---------------- | -------------------------------------------------------------- |
| Language Support | Azure supports C#, Python, Java, JavaScript, Go, PHP, and more |
| Best Editor      | Visual Studio Code (Cloud-native & lightweight)                |
| Deployment       | Through App Service, Functions, Containers                     |
| Tools            | VS Code, Visual Studio, Azure CLI, GitHub Codespaces           |

## 🧰 Developer Tools & Editors

Azure gives flexibility for choosing developer environments. Most commonly used are:

### ✅ 1. Visual Studio Code (VS Code)

* Lightweight, cross-platform
* Supports Windows, macOS, and Linux
* Rich extensions marketplace
* Azure Extensions available for:

  * Azure Functions
  * App Service
  * Azure CLI integration
  * ARM/Bicep Templates
  * Github & Azure DevOps

VS Code is most recommended for *modern and cloud-native development*.

### ✅ 2. Visual Studio (Windows)

* Best for enterprise .NET/C# development
* Rich debugging, profiling, scaffolding
* Supports Azure SDK directly

---

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





