##  Static Class, Static Variable & Static Constructor in C#

### 🔹 1. What is a **Static Class**?

A **static class** in C#:
- Is a class that **cannot be instantiated**.
- Can **only contain static members** (methods, variables, constructors, etc.).
- Is sealed automatically (you cannot inherit from it).

**Syntax:**
```csharp
public static class Utility
{
    public static void PrintMessage(string message)
    {
        Console.WriteLine(message);
    }
}
```

### ✅ Why Use Static Class?
- For utility/helper methods (e.g., `Math` class).
- To group related static methods and data.
- Avoid unnecessary object creation.

### 📍 Where to Use?
- `Math`, `Convert`, `Path` in .NET are static classes.
- When methods don't need to maintain object state.

---

### 🔹 2. What is a **Static Variable**?

A **static variable**:
- Belongs to the class rather than any object.
- Is shared across all instances of the class.
- Retains its value for the lifetime of the application.

**Syntax:**
```csharp
public class Counter
{
    public static int count = 0;

    public Counter()
    {
        count++;
    }
}
```

### ✅ Why Use Static Variables?
- To maintain **common data** across all objects.
- To store counters, configuration values, or shared states.

### 📍 Where to Use?
- Track the number of instances created.
- Store application-wide settings.

---

### 🔹 3. What is a **Static Constructor**?

A **static constructor**:
- Initializes static data of the class.
- Is called **only once**, automatically, **before the first use** of any static member or creation of an object.
- Cannot take parameters.
- Cannot be called explicitly.

**Syntax:**
```csharp
public class Config
{
    public static string AppName;

    static Config()
    {
        AppName = "MyApp";
        Console.WriteLine("Static constructor called");
    }
}
```

### ✅ Why Use Static Constructor?
- To initialize static variables.
- Perform actions that need to happen only once.

### 📍 Where to Use?
- Initializing static config values.
- Loading resources or settings at startup.

---

## ✅ Summary Table

| Feature             | Static Class        | Static Variable      | Static Constructor      |
|---------------------|---------------------|-----------------------|--------------------------|
| Instantiable        | ❌ No               | ✅ Not applicable     | ❌ Not applicable        |
| Purpose             | Group static members | Shared data for class | Initialize static data  |
| Called/Used         | Directly by class name | Accessed via class name | Automatically (once) |
| Example             | `Math`, `Convert`    | `Counter.count`       | Used to initialize config |

---

## 🧠 Best Practices

- Don't overuse static — it makes unit testing difficult.
- Use static classes only when you don't need object behavior/state.
- Use static variables cautiously in multithreaded apps (consider thread safety).

