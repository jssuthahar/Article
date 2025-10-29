# Azure Virtual Machine - Detailed Creation Guide


This guide is written in **Beginner Training Style** so that even someone creating a VM for the first time can understand what each setting means and why it is used. The goal is to help you choose the right options confidently during VM creation.
This document provides a step-by-step and deeply detailed explanation of every setting available when creating a Virtual Machine (VM) in Azure. It covers VM architecture, security configuration, networking, Spot VM discount, hibernation, disk options, licensing, monitoring, advanced sections, and tagging strategy.

## 2. VM Architecture Types

* **x86 Architecture (Intel/AMD)** – Most commonly used for general workloads.
* **ARM-based (Ampere)** – Cost-efficient and optimized for scale-out web workloads.
* **Confidential Computing** – For regulated industries; encrypts data-in-use.
* **GPU-based** – For AI/ML training, rendering, and heavy graphics workloads.

## 3. Security Group Types

* **NSG (Network Security Group)** – Controls inbound/outbound rules.
* **ASG (Application Security Group)** – Logical grouping of VMs for simplified rules.
* **Firewall** – Centralized advanced security across the network.
* **Just-In-Time Access** – Temporarily opens RDP/SSH for secure access.
* **NSG Flow Logs** – Captures traffic flow for auditing.

## 4. Azure Spot VM - Detailed Explanation

Azure Spot VM provides unused Azure capacity at a 60–90% discount. However, Azure can evict the VM anytime when capacity is needed for regular users.

### When to Use

* CI/CD build agents
* Machine learning training
* Batch processing
* Rendering jobs
* Temporary / test environments

### When NOT to Use

* Production servers
* Database servers
* Critical applications with SLA

### Eviction Policy

* **Stop/Deallocate** – VM stops but can restart later
* **Delete** – VM removed permanently

## 5. Hibernation Feature

* Saves RAM state to disk
* Resumes instantly
* Reduces cost by pausing compute billing
* Only supported by selected VM sizes and OS types

## 6. Inbound Port Rules

Inbound rules decide **who can enter your VM** from the internet or other networks. Think of them like the **main gate** of your house. If the gate is open for everyone, anyone can walk in. If it is restricted, only selected people can enter.

### Common Inbound Ports (Beginner Friendly)

| Port     | Use                          | When to Enable                   |
| -------- | ---------------------------- | -------------------------------- |
| **3389** | RDP (Windows Remote Desktop) | When connecting to Windows VM    |
| **22**   | SSH (Linux Remote Login)     | When connecting to Linux VM      |
| **80**   | HTTP (Website)               | If hosting a website without SSL |
| **443**  | HTTPS (Secure Website)       | If hosting a secure website      |

### When NOT to Open Ports Publicly

❌ Do not open 3389 or 22 to "Any/Internet" because hackers continuously scan these ports.

### Better Options Instead of Exposing Ports

| Method                 | Why it's safer                                |
| ---------------------- | --------------------------------------------- |
| **Azure Bastion**      | Login from browser without opening ports      |
| **Just-in-Time (JIT)** | Opens RDP/SSH only temporarily                |
| **Private Access**     | Access only inside VNet, no internet exposure |

### Example Beginner Scenario

If you create a Windows VM and open port **3389** to the internet:

* ✔ You can login easily
* ❌ But anyone in the world can **attempt to hack** your RDP

If you use **Bastion** instead:

* ✔ No port is open to the public
* ✔ Much safer
* ✔ Recommended best practice

### Simple Rule to Remember

"Only open what is needed, and close everything else."

* RDP (3389) for Windows
* SSH (22) for Linux
* HTTP/HTTPS for web access
* Best practice: Use Bastion/JIT instead of open internet access

## 7. Licensing

* **Azure Hybrid Benefit** – Use existing Windows licenses to reduce cost
* **Included Licensing** – Default; higher cost
* Linux does not require licensing

## 8. Disk Section

* **Standard HDD** – Low cost
* **Standard SSD** – Balanced
* **Premium SSD** – Production workloads
* **Ultra Disk** – Extreme performance

## 9. Networking Section

This section controls **how your VM connects to the internet and other resources**. Networking is like giving your VM a house address so it can talk to others.

### Key Components (Beginner Friendly)

| Item                             | Meaning                        | Simple Example                 |
| -------------------------------- | ------------------------------ | ------------------------------ |
| **Virtual Network (VNet)**       | Private network inside Azure   | Like your home Wi‑Fi network   |
| **Subnet**                       | A small part of VNet           | Rooms inside your house        |
| **NIC (Network Interface Card)** | The network adapter of the VM  | Like LAN cable / Wi‑Fi adapter |
| **Public IP**                    | Gives internet access          | People outside can reach you   |
| **NSG**                          | Firewall rules for VM          | Allow RDP/SSH or block traffic |
| **Bastion**                      | Secure login without public IP | Login from browser safely      |

### When to Enable Public IP?

✅ If you want to connect **directly** from your laptop using RDP/SSH
❌ If your VM is **only for internal or backend use**
❗ Best practice: Use **Bastion** instead of exposing port 3389/22 to internet.

### Subnet Best Practice

* Keep web/application servers in one subnet
* Keep database servers in a **different subnet** for security

### Beginner Tip

Think of **VNet = your home network** and **Subnet = rooms in your house**. The VM lives in one of the rooms.

* Virtual Network (VNet)
* Subnet
* NIC
* Public IP (optional)
* NSG / ASG
* Private Endpoint
* Bastion for secure access

## 10. Management Section

* Azure AD Login
* Auto-Shutdown
* Backup configuration
* Boot diagnostics
* Extensions and agents

## 11. Monitoring Section

* Log Analytics
* VM Insights
* Activity Logs
* Alerts

## 12. Advanced Section

* Proximity Placement Group
* Host Group
* Encryption settings
* Custom data & cloud-init

## 13. Tags Section

Tags are simple **labels** that help you identify and organize Azure resources. They do not change how the VM works, but they are **very important for cost tracking and management**.

### Why Tags Are Important (Beginner Explanation)

| Reason        | Simple Meaning                       |
| ------------- | ------------------------------------ |
| Cost Tracking | Know which project is spending money |
| Ownership     | Know who created/owns the VM         |
| Cleanup       | Easy to delete old/unused VMs        |
| Environment   | Separate Dev/Test/Prod resources     |

### Simple Tag Examples

| Key         | Value      | Purpose                       |
| ----------- | ---------- | ----------------------------- |
| Environment | Dev        | This VM is for development    |
| Owner       | Suthahar   | Who created/maintains this VM |
| Project     | LearningVM | Which project this belongs to |
| CostCenter  | CC001      | For billing and accounting    |

### Beginner Tip

Always **add tags during VM creation**. Later when you check the bill, tags help you understand **which VM cost how much**.
Tags help classify, organize, and track resources for billing and governance.

Examples:

* `Environment = Production`
* `Project = CRMSystem`
* `Owner = DevTeam`

## 14. Best Practices (Beginner Friendly)

Following these best practices will help you create secure, cost-effective, and easy-to-manage VMs:

### 1. Networking Best Practices

* Do not expose RDP (3389) or SSH (22) directly to the internet
* Use **Azure Bastion** or **Just-in-Time (JIT)** access for security
* Keep database VMs in a **private subnet**, not public

### 2. Security Best Practices

* Always apply an **NSG** to control traffic
* Allow only the required inbound ports
* Deny all unnecessary access

### 3. Cost Optimization Best Practices

* Use **Spot VM** for testing or temporary workloads
* Use **Auto-Shutdown** for dev/test VMs
* Choose Standard SSD instead of Premium if not required

### 4. Disk Best Practices

* Keep OS disk separate from data disk
* Use Premium SSD for production workloads
* Enable disk encryption for security

### 5. Tagging Best Practices

* Always tag for **Environment**, **Project**, **Owner**
* Helps in billing and resource tracking
* Makes cleanup easier later

### 6. Backup & Recovery

* Enable Azure Backup for important VMs
* Test restore occasionally

### 7. Access & Login

* Prefer Azure AD login over local admin
* Disable password login, use SSH keys for Linux

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
