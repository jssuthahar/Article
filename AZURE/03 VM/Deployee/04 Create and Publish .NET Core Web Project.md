# Create and Publish .NET Core Web Project

This guide explains how to **create a new .NET Core project** and **publish it for deployment** using terminal commands.

---

## Prerequisites

- .NET SDK installed (check via `dotnet --version`)
- Visual Studio Code or any code editor
- Terminal/Command Prompt
- Basic knowledge of C# and .NET Core

---

## Step 1: Create a New .NET Core Project

1. Open **Terminal** or **Command Prompt**
2. Navigate to the folder where you want to create the project
3. Run the command to create a new **ASP.NET Core Web App**:

```bash
dotnet new webapp -n MyWebsite
````

* `webapp` → Template for Razor Pages
* `-n MyWebsite` → Project name

4. Navigate into the project folder:

```bash
cd MyWebsite
```

5. Run the project locally:

```bash
dotnet run
```

* Open browser: `http://localhost:5000` → You should see the default web page

---

## Step 2: Publish the Project for Deployment

1. Run the **publish command** in release mode:

```bash
dotnet publish -c Release -o ./publish
```

* `-c Release` → Builds the project in Release mode
* `-o ./publish` → Output folder for published files

2. After publishing, the folder `./publish` will contain all files needed to deploy the website

---

## Step 3: Deploy the Published Files

1. Copy contents of `./publish` to your **web server** (IIS, Azure VM, or any hosting)
2. For IIS:

   * Place files in `C:\inetpub\wwwroot\MyWebsite`
   * Ensure IIS has **.NET Core Hosting Bundle** installed
3. Start the site in IIS or access via your **server public IP**

---

## Step 4: Optional Commands

* Clean project:

```bash
dotnet clean
```

* Build project without running:

```bash
dotnet build
```

* Run project directly without publishing:

```bash
dotnet run
```

---

## References

* [Microsoft Docs: Create ASP.NET Core Web App](https://learn.microsoft.com/en-us/aspnet/core/tutorials/razor-pages)
* [Publish .NET Core App](https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
