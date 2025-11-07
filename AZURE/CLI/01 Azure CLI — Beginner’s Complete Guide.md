
# ☁️ Azure CLI — Beginner’s Complete Guide

## 📘 Overview

**Azure CLI (Command-Line Interface)** is a cross-platform tool used to manage Azure resources **directly from your command line or terminal** — without using the Azure Portal.

You can use it on **Windows, macOS, and Linux**, or even run it in the **Azure Cloud Shell** inside the browser.

---

## 💡 What is Azure CLI?

**Azure CLI** is a text-based command tool that helps you:

* Create and manage Azure resources (VMs, Storage, Web Apps, Databases, etc.)
* Automate tasks
* Integrate Azure management into scripts or CI/CD pipelines

It uses **commands starting with `az`** (short for *Azure*).
Example:

```bash
az login
az group create --name myResourceGroup --location eastus
az vm create --name myVM --resource-group myResourceGroup --image UbuntuLTS
```

---

## 🧭 How to Install Azure CLI

### 🪟 On Windows

Download and install from:
👉 [https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-windows](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli-windows)

### 🍏 On macOS (using Terminal)

```bash
brew update && brew install azure-cli
```

### 🐧 On Linux (Ubuntu/Debian)

```bash
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

Once installed, verify:

```bash
az --version
```

---

## 🔑 Logging into Azure

You must sign in before running any commands.

```bash
az login
```

This will open a browser window for authentication.
For cloud shell (inside portal), you’re automatically logged in.

---

## 🧩 Azure CLI Structure

Every command follows this pattern:

```
az <group> <subcommand> [parameters]
```

### Example:

```bash
az group create --name MyResourceGroup --location eastus
```

| Part         | Description                     |
| ------------ | ------------------------------- |
| `az`         | Azure CLI command prefix        |
| `group`      | Resource type (resource group)  |
| `create`     | Action (to create a new one)    |
| `--name`     | Parameter for resource name     |
| `--location` | Region where it will be created |

---

## ⚙️ Common Azure CLI Commands

| Action                | Command                                                            | Description                  |
| --------------------- | ------------------------------------------------------------------ | ---------------------------- |
| Login to Azure        | `az login`                                                         | Authenticate to Azure        |
| List subscriptions    | `az account list`                                                  | See your Azure subscriptions |
| Create Resource Group | `az group create --name myRG --location eastus`                    | Create a new resource group  |
| Create VM             | `az vm create --name myVM --resource-group myRG --image UbuntuLTS` | Launch a virtual machine     |
| List Resources        | `az resource list`                                                 | View all resources           |
| Delete Resource Group | `az group delete --name myRG --yes --no-wait`                      | Delete a resource group      |

---

## 🧠 Difference Between Azure CLI, PowerShell, Run Command, and macOS Terminal

| Tool                  | Description                                                | Platform              | Syntax Example                                                                     | When to Use                                               |
| --------------------- | ---------------------------------------------------------- | --------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **Azure CLI**         | Cross-platform tool for managing Azure resources           | Windows, macOS, Linux | `az group create --name MyRG --location eastus`                                    | Best for automation, scripting, and CI/CD pipelines       |
| **Azure PowerShell**  | Azure management using PowerShell cmdlets                  | Windows, macOS, Linux | `New-AzResourceGroup -Name MyRG -Location eastus`                                  | Best if you’re already familiar with PowerShell scripting |
| **Azure Run Command** | Executes scripts *inside* Azure VMs from the portal or CLI | Runs inside VMs       | `az vm run-command invoke --command-id RunShellScript --scripts "sudo apt update"` | Best for running commands *inside* a VM without SSH       |
| **macOS Terminal**    | Local command shell environment                            | macOS                 | Can run `az`, `ssh`, `git`, etc.                                                   | Used to run Azure CLI or other tools locally              |

---

### 🔍 Simplified Comparison

| Feature             | Azure CLI     | PowerShell       | Run Command  | macOS Terminal       |
| ------------------- | ------------- | ---------------- | ------------ | -------------------- |
| Cross-Platform      | ✅ Yes         | ✅ Yes            | ✅ Yes        | ✅ Yes                |
| Works inside Portal | ✅ Cloud Shell | ✅ Cloud Shell    | ✅ Via Portal | ❌ Local only         |
| Script Type         | Bash-style    | PowerShell-style | Shell/Batch  | Bash/Zsh             |
| Runs Commands in VM | ❌             | ❌                | ✅            | ❌                    |
| Easy for Beginners  | ✅             | ⚙️ Moderate      | ✅            | ✅ (generic terminal) |

---

## 🧰 Using Azure CLI from Different Places

| Environment                   | How to Access                | Notes                             |
| ----------------------------- | ---------------------------- | --------------------------------- |
| **Azure Cloud Shell**         | Portal → >_ icon (top right) | Preinstalled CLI, no setup needed |
| **VS Code Terminal**          | Integrated terminal          | Can install Azure CLI extension   |
| **macOS Terminal**            | Type `az` commands directly  | Great for local scripting         |
| **Windows CMD or PowerShell** | Run `az` commands            | CLI works in both                 |

---

## 🧪 Practical Example — Create and Manage a VM

```bash
# 1. Login
az login

# 2. Create a resource group
az group create --name MyGroup --location eastus

# 3. Create a VM
az vm create --name MyVM --resource-group MyGroup --image UbuntuLTS --admin-username azureuser --generate-ssh-keys

# 4. Check VM status
az vm show --name MyVM --resource-group MyGroup --query "powerState"

# 5. Delete resource group
az group delete --name MyGroup --yes --no-wait
```

---

## 🔐 Tips for Beginners

✅ Use **`az interactive`** for auto-suggestions and help in the terminal.
✅ Use **`--output table`** or `--output json` to view data cleanly.
✅ Always run **`az upgrade`** to stay updated.
✅ You can use **aliases** for shorter commands (like `az vm ls` instead of `az vm list`).
✅ In **macOS Terminal**, you can combine Azure CLI with Bash commands for automation.

---

## 📚 Helpful Links

* 🔗 [Install Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)
* 🔗 [Azure CLI Command Reference](https://learn.microsoft.com/en-us/cli/azure/reference-index)
* 🔗 [Azure PowerShell vs Azure CLI](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview)
* 🔗 [Azure Run Command for VMs](https://learn.microsoft.com/en-us/azure/virtual-machines/run-command)

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


