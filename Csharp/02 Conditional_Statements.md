# Conditional Statements in C#

## Overview
Conditional statements are used to control the flow of execution in a program based on certain conditions. In C#, we have different types of conditional statements:

1. **if Statement**
2. **if-else Statement**
3. **if-else-if Ladder**
4. **Nested if Statements**
5. **Switch Case (Alternative to multiple if-else-if statements)**

---

## 1. if Statement
The `if` statement executes a block of code only if the specified condition evaluates to `true`.

### Syntax:
```csharp
if (condition)
{
    // Code to execute if condition is true
}
```

### Example:
```csharp
int age = 18;
if (age >= 18)
{
    Console.WriteLine("You are eligible to vote.");
}
```

---

## 2. if-else Statement
The `if-else` statement executes one block of code if the condition is true and another block if the condition is false.

### Syntax:
```csharp
if (condition)
{
    // Code to execute if condition is true
}
else
{
    // Code to execute if condition is false
}
```

### Example:
```csharp
int number = 10;
if (number % 2 == 0)
{
    Console.WriteLine("Even Number");
}
else
{
    Console.WriteLine("Odd Number");
}
```

---

## 3. if-else-if Ladder
The `if-else-if` ladder is used when there are multiple conditions to check.

### Syntax:
```csharp
if (condition1)
{
    // Code if condition1 is true
}
else if (condition2)
{
    // Code if condition2 is true
}
else if (condition3)
{
    // Code if condition3 is true
}
else
{
    // Code if none of the conditions are true
}
```

### Example:
```csharp
int marks = 75;
if (marks >= 90)
{
    Console.WriteLine("Grade A");
}
else if (marks >= 75)
{
    Console.WriteLine("Grade B");
}
else if (marks >= 50)
{
    Console.WriteLine("Grade C");
}
else
{
    Console.WriteLine("Fail");
}
```

---

## 4. Nested if Statements
A nested `if` statement is an `if` statement inside another `if` statement.

### Example:
```csharp
int num = 10;
if (num > 0)
{
    Console.WriteLine("Positive Number");
    if (num % 2 == 0)
    {
        Console.WriteLine("Even Number");
    }
}
```

---

## 5. Real-Time Example: Simple Calculator
The following C# code is for a simple calculator that performs addition, subtraction, multiplication, and division based on user input.

```csharp
public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
    }

    private void btnequal_Click(object sender, RoutedEventArgs e)
    {
        int first = Convert.ToInt32(txtfirst.Text);
        int second = Convert.ToInt32(txtsecond.Text);
        int result = 0;

        if (lbloper.Text == "+")
        {
            result = first + second;
        }
        else if (lbloper.Text == "-")
        {
            result = first - second;
        }
        else if (lbloper.Text == "*")
        {
            result = first * second;
        }
        else if (lbloper.Text == "/")
        {
            result = first / second;
        }

        txtresult.Text = result.ToString();
    }
}
```

---

## 6. Interview Questions and Answers

### Q1: What is the difference between `if`, `if-else`, and `if-else-if`?
**Answer:**
- `if` executes code when a condition is true.
- `if-else` executes one block if true, another if false.
- `if-else-if` is used when multiple conditions need to be checked sequentially.

### Q2: Can we use multiple `if` statements instead of `if-else-if`?
**Answer:** Yes, but it is inefficient as all `if` statements will be checked. `if-else-if` stops checking once a true condition is found.

### Q3: How does a nested `if` statement work?
**Answer:** An `if` inside another `if`. The inner `if` executes only if the outer `if` is true.

### Q4: How do you prevent division by zero in an `if` condition?
**Answer:**
```csharp
if (second != 0)
{
    result = first / second;
}
else
{
    Console.WriteLine("Cannot divide by zero");
}
```

### Q5: What is the alternative to multiple `if-else-if` conditions?
**Answer:** The `switch` statement can be used for multiple conditions based on a single variable.

```csharp
switch (lbloper.Text)
{
    case "+": result = first + second; break;
    case "-": result = first - second; break;
    case "*": result = first * second; break;
    case "/": result = second != 0 ? first / second : 0; break;
    default: Console.WriteLine("Invalid Operator"); break;
}
```

---

## Conclusion
- Use `if` for single conditions.
- Use `if-else` for binary decisions.
- Use `if-else-if` for multiple conditions.
- Use `switch` for evaluating a single variable with multiple values.

This guide covers all conditional statements with real-world examples and interview questions.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
