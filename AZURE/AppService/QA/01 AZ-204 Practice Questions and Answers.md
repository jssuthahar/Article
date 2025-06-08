
# AZ-204: Implement Azure App Service Web Apps

This document provides a collection of practice questions, correct answers, detailed explanations, and Microsoft documentation references for the AZ-204 certification exam. The focus is on the topic **"Implement Azure App Service Web Apps"**, including diagnostics, logging, availability, scaling, and compliance.

---

## 1. Configure Application Insights for Azure App Service Web App
**Question**:  
You deploy an ASP.NET web app to Azure App Service. You must monitor the web app using Application Insights. You need to configure Application Insights to meet the requirements. Which feature should you use?

**Options**:  
A. Smart Detection  
B. Profiler  
C. Snapshot Debugger  
D. Standard Test  

**Answer**: A. Smart Detection

**Explanation**:  
Smart Detection proactively alerts you about potential performance or failure issues by analyzing telemetry data sent by your application. It requires minimal configuration and helps identify anomalies such as sudden failure rate increases.

**Topic**: Monitoring Azure Web Apps with Application Insights; proactive diagnostics and alerting.  
**Reference**: [Smart Detection - Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/proactive-diagnostics)

---

## 2. Configure Application Insights for Azure Web Apps (DRAG DROP)

**Question**:  
An organization has web apps hosted in Azure. They want to track events and telemetry data using Application Insights. Which three actions should you perform in sequence?

**Options**:
- Create an Application Insights resource
- Copy the instrumentation key
- Configure the Application Insights SDK in the app
- Copy the connection string
- Enable Azure Monitor logging
- Configure alerts

**Correct Sequence**:
1. Create an Application Insights resource  
2. Copy the connection string  
3. Configure the Application Insights SDK in the app

**Explanation**:  
Creating the resource allows telemetry collection. The connection string links telemetry to your resource, and the SDK enables telemetry capture.

**Topic**: Setting up Application Insights telemetry for Azure Web Apps.  
**Reference**: [Enable Application Insights - ASP.NET Core](https://docs.microsoft.com/en-us/azure/azure-monitor/app/asp-net-core)

---

## 3. Investigate Azure Function App Error Message

**Question**:  
You need to investigate an Azure Function app error in development. What should you do?

**Options**:  
A. Connect Live Metrics Stream from Application Insights  
B. Create a Log Analytics workspace and instrument with Application Insights  
C. Use Microsoft.Extensions.Logging to log events  
D. Add diagnostic setting to send logs to Log Analytics

**Answer**: A. Connect Live Metrics Stream from Application Insights

**Explanation**:  
Live Metrics Stream provides near real-time telemetry and is best for quick diagnosis of Azure Function performance and errors.

**Topic**: Monitoring Azure Function apps with Application Insights.  
**Reference**: [Monitor Azure Functions - Application Insights](https://docs.microsoft.com/en-us/azure/azure-functions/functions-monitoring)

---

## 4. Increase Web App Availability and Send Logs to Storage Account

**Question**:  
You scale out a web app to four Azure App Service instances and configure a staging slot. You must:
- Increase availability by rerouting requests away from unhealthy instances
- Replace unhealthy instances after one hour
- Send logs to Azure Storage Blob

**Options**:
- Health Check  
- Diagnostic Setting  
- Application Insights  
- Auto Scale  
- Deployment Slots  

**Answer**:  
- For Availability: Health Check  
- For Logs: Diagnostic Setting

**Explanation**:  
Health Check detects and removes unhealthy instances. Diagnostic Settings export logs to Azure Storage, Event Hubs, or Log Analytics.

**Topic**: Azure App Service availability and diagnostics configuration.  
**Reference**:
- [Health Check](https://docs.microsoft.com/en-us/azure/app-service/monitor-instances-health-check)  
- [Diagnostic Logs](https://docs.microsoft.com/en-us/azure/app-service/troubleshoot-diagnostic-logs)

---

## 5. Configure Azure Web App for Third-Party Library with Single Instance License
 
**Question**:  
You have a web app with a third-party library licensed for one instance. How should you configure Azure App Service?

**Options (Select Two)**:
- Scale out to 1 instance  
- Enable Autoscale  
- Disable Scale Out  
- Use Premium App Service Plan  
- Use Consumption Plan  

**Answer**:
- Scale out to 1 instance  
- Disable Scale Out

**Explanation**:  
You must restrict scaling to comply with the license, preventing more than one instance from being created.

**Topic**: Azure App Service scaling and licensing compliance.  
**Reference**: [App Service scaling documentation](https://docs.microsoft.com/en-us/azure/app-service/manage-scale)

---

## 6. Add Azure Blob Storage Security Settings for Corporate Website Files

**Question**:  
You need to secure Azure Blob Storage for corporate website file compliance. What settings should you enable?

**Options**:
- Enable encryption at rest  
- Enable secure transfer required  
- Enable soft delete  
- Set Access Tier to Cool  
- Enable public access  

**Answer**:
- Enable encryption at rest  
- Enable secure transfer required  
- Enable soft delete

**Explanation**:  
These settings ensure data protection, secure data transmission, and accidental deletion recovery.

**Topic**: Security and compliance configuration for Azure Storage.  
**Reference**: [Secure Azure Storage](https://docs.microsoft.com/en-us/azure/storage/common/storage-security-guide)

---

## 7. Troubleshoot and Remediate Azure Web App Errors (Sequence)
 
**Question**:  
You discover errors in a deployed Azure Web App. What is the recommended sequence to diagnose and fix?

**Options**:
- Review Application Insights Logs  
- Analyze Deployment Configuration  
- Update application code  
- Redeploy updated app  
- Test app performance  

**Correct Sequence**:
1. Review Application Insights Logs  
2. Analyze Deployment Configuration  
3. Update application code  
4. Redeploy updated app  
5. Test app performance

**Explanation**:  
Start with diagnostics, validate configuration, apply fixes, and test post-deployment.

**Topic**: Troubleshooting and recovery of Azure App Service web apps.  
**Reference**: [Troubleshoot App Service Issues](https://docs.microsoft.com/en-us/azure/app-service/overview-diagnostics)

---

## Summary

This guide covers monitoring, diagnostics, availability, scaling, compliance, and troubleshooting for Azure App Service Web Apps. It is designed to help prepare for the **AZ-204** exam and provide real-world configuration insights.

