# Self-Service Options in Azure AD (Microsoft Entra ID)

Microsoft Entra ID (formerly Azure Active Directory) provides **self-service capabilities** that empower users to manage their own identities and access needs without always requiring IT intervention. This improves user productivity and reduces IT helpdesk load.

---

## 🚀 What Are Self-Service Options?

Self-service in Azure AD includes features that let users:

- **Reset their own passwords** without contacting support.
- **Manage their group memberships** (join, leave, or request access).
- **Request access to applications or resources**.
- **Manage security info** (update phone numbers, email addresses for MFA).
- **Register for Multi-Factor Authentication (MFA)** and configure authentication methods.

---

## ✅ Benefits of Self-Service Features

- **Reduces IT workload** for routine password resets and access requests.
- **Improves security** by enabling faster recovery and accurate security info.
- **Enhances user experience** with instant access and fewer delays.
- **Supports compliance** by tracking and auditing user-driven changes.
- **Enables scalability** for large organizations with many users.

---

## 🔧 Key Self-Service Features

| Feature                        | Description                                  |
|-------------------------------|----------------------------------------------|
| **Self-Service Password Reset (SSPR)** | Users can reset their passwords securely. |
| **Self-Service Group Management**       | Users can create, manage, or join groups. |
| **My Access Portal**                    | Users request access to apps and resources.|
| **Authentication Method Management**   | Users update MFA methods and security info.|

---

## 🛠️ Step-by-Step Guide to Enable Self-Service Password Reset (SSPR)

### Step 1: Sign in to Azure Portal

- Go to [https://portal.azure.com](https://portal.azure.com)
- Sign in as a **Global Administrator** or **Privileged Role Administrator**.

---

### Step 2: Navigate to Azure AD Password Reset Settings

- Search for **Azure Active Directory** in the portal.
- Select **Password reset** under the **Manage** section.

---

### Step 3: Configure SSPR Properties

- Under **Properties**, set **Self service password reset enabled** to:
  - **Selected** (to enable for specific groups), or
  - **All** (to enable for all users).
- Click **Save**.

---

### Step 4: Configure Authentication Methods

- Click on **Authentication methods**.
- Select which methods users can use to reset passwords (e.g., Email, Mobile app notification, Security questions).
- Set the number of methods required to reset password (recommended: 2).
- Click **Save**.

---

### Step 5: Set Registration Requirements

- Click on **Registration**.
- Enable **Require users to register when signing in**.
- Set number of days to remind users to update their security info.
- Click **Save**.

---

### Step 6: Test the SSPR Experience

- As a test user, go to [https://passwordreset.microsoftonline.com/](https://passwordreset.microsoftonline.com/)
- Follow the prompts to reset your password using the configured authentication methods.

---

## 🛠️ Step-by-Step: Enable Self-Service Group Management

### Step 1: Sign in to Azure Portal

- Navigate to **Azure Active Directory** > **Groups** > **Settings**.

---

### Step 2: Enable Group Self-Management

- Enable **Users can create security groups**.
- Enable **Users can manage their own groups** (if desired).
- Configure whether users can join or leave groups on their own.

---

### Step 3: Configure Group Settings

- For specific groups, enable **Self-service group membership**.
- Assign owners and define approval workflows if needed.

---

## 🛠️ Step-by-Step: Enable My Access Portal for Access Requests

### Step 1: Navigate to **My Access** in Azure Portal

- Go to **Azure Active Directory** > **Enterprise Applications** > **My Access**.

---

### Step 2: Enable Access Requests

- Configure **My Access** to allow users to request access to applications or resources.
- Define approval workflows (automatic or manual).

---

## 💡 Best Practices

- Communicate to users about self-service capabilities and how to use them.
- Combine self-service with **Conditional Access** and **MFA** for security.
- Regularly review logs and audit user actions.
- Pilot self-service features with a small group before full rollout.

---

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
