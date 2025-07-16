# 45 Essential C# Interview Questions with Answers and Code Examples

## 1. Difference between readonly vs const

* `const`: Compile-time constant. Value is set at compile time and can't be changed.
* `readonly`: Runtime constant. Can be set in constructor.

```csharp
const int MaxValue = 100;
readonly int MinValue;

public MyClass() {
    MinValue = 10; // Allowed
}
```

---

## 2. What is a sealed keyword used for?

Prevents a class from being inherited.

```csharp
sealed class MyClass { }
```

---

## 3. Name all the access modifiers for types

* `public`
* `private`
* `protected`
* `internal`
* `protected internal`
* `private protected`

---

## 4. Difference between interface and abstract class

| Feature        | Interface | Abstract Class |
| -------------- | --------- | -------------- |
| Inheritance    | Multiple  | Single         |
| Implementation | No        | Can contain    |
| Constructors   | No        | Yes            |

---

## 5. When is a static constructor called?

Automatically called before any static member is accessed or instance is created.

```csharp
class MyClass {
    static MyClass() {
        Console.WriteLine("Static constructor");
    }
}
```

---

## 6. How to create an extension method?

```csharp
public static class StringExtensions {
    public static bool IsCapital(this string str) => char.IsUpper(str[0]);
}
```

---

## 7. Does C# support multiple class inheritance?

No. But you can implement multiple interfaces.

---

## 8. Explain boxing and unboxing

* Boxing: Value type to object
* Unboxing: Object to value type

```csharp
int x = 123;
object obj = x; // Boxing
int y = (int)obj; // Unboxing
```

---

## 9. What is heap and stack?

* **Stack**: Stores value types and method call data.
* **Heap**: Stores reference types.

---

## 10. Difference between string and StringBuilder

`string` is immutable. `StringBuilder` is mutable.

```csharp
StringBuilder sb = new StringBuilder("Hello");
sb.Append(" World");
```

---

## 11. How to create a date with a specific timezone?

```csharp
DateTime utc = DateTime.UtcNow;
TimeZoneInfo tz = TimeZoneInfo.FindSystemTimeZoneById("India Standard Time");
DateTime local = TimeZoneInfo.ConvertTimeFromUtc(utc, tz);
```

---

## 12. How to change current culture?

```csharp
Thread.CurrentThread.CurrentCulture = new CultureInfo("fr-FR");
```

---

## 13. Difference between HashSet and Dictionary

* `HashSet<T>`: Stores unique values.
* `Dictionary<K,V>`: Stores key-value pairs.

---

## 14. What is the purpose of the method ToLookup?

Groups elements by key and returns `ILookup<TKey, TElement>`.

---

## 15. Does LINQ Cast<T> method create a new object?

No. It just casts elements to the specified type.

---

## 16. Explain deferred execution in LINQ

Query is not executed until iterated over.

```csharp
var q = list.Where(x => x > 10); // Not executed yet
foreach (var item in q) { ... }  // Executed here
```

---

## 17. How does the ImmutableList work?

Any modification returns a new list.

```csharp
var list = ImmutableList.Create(1, 2);
var newList = list.Add(3);
```

---

## 18. Benefits of using Frozen collections?

High performance lookup, thread-safe, optimized for read-heavy scenarios.

---

## 19. Name thread-safe collections

* `ConcurrentDictionary`
* `ConcurrentQueue`
* `BlockingCollection`
* `ImmutableList`

---

## 20. How to perform a lock for async code?

Use `SemaphoreSlim`:

```csharp
private SemaphoreSlim semaphore = new(1);
await semaphore.WaitAsync();
try { ... } finally { semaphore.Release(); }
```

---

## 21. Ways to create a new thread

* `Thread` class
* `Task`
* `ThreadPool`
* `async/await`
* `BackgroundWorker`

---

## 22. Execute multiple async tasks at once

```csharp
await Task.WhenAll(Task1(), Task2());
```

---

## 23. Inheritance vs Composition

* Inheritance: IS-A relationship
* Composition: HAS-A relationship

---

## 24. Difference: class vs record vs struct

| Type   | Immutable        | Value Type | Inheritance |
| ------ | ---------------- | ---------- | ----------- |
| class  | No               | No         | Yes         |
| record | Yes (by default) | No         | Yes         |
| struct | No               | Yes        | No          |

---

## 25. What are ref structs used for?

Used for stack-only types like `Span<T>`.

---

## 26. Two forms of records

* Positional record:

```csharp
public record Person(string Name, int Age);
```

* Regular record:

```csharp
public record Person {
  public string Name { get; init; }
}
```

---

## 27. What is "with" keyword used for?

Clone record with changes.

```csharp
var p2 = p1 with { Age = 30 };
```

---

## 28. Purpose of Primary Constructors

Allow parameters in type declaration (C# 12+).

```csharp
class Person(string name) {
    public string Name => name;
}
```

---

## 29. Nullable Reference Types

Enable compiler warnings for nullability.

```csharp
string? name = null; // nullable
```

---

## 30. Do switch expressions have return type limitations?

No, they return the evaluated type.

```csharp
var result = value switch {
  > 10 => "High",
  _ => "Low"
};
```

---

## 31. What is yield return used for?

Used to implement iterators.

```csharp
public IEnumerable<int> GetEven() {
    yield return 2;
    yield return 4;
}
```

---

## 32. How many generations does GC have?

Three: 0 (short-lived), 1, and 2 (long-lived).

---

## 33. What is Interlocked class used for?

Atomic operations in multithreaded scenarios.

```csharp
Interlocked.Increment(ref counter);
```

---

## 34. Code generated for auto properties?

```csharp
public string Name { get; set; }
// Backed by hidden private field
```

---

## 35. How is Polymorphism implemented?

Via virtual methods and interfaces.

```csharp
public virtual void Speak() { }
```

---

## 36. How is Encapsulation implemented?

Using access modifiers to hide data.

```csharp
private string _name;
public string Name { get => _name; set => _name = value; }
```

---

## 37. Difference between ref and out

* `ref`: Must be initialized before passing.
* `out`: No need to initialize.

---

## 38. How does the using statement work?

Disposes object automatically.

```csharp
using var stream = new StreamReader("file.txt");
```

---

## 39. What is delegate and how is it used?

Pointer to a method.

```csharp
delegate void MyDelegate();
```

---

## 40. Method Overloading vs Overriding

* Overloading: Same method name, different parameters.
* Overriding: Derived class changes base class implementation.

---

## 41. Difference between IEnumerable and IQueryable

* `IEnumerable`: Client-side, in-memory.
* `IQueryable`: Deferred, query provider translates.

---

## 42. What are expression trees?

Code as data. Used in LINQ Providers like Entity Framework.

```csharp
Expression<Func<int, bool>> expr = x => x > 5;
```

---

## 43. How does exception handling work?

Using try-catch-finally blocks.

---

## 44. Ways to rethrow exception

* `throw;` preserves stack
* `throw ex;` resets stack trace

---

## 45. Explain generics

Enable type safety and reusability.

```csharp
List<int> list = new List<int>();
```

---
 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
