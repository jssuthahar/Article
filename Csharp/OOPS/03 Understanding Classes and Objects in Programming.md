# Understanding Classes and Objects in Programming

## What is a Class?
A **class** is a blueprint or template for creating objects. It defines the structure and behavior of an object by encapsulating data (attributes) and methods (functions).

### Example of a Class in C#:
```csharp
class Car
{
    // Properties
    public string Brand;
    public string Model;
    public int Year;

    // Constructor
    public Car()
    {
        Brand = "Unknown";
        Model = "Unknown";
        Year = 0;
    }

    // Method
    public void DisplayInfo()
    {
        Console.WriteLine($"Brand: {Brand}, Model: {Model}, Year: {Year}");
    }
}
```

## What is an Object?
An **object** is an instance of a class. It represents a specific entity that follows the structure defined by the class.

### Example of Creating an Object:
```csharp
class Program
{
    static void Main()
    {
        Car myCar = new Car(); // Creating an object of Car class
        myCar.Brand = "Toyota";
        myCar.Model = "Corolla";
        myCar.Year = 2022;
        myCar.DisplayInfo();
    }
}
```

## What is a Default Constructor?
A **default constructor** is a constructor that takes no parameters and initializes an object with default values. If a class does not explicitly define a constructor, the compiler provides a default constructor.

### Example:
```csharp
class Person
{
    public string Name;
    public int Age;

    // Default Constructor
    public Person()
    {
        Name = "Unknown";
        Age = 0;
    }
}
```

## How Memory Allocation Happens When Creating an Object?
When an object is created, memory allocation happens in two main areas:

1. **Stack Memory**: Stores local variables, references to objects, and method calls.
2. **Heap Memory**: Stores dynamically allocated objects and their data.

### Example of Memory Allocation:
```csharp
Car myCar = new Car();
```
- `myCar` (reference) is stored in **stack memory**.
- The actual `Car` object is created in **heap memory**.
- The stack holds the reference to the memory location in the heap where the object is stored.

## Conclusion
- A **class** is a blueprint for creating objects.
- An **object** is an instance of a class.
- A **default constructor** initializes an object with default values.
- **Memory allocation** happens in the stack (for references) and the heap (for objects).

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
