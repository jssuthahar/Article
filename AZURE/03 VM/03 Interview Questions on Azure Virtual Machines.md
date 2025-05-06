
## 💼 **Interview Questions on Azure Virtual Machines**

### 1. **What is an Azure Virtual Machine?**

**Answer:**
An Azure Virtual Machine is an on-demand, scalable computing resource provided by Microsoft Azure. It runs in the cloud and can host operating systems, applications, and services, just like a physical computer.

---

### 2. **What is the difference between an Availability Set and an Availability Zone?**

**Answer:**

* **Availability Set**: Protects against hardware failures in the same data center by distributing VMs across fault and update domains.
* **Availability Zone**: Physically separate data centers within a region; offers higher availability by hosting VMs in different zones.

---

### 3. **What is a VM Scale Set?**

**Answer:**
A Virtual Machine Scale Set is an Azure service that lets you deploy and manage a group of identical, auto-scaling VMs. It’s ideal for large-scale, stateless applications.

---

### 4. **Can you vertically scale an Azure VM?**

**Answer:**
Yes. You can resize a VM by changing its size (e.g., from Standard B2s to Standard D4s), but it requires the VM to restart, causing temporary downtime.

---

### 5. **How does Azure ensure VM high availability?**

**Answer:**
By using **Availability Sets**, **Availability Zones**, **Load Balancers**, and **VM Scale Sets**, Azure ensures high availability by spreading workloads across fault and update domains or zones.

---

### 6. **What types of disks are supported in Azure VMs?**

**Answer:**

* OS Disk
* Data Disk
* Temporary Disk
  Disk types include:
* **Standard HDD** (low cost, lower performance)
* **Standard SSD** (moderate performance)
* **Premium SSD** (high performance)
* **Ultra Disk** (extreme performance, low latency)

---

## 📝 **AZ-204 Style Exam Questions (With Answers)**

### 1. **You are deploying a web application that must remain available even if a data center goes down. What should you use?**

**A. Availability Set**
**B. Availability Zone**
**C. Load Balancer only**
**D. Auto-scaling group**

✅ **Answer:** B. Availability Zone
➡ Zones provide data center-level failure isolation.

---

### 2. **Which Azure service would you use to automatically scale out your VMs based on CPU usage?**

**A. Azure App Service Plan**
**B. Azure Monitor**
**C. Virtual Machine Scale Set**
**D. Azure Automation**

✅ **Answer:** C. Virtual Machine Scale Set
➡ It allows VM auto-scaling based on predefined rules.

---

### 3. **You need to allow only HTTPS traffic to your Azure VM. What should you configure?**

**A. Route Table**
**B. NSG (Network Security Group)**
**C. Azure DNS**
**D. Load Balancer Probe**

✅ **Answer:** B. NSG
➡ NSG controls inbound/outbound traffic to Azure VMs.

---

### 4. **Which disk is automatically created with an Azure VM but is not intended for data storage?**

**A. OS Disk**
**B. Data Disk**
**C. Ephemeral Disk**
**D. Temporary Disk**

✅ **Answer:** D. Temporary Disk
➡ Used for paging, not persisted across reboots.

---

### 5. **You want to reduce downtime during planned maintenance of a VM. What should you use?**

**A. Availability Set**
**B. Managed Identity**
**C. Resource Lock**
**D. Tags**

✅ **Answer:** A. Availability Set
➡ Ensures that only a portion of your VMs go down during maintenance.

---
 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
