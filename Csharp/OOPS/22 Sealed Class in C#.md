
# Sealed Class in C#

## 📘 What is a Sealed Class?

A **sealed class** in C# is a class that cannot be inherited. Once a class is marked as `sealed`, no other class can derive from it.

**Syntax:**

```csharp
sealed class MyClass
{
    // class members
}
```

Sealed classes are typically used to:
- Prevent further inheritance for security or design reasons.
- Improve performance during runtime by preventing method overriding.

---

## ✅ Use Case

You may use a sealed class when:
- You want to restrict the class usage to avoid modification via inheritance.
- You're working with utility/helper classes.
- You're implementing a class that logically shouldn't have subclasses.

---

## 📌 Example

```csharp
sealed class Logger
{
    public void Log(string message)
    {
        Console.WriteLine("Log: " + message);
    }
}

// This will result in a compilation error
// class CustomLogger : Logger { }
```

---

## 🎯 Common Interview Questions and Answers

### Q1: What is a sealed class in C#?
**A:** A sealed class is a class that cannot be inherited. It is declared using the `sealed` keyword.

---

### Q2: Why would you use a sealed class?
**A:** To prevent inheritance, which can be useful for design reasons, optimization, or security.

---

### Q3: Can a sealed class be abstract?
**A:** No. A sealed class cannot be abstract because an abstract class is intended to be inherited, and a sealed class cannot be inherited.

---

### Q4: Can methods be sealed in C#?
**A:** Yes, but only in the context of an overridden method in a derived class. This is done using the `sealed` keyword.

```csharp
class Base
{
    public virtual void Display() {}
}

class Derived : Base
{
    public sealed override void Display() {}
}
```

---

### Q5: Can a sealed class implement an interface?
**A:** Yes. A sealed class can implement one or more interfaces.

---

### Q6: Can a sealed class be instantiated?
**A:** Yes. Unlike static classes, sealed classes can be instantiated.

---

## 📂 Summary

| Feature | Sealed Class |
|--------|--------------|
| Inheritable | ❌ No |
| Abstract | ❌ No |
| Can implement interfaces | ✅ Yes |
| Can be instantiated | ✅ Yes |

---

## 🛠️ Best Practices

- Use sealed classes when designing APIs to restrict how other developers use or extend your code.
- Combine with `readonly` and immutability patterns to enforce integrity.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
