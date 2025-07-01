## 🔷 What is Azure File Share?

**Azure File Share** is a managed file storage service provided by **Azure Storage**, accessible via the **SMB (Server Message Block)** and **NFS (Network File System)** protocols. It allows you to mount file shares in the cloud, just like network drives in on-premises environments.

---

## ✅ Why Use Azure File Share?

### 1. **Cloud-Based File Storage**

* Eliminates the need for physical file servers.
* Automatically managed and maintained by Microsoft Azure.

### 2. **Cross-Platform Access**

* Works across **Windows**, **Linux**, and **macOS**.
* Supports **SMB protocol**, meaning traditional file sharing applications can access it.

### 3. **Secure and Scalable**

* Secure access via **Azure AD**, **Shared Access Signatures (SAS)**, or **storage keys**.
* Scales easily from GBs to PBs.

### 4. **Backup & Sync**

* Supports Azure Backup and third-party tools.
* Can be used with **Azure File Sync** for hybrid environments (on-premises + cloud).

### 5. **Cost-Effective**

* Pay-as-you-go pricing.
* No need for upfront hardware or server management.

---

## 🔧 How to Use Azure File Share?

### 1. **Create Azure File Share**

* Go to **Azure Portal** → Storage Account → File Shares → + File Share.
* Provide name, quota (in GB), and create.

### 2. **Access Using SMB**

* Mount the file share using SMB:

  ```bash
  net use Z: \\<storage-account-name>.file.core.windows.net\<share-name> /u:<storage-account-name> <storage-key>
  ```

### 3. **Use Azure File Sync (Optional)**

* Sync on-premises file servers with Azure File Share.
* Enables local caching, faster access, and cloud backup.

### 4. **Access via REST API / SDK**

* For application-level integration.
* Supports .NET, Java, Python, etc.

### 5. **Control Access**

* Use:

  * **Shared Access Signatures (SAS)**
  * **Storage Account Key**
  * **Azure Active Directory (AD) Authentication** (for domain-joined VMs)

---

## 📍 Where to Use Azure File Share?

### 1. **Lift-and-Shift File Server**

* Easily replace on-prem file servers during migration to cloud.

### 2. **Shared File Storage for Apps**

* Web apps or legacy apps that require a shared file system.

### 3. **User Profiles in Virtual Desktops**

* Commonly used with **Azure Virtual Desktop (AVD)** to store user profiles and data.

### 4. **Backup and Archival**

* Store backup copies from on-premise or other cloud sources.

### 5. **Hybrid Cloud Environments**

* Use with Azure File Sync to extend storage to the cloud, reduce local storage, and maintain performance.

### 6. **Dev/Test Environments**

* Share code, data, logs between multiple development or test machines.

---

## 📦 Azure File Share Tiers

| Tier                      | Use Case                            | Performance           |
| ------------------------- | ----------------------------------- | --------------------- |
| **Premium**               | IO-intensive workloads, low latency | SSD-backed, high IOPS |
| **Transaction Optimized** | Frequent access, SMB scenarios      | Balanced performance  |
| **Hot**                   | Frequently accessed data            | Low-cost, standard    |
| **Cool**                  | Infrequently accessed data          | Lowest cost           |

---

## 🔐 Security Features

* Encryption at rest and in transit
* Firewall and private endpoint support
* RBAC and Azure AD integration
* Soft delete for accidental recovery


## ✅ Azure File Share – AZ-204 Oriented Questions & Answers

---

### **Q1: What protocol is primarily used to access Azure File Share from Windows systems?**

**A:** SMB (Server Message Block) protocol is used to access Azure File Share from Windows machines.

---

### **Q2: How do you connect to Azure File Share from an Azure VM securely using identity-based authentication?**

**A:** By enabling **Azure Active Directory (Azure AD) Domain Services authentication** on the storage account and using **Azure AD credentials** from a domain-joined VM.

---

### **Q3: Can Azure File Share be accessed using REST APIs?**

**A:** Yes. Azure File Share provides REST APIs to perform operations such as uploading, downloading, and listing files.

---

### **Q4: What is Azure File Sync and how does it work?**

**A:** Azure File Sync allows you to **cache** and **sync** Azure File Shares to on-premises Windows Servers. It helps build a **hybrid file server** solution.

---

### **Q5: How can you limit access to Azure File Share?**

**A:**

* Using **Shared Access Signatures (SAS)**
* **RBAC** when Azure AD is configured
* **Storage account keys**
* **Private endpoints** and **firewall rules**

---

### **Q6: What performance tiers are available for Azure Files and when should you use Premium?**

**A:**

* **Premium**: For high IOPS, low latency – use for database files, user profiles in AVD.
* **Hot/Transaction Optimized**: For general-purpose workloads with frequent access.
* **Cool**: For infrequently accessed file shares.

---

### **Q7: Which Azure Storage service should you use when you need a file system accessible by multiple VMs concurrently?**

**A:** **Azure Files** (File Share). Blob storage is not a file system and doesn’t support SMB mounting.

---

### **Q8: You want to migrate an on-prem file server to the cloud and retain compatibility with existing file paths. What Azure service should you use?**

**A:** Use **Azure Files with Azure File Sync** to mirror the file server and retain drive letter/path mappings.

---

### **Q9: What is the maximum size of a single Azure File Share in the standard tier?**

**A:**

* Up to **100 TiB** (with large file share enabled).

---

### **Q10: How is data in Azure File Share encrypted?**

**A:**

* **At rest** using Azure Storage Service Encryption (SSE).
* **In transit** via SMB 3.0 encryption (if supported).

---

### **Q11: Can you mount Azure File Share on a Linux system?**

**A:** Yes. Linux can mount Azure File Shares using **SMB** or **NFS v4.1** (on premium tier).

---

### **Q12: Which of the following services supports integration with Azure Backup? (Azure Files, Blob Storage, Disk Storage)**

**A:** **Azure Files** and **Blob Storage** support Azure Backup (with some configuration differences).

---

## 🧠 Exam Tip for AZ-204:

* You’ll often see questions comparing **Blob Storage**, **Disk Storage**, and **File Share**—know the differences!
* You may also see code snippets using the **Azure SDK** (e.g., `ShareServiceClient`, `ShareClient`) or **REST APIs**.
* Practice using **Azure Storage Explorer** and **PowerShell/Azure CLI** for provisioning, accessing, and securing file shares.
  
## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

