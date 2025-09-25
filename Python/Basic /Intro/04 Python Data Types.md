# 📘 Python Data Types

In Python, **everything is an object**.
A **data type** tells Python what kind of value a variable holds and what operations can be performed on it.

Unlike Java or C#, Python does not require you to declare data types explicitly — they are **inferred automatically at runtime**.

---

## 1️⃣ Basic Built-in Data Types

### 🔤 String (`str`)

* Used for text.
* Can be created with single (`'`), double (`"`), or triple quotes (`''' """`).

```python
name = "Alice"
print(name)        # Alice
print(type(name))  # <class 'str'>
```

➡ Operations: concatenation (`+`), repetition (`*`), slicing (`[ ]`).

---

### 🔢 Integer (`int`)

* Whole numbers (positive, negative, or zero).

```python
age = 25
print(type(age))   # <class 'int'>
```

---

### 🌊 Float (`float`)

* Numbers with decimal points.

```python
pi = 3.14159
print(type(pi))    # <class 'float'>
```

---

### ✅ Boolean (`bool`)

* Only `True` or `False`.
* Commonly used in conditions.

```python
is_active = True
print(type(is_active))   # <class 'bool'>
```

---

## 2️⃣ Collection Data Types

### 📋 List (`list`)

* Ordered, **mutable** (can change values).
* Allows duplicates.

```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])         # apple
fruits.append("orange")  # add item
```

---

### 🧾 Tuple (`tuple`)

* Ordered, **immutable** (cannot change once created).
* Allows duplicates.

```python
coordinates = (10, 20)
print(coordinates[1])   # 20
```

---

### 🗂 Set (`set`)

* Unordered, **no duplicates**, mutable.

```python
numbers = {1, 2, 3, 3, 4}
print(numbers)   # {1, 2, 3, 4}
```

---

### 📖 Dictionary (`dict`)

* Key–value pairs.
* Mutable, unordered (in Python 3.7+, maintains insertion order).

```python
student = {"name": "Alice", "age": 25}
print(student["name"])   # Alice
```

---

## 3️⃣ Special Data Type

### ⚫ NoneType (`None`)

* Represents the absence of a value.

```python
x = None
print(type(x))   # <class 'NoneType'>
```

---

## 4️⃣ Advanced Data Types

Python also has built-in advanced types:

* **Complex Numbers** → `3 + 4j`
* **Bytes** → immutable sequences of bytes (`b"hello"`)
* **Bytearray** → mutable version of bytes
* **Range** → sequence of numbers used in loops (`range(1, 5)` → 1,2,3,4)

---

## 5️⃣ Beginner → Expert Understanding

* **Beginner**: Know how to create variables of different types.
* **Intermediate**: Understand mutability (`list` vs `tuple`) and uniqueness (`set`).
* **Expert**: Learn memory management, performance trade-offs, and type hints.

---

## 🌟 Pro Tips

* ✅ Use `type()` to check data type.
* ✅ Use `isinstance(obj, type)` to check if a variable matches a type.

  ```python
  print(isinstance(10, int))   # True
  ```
* ✅ Use **type hints** for clarity in big projects:

```python
name: str = "Alice"
age: int = 25
```

* ✅ For data analysis, Python also supports **custom data types** with classes.

---

## 📝 Task Assignments

1. Create variables for:

   * Your name (string)
   * Your age (integer)
   * Your height (float)
   * Whether you are a student (boolean)

2. Create a list of 5 fruits. Add one more fruit and print the list.

3. Create a tuple of 3 colors. Try changing one value — observe what happens.

4. Create a set with duplicate numbers and print it.

5. Create a dictionary with `name`, `age`, and `city`. Print the value of `city`.

6. Assign `None` to a variable and print its type.


# 📘 Python Variables & Data Types — Interview Q&A

### Q1. What is a variable in Python?

👉 A variable is a **named reference** to a value stored in memory. Python variables do not store data directly; they point to objects.

---

### Q2. Why don’t we declare data types for variables in Python?

👉 Python is **dynamically typed**. It determines the type of a variable at **runtime**, unlike Java or C#, which are **statically typed** and require explicit type declarations.

---

### Q3. Can you change the type of a variable in Python?

👉 Yes. A variable can point to any object type.

```python
x = 10       # int
x = "Hello"  # str
```

This is allowed because Python is dynamically typed.

---

### Q4. What is the difference between mutable and immutable types in Python?

👉 **Mutable** → can change (e.g., `list`, `dict`, `set`).
**Immutable** → cannot change (e.g., `int`, `str`, `tuple`).

---

### Q5. How do you check the type of a variable in Python?

👉 Use `type()` or `isinstance()`.

```python
print(type(42))   # <class 'int'>
print(isinstance(42, int))  # True
```

---

### Q6. Why is Python called “dynamically typed but strongly typed”?

👉 *Dynamically typed* → type is decided at runtime.
*Strongly typed* → you cannot mix incompatible types without explicit conversion.

```python
print("Age: " + 25)   # ❌ Error
print("Age: " + str(25))  # ✅ Works
```

---

### Q7. What are type hints in Python?

👉 Type hints were introduced in **PEP 484** to make code more readable and help tools detect type errors. They are optional.

```python
name: str = "Alice"
age: int = 25
```

---

---

# 📘 Python Data Types — Interview Q&A

### Q1. What are the basic built-in data types in Python?

👉 Common ones are:

* `str` (string)
* `int` (integer)
* `float` (decimal)
* `bool` (boolean)
* `list`, `tuple`, `set`, `dict`
* `NoneType`

---

### Q2. What is the difference between a list and a tuple?

👉 Both are ordered collections, but:

* `list` → mutable (can be changed).
* `tuple` → immutable (cannot be changed).

---

### Q3. What is the difference between a set and a list?

👉 - `list` allows duplicates, ordered.

* `set` does not allow duplicates, unordered.

---

### Q4. What is `None` in Python?

👉 `None` is a special constant that represents **absence of a value**. Its type is `NoneType`. It’s often used to indicate “no result” or “not set”.

---

### Q5. What is the difference between mutable and immutable data types?

👉 - **Mutable**: `list`, `dict`, `set`, `bytearray`.

* **Immutable**: `int`, `float`, `str`, `tuple`, `frozenset`.

---

### Q6. How does Python handle memory for variables and objects?

👉 Python variables are **references** to objects stored in memory. Multiple variables can point to the same object. Immutable objects create a new copy when modified.

---

### Q7. What are advanced data types in Python?

👉 - `complex` → complex numbers (`3+4j`).

* `bytes` and `bytearray` → for binary data.
* `range` → sequence generator (used in loops).

---

### Q8. Difference between `is` and `==` in Python?

👉 - `==` checks **value equality**.

* `is` checks **object identity** (whether two variables point to the same object).

```python
a = [1,2,3]
b = [1,2,3]
print(a == b)   # True (values same)
print(a is b)   # False (different objects)
```

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)


