# How to Create a Gmail Account and Set an App Password

## How to Set a Google App Password
An App Password is a special 16-digit key that lets certain apps or devices securely access your Google Account when regular sign-in methods are not sufficient. However, App Passwords only work if you have **2-Step Verification (2FA)** enabled on your Google Account.

Follow this guide to create a Gmail account, enable 2FA, generate an App Password, and configure it for White Label email settings.

---

## Table of Contents
1. [Enable Google 2-Step Verification](#enable-google-2-step-verification)
2. [Generate an App Password](#generate-an-app-password)
3. [Configure App Password in White Label Email Settings](#configure-app-password-in-white-label-email-settings)
4. [FAQs](#faqs)

---

## ⚠️ Important:
- App Passwords can only be used with accounts that have **2-Step Verification (2FA)** turned on.

---

## Step 1: Enable Google 2-Step Verification (2FA)

### Note:
If 2FA is already enabled, skip to [Step 2](#step-2-generate-an-app-password).

1. Log in to your [Google Account](https://myaccount.google.com/).
2. Click **Security** from the left sidebar.
3. Under **Signing in to Google**, find **2-Step Verification** and click **Turn on**.
4. Follow the on-screen instructions to complete the setup.

Once completed, 2FA will be enabled.

---

## Step 2: Generate an App Password

1. Log in to your [Google Account Security settings](https://myaccount.google.com/apppasswords).
2. Scroll down to **Signing in to Google**.
3. Click **App Passwords** (this option appears only after enabling 2FA).
4. Select the app and device for which you need the App Password.
5. Click **Generate**.
6. A **16-character password** will be displayed. Copy it securely and store it in a safe place.

---

## Step 3: Configure App Password in White Label Email Settings

1. Log in to **ContentStudio** (or your respective email provider).
2. Navigate to **Settings > White Label > Email Settings**.
3. Enter your SMTP details:
   - **SMTP Host**: e.g., `smtp.gmail.com`
   - **SMTP Port**: `587` (for TLS) or `465` (for SSL)
   - **SMTP Username**: Your email address
   - **SMTP Password**: Paste the **App Password** you generated
   - **Encryption**: Choose the appropriate encryption method (TLS/SSL)
4. Click **Test SMTP Connection** to verify the setup.
5. Once verified, click **Save**.

---

## FAQs

### 1. What if I don’t see the App Password option?
Ensure that 2-Step Verification (2FA) is enabled on your Google Account. If it is, try refreshing the page.

### 2. Can I use the same App Password for multiple apps?
No, it is recommended to generate a separate App Password for each app or device.

### 3. What happens if I forget my App Password?
You cannot retrieve an App Password once generated. However, you can delete the existing one and create a new App Password from your Google Security settings.

### 4. Can I disable 2-Step Verification after setting up the App Password?
No, App Passwords only work when **2-Step Verification is enabled**. If you disable 2FA, App Passwords will stop working.

---
 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
