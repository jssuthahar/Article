
# C# Structs 

This document covers the fundamentals and advanced topics related to `struct` in C#. It's designed for learners, developers, and job seekers preparing for interviews.

---

## 📌 What is a Struct in C#?

A `struct` is a **value type** in C#. Unlike classes (which are reference types), structs hold data **directly** rather than referencing it.

```csharp
public struct Point
{
    public int X;
    public int Y;
}
```

### ✅ Key Points:
- Stored on the **stack** (not heap).
- Faster access due to value type semantics.
- Suitable for small data structures.

---

## 🛠 Syntax of Struct

```csharp
public struct Employee
{
    public int Id;
    public string Name;

    // Constructor with parameters
    public Employee(int id, string name)
    {
        Id = id;
        Name = name;
    }
}
```

---

## 🧩 Struct Constructors in C#

- Structs **cannot have a parameterless constructor** (except in C# 10 for `readonly struct`).
- All fields must be **fully initialized** in a custom constructor.
- You **can’t** initialize fields inline (before C# 10).

```csharp
// ✅ Valid constructor
public Employee(int id, string name)
{
    Id = id;
    Name = name;
}
```

---

## ⚠️ Limitations of Structs

| Limitation | Description |
|-----------|-------------|
| Inheritance | Structs **cannot inherit** from another struct or class (they only inherit from `System.ValueType`) |
| Default Constructor | **No parameterless constructor** allowed (before C# 10) |
| Null | Cannot assign `null` to a struct (unless it's `Nullable<T>`) |
| Polymorphism | Cannot use virtual/abstract members |
| Memory | Large structs can reduce performance when passed by value |

---

## 💡 When to Use Struct?

Use struct when:
- You are modeling **small, simple data** (like coordinates, RGB, etc.)
- **Immutability** is needed (use `readonly struct`)
- You want better **performance** (less heap allocation)

Avoid struct when:
- Data is large or frequently modified
- You require inheritance or polymorphism

---

## 📘 Real World Use Cases

| Use Case | Example |
|----------|---------|
| Geometry | `Point`, `Rectangle`, `Size` in System.Drawing |
| Financial Data | Immutable `Currency`, `Rate`, etc. |
| Color Values | `Color` struct in UI libraries |
| Game Dev | `Vector3`, `Transform`, etc., in Unity |
| Timestamps | `DateTime` is a struct in .NET |

---

## 🎯 Interview Questions and Answers

### Q1: What is a struct in C#?
**A:** A struct is a value type used to encapsulate small groups of related variables.

### Q2: How does a struct differ from a class?
**A:** Structs are value types (stored on stack), classes are reference types (stored on heap). Structs don’t support inheritance or virtual methods.

### Q3: Can a struct have constructors?
**A:** Yes, but only parameterized constructors (except in C# 10+ where `readonly struct` allows parameterless constructors).

### Q4: Can you assign null to a struct?
**A:** No, unless it's made nullable: `Point? p = null;`

### Q5: What happens when you copy a struct?
**A:** A new copy is created (value copied), unlike reference types where only the reference is copied.

### Q6: What are readonly structs?
**A:** Introduced in C# 7.2+, they ensure that struct fields cannot be modified after construction.

### Q7: When should you avoid structs?
**A:** When your data is large, mutable, or you require inheritance and polymorphism.

---

## ✅ Best Practices

- Use `readonly struct` for immutable models.
- Avoid using structs larger than **16 bytes** for performance reasons.
- Always initialize all fields in constructors.
- Avoid exposing public fields — use properties instead.
- Be careful when using struct in `List<T>` or collections to avoid boxing.


## 📂 Related Topics
- [Value Types vs Reference Types](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/)
- [readonly struct](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/struct)
- [Performance considerations](https://learn.microsoft.com/en-us/dotnet/standard/design-guidelines/choosing-between-class-and-struct)


  ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
