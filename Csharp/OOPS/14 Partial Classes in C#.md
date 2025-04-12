# 📘 Partial Classes in C#

## 🧠 What is a Partial Class?

A **partial class** allows you to split the implementation of a class into multiple files. All the parts are combined into a single class when the application is compiled.

This feature is useful in large projects, auto-generated code, or when multiple developers are working on the same class.

---

## 📌 Why Use Partial Classes?

| Reason | Description |
|--------|-------------|
| 🔄 Code Separation | Helps separate concerns by placing related functionality in different files. |
| 👨‍💻 Multiple Developers | Allows multiple team members to work on the same class without merging code in one file. |
| 🛠️ Auto-generated Code | Keeps auto-generated code (e.g., by Visual Studio designer) separate from user-written code. |
| 🧹 Clean Code | Makes code cleaner and more maintainable. |

---

## 🛠️ How to Use Partial Classes?

### Syntax:

```csharp
// File: Student.Part1.cs
public partial class Student
{
    public void PrintName()
    {
        Console.WriteLine("Name: John");
    }
}
```

```csharp
// File: Student.Part2.cs
public partial class Student
{
    public void PrintAge()
    {
        Console.WriteLine("Age: 20");
    }
}
```

### Usage:

```csharp
Student student = new Student();
student.PrintName();  // Output: Name: John
student.PrintAge();   // Output: Age: 20
```

> ✅ All parts must use the `partial` keyword and must be in the same namespace and assembly.

---

## 🧪 When to Use Partial Classes?

- When working with **WinForms**, **WPF**, or **ASP.NET Designer** files.
- When separating logic into **layers** within a class (e.g., Validation, Business Logic).
- When **auto-generated** and **manually written** code must coexist.

---

## 📋 C# Interview Questions on Partial Classes

### ❓ Q1: What is a partial class in C#?
**Answer**: A partial class allows its implementation to be split across multiple files. At compile time, the compiler merges them into a single class.

---

### ❓ Q2: Can partial classes be in different namespaces?
**Answer**: No, all parts of a partial class must be in the **same namespace and assembly**.

---

### ❓ Q3: Can partial classes have different access modifiers?
**Answer**: No, all parts of a partial class must have the **same access modifier**. If you specify different access levels, you will get a compilation error.

---

### ❓ Q4: What happens if methods or properties with the same name exist in different parts?
**Answer**: The compiler throws an error due to **duplicate definitions**. Method names in all parts must be unique.

---

### ❓ Q5: Can a partial class contain static members?
**Answer**: Yes, a partial class can have both instance and static members.

---

### ❓ Q6: Where is the concept of partial classes mostly used?
**Answer**: It's heavily used in **auto-generated code scenarios** like Windows Forms, Entity Framework, and Web Forms, where designer tools generate partial class code.

---

## 🔍 Real-World Examples

- **WinForms/WPF UI code**: Visual Studio places designer code in one file and developer logic in another.
- **Code Generators (e.g., EF Core)**: Auto-generates models using partial classes so you can extend them without touching generated code.

---

## 📎 Notes

- A class can be split into any number of files.
- The keyword `partial` must be used in all class definitions.
- Applicable only to **classes**, **structs**, and **interfaces** (from C# 2.0 onwards).

---

## 📁 Sample File Structure

```
/Models
    ├── Student.Part1.cs
    └── Student.Part2.cs
```

  ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
