# 1. What is .NET?

.NET is a software development platform from Microsoft used to build different types of applications.

Using .NET, we can develop:

* Web applications
* Web APIs
* Desktop applications
* Mobile applications
* Cloud applications
* Console applications
* Microservices

Example technologies:

```text
.NET
├── ASP.NET Core
├── .NET MAUI
├── WPF
├── Windows Forms
└── Console Applications
```

---

# 2. What is .NET Core?

.NET Core was Microsoft's cross-platform implementation of .NET.

It was designed to run on:

```text
Windows
Linux
macOS
```

Modern versions are simply called **.NET**, such as:

```text
.NET 6
.NET 7
.NET 8
.NET 9
.NET 10
```

The name ".NET Core" was mainly used for earlier versions.

### Interview Answer

> .NET Core is a cross-platform, open-source development platform used to build web, API, desktop, cloud, and other applications. Modern versions are called .NET.

---

# 3. What is ASP.NET Core?

ASP.NET Core is a framework built on .NET for developing web applications and APIs.

We can build:

* MVC applications
* Web APIs
* Razor Pages applications
* Minimal APIs
* Real-time applications using SignalR

Example:

```text
Browser
   ↓
ASP.NET Core Application
   ↓
Controller / Razor Page / API
   ↓
Service
   ↓
Database
```

---

# 4. What is the difference between .NET and ASP.NET Core?

| .NET                                 | ASP.NET Core                              |
| ------------------------------------ | ----------------------------------------- |
| Development platform                 | Web framework                             |
| Used for many application types      | Mainly used for web applications and APIs |
| Base platform                        | Built on .NET                             |
| Supports console, desktop, web, etc. | MVC, Web API, Razor Pages, etc.           |

Simple answer:

> .NET is the platform, while ASP.NET Core is the web development framework built on top of .NET.

---

# 5. What is a Web Application?

A web application is an application accessed through a web browser.

Examples:

```text
Amazon
Facebook
Banking websites
Student management systems
Shopping applications
```

Typical architecture:

```text
Browser
   ↓
Web Server
   ↓
ASP.NET Core
   ↓
Business Logic
   ↓
Database
```

---

# 6. What is MVC?

MVC stands for:

```text
M = Model
V = View
C = Controller
```

### Model

Represents application data.

```csharp
public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
}
```

### View

Displays the UI.

```cshtml
<h1>@Model.Name</h1>
```

### Controller

Handles requests.

```csharp
public IActionResult Index()
{
    return View();
}
```

---

# 7. Explain MVC Request Flow

Suppose the user opens:

```text
/Product/Details/10
```

The flow can be:

```text
Browser
   ↓
Routing
   ↓
ProductController
   ↓
Details(10)
   ↓
Service / Database
   ↓
Product Model
   ↓
Details.cshtml
   ↓
HTML
   ↓
Browser
```

---

# 8. What is a Controller?

A Controller handles HTTP requests and decides what response should be returned.

Example:

```csharp
public class ProductController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
```

The Controller name normally ends with:

```text
Controller
```

Example:

```text
ProductController
StudentController
EmployeeController
OrderController
```

---

# 9. What is an Action Method?

A public method in a Controller that handles a request is called an Action Method.

```csharp
public IActionResult Details(int id)
{
    return View();
}
```

Here:

```text
Details()
```

is the Action Method.

---

# 10. What is IActionResult?

`IActionResult` represents the result returned by a Controller Action.

Examples:

```csharp
return View();
```

```csharp
return Json(data);
```

```csharp
return RedirectToAction("Index");
```

```csharp
return NotFound();
```

```csharp
return BadRequest();
```

---

# 11. What is a View?

A View is responsible for displaying the UI.

MVC Views usually use:

```text
.cshtml
```

Example:

```text
Views
└── Product
    ├── Index.cshtml
    ├── Details.cshtml
    ├── Create.cshtml
    └── Edit.cshtml
```

---

# 12. What is Razor?

Razor is a syntax that allows C# code to be written inside HTML.

Example:

```cshtml
<h1>Student Details</h1>

@{
    var name = "John";
}

<p>Student Name: @name</p>
```

The `@` symbol is used to move from HTML into C# code.

---

# 13. What is a Strongly Typed View?

A strongly typed View specifies the Model type using:

```cshtml
@model
```

Example:

```cshtml
@model Student

<h1>@Model.Name</h1>
```

Controller:

```csharp
public IActionResult Details()
{
    Student student = new Student
    {
        Name = "John"
    };

    return View(student);
}
```

This provides better compile-time checking compared with dynamic data such as ViewBag.

---

# 14. What is ViewBag?

ViewBag is a dynamic object used to pass data from Controller to View during the current request.

Controller:

```csharp
public IActionResult Index()
{
    ViewBag.Message = "Welcome to DevBrains";

    return View();
}
```

View:

```cshtml
<h1>@ViewBag.Message</h1>
```

Output:

```text
Welcome to DevBrains
```

---

# 15. What is ViewData?

ViewData is a dictionary used to pass data from Controller to View.

Controller:

```csharp
ViewData["Message"] = "Welcome";
```

View:

```cshtml
<h1>@ViewData["Message"]</h1>
```

---

# 16. ViewBag vs ViewData

| ViewBag            | ViewData           |
| ------------------ | ------------------ |
| Dynamic            | Dictionary         |
| `ViewBag.Name`     | `ViewData["Name"]` |
| Easier syntax      | Key-value syntax   |
| Current request    | Current request    |
| Not strongly typed | Not strongly typed |

Example:

```csharp
ViewBag.Name = "John";

ViewData["Name"] = "John";
```

---

# 17. What is TempData?

`TempData` is used to pass data between requests, commonly after a redirect.

Example:

```csharp
public IActionResult Save()
{
    TempData["Message"] = "Student saved successfully";

    return RedirectToAction("Index");
}
```

Then:

```cshtml
@TempData["Message"]
```

### Common scenario

After saving:

```text
POST /Student/Create
       ↓
Save database
       ↓
Redirect /Student/Index
       ↓
Display success message
```

TempData is useful for the success message.

---

# 18. ViewBag vs ViewData vs TempData

| Feature          | ViewBag       | ViewData      | TempData          |
| ---------------- | ------------- | ------------- | ----------------- |
| Current request  | Yes           | Yes           | Yes               |
| Survive redirect | No            | No            | Yes               |
| Dynamic          | Yes           | No            | No                |
| Dictionary       | No            | Yes           | Yes               |
| Common use       | Small UI data | Small UI data | Redirect messages |

---

# 19. What is `_Layout.cshtml`?

A Layout is a common UI template used by multiple Views.

Example:

```text
Header
Navigation
Content
Footer
```

Example:

```cshtml
<html>
<body>

<header>
    My Application
</header>

<nav>
    Home | Products | Students
</nav>

<main>
    @RenderBody()
</main>

<footer>
    Copyright 2026
</footer>

</body>
</html>
```

---

# 20. What is `@RenderBody()`?

`@RenderBody()` defines where the current View content should be inserted.

Layout:

```cshtml
<main>
    @RenderBody()
</main>
```

View:

```cshtml
<h1>Product List</h1>
```

Final HTML conceptually becomes:

```html
<main>
    <h1>Product List</h1>
</main>
```

---

# 21. What is `@RenderSection()`?

It allows a View to provide additional content to a specific section in the Layout.

Layout:

```cshtml
@RenderSection("Scripts", required: false)
```

View:

```cshtml
@section Scripts
{
    <script>
        console.log("Product page");
    </script>
}
```

---

# 22. What is `_ViewStart.cshtml`?

`_ViewStart.cshtml` contains common Razor View configuration.

A common use is specifying the Layout.

```cshtml
@{
    Layout = "_Layout";
}
```

Instead of writing this in every View, we can configure it once.

---

# 23. Why do we need `_ViewStart.cshtml`?

Suppose we have:

```text
100 Views
```

Without ViewStart, we might repeatedly specify:

```cshtml
@{
    Layout = "_Layout";
}
```

With ViewStart:

```text
_ViewStart.cshtml
        ↓
All applicable Views
```

This reduces duplication.

---

# 24. Can a View override `_ViewStart.cshtml`?

Yes.

`_ViewStart.cshtml`:

```cshtml
@{
    Layout = "_Layout";
}
```

Specific View:

```cshtml
@{
    Layout = "_AdminLayout";
}
```

The View can use its own Layout.

---

# 25. What is `_ViewImports.cshtml`?

`_ViewImports.cshtml` contains common Razor directives.

Example:

```cshtml
@using MyApplication.Models
@using MyApplication.Services

@addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers
```

This avoids repeating imports in every View.

---

# 26. `_ViewStart` vs `_ViewImports`

| `_ViewStart.cshtml`        | `_ViewImports.cshtml`   |
| -------------------------- | ----------------------- |
| View startup configuration | Common Razor directives |
| Commonly specifies Layout  | `@using`                |
| Layout configuration       | Tag Helpers             |
| View initialization        | Namespace imports       |

Easy way to remember:

```text
ViewStart  → Layout / startup
ViewImports → Imports / directives
```

---

# 27. What is ViewState?

This is an important interview question.

**ViewState is an ASP.NET Web Forms feature. It is not a built-in feature of ASP.NET Core MVC.**

ASP.NET Core MVC does not have Web Forms ViewState.

If an interviewer asks:

> Does ASP.NET Core MVC support ViewState?

Answer:

> No. ViewState belongs to ASP.NET Web Forms. ASP.NET Core MVC uses mechanisms such as Models, ViewData, ViewBag, TempData, Session, Cookies, and other state-management approaches depending on the requirement.

---

# 28. What are Tag Helpers?

Tag Helpers allow server-side functionality to be represented using HTML-like syntax in Razor Views.

Example:

```html
<a asp-controller="Product"
   asp-action="Details"
   asp-route-id="10">
   Details
</a>
```

ASP.NET Core generates the appropriate link.

---

# 29. What is `asp-controller`?

It specifies the Controller.

```html
<a asp-controller="Product"
   asp-action="Index">
   Products
</a>
```

This targets:

```text
ProductController
```

---

# 30. What is `asp-action`?

It specifies the Action Method.

```html
<a asp-controller="Product"
   asp-action="Details">
   Details
</a>
```

---

# 31. What is `asp-route-id`?

It passes a route value.

```html
<a asp-controller="Product"
   asp-action="Details"
   asp-route-id="10">
   Details
</a>
```

Depending on routing configuration, the URL can be:

```text
/Product/Details/10
```

---

# 32. What is `asp-for`?

`asp-for` binds an HTML element to a Model property.

Model:

```csharp
public class Student
{
    public string Name { get; set; }
}
```

View:

```cshtml
<input asp-for="Name" />
```

The Tag Helper generates appropriate HTML attributes.

---

# 33. What is Model Binding?

Model Binding automatically maps incoming HTTP request values to C# parameters or Model properties.

Example:

```text
/student/details?id=10
```

Controller:

```csharp
public IActionResult Details(int id)
{
    // id = 10
    return View();
}
```

ASP.NET Core maps the request value to:

```csharp
int id
```

---

# 34. What is Routing?

Routing determines which endpoint should handle a request.

Example:

```text
/Product/Details/10
```

can map to:

```text
ProductController
        ↓
Details(int id)
```

---

# 35. What is Conventional Routing?

A common MVC route pattern is:

```text
{controller}/{action}/{id?}
```

Example:

```text
/Product/Details/10
```

maps approximately to:

```text
Controller = Product
Action     = Details
id         = 10
```

---

# 36. What is Attribute Routing?

Attribute routing defines routes directly on Controllers or Actions.

Example:

```csharp
[Route("products")]
public class ProductController : Controller
{
    [HttpGet("details/{id}")]
    public IActionResult Details(int id)
    {
        return View();
    }
}
```

---

# 37. What is Middleware?

Middleware is software that participates in processing HTTP requests and responses.

Example pipeline:

```text
Request
   ↓
Exception Handling
   ↓
HTTPS
   ↓
Authentication
   ↓
Authorization
   ↓
Routing
   ↓
Controller
   ↓
Response
```

---

# 38. Why is Middleware important?

Middleware can be used for:

* Exception handling
* Authentication
* Authorization
* Logging
* HTTPS
* Static files
* Routing
* Custom request processing

---

# 39. What is Dependency Injection?

Dependency Injection, or DI, is a technique for providing dependencies to a class instead of creating them directly inside the class.

Without DI:

```csharp
public class StudentController : Controller
{
    private StudentService service = new StudentService();
}
```

With DI:

```csharp
public class StudentController : Controller
{
    private readonly StudentService _service;

    public StudentController(StudentService service)
    {
        _service = service;
    }
}
```

ASP.NET Core has built-in Dependency Injection support.

---

# 40. What are DI Service Lifetimes?

The common service lifetimes are:

```text
Transient
Scoped
Singleton
```

### Transient

Creates a new instance each time it is requested.

### Scoped

Usually one instance per HTTP request.

### Singleton

One instance for the application's lifetime.

---

# 41. What is Configuration in ASP.NET Core?

Configuration allows application settings to be stored outside application code.

Common sources include:

```text
appsettings.json
Environment Variables
User Secrets
Command-line arguments
Other configuration providers
```

Example:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "..."
  }
}
```

---

# 42. What is `appsettings.json`?

It is commonly used to store application configuration.

Example:

```json
{
  "AppSettings": {
    "ApplicationName": "Student Portal"
  }
}
```

Configuration can then be accessed through ASP.NET Core's configuration system.

---

# 43. What is `Program.cs`?

`Program.cs` is the application's startup/configuration entry point in modern ASP.NET Core applications.

It commonly contains:

* Service registration
* Middleware pipeline configuration
* Application startup

Example:

```csharp
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

var app = builder.Build();

app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
```

---

# 44. What is `wwwroot`?

`wwwroot` is commonly used for static files.

Examples:

```text
wwwroot
├── css
├── js
├── images
└── favicon.ico
```

These files can be served directly to the browser when static-file middleware is configured.

---

# 45. What is a Model?

A Model represents application data.

Example:

```csharp
public class Product
{
    public int Id { get; set; }

    public string Name { get; set; }

    public decimal Price { get; set; }
}
```

---

# 46. What is a ViewModel?

A ViewModel is a class designed specifically for a View.

Suppose the database Product has:

```text
Id
Name
Price
CostPrice
InternalCode
CreatedDate
```

But the UI needs only:

```text
Name
Price
```

We can create:

```csharp
public class ProductViewModel
{
    public string Name { get; set; }

    public decimal Price { get; set; }
}
```

This prevents unnecessary database/domain information from being directly exposed to the View.

---

# 47. Why use ViewModels?

ViewModels can provide:

* Cleaner UI models
* Separation of concerns
* Validation
* Reduced data exposure
* Better maintainability
* Different models for different screens

---

# 48. What is Validation?

ASP.NET Core supports model validation using validation attributes.

Example:

```csharp
public class Student
{
    [Required]
    public string Name { get; set; }

    [EmailAddress]
    public string Email { get; set; }
}
```

View:

```cshtml
<input asp-for="Name" />
<span asp-validation-for="Name"></span>
```

---

# 49. What is `ModelState`?

`ModelState` contains information about model binding and validation.

Example:

```csharp
if (!ModelState.IsValid)
{
    return View(model);
}
```

If validation fails, the View can be returned with validation messages.

---

# 50. What is a Partial View?

A Partial View is a reusable piece of UI.

Example:

```text
Views
└── Shared
    └── _StudentCard.cshtml
```

It could contain:

```cshtml
<div>
    <h3>@Model.Name</h3>
</div>
```

Partial Views are useful for reusable UI components.

---

# 51. Logical Question: ViewBag

Controller:

```csharp
public IActionResult Index()
{
    ViewBag.Name = "John";
    return View();
}
```

View:

```cshtml
<h1>@ViewBag.Name</h1>
```

### What is the output?

Answer:

```text
John
```

---

# 52. Logical Question: ViewData

Controller:

```csharp
ViewData["Name"] = "John";
```

View:

```cshtml
@ViewData["Name"]
```

### Output?

```text
John
```

---

# 53. Logical Question: Different Values

Controller:

```csharp
ViewBag.Name = "John";
ViewData["Name"] = "David";
```

View:

```cshtml
@ViewBag.Name
@ViewData["Name"]
```

### Output?

```text
John
David
```

They are separate storage mechanisms.

---

# 54. Logical Question: ViewStart

`_ViewStart.cshtml`:

```cshtml
@{
    Layout = "_Layout";
}
```

View:

```cshtml
@{
    Layout = "_AdminLayout";
}
```

### Which Layout is used?

Answer:

```text
_AdminLayout
```

The View overrides the Layout setting.

---

# 55. Logical Question: RenderBody

Layout:

```cshtml
<header>
    Header
</header>

@RenderBody()

<footer>
    Footer
</footer>
```

View:

```cshtml
<h1>Products</h1>
```

### Result?

```text
Header
Products
Footer
```

---

# 56. Logical Question: ViewBag After Redirect

Controller:

```csharp
public IActionResult Save()
{
    ViewBag.Message = "Saved";

    return RedirectToAction("Index");
}
```

Will `Index` automatically receive `ViewBag.Message`?

### Answer

No.

`RedirectToAction()` creates a new request.

ViewBag belongs to the original request.

For a simple message across the redirect, `TempData` is commonly used:

```csharp
TempData["Message"] = "Saved";
return RedirectToAction("Index");
```

---

# 57. Logical Question: ViewState

Interviewer:

> I want to use ViewState in ASP.NET Core MVC. How do you enable it?

Answer:

> ViewState is an ASP.NET Web Forms feature and is not available as a built-in ASP.NET Core MVC feature. I would choose an appropriate state-management mechanism such as Model, TempData, Session, Cookies, or database depending on the requirement.

---

# 58. Logical Question: ViewModel

Suppose your database contains:

```text
Employee
----------------
Id
Name
Email
Salary
PasswordHash
InternalNotes
```

But the UI only needs:

```text
Name
Email
```

Should you send the entire Employee object to the View?

### Answer

Prefer a ViewModel:

```csharp
public class EmployeeViewModel
{
    public string Name { get; set; }

    public string Email { get; set; }
}
```

This keeps the View model focused on what the UI actually needs.

---

# 59. Logical Question: Controller Flow

User requests:

```text
/Student/Details/25
```

What should happen?

Possible flow:

```text
Browser
   ↓
Routing
   ↓
StudentController
   ↓
Details(25)
   ↓
Service
   ↓
Database
   ↓
Student
   ↓
ViewModel
   ↓
View
   ↓
HTML
```

---

# 60. Logical Question: Tag Helper

Given:

```csharp
public IActionResult Edit(int id)
{
    return View();
}
```

Create a link for Product ID `25`.

Answer:

```html
<a asp-controller="Product"
   asp-action="Edit"
   asp-route-id="25">
    Edit
</a>
```

---

# 61. Logical Question: `asp-for`

Model:

```csharp
public class Student
{
    public string Name { get; set; }
}
```

How do you create the input?

Answer:

```cshtml
@model Student

<input asp-for="Name" />
```

---

# 62. Beginner Interview Questions

1. What is .NET?
2. What is ASP.NET Core?
3. What is MVC?
4. What is a Controller?
5. What is an Action?
6. What is a View?
7. What is a Model?
8. What is Razor?
9. What is a `.cshtml` file?
10. What is `IActionResult`?
11. What is Routing?
12. What is Model Binding?
13. What is ViewBag?
14. What is ViewData?
15. What is TempData?
16. What is `_Layout.cshtml`?
17. What is `_ViewStart.cshtml`?
18. What is `_ViewImports.cshtml`?
19. What is `@RenderBody()`?
20. What is a Tag Helper?

---

# 63. Intermediate Interview Questions

1. What is Dependency Injection?
2. What are Transient, Scoped, and Singleton?
3. What is Middleware?
4. What is the Middleware Pipeline?
5. What is Configuration?
6. What is `appsettings.json`?
7. What is `Program.cs`?
8. What is `wwwroot`?
9. What is Model Binding?
10. What is Model Validation?
11. What is ModelState?
12. What is a ViewModel?
13. What is a Partial View?
14. What is Attribute Routing?
15. What is Conventional Routing?
16. What are Tag Helpers?
17. What is `asp-for`?
18. What is `asp-action`?
19. What is `asp-controller`?
20. What is `asp-route-id`?

---

# 64. Experienced Interview Questions

1. Explain the complete ASP.NET Core request pipeline.
2. Explain Middleware ordering.
3. Explain Dependency Injection lifetimes.
4. Why should Singleton services be used carefully?
5. Explain Model Binding.
6. Explain Model Validation.
7. Explain MVC request lifecycle.
8. Explain conventional vs attribute routing.
9. Explain ViewBag, ViewData, and TempData.
10. Why would you prefer ViewModel over ViewBag?
11. Explain `_ViewStart.cshtml`.
12. Explain `_ViewImports.cshtml`.
13. Explain Layout and Partial Views.
14. Explain Razor Pages vs MVC.
15. Explain `OnGet()` and `OnPost()`.
16. How would you handle global exception handling?
17. How would you implement authentication and authorization?
18. How would you store application configuration?
19. How would you design a large MVC application?
20. How would you separate Controller, Service, Repository, and Database responsibilities?

---

# 65. Real-Time Scenario Questions

### Scenario 1 — Shopping Website

You are developing an e-commerce application.

The user opens:

```text
/Product/Details/100
```

Explain the complete flow.

Expected answer:

```text
Browser
 ↓
Routing
 ↓
ProductController
 ↓
Details(100)
 ↓
ProductService
 ↓
Database
 ↓
Product
 ↓
ProductViewModel
 ↓
Details.cshtml
 ↓
HTML
 ↓
Browser
```

---

### Scenario 2 — Login Success Message

User logs in successfully and is redirected to Dashboard.

You want to display:

```text
Login successful
```

Which mechanism can you use?

Answer:

```text
TempData
```

Example:

```csharp
TempData["Message"] = "Login successful";

return RedirectToAction("Index", "Dashboard");
```

---

### Scenario 3 — Common Website Header

The application has:

```text
Header
Menu
Footer
```

which are common to all pages.

What would you use?

Answer:

```text
_Layout.cshtml
```

---

### Scenario 4 — Different Admin UI

Admin pages need a different menu.

What could you use?

Answer:

```text
_AdminLayout.cshtml
```

and configure the Admin Views to use that Layout.

---

### Scenario 5 — Reusable Student Card

You display the same Student Card on multiple pages.

What can you use?

Answer:

```text
Partial View
```

---

### Scenario 6 — Large Student Form

A Student form contains:

```text
Name
Email
Phone
DateOfBirth
Course
Address
```

Would you create many ViewBag properties?

Answer:

> Prefer a strongly typed ViewModel because the data represents a structured object.

---

# 66. Important Interview Trick Questions

### Question

Is ViewState available in ASP.NET Core MVC?

**Answer:**

No.

---

### Question

Is ViewBag strongly typed?

**Answer:**

No.

---

### Question

Is ViewData strongly typed?

**Answer:**

No.

---

### Question

Can ViewBag survive a redirect?

**Answer:**

Normally no.

---

### Question

Which is commonly used to pass a message across a redirect?

**Answer:**

TempData.

---

### Question

Which file commonly defines the default Layout?

**Answer:**

`_ViewStart.cshtml`

---

### Question

Which file contains common Razor imports?

**Answer:**

`_ViewImports.cshtml`

---

### Question

Which file provides the common UI structure?

**Answer:**

`_Layout.cshtml`

---

### Question

Where does View content get inserted into the Layout?

**Answer:**

`@RenderBody()`

---

### Question

What is used to bind an HTML element to a Model property?

**Answer:**

`asp-for`

---

### Question

What is used to specify a Controller in a Tag Helper?

**Answer:**

`asp-controller`

---

### Question

What is used to specify an Action?

**Answer:**

`asp-action`

---

# 67. One-Minute Revision

Remember this flow:

```text
                 ASP.NET CORE
                      │
          ┌───────────┴───────────┐
          │                       │
         MVC                 Razor Pages
          │                       │
    ┌─────┼─────┐           Page + PageModel
    │     │     │
 Model Controller View
              │
              ├── Razor
              ├── ViewBag
              ├── ViewData
              ├── TempData
              ├── Layout
              ├── ViewStart
              ├── ViewImports
              └── Tag Helpers
```

Request flow:

```text
Browser
   ↓
Middleware
   ↓
Routing
   ↓
Controller
   ↓
Service
   ↓
Database
   ↓
Model / ViewModel
   ↓
View
   ↓
Razor
   ↓
HTML
   ↓
Browser
```

The most important concepts to understand for a beginner interview are:

```text
.NET
ASP.NET Core
MVC
Controller
Action
Model
View
Razor
Routing
Model Binding
ViewBag
ViewData
TempData
Layout
_ViewStart
_ViewImports
Tag Helpers
Dependency Injection
Middleware
Configuration
Validation
ViewModel
Razor Pages
```
