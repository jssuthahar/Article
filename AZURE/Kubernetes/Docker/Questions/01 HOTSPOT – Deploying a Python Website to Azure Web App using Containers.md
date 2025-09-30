# 🚀 HOTSPOT – Deploying a Python Website to Azure Web App using Containers

This README explains how to correctly configure and deploy a **Python website** into an **Azure Web App** that uses containers.

We’ll cover the **HOTSPOT-style question** with **answers, explanations, and commands** step by step.

---

## 📌 Scenario

* You are preparing to deploy a **Python website** to **Azure Web App**.
* The website runs inside a **container**.
* The solution will use **multiple containers** in the same container group.
* The container is built with a `Dockerfile` and pushed to **Azure Container Registry (ACR)** named `images`.
* ACR is **private**, with username/password: `admin`.
* Requirement: The **Web App must always run the same version** of the website (not automatically update to future builds).

---

## ❓ HOTSPOT Questions & Answers

| **Box**   | **Correct Answer**                                                                                        | **Explanation**                                                                                                          |
| --------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Box 1** | `--sku B1 --hyper-v`                                                                                      | `B1` = Basic plan for container workloads. `--hyper-v` = Required for hosting Windows-based containers.                  |
| **Box 2** | `--deployment-source-url images.azurecr.io/website:v1.0.0`                                                | Deploy using **fixed version tag** (`:v1.0.0`) so the Web App always runs the same version, regardless of future builds. |
| **Box 3** | `az webapp config container set --docker-registry-server-url https://images.azurecr.io -u admin -p admin` | The registry is private, so you must set credentials (`admin` / password) to pull the image from ACR.                    |

---

## 🛠️ Final Azure CLI Commands

### 1. Create an App Service Plan

```bash
az appservice plan create \
  --name pythonAppServicePlan \
  --resource-group airlineResourceGroup \
  --sku B1 \
  --hyper-v
```

### 2. Create the Web App with the container image (fixed version)

```bash
az webapp create \
  --resource-group airlineResourceGroup \
  --plan pythonAppServicePlan \
  --name pythonwebappdemo \
  --deployment-source-url images.azurecr.io/website:v1.0.0
```

### 3. Configure container registry credentials

```bash
az webapp config container set \
  --name pythonwebappdemo \
  --resource-group airlineResourceGroup \
  --docker-registry-server-url https://images.azurecr.io \
  --docker-registry-server-user admin \
  --docker-registry-server-password admin
```

---

## 👶 Kid-Friendly Explanation (Story Style)

Think of it like opening a **candy shop website** 🍭:

1. You **rent a store** (App Service Plan `B1`) with **special shelves (Hyper-V)** that can hold jars of candy (containers).
2. You place a **specific candy jar** (`website:v1.0.0`) on the shelf. This means the shop **always sells version 1 candies**. Even if you make new jars later, the shop won’t switch automatically.
3. Your candy jars are stored in a **locked fridge (ACR)**. You give Azure the **key (username & password)** so it can open the fridge and fetch jars when needed.

---

## ✅ Summary

* **Box 1:** `--sku B1 --hyper-v` → Host Web App with Windows container support.
* **Box 2:** `--deployment-source-url images.azurecr.io/website:v1.0.0` → Always run the same version of the site.
* **Box 3:** `az webapp config container set ...` → Authenticate with private Azure Container Registry.

This ensures:

* 🔒 Secure container access
* 🕒 Consistent versioning (no surprises)
* 🚀 Smooth deployment of Python web app

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


