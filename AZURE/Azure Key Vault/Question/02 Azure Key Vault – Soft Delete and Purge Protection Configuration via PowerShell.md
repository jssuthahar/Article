# 📘 Azure Key Vault – Soft Delete and Purge Protection Configuration via PowerShell

## 🧩 Scenario:

You are creating an Azure Key Vault using PowerShell. The requirement is to **retain deleted objects for a set period of 90 days**.

## ❓ Question:

**Which two of the following parameters must be used in conjunction to meet the requirement? (Choose two.)**

### 🔘 Options:

* A. `EnabledForDeployment`
* B. `EnablePurgeProtection` ✅
* C. `EnabledForTemplateDeployment`
* D. `EnableSoftDelete` ✅

---

## ✅ Correct Answers: **B. EnablePurgeProtection and D. EnableSoftDelete**

### 🔹 Explanation:

### 1. `EnableSoftDelete`:

* **Purpose**: Enables the soft-delete feature.
* **Effect**: When enabled, deleted secrets, keys, and certificates are retained in a **recoverable state** for 90 days by default.
* **Default Retention**: 90 days (can be configured between 7–90 days).
* **Benefit**: Prevents accidental or malicious deletion.

### 2. `EnablePurgeProtection`:

* **Purpose**: Prevents **permanent deletion (purge)** of soft-deleted items **before the retention period expires**.
* **Requirement**: Can only be enabled **after** soft-delete is turned on.
* **Irreversible**: Once enabled, it **cannot be turned off**.

### 🔒 Together:

Using both ensures:

* All deleted objects are **recoverable for 90 days**.
* No one (including subscription owners) can purge data until the retention period ends.

---

## 💻 PowerShell Command Example

```powershell
New-AzKeyVault \
  -Name "MyKeyVault" \
  -ResourceGroupName "MyResourceGroup" \
  -Location "EastUS" \
  -EnableSoftDelete \
  -EnablePurgeProtection
```

---

## ❌ Why Other Options Are Incorrect:

| Option                            | Reason                                                                           |
| --------------------------------- | -------------------------------------------------------------------------------- |
| A. `EnabledForDeployment`         | Used to allow the vault to be used for VM deployments. Not related to retention. |
| C. `EnabledForTemplateDeployment` | Used with ARM templates to deploy secrets. Not related to deletion/retention.    |

---

## 📘 References:

* [Soft-delete overview](https://learn.microsoft.com/en-us/azure/key-vault/general/soft-delete-overview)
* [PowerShell: New-AzKeyVault](https://learn.microsoft.com/en-us/powershell/module/az.keyvault/new-azkeyvault)

---

> ✅ Enabling **Soft Delete** and **Purge Protection** together ensures **compliance, data recoverability**, and **stronger security** in cloud key management.
 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)


