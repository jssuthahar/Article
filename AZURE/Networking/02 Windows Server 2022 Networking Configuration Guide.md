# 🖧 Windows Server 2022 Networking Configuration Guide

This guide provides step-by-step instructions to configure networking on Windows Server 2022 with the Desktop Experience. It covers setting a static IP address, configuring DNS, enabling Remote Desktop, and managing firewall settings.

---

## 🛠️ Prerequisites

- **Windows Server 2022** installed with Desktop Experience.
- Administrative privileges on the server.
- Network information:
  - Static IP address
  - Subnet mask
  - Default gateway
  - Preferred and alternate DNS servers

---

## 📶 Step 1: Set a Static IP Address

1. **Open Network Connections**:
   - Press `Windows + R`, type `ncpa.cpl`, and press `Enter`.

2. **Access Adapter Settings**:
   - Right-click on your network adapter (e.g., `Ethernet`) and select `Properties`.

3. **Configure IPv4 Settings**:
   - Select `Internet Protocol Version 4 (TCP/IPv4)` and click `Properties`.
   - Choose `Use the following IP address` and enter:
     - **IP address**: e.g., `192.168.1.10`
     - **Subnet mask**: e.g., `255.255.255.0`
     - **Default gateway**: e.g., `192.168.1.1`
   - Choose `Use the following DNS server addresses` and enter:
     - **Preferred DNS server**: e.g., `8.8.8.8`
     - **Alternate DNS server**: e.g., `8.8.4.4`
   - Click `OK` to apply settings.

---

## 🔒 Step 2: Configure Windows Firewall

1. **Open Windows Firewall**:
   - Press `Windows + R`, type `wf.msc`, and press `Enter`.

2. **Allow Remote Desktop (Optional)**:
   - In the left pane, click on `Inbound Rules`.
   - Scroll down and find `Remote Desktop - User Mode (TCP-In)`.
   - Right-click and select `Enable Rule`.

3. **Create Custom Inbound Rule (Optional)**:
   - In the right pane, click on `New Rule...`.
   - Select `Port` and click `Next`.
   - Choose `TCP` or `UDP`, specify the port number, and click `Next`.
   - Choose `Allow the connection` and click `Next`.
   - Select the profiles this rule applies to and click `Next`.
   - Name the rule and click `Finish`.

---

## 🖥️ Step 3: Enable Remote Desktop

1. **Open System Properties**:
   - Press `Windows + R`, type `SystemPropertiesRemote`, and press `Enter`.

2. **Allow Remote Connections**:
   - Under `Remote Desktop`, select `Allow remote connections to this computer`.
   - Click `Apply` and then `OK`.

3. **Verify Firewall Settings**:
   - Ensure that the firewall allows Remote Desktop connections (see Step 2).

---

## 🔁 Step 4: Test Network Configuration

1. **Verify IP Configuration**:
   - Open Command Prompt and run:
     ```
     ipconfig /all
     ```
   - Confirm that the static IP, subnet mask, gateway, and DNS servers are correctly set.

2. **Test Network Connectivity**:
   - Ping the default gateway:
     ```
     ping 192.168.1.1
     ```
   - Ping an external site:
     ```
     ping www.google.com
     ```

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

