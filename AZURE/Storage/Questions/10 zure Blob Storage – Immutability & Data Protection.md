
# 🗂 Azure Blob Storage – Immutability & Data Protection

This document explains how to configure **Azure Blob Storage** for **business-critical, write-once, read-many (WORM)** scenarios.  
It includes the original exam-style question, detailed analysis, correct answers, and explanations for **why each option is correct or incorrect**.

---

## ❓ Question

You are developing an application to store **business-critical data** in **Azure Blob storage**.  

The application must meet the following requirements:

- Data must **not be modified or deleted** for a **user-specified interval**.  
- Data must be **protected from overwrites and deletes**.  
- Data must be **written once and allowed to be read many times (WORM)**.

You need to protect the data in the Azure Blob storage account.

**Which two actions should you perform?**  
> Each correct answer presents part of the solution.  
> NOTE: Each correct selection is worth one point.

---

### Options
A. Configure a **time-based retention policy** for the storage account.  
B. Create an **account shared-access signature (SAS)**.  
C. Enable the **blob change feed** for the storage account.  
D. Enable **version-level immutability support** for the storage account.  
E. Enable **point-in-time restore** for containers in the storage account.  
F. Create a **service shared-access signature (SAS)**.

---

## ✅ Correct Answer
**A and D**

- **A. Configure a time-based retention policy**  
- **D. Enable version-level immutability support**

---

## 📖 Detailed Explanation

### 🔒 1. Requirement: WORM (Write Once, Read Many)
Azure Blob Storage supports **immutability policies** that prevent objects from being changed or deleted during a retention period.

- **Time-based retention policy:** Locks data for a fixed number of days/months/years.
- **Legal hold policy:** Locks data until the hold is explicitly cleared.
- **Version-level immutability:** Ensures each version of a blob can have its own immutability policy.

> This is the **core feature** to achieve WORM compliance.

---

### 🟩 Correct Options

#### ✅ A. Configure a time-based retention policy
- Ensures that **blobs cannot be modified or deleted** for a specified period.
- Meets the requirement: “Data must not be modified or deleted for a user-specified interval.”
- Common in compliance scenarios like **financial, healthcare, and legal records**.

#### ✅ D. Enable version-level immutability support
- Applies immutability policies **at the version level** rather than at the container level.
- Protects each blob version from overwrite or deletion.
- Ensures that **new versions do not affect the immutability of previous versions**.
- Meets the requirement: “Data must be protected from overwrites and deletes.”

---

### ❌ Incorrect Options

#### ❌ B. Create an account shared-access signature (SAS)
- SAS controls **who can access the storage** and **what operations they can perform** (read, write, delete).
- It is an **access control mechanism**, not an immutability feature.
- Does **not guarantee data cannot be overwritten or deleted** by someone with write/delete permissions.

---

#### ❌ C. Enable the blob change feed
- Captures a **log of changes** (insert, update, delete) for analytics or auditing.
- Does **not prevent modification or deletion**.
- Useful for tracking events, not for enforcing WORM.

---

#### ❌ E. Enable point-in-time restore for containers
- Lets you **restore a container to an earlier state** after accidental deletion or corruption.
- Does **not stop users or processes from modifying or deleting data**.
- Good for recovery, but not compliance.

---

#### ❌ F. Create a service shared-access signature (SAS)
- Similar to account SAS; controls access at the service level.
- Provides permissions but **does not enforce immutability**.
- Still allows modification/deletion if write/delete permissions are granted.

---

## ⚡ Why A + D?
- **Requirement:** WORM and compliance → need immutability, not just access control or recovery.
- **A:** Ensures no modifications/deletions for a defined time → meets retention requirement.
- **D:** Protects each version against overwrites/deletes → meets overwrite protection requirement.

---

## 📝 Practical Steps in Azure
1. **Enable Immutability Policy** on the container:
   - Go to **Azure Portal → Storage Account → Containers → Select Container → Access Policy → Immutability**.
2. Choose **Time-based retention** and specify the interval.
3. Enable **version-level immutability** to protect individual blob versions.
4. Lock the policy to prevent future changes.

---

## 🟢 Key Takeaways
- **Immutability policies** (A & D) are the only way to enforce true WORM compliance.
- **SAS tokens (B & F)** manage access, not data protection.
- **Change feed (C)** is for auditing, not protection.
- **Point-in-time restore (E)** is for recovery, not immutability.

---

## 📚 References
- [Azure Blob Storage immutability policies for WORM data](https://learn.microsoft.com/azure/storage/blobs/immutable-storage-overview)
- [Configure container-level WORM policies](https://learn.microsoft.com/azure/storage/blobs/immutable-storage-how-to)
- [Version-level immutability](https://learn.microsoft.com/azure/storage/blobs/immutable-storage-version-level-immutability)
- [Point-in-time restore for containers](https://learn.microsoft.com/azure/storage/blobs/point-in-time-restore-overview)

---

## 🏆 Summary Table

| Option | Role | Meets WORM Requirement? |
|--------|------|--------------------------|
| A. Time-based retention policy | Locks data for a specified period | ✅ |
| B. Account SAS | Grants limited access to storage | ❌ |
| C. Change feed | Logs all changes for auditing | ❌ |
| D. Version-level immutability | Prevents changes/deletion of specific versions | ✅ |
| E. Point-in-time restore | Restores previous container state | ❌ |
| F. Service SAS | Grants access at service scope | ❌ |

**✔️ Correct Answer:** A and D
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


