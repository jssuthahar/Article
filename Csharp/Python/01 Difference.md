# 📘 C# vs Python – Syntax Comparison

This guide highlights key **syntax differences** between **C#** and **Python**, making it easy to learn or switch between the two languages.

---

## 🔑 Language Overview

| Feature               | C#                              | Python                          |
|-----------------------|----------------------------------|----------------------------------|
| Typing                | Statically typed (declare types) | Dynamically typed (type inferred) |
| Compilation           | Compiled to IL (runs on .NET CLR) | Interpreted / byte-compiled     |
| Code Blocks           | Uses `{ }` braces                | Uses **indentation**            |
| Line Ending           | Requires `;` at end of statements | Newline ends statements         |
| Use Case              | Enterprise apps, game dev (Unity), web APIs | Data science, AI, scripting, web apps |

---

## 📦 Hello World

### C#
```csharp
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello World");
    }
}
````

### Python

```python
print("Hello World")
```

---

## 🔤 Variables

| C#                      | Python    |
| ----------------------- | --------- |
| ```csharp               |           |
| int age = 25;           |           |
| string name = "Nikhil"; |           |
| double pi = 3.14;       |           |
| ```                     | ```python |
| age = 25                |           |
| name = "Nikhil"         |           |
| pi = 3.14               |           |

````|

---

## 🔁 Conditionals

### C#
```csharp
int x = 10;
if (x > 5) {
    Console.WriteLine("Greater");
} else {
    Console.WriteLine("Smaller");
}
````

### Python

```python
x = 10
if x > 5:
    print("Greater")
else:
    print("Smaller")
```

---

## 🔄 Loops

### C#

```csharp
for (int i = 0; i < 5; i++) {
    Console.WriteLine(i);
}
```

### Python

```python
for i in range(5):
    print(i)
```

---

## 📚 Collections (Array / List)

| C#                                                  | Python    |
| --------------------------------------------------- | --------- |
| ```csharp                                           |           |
| int[] numbers = {1, 2, 3};                          |           |
| List<string> names = new List<string> { "A", "B" }; |           |
| ```                                                 | ```python |
| numbers = [1, 2, 3]                                 |           |
| names = ["A", "B"]                                  |           |

````|

---

## ⚙️ Functions

### C#
```csharp
int Add(int a, int b) {
    return a + b;
}

Console.WriteLine(Add(3, 4));
````

### Python

```python
def add(a, b):
    return a + b

print(add(3, 4))
```

---

## 🏛️ Classes & Objects

### C#

```csharp
class Person {
    public string Name { get; set; }

    public void SayHello() {
        Console.WriteLine("Hello " + Name);
    }
}

Person p = new Person();
p.Name = "Nikhil";
p.SayHello();
```

### Python

```python
class Person:
    def __init__(self, name):
        self.name = name

    def say_hello(self):
        print("Hello", self.name)

p = Person("Nikhil")
p.say_hello()
```

---

## 🟢 Key Takeaways

* ✅ **C#:** Good for structured, large-scale apps, game development, enterprise software.
* ✅ **Python:** Best for rapid prototyping, AI, ML, scripting, automation.
* ✅ **Syntax:** Python is concise and beginner-friendly; C# is more explicit and structured.

---

## 📂 Recommended Usage

Use this cheat sheet as a quick reference when:

* 🔀 Switching between C# and Python
* 📚 Teaching syntax basics
* 🚀 Building cross-language projects

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


ke me to **generate this as a downloadable `README.md` file** so you can add it to your project repo?
```
