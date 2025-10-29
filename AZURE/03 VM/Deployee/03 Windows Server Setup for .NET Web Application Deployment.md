# Windows Server Setup for .NET Web Application Deployment

This guide provides step-by-step instructions to set up a **Windows Server** environment for deploying a **.NET web application**. It includes enabling features, installing required components, and disabling security settings that may block installation.

## 1. Pre-Requisites

* Windows Server 2016 / 2019 / 2022
* Administrator access
* Internet connection
* Application deployment package (.NET web app)

## 2. Disable Internet Explorer Enhanced Security Configuration (IE ESC)

IE ESC blocks downloads and scripts needed for installing .NET hosting bundle.

### Steps:

1. Open **Server Manager**.
2. On the right, click **Local Server**.
3. Find **IE Enhanced Security Configuration**.
4. Click **On** → select **Off** for Administrators (and optionally Users).
5. Restart server if required.

## 3. Download and Install .NET Hosting Bundle

The .NET Hosting Bundle installs **.NET Runtime, ASP.NET Core Runtime**, and **IIS Module** for web applications.

### Steps:

1. Visit [Microsoft .NET Download](https://dotnet.microsoft.com/en-us/download/dotnet) page.
2. Select the required .NET version matching your application.
3. Download **ASP.NET Core Hosting Bundle**.
4. Run the installer as Administrator.
5. Follow the prompts and complete installation.

## 4. Enable IIS and Required Features

### Steps:

1. Open **Server Manager** → **Add Roles and Features**.
2. Choose **Role-based or feature-based installation**.
3. Select the server and click **Next**.
4. Select **Web Server (IIS)**.
5. Under **Role Services**, ensure:

   * Web Server
   * Common HTTP Features (Static Content, Default Document, HTTP Redirection)
   * Application Development (ASP.NET, .NET Extensibility)
   * Security (Request Filtering, Windows Authentication if needed)
   * Management Tools (IIS Management Console)
6. Click **Install** and wait for completion.

## 5. Configure IIS for .NET Application

### Using Default Website

1. Open **IIS Manager**.
2. Select **Default Web Site**.
3. Right-click and choose **Edit Bindings**.
4. Set **Port** to `80` (HTTP).
5. Ensure **IP Address** is set to `All Unassigned`.
6. Set **Physical path** to the folder containing your deployed application source code.
7. Set permissions on folder to allow IIS access (`IIS_IUSRS`).

### Optional: Application Pool

* Ensure the **Application Pool** for Default Web Site is set to **No Managed Code** or appropriate **.NET CLR Version** matching your application.

## 6. Test Application

1. Place your application files in the IIS site folder.
2. Browse the website from server or external URL ([http://server-ip/](http://server-ip/)).
3. Check for any errors in **Event Viewer** or **IIS logs**.

## 7. Post-Setup Recommendations

* Re-enable **IE Enhanced Security** if needed for safety.
* Apply Windows Updates.
* Configure **Firewall** to allow HTTP/HTTPS traffic.
* Set up **Application Pool Recycling** for stability.
* Regularly backup configuration and deployed apps.

   ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

