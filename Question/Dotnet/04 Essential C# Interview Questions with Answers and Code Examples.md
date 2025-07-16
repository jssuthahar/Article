# 45 Essential C# Interview Questions with Detailed Explanations and Code Examples

## 1. Difference between readonly vs const

* `const` is a compile-time constant. Its value is hardcoded into the assembly at compile time and can't be changed.
* `readonly` is a runtime constant. Its value can only be set during declaration or in the constructor, making it useful for instance-level constants.

```csharp
const int MaxItems = 100; // Must be known at compile time
readonly int MinItems;

public MyClass() {
    MinItems = 10; // Can be set in constructor
}
```

Use `const` for universal constants. Use `readonly` when the value may differ per object instance.

---

## 2. What is a sealed keyword used for?

The `sealed` keyword prevents a class from being inherited. It is useful for security and performance (especially in polymorphic scenarios).

```csharp
sealed class FinalClass { }
```

Trying to inherit from `FinalClass` will cause a compile-time error.

---

## 3. Name all the access modifiers for types

1. `public`: Accessible from anywhere.
2. `private`: Accessible only within the class.
3. `protected`: Accessible within the class and its derived types.
4. `internal`: Accessible within the same assembly.
5. `protected internal`: Accessible within the same assembly or from derived types.
6. `private protected`: Accessible within the same assembly and from derived classes in that assembly.

---

## 4. Difference between interface and abstract class

* **Interface**:

  * All members are abstract (default behavior).
  * No constructors.
  * Multiple interfaces can be implemented.
* **Abstract Class**:

  * Can include both abstract and implemented methods.
  * Can have constructors and fields.

Use interfaces to define capabilities; use abstract classes when you want shared implementation.

---

## 5. When is a static constructor called?

A static constructor is called only once, automatically, before the first instance is created or any static members are accessed.

```csharp
class Logger {
    static Logger() {
        Console.WriteLine("Initializing Logger");
    }
}
```

---

## 6. How to create an extension method?

An extension method allows you to "add" new methods to existing types without modifying them.

```csharp
public static class StringExtensions {
    public static bool IsCapitalized(this string input) {
        return !string.IsNullOrEmpty(input) && char.IsUpper(input[0]);
    }
}
```

Usage: `"Hello".IsCapitalized();`

---

## 7. Does C# support multiple class inheritance?

No. C# does not support multiple class inheritance to avoid ambiguity and complexity. However, a class can implement multiple interfaces.

```csharp
interface IWalk { void Walk(); }
interface IRun { void Run(); }
class Athlete : IWalk, IRun {
    public void Walk() {}
    public void Run() {}
}
```

---

## 8. Explain boxing and unboxing

* **Boxing**: Converting a value type to object type (heap allocation).
* **Unboxing**: Extracting the value type from the object.

```csharp
int i = 123;
object obj = i;        // Boxing
int j = (int)obj;      // Unboxing
```

Avoid excessive boxing/unboxing for performance.

---

## 9. What is heap and stack?

* **Stack**: Fast memory for value types and method calls. Auto-managed.
* **Heap**: Stores reference types. Garbage-collected.

Variables in the stack are destroyed when method exits, heap objects live until GC collects them.

---

## 10. Difference between string and StringBuilder

* `string` is immutable. Every modification creates a new string.
* `StringBuilder` is mutable. Efficient for string concatenations in loops.

```csharp
StringBuilder sb = new StringBuilder("Hi");
sb.Append(" there");
```

---

## 11. How to create a date with a specific timezone?

Use `TimeZoneInfo` to convert `DateTime`.

```csharp
DateTime utcNow = DateTime.UtcNow;
TimeZoneInfo ist = TimeZoneInfo.FindSystemTimeZoneById("India Standard Time");
DateTime localTime = TimeZoneInfo.ConvertTimeFromUtc(utcNow, ist);
```

---

## 12. How to change current culture?

```csharp
Thread.CurrentThread.CurrentCulture = new CultureInfo("fr-FR");
Thread.CurrentThread.CurrentUICulture = new CultureInfo("fr-FR");
```

Useful for formatting numbers, dates, etc.

---

## 13. Difference between HashSet and Dictionary

* **HashSet<T>**: Stores unique elements.
* **Dictionary\<TKey,TValue>**: Stores key-value pairs.

```csharp
HashSet<int> set = new HashSet<int> {1, 2};
Dictionary<int, string> map = new Dictionary<int, string> {{1, "A"}};
```

---

## 14. What is the purpose of the method ToLookup?

`ToLookup` creates a one-to-many dictionary-like structure. Good for grouping.

```csharp
var lookup = people.ToLookup(p => p.Age);
```

---

## 15. Does LINQ Cast<T> method create a new object?

No. It casts elements but does not create new objects. If types don’t match, it throws `InvalidCastException`.

---

## 16. Explain deferred execution in LINQ

LINQ queries are not executed when defined. Execution is deferred until iteration.

```csharp
var q = list.Where(x => x > 5); // No execution yet
foreach (var item in q) {...}   // Execution here
```

---

## 17. How does the ImmutableList work?

You can't modify it. All changes return a new instance.

```csharp
var original = ImmutableList.Create(1);
var modified = original.Add(2);
```

---

## 18. Benefits of using Frozen collections

* Thread-safe
* Faster lookups
* Immutable and optimized for read performance

---

## 19. Name thread-safe collections

* `ConcurrentDictionary`
* `ConcurrentQueue`
* `ConcurrentBag`
* `BlockingCollection`
* `ImmutableList`

---

## 20. How to perform a lock for async code?

Use `SemaphoreSlim`, not `lock`

```csharp
SemaphoreSlim _lock = new(1);
await _lock.WaitAsync();
try {
    // critical code
} finally {
    _lock.Release();
}
```

---

## 21. Ways to create a new thread

1. `Thread` class
2. `ThreadPool`
3. `Task`
4. `Task.Run`
5. `async/await`
6. `BackgroundWorker`

---

## 22. Execute multiple async tasks at once

```csharp
await Task.WhenAll(Download(), Save());
```

---

## 23. Inheritance vs Composition

* Inheritance: Extends behavior, tight coupling.
* Composition: Combines behavior, more flexible.

---

## 24. Difference: class vs record vs struct

| Type   | Reference | Value | Inheritance | Immutable      |
| ------ | --------- | ----- | ----------- | -------------- |
| class  | Yes       | No    | Yes         | No             |
| struct | No        | Yes   | No          | No             |
| record | Yes       | No    | Yes         | Yes by default |

---

## 25. What are ref structs used for?

Used for stack-only types (e.g. `Span<T>`), not allowed on heap.

---

## 26. Two forms of records

* Positional
* Non-positional with `init` properties

---

## 27. What is "with" keyword used for?

Used with records to clone and modify.

```csharp
var newPerson = person with { Age = 30 };
```

---

## 28. Purpose of Primary Constructors

New C# 12 feature: define constructor parameters in class declaration.

---

## 29. Nullable Reference Types

Adds compile-time null checks.

```csharp
string? name = null;
```

---

## 30. Do switch expressions have return type limitations?

No. You can return any type.

---

## 31. What is yield return used for?

Used to create iterators lazily.

---

## 32. How many generations does GC have?

* Gen 0: Short-lived
* Gen 1: Medium-lived
* Gen 2: Long-lived

---

## 33. What is Interlocked class used for?

Thread-safe atomic operations.

---

## 34. Code generated for auto properties?

Compiler generates a hidden backing field.

---

## 35. How is Polymorphism implemented?

Using virtual/override, interfaces.

---

## 36. How is Encapsulation implemented?

Using private fields + public properties.

---

## 37. Difference between ref and out

* `ref` requires initialization before use.
* `out` must be assigned inside method.

---

## 38. How does the using statement work?

Calls `Dispose()` automatically.

---

## 39. What is delegate and how is it used?

Pointer to method. Supports events, callbacks.

---

## 40. Method Overloading vs Overriding

* Overloading: Compile-time
* Overriding: Runtime polymorphism

---

## 41. Difference between IEnumerable and IQueryable

* `IEnumerable`: In-memory, LINQ to Objects
* `IQueryable`: Translates to DB queries, deferred

---

## 42. What are expression trees?

Represent code in tree structure. Used in LINQ providers.

---

## 43. How does exception handling work?

Use `try`, `catch`, `finally`.

---

## 44. Ways to rethrow exception

* `throw;` preserves stack
* `throw ex;` resets stack trace

---

## 45. Explain generics

Allow type-safe and reusable code.

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
