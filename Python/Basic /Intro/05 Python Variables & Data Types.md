# 🐍 Python Variables & Data Types

---

## 1️⃣ What is a Variable?

A **variable** is like a *box* that stores a value.
You give the box a **name** (variable name), and you can change or reuse it later.

Example:

```python
name = "Alice"
age = 25
print(name, age)
```

Output:

```
Alice 25
```

Here, `name` and `age` are variables.

---

## 2️⃣ Why Python Variables Don’t Need a Data Type

In many languages (like **C, C++, Java, C#**), you must **declare the data type** before using a variable:

```java
int age = 25;     // Java
string name = "Alice"; 
```

But in **Python**, you just assign the value:

```python
age = 25          # Python automatically knows this is an integer
name = "Alice"    # Python automatically knows this is a string
```

✅ **Why?**

* Python is **dynamically typed** → It decides the variable’s type at *runtime* (when the program runs).
* Java, C# are **statically typed** → You must define type before running.

---

## 3️⃣ Beginner’s View

Think of Python like a smart teacher.
If you write:

```python
x = 10
```

Python says: “Oh, `x` is a number (int).”

If you write:

```python
x = "Hello"
```

Python says: “Now `x` is a string.”

You don’t need to tell Python the type — it figures it out.

---

## 4️⃣ Intermediate View

Python uses something called **Duck Typing**:

> *“If it looks like a duck, swims like a duck, and quacks like a duck, then it’s a duck.”*

Meaning → Python doesn’t care about the type’s name. It only cares about what the object **can do**.

Example:

```python
x = [1, 2, 3]        # list
y = (1, 2, 3)        # tuple

print(len(x))        # Works → list has length
print(len(y))        # Works → tuple has length
```

Even though `list` and `tuple` are different types, Python treats them similarly when possible.

---

## 5️⃣ Expert View

* **Memory Management**: Python variables are *references* (pointers) to objects stored in memory.

* **Mutability**:

  * Immutable types: `int`, `float`, `str`, `tuple` → Once created, cannot change.
  * Mutable types: `list`, `dict`, `set` → Can be modified.

* **Comparison with Java/C#:**

  * Java:

    ```java
    int num = 10;   // Fixed type (int)
    num = "Hello";  // ❌ Compile-time error
    ```
  * Python:

    ```python
    num = 10
    num = "Hello"   # ✅ Allowed (but may cause confusion if not careful)
    ```

---

## 6️⃣ Type Checking in Python

You can always check the type with `type()`:

```python
x = 100
print(type(x))   # <class 'int'>

y = "Python"
print(type(y))   # <class 'str'>
```

---

## 7️⃣ Type Conversion (Casting)

Convert variables from one type to another:

```python
x = "100"
y = int(x) + 50
print(y)   # 150
```

Common conversions:

* `int()` → to integer
* `float()` → to decimal
* `str()` → to string
* `bool()` → to True/False

---

## 🌟 Pro Tips

* ✅ Use **descriptive names**: `customer_age` is better than `x`.
* ✅ Keep variable usage **consistent**. Don’t change type unless needed.
* ✅ For big projects, use **type hints** (introduced in Python 3.5+):

```python
name: str = "Alice"
age: int = 25
height: float = 5.6
```

This doesn’t force types (still dynamic), but helps other developers and tools (like editors/linters).

* ✅ Remember: **Readability > Cleverness**.
  Python is designed for clarity — follow that principle.

---

## 📝 Task Assignments

Try these exercises:

1. Create variables `name`, `age`, `city` and print them in one sentence.
   Example: `"My name is Alice, I am 25, I live in London."`

2. Store `"100"` as a string. Convert it into an integer and add 20.

3. Create a variable `price = 99.99`. Convert it to an integer.

4. Use `type()` to check:

   * `42`
   * `3.14`
   * `"Hello"`
   * `True`

5. Try reassigning a variable:

   ```python
   x = 10
   x = "Python"
   print(x)
   ```

   ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)


