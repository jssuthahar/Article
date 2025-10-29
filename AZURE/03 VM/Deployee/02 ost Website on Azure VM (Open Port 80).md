# Host Website on Azure VM (Open Port 80)

This guide shows how to **host a website** on an Azure Windows VM with IIS and make it accessible over the internet by opening **port 80**.

---

## Prerequisites

- Azure subscription
- Windows Server VM running (2016 / 2019 / 2022)
- RDP access to VM
- Website files ready (HTML, ASPX, etc.)

---

## Step 1: Verify VM Status

1. Log in to [Azure Portal](https://portal.azure.com)
2. Navigate to **Virtual Machines → Your VM**
3. Ensure **Status = Running**

---

## Step 2: Get Public IP

1. On VM **Overview**, note the **Public IP address**
2. This IP will be used to access your website externally  
   Example: `20.188.54.xx`

---

## Step 3: Open Port 80 (HTTP) in Azure Portal

1. Go to **Networking** in your VM menu
2. Under **Inbound port rules**, click **+ Add inbound port rule**
3. Fill the fields as below:

| Field            | Value                      |
|------------------|----------------------------|
| Source           | Any (or specific IP range) |
| Source port      | *                          |
| Destination      | Any                        |
| Destination port | 80                         |
| Protocol         | TCP                        |
| Action           | Allow                      |
| Priority         | 1000                       |
| Name             | Allow-HTTP-80              |

4. Click **Add**

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
