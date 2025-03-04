# Python Basics - `print()` Function & Indentation

## 1. `print()` Function
The `print()` function in Python is used to display output to the console. It can accept multiple parameters and allows formatting options.

### **Example:**
```python
print("Hello, World!")
```
**Output:**
```
Hello, World!
```

### **Key Parameters in `print()`**
- `sep`: Defines a separator between multiple values (default is space `' '`).
- `end`: Defines what appears at the end of the output (default is newline `\n`).

#### **Example:**
```python
print("suthahar", "jegatheesan", "India", sep="*", end="??")
```
**Output:**
```
suthahar*jegatheesan*India??
```

## 2. Python is Case-Sensitive
Python treats `print()`, `Print()`, and `PRINT()` as different identifiers. Only `print()` (all lowercase) is valid.

#### **Example:**
```python
Print("Hello")  # ❌ Error: NameError: name 'Print' is not defined
```

## 3. No `char` Data Type
Python does not have a `char` data type. Instead, a single character is stored as a **string of length 1** (`str`).

#### **Example:**
```python
char = 'A'  # This is a string, not a char
print(type(char))
```
**Output:**
```
<class 'str'>
```

## 4. Assigning `print` to a Variable
You can assign the `print` function to a variable and use it.

#### **Example:**
```python
x = print
x("Hello, World!")  # Works like print()
```

## 5. Indentation in Python
Python uses **indentation** instead of `{}` to define code blocks. Incorrect indentation leads to errors.

#### ✅ **Correct Example:**
```python
for i in range(3):
    print("Hello")  # Proper indentation
print("Done")  # Outside the loop
```

#### ❌ **Incorrect Example (IndentationError):**
```python
for i in range(3):
print("Hello")  # ❌ IndentationError
```

### **Why is indentation important?**
- Defines code structure.
- Makes the code **clean and readable**.
- Prevents **IndentationError**.

Python follows **4 spaces per indentation level** by convention.


## Watch the Video  
🎥 [Python Print Function in Tamil - YouTube](https://www.youtube.com/watch?v=mHkjisAGXbA)  

## Stay Connected  
Subscribe for more Python tutorials in Tamil! 🚀  

---
**Happy Coding! 🚀**
## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

