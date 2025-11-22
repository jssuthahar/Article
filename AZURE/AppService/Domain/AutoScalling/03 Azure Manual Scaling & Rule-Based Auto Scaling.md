# 📘 **Azure Manual Scaling & Rule-Based Auto Scaling (Beginner Friendly)**

This guide explains:

* ✔ What is Manual Scale
* ✔ What is Rule-Based Auto Scale
* ✔ How to do Manual Scaling
* ✔ How to create Auto Scale Rules
* ✔ When to use Manual vs Auto Scaling

Very simple English. Easy for beginners.

---

# 🟦 **1. What Is Manual Scaling?**

### 👉 Manual Scaling = You manually increase or decrease the number of **instances** (servers).

Azure will NOT automatically adjust.
You decide how many servers your web app uses.

### Example:

* Change from **1 instance → 3 instances** manually
* Later reduce from **3 → 1** manually

You control everything.

---

# 🟩 **2. When Do We Use Manual Scaling?**

Use Manual Scaling when:

✔ Traffic is **predictable**
✔ Students, internal teams, or small business
✔ You only need more instances during a fixed time
✔ Your app is in **testing or development**
✔ You want **100% control** over cost

### Example

You know that your app has high traffic every Monday morning.
You manually increase instances on Monday and reduce them after.

---

# 🟧 **3. How To Do Manual Scaling in Azure**

1. Open **Azure Portal**
2. Go to **App Service**
3. Select your **Web App**
4. On the left, click **Scale Out (App Service Plan)**
5. You will see **Instance Count**
6. Increase or decrease the number
7. Click **Save**

Azure will create or remove servers in a few seconds.

---

# 🟨 **4. What Is Auto Scaling (Rule-Based)?**

### 👉 Auto Scaling = Azure automatically adds/removes instances based on rules you set.

You create rules like:

* If CPU > 75% → Add 1 instance
* If CPU < 40% → Remove 1 instance
* If HTTP requests > 5000 → Add 1 instance
* Only scale between 2 and 6 instances

Azure decides when to scale.

---

# 🟫 **5. When Do We Use Auto Scale (Rule-Based)?**

Use Auto Scaling when:

✔ Traffic is **not predictable**
✔ You want best performance with low cost
✔ You expect sudden user growth
✔ Your app is in **production**
✔ You want app to scale automatically without manual work

### Example

Your site gets high traffic only during lunch hours.
Auto-scale increases instances at that time.
When traffic goes down, Azure reduces instances and cost.

---

# 🟪 **6. How To Create Auto Scale Rules**

1. Go to **Azure Portal**
2. Open your **App Service**
3. Left menu → **Scale Out (App Service Plan)**
4. Click **Custom autoscale**
5. Create a new **Autoscale Profile**
6. Add rules:

### Example Rule 1 — Scale Out

```
If CPU > 75% for 10 minutes  
Add 1 instance  
```

### Example Rule 2 — Scale In

```
If CPU < 40% for 15 minutes  
Remove 1 instance
```

7. Set minimum and maximum instances
8. Save

Azure will now automatically manage scaling.

---

# 🟧 **7. Common Auto Scale Rule Conditions**

You can scale based on:

### 📌 CPU percentage

Most common rule.
Good when your app is CPU-heavy.

### 📌 Memory usage

Good for RAM-heavy applications.

### 📌 HTTP queue length

Good for web apps with heavy traffic.

### 📌 Request count

Useful when too many people visit your website.

### 📌 Schedule

Scale based on time/day.

Example:

```
Monday–Friday, 8am–8pm → Use 3 instances  
Weekend → Use 1 instance
```

---

# 🟦 **8. Manual Scale vs Auto Scale — Simple Comparison**

| Feature          | Manual Scaling      | Rule-Based Auto Scaling   |
| ---------------- | ------------------- | ------------------------- |
| Who decides?     | You decide          | Azure decides using rules |
| Good for         | Predictable traffic | Unpredictable traffic     |
| Cost control     | Manual              | Automatic                 |
| Setup difficulty | Very easy           | Medium                    |
| Production usage | Not preferred       | Best for production       |
| Reaction time    | Slow                | Fast and automatic        |

---

# 🟩 **9. Which One Should You Use?**

### ✔ For beginners → Start with Manual Scaling

### ✔ For Production Apps → Always use Rule-Based Auto Scaling

### ✔ For cost optimization → Auto Scaling

### ✔ For fixed predictable users → Manual Scaling

---

# 🟫 **10. Simple Diagram**

```
----------------------------------
| Manual Scale                   |
|  YOU decide: 1 → 5 instances   |
----------------------------------

----------------------------------
| Auto Scale (Rule-Based)        |
| If CPU high → Add instance     |
| If CPU low → Remove instance   |
----------------------------------
```

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


