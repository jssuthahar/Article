
# 🚀 Modern C# Types & Features (C# 9 - 11)

This document provides a detailed explanation of the **new types and features in modern C#**, including records, init-only setters, top-level statements, global usings, required members, and more.

---

## 🔹 1. `record` (C# 9)

- `record` types are **reference types** used to create **immutable objects** with **value-based equality**.
- Automatically generates `Equals()`, `GetHashCode()`, and `ToString()`.

```csharp
public record Person(string FirstName, string LastName);

var p1 = new Person("John", "Doe");
var p2 = new Person("John", "Doe");
Console.WriteLine(p1 == p2); // True
```

---

## 🔸 2. `record struct` (C# 10)

- A **value type** version of `record`.
- Combines value-type performance with record immutability and value equality.

```csharp
public readonly record struct Point(int X, int Y);
```

---

## 🔹 3. `init` Accessors (C# 9)

- Allows **read-only properties** to be set **during initialization only**.

```csharp
public class Car
{
    public string Model { get; init; }
    public string Brand { get; init; }
}

var car = new Car { Model = "Civic", Brand = "Honda" };
```

---

## 🔸 4. `with` Expressions (C# 9)

- Create a **copy of an object** with some properties modified.
- Only works with `record` or classes with `init` accessors.

```csharp
var updatedPerson = person with { FirstName = "Jane" };
```

---

## 🔹 5. Top-Level Statements (C# 9)

- Simplifies small console apps by removing boilerplate code.

```csharp
Console.WriteLine("Hello, World!");
```

---

## 🔸 6. `file-scoped namespace` (C# 10)

- Cleaner syntax for declaring namespaces.

```csharp
namespace MyApp;

public class HelloWorld { }
```

---

## 🔹 7. Global Usings (C# 10)

- Declare `using` directives once and share them across the project.

```csharp
// GlobalUsings.cs
global using System;
global using System.Collections.Generic;
```

---

## 🔸 8. Pattern Matching Enhancements (C# 9-11)

- More expressive `switch` and `if` statements.

```csharp
if (shape is Rectangle { Width: > 10 })
{
    Console.WriteLine("Wide rectangle!");
}
```

---

## 🔹 9. `required` Members (C# 11)

- Forces properties to be initialized when an object is created.

```csharp
public class Employee
{
    public required string Name { get; init; }
    public required int ID { get; init; }
}

var emp = new Employee { Name = "Ravi", ID = 101 }; // ✅ Required fields
```

---

## 🔸 10. Raw String Literals (C# 11)

- Write multi-line strings without escaping quotes or characters.

```csharp
string json = """
{
  "name": "Alice",
  "age": 30
}
""";
```

---

## 🧠 Summary

| Feature               | C# Version | Description                              |
|-----------------------|------------|------------------------------------------|
| `record`              | C# 9       | Immutable reference type with value equality |
| `record struct`       | C# 10      | Immutable value type with `with` support |
| `init` accessor       | C# 9       | Set-only-during-initialization properties |
| `with` expression     | C# 9       | Clone and modify immutable objects       |
| Top-level statements  | C# 9       | Simplify small console apps              |
| File-scoped namespace | C# 10      | Cleaner namespace syntax                 |
| Global usings         | C# 10      | Shared `using` across the project        |
| Pattern matching      | 9-11       | Better `if`/`switch` matching            |
| `required` members    | C# 11      | Forces property initialization           |
| Raw string literals   | C# 11      | Multi-line string support                |

---

## 🛠 Requirements

- **.NET 5 or higher** (C# 9+)
- **.NET 6 or higher** (C# 10+)
- **.NET 7 or higher** (C# 11+)

---

## 📁 Project Structure

```
/ModernCSharp
├── Program.cs
├── Person.cs
├── Employee.cs
├── Point.cs
└── README.md
```

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
