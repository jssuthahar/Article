# Azure Virtual Machines (VM) 

## 🟦 What is Azure Virtual Machine?

**Azure Virtual Machines** are scalable, on-demand computing resources offered by Microsoft Azure. They allow you to run operating systems and applications just like a physical computer, but in a virtualized environment hosted in the cloud.

**Key Features:**

* On-demand compute power
* Support for Windows, Linux, and custom images
* Scalable resources (CPU, RAM, storage)
* Pay-as-you-go pricing
* Integrated with Azure networking, monitoring, and security

---

## 🖥️ Server vs Virtualization

### 🔹 Traditional Physical Server:

* One operating system per physical machine
* Resources are tightly coupled with hardware
* Difficult to scale or migrate
* High cost due to under-utilized hardware

### 🔹 Virtualization:

* Multiple virtual machines (VMs) can run on one physical server
* Each VM has its own OS, CPU, RAM, and disk
* Efficient use of hardware
* Easier to scale and migrate

### 🔸 Diagram: Physical Server vs Virtualization

```
+---------------------------+         +-----------------------------+
| Physical Server           |         | Virtualized Server          |
|---------------------------|         |-----------------------------|
| OS                        |         | Hypervisor (e.g., Hyper-V)  |
| Application               |         | +--------+ +--------+       |
|                           |         | |  VM 1  | |  VM 2  |       |
| Hardware (CPU, RAM, etc.) |         | | OS + App| | OS + App|     |
+---------------------------+         | +--------+ +--------+       |
                                      | Hardware (CPU, RAM, etc.)   |
                                      +-----------------------------+
```

---

## ☁️ How Azure Virtual Machine Works

1. **Request a VM** via Azure Portal, CLI, or ARM template
2. Azure uses **Hypervisor** (like Hyper-V) to create and manage your VM on top of its physical infrastructure
3. Azure assigns your VM to a physical server in one of its global data centers
4. You choose:

   * OS (Windows, Ubuntu, etc.)
   * Size (Standard\_B2s, D4s\_v3, etc.)
   * Disk (Standard HDD, SSD, Premium SSD)
   * Region (e.g., Southeast Asia, East US)
5. Azure handles:

   * Load balancing
   * Networking (Virtual Network, Public IP)
   * Monitoring (Azure Monitor, Log Analytics)
   * Security (NSGs, Azure Defender)

### VM Lifecycle:

* **Provisioned** → **Running** → **Stopped** → **Deallocated** → **Deleted**

---

## ⚙️ Components of an Azure VM

| Component            | Description                         |
| -------------------- | ----------------------------------- |
| OS Disk              | Boot disk (based on image selected) |
| Data Disks           | Additional storage                  |
| NIC (Network)        | Connects to virtual network         |
| Public IP            | Optional, for internet access       |
| NSG (Security Group) | Firewall rules for traffic control  |
| VM Size              | Defines CPU, RAM, and storage       |
| Availability Sets    | Ensure redundancy                   |

---

## 📌 Benefits of Azure VMs

* Quickly deploy applications
* Custom VM images
* Backup, scale, and automate
* High availability and disaster recovery
* Integration with other Azure services


 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
