
# 📘 Python Printing Basics (`print()`)

Python’s **`print()` function** is the simplest way to display text or values on the screen.
This README explains **quotes, escape characters, separators, and end options** in a beginner-to-expert friendly way.

---

## 1️⃣ Printing Text with Quotes

Python lets you use **single**, **double**, or **triple quotes** to define strings.

```python
print("Hello World")   # Double quotes
print('Hello World')   # Single quotes
print('''Hello World''')   # Triple quotes
```

✅ **Tips:**

* Use **double quotes** if your text contains single quotes inside:
  `print("It's a sunny day")`
* Use **single quotes** if your text contains double quotes inside:
  `print('He said "Python is easy"')`
* Use **triple quotes (`'''` or `"""`)** for **multi-line text**:

```python
print('''This is
a multi-line
message''')
```

---

## 2️⃣ Escape Characters ( `\` )

Sometimes you want to use special characters in text. Python uses **backslash (`\`)** as an *escape character*.

| Escape | Meaning      | Example                                                     |
| ------ | ------------ | ----------------------------------------------------------- |
| `\'`   | Single quote | `print('It\'s Python!')` → It's Python!                     |
| `\"`   | Double quote | `print("He said \"Hi\"")` → He said "Hi"                    |
| `\\`   | Backslash    | `print("C:\\Users\\Name")` → C:\Users\Name                  |
| `\n`   | New line     | `print("Hello\nWorld")` → (Hello on 1st line, World on 2nd) |
| `\t`   | Tab space    | `print("A\tB")` → A    B                                    |

---

## 3️⃣ Separator (`sep`)

By default, Python separates multiple values with a **space**.
You can change this with the `sep` parameter.

```python
print("A", "B", "C")            # Default: A B C
print("A", "B", "C", sep=",")   # A,B,C
print("2025", "09", "25", sep="-")   # 2025-09-25
```

✅ Useful for printing CSVs, dates, file paths, etc.

---

## 4️⃣ End Parameter (`end`)

By default, `print()` ends with a **new line (`\n`)**.
You can change this behavior with `end`.

```python
print("Hello", end=" ")
print("World")   # Output: Hello World
```

```python
print("Loading", end="...")
print("Done")    # Output: Loading...Done
```

---

## 5️⃣ Combining Everything

```python
print("Name:", "Python", sep=" ", end="\n\n")
print("Path:", "C:\\Python\\Scripts")
print("Quote Example:", "She said \"Learning is fun!\"")
```

## 📝 Simple Tasks (Practice)

Try these mini tasks:

1. Print your **name** and **city** in one line using `sep="-"`.
2. Print `"Hello"` and `"World"` on the **same line** without using `+`.
3. Print a **Windows file path** (like `C:\Python\test.py`) correctly.
4. Use triple quotes to print a **2–3 line poem or message**.
5. Create a mini **table** using `\t` for spacing:

   ```
   Name    Age
   John    20
   Sara    22
   ```

---

## 🎤 Interview Questions & Answers

**Q1. What is the difference between single, double, and triple quotes in Python?**
👉 Single (`'`) and double (`"`) quotes are the same; you can use either.
Triple quotes (`'''` or `"""`) are used for multi-line strings or docstrings.

---

**Q2. What are escape characters in Python?**
👉 Escape characters let you insert special characters inside strings.
Example: `\n` for new line, `\t` for tab, `\\` for backslash.

---

**Q3. What does the `sep` parameter in `print()` do?**
👉 `sep` defines how multiple values are separated. Default is space.
Example: `print("A", "B", sep="-")` → `A-B`.

---

**Q4. What does the `end` parameter in `print()` do?**
👉 `end` defines what is printed at the end of the statement.
Default is `\n` (new line).
Example:

```python
print("Hello", end=" ")
print("World")
```

Output → `Hello World`

---

**Q5. How do you print a file path without errors in Python?**
👉 Use double backslashes `\\` or a raw string with `r""`.
Example:

```python
print("C:\\Users\\Admin\\file.txt")
print(r"C:\Users\Admin\file.txt")
```

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)


