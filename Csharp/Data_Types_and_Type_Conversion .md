# Data Types and Type Conversion in C#

## Overview
This document provides an explanation of fundamental data types in C#, how values can be reassigned and replaced, and how type conversion works using `Convert.ToString()` and `Convert.ToInt16()`.

## Data Types in C#
C# supports various data types, including:
- **int**: Used for storing integer values.
- **string**: Stores sequences of characters.
- **char**: Holds a single character.
- **float, double, decimal**: Used for storing floating-point numbers.
- **bool**: Holds `true` or `false` values.

## Value Reassignment and Replacement

### Integer Reassignment
```csharp
int nu = 12;
nu = 23;
nu = 100;
```
Explanation:
- Initially, `nu` is assigned the value `12`.
- The value is then replaced with `23`.
- Finally, it is replaced with `100`. The previous values are lost.

### String Reassignment
```csharp
string name = "Kishor";
name = "Parthipan";
```
Explanation:
- `name` initially holds the value "Kishor".
- The value is then replaced with "Parthipan".
- Similar to integers, previous values are lost as the variable now holds a new value.

### Character Assignment
```csharp
char fname = 'j';
```
Explanation:
- `fname` stores a single character, `'j'`.
- Unlike `string`, `char` can hold only one character.

## String Concatenation
```csharp
string firstnumber = txtfirst.Text;
string second = txtsecond.Text;
string result = firstnumber + second;
txtresult.Text = result;
```
Explanation:
- `txtfirst.Text` and `txtsecond.Text` retrieve text from input fields.
- Since both are strings, using `+` concatenates them instead of performing addition.
- Example:
  - If `txtfirst.Text = "123"` and `txtsecond.Text = "456"`, then `result = "123456"`.
  - If `txtfirst.Text = "ABC"` and `txtsecond.Text = "123"`, it still concatenates to "ABC123".
  - However, attempting mathematical operations on non-numeric values will cause errors.

## Type Conversion (String to Integer)
```csharp
int firstnumber = Convert.ToInt16(txtfirst.Text);
int second = Convert.ToInt16(txtsecond.Text);
int result = firstnumber + second;
txtresult.Text = Convert.ToString(result);
```
Explanation:
- `Convert.ToInt16(txtfirst.Text)`: Converts the input text to an integer.
- `Convert.ToInt16(txtsecond.Text)`: Converts the second input text to an integer.
- `result = firstnumber + second`: Adds the two integer values.
- `Convert.ToString(result)`: Converts the integer result back to a string for display.

### Example Inputs and Outputs:
| Input (`txtfirst.Text`, `txtsecond.Text`) | Result (`txtresult.Text`) |
|--------------------------------|------------------|
| "123", "456"                  | "579"            |
| "100", "200"                  | "300"            |
| "ABC", "123"                  | **Error** (Cannot convert "ABC" to int) |

## Conclusion
- Strings concatenate when using `+`, but integers add numerically.
- `Convert.ToInt16()` converts strings to integers but fails on non-numeric values.
- Always validate inputs before conversion to prevent errors.


## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)


