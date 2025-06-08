# AZ-204 Practice Questions and Answers

## Topic: Implement Azure App Service Web Apps

### Subtopic: Configure and Implement Diagnostics and Logging

This document provides curated practice questions and detailed answers focused on Azure App Service monitoring and diagnostics, suitable for AZ-204 preparation.

---

### ✅ Question 1: Configure Azure App Service to Meet Monitoring Requirements

**Scenario:**

You develop and deploy a web app in Azure App Service with 4 instances and a staging slot. You must:

- Increase availability by rerouting requests away from instances returning error codes.
- Replace unhealthy instances if unhealthy for one hour.
- Send web server logs, application logs, standard output, and standard error messages to Azure Storage Blob.

**Answer:**

- **Health check**: Configure the Health check feature in App Service to monitor a specific endpoint. If an instance fails health checks continuously, App Service can reroute traffic and replace it after a threshold (e.g., 1 hour).
- **Diagnostic settings**: Set up diagnostic logging to route web server, application, stdout, and stderr logs to an Azure Storage blob.

**Explanation:**

- Health checks improve app reliability by removing unhealthy instances from the load balancer.
- Diagnostic settings help persist and analyze logs using storage, Event Hubs, or Log Analytics.

**References:**

- [Health check in App Service](https://docs.microsoft.com/en-us/azure/app-service/monitor-instances-health-check)
- [App Service diagnostic logs](https://docs.microsoft.com/en-us/azure/app-service/troubleshoot-diagnostic-logs)

---

### ✅ Question 2: Investigate Azure Function App Errors in Development

**Options:**

A. Connect Live Metrics Stream from Application Insights to the Azure Function app and filter errors  
B. Create a new Log Analytics workspace and instrument the app with Application Insights  
C. Use `Microsoft.Extensions.Logging` to log events  
D. Add a diagnostic setting to send logs to Log Analytics

**Correct Answer:** A

**Explanation:**

Live Metrics Stream provides real-time monitoring for Azure Functions when integrated with Application Insights. It allows developers to quickly diagnose issues, failures, or performance degradation.

**Reference:**

- [Monitor Azure Functions using Application Insights](https://docs.microsoft.com/en-us/azure/azure-functions/functions-monitoring)

---

### ✅ Question 3: Identify Azure Monitor Log for Configuration Changes in Web Apps

**Options:**

A. AppServiceAppLogs  
B. AppServiceEnvironmentPlatformLogs  
C. AppServiceConsoleLogs  
D. AppServiceAuditLogs

**Correct Answer:** B

**Explanation:**

`AppServiceEnvironmentPlatformLogs` includes logs related to scaling operations, configuration changes, and environment-level events, making it ideal for auditing configuration changes.

**Reference:**

- [App Service Diagnostic Logs](https://docs.microsoft.com/en-us/azure/app-service/troubleshoot-diagnostic-logs)

---

### ✅ Question 4: Configure Application Insights for Web App Telemetry

**Arrange the correct sequence:**

1. Create Application Insights resource  
2. Copy the connection string  
3. Configure the Application Insights SDK in the app

**Correct Sequence:**

1. Create Application Insights resource  
2. Copy the connection string  
3. Configure SDK (add NuGet package, insert connection string in `appsettings.json` or `Startup.cs`)

**Reference:**

- [Enable Application Insights in ASP.NET Core](https://docs.microsoft.com/en-us/azure/azure-monitor/app/asp-net-core)

---

### ✅ Question 5: Application Insights Feature for Detecting Performance Issues

**Which feature detects performance issues and failure anomalies automatically?**

**Correct Answer:** Smart Detection

**Explanation:**

Smart Detection automatically analyzes telemetry to find potential performance bottlenecks or failure spikes and generates alerts.

**Reference:**

- [Smart Detection in Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/proactive-diagnostics)

---

## Other Subtopics Overview

### Subtopic: Configure and Implement Autoscaling

- Health checks play a role in autoscaling by identifying instance health.
- Autoscale is more effective when the App Service Plan is scaled to **two or more instances**.

### Subtopic: Configure Deployment Slots

- Deployment slot was mentioned in the monitoring question but not tested directly in provided examples.
- No configuration-specific question was listed.

### Subtopic: Deploy Code and Containerized Solutions

- No explicit deployment questions covered in current set.

### Subtopic: Configure TLS, API Settings, and Service Connections

- Not covered in the provided questions.

---

## 📌 Summary

This section of the AZ-204 focuses heavily on:

- Monitoring and diagnostics with **Application Insights**, **Azure Monitor**, and **Health Check**.
- Ensuring **high availability** through diagnostics and auto-remediation.
- Integration of logging tools and observability features in Azure App Services.

More attention should be given to hands-on labs in Azure Portal to configure health checks, diagnostic settings, and Application Insights for real-world understanding.

---

## 📚 Recommended Reading

- [App Service Monitoring Overview](https://docs.microsoft.com/en-us/azure/app-service/overview-monitoring)
- [Azure Monitor Logs for App Service](https://docs.microsoft.com/en-us/azure/azure-monitor/)
- [Application Insights Overview](https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)




## 🔗 Connect with Me

- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)  
- **YouTube (English)**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)  
- **YouTube (Tamil)**: [MSDEVBUILD Tamil](https://www.youtube.com/@MSDEVBUILDTamil)  
- **Blog**: [MSDEVBUILD.com](https://www.msdevbuild.com/)  
- **WhatsApp Channel**: [Follow on WhatsApp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

---
