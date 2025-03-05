# Shared Login View

This project contains a shared **Login** view that is used by both `HomeController` and `ProductController`.

## 📁 File Structure

```
/Views
 ├── /Shared
 │    ├── _Layout.cshtml
 │    ├── Login.cshtml   <-- Shared Login View
 ├── /Home
 │    ├── (No Login.cshtml here)
 ├── /Product
 │    ├── (No Login.cshtml here)
```

## 📌 Controllers and Action Methods

### **HomeController.cs**
```csharp
public class HomeController : Controller
{
    public IActionResult Login()
    {
        return View(); // Since there's no Login.cshtml in /Home, it takes from /Shared
    }
}
```

### **ProductController.cs**
```csharp
public class ProductController : Controller
{
    public IActionResult Login()
    {
        return View(); // Since there's no Login.cshtml in /Product, it takes from /Shared
    }
}
```

## 🖥️ Shared Login View (`Views/Shared/Login.cshtml`)

```html
@{
    Layout = "~/Views/Shared/_Layout.cshtml"; // Optional layout
}

<h2>Login</h2>
<form method="post">
    <label>Username:</label>
    <input type="text" name="username" required />
    
    <label>Password:</label>
    <input type="password" name="password" required />
    
    <button type="submit">Login</button>
</form>
```

## 🔍 Explanation

1. **Shared View Concept**  
   - The `Login.cshtml` file is placed inside the `Views/Shared/` folder.
   - Since there is no `Login.cshtml` in `Views/Home/` or `Views/Product/`, ASP.NET Core automatically looks in `Views/Shared/`.

2. **Returning the Shared View**
   - The `Login()` action methods in both controllers use `return View();`, allowing them to automatically use the shared `Login.cshtml`.

3. **Why Use Shared Views?**  
   - Reduces redundancy.
   - Maintains consistency across different controllers.
   - Easier to update in one place rather than multiple copies.

---

This setup ensures efficient code management and a consistent login experience across different controllers. 🚀

