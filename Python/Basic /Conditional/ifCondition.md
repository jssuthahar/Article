# 🧩 Python Conditional Statements (`if`, `elif`, `else`)

Conditional statements let your program **make decisions**.
👉 Think of them like *traffic signals* — stop, go, or wait depending on the condition.

---

## 1️⃣ `if` Statement

Runs a block of code **only if** the condition is true.

```python
age = 20
if age >= 18:
    print("Eligible to vote")
```

✅ Output: `Eligible to vote`

---

## 2️⃣ `if...else`

Choose between two options.

```python
marks = 35
if marks >= 40:
    print("Pass")
else:
    print("Fail")
```

✅ Output: `Fail`

---

## 3️⃣ `if...elif...else`

Choose among multiple options.

```python
marks = 85
if marks >= 90:
    print("Grade A+")
elif marks >= 75:
    print("Grade A")
elif marks >= 50:
    print("Grade B")
else:
    print("Fail")
```

✅ Output: `Grade A`

---

## 4️⃣ Nested `if`

`if` inside another `if`.

```python
age = 25
has_id = True

if age >= 18:
    if has_id:
        print("Eligible to enter club")
    else:
        print("ID required")
else:
    print("Not eligible")
```

✅ Output: `Eligible to enter club`

---

## 5️⃣ Short-Hand (One-Liner)

```python
x = 10
print("Even") if x % 2 == 0 else print("Odd")
```

---

# 🚀 Real-Time Examples

### Example 1: Login System

```python
username = "admin"
password = "1234"

if username == "admin" and password == "1234":
    print("Login successful")
else:
    print("Invalid credentials")
```

---

### Example 2: Online Shopping Discount

```python
amount = 1200

if amount >= 1000:
    print("You get 10% discount")
else:
    print("No discount")
```

---

### Example 3: Project Role Assignment

```python
experience = 3

if experience < 1:
    print("Role: Intern")
elif experience < 3:
    print("Role: Junior Developer")
elif experience < 5:
    print("Role: Software Engineer")
else:
    print("Role: Senior Developer")
```

---

# 🛠 Developer Tips 


* Always **use proper indentation** (Python depends on spaces, not braces `{}` like Java/C#).
* Start with **clear variable names** (`marks`, `age` instead of `m`, `a`).
* Add **comments** for each condition to explain logic.

* Avoid **deep nested if** → use `elif` instead.
* Extract repeated conditions into **functions**.
* Handle **edge cases** (e.g., what if marks = -10?).


* Write **clean, readable conditions** (avoid complex one-liners if not necessary).
* Use **logging** instead of `print` in real projects.
* Always validate **user inputs** before checking conditions.
* Use **constants or enums** instead of hardcoding strings (`"admin"`, `"user"`).

---

# 📝 Task Assignments

1. Write a program that checks if a number is **positive, negative, or zero**.
2. Create a **grading system** (90+ = A, 75+ = B, 50+ = C, else Fail).
3. Check if a **year is a leap year**.
4. Build a **simple ATM system**: check if the entered PIN is correct, then allow withdrawal if balance is sufficient.
5. Create a program that assigns **job role based on years of experience**.

---

# 🎤 Interview Questions & Answers

**Q1. Difference between `if` and `elif`?**
👉 `if` → first condition check.
👉 `elif` → extra conditions if the first fails.
👉 Only **one block executes**.

---

**Q2. What happens if multiple conditions are true in `if...elif...else`?**
👉 Only the **first matching condition** executes, others are skipped.

---

**Q3. Can we write `else` without `if`?**
👉 No, `else` must follow an `if`.

---

**Q4. What is the difference between nested `if` and `elif`?**
👉 `elif` → checks multiple conditions in sequence.
👉 Nested `if` → one condition inside another. Used when **two checks depend on each other**.

---

**Q5. Best practices for writing conditional statements in Python?**
👉 Keep conditions **simple and readable**.
👉 Use **functions** to avoid duplicate logic.
👉 Prefer `elif` over nested `if` where possible.
👉 Use **constants/enums** for fixed values.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)


