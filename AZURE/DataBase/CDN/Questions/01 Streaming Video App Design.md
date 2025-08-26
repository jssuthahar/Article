# AZ-204 Exam – Streaming Video App Design 

This document explains three related AZ-204 exam questions about designing a **highly available streaming video web app** with **continuous integration and deployment**.  
Each question presents a proposed solution, and we evaluate whether it meets the stated requirements:

- **Requirements:**  
  - Ensure **high availability**  
  - Provide a **consistent streaming experience**  
  - Store data in a **geographic location nearest to the user**

---

## Question #17

**Question:**  
You are configuring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.  

You need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to configure the application to store data in a geographic location that is nearest to the user.  

**Solution:** You include the use of **Azure Redis Cache** in your design.  

**Does the solution meet the goal?**  
A. Yes  
B. No  

**Correct Answer:** ❌ **B (No)**  

### Explanation:
- Azure Redis Cache is an **in-memory caching service**.  
- It helps reduce latency for **metadata, sessions, or frequently accessed small data**, but not **large streaming video files**.  
- It does not ensure **global availability** or **store content nearest to the user**.  

➡️ Therefore, Redis Cache **does not satisfy** the requirements.

---

## Question #18

**Question:**  
You are configuring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.  

You need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to configure the application to store data in a geographic location that is nearest to the user.  

**Solution:** You include the use of an **Azure Content Delivery Network (CDN)** in your design.  

**Does the solution meet the goal?**  
A. Yes  
B. No  

**Correct Answer:** ✅ **A (Yes)**  

### Explanation:
- Azure CDN **caches video content at edge locations worldwide**, ensuring the **nearest server** delivers the stream.  
- Improves **latency, reliability, and availability**.  
- Designed specifically for **global content delivery** like video streaming.  

➡️ Therefore, CDN **satisfies all requirements**.  

**Reference:** [Azure CDN Documentation](https://docs.microsoft.com/en-in/azure/cdn/)

---

## Question #19

**Question:**  
You are configuring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.  

You need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to configure the application to store data in a geographic location that is nearest to the user.  

**Solution:** You include the use of a **Storage Area Network (SAN)** in your design.  

**Does the solution meet the goal?**  
A. Yes  
B. No  

**Correct Answer:** ❌ **B (No)**  

### Explanation:
- A Storage Area Network (SAN) is typically **on-premises block-level storage** for enterprise systems.  
- It provides **fast disk access** but does not handle **global distribution** or **content delivery**.  
- It is not suitable for **streaming video delivery** across multiple regions.  

➡️ Therefore, SAN **does not satisfy** the requirements.

---

## ✅ Summary

| Question | Proposed Solution         | Correct Answer | Why Correct / Incorrect |
|----------|---------------------------|----------------|--------------------------|
| Q17      | Azure Redis Cache         | **No (B)**     | Good for caching metadata/sessions, but not global video delivery |
| Q18      | Azure Content Delivery Network (CDN) | **Yes (A)** | Meets all requirements: global availability, low latency, nearest edge server |
| Q19      | Storage Area Network (SAN) | **No (B)**    | Local storage, not for global streaming or user proximity |


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


