# Methods in C#

## What is a Method?
A method in C# is a block of code that performs a specific task. Methods help in code reusability, maintainability, and modularity.

### Syntax of a Method:
```csharp
returnType MethodName(parameters)
{
    // Method body
    return value; // If return type is not void
}
```

## Understanding Method Parameters and Return Types

### Parameters in Methods
- **Parameters** are values passed into a method to work with.
- They are defined inside the parentheses `()` in the method signature.
- Parameters can be of different data types.

**Example:**
```csharp
public void GreetUser(string name)
{
    Console.WriteLine($"Hello, {name}!");
}
```
**Explanation:**
- `void` means this method does not return anything.
- `string name` is a parameter that takes a name and prints a greeting.

### Return Type in Methods
- A method can return a value using a return type.
- The return type is specified before the method name.

**Example:**
```csharp
public int AddNumbers(int a, int b)
{
    return a + b;
}
```
**Explanation:**
- `int` is the return type, meaning the method will return an integer value.
- `return a + b;` returns the sum of `a` and `b`.

### Calling a Method
Methods need to be called to execute their functionality.

**Example:**
```csharp
class Program
{
    static void Main()
    {
        Program p = new Program();
        int sum = p.AddNumbers(5, 10);
        Console.WriteLine($"Sum: {sum}");
    }
}
```
**Output:**
```
Sum: 15
```

---

## Method Overloading in C#
Method overloading allows multiple methods in the same class to have the same name but with different parameters.

### Why Use Method Overloading?
- Improves code readability.
- Reduces method names' complexity.
- Provides multiple ways to perform similar actions.

### Example of Method Overloading
```csharp
public class Calculator
{
    public int Add(int a, int b)
    {
        return a + b;
    }
    
    public double Add(double a, double b)
    {
        return a + b;
    }
    
    public int Add(int a, int b, int c)
    {
        return a + b + c;
    }
}

class Program
{
    static void Main()
    {
        Calculator calc = new Calculator();
        Console.WriteLine(calc.Add(5, 10));       // Calls Add(int, int)
        Console.WriteLine(calc.Add(5.5, 2.3));   // Calls Add(double, double)
        Console.WriteLine(calc.Add(1, 2, 3));    // Calls Add(int, int, int)
    }
}
```

**Output:**
```
15
7.8
6
```

### Key Points About Method Overloading
- Methods must differ in **number**, **type**, or **order** of parameters.
- The return type alone **cannot** distinguish overloaded methods.
- Overloading helps in making code intuitive and easy to use.

---

## Real-Time Example: Banking System
Consider a banking system where we need to calculate interest for different types of customers.

```csharp
public class Bank
{
    public double CalculateInterest(double principal, double rate)
    {
        return (principal * rate) / 100;
    }

    public double CalculateInterest(double principal, double rate, int years)
    {
        return (principal * rate * years) / 100;
    }
}

class Program
{
    static void Main()
    {
        Bank bank = new Bank();
        Console.WriteLine(bank.CalculateInterest(10000, 5));       // Interest for one year
        Console.WriteLine(bank.CalculateInterest(10000, 5, 3));    // Interest for multiple years
    }
}
```

**Output:**
```
500
1500
```

---

## Conclusion
- **Methods** help in structuring code.
- **Parameters and return types** define method behavior.
- **Method overloading** allows multiple methods with the same name but different parameters for flexibility.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
