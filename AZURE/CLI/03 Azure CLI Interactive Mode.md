# 🧠 Azure CLI Interactive Mode 

## 📘 Overview

**Azure CLI Interactive Mode (`az interactive`)** is a special **command-line experience** that helps you **learn, explore, and execute** Azure CLI commands with **auto-completion, live help, and suggestions** — all within the terminal.

It’s perfect for **beginners** who want to practice and understand Azure CLI step-by-step without remembering all the commands.

---

## 🚀 1. What is `az interactive`?

Normally, you type individual commands like:

```bash
az group create --name MyResourceGroup --location eastus
```

But in **interactive mode**, you enter a live Azure CLI shell:

```bash
az interactive
```

Then you’ll see:

```
Launching Azure CLI Interactive Mode...

Welcome to Azure CLI Interactive Mode!
Type `?` for help or press TAB to see available commands.
azure: >
```

✅ Now you can start typing any command, and the CLI will:

* **Auto-suggest** available commands
* **Display descriptions** for parameters
* **Validate your syntax instantly**
* **Highlight errors before running**

---

## ⚙️ 2. How to Start Interactive Mode

### 🪟 Windows PowerShell / CMD:

```bash
az interactive
```

### 🍏 macOS Terminal / Linux Bash:

```bash
az interactive
```

### 🌐 Azure Cloud Shell (Portal):

You can also launch it directly in your browser (no installation needed):

1. Open [https://shell.azure.com](https://shell.azure.com)
2. Run:

   ```bash
   az interactive
   ```

---

## 🧭 3. What You’ll See

Once started, you’ll notice:

* The prompt changes to:

  ```
  azure: >
  ```
* The background becomes colorful (with command suggestions)
* You can type commands like:

  ```bash
  group create
  ```

  and it auto-fills:

  ```bash
  az group create --name <resource-group-name> --location <location>
  ```

---

## 💡 4. Why Use `az interactive`?

| Feature                           | Description                                             |
| --------------------------------- | ------------------------------------------------------- |
| 🔤 **Auto-Completion**            | Press **Tab** to complete command names and parameters. |
| 📄 **Real-time Help**             | Displays inline help and examples for each parameter.   |
| ✅ **Syntax Validation**           | Detects missing or invalid arguments before execution.  |
| 🔎 **Search and Suggest**         | Automatically suggests next valid subcommands.          |
| 🧩 **Built-in Example Generator** | Shows real command examples as you type.                |
| 🌈 **Color Highlighting**         | Makes command parts easier to read and understand.      |

---

## 🧪 5. Example: Create a Resource Group

In normal CLI:

```bash
az group create --name MyResourceGroup --location eastus
```

In interactive mode:

```bash
azure: > group create
```

Then it will automatically prompt:

```
--name [Required]: Name of the new resource group.
--location [Required]: Azure region.
```

✅ You can use **arrow keys** or **Tab** to fill values:

```
azure: > group create --name MyResourceGroup --location eastus
```

Press **Enter** to execute.

---

## ⚡ 6. Navigation Shortcuts

| Key                    | Function                           |
| ---------------------- | ---------------------------------- |
| **Tab**                | Auto-complete command or parameter |
| **Enter**              | Execute the current command        |
| **↑ / ↓ (Arrow keys)** | Navigate through command history   |
| **Ctrl + L**           | Clear the screen                   |
| **?**                  | Show quick help menu               |
| **exit**               | Exit interactive mode              |
| **Ctrl + C**           | Cancel current input               |

---

## 📘 7. Common Commands Inside `az interactive`

| Task                  | Example Command                                                                     |
| --------------------- | ----------------------------------------------------------------------------------- |
| Create Resource Group | `group create --name MyRG --location eastus`                                        |
| List Resource Groups  | `group list --output table`                                                         |
| Create VM             | `vm create --resource-group MyRG --name MyVM --image UbuntuLTS --generate-ssh-keys` |
| Show VM Details       | `vm show --name MyVM --resource-group MyRG`                                         |
| Delete Resource Group | `group delete --name MyRG`                                                          |

💡 The interactive shell provides live **parameter hints**, so you don’t need to remember exact names.

---

## 🔍 8. Get Help Inside Interactive Mode

At any time, type:

```bash
?
```

Output:

```
Available commands:
    account
    group
    vm
    storage
    network
```

For help on a specific command:

```bash
group create --help
```

Shows detailed options and examples.

---

## 🧩 9. Customize Interactive Mode

You can switch **output formats** even in interactive mode:

```bash
output table
```

Now all results will appear in **table format**.

Other formats:

* `output json`
* `output yaml`
* `output tsv`

---

## 🔒 10. Exit Interactive Mode

To exit:

```bash
exit
```

Or press:

```
Ctrl + C
```

---

## 🪄 11. Best Practices for Beginners

✅ Use `az interactive` to **learn** commands instead of memorizing them.
✅ Try typing partial commands and press **Tab** to discover new services.
✅ Combine with `--output table` for readable results.
✅ Use `?` often — it’s your built-in teacher.
✅ Practice with non-destructive commands first (like `az group list`).
✅ Once confident, switch to standard CLI for automation scripts.

---

## 🧠 12. Summary

| Command          | Purpose                           |
| ---------------- | --------------------------------- |
| `az interactive` | Start Azure CLI interactive shell |
| `?`              | View available commands           |
| `exit`           | Exit interactive mode             |
| `Tab`            | Auto-complete commands            |
| `output table`   | Change display format             |
| `--help`         | Show detailed command usage       |

---

## ✅ Example Practice Flow

```bash
az interactive
?              # View available groups
group create   # Create a resource group with live suggestions
vm create      # Deploy a VM with auto-complete
group list     # View your created groups
exit           # Exit interactive mode
```

---

## 🌟 Key Takeaways

* `az interactive` = **Beginner’s training ground** for Azure CLI
* You get **auto-complete**, **live syntax help**, and **examples**
* Works in **PowerShell**, **macOS Terminal**, **Linux Bash**, or **Cloud Shell**
* Ideal for **learning**, **testing**, and **exploring** Azure commands safely

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


