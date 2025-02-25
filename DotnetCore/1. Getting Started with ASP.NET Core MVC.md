# Getting Started with ASP.NET Core MVC

## Introduction
ASP.NET Core MVC is a framework for building web applications using the Model-View-Controller (MVC) architecture. This guide will walk you through creating your first MVC application in .NET Core.

## Setting Up the Project

1. **Install .NET SDK**
   - Download and install the latest .NET SDK from [Microsoft's official site](https://dotnet.microsoft.com/).
   
2. **Create a New MVC Project**
   Open a terminal or command prompt and run:
   ```sh
   dotnet new mvc -n AmazonLite
   cd AmazonLite
   ````
   This will create a new ASP.NET Core MVC project.

3. **Run the Application**
   ```sh
   dotnet run
   ```
   The application will start on `https://localhost:5001` or `http://localhost:5000`.

## Understanding Kestrel Web Server
- Kestrel is the default cross-platform web server for ASP.NET Core.
- It is lightweight, high-performance, and supports HTTPS, HTTP/2, and WebSockets.
- It is used in production behind a reverse proxy like Nginx or IIS.

## Understanding MVC Architecture
- **Model**: Represents the application's data and business logic.
- **View**: Defines the UI using Razor syntax (`.cshtml` files).
- **Controller**: Handles user requests and manages interactions between Model and View.

## Creating Controllers and Views

### 1. Home Controller
Create a `HomeController.cs` file inside the `Controllers` folder:

```csharp
using Microsoft.AspNetCore.Mvc;

namespace MyMvcApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult AboutUs()
        {
            return View();
        }
    }
}
```

Create `Index.cshtml` and `AboutUs.cshtml` inside `Views/Home/`:

```html
<!-- Views/Home/Index.cshtml -->
<h2>Welcome to Home Page</h2>

<!-- Views/Home/AboutUs.cshtml -->
<h2>About Us Page</h2>
```

### 2. Product Controller
Create a `ProductController.cs` file inside the `Controllers` folder:

```csharp
using Microsoft.AspNetCore.Mvc;

namespace MyMvcApp.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
```

Create `Index.cshtml` inside `Views/Product/`:

```html
<!-- Views/Product/Index.cshtml -->
<h2>Product List</h2>
```

## Understanding Program.cs in .NET Core MVC
The `Program.cs` file configures the application and sets up middleware.

```csharp
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();

var app = builder.Build();

app.MapControllerRoute(
    name: "default",
    pattern: "{Controller=Home}/{action=Index}/{id?}");

app.Run();
```

### Explanation
- `var builder = WebApplication.CreateBuilder(args);`
  - Initializes the web application builder.
  - Loads configuration settings and dependencies.

- `builder.Services.AddControllersWithViews();`
  - Registers MVC services in the dependency injection container.
  
- `var app = builder.Build();`
  - Builds the application pipeline.
  
- `app.MapControllerRoute(...)`
  - Configures the default routing pattern (`HomeController -> Index action`).
  
- `app.Run();`
  - Starts the web server.

## Interview Questions and Answers

### 1. What is MVC in ASP.NET Core?
**Answer:** MVC stands for Model-View-Controller. It is an architectural pattern that separates an application into three main components:
- **Model**: Manages the data and business logic.
- **View**: Displays the user interface.
- **Controller**: Handles user input and manages interaction between Model and View.

### 2. What is Kestrel in ASP.NET Core?
**Answer:** Kestrel is the default web server in ASP.NET Core. It is lightweight, fast, and cross-platform, supporting HTTPS, HTTP/2, and WebSockets.

### 3. What is the purpose of `builder.Services.AddControllersWithViews();`?
**Answer:** It registers the MVC framework services, enabling controllers and views to function in the application.

### 4. How does routing work in ASP.NET Core MVC?
**Answer:** Routing is configured in `Program.cs` using `app.MapControllerRoute()`, which maps URLs to controllers and actions based on defined patterns.

### 5. How do you create a new controller in ASP.NET Core MVC?
**Answer:** A new controller can be created inside the `Controllers` folder by inheriting from `Controller` and defining action methods.

Example:
```csharp
public class SampleController : Controller
{
    public IActionResult Demo()
    {
        return View();
    }
}
```

### 7. What are Razor views in ASP.NET Core?
**Answer:** Razor views are `.cshtml` files used to create dynamic web pages. They contain both HTML and C# code.


## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)

