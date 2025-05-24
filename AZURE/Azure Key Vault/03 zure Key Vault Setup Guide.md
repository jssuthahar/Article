# 📘 Azure Key Vault Setup Guide

This README provides a **step-by-step guide** to create an **Azure Key Vault** using the **Azure Portal**, along with detailed explanations of each section and column.

---

## 🔐 What is Azure Key Vault?

**Azure Key Vault** is a cloud service offered by Microsoft Azure to securely store and manage sensitive information like:

* **Secrets** (API keys, passwords, connection strings)
* **Keys** (encryption keys)
* **Certificates** (SSL certificates)
* **Secrets Versioning** and **Access Policies**

---

## 🧭 Prerequisites

* An **active Azure subscription**
* Sufficient permissions (Owner/Contributor) to create resources

---

## ✅ Step-by-Step: Create Azure Key Vault

### 🔹 Step 1: Sign in to Azure Portal

1. Visit [https://portal.azure.com](https://portal.azure.com)
2. Log in with your Azure credentials.

---

### 🔹 Step 2: Search and Select Key Vaults

* Use the **Search bar** at the top.
* Type `Key Vaults` and select **Key Vaults** under **Services**.

---

### 🔹 Step 3: Click on “+ Create”

This starts the wizard to create a new Key Vault.

---

## 📋 Step 4: Fill in the Basics

| Field              | Description                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------ |
| **Subscription**   | Select the Azure subscription where the Key Vault will be created.                                                 |
| **Resource Group** | Select an existing resource group or click **Create new**.                                                         |
| **Key Vault Name** | Provide a globally unique name (e.g., `MySecureKeyVault`).                                                         |
| **Region**         | Select the Azure region where the vault should reside. Choose a region close to your users for better performance. |
| **Pricing Tier**   | Select **Standard** or **Premium**.<br> - *Standard:* Basic features.<br> - *Premium:* Offers HSM-backed keys.     |

✅ Click **Next: Access Configuration >**

---

## 🔐 Step 5: Configure Access Settings

| Setting                | Description                                                                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Permission model**   | Choose either:<br> - *Vault access policy* (classic method)<br> - *Azure role-based access control (RBAC)* (recommended for enterprise) |
| **Access policies**    | Define which users/services can perform actions like read/write secrets.                                                                |
| **Azure AD principal** | Choose a user, app, or service principal that can access the vault.                                                                     |
| **Permissions**        | Select permissions for Secrets, Keys, Certificates, and Storage.                                                                        |

✅ Click **Next: Networking >**

---

## 🌐 Step 6: Configure Networking

| Setting                           | Description                                                                                                                          |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Network access**                | Choose between:<br> - *Public endpoint (all networks)*<br> - *Private endpoint*<br> - *Public endpoint (selected IPs or VNets only)* |
| **Firewall and virtual networks** | Restrict access to only trusted IP addresses or Virtual Networks.                                                                    |

✅ Click **Next: Tags >**

---

## 🏷️ Step 7: Add Tags (Optional)

| Field     | Description                                   |
| --------- | --------------------------------------------- |
| **Name**  | Add a name for your tag (e.g., `Environment`) |
| **Value** | Add a value for the tag (e.g., `Production`)  |

Tags help organize resources, especially for billing and automation.

✅ Click **Next: Review + Create >**

---

## ✅ Step 8: Review and Create

* Review all the details you've entered.
* Click **Create** to deploy the Key Vault.

After a few seconds, you will see a confirmation message that your Key Vault has been deployed.

---

## 🔎 Exploring the Key Vault Dashboard

Once deployed, click **Go to Resource**.

You can now:

* **Add Secrets** (e.g., DB password)
* **Generate/Import Keys**
* **Upload Certificates**
* **Manage access policies**
* **Enable soft-delete and purge protection**

---

## 🛠️ Bonus: Add a Secret to the Vault

1. Open the Key Vault resource
2. Click **Secrets** > **+ Generate/Import**
3. Enter:

   * **Name**: `DbPassword`
   * **Value**: `MySecurePassword123`
4. Click **Create**

---

## 🔒 Security Best Practices

* Use **RBAC** wherever possible.
* Enable **Soft Delete** and **Purge Protection**.
* Regularly rotate secrets.
* Restrict access using **IP rules or private endpoints**.

---

## 📚 References

* [Azure Key Vault Documentation](https://learn.microsoft.com/en-us/azure/key-vault/)
* [Azure Pricing Calculator](https://azure.microsoft.com/en-us/pricing/calculator/)

---

## 📦 Sample Use Cases

| Use Case            | Example                                   |
| ------------------- | ----------------------------------------- |
| Store API Keys      | Stripe, Twilio, or SendGrid API keys      |
| Encrypt Disk        | Azure Disk Encryption with Key Vault keys |
| SSL Certificate     | Store & manage TLS/SSL certificates       |
| Application Secrets | Connection strings for production apps    |

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
