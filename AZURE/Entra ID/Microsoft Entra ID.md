
# Microsoft Entra ID

## What is Microsoft Entra ID?

**Microsoft Entra ID** (formerly known as **Azure Active Directory / Azure AD**) is a cloud-based **identity and access management (IAM)** service provided by Microsoft. It helps organizations manage and secure access to apps, devices, and resources in both cloud and on-premises environments.

It is part of the **Microsoft Entra** product family and provides essential identity services such as:
- User authentication
- Single Sign-On (SSO)
- Conditional access
- Multi-Factor Authentication (MFA)
- Device management
- Integration with Microsoft 365, Azure, and thousands of third-party apps

---

## Why Do We Need Microsoft Entra ID?

We need Microsoft Entra ID for several key reasons:

### ✅ Centralized Identity Management
Manage all users, devices, and applications from a single cloud-based directory.

### ✅ Secure Access
Protect data and apps with conditional access, identity protection, and MFA.

### ✅ Seamless User Experience
Enable SSO so users can log in once and access multiple applications.

### ✅ Compliance and Monitoring
Audit logs and reports help meet compliance needs and monitor suspicious activities.

### ✅ Integration with Microsoft Services
It is required for using Microsoft 365, Azure, Teams, SharePoint Online, Power Platform, and other Microsoft cloud services.

---

## What is a Default Domain Name?

When you create a Microsoft Entra ID tenant, a **default domain name** is automatically created in the format:

```

<yourtenantname>.onmicrosoft.com

```

For example, if your tenant name is **jsdevbrains**, your default domain will be:
```

jsdevbrains.onmicrosoft.com

```

### Why Is It Needed?

- It's used internally by Microsoft services and identity management.
- Required to create users and assign licenses before you add a custom domain.
- It serves as a fallback even when you add custom domains like **jsdevbrains.com**.

---

## Real-Time Story: Microsoft Entra ID in Action

**Scenario: Onboarding a Tech Company to Microsoft 365 and Azure**

**Company:** JSDevBrains Pvt Ltd  
**Challenge:** Managing user access for employees, consultants, and interns working from different locations and time zones.

**Solution:**  
JSDevBrains registered for Microsoft 365 Business and was automatically provisioned with a Microsoft Entra ID tenant:

> `jsdevbrains.onmicrosoft.com`

They used Entra ID to:
- Create user accounts like **admin@jsdevbrains.onmicrosoft.com** and **priya@jsdevbrains.onmicrosoft.com**
- Later verified a custom domain: **jsdevbrains.com**
- Enabled SSO for their GitHub, Power BI, and Azure DevOps tools
- Applied conditional access policies to enforce MFA only when users log in from new devices or risky locations
- Used role-based access to give interns read-only access and admins full control
- Seamlessly connected internal .NET apps and APIs using OAuth tokens and Entra identity provider

**Result:**  
They securely managed over 100+ users without needing on-premises servers and reduced IT overhead by 50%. Identity attacks were minimized using MFA and sign-in risk analysis.

---

## Summary

| Feature | Description |
|--------|-------------|
| Service | Microsoft Entra ID |
| Purpose | Identity and Access Management |
| Key Use Cases | SSO, MFA, Conditional Access, App Integration |
| Default Domain | `<tenant>.onmicrosoft.com` |
| Real-Time Usage | Managing access for remote teams with security and ease |

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
