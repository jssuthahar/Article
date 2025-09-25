# 🧩 Other Conditional Types in Python

## 1️⃣ Ternary (Conditional Expression / One-Liner `if`)

Instead of writing multiple lines, you can use a **single-line `if-else`**.

```python
status = "Pass" if marks >= 40 else "Fail"
print(status)
```

✅ Useful for **short, simple conditions**.

---

## 2️⃣ Match-Case (Python 3.10+ → Similar to Switch in C/Java/C#)

Python didn’t have `switch-case` for years, but now we use `match`.

```python
role = "admin"

match role:
    case "admin":
        print("You have full access")
    case "editor":
        print("You can edit content")
    case "viewer":
        print("You can only view")
    case _:
        print("Invalid role")
```

✅ Cleaner when handling **multiple fixed values**.
✅ `_` acts as **default (like `else`)**.

---

## 3️⃣ Using Dictionaries for Conditional Logic (Advanced Trick 🚀)

Instead of multiple `if-elif`, you can use a dictionary mapping.

```python
def admin():
    return "Full access"

def editor():
    return "Can edit content"

def viewer():
    return "Can only view"

actions = {
    "admin": admin,
    "editor": editor,
    "viewer": viewer
}

role = "editor"
print(actions.get(role, lambda: "Invalid role")())
```

✅ Pro tip for **clean, maintainable code** in real projects.

---

## 4️⃣ Boolean Conditions (Short-Circuits)

Sometimes you don’t even need `if`.
Just use a **boolean value directly**.

```python
is_logged_in = True

if is_logged_in:
    print("Welcome back!")
```

Or shorter:

```python
print("Welcome back!") if is_logged_in else None
```

---

## 5️⃣ Assert Statement (Validation Check)

Not exactly a conditional, but used to **check conditions** during development.

```python
age = 20
assert age >= 18, "Age must be at least 18"
print("Access granted")
```

✅ Good for **testing & debugging**.

---

# 🛠 Developer Tips (0–5 Years)

👶 **0–1 Year:** Stick to `if`, `elif`, `else`. Practice a lot.
👨‍💻 **2–3 Years:** Start using **ternary expressions** for cleaner code.
🧑‍💼 **4–5 Years:** Use **match-case or dictionary-based conditions** for better readability in real projects.

---

# 📝 Task Assignments

1. Use **ternary operator** to print `"Even"` or `"Odd"` for a number.
2. Write a **match-case** program for days of the week.
3. Use a **dictionary-based condition** to return messages for `"admin"`, `"editor"`, `"viewer"`.
4. Use `assert` to make sure entered marks are between 0 and 100.

---

# 🎤 Interview Questions & Answers

**Q1. Is there a switch-case in Python?**
👉 Before Python 3.10 → No (we used `if-elif`).
👉 From Python 3.10 → Yes, using `match-case`.

---

**Q2. When should we use a ternary operator?**
👉 For short, simple conditions. Avoid for complex logic (hurts readability).

---

**Q3. How do we replace many `if-elif` conditions in Python?**
👉 Options:

* `match-case` (Python 3.10+)
* Dictionary-based mapping (cleaner, scalable)

---

**Q4. What is the difference between `if` and `assert`?**
👉 `if` → controls program flow.
👉 `assert` → debugging tool, ensures condition is True, else raises error.

---

**Q5. Why does Python encourage readable conditionals?**
👉 Because Python follows the philosophy: **“Readability counts”** (Zen of Python). Clean, simple conditions help avoid bugs in large projects.

---

✅ So yes, besides `if`, `elif`, and `else`, we also have **ternary expressions, match-case, dictionary dispatch, assert checks, and boolean shortcuts**.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)


