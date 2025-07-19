
### 📘  C# Programming Interview Q\&A

````markdown
# 💻 C# Programming Interview – Questions & Answers

This document contains frequently asked **C# programming interview questions** with concise and clear answers. It includes topics such as variables, methods, string handling, object/dynamic types, file I/O, arrays, and collections.

---

## 🟦 Variables and Data Types

### Q1: What are value types and reference types?
**A:**  
- **Value Types**: Store actual value. Stored in the stack. (e.g., `int`, `float`, `bool`, `char`, `struct`)
- **Reference Types**: Store reference to value. Stored in the heap. (e.g., `object`, `string`, `class`, `array`)

---

### Q2: What is the difference between `var`, `dynamic`, and `object`?

| Keyword  | Type Checked | Can Change Type? | Common Use               |
|----------|--------------|------------------|--------------------------|
| `var`    | Compile time | ❌               | Local variables           |
| `dynamic`| Runtime      | ✅               | COM/Reflection/Expando    |
| `object` | Compile time | ❌ (Needs cast)  | Generic containers, base class |

---

### Q3: What is the default value of a variable in C#?
**A:** Depends on the type. Examples:
- `int` → `0`
- `bool` → `false`
- `object` → `null`

---

## 🟦 Methods

### Q4: What is the difference between `ref`, `out`, and `in` parameters?

- `ref`: Must be initialized before passing. Can be changed.
- `out`: Doesn't need initialization. Must be set inside the method.
- `in`: Pass by reference, but read-only.

---

### Q5: What is method overloading?
**A:** Defining multiple methods with the same name but different parameter lists.

```csharp
void Print(string msg) {}
void Print(string msg, int count) {}
````

---

## 🟦 String Formatting and Interpolation

### Q6: Difference between string interpolation and string.Format?

* **String.Format**:

```csharp
string name = "John";
string result = string.Format("Hello {0}", name);
```

* **String Interpolation**:

```csharp
string name = "John";
string result = $"Hello {name}";
```

**Interpolation** is easier to read and more modern (C# 6+).

---

## 🟦 Common String Functions in C\#

```csharp
string name = "  Hello C#  ";
name.Trim();       // "Hello C#"
name.ToUpper();    // "  HELLO C#  "
name.Substring(2); // " Hello C#  "
name.Replace("C#", "World"); // "  Hello World  "
name.Contains("Hello"); // true
```

---

## 🟦 Object and Dynamic Types

### Q7: What is the difference between `object` and `dynamic`?

* `object`: Type checking at compile time. Needs explicit casting.
* `dynamic`: Type checking at runtime. No casting needed.

```csharp
dynamic d = "Hello";
Console.WriteLine(d.Length); // Works
```

---

### Q8: What is boxing and unboxing?

* **Boxing**: Converting value type to reference type.

```csharp
int x = 10;
object obj = x;  // Boxing
```

* **Unboxing**: Converting back to value type.

```csharp
int y = (int)obj; // Unboxing
```

---

## 🟦 Arrays and Collections

### Q9: Difference between Array and List in C#?

| Feature     | Array           | List<T> (Generic List)  |
| ----------- | --------------- | ----------------------- |
| Size        | Fixed           | Dynamic                 |
| Type        | Any             | Type-safe (`List<int>`) |
| Performance | Slightly faster | More flexible           |

---

### Q10: How to declare and initialize an array?

```csharp
int[] numbers = new int[3] { 1, 2, 3 };
string[] names = { "Alice", "Bob" };
```

---

### Q11: Commonly used collections?

* `Hash Table` – Key-value store
* `Queue` – FIFO
* `Stack` – LIFO

---

## 🟦 File Handling (System.IO)

### Q12: How to read and write text files?

```csharp
// Write
File.WriteAllText("sample.txt", "Hello World");

// Read
string content = File.ReadAllText("sample.txt");
```

### Q13: How to append text to a file?

```csharp
File.AppendAllText("log.txt", "New line\n");
```

---

### Q14: How to read all lines as an array?

```csharp
string[] lines = File.ReadAllLines("data.txt");
```

---

## 🟦 Extra Logical Questions

### Q15: What happens if you try to access a variable that’s not initialized?

**A:** Compile-time error for local variables; default value used for class-level variables.

---

### Q16: What is null-conditional operator `?.`?

**A:**

```csharp
string name = null;
int? length = name?.Length; // No exception, returns null
```

---

---


## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

