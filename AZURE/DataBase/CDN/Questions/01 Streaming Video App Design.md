# AZ-204 Exam – Streaming Video App Design 

This document explains three related AZ-204 exam questions about designing a **highly available streaming video web app** with **continuous integration and deployment**.  
Each question presents a proposed solution, and we evaluate whether it meets the stated requirements:

- **Requirements:**  
  - Ensure **high availability**.  
  - Provide a **consistent streaming experience**.  
  - Store data in a **geographic location nearest to the user**.

---

## Question #17

**Proposed Solution:** Use **Azure Redis Cache**.  
**Answer:** ❌ **No (Correct: B)**  

### Why this is incorrect:
- Azure Redis Cache is an **in-memory caching service**.  
- It helps reduce latency for frequently accessed data (e.g., session state, metadata), but it does **not ensure video streaming availability** or distribute data geographically near the user.  
- It is **not designed for large content delivery or global replication**.

### Why others are incorrect:
- **Yes (A)** would be wrong because Redis Cache alone does not satisfy requirements for global video streaming.

---

## Question #18

**Proposed Solution:** Use **Azure Content Delivery Network (CDN)**.  
**Answer:** ✅ **Yes (Correct: A)**  

### Why this is correct:
- Azure CDN **caches content at edge locations worldwide**, ensuring that video streams are delivered from the **nearest server** to the user.  
- It improves **performance, availability, and reliability**, making it an ideal solution for video streaming.  
- CDN directly addresses the requirement to store data geographically close to users and ensures **low latency, smooth playback**.

### Why others are incorrect:
- **No (B)** would be wrong because CDN *does* satisfy all requirements.  

**Reference:** [Azure CDN Docs](https://docs.microsoft.com/en-in/azure/cdn/)

---

## Question #19

**Proposed Solution:** Use a **Storage Area Network (SAN)**.  
**Answer:** ❌ **No (Correct: B)**  

### Why this is incorrect:
- SAN is a **local high-performance storage solution** used in data centers, not in Azure for global distribution.  
- It provides **fast disk access** but does not improve global content delivery or streaming experience.  
- It does not replicate or cache content **closer to the user**.  

### Why others are incorrect:
- **Yes (A)** would be wrong because SAN is not designed for streaming video delivery across geographies.  

---

## ✅ Summary

- **Q17 → Azure Redis Cache → No (B)**  
- **Q18 → Azure CDN → Yes (A)**  
- **Q19 → Storage Area Network (SAN) → No (B)**  

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


