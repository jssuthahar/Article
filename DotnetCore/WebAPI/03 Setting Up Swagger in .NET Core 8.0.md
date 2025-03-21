# Setting Up Swagger in .NET Core 8.0

## What is Swagger?
Swagger (now part of the OpenAPI specification) is a tool that helps developers document, test, and interact with APIs. It provides a user-friendly UI to explore API endpoints, send requests, and visualize responses without requiring a separate API client.

## Why Do We Need Swagger?
1. **API Documentation:** Automatically generates comprehensive documentation for your APIs.
2. **Interactive Testing:** Allows developers and testers to test API endpoints directly from a web browser.
3. **Improved Collaboration:** Helps frontend and backend teams understand API structures without needing to inspect code.
4. **Standardization:** Follows the OpenAPI standard, making integration with third-party tools easier.
5. **Security & Versioning:** Supports authentication mechanisms and versioning for better API management.

## How to Set Up Swagger in .NET Core 8.0

### Step 1: Install Swagger NuGet Package
Run the following command in your project directory to install Swagger support:
```sh
 dotnet add package Swashbuckle.AspNetCore
```

### Step 2: Configure Swagger in `Program.cs`
Modify the `Program.cs` file to configure Swagger:
```csharp
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Add Swagger services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "My API",
        Version = "v1",
        Description = "An API for demonstrating Swagger in .NET 8.0",
        Contact = new OpenApiContact
        {
            Name = "Your Name",
            Email = "your.email@example.com",
            Url = new Uri("https://yourwebsite.com")
        }
    });
});

var app = builder.Build();

// Enable Swagger only in Development mode
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "My API v1");
        options.RoutePrefix = string.Empty; // Set Swagger UI at root URL
    });
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
```

### Step 3: Run and Access Swagger UI
Run the application:
```sh
 dotnet run
```
Then, open your browser and navigate to:
```
 http://localhost:<port>/swagger
```
You will see an interactive UI listing all API endpoints.

## Advanced Configurations

### Adding Authentication to Swagger
If your API requires authentication, you can enable Swagger to send authentication tokens:
```csharp
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "Enter 'Bearer' followed by a space and your token."
    });
    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] {}
        }
    });
});
```

## Where to Use Swagger?
- **Development & Testing Environments**: Helps developers and testers to debug APIs.
- **API Documentation**: Serves as a reference for frontend teams, external developers, or clients.
- **Third-party Integrations**: External developers can use Swagger UI to understand your API and integrate it smoothly.

## Tips and Tricks
- **Customize Swagger UI Theme:** You can customize the look of Swagger UI by modifying CSS or using a custom theme.
- **Grouping Endpoints:** Use `[ApiExplorerSettings(GroupName = "v1")]` to group APIs in Swagger UI.
- **Use XML Comments:** Enable XML comments to provide additional descriptions for API methods. Add the following to `SwaggerGen` setup:
  ```csharp
  var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
  options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));
  ```
- **Filter Endpoints:** You can exclude certain endpoints from appearing in Swagger by using `[ApiExplorerSettings(IgnoreApi = true)]`.
- **Use API Versioning:** Implement API versioning to maintain backward compatibility and support multiple versions.
- **Secure Swagger UI in Production:** Disable Swagger in production or protect it with authentication to prevent unauthorized access.
  ```csharp
  if (!app.Environment.IsDevelopment())
  {
      app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API v1"));
  }
  ```

## Conclusion
Setting up Swagger in .NET Core 8.0 is simple and enhances API documentation, testing, and collaboration. With minimal effort, developers can create user-friendly, self-documenting APIs that improve development workflow and usability.
