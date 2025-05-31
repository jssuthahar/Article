# Understanding Cloud Identity, Directory Sync Identity, and Guest Users in Microsoft Entra ID

Microsoft Entra ID (formerly Azure Active Directory) supports different types of identities to manage access and collaboration in cloud and hybrid environments.

This guide explains three key identity types, their purposes, and how they fit into real-world enterprise scenarios.

---

## 1️⃣ Cloud Identity (Cloud-Only Users)

### What is Cloud Identity?

- Users created **directly in Microsoft Entra ID** without connection to an on-premises directory.
- Credentials and authentication happen entirely in the cloud.
- User accounts, passwords, groups, and policies managed via Azure portal or Microsoft 365 admin center.
- Commonly used by cloud-first or cloud-only organizations.

### Benefits

- Easy and fast to set up.
- No on-premises infrastructure or synchronization needed.
- Full cloud-based identity lifecycle management.

### Limitations

- No automatic synchronization with on-premises Active Directory.
- Separate password policies and authentication flow.
- Not ideal if organization already has on-premises AD users to synchronize.

---

## 2️⃣ Directory Synchronization Identity (Synced Users)

### What is Directory Synchronization?

- Connects on-premises Active Directory (AD) with Microsoft Entra ID using tools like **Azure AD Connect**.
- User accounts and passwords are synced from on-premises AD to the cloud.
- Enables **hybrid identity** — users use same credentials on-premises and cloud.
- Password write-back and seamless Single Sign-On (SSO) can be enabled.

### Benefits

- Centralized identity management with on-premises AD.
- Users have one set of credentials for on-premises and cloud apps.
- Supports hybrid cloud strategies.
- Enables advanced scenarios like Conditional Access, MFA with synced users.

### Key Components

- **Azure AD Connect:** Tool to sync identities from AD to Entra ID.
- **Password Hash Sync / Pass-through Authentication:** Methods for authenticating synced users.

### Limitations

- Requires on-premises infrastructure.
- More complex to set up and maintain.
- Sync latency may delay user updates.

---

## 3️⃣ Guest Users (B2B Collaboration)

### What is a Guest User?

- External users invited from **outside your organization** to collaborate using Microsoft Teams, SharePoint, or other Azure AD-integrated apps.
- Represented in your tenant as users but with restricted permissions.
- Identified by an email address from another organization (e.g., `partner@partnercompany.com`).

### Benefits

- Secure collaboration with partners, vendors, contractors.
- External users authenticate with their own credentials.
- Control over what resources guests can access.
- Supports external sharing scenarios without creating full accounts.

### How Guests are Managed

- Invitations sent via Azure AD B2B portal.
- Access policies, Conditional Access, and terms of use can be applied.
- Guest users show up under **Users** in Entra portal with user type `Guest`.

---

## 📊 Summary Table

| Identity Type         | Creation Location        | Authentication             | Use Case                                   | Management                |
|----------------------|-------------------------|----------------------------|--------------------------------------------|---------------------------|
| **Cloud Identity**    | Created in Entra ID     | Azure cloud                | Cloud-only orgs, contractors                | Azure portal              |
| **Directory Sync**    | Created in on-prem AD   | Synced via Azure AD Connect| Hybrid orgs with on-premises AD             | AD + Azure AD Connect     |
| **Guest User**        | Invited from external org| Authenticated externally   | External collaboration (partners, vendors)| Azure AD B2B Collaboration|

---

## 🧑‍💼 Real-Time Use Case: JSDevBrains Pvt Ltd (`msdevbuild.com`)

### Scenario

JSDevBrains is a software development company with:

- On-premises Active Directory for internal employee management.
- Cloud services like Microsoft 365, Azure DevOps, and Teams.
- Multiple external contractors and partners.

### Identity Setup

| Identity Type      | Usage at JSDevBrains |
|--------------------|---------------------|
| **Directory Sync** | All full-time employees synced from on-premises AD using Azure AD Connect. Employees use single credentials for office systems and cloud apps. |
| **Cloud Identity** | Temporary contractors hired for short projects created as cloud-only users, no on-premises account. Easier onboarding and removal. |
| **Guest Users**    | External partners and clients invited as guests to collaborate on Teams projects and SharePoint document libraries securely without full accounts. |

### Benefits Realized

- Seamless user experience with single sign-on for employees.
- Efficient onboarding/offboarding for contractors without impacting AD.
- Controlled, secure external collaboration with guest users.
- Centralized management from Microsoft Entra Admin Center.

---

## 🔧 Additional Considerations

- Use **Conditional Access** to enforce MFA and device compliance for all identity types.
- Regularly review guest access and remove inactive guests.
- Monitor sync health and address issues with Azure AD Connect.
- Use Azure AD Identity Protection to detect risky sign-ins across all users.

---

## 🔗 Useful Links

- [What is cloud identity?](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/active-directory-whatis)
- [Azure AD Connect overview](https://learn.microsoft.com/en-us/azure/active-directory/hybrid/whatis-hybrid-identity)
- [Azure AD B2B collaboration](https://learn.microsoft.com/en-us/azure/active-directory/external-identities/what-is-b2b)
- [Manage guest access in Microsoft Teams](https://learn.microsoft.com/en-us/microsoftteams/manage-guests)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
