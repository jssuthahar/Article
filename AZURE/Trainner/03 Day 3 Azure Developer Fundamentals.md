
# Day 3 – Azure Developer Fundamentals

**Topics Covered:**

* Programming Languages Supported by Azure – [Link](https://github.com/jssuthahar/Article/blob/main/AZURE/Dev/01%20Programming%20Languages%20Supported%20by%20Azure.md)
* Azure Datacenters, Regions, Region Pairs & Availability Zones – [Link](https://github.com/jssuthahar/Article/blob/main/AZURE/Dev/02%20Azure%20Datacenters%2C%20Regions%2C%20Region%20Pairs%20%26%20Availability%20Zones.md)
* Azure Fault Domain, Update Domain & Availability Set – [Link](https://github.com/jssuthahar/Article/blob/main/AZURE/Dev/03%20Azure%20Fault%20Domain%2C%20Update%20Domain%20%26%20Availability%20Set.md)
* Azure Resource Groups – [Link](https://github.com/jssuthahar/Article/blob/main/AZURE/Dev/04%20Azure%20Resource%20Group.md)

---

## 📘 Overview

In this session, we cover foundational Azure developer concepts including supported programming languages, how Azure is structured globally (datacenters, regions, availability zones), resiliency domains inside Azure, and how resources are grouped via Resource Groups. These topics are critical for architecting scalable, resilient back-end systems on Azure.

---

## ✅ What you will learn

By the end of Day 3, you should be able to:

* Identify which programming languages and frameworks Azure supports, and map the ones you use.
* Explain how Azure’s global infrastructure is organized: datacenters, regions, region pairs, availability zones.
* Understand internal Azure resilience constructs: fault domains, update domains, and availability sets.
* Use and design Resource Groups to logically group Azure resources for management, security and lifecycle.
* See how these building blocks interlock in a typical backend architecture (for example for your AI-agent for a shopping application or the service-sharing mobile app you’re building).

---

## 🧠 Why this matters

* Choosing the correct programming languages/platforms ensures you leverage Azure services efficiently (e.g., for Functions, WebApps, Containers) and keep alignment with your backend stack.
* Understanding Azure’s global infrastructure helps you design for latency, disaster recovery, data residency (especially in the Malaysia/Southeast Asia region) and cost optimisation.
* Resilience domains (fault/update domains, availability sets) are key to ensuring high availability of your services when deploying virtual machines or other compute.
* Resource Groups provide governance, cost tracking, deployment management and lifecycle control – especially important when you have many micro-services or modules (like your service-sharing app or short URL project) in production.

---

## 🛠 Suggested Hands-On/Exercises

* Choose one of your backend services (for example your short URL redirection logic) and map out: which Azure region you would deploy it in (considering Malaysia/Southeast Asia), how you’d use availability zones or region pairs for DR.
* Create a Resource Group in the Azure portal (or via Azure CLI) for one of your modules, deploy a simple Azure Function or Web App, and observe how the grouping works.
* Review the language/framework you’re using (C#, .NET, Node.js, Python) and check which Azure services it integrates with (Functions, App Service, Containers) using the programming-languages article as reference.
* Sketch out how you would structure VM-based workloads (if any) using availability sets, and how fault/update domains help you avoid downtime during maintenance.

---

## 📁 Repository Structure

```
/Day3-Azure-Fundamentals/
   ├─ 01-ProgrammingLanguages.md
   ├─ 02-Datacenters-Regions-AZ.md
   ├─ 03-FaultDomain-UpdateDomain-AvailSet.md
   ├─ 04-ResourceGroup.md
   ├─ README.md      ← this file
   └─ /images/       ← diagrams, regional maps etc
```

---

## 🔗 Useful Links

* Microsoft Docs – Azure Regions and Availability Zones
* Microsoft Docs – Azure Resource Manager overview
* Microsoft Docs – Azure supported languages for Functions and App Service

---

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
