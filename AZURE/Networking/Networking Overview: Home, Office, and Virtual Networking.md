## 🧩 Why Do We Need a Virtual Network?

**Concept**: A Virtual Network (VNet) is a logical isolation of the Azure cloud dedicated to your subscription. It enables Azure resources like Virtual Machines (VMs) to securely communicate with each other, the internet, and on-premises networks.

**Diagram**:

```
+---------------------------+
|        Azure VNet         |
|  +---------+  +---------+ |
|  |  VM1    |  |  VM2    | |
|  +---------+  +---------+ |
+---------------------------+
```

*In this diagram, VM1 and VM2 are part of the same VNet, allowing them to communicate securely.*

---

## 🌍 Public IP Address

**Concept**: A Public IP address allows Azure resources to communicate with the internet. It's assigned to resources that need to be accessible from outside the Azure network.

**Diagram**:

```
Internet
   |
[Public IP]
   |
+---------+
|  Azure  |
|  VM     |
+---------+
```

*Here, the Azure VM has a Public IP, enabling internet communication.*

---

## 🔒 Private IP Address

**Concept**: A Private IP address is used for communication between Azure resources within the same VNet or connected VNets. These addresses are not routable from the internet.

**Diagram**:

```
+---------------------------+
|        Azure VNet         |
|  +---------+  +---------+ |
|  |  VM1    |<->|  VM2   | |
|  +---------+  +---------+ |
+---------------------------+
```

*VM1 and VM2 communicate using Private IPs within the VNet.*

---

## 🗂️ Subnetting

**Concept**: Subnetting divides a VNet into smaller segments, allowing for better organization and security.

**Diagram**:

```
+---------------------------------------+
|               Azure VNet              |
|  +-------------+  +----------------+  |
|  | Subnet A    |  |   Subnet B     |  |
|  | (Web Tier)  |  | (Database Tier)|  |
|  +-------------+  +----------------+  |
+---------------------------------------+
```

*Subnet A hosts web servers, while Subnet B hosts database servers, isolating them for security.*

---

## 🔗 Virtual Network Peering

**Concept**: VNet Peering connects two VNets, allowing resources in different VNets to communicate as if they were in the same network.

**Diagram**:

```
+----------------+       +----------------+
|    VNet A      |<----->|    VNet B      |
|  (10.0.0.0/16) |       |  (10.1.0.0/16) |
+----------------+       +----------------+
```

*Resources in VNet A can communicate with resources in VNet B through peering.*

---

## 🔐 Network Security Group (NSG)

**Concept**: NSGs contain security rules that allow or deny inbound and outbound network traffic to Azure resources.

**Diagram**:

```
+---------------------------+
|        Azure VNet         |
|  +---------+              |
|  |  VM     |              |
|  +----+----+              |
|       |                   |
|    [NSG Rules]            |
+---------------------------+
```

*NSG rules control the traffic flow to and from the VM.*

---

## 🌉 VPN Gateway

**Concept**: A VPN Gateway connects your on-premises network to Azure through a secure VPN tunnel.

**Diagram**:

```
On-Premises Network
        |
     [VPN]
        |
+---------------------------+
|        Azure VNet         |
|  +---------+  +---------+ |
|  |  VM1    |  |  VM2    | |
|  +---------+  +---------+ |
+---------------------------+
```

*The on-premises network connects to Azure VNet via a VPN Gateway, enabling secure communication.*

---

## ✅ Summary Table

| Concept         | Description                                     | Real-Time Use Case                          |
| --------------- | ----------------------------------------------- | ------------------------------------------- |
| Virtual Network | Isolated network in Azure                       | Hosting multiple Azure resources            |
| Public IP       | Internet-facing IP address                      | Web servers accessible from the internet    |
| Private IP      | Internal IP address within Azure                | Database servers communicating internally   |
| Subnetting      | Dividing VNet into segments                     | Separating web and database tiers           |
| VNet Peering    | Connecting VNets for resource communication     | Linking development and production networks |
| NSG             | Security rules for network traffic              | Restricting access to sensitive resources   |
| VPN Gateway     | Secure connection between on-premises and Azure | Extending on-premises network to Azure      |

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

