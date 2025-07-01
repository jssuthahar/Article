# 📁 Azure File Storage Sync – Step-by-Step Setup Guide

This guide explains how to configure **Azure File Sync** to synchronize your **on-premises Windows Server** with **Azure File Share**, enabling a hybrid file storage solution.

---

## 📌 Prerequisites

Before getting started, ensure you have:

- ✅ Azure subscription
- ✅ Storage account with a File Share created
- ✅ On-premises **Windows Server 2012 R2** or later
- ✅ Server connected to the internet
- ✅ Admin rights on both Azure and the server

---

## 🛠️ Step-by-Step Configuration

### 🔹 Step 1: Create a Storage Account in Azure

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Storage Accounts** → `+ Create`
3. Fill in:
   - Resource Group
   - Name
   - Region
   - Performance: **Standard** or **Premium**
4. Click **Review + Create**

---

### 🔹 Step 2: Create a File Share

1. Open the created storage account
2. Go to **File Shares** → `+ File Share`
3. Set:
   - Name (e.g., `CorpData`)
   - Quota (e.g., `100 GB`)
4. Click **Create**

---

### 🔹 Step 3: Deploy Azure File Sync

1. Go to **Azure Portal** → Search for **Azure File Sync**
2. Click **+ Create**
3. Fill in:
   - Resource Group
   - Storage Sync Service name (e.g., `FileSyncService`)
   - Region (same as storage account)
4. Click **Review + Create**

---

### 🔹 Step 4: Install Azure File Sync Agent on Windows Server

1. Download the agent from:
   [Download Azure File Sync Agent](https://aka.ms/afsagent)
2. Run the installer and complete the setup
3. After installation, launch **Azure File Sync Agent**
4. Click **Register Server**
5. Sign in with your Azure account
6. Select:
   - Azure Subscription
   - Resource Group
   - Storage Sync Service created earlier
7. Complete registration

---

### 🔹 Step 5: Create Sync Group in Azure

1. Go to **Storage Sync Service**
2. Click **+ Sync Group**
3. Provide:
   - Sync Group name (e.g., `BranchFileSync`)
   - Select the Azure File Share created earlier
4. Click **Create**

---

### 🔹 Step 6: Add Registered Server to Sync Group

1. In the **Sync Group**, click **+ Add Server Endpoint**
2. Select:
   - Registered Windows Server
   - Local path to sync (e.g., `D:\CompanyData`)
3. (Optional) Enable **Cloud Tiering**:
   - Choose tiering policy and volume free space %

---

## 🔁 How It Works

Once setup is complete:

- Files in `D:\CompanyData` on your Windows Server will sync to Azure File Share
- Changes in Azure will also sync back to the local server
- You can add more servers to the same sync group for multi-location sync

---

## 🧠 Notes

- **Cloud Tiering** allows older files to be offloaded to the cloud to save space
- File conflicts are logged and can be resolved in Azure Portal
- Use **Azure Backup** to back up your cloud file share
- **NTFS permissions** are preserved during sync

---

## 📊 Monitoring

- Use **Azure Monitor** to track sync jobs and health
- Review **Event Viewer** on Windows Server for agent logs
- Azure portal shows sync status, last sync time, errors

---

## 📚 Additional Resources

- [What is Azure File Sync?](https://learn.microsoft.com/en-us/azure/storage/files/storage-sync-files-planning)
- [Troubleshoot Azure File Sync](https://learn.microsoft.com/en-us/azure/storage/files/storage-sync-files-troubleshoot)
- [Azure File Sync Pricing](https://azure.microsoft.com/en-us/pricing/details/storage/file-sync/)

---

## ✅ Summary

| Component              | Description                                 |
|------------------------|---------------------------------------------|
| Storage Account        | Hosts the Azure File Share                  |
| Azure File Share       | Cloud-based file system                     |
| File Sync Agent        | Installed on-prem to sync data              |
| Sync Group             | Links file share with registered servers    |
| Server Endpoint        | Local folder path to be synced              |

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
