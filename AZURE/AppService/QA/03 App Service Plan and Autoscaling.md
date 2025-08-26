# AZ-204 Exam – App Service Plan and Autoscaling

This document explains **Question #20** from the AZ-204 exam about **App Service Plans**, **automatic scaling**, and **minimizing costs**.

---

## Question #20

**Question:**  
You develop a Web App on a **D1 App Service Plan (Shared)**.  
You notice that page load times increase during periods of peak traffic.  

You want to implement **automatic scaling when CPU load is above 80%**.  
Your solution must **minimize costs**.  

**What should you do first?**  
A. Enable autoscaling on the Web App.  
B. Switch to the Premium App Service tier plan.  
C. Switch to the Standard App Service tier plan.  
D. Switch to the Azure App Services consumption plan.  

**Correct Answer:** ✅ **C. Switch to the Standard App Service tier plan**  

---

## ✅ Why Answer C is Correct

- The **Standard App Service Plan** supports **autoscaling** (scaling out to multiple instances automatically).  
- Autoscaling can be configured based on CPU usage, memory, or custom rules.  
- Compared to Premium, Standard is **lower cost**, which meets the "minimize costs" requirement.  
- After upgrading to Standard, you can enable **autoscale rules** (e.g., scale out when CPU > 80%).  

**Reference:**  
- [Azure Autoscale Documentation](https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitoring-autoscale-get-started)  
- [App Service Plan Pricing](https://azure.microsoft.com/en-us/pricing/details/app-service/plans/)  

---

## ❌ Why Other Options Are Incorrect

**A. Enable autoscaling on the Web App**  
- ❌ Wrong because **autoscaling is not available** in the Free (F1), Shared (D1), or Basic tiers.  
- You must **upgrade to at least Standard** before autoscaling can be enabled.  

**B. Switch to the Premium App Service tier plan**  
- ❌ Wrong because although Premium supports autoscaling, it is **more expensive**.  
- The question specifically requires minimizing costs. Standard tier is sufficient.  

**D. Switch to the Azure App Services Consumption plan**  
- ❌ Wrong because the **Consumption plan is only for Azure Functions**, not Web Apps.  
- A Web App cannot run on a Consumption plan.  

---

## 📘 Key Concepts

### 1. What is an App Service Plan?
- An **App Service Plan** defines the **region, features, and capacity (pricing tier)** for your Azure Web Apps, APIs, and Mobile Apps.  
- It determines:  
  - **Compute resources** (CPU, memory, disk space)  
  - **Scaling options** (manual or autoscale)  
  - **Pricing** (Free, Shared, Basic, Standard, Premium, Isolated)  

---

### 2. What is Autoscaling?
- **Autoscaling** automatically adjusts the number of instances of your web app based on demand.  
- Benefits:  
  - Keeps apps **highly available**.  
  - Reduces costs by scaling **down** when demand is low.  
  - Can be configured based on **CPU, memory, or custom metrics**.  
- Example Rule:  
  - If **CPU > 80%** for 10 minutes → Scale out by 1 instance.  
  - If **CPU < 50%** for 15 minutes → Scale in by 1 instance.  

---

### 3. Types of App Service Plans

| Tier        | Description | Scaling Support | Cost |
|-------------|-------------|-----------------|------|
| **Free (F1)** | Shared compute, limited features | No scaling | 💲 Free |
| **Shared (D1)** | Shared compute, custom domains | No scaling | 💲 Low |
| **Basic (B1–B3)** | Dedicated VM, manual scaling only | Manual scaling | 💲 |
| **Standard (S1–S3)** | Dedicated VM, supports **autoscaling** | Autoscale (up to 10 instances) | 💲💲 |
| **Premium (P1–P3)** | High performance, advanced features | Autoscale (more instances, advanced networking) | 💲💲💲 |
| **Isolated (I1–I3)** | Runs in a private VNet, dedicated compute | Autoscale, highest isolation/security | 💲💲💲💲 |

---

## ✅ Summary

- **Correct Answer:** **C. Switch to Standard App Service Plan**  
- **Why?** Standard plan is the **lowest-cost tier** that supports **autoscaling**, which is required in the question.  
- **Other options fail** because:  
  - A → Autoscale not available in Shared tier.  
  - B → Premium supports autoscale but is more expensive.  
  - D → Consumption plan is not valid for Web Apps.  

➡️ **Final Rule**: If you need **autoscaling** for a Web App and want to minimize cost, go with the **Standard App Service Plan**.  

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


