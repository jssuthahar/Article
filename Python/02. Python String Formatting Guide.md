# Python String Formatting Guide

## Overview
This document provides an overview of different ways to format strings in Python. String formatting is essential for constructing readable and maintainable code when dealing with dynamic content.

## Methods of String Formatting
### 1. Using `%` Operator (Old Style)
```python
name = "Alice"
age = 25
formatted_string = "My name is %s and I am %d years old." % (name, age)
print(formatted_string)
```
**Output:**
```
My name is Alice and I am 25 years old.
```
*Explanation:* The `%s` and `%d` placeholders are replaced with `name` and `age` values, respectively.

*Use case:* This method is outdated and should generally be avoided in favor of newer methods. Use it only for maintaining legacy code.

### 2. Using `str.format()` (New Style)
```python
name = "Alice"
age = 25
formatted_string = "My name is {} and I am {} years old.".format(name, age)
print(formatted_string)
```
**Output:**
```
My name is Alice and I am 25 years old.
```
*Explanation:* `{}` acts as a placeholder, and values are inserted in the order they appear in `.format()`.

*Use case:* Preferred in older Python versions (before 3.6). Provides more flexibility than `%` formatting.

#### Positional and Keyword Arguments
```python
formatted_string = "My name is {name} and I am {age} years old.".format(name="Alice", age=25)
print(formatted_string)
```
**Output:**
```
My name is Alice and I am 25 years old.
```
*Explanation:* Named placeholders `{name}` and `{age}` allow more readable and flexible formatting.

*Use case:* Useful when working with dynamically generated strings where named placeholders improve readability.

### 3. Using f-strings (Python 3.6+)
```python
name = "Alice"
age = 25
formatted_string = f"My name is {name} and I am {age} years old."
print(formatted_string)
```
**Output:**
```
My name is Alice and I am 25 years old.
```
*Explanation:* f-strings allow inline variable interpolation, making the syntax more concise and readable.

*Use case:* The recommended method for most cases in modern Python due to its efficiency and readability.

### 4. Using Template Strings (Safe for User Input)
```python
from string import Template

template = Template("My name is $name and I am $age years old.")
formatted_string = template.substitute(name="Alice", age=25)
print(formatted_string)
```
**Output:**
```
My name is Alice and I am 25 years old.
```
*Explanation:* Template Strings use `$` as a placeholder, making them safer for handling user inputs.

*Use case:* Best for cases where string formatting involves user input, reducing the risk of injection attacks.

## Formatting Numbers
### 1. Floating Point Precision
```python
num = 3.14159
formatted_string = "{:.2f}".format(num)  # 2 decimal places
print(formatted_string)
```
**Output:**
```
3.14
```
*Explanation:* `{:.2f}` ensures the number is displayed with two decimal places.

*Use case:* When precise decimal formatting is required, such as financial or scientific applications.

### 2. Padding and Alignment
```python
text = "Hello"
print(f"{text:<10}")  # Left align
print(f"{text:>10}")  # Right align
print(f"{text:^10}")  # Center align
```
**Output:**
```
Hello     
     Hello
  Hello   
```
*Explanation:* `<`, `>`, and `^` control left, right, and center alignment, respectively, within a 10-character width.

*Use case:* Useful when formatting tabular data or aligning text output in a structured way.

## Conclusion
Python provides multiple ways to format strings, each suitable for different use cases:
- **Use f-strings** (`f"{var}"`) for modern, readable, and efficient string formatting (Python 3.6+).
- **Use `.format()`** for compatibility with older Python versions.
- **Use template strings** when handling user-generated input for security.
- **Avoid `%` formatting**, except when maintaining legacy code.

