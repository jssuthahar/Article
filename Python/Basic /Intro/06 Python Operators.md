# ⚡ Python Operators

Operators are **symbols** that let you perform actions on variables and values.
Example: add numbers, compare values, check conditions, etc.

👉 Think of operators as the *tools* you use to work with your data.

---

## 1️⃣ Arithmetic Operators

| Operator | Meaning                      | Example   | Output |
| -------- | ---------------------------- | --------- | ------ |
| `+`      | Addition                     | `10 + 5`  | 15     |
| `-`      | Subtraction                  | `10 - 5`  | 5      |
| `*`      | Multiplication               | `10 * 5`  | 50     |
| `/`      | Division                     | `10 / 3`  | 3.333… |
| `//`     | Floor Division (no decimals) | `10 // 3` | 3      |
| `%`      | Modulus (remainder)          | `10 % 3`  | 1      |
| `**`     | Exponent (power)             | `2 ** 3`  | 8      |

🔹 **Real-time Example (Shopping Bill):**

```python
price = 250
quantity = 3
total = price * quantity
print("Total Bill:", total)   # Total Bill: 750
```

---

## 2️⃣ Comparison Operators

Used to compare two values. Result is always `True` or `False`.

| Operator | Meaning          | Example  | Output |
| -------- | ---------------- | -------- | ------ |
| `==`     | Equal to         | `5 == 5` | True   |
| `!=`     | Not equal        | `5 != 3` | True   |
| `>`      | Greater than     | `10 > 3` | True   |
| `<`      | Less than        | `2 < 5`  | True   |
| `>=`     | Greater or equal | `5 >= 5` | True   |
| `<=`     | Less or equal    | `3 <= 3` | True   |

🔹 **Real-time Example (Login Check):**

```python
entered_pin = 1234
correct_pin = 1234
print(entered_pin == correct_pin)   # True → Access granted
```

---

## 3️⃣ Logical Operators

| Operator | Meaning                          | Example                | Output |
| -------- | -------------------------------- | ---------------------- | ------ |
| `and`    | True if **both** are True        | `(5 > 2) and (10 > 5)` | True   |
| `or`     | True if **at least one** is True | `(5 > 10) or (10 > 5)` | True   |
| `not`    | Reverses result                  | `not(5 > 2)`           | False  |

🔹 **Real-time Example (Eligibility Check):**

```python
age = 20
has_id = True
print(age >= 18 and has_id)   # True → Eligible to vote
```

---

## 4️⃣ Assignment Operators

Used to assign and update values.

| Operator | Example   | Equivalent   |
| -------- | --------- | ------------ |
| `=`      | `x = 5`   | Assign 5     |
| `+=`     | `x += 3`  | `x = x + 3`  |
| `-=`     | `x -= 2`  | `x = x - 2`  |
| `*=`     | `x *= 2`  | `x = x * 2`  |
| `/=`     | `x /= 2`  | `x = x / 2`  |
| `//=`    | `x //= 2` | `x = x // 2` |
| `%=`     | `x %= 2`  | `x = x % 2`  |
| `**=`    | `x **= 2` | `x = x ** 2` |

🔹 **Real-time Example (Discount Update):**

```python
price = 100
discount = 20
price -= discount
print("Final Price:", price)   # Final Price: 80
```

---

## 5️⃣ Bitwise Operators (Advanced)

Work on **binary numbers**.

| Operator | Meaning     | Example       |    |        |
| -------- | ----------- | ------------- | -- | ------ |
| `&`      | AND         | `5 & 3` → 1   |    |        |
| `        | `           | OR            | `5 | 3` → 7 |
| `^`      | XOR         | `5 ^ 3` → 6   |    |        |
| `~`      | NOT         | `~5` → -6     |    |        |
| `<<`     | Left Shift  | `5 << 1` → 10 |    |        |
| `>>`     | Right Shift | `5 >> 1` → 2  |    |        |

(For freshers: we’ll use these mainly in **performance tuning** or **low-level tasks**.)

---

## 6️⃣ Membership Operators

| Operator | Example                              | Output |
| -------- | ------------------------------------ | ------ |
| `in`     | `"apple" in ["apple", "banana"]`     | True   |
| `not in` | `"grape" not in ["apple", "banana"]` | True   |

🔹 **Real-time Example (Search):**

```python
fruits = ["apple", "banana", "cherry"]
print("banana" in fruits)   # True
```

---

## 7️⃣ Identity Operators

| Operator | Example      | Output                    |
| -------- | ------------ | ------------------------- |
| `is`     | `x is y`     | True if same object       |
| `is not` | `x is not y` | True if different objects |

🔹 **Real-time Example:**

```python
a = [1,2,3]
b = [1,2,3]
print(a == b)   # True (values same)
print(a is b)   # False (different memory)
```

---

## 🌟 Pro Tips

* ✅ Always use `==` for value comparison, `is` for identity checks.
* ✅ Use floor division `//` when working with counts (like pages, rows).
* ✅ Be careful with floating-point (`0.1 + 0.2 != 0.3` sometimes due to precision).
* ✅ Logical operators use **short-circuiting** → if the first condition decides the result, Python skips the rest.

---

## 📝 Task Assignments

1. Write a program to calculate the **area of a rectangle** (length × width).
2. Compare two numbers and print who is greater.
3. Check if a student is **eligible for an exam** (attendance ≥ 75 **and** marks ≥ 40).
4. Use `+=` to increase a salary by 10%.
5. Create a list of fruits. Check if `"apple"` exists using `in`.
6. Try `is` vs `==` with two identical lists. Explain the difference.

---

## 🎤 Interview Questions & Answers

**Q1. Difference between `is` and `==`?**
👉 `==` checks value equality, `is` checks object identity (memory reference).

---

**Q2. What is the difference between `/` and `//`?**
👉 `/` → normal division (float result).
👉 `//` → floor division (integer result, removes decimals).

---

**Q3. What is operator precedence?**
👉 The order in which operators are evaluated.
Example:

```python
print(2 + 3 * 4)  # 14, not 20 (multiplication first)
```

---

**Q4. What is short-circuiting in logical operators?**
👉 In `and`/`or`, Python stops evaluating once the result is known.

```python
print(False and (10/0))   # False (no error, second not checked)
```

---

**Q5. What’s the difference between mutable and immutable objects in terms of operators?**
👉 With mutable objects (`list`), operators like `+=` modify the object.
👉 With immutable objects (`int`, `str`), operators create a new object.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)


