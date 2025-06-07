AZ-204 Exam Questions: Azure App Service Web Apps

Question 1: How do you monitor an Azure App Service web app using Application Insights to examine exceptions including source code and variable states?

Options:
A. Smart detection
B. Profiler
C. Snapshot Debugger
D. Standard test

Correct Answer: C

Explanation:
Snapshot Debugger captures a snapshot of the state of your application (including local variables and call stack) at the moment an exception or failure occurs. This helps developers diagnose the root cause of issues in production without stopping or debugging the live app.

Reference:
Azure Application Insights Snapshot Debugger

Question 2: You need to increase a web app's availability by re-routing requests away from instances with error status codes and automatically replacing unhealthy instances after one hour. You must also send web server logs, application logs, standard output, and error messages to a storage blob. Which features do you configure?

- Health check

- Diagnostic setting

- Autoscale

- Deployment slots

Correct Answers:

- Health check (for request routing and instance replacement)

- Diagnostic setting (for sending logs to Azure Storage Blob)

Explanation:
Health check continuously monitors the health of app instances. When an instance becomes unhealthy, traffic is routed away and after a configured time, the instance is replaced. Diagnostic settings enable streaming of logs, metrics, and traces to destinations like Azure Storage, Log Analytics, or Event Hubs.

References:

- Health check for Azure App Service

- Diagnostic logs in Azure App Service

Question 3: After creating an Azure App Service, which sequence correctly configures Application Insights telemetry for a web app?

1. Create an Application Insights resource

2. Copy the connection string

3. Configure the Application Insights SDK in the app

Correct Sequence: 1, 2, 3

Explanation:
First, you create an Application Insights resource in Azure portal. Then, you obtain the connection string which connects your app telemetry to that resource. Finally, you install and configure the Application Insights SDK in your application code to send telemetry data.

Reference:
Configure Application Insights for ASP.NET Core

Question 4: You want to monitor an Azure Function app error message in the development environment in near real-time. What should you do?

A. Connect Live Metrics Stream from Application Insights to the Azure Function app and filter the metrics
B. Create a new Azure Log Analytics workspace and instrument the Azure Function app with Application Insights
C. Update the Azure Function app with extension methods from Microsoft.Extensions.Logging
D. Add a new diagnostic setting to the Azure Function app to send logs to Log Analytics

Correct Answer: A

Explanation:
Live Metrics Stream provides live telemetry data with very low latency (~1 second), enabling near real-time monitoring of failures, requests, and performance for Azure Function apps. It allows instant insights during development and debugging.

Reference:
Monitor Azure Functions with Azure Application Insights

Question 5: You deployed a web app and need to configure deployment slots to support changes without downtime. Which Azure App Service feature allows this?

A. Slot swapping
B. Live Metrics Stream
C. Diagnostic settings
D. Application Gateway

Correct Answer: A

Explanation:
Deployment slots enable staging environments for your web app, allowing you to test new versions before swapping with the production slot. Slot swapping is a zero-downtime operation that swaps the content and config of two app slots.

Reference:
Azure App Service deployment slots

Question 6: To support autoscaling of your web app across multiple instances based on CPU usage, which Azure App Service setting should you configure?

A. Health check
B. Diagnostic settings
C. Autoscale rules in Azure Monitor
D. Application Insights alerts

Correct Answer: C

Explanation:
Autoscale rules configured in Azure Monitor allow your app to automatically increase or decrease instance count based on performance metrics like CPU percentage, HTTP queue length, or custom metrics, ensuring optimal resource utilization.

Reference:
Autoscale Azure App Service

Question 7: How do you configure TLS settings for your Azure App Service web app to ensure all inbound HTTPS traffic?

A. Use Azure Application Gateway with TLS termination
B. Configure HTTP to HTTPS redirection in App Service TLS settings
C. Add a diagnostic setting for TLS logs
D. Install extensions from Microsoft.Extensions.Logging

Correct Answer: B

Explanation:
Azure App Service allows you to enforce HTTPS by redirecting all HTTP traffic to HTTPS through TLS/SSL settings, ensuring secure communication.

Reference:
Enforce HTTPS in Azure App Service

Question 8: You want to deploy containerized solutions to Azure Web App. Which deployment approach is recommended?

A. ZIP deploy with container artifacts
B. Push container images to Azure Container Registry and configure Web App for Containers
C. Deploy via FTP upload of binaries
D. Use deployment slots only

Correct Answer: B

Explanation:
Azure Web App for Containers integrates with Azure Container Registry (ACR), allowing you to deploy container images directly from ACR. This is the recommended method for deploying containerized web apps.

Reference:
Run custom containers on Azure App Service

References Summary

- Snapshot Debugger

- Health checks

- Diagnostic logs

- Application Insights ASP.NET Core

- Azure Functions Monitoring

- App Service Deployment Slots

- Autoscale rules

- Enforce HTTPS

- Deploy containers to Azure Web App

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
