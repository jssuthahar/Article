#  Understanding `params` Keyword, Default Parameters, and Named Parameters in C#

## Introduction
This document explains the concepts of `params` keyword, default parameters, and named parameters in C#, using the `MathOperation` class as a practical example. These features enhance method flexibility and improve code readability.

## `params` Keyword
The `params` keyword allows a method to accept a variable number of arguments of a specified type. It is useful when you do not know in advance how many arguments will be passed.

### Example Usage in `MathOperation`
```csharp
public int Add(int count1, params string[] numbers)
```
- Here, the `numbers` parameter can accept multiple string values.
- The method iterates over `numbers`, validates them, and calculates the sum.

### Real-Time Use Case
A hotel booking system may need to calculate the total number of rooms booked by a customer. Instead of passing a fixed number of room counts, we can use `params` to accept multiple values dynamically.

#### Example
```csharp
MathOperation mathOp = new MathOperation();
int totalRooms = mathOp.Add(0, "5", "3", "2");
Console.WriteLine($"Total Rooms: {totalRooms}");
```

---

## Default/ Optinal Parameters
Default parameters allow you to assign default values to method parameters, making them optional when calling the method.

### Example Usage in `MathOperation`
```csharp
public int Agcalc(int year = 2025)
```
- If no value is passed for `year`, it defaults to `2025`.
- The method calculates the age based on the current year.

### Real-Time Use Case
Consider an employee registration system where the joining year defaults to the current year unless specified otherwise.

#### Example
```csharp
MathOperation mathOp = new MathOperation();
int age = mathOp.Agcalc(); // Uses default value 2025
Console.WriteLine($"Calculated Age: {age}");
```

---

## Named Parameters
Named parameters allow specifying arguments by parameter name instead of their position, improving code readability and reducing errors.

### Example Usage in `MathOperation`
```csharp
if (!IsNumerc(name: "Pavithra", value: "10"))
```
- The method `IsNumerc` is called using named parameters (`name:` and `value:`), making it clear what each argument represents.

### Real-Time Use Case
A customer feedback system might require input validation where field names are explicitly passed, avoiding confusion in argument order.

#### Example
```csharp
bool isValid = mathOp.IsNumerc(value: "12345", name: "OrderID");
Console.WriteLine($"Is OrderID numeric? {isValid}");
```

---

## Conclusion
- `params` helps handle a variable number of arguments dynamically.
- Default parameters simplify method calls by providing optional values.
- Named parameters improve readability and flexibility in method calls.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

