# 📘 Register an Application in Azure AD B2C

This guide explains how to register a web or mobile application in **Azure Active Directory B2C (Azure AD B2C)** for authentication.

---

## ✅ Prerequisites

- An active [Azure subscription](https://azure.microsoft.com/)
- An **Azure AD B2C tenant** already created
- Access to the [Azure portal](https://portal.azure.com)

---

## 🧭 Step-by-Step Guide to Register an App in Azure B2C

---

### 🌀 Step 1: Switch to Your B2C Directory

1. Log in to the [Azure Portal](https://portal.azure.com)
2. Click on your account in the top-right corner
3. Click **"Switch Directory"**
4. Choose your **B2C tenant** (e.g., `yourtenant.onmicrosoft.com`)

---

### 📝 Step 2: Open Azure AD B2C

1. In the Azure portal search bar, search for **Azure AD B2C**
2. Click on **Azure AD B2C** from the search results

---

### 🧾 Step 3: Register a New Application

1. In the **Azure AD B2C** blade, select **App registrations**
2. Click **+ New registration**

#### Fill in the form:

- **Name**: `MyWebApp` (or any friendly name)
- **Supported account types**:  
  ✅ Choose **"Accounts in this organizational directory only (Single tenant)"**

- **Redirect URI (optional)**:
  - Platform: **Web**
  - URI: `https://localhost:5001/signin-oidc`  
    (Replace with your app’s actual login callback URI in production)

3. Click **Register**

---

### 🧾 Step 4: Record App Details

After registration, you'll be redirected to the **App Overview** page.

Copy and save the following:

- **Application (client) ID**
- **Directory (tenant) ID**

You’ll use these in your app configuration.

---

### 🔐 Step 5: Add Redirect URIs (if skipped)

1. Go to the app’s **Authentication** section
2. Under **Redirect URIs**, click **+ Add a platform**
3. Choose **Web**
4. Add URI:  
   Example: `https://localhost:5001/signin-oidc`
5. Enable **ID tokens (used for implicit and hybrid flows)**

Click **Save**

---

### 🔐 Step 6: Configure API Permissions

1. Go to **API Permissions** > Click **+ Add a permission**
2. Choose **Microsoft Graph**
3. Choose **Delegated permissions**
4. Add permissions like:
   - `openid`
   - `email`
   - `offline_access`
   - `profile`

Click **Add permissions**

Click **Grant admin consent** if required.

---

### 🔑 Step 7: Create a Client Secret (Optional but Required for Some Scenarios)

1. Go to **Certificates & Secrets**
2. Under **Client secrets**, click **+ New client secret**
3. Set a description (e.g., `MySecret`) and expiry period
4. Click **Add**
5. Copy the **Value** immediately — you won’t be able to see it again

---

## 🔁 Optional: Register as a Single-Page or Mobile App

For mobile/SPAs, choose:
- Platform: **Single-page application**
- URI: e.g., `http://localhost:4200` (for Angular) or your mobile redirect scheme

Enable:  
- **Access tokens**
- **ID tokens**

---

## 🏁 You’re Done!

You’ve successfully registered an application in Azure AD B2C.

Next Steps:
- Create User Flows (Sign In/Sign Up)
- Configure the app with the values:
  - Tenant name
  - Client ID
  - Redirect URI
  - Policies (user flows)

---

## 📚 Resources

- [Azure AD B2C Documentation](https://learn.microsoft.com/en-us/azure/active-directory-b2c/)
- [Register Web App in B2C](https://learn.microsoft.com/en-us/azure/active-directory-b2c/tutorial-register-applications?tabs=app-reg-ga)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

