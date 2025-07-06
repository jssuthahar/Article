### **1. What is Garbage Collection in C#?**

Garbage Collection (GC) in C# is an automatic memory management feature of the CLR (Common Language Runtime) that reclaims memory occupied by unused objects.

**Real Example**:

```csharp
public class Employee
{
    public string Name { get; set; }
}

Employee emp = new Employee();
emp = null; // Eligible for garbage collection
GC.Collect(); // Manually triggers GC (not recommended in real applications)
```

---

### **2. What is CLR?**

**Common Language Runtime (CLR)** is the runtime environment in .NET that executes C# code. It provides services like memory management, security, and exception handling.

**Real-Time Use**: Every `.exe` or `.dll` in .NET runs under CLR.

---

### **3. What is Boxing and Unboxing?**

Boxing: Converting a value type to object type.
Unboxing: Extracting value type from object.

**Example**:

```csharp
int num = 10;
object boxed = num;       // Boxing
int unboxed = (int)boxed; // Unboxing
```

---

### **4. What is Break and Continue in C#?**

* `break`: exits the loop.
* `continue`: skips the current iteration.

**Example**:

```csharp
for (int i = 1; i <= 5; i++)
{
    if (i == 3) continue; // skip 3
    if (i == 5) break;    // stop loop
    Console.WriteLine(i);
}
```

---

### **5. What are the access modifiers in C#?**

* `public`
* `private`
* `protected`
* `internal`
* `protected internal`
* `private protected`

**Example**:

```csharp
public class Demo
{
    private int id;
    protected string name;
    public void Print() {}
}
```

---

### **6. What is JIT Compiler?**

Just-In-Time (JIT) Compiler converts IL (Intermediate Language) code into native machine code at runtime.

---

### **7. What is Ref and Out Keyword?**

Both pass parameters **by reference**.

* `ref`: Must be initialized before passing.
* `out`: Can be uninitialized.

**Example**:

```csharp
void UpdateRef(ref int x) { x += 10; }
void UpdateOut(out int y) { y = 20; }

int a = 5;
UpdateRef(ref a); // a = 15
int b;
UpdateOut(out b); // b = 20
```

---

### **8. Difference between Equals() and ==**

* `Equals()` compares object content.
* `==` compares references (for objects) and values (for value types).

**Example**:

```csharp
string s1 = "test";
string s2 = "test";
Console.WriteLine(s1 == s2);        // True
Console.WriteLine(s1.Equals(s2));   // True
```

---

### **9. Difference between string and StringBuilder**

* `string` is immutable.
* `StringBuilder` is mutable.

**Example**:

```csharp
string str = "Hello";
str += " World"; // New string created

StringBuilder sb = new StringBuilder("Hello");
sb.Append(" World"); // Same object modified
```

---

### **10. Difference between `.ToString()` and `Convert.ToString()`**

* `.ToString()` throws `NullReferenceException` if the object is null.
* `Convert.ToString()` returns empty string for null.

**Example**:

```csharp
object obj = null;
string s1 = Convert.ToString(obj); // ""
string s2 = obj.ToString();        // Exception
```

---

### **11. Constant vs ReadOnly**

* `const`: Value fixed at compile time.
* `readonly`: Set at runtime or in constructor.

**Example**:

```csharp
const int max = 100;
readonly int value;
public Demo() { value = 50; }
```

---

### **12. `throw` vs `throw ex`**

* `throw`: preserves original stack trace.
* `throw ex`: resets stack trace.

**Example**:

```csharp
try { throw new Exception("Error"); }
catch (Exception ex) { throw; } // better for debugging
```

---

### **13. IS vs AS Keyword**

* `is`: Checks type.
* `as`: Casts type (returns null if failed).

**Example**:

```csharp
object obj = "hello";
if (obj is string) { } // true
string str = obj as string; // "hello"
```

---

### **14. What is Enum?**

Enum defines a set of named constants.

**Example**:

```csharp
enum Days { Sun, Mon, Tue };
Days today = Days.Mon;
```

---

### **15. What is Sealed Class?**

Sealed classes cannot be inherited.

```csharp
sealed class A {}
// class B : A {} // Error
```

---

### **16. Dispose vs Finalize**

* `Dispose()`: Manual resource release.
* `Finalize()`: GC calls it automatically.

**Example**:

```csharp
class Demo : IDisposable {
    public void Dispose() { /* release resource */ }
}
```

---

### **17. Using Keyword**

* Used for automatic disposal of objects.

```csharp
using (StreamReader reader = new StreamReader("file.txt"))
{
    string text = reader.ReadToEnd();
}
```

---

### **18. What is OOP?**

**Object-Oriented Programming** - 4 pillars:

* **Encapsulation**
* **Abstraction**
* **Inheritance**
* **Polymorphism**

---

### **19. What is Interface?**

Interface defines contract. No implementation.

```csharp
interface ITest { void Show(); }
```

---

### **20. Abstract Method**

Defined in abstract class, must be overridden.

```csharp
abstract class Shape {
    public abstract void Draw();
}
```

---

### **21. Interface vs Abstract Class**

| Feature          | Interface | Abstract Class |
| ---------------- | --------- | -------------- |
| Implementation   | No        | Yes            |
| Multiple Inherit | Yes       | No             |
| Constructor      | No        | Yes            |

---

### **22. Overloading vs Overriding**

* Overloading: same method name, different signature.
* Overriding: base class method redefined.

---

### **23. Array vs Collection**

* Array: fixed size.
* Collection: dynamic size.

---

### **24. Collections in C#**

* ArrayList
* List<>
* Dictionary<>
* HashSet<>

---

### **25. Non-Generic Collection Namespace**

`System.Collections`

---

### **26. What is Resource in WPF?**

Reusable styles, brushes, templates defined in XAML.

---

### **27. What is Data Binding in WPF?**

Connect UI with data source.

```xaml
<TextBox Text="{Binding Name}" />
```

---

### **28. Pass Value Between Views**

* Use `NavigationService`
* Use `Constructor`
* Use `Shared Service`

---

### **29. TempData vs ViewBag**

| Feature  | TempData    | ViewBag         |
| -------- | ----------- | --------------- |
| Lifetime | One request | Current request |
| Type     | Dictionary  | Dynamic         |

---

### **30. Use of TabControl in WPF**

Display multiple tabs in one window.

---

### **31. One-Way vs Two-Way Binding**

* One-Way: UI updates from source.
* Two-Way: Both update each other.

---

### **32. Style vs Template**

* Style: Applies common properties.
* Template: Redefines entire visual structure.

---

### **33. Triggers in WPF**

Types:

* Property Trigger
* Data Trigger
* Event Trigger

---

### **34. Middleware in .NET Core**

Handles HTTP request pipeline.

```csharp
app.UseMiddleware<CustomMiddleware>();
```

---

### **35. What is Startup Class?**

Configures services and middleware.

---

### **36. What is Dependency Injection?**

Injecting services using constructor.

```csharp
services.AddScoped<IMyService, MyService>();
```

---

### **37. Routing and Types**

* Conventional
* Attribute Routing

---

### **38. appsettings.json & appsettings.Development.json**

Store config values.

---

### **39. Types of Identity in SQL Server**

* Identity(1,1)
* UniqueIdentifier

---

### **40. Joins in SQL Server**

* INNER JOIN
* LEFT JOIN
* RIGHT JOIN
* FULL JOIN

---

### **41. Primary Key**

Uniquely identifies each row.

---

### **42. Primary vs Foreign Key**

* Primary: Unique, not null
* Foreign: Reference another table

---

### **43. Indexing in SQL**

* Clustered
* Non-Clustered
* Unique
* Full-Text

---

### **44. COMMIT & ROLLBACK**

Control transactions.

---

### **45. TRUNCATE vs DELETE**

* TRUNCATE: Fast, no log
* DELETE: Logs each row

---

### **46. Stored Procedure**

Reusable SQL block.

---

### **47. Handle Exception in SP**

```sql
BEGIN TRY
   -- code
END TRY
BEGIN CATCH
   -- error handling
END CATCH
```

---

### **48. SP vs Function**

| Feature      | SP       | Function |
| ------------ | -------- | -------- |
| Return Type  | Optional | Must     |
| Transactions | Yes      | No       |

---

### **49. UNION vs UNION ALL**

* UNION: Removes duplicates.
* UNION ALL: Keeps duplicates.

---

### **50. Aggregate Functions**

* SUM, AVG, COUNT, MAX, MIN

---

### **51. Temp Tables in SQL**

* Local Temp: `#temp`
* Global Temp: `##temp`
* Table Variable: `DECLARE @temp TABLE(...)`

---
 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
