# 📘 Azure Active Directory Conditional Access – MFA for Azure Portal

This README provides a detailed explanation for implementing **Multi-Factor Authentication (MFA)** using **Conditional Access (CA)** in **Azure Active Directory (Azure AD)**, specifically targeting access to the **Azure Portal**.

---

## 🔥 HOTSPOT Scenario:

> You have an Azure Active Directory (Azure AD) tenant. You want to implement multi-factor authentication (MFA) using a conditional access policy. The policy must be applied to **all users** when they access the **Azure portal**.

### ✅ Correct Settings (HOTSPOT Selection):

| Setting Area                                   | Correct Selection                       | Reasoning                                                        |
| ---------------------------------------------- | --------------------------------------- | ---------------------------------------------------------------- |
| **Box 1: Assignments > Users**                 | **All users**                           | Ensures the policy is enforced across your tenant.               |
| **Box 2: Assignments > Cloud apps or actions** | **Microsoft Azure Management**          | Targets the Azure portal and related Azure management endpoints. |
| **Box 3: Access controls > Grant**             | **Require multi-factor authentication** | Enforces MFA when access is granted.                             |

---

## ✅ Why These Selections Are Correct:

### 🔹 Box 1: Users and Groups

* The policy should target **All users** so that no individual is exempted.
* You can later exclude break-glass admin accounts if needed (best practice).

### 🔹 Box 2: Cloud Apps or Actions

* Selecting **Microsoft Azure Management** includes:

  * Azure portal
  * Azure Resource Manager provider
  * Classic deployment model endpoints

### 🔹 Box 3: Access Control (Grant)

* Enforcing **"Require multi-factor authentication"** ensures that MFA is required before granting access to the Azure portal.

---

## 🎯 Real Use Case:

An enterprise organization wants to prevent unauthorized access to the Azure portal. By configuring conditional access this way, even if a user’s password is compromised, MFA will provide an additional security layer.

---

## 📘 References

* [Azure AD Conditional Access Overview](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/overview)
* [App-based Conditional Access Policies](https://learn.microsoft.com/en-us/azure/active-directory/conditional-access/app-based-mfa)
* [Secure MFA Implementation Guidance](https://learn.microsoft.com/en-us/azure/active-directory/authentication/tutorial-enable-azure-mfa)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)

