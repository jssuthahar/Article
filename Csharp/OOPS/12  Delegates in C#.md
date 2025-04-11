# Delegates in C#

## 📌 What is a Delegate?
A **delegate** in C# is a type that represents references to methods with a particular parameter list and return type. It is similar to a **function pointer** in C/C++ but is **type-safe** and **secure**.

> You can think of a delegate as a **placeholder for methods**. It allows you to **call a method indirectly**.

---

## 🎯 Why Use Delegates?
- **Flexibility:** Pass methods as parameters.
- **Decoupling:** Reduce dependency between classes.
- **Extensibility:** Easily add or replace methods at runtime.
- **Event Handling:** Core mechanism in .NET event model.
- **Callback Methods:** Useful for notifying when a task is completed.

---

## 🧠 Where Are Delegates Used?
- Event handling in Windows Forms, WPF, or ASP.NET.
- LINQ, async programming, and thread callbacks.
- Custom plugin-based systems (for extensibility).
- Replacing interfaces for a simple method invocation.

---

## 🛠️ How to Use a Delegate

### 🔹 1. Declare a Delegate
```csharp
public delegate void MyDelegate(string message);
```

### 🔹 2. Create Methods That Match the Signature
```csharp
public class Messenger
{
    public void Send(string msg)
    {
        Console.WriteLine("Sending: " + msg);
    }
}
```

### 🔹 3. Use the Delegate
```csharp
class Program
{
    static void Main()
    {
        Messenger messenger = new Messenger();

        // Create delegate instance
        MyDelegate del = messenger.Send;

        // Invoke the method using delegate
        del("Hello from delegate!");
    }
}
```

---

## 🧩 Multicast Delegates
Multicast delegates allow you to **invoke multiple methods with a single delegate call**.

### 🛒 Real-World Example: Placing an Order

When a customer places an order:
1. Inventory should be updated (qty reduced).
2. Email confirmation should be sent.
3. Order should be logged for auditing.

```csharp
using System;

public delegate void OrderHandler();

public class OrderSystem
{
    public void ReduceQuantity()
    {
        Console.WriteLine("✅ Inventory updated: Quantity reduced.");
    }

    public void SendEmail()
    {
        Console.WriteLine("📧 Order confirmation email sent to customer.");
    }

    public void LogOrder()
    {
        Console.WriteLine("📝 Order details logged into the system.");
    }
}

class Program
{
    static void Main()
    {
        OrderSystem order = new OrderSystem();

        // Step 1: Create delegate instance and attach methods
        OrderHandler placeOrder = order.ReduceQuantity;
        placeOrder += order.SendEmail;
        placeOrder += order.LogOrder;

        // Step 2: Invoke delegate
        Console.WriteLine("🚀 Placing order...");
        placeOrder();
    }
}
```

### 🧾 Output
```
🚀 Placing order...
✅ Inventory updated: Quantity reduced.
📧 Order confirmation email sent to customer.
📝 Order details logged into the system.
```

---

## ✅ Built-in Delegates

### 1. **Action** - Returns `void`
```csharp
Action<string> greet = name => Console.WriteLine("Hi " + name);
greet("Niki");  // Output: Hi Niki
```

### 2. **Func** - Returns a value
```csharp
Func<int, int, int> add = (x, y) => x + y;
Console.WriteLine(add(2, 3));  // Output: 5
```

### 3. **Predicate** - Returns a `bool`
```csharp
Predicate<int> isEven = x => x % 2 == 0;
Console.WriteLine(isEven(10));  // Output: True
```

### 🔁 Summary Table
| Delegate   | Parameters | Return Type | Example Use                     |
|------------|------------|-------------|----------------------------------|
| `Action`   | Yes        | `void`      | Logging, printing                |
| `Func`     | Yes        | Any value   | Calculations, data transformations |
| `Predicate`| 1 param    | `bool`      | Conditions, filtering (e.g., `List<T>.Find`) |

---

## 📚 Real-World Use Case: Callback Simulation
```csharp
public delegate void ProcessComplete();

public class Processor
{
    public void ProcessData(ProcessComplete callback)
    {
        Console.WriteLine("Processing...");
        Thread.Sleep(1000); // Simulate delay
        callback(); // Callback when done
    }
}

// Usage
Processor p = new Processor();
p.ProcessData(() => Console.WriteLine("Processing Done!"));
```

---

## 🧪 Practice Exercises
1. Create a delegate to calculate area of a circle.
2. Use `Func<int, int, int>` to multiply two numbers.
3. Use `Predicate<string>` to check if a string is in uppercase.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

