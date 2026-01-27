# 🚀 Azure WebJobs – Overview, Use Case & Portal Setup Guide

## 📘 What is Azure WebJobs?

**Azure WebJobs** is a feature of **Azure App Service** that allows you to run background tasks or scheduled jobs within the context of a web app. It supports running scripts or programs as background processes alongside your website or API — **without requiring a separate VM or service**.

---

## ❓ Why Use WebJobs?

| 🔹 Scenario              | ✅ Why WebJobs Helps                                          |
| ------------------------ | ------------------------------------------------------------ |
| Background processing    | Offload long-running or recurring logic from your main app   |
| Scheduled tasks          | Run daily/weekly jobs (e.g., report generation) using timers |
| File or queue processing | Respond to new blobs or queue messages                       |
| Cost efficiency          | Runs inside an existing App Service (no extra compute costs) |
| Simplicity               | No need to configure new Function Apps or infrastructure     |

---

## 📦 WebJobs vs Alternatives

| Feature       | WebJobs              | Azure Functions         | Azure Logic Apps        |
| ------------- | -------------------- | ----------------------- | ----------------------- |
| Hosting       | Tied to App Service  | Serverless              | No-code/low-code        |
| Triggers      | Timer, Queue, Manual | HTTP, Timer, Event Grid | Built-in connectors     |
| Best for      | Background scripts   | Micro-tasks, APIs       | Integrations/automation |
| Pricing Model | App Service Plan     | Consumption Plan        | Pay-per-logic           |

---

## 💼 Real-Time Use Case: Invoice PDF Generation

### Scenario:

A company hosts a web app where users submit monthly timesheets. After submission, the system must generate a **PDF invoice**, save it to Blob Storage, and email it to the finance team.

### How WebJobs Helps:

* Users don’t need to wait for the PDF to generate.
* A **WebJob** polls a queue for submitted timesheets.
* For each message:

  * Generate a PDF
  * Save it to Blob Storage
  * Send an email with the attachment

📈 This decouples the main app and keeps it responsive.

---

## 🛠️ How to Create a WebJob from Azure Portal

> ⚠ WebJobs must be attached to an **App Service Web App** (Windows-based). You cannot run WebJobs directly without a web app.

### 🔹 Step 1: Create or Select App Service

1. Go to [Azure Portal](https://portal.azure.com)
2. Search for **"App Services"**
3. Click **"+ Create"** or select an existing **Windows App Service** (Linux not supported for WebJobs)
4. Choose:

   * **Windows OS**
   * **App Service Plan (Basic or higher)**
   * **Region**, **Runtime stack**, etc.
5. Click **Review + Create**, then **Create**

---

### 🔹 Step 2: Create a WebJob ZIP Package

Prepare your WebJob locally — for example, in C# or Python.

**Example Folder Structure:**

```
MyWebJob/
├── run.csx            (or run.exe, run.ps1, run.py)
├── other-supporting-files
```

> `run.csx` is the entry point for C# script-based WebJobs.

🗜️ Zip the folder content into a `.zip` file.

---

### 🔹 Step 3: Upload WebJob in Azure Portal

1. Go to your **App Service**
2. In the left panel, click **WebJobs**
3. Click **"+ Add"**
4. Fill in:

   * **Name**: `InvoiceProcessor`
   * **File Upload**: Select the `.zip` file
   * **Type**:

     * **Triggered** (manual or on schedule)
     * **Continuous** (runs nonstop)
   * **Triggers**:

     * For **Scheduled**, specify CRON expression (e.g., `0 */2 * * * *` every 2 hours)
    
  # ⏱️ CRON Expression Guide

This README explains how to configure **Scheduled jobs** using **CRON expressions**, including syntax, breakdown, symbols, and common real‑world examples.

---

## ✅ Basic CRON Format

```
* * * * *
│ │ │ │ │
│ │ │ │ └── Day of the Week (0–7 or SUN–SAT)
│ │ │ └──── Month (1–12 or JAN–DEC)
│ │ └────── Day of the Month (1–31)
│ └──────── Hour (0–23)
└────────── Minute (0–59)
```

---

## 🧩 Example: Every 2 Hours

```
0 */2 * * *
```

### Breakdown

| Field        | Value | Meaning                     |
| ------------ | ----- | --------------------------- |
| Minute       | `0`   | At the 0th minute           |
| Hour         | `*/2` | Every 2 hours (0, 2, 4, 6…) |
| Day of Month | `*`   | Every day                   |
| Month        | `*`   | Every month                 |
| Day of Week  | `*`   | Any day                     |

✅ **Runs every 2 hours exactly on the hour**

---

## 🔍 CRON Field Explanation

| Field        | Allowed Values                        |
| ------------ | ------------------------------------- |
| Minute       | 0 – 59                                |
| Hour         | 0 – 23                                |
| Day of Month | 1 – 31                                |
| Month        | 1 – 12 or JAN – DEC                   |
| Day of Week  | 0 – 7 or SUN – SAT (0 and 7 = Sunday) |

---

## 🧠 Key Components

### `*` Wildcard

Represents **all values**.

Example:

```
* * * * *
```

Runs every minute.

---

### `,` Comma (List)

Used to specify multiple values.

Example:

```
0 9 * * MON,WED,FRI
```

Runs at **9 AM on Monday, Wednesday, and Friday**.

---

### `-` Hyphen (Range)

Defines a continuous range.

Example:

```
0 9-17 * * *
```

Runs **every hour from 9 AM to 5 PM**.

---

### `/` Slash (Step / Increment)

Defines recurring intervals.

Example:

```
*/5 * * * *
```

Runs **every 5 minutes**.

---

### `?` Question Mark

Used in **Quartz Scheduler** CRON expressions.

Indicates **no specific value**, mainly to avoid conflicts between:

* Day of Month
* Day of Week

Example:

```
0 10 ? * MON
```

Runs every Monday at 10 AM.

---

## 📘 Common CRON Examples

| Expression     | Description             |
| -------------- | ----------------------- |
| `0 0 * * *`    | Every day at midnight   |
| `*/15 * * * *` | Every 15 minutes        |
| `0 9 * * 1-5`  | 9 AM, Monday–Friday     |
| `0 0 1 1 *`    | January 1st at midnight |
| `0 */2 * * *`  | Every 2 hours           |
| `0 12 * * SUN` | Every Sunday at noon    |

---

## ⭐ Advanced Special Characters

### `L` — Last

* **Last day of the month**
* **Last weekday in a month**

Examples:

```
0 0 L * *     → Last day of every month
0 9 * * 5L    → Last Friday of the month
```

---

### `W` — Weekday

Finds the **nearest weekday (Mon–Fri)**.

Example:

```
0 9 15W * *
```

Runs on the weekday closest to the 15th.

---

### `#` — Nth Weekday of Month

Format:

```
DAY#N
```

Example:

```
0 9 * * 6#3
```

Runs on the **3rd Friday of every month**.

---

## ✅ Quick Reference

| Symbol | Meaning           |
| ------ | ----------------- |
| `*`    | Every value       |
| `,`    | Multiple values   |
| `-`    | Range             |
| `/`    | Step interval     |
| `?`    | No specific value |
| `L`    | Last              |
| `W`    | Weekday           |
| `#`    | Nth weekday       |

---

## 🚀 Tip

Always verify your CRON expression using online tools like:

* crontab.guru
* cronhub.io


5. Click **OK**

✅ WebJob will be deployed and appear in the WebJobs list

---

### 🔹 Step 4: Monitor & Manage

* Go to **App Service** → **WebJobs**
* Click on the WebJob to:

  * Start/Stop
  * View Logs
  * Check Status (Success/Failed)
* For triggered jobs, click **"Run"** to test manually

---

## 📚 Resources

* [WebJobs Documentation (MS Learn)](https://learn.microsoft.com/en-us/azure/app-service/webjobs-create)
* [WebJobs SDK](https://learn.microsoft.com/en-us/azure/app-service/webjobs-sdk-get-started)
* [CRON Expressions for Schedules](https://learn.microsoft.com/en-us/azure/azure-functions/functions-bindings-timer?tabs=cron)

---

## 🧼 Cleanup (Optional)

* Stop or delete the WebJob
* Delete the App Service if no longer needed
* Remove associated resources (Storage, App Insights)

---

## ✅ Summary

| Task                       | Completed |
| -------------------------- | --------- |
| Create Web App             | ✅         |
| Zip and Upload WebJob      | ✅         |
| Test and Monitor Execution | ✅         |
| Use in Real Scenario       | ✅         |

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)


Let me know if you’d like a downloadable `.zip` sample WebJob, or a GitHub repo to go with this!
