# 🔐 User Authentication Methods in Microsoft Entra ID

Microsoft Entra ID (formerly Azure Active Directory) supports multiple **user authentication methods** to securely verify identities and control access to applications, services, and data.

---

## 🎯 Why Do Authentication Methods Matter?

Authentication methods define **how users prove their identity** when accessing Microsoft 365, Azure, or any integrated application.

They enable:
- Secure sign-ins
- Compliance with IT and industry standards
- Conditional Access enforcement
- User convenience without compromising security

---

## 📘 Common Authentication Methods

| Method | Description | Suitable For |
|--------|-------------|--------------|
| **Password** | Basic credential (username + password) | All users (not secure alone) |
| **Multi-Factor Authentication (MFA)** | Combines password + 2nd factor | Highly secure, all users |
| **Microsoft Authenticator App** | Mobile app generates push approvals or TOTP codes | Recommended for most users |
| **SMS/Call Verification** | Sends code via SMS or phone call | Backup method |
| **FIDO2 Security Keys** | Hardware-based, passwordless sign-in | High-security roles |
| **Windows Hello for Business** | Biometric or PIN on Windows 10/11 devices | Domain-joined Windows users |
| **Temporary Access Pass (TAP)** | One-time code for account recovery or new user onboarding | Admins and support use |
| **Email OTP (preview)** | One-time passcode sent to email | Guest users |

---

## 🛠️ Step-by-Step: Configure Authentication Methods

### ✅ Step 1: Sign in to Entra Admin Center

Go to [https://entra.microsoft.com](https://entra.microsoft.com) and sign in as a **Global Administrator**.

---

### ✅ Step 2: Navigate to Authentication Methods Policy

1. In the left menu, go to **Protection** > **Authentication methods**
2. Click **Policies**

---

### ✅ Step 3: Enable or Configure a Method

Example: Enable **Microsoft Authenticator**

1. Click on **Microsoft Authenticator**
2. Enable for:
   - All users
   - Specific users or groups (e.g., `All Employees`, `Dev-Team`)
3. Define settings:
   - Authentication mode: Push or TOTP
   - Require number matching (for phishing-resistant MFA)

Repeat this for other methods like **SMS**, **FIDO2**, or **TAP**.

---

## 💼 Real-World Example: JSDevBrains Pvt Ltd

**Domain**: `msdevbuild.com`  
**Use Case**: Secure developer accounts and external contractors accessing sensitive project data.

### Configuration:
- Developers: Enabled **Microsoft Authenticator with number matching**
- HR/Admin staff: Allowed **SMS + Authenticator** fallback
- Guests: Enabled **Email OTP**
- VIP Users: Given **FIDO2 Security Keys** for passwordless login
- Support team: Enabled **Temporary Access Pass (TAP)** for onboarding new employees

### Outcome:
- Reduced helpdesk tickets for password resets
- 2 blocked attacks through password spray attempts
- Passed internal IT compliance review

---

## 🔐 Best Practices

- Enforce MFA for **all users**.
- Disable legacy authentication protocols (POP, IMAP, SMTP).
- Use **Conditional Access** to require stronger authentication for risky sign-ins.
- Limit authentication method options to those approved by security policy.
- Encourage **passwordless** sign-in wherever possible.

---

## 📊 Comparison of Methods

| Method | Security | Usability | Offline Support | Recommended |
|--------|----------|-----------|------------------|--------------|
| Password | ❌ | ✅ | ✅ | ❌ |
| MFA (App) | ✅✅✅ | ✅ | ❌ | ✅✅✅ |
| SMS | ✅ | ✅✅ | ✅ | ✅ (backup) |
| FIDO2 Key | ✅✅✅ | ✅ | ✅ | ✅✅✅ |
| Windows Hello | ✅✅ | ✅✅ | ✅ | ✅ |
| Email OTP | ✅ | ✅✅ | ✅ | ✅ (guests) |
| TAP | ✅✅ | ✅✅ | ❌ | ✅ (onboarding) |

---

## 🔗 Useful Links

- [Microsoft Learn: Authentication methods policy](https://learn.microsoft.com/en-us/entra/identity/authentication/howto-authentication-methods-policy)
- [Passwordless Authentication](https://learn.microsoft.com/en-us/azure/active-directory/authentication/concept-authentication-passwordless)
- [FIDO2 Security Keys](https://learn.microsoft.com/en-us/azure/active-directory/authentication/howto-authentication-passwordless-security-key)

---

> 🔔 **Tip:** Use **sign-in logs** to monitor authentication success/failures and identify users with weak methods.
```

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
