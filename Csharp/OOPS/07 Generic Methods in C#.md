# 🔧 Generic Methods and Generic Classes in C#

## 📘 What Are Generics?

Generics in C# allow you to define classes, methods, interfaces, and delegates with a placeholder for the type of data they store or use. They bring **flexibility**, **reusability**, and **type safety** to your code.

---

## ✅ Why Use Generics?

| Benefit         | Description                                                                 |
|------------------|------------------------------------------------------------------------------|
| ✅ Type Safety    | Catch errors at compile time rather than runtime                            |
| ✅ Reusability    | Write code once and reuse it with different types                            |
| ✅ Performance    | No boxing/unboxing overhead for value types                                  |
| ✅ Maintainability| Reduces code duplication and complexity                                      |
| ✅ Intellisense   | Better tooling support for type-safe operations in Visual Studio/JetBrains  |

---

## 🔹 Real-World Use Cases

### 1. `List<T>` - Used in almost every C# application

**Scenario**: Managing a list of users, products, or orders dynamically.

```csharp
List<string> names = new List<string>();
names.Add("John");
names.Add("Alice");
```

✅ `List<T>` avoids boxing/unboxing, gives compile-time safety, and is faster than using `ArrayList`.

---


## 🔹 Generic Method Example: AddNumbers

The `AddNumbers<T>` method adds three numbers of a generic type `T`.

### 📦 Implementation:
```csharp
public int AddNumbers<T>(T a, T b, T c)
{
    return Convert.ToInt32(a) + Convert.ToInt32(b) + Convert.ToInt32(c);
}
```

### 📝 Parameters:
- `a`: First number.
- `b`: Second number.
- `c`: Third number.

### 🔁 Returns:
- The sum of the three numbers as an `int`.

### ⚠️ Constraints:
- `T` should be convertible to `int`. If a non-numeric type is passed, a runtime exception may occur.

---

## 🔹 Generic Class Example: Box

The `Box<T>` class stores and retrieves a value of generic type `T`.

### 📦 Implementation:
```csharp
public class Box<T>
{
    private T value;

    public void SetValue(T val)
    {
        value = val;
    }

    public T GetValue()
    {
        return value;
    }
}
```

### 🔁 Usage:
```csharp
Box<int> intBox = new Box<int>();
intBox.SetValue(42);
Console.WriteLine(intBox.GetValue()); // Output: 42

Box<string> strBox = new Box<string>();
strBox.SetValue("Hello");
Console.WriteLine(strBox.GetValue()); // Output: Hello
```

---

## ⚡ Performance Benefits

| Feature             | Generic            | Non-Generic             |
|---------------------|--------------------|--------------------------|
| Boxing/Unboxing     | ❌ No               | ✅ Yes (e.g., ArrayList) |
| Type Conversion     | ❌ No (type-safe)   | ✅ Yes                   |
| Compile-Time Checks | ✅ Yes              | ❌ No                    |
| Reflection Overhead | ❌ Minimal          | ✅ Higher                |

---

## 🧠 Summary Table

| Concept         | Description                                       |
|----------------|---------------------------------------------------|
| Generic Method  | Method that works with different data types       |
| Generic Class   | Class that stores/operates on any type            |
| Type Safety     | Compile-time checking reduces runtime issues      |
| Performance     | Avoids unnecessary boxing/unboxing                |
| Flexibility     | Same logic reused across types                    |

---

## 🚀 Next Steps

- Learn **Generic Constraints**: `where T : class`, `new()`, etc.
- Explore **Generic Interfaces**, `IEnumerable<T>`, `IRepository<T>`
- Try **Generic Delegates**: `Func<T>`, `Action<T>`
- Learn about **Covariance and Contravariance**

---

Would you like code snippets for a full working console app demo with generics? I can prepare that for you as well!
```

Let me know if you want to include a section like "Interview Questions on Generics" or “Hands-on Exercises for Students” — would be great if you’re using this for teaching!

## Interview Questions and Answers

### 1. What are generic methods in C#?
**Answer:** Generic methods allow defining a method with a type parameter so that it can operate on different data types while maintaining type safety and code reusability.

### 2. What is the advantage of using generic methods?
**Answer:** Generic methods improve code reusability, reduce redundancy, enhance type safety, and provide better performance by eliminating the need for type casting.

### 3. Can a generic method have multiple type parameters?
**Answer:** Yes, a generic method can have multiple type parameters. Example:
```csharp
public T2 ConvertType<T1, T2>(T1 input) { return (T2)Convert.ChangeType(input, typeof(T2)); }
```

### 4. Can a generic method be overloaded?
**Answer:** Yes, a generic method can be overloaded with different type parameters or parameter counts.

### 5. How does the C# compiler handle generic methods internally?
**Answer:** The compiler uses type inference and generates optimized IL code for each specific type when the generic method is used.

### 6. What happens if a type parameter in a generic method cannot be converted to the expected type?
**Answer:** A runtime exception occurs. It is important to ensure type safety before performing conversions.

### 7. What is the difference between generic methods and generic classes?
**Answer:** Generic methods allow type parameters at the method level, whereas generic classes define type parameters at the class level, affecting all its members.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
