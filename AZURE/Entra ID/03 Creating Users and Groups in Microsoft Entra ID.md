# Creating Users and Groups in Microsoft Entra ID

Microsoft Entra ID (formerly Azure Active Directory) allows administrators to manage **users** and **groups** efficiently. Users represent individuals in your organization, and groups help you assign roles, permissions, or application access to multiple users at once.

---

## 🧑‍💼 Why Create Users and Groups?

| Entity  | Purpose |
|--------|---------|
| **User**  | Represents a person or service that needs access to apps and resources |
| **Group** | A collection of users managed as a single unit. Useful for permission management, license assignment, etc. |

---

## 🔐 Prerequisites

- You must be a **Global Administrator** or **User Administrator** in Microsoft Entra ID.
- You need access to the [Microsoft Entra Admin Center](https://entra.microsoft.com).

---

## 👤 Step-by-Step: Create a New User

### ✅ Step 1: Sign In
Go to [https://entra.microsoft.com](https://entra.microsoft.com) and log in with admin credentials.

### ✅ Step 2: Navigate to Users
- Click **Identity** > **Users** > **All users**
- Click **+ New user**

### ✅ Step 3: Add User Details

Fill out the form:
- **User name**: `john@msdevbuild.com`
- **Name**: John Doe
- **Password**: Auto-generated (you can customize later)
- **Groups**: Optional (can be assigned now or later)
- **Roles**: Optional (e.g., Global Reader, User Administrator)

Click **Create**.

### 🧪 Result:
The new user will receive login credentials and can now sign in to Microsoft 365 and other connected apps.

---

## 👥 Step-by-Step: Create a Group

### ✅ Step 1: Navigate to Groups
- Go to **Identity** > **Groups** > **All groups**
- Click **+ New group**

### ✅ Step 2: Choose Group Type
Select:
- **Group type**: Security (used for access control) or Microsoft 365 (used for Teams, Outlook groups, etc.)
- **Group name**: e.g., `Developers`, `HR-Team`
- **Group description**: e.g., Developers working on internal projects
- **Membership type**:
  - **Assigned**: You manually add members
  - **Dynamic User**: Members auto-added based on rules (e.g., department = "IT")
  - **Dynamic Device**: Used for device-based rules

Click **Create**.

---

## ➕ Add Users to a Group

1. Go to the **group** you just created.
2. Click **Members** > **+ Add members**
3. Search and select users to add.
4. Click **Select**.

---

## 🧪 Real-Time Use Case: MSDevBuild

**Company:** MSDEVBUILD Pvt Ltd  
**Custom Domain:** `msdevbuild.com`

### Scenario:
JSDevBrains has multiple departments (Dev, QA, HR) and wants to manage permissions for Microsoft 365 services and internal apps.

### Steps Taken:
- Created users like:
  - `anita@msdevbuild.com` (HR)
  - `ravi@msdevbuild.com` (Developer)
- Created groups:
  - `HR-Team`
  - `Dev-Team`
- Assigned users to relevant groups
- Configured SharePoint and Teams access per group
- Applied conditional access policies on groups (e.g., MFA required for `Dev-Team`)

### Outcome:
Efficient permission management, improved collaboration, and reduced admin overhead.

---

## 🧠 Best Practices

- Use **groups** for role-based access control instead of assigning permissions to individuals.
- Enable **self-service group membership** for non-sensitive groups.
- Use **naming conventions** like `Dept-Role` (e.g., `IT-Admins`, `Sales-Users`).
- Regularly review group membership for security.

---

## 🔗 Useful Links

- [Add Users in Microsoft Entra](https://learn.microsoft.com/en-us/entra/identity/users-groups-roles/users-add)
- [Create Groups in Microsoft Entra](https://learn.microsoft.com/en-us/entra/identity/users-groups-roles/groups-create-portal)
- [Dynamic Group Rules](https://learn.microsoft.com/en-us/entra/identity/users/groups-dynamic-membership)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
