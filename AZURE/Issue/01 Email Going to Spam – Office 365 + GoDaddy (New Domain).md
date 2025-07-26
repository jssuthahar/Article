# 📧 Email Going to Spam – Office 365 + GoDaddy (New Domain)

## ❗ Problem Statement

Emails sent from a newly created custom domain (hosted on GoDaddy, using Office 365 for email) are landing in the **recipient's spam/junk folder**. Even though the emails are sent from a verified custom domain (not the `onmicrosoft.com` default domain), services like Gmail and Outlook mark them as spam.

---

## 🔍 Root Causes

1. **New Domain – Low Reputation**
   Email providers treat new domains cautiously. A newly created domain has no established trust or email reputation.

2. **Missing Email Authentication**
   Without properly configured SPF, DKIM, and DMARC records, your emails look suspicious and are more likely to be flagged as spam.

3. **Use of `onmicrosoft.com` Default Domain**
   Office 365 includes a default domain (`yourtenant.onmicrosoft.com`), which is less trusted by spam filters.

4. **Shared IP Blacklisting**
   Office 365 shares email-sending IPs across tenants. If other users on your IP are blacklisted, it may impact your deliverability.

5. **Spam-Like Content**
   Poor email formatting, spammy subject lines, or missing plain-text versions can trigger spam filters.

---

## ✅ Step-by-Step Solutions

### 1. ✅ Set Up SPF Record in GoDaddy

In your GoDaddy DNS:

```
Type: TXT  
Host: @  
Value: v=spf1 include:spf.protection.outlook.com -all  
TTL: 1 hour
```

### 2. ✅ Enable DKIM in Microsoft 365 for Your Domain

#### 🧭 Steps:

1. Go to [https://security.microsoft.com/dkimv2](https://security.microsoft.com/dkimv2)
2. Select your domain
3. If prompted, create DKIM keys — you’ll be given two CNAME records
4. Add these two records in GoDaddy DNS:

| Host                   | Type    | Points To                                                        |
| ---------------------- | ------- | ---------------------------------------------------------------- |
| `selector1._domainkey` | `CNAME` | `selector1-yourdomain-com._domainkey.yourtenant.onmicrosoft.com` |
| `selector2._domainkey` | `CNAME` | `selector2-yourdomain-com._domainkey.yourtenant.onmicrosoft.com` |

> ❗ In GoDaddy, do NOT enter the full domain in the "Host" field. Just use `selector1._domainkey` — GoDaddy appends `.yourdomain.com`.

5. After DNS changes, go back to the portal and click **Enable**.

✅ Now your emails will show `d=yourdomain.com` in DKIM headers.

### 3. ✅ Add DMARC Record

In GoDaddy DNS:

```
Type: TXT  
Host: _dmarc  
Value: v=DMARC1; p=none; rua=mailto:you@yourdomain.com  
TTL: 1 hour
```

> If an old record exists like `rua=mailto:dmarc_rua@onsecureserver.net`, replace it. That may be GoDaddy default but not useful for you.

---

## 🔄 Domain Warm-up Strategy

* Start with 5–10 emails/day to known contacts
* Ensure recipients reply or mark as “Not Spam”
* Gradually increase volume over 2–4 weeks
* Avoid sending bulk or cold emails early

---

## 🛡️ Additional Best Practices

| Best Practice                    | Description                                                                                                       |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ✅ Use Custom Domain Only         | Never send from `@onmicrosoft.com`                                                                                |
| ✅ Set Custom Domain as Default   | In Microsoft 365 Admin → Settings → Domains                                                                       |
| ✅ Test Emails                    | Use [https://www.mail-tester.com](https://www.mail-tester.com)                                                    |
| ✅ Register with Postmaster Tools | [Google](https://postmaster.google.com), [Microsoft SNDS](https://sendersupport.olc.protection.outlook.com/snds/) |
| ✅ Avoid Spammy Content           | Use clear, professional subject lines and plain-text fallback                                                     |
| ✅ Include Unsubscribe/Footer     | Especially for marketing or bulk emails                                                                           |

---

## 🧪 Tools for Testing & Monitoring

* 🔧 **SPF/DKIM/DMARC Check**: [https://mxtoolbox.com](https://mxtoolbox.com)
* 📊 **Email Test**: [https://www.mail-tester.com](https://www.mail-tester.com)
* 📮 **Google Postmaster Tools**: [https://postmaster.google.com](https://postmaster.google.com)
* 📬 **Microsoft SNDS**: [https://sendersupport.olc.protection.outlook.com/snds/](https://sendersupport.olc.protection.outlook.com/snds/)

---

## 📋 Final Checklist

| Item                                 | Status |
| ------------------------------------ | ------ |
| SPF record in GoDaddy                | ✅      |
| DKIM enabled and CNAMEs added        | ✅      |
| DMARC TXT record added               | ✅      |
| Custom domain set as default         | ✅      |
| `onmicrosoft.com` not used           | ✅      |
| Domain warming started               | ✅      |
| Content reviewed for spam triggers   | ✅      |
| Registered in Google/Microsoft tools | ✅      |

---

## 📩 Example: Clean Email Structure

```
From: John Doe <john@yourdomain.com>
Subject: Project Update – July 2025

Hi Team,

Here’s the latest update on our project.

- Feature A is complete
- Feature B is in QA

Please feel free to reply if you have any questions.

Best regards,  
John Doe  
Your Company  
123 Business Rd, Malaysia  
```

---

## 🔍 Why “onmicrosoft.com” Still Appears in Headers and How to Fix It

### 🤔 Problem:

Even if you send from your domain (e.g., `yourdomain.com`), some recipients (like Gmail) see:

> “This message was marked as spam because previous messages from yourtenant.onmicrosoft.com were marked as spam.”

### 🧨 Cause:

Microsoft may use `onmicrosoft.com` as:

* Return-Path or envelope sender
* DKIM signer if not customized

### 🛠️ Fix:

1. Set custom domain as default in M365
2. Enable DKIM for custom domain (see earlier section)
3. Check SPF is set to `include:spf.protection.outlook.com`
4. Avoid using Power Automate / SMTP that defaults to `onmicrosoft.com`
5. Register domain in [Microsoft SNDS](https://sendersupport.olc.protection.outlook.com/snds/) and [Google Postmaster](https://postmaster.google.com)
6. Ask recipients to click “Not Spam”

---

## 🔗 Domain Verification Links

| Purpose               | Link                                                                                                       |
| --------------------- | ---------------------------------------------------------------------------------------------------------- |
| Add TXT in GoDaddy    | [https://www.godaddy.com/help/add-a-txt-record-19232](https://www.godaddy.com/help/add-a-txt-record-19232) |
| Postmark DKIM & DMARC | [https://postmarkapp.com/dmarc](https://postmarkapp.com/dmarc)                                             |
| Dmarcian Setup        | [https://dmarcian.com/how-to-create-a-dmarc-record/](https://dmarcian.com/how-to-create-a-dmarc-record/)   |
| EasyDMARC             | [https://easydmarc.com](https://easydmarc.com)                                                             |

---

## ❓ Need Help?

If you're unsure about your DNS or email setup, use the tools above or contact your Microsoft 365/GoDaddy support to verify the records.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

