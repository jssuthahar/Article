# 🖥️ Python Input & Output (`input()`, `print()`)

Python programs usually need two things:

1. **Input** → Get data from the user.
2. **Output** → Show result to the user.

---

## 1️⃣ `input()` → Get User Input

* Always returns a **string**.
* You must convert it to `int` or `float` if needed.

```python
name = input("Enter your name: ")
print("Hello,", name)
```

✅ If user types `Alice` → Output: `Hello, Alice`

---

### Converting Input

```python
age = int(input("Enter your age: "))
height = float(input("Enter your height (in meters): "))

print("Age:", age)
print("Height:", height)
```

✅ If user types `25` and `1.75` → Output:

```
Age: 25
Height: 1.75
```

---

## 2️⃣ `print()` with Formatting

### Multiple Arguments

```python
name = "Bob"
age = 22
print("Name:", name, "Age:", age)
```

---

### `sep` (separator)

```python
print("2025", "09", "25", sep="-")
```

✅ Output: `2025-09-25`

---

### `end` (line ending)

```python
print("Hello", end=" ")
print("World")
```

✅ Output: `Hello World`

---

### f-Strings (Best Way 💡)

```python
name = "Alice"
marks = 90
print(f"Student {name} scored {marks} marks.")
```

✅ Output: `Student Alice scored 90 marks.`

---

# 🚀 Real-Time Examples

### Example 1: Simple Calculator

```python
a = int(input("Enter first number: "))
b = int(input("Enter second number: "))

print("Sum:", a + b)
print("Product:", a * b)
```

---

### Example 2: Login Form

```python
username = input("Enter username: ")
password = input("Enter password: ")

if username == "admin" and password == "1234":
    print("Login successful")
else:
    print("Invalid credentials")
```

---

### Example 3: Temperature Conversion

```python
celsius = float(input("Enter temperature in Celsius: "))
fahrenheit = (celsius * 9/5) + 32
print(f"{celsius}°C = {fahrenheit}°F")
```

---

# 🛠 Developer Tips (0–5 Years)

👶 **0–1 Year (Beginners):**

* Always use `int()` or `float()` if you expect numbers.
* Start with simple inputs like name, age.

👨‍💻 **2–3 Years (Intermediate):**

* Validate inputs (e.g., avoid crashing if user types text instead of number).
* Use `f-strings` for cleaner output formatting.

🧑‍💼 **4–5 Years (Experienced):**

* Don’t use `input()` in production directly — use **forms, config files, or APIs**.
* For debugging, prefer **logging** instead of `print()`.
* Handle **edge cases** like empty input or wrong type gracefully.

---

# 📝 Task Assignments

1. Ask the user’s **name and age**, then print:
   `"Hello <name>, you are <age> years old."`

2. Ask for 3 numbers and print their **average**.

3. Write a program that asks for **marks** and prints grade (A/B/C/Fail).

4. Create a program that asks for a **username & password**, allow login only if correct.

5. Ask a user for **temperature in Celsius** and convert it to Fahrenheit.

---

# 🎤 Interview Questions & Answers

**Q1. What is the default return type of `input()`?**
👉 Always `str` (string).

---

**Q2. How do you take multiple inputs in one line?**

```python
a, b = input("Enter two numbers: ").split()
print(a, b)
```

---

**Q3. Difference between `print("x" + "y")` and `print("x", "y")`?**
👉 `"+"` → concatenates strings without space.
👉 `","` → adds a space by default.

---

**Q4. What are `sep` and `end` in `print()`?**
👉 `sep` → changes separator (default is space).
👉 `end` → changes line ending (default is newline).

---

**Q5. What’s the best way to format strings in Python?**
👉 Use **f-strings** (fastest, cleanest, and most readable).

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)


