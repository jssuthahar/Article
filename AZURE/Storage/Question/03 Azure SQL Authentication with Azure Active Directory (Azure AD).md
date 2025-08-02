# 📘 Azure SQL Authentication with Azure Active Directory (Azure AD)

This README explains how to configure and use Azure Active Directory authentication with Azure SQL Database, specifically for allowing developers to connect using **SQL Server Management Studio (SSMS)** with their **on-premises AD credentials**.

---

## ❓ Question

You manage an Azure SQL database that allows for Azure AD authentication. You need to make sure that database developers can connect to the SQL database via Microsoft SQL Server Management Studio (SSMS). You also need to make sure the developers use their on-premises Active Directory account for authentication. Your strategy should allow for authentication prompts to be kept to a minimum.

> **Which of the following should you implement?**

* A. Azure AD token
* B. Azure Multi-Factor Authentication
* C. **Active Directory integrated authentication** ✅
* D. OATH software tokens

### ✅ Correct Answer: **C. Active Directory integrated authentication**

---

## 🔍 Explanation

### What is Active Directory Integrated Authentication?

* This method leverages **existing Windows login credentials** to authenticate directly without prompting the user for a password.
* It uses **Kerberos** or **Windows Integrated Authentication** for seamless sign-in.

### Benefits:

* No need to enter usernames or passwords in SSMS.
* Reduces authentication prompts.
* Streamlined experience when working from domain-joined machines.

### Requirements:

* The machine running SSMS must be **domain-joined** (either to on-prem AD or Azure AD with hybrid identity).
* The on-premises AD must be **federated** with Azure AD (typically via Azure AD Connect).

---

## 🛠️ How to Connect Using SSMS

1. Open **SQL Server Management Studio** (SSMS).
2. In the **Connect to Server** dialog:

   * Set **Authentication** to `Active Directory - Integrated`
   * **Server name**: Provide the Azure SQL Database fully qualified server name.
3. (Optional) Click `Options > Connection Properties` to:

   * Specify the user database name.
   * Configure additional parameters (e.g., application intent).

> ⚠️ Note: If the AD domain is federated, the credentials are passed securely without needing a login prompt.

---

## ❌ Why Other Options Are Incorrect

| Option                      | Why It's Incorrect                                                                             |
| --------------------------- | ---------------------------------------------------------------------------------------------- |
| **A. Azure AD token**       | Used in scripted/automated scenarios; not interactive and not seamless for SSMS.               |
| **B. Azure MFA**            | Adds additional prompts, contradicting the requirement to keep authentication prompts minimal. |
| **D. OATH software tokens** | These are used in multi-factor auth scenarios, not relevant to SSMS login.                     |

---

## 📘 Real-World Use Case

> A financial services company uses Azure SQL to store transaction logs. Developers use SSMS from domain-joined machines in the office. With Active Directory Integrated Authentication, developers can access the Azure SQL databases without entering passwords, enabling secure and efficient development workflows.

---

## 📚 References

* [Azure SQL Authentication Overview](https://learn.microsoft.com/en-us/azure/azure-sql/database/authentication-overview)
* [SSMS Connection with Azure AD](https://learn.microsoft.com/en-us/azure/azure-sql/database/authentication-aad-configure)
* [Azure AD Connect Federation](https://learn.microsoft.com/en-us/azure/active-directory/hybrid/whatis-fed)

---

> ✅ Use **Active Directory Integrated Authentication** for seamless, secure access to Azure SQL via SSMS when working in a hybrid identity setup.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)

