# Generic Methods in C#

## Overview
Generic methods allow you to define methods with type parameters, enabling code reusability and type safety by allowing operations on various data types. This document explains the generic methods implemented in C#.

## Methods

### ConvertJson<T>
The `ConvertJson<T>` method converts an object of any type `T` into a JSON string.

#### Implementation:
```csharp
public string ConvertJson<T>(T modeldata)
{
    return JsonConvert.SerializeObject(modeldata);
}
```

#### Parameters:
- `modeldata`: The object to be serialized into JSON.

#### Returns:
- A `string` containing the JSON representation of the input object.

#### Requirements:
- This method requires the `Newtonsoft.Json` package for JSON serialization.
- Ensure that `T` is a serializable type.

#### Example Usage:
```csharp
var obj = new { Name = "John", Age = 30 };
string json = ConvertJson(obj);
Console.WriteLine(json);  // Output: {"Name":"John","Age":30}
```

---

### AddNumbers<T>
The `AddNumbers<T>` method adds three numbers of a generic type `T`.

#### Implementation:
```csharp
public int AddNumbers<T>(T a, T b, T c)
{
    return Convert.ToInt32(a) + Convert.ToInt32(b) + Convert.ToInt32(c);
}
```

#### Parameters:
- `a`: First number.
- `b`: Second number.
- `c`: Third number.

#### Returns:
- The sum of the three numbers as an `int`.

#### Constraints:
- `T` should be convertible to `int`. If a non-numeric type is passed, a runtime exception may occur.

#### Example Usage:
```csharp
int sum = AddNumbers(10, 20, 30);
Console.WriteLine(sum);  // Output: 60
```

---

### Add<T1, T2, T3>
The `Add<T1, T2, T3>` method adds three numbers of different generic types `T1`, `T2`, and `T3`.

#### Implementation:
```csharp
public int Add<T1, T2, T3>(T1 a, T2 b, T3 c)
{
    return Convert.ToInt32(a) + Convert.ToInt32(b) + Convert.ToInt32(c);
}
```

#### Parameters:
- `a`: First number of type `T1`.
- `b`: Second number of type `T2`.
- `c`: Third number of type `T3`.

#### Returns:
- The sum of the three numbers as an `int`.

#### Constraints:
- The input values should be convertible to `int`. If a non-numeric type is passed, a runtime exception may occur.

#### Example Usage:
```csharp
int result = Add(10, 20.5, "30");
Console.WriteLine(result);  // Output: 60
```

---

## Notes
- Ensure that the generic types used in `AddNumbers` and `Add` methods can be converted to `int` to avoid runtime exceptions.
- The `ConvertJson` method requires `Newtonsoft.Json` for serialization.
- Using constraints like `where T : struct` or `where T : IConvertible` can improve type safety.

## Requirements
- .NET Framework or .NET Core.
- `Newtonsoft.Json` package for JSON serialization (required for `ConvertJson` method).

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

### 4. How can we enforce constraints on a generic type parameter?
**Answer:** Constraints are added using `where` keyword. Example:
```csharp
public class Example<T> where T : struct
```
This ensures `T` is a value type.

### 5. Can a generic method be overloaded?
**Answer:** Yes, a generic method can be overloaded with different type parameters or parameter counts.

### 6. How does the C# compiler handle generic methods internally?
**Answer:** The compiler uses type inference and generates optimized IL code for each specific type when the generic method is used.

### 7. What happens if a type parameter in a generic method cannot be converted to the expected type?
**Answer:** A runtime exception occurs. It is important to ensure type safety before performing conversions.

### 8. What is the difference between generic methods and generic classes?
**Answer:** Generic methods allow type parameters at the method level, whereas generic classes define type parameters at the class level, affecting all its members.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
