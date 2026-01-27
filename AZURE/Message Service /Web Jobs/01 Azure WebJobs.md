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
    
┌───────────── Minute (0 - 59)
│ ┌───────────── Hour (0 - 23)
│ │ ┌───────────── Day of the Month (1 - 31)
│ │ │ ┌───────────── Month (1 - 12 or JAN-DEC)
│ │ │ │ ┌───────────── Day of the Week (0 - 7 or SUN-SAT)
│ │ │ │ │
* * * * *

Key Components & Examples

Wildcard (*): Represents "all" or "every" (e.g., * in the month field means every month).

Comma (,): Separates a list of values (e.g., MON,WED,FRI in the day-of-week field).

Hyphen (-): Defines ranges (e.g., 9-17 in the hour field means 9 AM to 5 PM).

Slash (/): Defines increments (e.g., */5 in the minute field means every 5 minutes).

Question Mark (?): Used instead of * for day-of-month or day-of-week to indicate "no specific value" (used to avoid conflicts). 

Common Examples:
0 0 * * *: Runs at midnight every day.
*/15 * * * *: Runs every 15 minutes.
0 9 * * 1-5: Runs at 9:00 AM, Monday through Friday.
0 0 1 1 *: Runs at midnight on January 1st. 
Special Characters (Advanced)
L (Last): Represents the last day of the month or the last day of the week (e.g., 5L = last Friday).
W (Weekday): Finds the nearest weekday to a given day (e.g., 15W = closest weekday to the 15th).
# (Hash): Specifies the nth day of the month (e.g., 6#3 = 3rd Friday of the month). 



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
