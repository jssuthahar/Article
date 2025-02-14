# C# Post-Increment and Pre-Increment Evaluation

## Problem Statement

Given the following C# code snippet:

```csharp
using System;

class Program
{
    static void Main()
    {
        int a = 5;
        Console.WriteLine(a++ + ++a + a++);
    }
}
```

You need to determine the output of the `Console.WriteLine()` statement and explain how the expression is evaluated step by step.

---

## Understanding Pre-Increment (`++a`) and Post-Increment (`a++`)
- **Post-increment (`a++`)**: Returns the current value of `a`, then increments `a` by 1.
- **Pre-increment (`++a`)**: Increments `a` first, then returns the new value.

---

## Step-by-Step Execution

### **Step 1: Initialize `a = 5`**

The given expression:

```csharp
a++ + ++a + a++
```

is evaluated from **left to right**.

### **Step 2: Evaluate `a++` (Post-increment)**
- Returns **5**, but `a` is incremented to **6**.

### **Step 3: Evaluate `++a` (Pre-increment)**
- Increments `a` to **7** and returns **7**.

### **Step 4: Evaluate `a++` (Post-increment)**
- Returns **7**, but `a` is incremented to **8**.

---

## Final Calculation
```
5 + 7 + 7 = 19
```
Thus, the output is:

```csharp
19
```

---

## Final Value of `a` After Execution
- Initially: `a = 5`
- After first `a++`: `a = 6`
- After `++a`: `a = 7`
- After second `a++`: `a = 8`

### **Summary Table**

| Expression | Value Used | `a` After Execution |
|------------|------------|----------------------|
| `a++`      | 5          | 6                    |
| `++a`      | 7          | 7                    |
| `a++`      | 7          | 8                    |

### **Final Console Output:**
```csharp
19
```

---

## Alternative Code for Testing
To verify this logic, you can run the following C# program:

```csharp
using System;

class Program
{
    static void Main()
    {
        int a = 5;
        Console.WriteLine(a++ + ++a + a++);
    }
}
```

---

## Key Takeaways
- **Post-Increment (`a++`)**: Uses the current value, then increments `a`.
- **Pre-Increment (`++a`)**: Increments `a` first, then uses the new value.
- **Operator Precedence Matters**: Since `+` is left-associative, evaluation happens from left to right.

This concept is commonly tested in **coding interviews** to check logical understanding of **operator precedence** and **side effects of increment operators**.

Hope this helps! 🚀

---

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
