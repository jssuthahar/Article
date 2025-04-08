
# 📌 Extension Methods in C#

## 📖 What is an Extension Method?

An **extension method** is a special kind of static method that allows you to "add" methods to existing types **without** modifying their source code or creating a new derived type.

Extension methods are defined in static classes and use the `this` keyword as a modifier in the first parameter to specify the type they extend.

---

## 🤔 Why Use Extension Methods?

- ✅ Add functionality to existing classes without inheritance or modifying original code.
- ✅ Improve readability and make code look cleaner (like built-in instance methods).
- ✅ Promote reusability of utility methods.
- ✅ Useful for adding helper methods to types you don't own (e.g., `string`, `DateTime`, etc.).

---

## 📍 Where to Use Extension Methods?

- When working with existing classes (e.g., .NET types or 3rd party libraries) where source code is not accessible.
- For utility/helper libraries.
- To extend functionality in LINQ-style or fluent APIs.
- In domain-specific scenarios to make the code more expressive.

---

## 🧑‍💻 Syntax

```csharp
public static class MyExtensions
{
    public static returnType MethodName(this TypeName obj, otherParameters...)
    {
        // method body
    }
}
```

---

## 🧪 Code Examples

### ✅ 1. Extension Method Without Extra Parameters

```csharp
public static class StringExtensions
{
    // Extension method to count words in a string
    public static int WordCount(this string str)
    {
        if (string.IsNullOrWhiteSpace(str))
            return 0;
        return str.Split(' ', StringSplitOptions.RemoveEmptyEntries).Length;
    }
}
```

**Usage:**

```csharp
string message = "Hello from extension method";
int count = message.WordCount();
Console.WriteLine($"Word Count: {count}");
```

---

### ✅ 2. Extension Method With Additional Parameters

```csharp
public static class IntExtensions
{
    // Extension method to check if a number is divisible by a given divisor
    public static bool IsDivisibleBy(this int number, int divisor)
    {
        return number % divisor == 0;
    }
}
```

**Usage:**

```csharp
int num = 10;
bool result = num.IsDivisibleBy(5);
Console.WriteLine($"Is {num} divisible by 5? {result}");
```

---

## ⚠️ Things to Keep in Mind

- Extension methods **cannot override** existing methods.
- They **appear** as if they are part of the type but are just syntactic sugar.
- Must be defined in **static classes**.
- Must use the `this` keyword in the **first parameter only**.

---

## 📚 Summary

| Feature             | Description                                      |
|---------------------|--------------------------------------------------|
| Defined In          | Static class                                     |
| First Parameter     | Uses `this` keyword to specify the extended type |
| Purpose             | Add new functionality to existing types          |
| Limitation          | Can't access private members of the extended type|

---

