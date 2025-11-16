
#  Create .NET Core App with MVC + Azure SQL Registration Using ADO.NET

## **📌 1. Create a New .NET Core Empty Project**

```bash
dotnet new web -n MyMvcApp
cd MyMvcApp
```

This creates a **minimal empty web project** (no MVC added yet).

---

## **📌 2. Add MVC Dependencies**

Run this command to add MVC support:

```bash
dotnet add package Microsoft.AspNetCore.Mvc
```

Or in `.csproj`, ensure:

```xml
<ItemGroup>
  <FrameworkReference Include="Microsoft.AspNetCore.App" />
</ItemGroup>
```

---

## **📌 3. Update `Program.cs` to Enable MVC**

Replace **Program.cs** with the following:

```csharp
var builder = WebApplication.CreateBuilder(args);

// Add MVC services
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Enable static files
app.UseStaticFiles();

// Enable routing + MVC
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"
);

app.Run();
```

---

## **📌 4. Create MVC Folder Structure**

Inside project:

```
/Controllers
/Views
/Views/Home
/wwwroot
/Models
```

---

## **📌 5. Add a Controller**

Create `Controllers/HomeController.cs`:

```csharp
using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Register()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Register(UserModel model)
    {
        if (ModelState.IsValid)
        {
            // Save to Azure SQL (ADO.NET)
            DatabaseHelper.RegisterUser(model);
            return RedirectToAction("Index");
        }
        return View(model);
    }
}
```

---

## **📌 6. Add a Simple View**

Create `Views/Home/Index.cshtml`:

```html
<h1>Welcome to My MVC App</h1>
<a href="/Home/Register">Register User</a>
```

Create `Views/Home/Register.cshtml`:

```html
<h2>User Registration</h2>

<form method="post">
    <label>Name</label>
    <input type="text" name="Name" required />

    <label>Email</label>
    <input type="email" name="Email" required />

    <label>Password</label>
    <input type="password" name="Password" required />

    <button type="submit">Register</button>
</form>
```

---

## **📌 7. Create User Model**

Create `Models/UserModel.cs`:

```csharp
public class UserModel
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
}
```

---

## **📌 8. Connect to Azure SQL Using ADO.NET**

### Add Connection String in `appsettings.json`

```json
{
  "ConnectionStrings": {
    "AzureSql": "Server=tcp:your-server.database.windows.net,1433;Database=your-db;User ID=your-user;Password=your-password;Encrypt=True;"
  }
}
```

---

## **📌 9. Create ADO.NET Helper Class**

Create `DatabaseHelper.cs`:

```csharp
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;

public static class DatabaseHelper
{
    private static string GetConnectionString()
    {
        var config = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json")
            .Build();

        return config.GetConnectionString("AzureSql");
    }

    public static void RegisterUser(UserModel user)
    {
        string query = "INSERT INTO Users (Name, Email, Password) VALUES (@Name, @Email, @Password)";

        using (SqlConnection con = new SqlConnection(GetConnectionString()))
        using (SqlCommand cmd = new SqlCommand(query, con))
        {
            cmd.Parameters.AddWithValue("@Name", user.Name);
            cmd.Parameters.AddWithValue("@Email", user.Email);
            cmd.Parameters.AddWithValue("@Password", user.Password);

            con.Open();
            cmd.ExecuteNonQuery();
        }
    }
}
```

---

## **📌 10. Azure SQL Table Script**

Run this in Azure SQL:

```sql
CREATE TABLE Users (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100),
    Email NVARCHAR(100),
    Password NVARCHAR(100)
);
```

---

## **📌 11. Run the Application**

```bash
dotnet run
```

Navigate to:

```
https://localhost:5001
```

---

### 🔔 Stay Updated with My Latest Projects

If you enjoy:
- 🧠 AI agents and automation
- 🛠️ Practical tools and utilities
- 📘 Developer tutorials and guides
- 🚀 End-to-end project templates

👉 Then **[Follow me on GitHub](https://github.com/jssuthahar)** to get notified about new repos, ideas, and updates!

[![Follow Me](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)

## ⭐ Start & Follow Me
If you find this repository useful, don't forget to **Star** ⭐ the repo and **Follow** me for more updates!

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)


