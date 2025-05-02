## 🌐 Public vs. Private IP Addresses

### 🔓 Public IP Address

* **Definition**: A Public IP address is a unique identifier assigned to your network by your Internet Service Provider (ISP). It allows devices on your network to communicate with devices on the internet.

* **Characteristics**:

  * **Uniqueness**: Each public IP address is unique across the entire internet.
  * **Accessibility**: Devices with public IPs can be accessed directly over the internet.
  * **Assignment**: Assigned by ISPs.
  * **Example**: `203.0.113.5`

* **Use Cases**:

  * Hosting websites or servers accessible over the internet.
  * Remote access to devices within a network.([Avira][1])

### 🔒 Private IP Address

* **Definition**: A Private IP address is assigned to devices within a private network, allowing them to communicate with each other. These addresses are not routable on the internet.

* **Characteristics**:

  * **Uniqueness**: Unique within the local network but can be reused in different private networks.
  * **Accessibility**: Not directly accessible from the internet.
  * **Assignment**: Assigned by network devices like routers using DHCP.
  * **Common Ranges**:

    * `10.0.0.0` to `10.255.255.255`
    * `172.16.0.0` to `172.31.255.255`
    * `192.168.0.0` to `192.168.255.255`
  * **Example**: `192.168.1.10`([Lifewire][2])

* **Use Cases**:

  * Connecting devices within a home or office network.
  * Assigning IPs to devices like printers, computers, and smartphones within a local network.([Avast][3])

### 🖼️ Diagram: Public vs. Private IP

```
[Internet]
     |
[Public IP: 203.0.113.5]
     |
[Router]
     |
-----------------------------
|           |               |
[192.168.1.2] [192.168.1.3] [192.168.1.4]
(Computer)   (Printer)      (Smartphone)
```

---

## 📌 Static vs. 🔄 Dynamic IP Addresses

### 📌 Static IP Address

* **Definition**: A Static IP address is a fixed address manually assigned to a device, which does not change over time.([GeeksforGeeks][4])

* **Characteristics**:

  * **Consistency**: Remains the same unless manually changed.
  * **Assignment**: Manually configured by a network administrator or assigned by an ISP.
  * **Use Cases**:

    * Hosting servers (web, email, FTP).
    * Remote access to devices.
    * Network devices requiring consistent addressing.
  * **Example**: `192.168.1.100`

### 🔄 Dynamic IP Address

* **Definition**: A Dynamic IP address is automatically assigned to a device by a DHCP server and may change over time.

* **Characteristics**:

  * **Variability**: Can change each time the device connects to the network.
  * **Assignment**: Automatically assigned by DHCP servers.
  * **Use Cases**:

    * Home networks.
    * Devices that do not require a consistent IP address.
  * **Example**: `192.168.1.101` (assigned today), `192.168.1.102` (assigned tomorrow)

### 🖼️ Diagram: Static vs. Dynamic IP

```
[Router]
     |
-----------------------------
|           |               |
[Static IP: 192.168.1.100] [Dynamic IP: 192.168.1.101]
(Server)     (Laptop)
```

---

## 🧠 Real-World Examples

* **Public IP**: Your home router's IP address assigned by your ISP, allowing access to the internet.

* **Private IP**: Your laptop's IP address within your home network, such as `192.168.1.5`.

* **Static IP**: A web server hosting a website with a fixed IP address like `203.0.113.10`.

* **Dynamic IP**: A smartphone that receives a new IP address each time it connects to the Wi-Fi network.

---

## 📊 Summary Table

| Type    | Scope    | Assignment Method | Changes Over Time | Common Use Cases              |
| ------- | -------- | ----------------- | ----------------- | ----------------------------- |
| Public  | External | ISP               | No                | Internet access               |
| Private | Internal | Router/DHCP       | Yes               | Local network communication   |
| Static  | Both     | Manual            | No                | Servers, remote access        |
| Dynamic | Both     | Automatic (DHCP)  | Yes               | Home networks, mobile devices |

---

## 📝 Conclusion

Understanding the differences between public, private, static, and dynamic IP addresses is crucial for network configuration and troubleshooting. Each type serves a specific purpose, and choosing the right configuration depends on your networking needs.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

