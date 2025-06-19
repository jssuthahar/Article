
# ♻️ Azure Blob Storage Lifecycle Management – README

## 📘 Overview

**Azure Blob Lifecycle Management** helps you **automate** the movement and deletion of blob data based on rules and conditions, reducing **manual effort** and **storage costs**.

> Example: Automatically move unused blobs to cool/archive tier or delete them after a certain time.

---

## ❓ Why Use Lifecycle Management?

| Benefit                      | Description                                       |
| ---------------------------- | ------------------------------------------------- |
| 💸 **Cost Optimization**     | Move data to cheaper tiers or delete stale blobs  |
| ⏱️ **Automation**            | No need for manual monitoring and cleanup         |
| 🧹 **Data Hygiene**          | Automatically delete temporary or outdated files  |
| 📊 **Efficient Storage Use** | Keep hot tier for only frequently accessed data   |
| 🛡️ **Policy Compliance**    | Retain or delete data based on retention policies |

---

## 💡 Real-Time Use Cases

| Scenario           | Rule Example                          | Benefit               |
| ------------------ | ------------------------------------- | --------------------- |
| **Log files**      | Delete after 90 days                  | Free up space         |
| **Backups**        | Move to archive after 30 days         | Lower storage cost    |
| **User uploads**   | Archive after 60 days of inactivity   | Reduce hot tier usage |
| **Product images** | Keep in hot tier if accessed recently | Performance-focused   |

---

## 🛠️ Lifecycle Management Rule – How It Works

Azure lifecycle policies are rule-based JSON definitions that apply to **blob types** in selected **containers**. You can:

* **Move blobs** between Hot, Cool, and Archive tiers
* **Delete blobs** based on last modified or last accessed time
* Target blobs by **prefix, blob type, tags**, and **access tier**

---

## 🧭 Step-by-Step: Set Up Lifecycle Rule in Azure Portal

### ✅ Step 1: Open Storage Account

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Storage accounts**
3. Select your target **Storage Account**

---

### ✅ Step 2: Open Lifecycle Management

1. In the left-hand menu, under **Data Management**
2. Click on **Lifecycle management**

---

### ✅ Step 3: Add a New Rule

1. Click **"+ Add rule"**
2. Provide a **rule name**

---

### ✅ Step 4: Define Rule Conditions

Choose one or more actions:

* **Move blob to cool storage**
* **Move blob to archive storage**
* **Delete blob**

Define **conditions**:

* When blob is **X days since last modified**
* When blob is **X days since last accessed**
* Apply to all blobs or by **prefix**, **blob type**, **tags**

✅ Example:

```
If blob hasn't been accessed in 30 days → move to cool  
If blob hasn't been accessed in 180 days → delete
```

---

### ✅ Step 5: Review and Save

* Review your rule logic
* Click **Add** to activate the rule
* Azure will now **automatically evaluate and apply** this rule daily

---

## 🔄 Example Rule JSON (Advanced)

```json
{
  "rules": [
    {
      "name": "MoveToCoolAndDelete",
      "enabled": true,
      "type": "Lifecycle",
      "definition": {
        "filters": {
          "blobTypes": ["blockBlob"],
          "prefixMatch": ["logs/"]
        },
        "actions": {
          "baseBlob": {
            "tierToCool": {
              "daysAfterModificationGreaterThan": 30
            },
            "delete": {
              "daysAfterModificationGreaterThan": 180
            }
          }
        }
      }
    }
  ]
}
```

---

## 📌 Summary Table

| Feature              | Details                                       |
| -------------------- | --------------------------------------------- |
| Supported Blob Types | Block blobs (Page blobs not supported)        |
| Actions              | Tiering: Hot → Cool → Archive<br>Delete blobs |
| Filters              | Prefix match, blob type, blob index tags      |
| Run Frequency        | Daily                                         |
| Tiers Affected       | Hot, Cool, Archive                            |
| Cost Impact          | Tiering saves cost; deletion frees space      |

---

## 📁 Where It’s Used

| Industry   | Use Case                                               |
| ---------- | ------------------------------------------------------ |
| Healthcare | Retain patient data for 7 years, then delete           |
| Finance    | Archive transaction records after 1 year               |
| Retail     | Delete product catalog images not accessed in 6 months |
| Education  | Remove course content after semester ends              |

---

## 🧾 Final Notes

* Rules are **evaluated once per day**
* Archive tier has **retrieval delay (hours)** and **early deletion fees**
* Use **Access Tier change** carefully for time-sensitive apps

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
