# Azure Fault Domain, Update Domain & Availability Set

## Table of Contents

1. [Introduction](#introduction)
2. [Fault Domain (FD)](#fault-domain-fd)
3. [Update Domain (UD)](#update-domain-ud)
4. [Availability Set](#availability-set)
5. [Rules & Maximum Limits](#rules--maximum-limits)
6. [Combined Diagram](#combined-diagram)
7. [Examples](#examples)
8. [Tips to Remember](#tips-to-remember)
9. [Key Takeaways](#key-takeaways)

---

## Introduction

In Azure, servers can face two types of disruptions:

1. **Hardware failure** → power/network issue
2. **Planned maintenance** → Azure platform updates

To protect your VMs from both, Azure provides:
✅ **Fault Domains (FD)** → protect from hardware failure
✅ **Update Domains (UD)** → protect from maintenance reboots
✅ **Availability Sets** → combine FD + UD for HA

---

## Fault Domain (FD)

**What is it?**
A Fault Domain is a group of VMs that share the **same power supply and network switch**.

**Purpose**
Protects your app from **physical hardware failure**.

**Analogy**
Like a row of buildings connected to **one electric line** — if the line fails, only that row is affected.

**Diagram**

```
Fault Domains
  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
  │  FD 1: VM1  │   │  FD 2: VM2  │   │  FD 3: VM3  │
  │  Power A    │   │  Power B    │   │  Power C    │
  │  Switch A   │   │  Switch B   │   │  Switch C   │
  └─────────────┘   └─────────────┘   └─────────────┘
```

**Maximum Count**

| Item    | Value               |
| ------- | ------------------- |
| Default | 2 Fault Domains     |
| Maximum | **3 Fault Domains** |

---

## Update Domain (UD)

**What is it?**
An Update Domain is a logical group of VMs that **Azure updates or restarts together** during maintenance.

**Purpose**
Prevents **all VMs from rebooting at the same time** during an update.

**Analogy**
Like **different work shifts** — one shift is updated while others continue working.

**Diagram**

```
Update Domains
  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
  │  UD 0: VM1  │   │  UD 1: VM2  │   │  UD 2: VM3  │
  │  Reboot 1st │   │  Reboot 2nd │   │  Reboot 3rd │
  └─────────────┘   └─────────────┘   └─────────────┘
```

**Maximum Count**

| Item    | Value                 |
| ------- | --------------------- |
| Default | 5 Update Domains      |
| Maximum | **20 Update Domains** |

---

## Availability Set

**What is it?**
An Availability Set is a **logical grouping of VMs** that spreads them across **multiple Fault Domains** AND **multiple Update Domains**.

**Purpose**
Keeps your VMs highly available (99.95% SLA) even during:
✅ hardware failure (FD)
✅ planned maintenance (UD)

**Analogy**
Like placing important servers in **different buildings (FD)** that also **have different maintenance schedules (UD)**.

**Diagram**

```
Availability Set
  ┌───────────────────────────────────┐
  │  FD1  |  FD2  |  FD3              │
  │  UD0: VM1     UD0: VM2           │
  │  UD1: VM3     UD1: VM4           │
  └───────────────────────────────────┘
```

---

## Rules & Maximum Limits

| Concept            | What it protects            | Default     | Maximum          |
| ------------------ | --------------------------- | ----------- | ---------------- |
| Fault Domain (FD)  | Hardware failure            | 2           | **3 FDs**        |
| Update Domain (UD) | Planned maintenance restart | 5           | **20 UDs**       |
| Availability Set   | Combines FD + UD for HA     | 2 FD + 5 UD | **3 FD + 20 UD** |

---

## Combined Diagram

```
                          Availability Set
           ┌───────────────────────────────────────┐
           │               Fault Domains           │
           │     FD1          FD2           FD3    │
           │   ┌─────┐     ┌─────┐      ┌─────┐    │
 Update     │UD0│VM1 │     │VM2 │      │VMx │ ...  │
 Domains    │   └─────┘     └─────┘      └─────┘    │
 (UDs)      │UD1│VM3 │     │VM4 │      │VMx │ ...  │
           └───────────────────────────────────────┘
```

---

## Examples

### Example 1 – 2 VMs in an Availability Set

| VM  | FD  | UD  |
| --- | --- | --- |
| VM1 | FD1 | UD0 |
| VM2 | FD2 | UD1 |

If FD1 fails → **VM2 still runs**
If UD0 is rebooted → **VM2 still runs**

### Example 2 – 4 VMs

| VM  | FD  | UD  |
| --- | --- | --- |
| VM1 | FD1 | UD0 |
| VM2 | FD2 | UD0 |
| VM3 | FD1 | UD1 |
| VM4 | FD2 | UD1 |

---

## Tips to Remember

✅ **FD = Hardware Failure Protection**
✅ **UD = Maintenance Reboot Protection**
✅ **Availability Set = FD + UD**
✅ FD MAX = **3**
✅ UD MAX = **20**
✅ SLA = **99.95%** for VMs in Availability Set

**Memory Trick:**

```
F = Failure → Fault Domain
U = Update → Update Domain
Availability Set = F + U protection
```

---

## Key Takeaways

| Feature          | Protects From               | Max      | Who Controls  |
| ---------------- | --------------------------- | -------- | ------------- |
| FD               | Power/Network failure       | 3        | Azure         |
| UD               | Maintenance reboot          | 20       | Azure         |
| Availability Set | Both failures + maintenance | (3 + 20) | You create it |

### 🔔 Stay Updated with My Latest Projects

If you enjoy:
- 🧠 AI agents and automation
- 🛠️ Practical tools and utilities
- 📘 Developer tutorials and guides
- 🚀 End-to-end project templates

👉 Then **[Follow me on GitHub](https://github.com/jssuthahar)** to get notified about new repos, ideas, and updates!

[![Follow Me](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)

## ⭐ Start & Follow Me
If you find this repository useful, don't forget to **Star** ⭐ the repo and **Follow** me for more updates!

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)
