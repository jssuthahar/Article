# Service Level Agreement (SLA) in Azure

## 📝 What is an SLA?

A **Service Level Agreement (SLA)** is a formal document provided by Microsoft that defines the **performance standards and uptime guarantees** for Azure services. It includes:

* **Availability percentage** (e.g., 99.9%, 99.99%)
* **Maximum downtime allowed per month**
* **Service credits or penalties** in case the SLA is not met

Each Azure service has its own SLA which ranges typically from **99% to 99.999%**.

> Free services typically do not have an SLA.

## 📊 Real-Time Use Case: Web Application with Azure SQL

Imagine you have a web application that uses Azure SQL as its backend. Here's how SLA affects your architecture:

* **Web App SLA**: 99.95%
* **Azure SQL SLA**: 99.95%

If both components must work together (AND relationship), the combined SLA is calculated as:

```
Availability = SLA_WebApp * SLA_SQL
             = 99.95% * 99.95%
             = 0.9995 * 0.9995
             = ~99.9%
```

That means your **combined system uptime** will be approximately 99.9%, which corresponds to **\~43 minutes 49 seconds** of maximum downtime per month (see SLA table).

## 🔧 SLA Calculator Tools

There are many online tools available to calculate SLA downtime. One highly recommended tool is:

🌐 [https://uptime.is/](https://uptime.is/)

Just enter the SLA percentage and the tool will show the **maximum allowable downtime** per year, month, week, and day.

### Example:

For **97% SLA**, the tool will show:

* **Monthly downtime**: \~21 hours and 54 minutes
* **Weekly downtime**: \~5 hours

## 📚 Useful Resources

* 📘 [Microsoft SLA Documentation](https://www.microsoft.com/licensing/docs/view/Service-Level-Agreements-SLA-for-Online-Services?lang=1)

---

## 🖼️ SLA Quick Reference Table

| SLA     | Monthly Downtime |
| ------- | ---------------- |
| 99%     | 7h 18m 17s       |
| 99.5%   | 3h 39m 8s        |
| 99.9%   | 43m 49s          |
| 99.95%  | 21m 54s          |
| 99.99%  | 4m 22s           |
| 99.999% | 26s              |

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
