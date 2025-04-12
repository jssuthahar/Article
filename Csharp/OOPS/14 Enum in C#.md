
# 📘 Enum in C#

## 🔰 What is an Enum?

An `enum` (short for *enumeration*) is a value type in C# that allows you to define a set of **named constants**. Enums improve code readability and reduce the chances of invalid values being used.

```csharp
enum Days { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday };
```

---

## 🎯 Why Use Enums?

| Benefit | Description |
|--------|-------------|
| ✅ Readability | Makes code more descriptive and self-explanatory |
| ✅ Maintainability | Easier to manage a list of related constants |
| ✅ Compile-time safety | Only valid values are allowed |
| ✅ IntelliSense support | Get suggestions in IDEs like Visual Studio |
| ✅ Integration with switch-case | Cleaner control flow logic |

---

## 🧠 When and Where to Use Enums?

Enums are ideal when:
- You have a fixed set of related constants (e.g., days of the week, status codes, roles).
- You want better type safety instead of using `int`, `string`, etc.
- You need clean, descriptive switch-case or comparison logic.

**Example Use Cases:**
- Order Status: `Pending`, `Shipped`, `Delivered`
- User Roles: `Admin`, `Editor`, `Viewer`
- Payment Methods: `Cash`, `Card`, `UPI`

---

## 🛠 How to Declare and Use Enums

### 1. Declare Enum
```csharp
enum Status { Pending, Approved, Rejected }
```

### 2. Assign and Use
```csharp
Status orderStatus = Status.Pending;
Console.WriteLine(orderStatus); // Output: Pending
```

### 3. Enum with Custom Values
```csharp
enum ErrorCode
{
    NotFound = 404,
    Unauthorized = 401,
    InternalError = 500
}
```

---

## 🧪 Advanced Enum Techniques

### 🔁 Enum to String and Vice Versa

```csharp
Status status = Status.Approved;
string statusName = status.ToString(); // "Approved"

Status parsedStatus = (Status)Enum.Parse(typeof(Status), "Rejected");
```

### 📦 Loop Through Enum Values

```csharp
foreach (Status s in Enum.GetValues(typeof(Status)))
{
    Console.WriteLine(s);
}
```

### ✅ Check if Value is Defined

```csharp
bool isDefined = Enum.IsDefined(typeof(Status), "Approved"); // true
```

### 📈 Use with Flags (Bitwise Enums)

```csharp
[Flags]
enum FileAccess { Read = 1, Write = 2, Execute = 4 }

FileAccess access = FileAccess.Read | FileAccess.Write;
bool hasWrite = access.HasFlag(FileAccess.Write); // true
```

---

## 🎓 Enum Best Practices

- Use **PascalCase** for enum names and values.
- Group related constants logically.
- Avoid using magic numbers — prefer enums.
- Use `[Flags]` only when bitwise operations are required.
- Add comments to enum members when needed.

---

## 💼 C# Enum Interview Questions & Answers

### 1. **What is an enum in C#?**
> A value type used to declare a set of named constants. Enums make code more readable and maintainable.

---

### 2. **Can we assign specific values to enums?**
> Yes, you can explicitly assign values to enum members.

```csharp
enum Days { Sun = 1, Mon = 2, Tue = 3 }
```

---

### 3. **What is the default underlying type of enum in C#?**
> `int` is the default underlying type unless specified otherwise.

---

### 4. **Can enum be of other types?**
> Yes. Enums can be based on `byte`, `sbyte`, `short`, `ushort`, `int`, `uint`, `long`, or `ulong`.

```csharp
enum ErrorCode : byte { NotFound = 1, Internal = 2 }
```

---

### 5. **What is the purpose of [Flags] attribute?**
> It allows an enum to represent a combination of values using bitwise operations.

---

### 6. **How do you convert a string to an enum value?**
> Use `Enum.Parse()` or `Enum.TryParse()`:

```csharp
Enum.TryParse("Approved", out Status result);
```

---

### 7. **How to get all values of an enum?**
```csharp
Enum.GetValues(typeof(Status))
```

---

### 8. **Is it possible to inherit from enum?**
> No. Enums are sealed and cannot be inherited.

---

### 9. **Can enums contain methods?**
> No. But you can use **extension methods** on enums.

---

### 10. **Can you use enums in switch statements?**
> Yes. Enums are frequently used in `switch` blocks for control flow.

---

## 📦 Real-World Example

```csharp
enum OrderStatus { Placed, Processing, Shipped, Delivered, Cancelled }

class Order
{
    public int Id { get; set; }
    public OrderStatus Status { get; set; }
}
```

  ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)


