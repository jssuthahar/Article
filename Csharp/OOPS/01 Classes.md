# Understanding Classes, Methods, Parameters, Return Types, Constructors, and Public Access Modifier in C#

## Class
A **class** is a blueprint for creating objects. It defines properties (fields) and behaviors (methods) that an object can have.

### Example:
```csharp
public class MathHelper
{
    public int count = 10;
    public int voucher = 10;
}
```
In the example above, `MathHelper` is a class with two public integer fields: `count` and `voucher`.

---

## Method
A **method** is a block of code that performs a specific task. It can accept input values (parameters) and optionally return a value.

### Example:
```csharp
public int CalcNumber(int value1, int value2)
{
    int result = value1 + value2;
    return result;
}
```
Here, `CalcNumber` is a method that takes two integers (`value1` and `value2`) as parameters, adds them, and returns the result.

---

## Parameters and Return Type
- **Parameters**: Input values that a method accepts. In `CalcNumber`, `value1` and `value2` are parameters.
- **Return Type**: The type of value a method returns. `CalcNumber` returns an `int`.

### Example with String to Integer Conversion:
```csharp
public int ConvertInt(string number)
{
    int output = 0;
    bool validation = IsNumber(number);
    if (!string.IsNullOrWhiteSpace(number) && validation == true)
    {
        output = Convert.ToInt32(number);
    }
    return output;
}
```
This method takes a string as input, validates if it contains only numbers, and converts it to an integer.

---

## Constructor
A **constructor** is a special method that is automatically executed when an object of the class is created. It is typically used to initialize values.

### Example:
```csharp
public MathHelper()
{
    // Constructor logic
}
```
Here, `MathHelper()` is a constructor that gets executed when an instance of `MathHelper` is created.

---

## Memory Allocation for a Class
Memory allocation for a class in C# happens in two main areas:

1. **Heap Memory**:
   - When an object of a class is created using the `new` keyword, memory is allocated on the heap.
   - This memory remains allocated until the object is no longer referenced and garbage collection removes it.

2. **Stack Memory**:
   - When a method is called, local variables (like method parameters) are stored in the stack.
   - When the method execution completes, the stack memory is cleared.

### Example:
```csharp
MathHelper helper = new MathHelper();
```
- `helper` is a reference variable stored in the stack.
- The actual `MathHelper` object is allocated on the heap.

---

## Public Access Modifier
The **public** access modifier makes a class member accessible from anywhere in the application.

### Example:
```csharp
public int CalcNumber(int value1, int value2)
```
Since this method is `public`, it can be accessed from any other class or file in the application.

---

## Interview Questions and Answers

### 1. What is a class in C#?
**Answer:** A class is a blueprint or template for creating objects. It defines properties (fields) and methods that objects can have.

### 2. What is a method in C#?
**Answer:** A method is a block of code that performs a specific task. It can take parameters as input and return a value.

### 3. What is the difference between parameters and return types in a method?
**Answer:**
- **Parameters** are inputs provided to a method when it is called.
- **Return Type** is the data type of the value that a method returns after execution.

### 4. What is a constructor in C#?
**Answer:** A constructor is a special method that initializes an object when it is created. It has the same name as the class and does not have a return type.

### 5. How is memory allocated for a class in C#?
**Answer:** Memory is allocated in two areas:
- **Heap Memory**: Stores the actual object created using `new`.
- **Stack Memory**: Stores reference variables and method parameters.

### 6. What is the purpose of the `public` access modifier?
**Answer:** The `public` access modifier allows a class member to be accessed from any other class in the application.

### 7. What happens when an object is no longer referenced?
**Answer:** When an object is no longer referenced, the garbage collector removes it from heap memory to free up resources.

---

## Summary
- **Class**: Defines properties and behaviors.
- **Method**: Performs tasks, may take parameters and return values.
- **Parameters**: Inputs for methods.
- **Return Type**: Specifies what value a method returns.
- **Constructor**: Initializes an object when instantiated.
- **Memory Allocation**: Objects are stored on the heap, reference variables on the stack.
- **Public Modifier**: Allows access to members from anywhere in the program.
- **Interview Questions**: Covers key concepts and common questions related to classes and methods.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)



