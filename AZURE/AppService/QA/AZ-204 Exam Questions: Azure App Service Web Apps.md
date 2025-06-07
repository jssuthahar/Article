# AZ-204 Exam – Implement Azure App Service Web Apps


Question 1

Question:
You are developing a new web service using Azure Web Apps. The web app contains a third-party library for processing Microsoft Excel files. The license stipulates that only a single instance of the library can run at a time. You need to configure the Azure App Service plan to ensure this licensing condition is met.

Options:

- A) Scale out the Azure App Service to multiple instances.

- B) Scale up the Azure App Service plan to a larger SKU.

- C) Configure Azure App Service to run with a single instance.

- D) Use deployment slots for Blue-Green deployment.

Correct Answer:

- C) Configure Azure App Service to run with a single instance.

Explanation:

To comply with the licensing restriction that only one instance of the third-party library can run, you must ensure that the Azure App Service runs on a single instance. Scaling out to multiple instances would violate the license terms by running multiple instances of the library simultaneously. Scaling up merely increases resources on a single instance, so it is acceptable only if correctly configured as a single instance. Deployment slots do not affect the number of running instances but are used for staging deployments.

Reference:

- Scale an app in Azure App Service

Question 2

Question:
When deploying Azure App Service policies, you notice that some policies are not applied immediately due to deployment timing. What are common causes and how do you handle policy loss during deployment?

Options:

- A) Deploy policies asynchronously with retry logic.

- B) Use configuration locks to prevent policy loss.

- C) Redeploy policies after app service deployment.

- D) Use health monitoring endpoint to validate policy status.

Correct Answer:

- C) Redeploy policies after app service deployment.

Explanation:

Policies might not be applied if the deployment action interrupts the application of policies. It is recommended to redeploy or reapply the policies after the main app deployment completes to ensure that they take effect without policy loss.

Reference:

- Azure Service Policy Deployment Best Practices [T1 (Page 388)]

Question 3

Question:
How do you monitor and address performance slowdowns and connection rejections in an Azure web app running an anomaly detection service under heavy load?

Options:

- A) Implement auto-scaling rules to add instances.

- B) Enable Azure Application Insights performance monitoring.

- C) Use an Azure Service Bus to queue requests for anomaly detection.

- D) Restrict incoming requests during peak load hours.

Correct Answer:

- A) Implement auto-scaling rules to add instances.

Explanation:

Under heavy load, Azure App Services can degrade performance or reject connections. Setting up autoscale rules based on CPU or memory usage allows the app to scale out and handle increased load dynamically, which will improve availability and reduce latency.

Reference:

- Scale-out and scale-up Azure App Service

Usage

1. Review each question carefully.

2. Understand the explanation and rationale for the correct answer.

3. Follow the MSDN links for detailed Microsoft documentation.

4. Practice these sample scenarios to prepare effectively for the AZ-204 exam.

Contributing

If you want to add more questions or enhance explanations, please open a pull request or submit an issue.

License

This material is for educational purposes aligned with Microsoft exam preparation.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
