# Setup IIS Web Server on Azure VM

This guide explains how to create an **IIS Web Server** on an **Azure Virtual Machine (VM)** running Windows Server.

---

## Prerequisites

- An **Azure subscription**
- A **Windows Server VM** (2016, 2019, or 2022) already created
- **RDP access** to the VM
- Basic knowledge of Windows Server and IIS

---

## Steps to Install IIS

### 1. Connect to VM
- Open **Remote Desktop Connection (RDP)** or **Microsoft Remote Desktop**.
- Use **VM Public IP**, username, and password.

---

### 2. Open Server Manager
- Click **Start → Server Manager**.
- Click **Manage → Add Roles and Features**.

---

### 3. Add Web Server (IIS) Role
1. In **Add Roles and Features Wizard**, click **Next** until you reach **Server Roles**.
2. Check **Web Server (IIS)**.
3. Click **Add Features** when prompted.
4. Click **Next → Install**.
5. Wait for installation to complete.

---

### 4. Verify IIS Installation
- Open **Browser on VM**.
- Type: `http://localhost`
- You should see the **IIS welcome page**.

---

### 5. Configure Firewall / NSG
- Make sure **port 80 (HTTP)** is open:
  - **Windows Firewall**: Open **Inbound Rule** for TCP 80
  - **Azure NSG**: Add inbound rule for **port 80** if connecting externally

---

### 6. Deploy Web Application (Optional)
- Default web folder: `C:\inetpub\wwwroot`
- Place your `index.html` or `default.aspx` files here
- Access via `http://<VM_PUBLIC_IP>`

---

## Useful Commands (PowerShell)

```powershell
# Install IIS via PowerShell
Install-WindowsFeature -name Web-Server -IncludeManagementTools

# Check IIS status
Get-Service W3SVC

# Start IIS service if stopped
Start-Service W3SVC
````

---

## References

* [Microsoft Docs: Install IIS](https://docs.microsoft.com/en-us/iis/install/installing-iis-7/installing-iis-on-windows-server-2019)
* [Azure VM Networking](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-networks-nsg)

---

## Notes

* Always open **port 80/443** in both NSG and Windows Firewall for external access.
* For testing, you can use `curl http://<VM_PUBLIC_IP>` from your local machine.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
