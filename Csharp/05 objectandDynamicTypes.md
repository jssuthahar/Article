# Object and Dynamic Types in C#

## Overview
C# provides two special types, `object` and `dynamic`, for handling variables that can hold different types of values at runtime. This document explains the differences, their use cases, and concepts like pattern matching and boxing/unboxing with examples.

---

## Object Type
The `object` type is the base class for all data types in C#. It allows storing values of any type but requires explicit type conversion when retrieving the value.

### Example:
```csharp
int i = 10;
object value = 0;
value = 10;
value = true;
value = "Jana";
value = i; // Boxing (storing value type in object type)
value = "Welcome";

if (value is int)
{
    int output = Convert.ToInt32(value); // Unboxing (converting object back to value type)
}
else if (value is string)
{
    string name = value.ToString();
}
```

### When to Use Object Type:
- When working with collections that store multiple data types (`ArrayList`, `Hashtable`, etc.).
- When handling data that comes from external sources (e.g., JSON parsing, serialization).
- When using polymorphism (storing different derived types in a base class reference).

### Boxing and Unboxing
- **Boxing**: Converting a value type (e.g., `int`, `bool`) to an `object` type.
- **Unboxing**: Extracting the value type back from an `object` type.

Example:
```csharp
int num = 42;
object obj = num; // Boxing
int unboxedNum = (int)obj; // Unboxing
```

---

## Dynamic Type
The `dynamic` type allows storing values of any type without requiring explicit type conversion. It defers type checking until runtime.

### Example:
```csharp
dynamic outputvalue = 10;
outputvalue = true;
outputvalue = "Manju";

if (outputvalue is string)
{
    string namestud = outputvalue; // No need for type casting
}
else if (outputvalue is int)
{
    int numbers = outputvalue;
}
```

### When to Use Dynamic Type:
- When working with COM objects or dynamic languages like Python.
- When dealing with JSON or XML data where types are unknown at compile time.
- When interacting with reflection or late-bound objects.

### Key Differences Between `object` and `dynamic`:
| Feature        | `object`  | `dynamic`  |
|--------------|-----------|------------|
| Type Checking | At compile-time | At runtime |
| Casting Required | Yes | No |
| Performance | Slightly slower due to boxing/unboxing | Can cause runtime errors if type mismatch occurs |

---

## Pattern Matching
Pattern matching in C# allows checking and extracting values based on their types in a more readable way.

### Example:
```csharp
object value = "Hello";

switch (value)
{
    case int number:
        Console.WriteLine($"Value is an integer: {number}");
        break;
    case string text:
        Console.WriteLine($"Value is a string: {text}");
        break;
    case bool flag:
        Console.WriteLine($"Value is a boolean: {flag}");
        break;
    default:
        Console.WriteLine("Unknown type");
        break;
}
```

### Benefits of Pattern Matching:
- Improves readability and maintainability.
- Avoids explicit casting and conversions.
- Reduces the use of `if-else` chains.

---

## Interview Questions and Answers

### 1. What is the difference between `object` and `dynamic` in C#?
**Answer:** The `object` type requires explicit type conversion and is checked at compile-time, whereas `dynamic` defers type checking until runtime and does not require explicit casting.

### 2. What is boxing and unboxing in C#?
**Answer:**
- **Boxing** is the process of converting a value type to an `object` type.
- **Unboxing** is the process of converting an `object` type back to a value type.

### 3. When should we use `dynamic` instead of `object`?
**Answer:** Use `dynamic` when dealing with JSON, COM objects, or reflection where types are unknown at compile-time. Use `object` when working with collections and polymorphism.

### 4. What are the performance implications of using `dynamic`?
**Answer:** Since type checking happens at runtime, `dynamic` can lead to performance overhead and potential runtime errors. It should be used cautiously in performance-critical applications.

### 5. What are the advantages of pattern matching in C#?
**Answer:** Pattern matching improves code readability, reduces the need for explicit type casting, and makes type-checking logic more concise.

### 6. Can we use pattern matching with `dynamic` type?
**Answer:** No, pattern matching works with `object`, but `dynamic` defers type checking to runtime, which prevents compile-time pattern matching.

---

## Conclusion
- Use `object` when working with generic collections and when you need explicit type conversion.
- Use `dynamic` when working with dynamic data sources where compile-time type checking is not possible.
- Utilize pattern matching to simplify type-checking logic.
- Be mindful of boxing/unboxing to avoid performance overhead.

---

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

