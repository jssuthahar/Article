# 🐍 C# vs Python Syntax – Quick Reference

This guide highlights the **syntax differences between C# and Python**, especially how Python uses the **colon `:`** instead of `{ }` braces to define code blocks.

---

## 📚 Table of Contents
1. [Overview](#overview)
2. [Main Differences](#main-differences)
3. [Colon `:` vs Braces `{ }`](#colon--vs-braces-)
4. [Examples](#examples)
5. [Key Points](#key-points)
6. [Quick Reference Table](#quick-reference-table)

---

## 🟢 Overview
C# and Python are both powerful programming languages but have different syntax rules:

- **C#:** Uses semicolons `;` to end statements and curly braces `{ }` to define blocks.
- **Python:** Uses **indentation** and a **colon `:`** to indicate the start of a block.

---

## ⚡ Main Differences

| Feature           | C#                           | Python                           |
|-------------------|-----------------------------|-----------------------------------|
| Code blocks       | `{ }`                        | `:` followed by indentation      |
| Statement end     | `;`                          | No semicolon needed              |
| Variable types    | Explicit (e.g., `int`, `string`) | Dynamic (no need to declare type)|
| Print output      | `Console.WriteLine()`        | `print()`                         |
| Functions         | `returnType Name(...) { }`   | `def name(...):`                  |
| Classes           | `class MyClass { }`          | `class MyClass:`                  |

---

## 🔑 Colon `:` vs Braces `{ }`

- In **C#**, you write:
```csharp
if (x > 5) {
    Console.WriteLine("Greater");
}
````

* In **Python**, you write:

```python
if x > 5:
    print("Greater")
```

👉 In Python:

* The **colon (`:`)** means: “The next **indented lines** belong to this block.”
* Indentation is required and defines the scope.
* No `{ }` or `;` are needed.

---

## 🚀 Examples

### 1. Hello World

**C#:**

```csharp
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello World");
    }
}
```

**Python:**

```python
print("Hello World")
```

---

### 2. If Statement

**C#:**

```csharp
int x = 10;
if (x > 5) {
    Console.WriteLine("Greater");
} else {
    Console.WriteLine("Smaller");
}
```

**Python:**

```python
x = 10
if x > 5:
    print("Greater")
else:
    print("Smaller")
```

---

### 3. Loop

**C#:**

```csharp
for (int i = 0; i < 3; i++) {
    Console.WriteLine(i);
}
```

**Python:**

```python
for i in range(3):
    print(i)
```

---

### 4. Function

**C#:**

```csharp
int add(int a, int b) {
    return a + b;
}
```

**Python:**

```python
def add(a, b):
    return a + b
```

---

### 5. Class

**C#:**

```csharp
class Person {
    public void Greet() {
        Console.WriteLine("Hello");
    }
}
```

**Python:**

```python
class Person:
    def greet(self):
        print("Hello")
```

---

## 💡 Key Points

* **Colon `:` replaces `{`** to mark the start of a block.
* **Indentation** replaces closing `}` — consistent indentation is required.
* Python enforces **cleaner, more readable** code by requiring indentation.
* By default, Python uses **4 spaces per indent** (PEP 8 style).

---

## ⚠️ Common Mistakes

❌ Wrong (no indentation):

```python
if x > 5:
print("Hello")
```

✅ Correct:

```python
if x > 5:
    print("Hello")
```

---

## 📋 Quick Reference Table

| Concept        | C#                              | Python               |
| -------------- | ------------------------------- | -------------------- |
| Start of block | `{`                             | `:`                  |
| End of block   | `}`                             | End of indentation   |
| Function       | `int Add(int a, int b) { ... }` | `def add(a, b): ...` |
| Loop           | `for (...) { ... }`             | `for ... in ...:`    |
| Condition      | `if (...) { ... }`              | `if ...:`            |
| Print          | `Console.WriteLine(...)`        | `print(...)`         |
| Variables      | `int a = 10;`                   | `a = 10`             |

---

## ✅ Final Notes

* Python’s use of `:` + indentation makes code **simpler and cleaner**.
* C# syntax is **more explicit** with braces, semicolons, and types — often preferred for enterprise-scale projects.
* Choose Python for **rapid development, data science, scripting**.
* Choose C# for **enterprise apps, games (Unity), Windows development**.


👉 Then **[Follow me on GitHub](https://github.com/jssuthahar)** to get notified about new repos, ideas, and updates!

[![Follow Me](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)

## ⭐ Start & Follow Me
If you find this repository useful, don't forget to **Star** ⭐ the repo and **Follow** me for more updates!

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)


