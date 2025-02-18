# C# Object and Dynamic Types

This document provides an in-depth explanation of `object` and `dynamic` types in C#.

## Object Type

### 1. Overview
- `object` is the base class for all data types in C#.
- It can store any type of value, including value types and reference types.
- It requires explicit casting when retrieving a value.

### 2. Example Usage

```csharp
using System;

class Program
{
    static void Main()
    {
        object obj = 10; // Boxing
        int num = (int)obj; // Unboxing
        Console.WriteLine(num);
    }
}
```

### 3. Key Points
- `object` stores any data type.
- Boxing and unboxing operations may lead to performance overhead.
- Explicit casting is required when retrieving values.

## Dynamic Type

### 1. Overview
- `dynamic` allows runtime type flexibility.
- It bypasses compile-time type checking.
- The compiler assumes that all operations are valid until runtime.

### 2. Example Usage

```csharp
using System;

class Program
{
    static void Main()
    {
        dynamic value = 10;
        Console.WriteLine(value);
        value = "Hello World";
        Console.WriteLine(value);
    }
}
```

### 3. Key Points
- `dynamic` can change its type at runtime.
- No explicit casting is needed.
- Compile-time checking is skipped, leading to potential runtime errors.

## Differences Between `object` and `dynamic`

| Feature     | object          | dynamic       |
|------------|----------------|--------------|
| Type Checking | Compile-time | Runtime |
| Casting Required | Yes | No |
| Performance | Slower due to boxing/unboxing | Faster as it avoids compile-time checks |
| Intellisense Support | Yes | No |

## Interview Questions and Answers

### Q1: What is the key difference between `object` and `dynamic` in C#?
**A:** `object` requires explicit casting, and type checking is done at compile time, while `dynamic` skips compile-time checking and determines types at runtime.

### Q2: What are the disadvantages of using `dynamic`?
**A:**
- No compile-time type safety, leading to runtime errors.
- No IntelliSense support in some cases.
- Performance overhead due to runtime type resolution.

### Q3: When should we use `dynamic` over `object`?
**A:** Use `dynamic` when working with reflection, COM objects, or dynamic languages like Python.

### Q4: Does `dynamic` affect performance?
**A:** Yes, `dynamic` operations take longer due to runtime type resolution, whereas `object` may perform better when using proper casting.

### Q5: Can `dynamic` store primitive types?
**A:** Yes, `dynamic` can store any type, including primitive types, and allows changing them at runtime.

## Conclusion
- Use `object` when dealing with generic types and need type safety.
- Use `dynamic` when working with unknown types at runtime.
- Be cautious about performance and error handling while using `dynamic`.

This guide provides an essential understanding of `object` and `dynamic` types, helping developers choose the right type based on their use case.


## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
