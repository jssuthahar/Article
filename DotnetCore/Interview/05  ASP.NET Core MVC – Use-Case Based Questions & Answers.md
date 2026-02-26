

# 🔹 ASP.NET Core MVC – Use-Case Based Questions & Answers

---

## **1. Use Case: Creating a common layout for multiple pages**

**Question:**
You have multiple views like `Home`, `About`, and `Contact`. You want a **common header and footer** across all pages. How do you implement it?

**Answer:**

* Use `_Layout.cshtml` in **Views/Shared**
* Define common HTML structure: header, footer, navigation
* Use `@RenderBody()` for page-specific content

```csharp id="mvc1"
<!DOCTYPE html>
<html>
<head>
    <title>@ViewData["Title"]</title>
</head>
<body>
    <header>My Site Header</header>
    <main>@RenderBody()</main>
    <footer>My Site Footer</footer>
</body>
</html>
```

* In each view, set layout:

```csharp
@{
    Layout = "_Layout";
}
<h1>Home Page</h1>
```

**Key Points:**

* Layout avoids repeating HTML across pages
* Can define multiple layouts for different areas (Admin vs User)

---

## **2. Use Case: Passing small data from Controller to View**

**Question:**
You want to **pass a message** from the controller to the view without using a model. How?

**Answer:**

* Use **ViewBag** or **ViewData**

**ViewBag (dynamic):**

```csharp id="mvc2"
public IActionResult Index()
{
    ViewBag.Message = "Welcome to our site!";
    return View();
}

// In View
<h2>@ViewBag.Message</h2>
```

**ViewData (dictionary):**

```csharp
public IActionResult Index()
{
    ViewData["Message"] = "Welcome to our site!";
    return View();
}

// In View
<h2>@ViewData["Message"]</h2>
```

**Tip:**

* **ViewBag** uses dynamic, **ViewData** uses string-object dictionary
* Both are **short-lived**, only available in current request

---

## **3. Use Case: Sharing common namespaces and tag helpers in views**

**Question:**
You want all views to **automatically have access to models and custom tag helpers** without repeating `@using` or `@addTagHelper`. How?

**Answer:**

* Use `_ViewImports.cshtml` in `Views` folder:

```csharp id="mvc3"
@using MyApp.Models
@addTagHelper *, Microsoft.AspNetCore.Mvc.TagHelpers
```

* Now, all views automatically recognize `asp-for`, `asp-action`, etc.
* Avoids **repeating namespace and tag helper references** in every view

---

## **4. Use Case: Conditionally render content in a layout**

**Question:**
You want to show **Admin menu only for Admin users** in the shared layout. How?

**Answer:**

* Use **ViewBag or ClaimsPrincipal**

```csharp id="mvc4"
<header>
    <nav>
        <a href="/">Home</a>
        @if(User.IsInRole("Admin"))
        {
            <a href="/Admin">Admin</a>
        }
    </nav>
</header>
```

* You can set a flag in controller via ViewBag:

```csharp
ViewBag.IsAdmin = User.IsInRole("Admin");
```

---

## **5. Use Case: Maintaining small state between requests**

**Question:**
You want to **store temporary messages**, like “Data saved successfully” across redirect. How?

**Answer:**

* Use **TempData** (persists for one redirect)

```csharp id="mvc5"
public IActionResult Save()
{
    TempData["Message"] = "Data saved successfully!";
    return RedirectToAction("Index");
}

// In Index view
@if (TempData["Message"] != null)
{
    <div class="alert alert-success">@TempData["Message"]</div>
}
```

**Tip:**

* **TempData** uses session internally
* Ideal for **flash messages**, not for persistent state

---

## **6. Use Case: Using Tag Helpers for forms and links**

**Question:**
You want to create a **form with model binding and submit button** in Razor View. How?

**Answer:**

* TagHelpers make Razor views **clean and strongly typed**

```csharp id="mvc6"
<form asp-action="Create" method="post">
    <label asp-for="Name"></label>
    <input asp-for="Name" class="form-control" />
    <span asp-validation-for="Name" class="text-danger"></span>
    <button type="submit">Save</button>
</form>
```

* Advantages:

  * Model validation automatically applied
  * Generates proper HTML `id` and `name` attributes
  * Cleaner than HTML helpers

---

## **7. Use Case: Using Partial Views for reusable UI components**

**Question:**
You have a **product card UI** repeated on multiple pages. How can you reuse it?

**Answer:**

* Create `_ProductCard.cshtml` partial view

```csharp id="mvc7"
@model Product
<div class="card">
    <h3>@Model.Name</h3>
    <p>@Model.Price.ToString("C")</p>
</div>
```

* Include in parent view:

```csharp id="mvc8"
@foreach(var product in Model.Products)
{
    <partial name="_ProductCard" model="product" />
}
```

**Tip:**

* Partial views **reduce duplication**
* Supports **strongly typed models** for each component

---

## **8. Use Case: Strongly typed views and ViewModel usage**

**Question:**
You want to display **user profile** data in a view. How do you do it **safely and strongly typed**?

**Answer:**

* Create a **ViewModel**

```csharp id="mvc9"
public class UserProfileViewModel
{
    public string Name { get; set; }
    public string Email { get; set; }
}
```

* Controller:

```csharp id="mvc10"
public IActionResult Profile()
{
    var user = _userService.GetUser();
    var model = new UserProfileViewModel { Name = user.Name, Email = user.Email };
    return View(model);
}
```

* Razor view:

```csharp id="mvc11"
@model UserProfileViewModel
<h2>@Model.Name</h2>
<p>@Model.Email</p>
```

**Advantages:**

* Type-safe
* IntelliSense support in views
* Prevents accidentally exposing DB entities

---

## **9. Use Case: Layout with Sections**

**Question:**
You want the **footer or script section** to be **different on some pages**. How do you implement?

**Answer:**

* Use `@RenderSection()` in layout

```csharp id="mvc12"
<html>
<body>
    @RenderBody()
    @RenderSection("Scripts", required: false)
</body>
</html>
```

* In a view:

```csharp id="mvc13"
@section Scripts {
    <script src="custom.js"></script>
}
```

**Tip:**

* Sections are **optional or required** based on `required: true/false`
* Allows **custom content injection** without breaking layout

---

## **10. Use Case: Using ViewComponents for reusable logic**

**Question:**
You want a **recent products widget** that appears on multiple pages with **custom logic**. How?

**Answer:**

* Create **ViewComponent**

```csharp id="mvc14"
public class RecentProductsViewComponent : ViewComponent
{
    private readonly ProductService _service;
    public RecentProductsViewComponent(ProductService service) => _service = service;

    public async Task<IViewComponentResult> InvokeAsync()
    {
        var products = await _service.GetRecentProducts();
        return View(products);
    }
}
```

* In Razor view:

```csharp id="mvc15"
@await Component.InvokeAsync("RecentProducts")
```

**Advantages:**

* Encapsulates **UI + logic**
* Reusable in multiple views

---

### ✅ Key Takeaways:

| Concept       | Common Use Case                                           |
| ------------- | --------------------------------------------------------- |
| Layout        | Common header/footer across multiple pages                |
| ViewBag       | Pass small data from controller to view dynamically       |
| ViewData      | Dictionary-style data passing between controller and view |
| TempData      | Pass data across redirects (flash messages)               |
| ViewModel     | Strongly typed views for safety & IntelliSense            |
| PartialView   | Reusable UI components                                    |
| TagHelpers    | Strongly typed HTML generation for forms/links            |
| _ViewImports  | Global namespaces & tag helpers                           |
| Sections      | Page-specific content in layout                           |
| ViewComponent | Reusable logic + UI widgets                               |

