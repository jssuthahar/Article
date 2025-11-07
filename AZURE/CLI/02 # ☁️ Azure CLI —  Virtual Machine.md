# ☁️ Azure CLI —  Virtual Machine

## 📘 Overview

**Azure CLI (Command-Line Interface)** is a **cross-platform command-line tool** to create and manage Azure resources — directly from your terminal or command prompt.
It works on **Windows**, **macOS**, **Linux**, and even in the **Azure Cloud Shell** (inside the portal).

---

## ⚙️ 1. Check Azure CLI Version

Before starting, check your installed version:

```bash
az version
```

✅ Example Output:

```json
{
  "azure-cli": "2.67.0",
  "azure-cli-core": "2.67.0",
  "azure-cli-telemetry": "1.1.0"
}
```

🔄 Update to the latest version:

```bash
az upgrade
```

> 💡 Keeping your CLI updated ensures you get the latest commands and bug fixes.

---

## 💻 2. Difference Between Tools

| Tool                             | Platform            | Purpose                               | Example                      |
| -------------------------------- | ------------------- | ------------------------------------- | ---------------------------- |
| **Azure CLI (az)**               | Cross-platform      | Manage Azure using simple commands    | `az vm list`                 |
| **Azure PowerShell (Az Module)** | Windows/Linux/macOS | Manage Azure using PowerShell cmdlets | `Get-AzVM`                   |
| **Run Command (in Portal)**      | Azure Portal        | Execute scripts directly inside a VM  | PowerShell or Bash inside VM |
| **macOS Terminal / Linux Bash**  | macOS / Linux       | Environment to run `az` commands      | `az group create`            |

🧠 **CLI is command-based**, while **PowerShell** is object-based (more script-heavy).
If you like simpler commands that work everywhere — **Azure CLI is best**.

---

## 🚀 3. Getting Started with Azure CLI

### 🪪 Login to Azure

```bash
az login
```

This opens a browser window for secure sign-in.

View your current subscription:

```bash
az account show
```

List all subscriptions:

```bash
az account list --output table
```

Switch subscription:

```bash
az account set --subscription "<subscription-id>"
```

---

## 🧱 4. Resource Group Management

### ➕ Create Resource Group

```bash
az group create --name MyResourceGroup --location eastus
```

### 📜 List Resource Groups

```bash
az group list --output table
```

### ❌ Delete Resource Group

```bash
az group delete --name MyResourceGroup --yes --no-wait
```

⚠️ Deletes everything inside the group.

---

## 💾 5. Virtual Machine (VM) Commands

### 🧰 Create a Virtual Machine

```bash
az vm create \
  --resource-group MyResourceGroup \
  --name MyVM \
  --image UbuntuLTS \
  --admin-username azureuser \
  --generate-ssh-keys
```

### 🖥️ List All VMs

```bash
az vm list --output table
```

### ▶️ Start a VM

```bash
az vm start --name MyVM --resource-group MyResourceGroup
```

### ⏹️ Stop a VM

```bash
az vm stop --name MyVM --resource-group MyResourceGroup
```

### 🗑️ Delete a VM

```bash
az vm delete --name MyVM --resource-group MyResourceGroup --yes
```

---

## 🆘 6. Azure CLI Help Commands

### 🔹 `az --help` or `az -h`

Lists all top-level Azure CLI command groups.

```bash
az --help
```

✅ Example Output:

```
Group
    az : Manage Azure resources.

Subgroups:
    account    : Manage Azure subscriptions.
    group      : Manage resource groups.
    vm         : Manage virtual machines.
    storage    : Manage storage accounts.
```

---

### 🔹 `az group --help` or `az group -h`

Shows all commands under **Resource Group** management.

```bash
az group --help
```

✅ Example Output:

```
Commands:
    create : Create a new resource group.
    delete : Delete a resource group.
    list   : List resource groups.
    show   : Show details of a resource group.
```

---

### 🔹 `az group create --help`

Shows full syntax and argument help for a specific command.

```bash
az group create --help
```

✅ Example Output:

```
Command
    az group create : Create a new resource group.

Arguments
    --name -n          [Required] : Name of the new resource group.
    --location -l      [Required] : Azure region.
```

💡 **Tip:**
You can use `--help` with **any** command or subgroup to see usage examples.

---

## 🔍 7. Querying with `--query`

### 💡 What is `--query`?

`--query` allows you to **filter, search, or extract** data from Azure CLI command output using **JMESPath syntax** (a JSON query language).

---

### 🧱 Example 1: List Resource Groups (Default)

```bash
az group list
```

Output (JSON):

```json
[
  {
    "name": "MyResourceGroup",
    "location": "eastus"
  }
]
```

---

### 🧩 Example 2: Get Only Group Names

```bash
az group list --query "[].name"
```

Output:

```
[
  "MyResourceGroup",
  "DevGroup",
  "ProdGroup"
]
```

---

### 🧮 Example 3: Filter by Location

```bash
az group list --query "[?location=='eastus'].name"
```

Output:

```
[
  "EastUS-ProjectGroup"
]
```

---

### 🧾 Example 4: Select Custom Columns

```bash
az group list --query "[].{Name:name, Location:location}" --output table
```

Output:

```
Name              Location
----------------  ----------
MyResourceGroup   eastus
ProdGroup         westeurope
```

---

### 🧠 Common `--query` Use Cases

| Goal                 | Command Example                                                                             | Description        |
| -------------------- | ------------------------------------------------------------------------------------------- | ------------------ |
| Get VM names         | `az vm list --query "[].name"`                                                              | Lists VM names     |
| Get public IPs       | `az vm list-ip-addresses --query "[].virtualMachine.network.publicIpAddresses[].ipAddress"` | Filters IPs        |
| Filter RGs by region | `az group list --query "[?location=='eastus'].name"`                                        | Conditional filter |
| Choose columns       | `az vm list --query "[].{Name:name, Location:location}"`                                    | Custom output      |

---

## 🪄 8. Output Formats

Azure CLI supports multiple output types:

| Format         | Flag             | Example                     |
| -------------- | ---------------- | --------------------------- |
| JSON (default) | `--output json`  | `az vm list --output json`  |
| Table          | `--output table` | `az vm list --output table` |
| YAML           | `--output yaml`  | `az vm list --output yaml`  |

---

## 🧠 9. Best Practices for Beginners

✅ Use `az --help` or `az <service> --help` often — it’s your best teacher.
✅ Combine `--query` and `--output table` for neat readable results.
✅ Practice with `az group list` and `az vm list` to understand JSON structures.
✅ Use `az interactive` for auto-complete and live help.
✅ Keep CLI updated (`az upgrade`) regularly.
✅ Always tag your resources for easy management:

```bash
az tag create --resource-id <id> --tags Project=Demo
```

---

## 🧩 10. Summary Table

| Step          | Command                         | Description                       |
| ------------- | ------------------------------- | --------------------------------- |
| Check version | `az version`                    | Verify Azure CLI version          |
| Login         | `az login`                      | Authenticate with Azure           |
| Create RG     | `az group create`               | Create a resource group           |
| Create VM     | `az vm create`                  | Deploy a virtual machine          |
| Manage VM     | `az vm start/stop/delete`       | Operate on VMs                    |
| Delete RG     | `az group delete`               | Delete everything inside a group  |
| Get Help      | `az --help` / `az group --help` | Explore CLI commands              |
| Filter Data   | `--query`                       | Filter or select specific results |
| Format Output | `--output table`                | Display clean formatted data      |

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


