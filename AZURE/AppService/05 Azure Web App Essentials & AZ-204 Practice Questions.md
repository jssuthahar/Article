# Azure Web App Essentials & AZ-204 Practice Questions

## 🚀 Creating an Azure Web App

An **Azure Web App** is a fully managed platform for building, deploying, and scaling web apps.

### Steps to Create an Azure Web App (Portal)

1. Sign in to [Azure Portal](https://portal.azure.com).
2. Click **Create a resource** > **Web App**.
3. Fill in the required fields:
   - **Subscription:** Select your subscription.
   - **Resource Group:** Create a new or select existing.
   - **Name:** This is your **unique app name** (also part of your default domain).
   - **Publish:** Choose Code or Docker container.
   - **Runtime stack:** Select the language/runtime (e.g., .NET, Node.js).
   - **Region:** Choose a region close to your users.
   - **App Service Plan:** Select or create a plan that defines pricing, performance, and region.
4. Review and create.

---

## 🌐 Unique Domain Name

- The **app name** you provide becomes part of your default hostname:  
  `https://<app-name>.azurewebsites.net`
- This name **must be globally unique** within Azure.
- You can also configure **custom domains** to use your own domain name (e.g., `www.mysite.com`).

---

## 🗺 Region & App Service Plan

- **Region:** The physical location where your app runs. Choose a region close to your users to reduce latency.
- **App Service Plan:** Defines:
  - Compute resources (CPU, memory)
  - Pricing tier (Free, Basic, Standard, Premium)
  - Scaling options
  - The region where the compute resources run

**Note:** Multiple web apps can share the same App Service Plan.

---

## 🌐 Zone Redundancy

- **Zone Redundancy** provides high availability by replicating your app across multiple Availability Zones within a region.
- Helps protect your app against zone failures.
- Available for certain App Service Plans (e.g., Premium v3) and regions.
- Recommended for production and critical workloads.

---

## 🗂 Resource Group

- Logical container to group related Azure resources.
- Makes management, monitoring, and billing easier.
- You can create or reuse resource groups during app creation.
- Resources in a group usually share the same lifecycle.

---

## 🧑‍💻 AZ-204 Style Practice Questions

### Q1: What is the significance of a unique app name when creating an Azure Web App?

**A:** The unique app name becomes part of the default domain `<app-name>.azurewebsites.net` and must be globally unique to avoid conflicts.

---

### Q2: What factors should you consider when selecting a region for your Azure Web App?

**A:** Proximity to users (to reduce latency), availability of services/features, compliance/regulatory requirements, and pricing differences.

---

### Q3: What does an App Service Plan define?

**A:** It defines the compute resources (CPU, RAM), pricing tier, region, and scaling capabilities for your Web Apps.

---

### Q4: How does zone redundancy enhance an Azure Web App?

**A:** It replicates the app across multiple availability zones, improving fault tolerance and reducing downtime during zone failures.

---

### Q5: What is a resource group and why is it important?

**A:** A resource group is a container for Azure resources. It simplifies management, access control, and billing by grouping related resources together.

---

### Q6: Can multiple Web Apps share the same App Service Plan?

**A:** Yes, multiple Web Apps can run on a single App Service Plan and share its compute resources.

---

### Q7: How can you configure a custom domain for your Azure Web App?

**A:** By purchasing a domain from a domain provider, then configuring DNS to point to the Azure Web App, and finally adding the custom domain in the Azure Portal under the Web App's **Custom domains** section.

---

### Q8: What pricing tiers are available for Azure App Service Plans?

**A:** Free, Shared, Basic, Standard, Premium, PremiumV2/V3, and Isolated.

---

### Q9: Is it possible to change the region of an existing Azure Web App?

**A:** No, you cannot change the region of an existing Web App. You must create a new Web App in the desired region and migrate your app.

---

### Q10: What happens if two users try to create a Web App with the same name?

**A:** Only the first user will succeed since the app name must be globally unique. The second user will receive an error and need to choose a different name.

---

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
