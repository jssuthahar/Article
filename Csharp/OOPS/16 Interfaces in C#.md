### ✅  Interfaces in C#


# 🌐 Interfaces in C#

## 📘 What is an Interface?

An **interface** in C# defines a **contract** that classes or structs must follow. It contains only the **declaration of methods, properties, events, or indexers**, but **no implementation** (until C# 8.0 where default implementation is allowed).

```csharp
public interface IShape
{
    double GetArea();
}
```

A class that implements this interface must provide the implementation:

```csharp
public class Circle : IShape
{
    public double Radius { get; set; }
    public double GetArea() => Math.PI * Radius * Radius;
}
```

---

## ❓ Why Use Interfaces?

| Benefit             | Description |
|---------------------|-------------|
| 🔄 **Polymorphism** | Interchangeable implementations |
| 🧪 **Testability**  | Easily mock dependencies in unit tests |
| 🧱 **Abstraction**  | Separate interface from implementation |
| ♻️ **Loose Coupling** | Reduces tight dependency between classes |
| 💡 **Multiple Inheritance** | C# supports multiple interfaces but only single inheritance |
| 💉 **Dependency Injection** | Common practice to inject services by interface |

---

## 🔧 How to Use an Interface?

### 1. Define the Interface

```csharp
public interface ILogger
{
    void Log(string message);
}
```

### 2. Implement It

```csharp
public class FileLogger : ILogger
{
    public void Log(string message)
    {
        // Log to file
    }
}
```

### 3. Use the Interface (Not the Concrete Class)

```csharp
public class ReportService
{
    private readonly ILogger _logger;

    public ReportService(ILogger logger)
    {
        _logger = logger;
    }

    public void GenerateReport()
    {
        _logger.Log("Report generated.");
    }
}
```

---

## 🧱 Creating Objects Using Interface Reference

```csharp
ILogin login = new Login(); // ✅ Abstraction
IRegister register = new Login(); // ✅ Polymorphism
```

### Example Explained:

Assume we have these interfaces and class:

```csharp
public interface ILogin
{
    string GetUserRole(string username, string password);
}

public interface IRegister
{
    int MathOperation(JSoper op, int a, int b);
}

public enum JSoper
{
    Add, Sub, Mul, Div
}

public class Login : ILogin, IRegister
{
    public string GetUserRole(string username, string password) => "Admin";

    public int MathOperation(JSoper op, int a, int b)
    {
        return op switch
        {
            JSoper.Add => a + b,
            JSoper.Sub => a - b,
            JSoper.Mul => a * b,
            JSoper.Div => a / b,
            _ => 0
        };
    }
}
```

### Usage:

```csharp
Register register = new Register(null);
int result = register.MathOperation(JSoper.Mul, 10, 10);

login.Login log = new login.Login();

ILogin log1 = new login.Login();          // Interface reference
log1.GetUserRole("admin", "123");

IRegister register1 = new login.Login();  // Interface reference
register1.MathOperation(JSoper.Add, 20, 5);
```

#### ✅ Key Benefits:
- **Flexible**: You can swap the implementation without changing the code logic.
- **Testable**: Easily mock `ILogin` or `IRegister` in unit tests.
- **Maintainable**: Encourages writing cleaner and modular code.

---

## 🌐 Real-Time Use Cases

| Area | Interface Example |
|------|-------------------|
| Logging | `ILogger` → `ConsoleLogger`, `FileLogger` |
| Payment | `IPaymentGateway` → `StripePayment`, `RazorPay` |
| Notifications | `INotification` → `EmailNotification`, `SMSNotification` |
| Data Access | `IRepository<T>` for DB CRUD operations |
| Dependency Injection | Register interface and inject anywhere |

---

## 🆕 Default Interface Methods (C# 8.0+)

Interfaces can now contain default method implementations:

```csharp
public interface IPrinter
{
    void Print();

    void ShowStatus()
    {
        Console.WriteLine("Ready to Print");
    }
}
```

> ⚠️ Use carefully. Mainly helpful for evolving APIs without breaking existing code.

---

## 💬 Interview Questions and Answers

### Q1: What is an interface in C#?
**A:** A contract that defines method/property/event declarations without implementation.

---

### Q2: Can we create an object of an interface?
**A:** No. But we can create a reference to an object that implements the interface.

---

### Q3: What is the difference between abstract class and interface?

| Abstract Class | Interface |
|----------------|-----------|
| Can contain fields and constructors | Cannot |
| Can have full/partial implementation | Only method signatures (C# < 8) |
| Use `abstract` keyword | Use `interface` keyword |

---

### Q4: Why use interface in dependency injection?
**A:** It promotes **loose coupling** and makes testing and swapping implementations easier.

---

### Q5: What is a default method in an interface?
**A:** A method in an interface that includes a body (from C# 8+).

---

### Q6: Can a class implement multiple interfaces?
**A:** Yes. C# supports multiple interface implementations.

```csharp
public class MyClass : ILogin, IRegister
```

---

### Q7: Can interfaces inherit other interfaces?
**A:** Yes.

```csharp
public interface IAdvanced : IBasic1, IBasic2
```

---

### Q8: What if a class does not implement all interface members?
**A:** It must be marked `abstract`, or it will throw a compile-time error.

---

## 🧠 Summary

- Use interfaces to abstract and decouple components.
- Always prefer interface-based coding for extensibility and testability.
- Combine interfaces with Dependency Injection to write clean, scalable software.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
