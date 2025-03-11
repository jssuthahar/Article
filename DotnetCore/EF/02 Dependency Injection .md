# Dependency Injection in .NET

## What is Dependency Injection (DI)?
Dependency Injection (DI) is a design pattern used in .NET to manage object dependencies. Instead of creating objects directly within a class, dependencies are injected into the class from an external source. This promotes loose coupling and makes applications more modular, maintainable, and testable.

## Why Use Dependency Injection?
- **Loose Coupling**: Reduces direct dependencies between classes, making the code easier to modify and extend.
- **Improved Testability**: Facilitates unit testing by allowing mock dependencies to be injected.
- **Easier Maintenance**: Dependencies can be changed without modifying the dependent classes.
- **Better Code Organization**: Encourages separation of concerns by injecting services rather than instantiating them directly.

## Where is Dependency Injection Used?
DI is widely used in:
- ASP.NET Core applications for injecting services into controllers, middleware, and other components.
- Console applications to manage dependencies efficiently.
- Desktop applications using frameworks like WPF.

## DI Service Lifetimes in .NET
.NET provides three types of service lifetimes when registering dependencies:

1. **AddTransient**: Creates a new instance every time it is requested.
   ```csharp
   builder.Services.AddTransient<IMessageService, MessageService>();
   ```
   - Best for lightweight, stateless services.
   - Example: Logging services, utility classes.

2. **AddScoped**: Creates a single instance per request (scope).
   ```csharp
   builder.Services.AddScoped<IMessageService, MessageService>();
   ```
   - Best for services that should maintain state during a request.
   - Example: Database context in a web API.

3. **AddSingleton**: Creates a single instance throughout the application’s lifetime.
   ```csharp
   builder.Services.AddSingleton<IMessageService, MessageService>();
   ```
   - Best for services that must persist and be shared across requests.
   - Example: Configuration settings, caching services.

## Example: Implementing Dependency Injection in .NET
### Step 1: Create an Interface
```csharp
public interface IMessageService
{
    string GetMessage();
}
```

### Step 2: Implement the Interface
```csharp
public class MessageService : IMessageService
{
    public string GetMessage()
    {
        return "Hello from Dependency Injection!";
    }
}
```

### Step 3: Register Service in `Program.cs`
```csharp
var builder = WebApplication.CreateBuilder(args);

// Registering Dependency
builder.Services.AddScoped<IMessageService, MessageService>();

var app = builder.Build();

app.MapControllers();
app.Run();
```

### Step 4: Inject Service into a Controller
```csharp
[ApiController]
[Route("api/[controller]")]
public class MessageController : ControllerBase
{
    private readonly IMessageService _messageService;

    public MessageController(IMessageService messageService)
    {
        _messageService = messageService;
    }

    [HttpGet]
    public IActionResult GetMessage()
    {
        return Ok(_messageService.GetMessage());
    }
}
```

## Advantages of Dependency Injection in .NET
- **Scalability**: Services can be easily replaced or extended.
- **Code Reusability**: Common functionalities can be shared across multiple components.
- **Improved Maintainability**: Changes in dependencies do not require changes in consuming classes.
- **Configuration Management**: Services can be configured centrally in `Program.cs`.

## Interview Questions and Answers

### Q1: What is Dependency Injection?
**A**: Dependency Injection is a design pattern that allows objects to receive their dependencies from an external source rather than creating them internally, promoting loose coupling and testability.

### Q2: What are the different types of Dependency Injection in .NET?
**A**: There are three main types:
   - **Constructor Injection** (Most common)
   - **Property Injection**
   - **Method Injection**

### Q3: What is the difference between Transient, Scoped, and Singleton services?
**A**:
   - **Transient**: New instance every time it’s requested.
   - **Scoped**: Single instance per request scope.
   - **Singleton**: Single instance for the application’s lifetime.

### Q4: When should you use AddSingleton, AddScoped, and AddTransient?
**A**:
   - **AddSingleton**: For services that need to be shared and maintained across the application (e.g., caching, configuration services).
   - **AddScoped**: For services that need to maintain state during a single request (e.g., database context in a web API).
   - **AddTransient**: For lightweight, stateless services (e.g., logging, helper utilities).

### Q5: Can a Scoped service be injected into a Singleton?
**A**: No, injecting a Scoped service into a Singleton can cause unintended behavior, as the Scoped instance may not be valid when accessed outside its original request scope.

## Conclusion
Dependency Injection is a fundamental pattern in .NET, enabling better design and maintainability. It is essential for building scalable and testable applications, particularly in ASP.NET Core. By using DI, developers can achieve a cleaner architecture and improved code management.

