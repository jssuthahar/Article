# 🔁 Python Loops (for, while, nested)

Loops allow you to **repeat actions** without writing code again and again.
👉 Think of them like a **robot** that keeps doing a task until told to stop.

---

## 1️⃣ `for` Loop

Used to iterate over a sequence (`list`, `string`, `tuple`, `range`, etc.).

```python
for i in range(5):
    print(i)
```

✅ Output: `0 1 2 3 4`

---

## 2️⃣ `while` Loop

Repeats until a condition becomes False.

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

✅ Output: `0 1 2 3 4`

---

## 3️⃣ Nested Loops

Loop inside another loop.

```python
for i in range(3):
    for j in range(2):
        print(i, j)
```

✅ Output:

```
0 0
0 1
1 0
1 1
2 0
2 1
```

---

# 🚀 Real-Time Examples

### Example 1: Attendance List

```python
students = ["Alice", "Bob", "Charlie"]
for name in students:
    print("Present:", name)
```

---

### Example 2: Password Retry System

```python
password = "1234"
attempts = 0

while attempts < 3:
    entered = input("Enter password: ")
    if entered == password:
        print("Access Granted")
        break
    else:
        print("Wrong password")
    attempts += 1
```

---

### Example 3: Multiplication Table

```python
num = 5
for i in range(1, 11):
    print(num, "x", i, "=", num * i)
```

---

# ⏹ Loop Control Statements

* **`break`** → Exit loop completely.
* **`continue`** → Skip current iteration.
* **`pass`** → Do nothing (placeholder).

```python
for i in range(5):
    if i == 2:
        continue
    if i == 4:
        break
    print(i)
```

✅ Output: `0 1 3`

---

# 🛠 Developer Tips (0–5 Years)

👶 **0–1 Year (Beginners):**

* Always avoid **infinite loops** (make sure `while` condition ends).
* Use `range()` for counting loops.
* Practice loops with lists and strings.

👨‍💻 **2–3 Years (Intermediate):**

* Use **list comprehensions** instead of simple `for` loops for clean code.

```python
squares = [x**2 for x in range(5)]
```

* Avoid unnecessary nested loops (use sets, dicts for efficiency).

🧑‍💼 **4–5 Years (Experienced):**

* Watch out for **time complexity** (nested loops can slow performance).
* Use **enumerate()** instead of manual counters.

```python
for index, value in enumerate(["a", "b", "c"]):
    print(index, value)
```

* Consider **generator expressions** for memory efficiency.

---

# 📝 Task Assignments

1. Print all numbers from **1 to 50**.
2. Write a program to find the **sum of first 100 numbers**.
3. Print the **multiplication table** of a number entered by the user.
4. Create a **star pattern**:

```
*
**
***
****
*****
```

5. Use a `while` loop to build a **guessing game** (keep asking until user guesses correct number).

---

# 🎤 Interview Questions & Answers

**Q1. Difference between `for` and `while` loop?**
👉 `for` → when number of iterations is known.
👉 `while` → when condition controls the loop (unknown iterations).

---

**Q2. What is an infinite loop?**
👉 A loop that never ends.
Example:

```python
while True:
    print("Hello")   # runs forever
```

---

**Q3. Difference between `break`, `continue`, and `pass`?**
👉 `break` → exits loop.
👉 `continue` → skips current iteration.
👉 `pass` → does nothing (placeholder).

---

**Q4. What is a nested loop and when to avoid it?**
👉 Loop inside another loop.
👉 Avoid if you can use dictionaries/sets instead → better performance.

---

**Q5. What is a Pythonic way to loop with indexes?**
👉 Use `enumerate()` instead of manual counters.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)


