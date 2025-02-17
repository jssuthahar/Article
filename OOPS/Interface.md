# Interface, Abstract Class, and Generics in C#

## Interface in C#
### Why?
Interfaces provide a way to define a contract that multiple classes can implement. They support multiple inheritance and ensure consistency across different implementations.

### What?
An interface contains method and property signatures without any implementation. Classes implementing the interface must provide their own implementation.

### Where is it used?
- Designing loosely coupled applications.
- Enforcing method implementations across different classes.
- Creating pluggable architectures (e.g., Dependency Injection).

### Example: Creating and Implementing an Interface
```csharp
// Interface declaration
public interface IVehicle
{
    void Start();
    void Stop();
}

// Class implementing interface
public class Car : IVehicle
{
    public void Start()
    {
        Console.WriteLine("Car started.");
    }
    
    public void Stop()
    {
        Console.WriteLine("Car stopped.");
    }
}

// Using the interface to create an object
IVehicle myCar = new Car();
myCar.Start();
myCar.Stop();
```

## Default Interface Methods
### Why?
Default interface methods allow new methods to be added to interfaces without breaking existing implementations.

### What?
They provide a default implementation inside the interface itself, which implementing classes can override if needed.

### Where is it used?
- Adding new features to existing interfaces without modifying all implementing classes.
- Maintaining backward compatibility.

```csharp
public interface IDefaultInterface
{
    void Show();
    
    // Default method implementation
    public void Display()
    {
        Console.WriteLine("Default implementation in interface");
    }
}

public class ExampleClass : IDefaultInterface
{
    public void Show()
    {
        Console.WriteLine("Implemented Show Method");
    }
}

IDefaultInterface obj = new ExampleClass();
obj.Show();
obj.Display(); // Calls the default method
```

## Multiple Interface Inheritance
### Why?
C# does not support multiple class inheritance but allows multiple interface inheritance to achieve modular and flexible design.

### What?
A class can implement multiple interfaces to combine different functionalities.

### Where is it used?
- Implementing multiple behaviors in a single class.
- Combining functionalities from different sources.

```csharp
public interface IEngine
{
    void StartEngine();
}

public interface IBrakes
{
    void ApplyBrakes();
}

public class Bike : IEngine, IBrakes
{
    public void StartEngine()
    {
        Console.WriteLine("Bike engine started.");
    }
    
    public void ApplyBrakes()
    {
        Console.WriteLine("Bike brakes applied.");
    }
}

Bike myBike = new Bike();
myBike.StartEngine();
myBike.ApplyBrakes();
```

## Abstract Class in C#
### Why?
Abstract classes allow defining a base class with some predefined behavior, enforcing specific methods to be implemented by child classes.

### What?
An abstract class contains abstract methods (without implementation) and concrete methods (with implementation).

### Where is it used?
- When multiple classes share common behavior but require different implementations.
- When we need a partially implemented base class.

```csharp
public abstract class Animal
{
    public abstract void MakeSound(); // Abstract method
    
    public void Sleep()
    {
        Console.WriteLine("Sleeping...");
    }
}

public class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Bark");
    }
}

Animal myDog = new Dog();
myDog.MakeSound();
myDog.Sleep();
```

## Generics in C#
### Why?
Generics allow type safety while avoiding redundant code.

### What?
Generics enable parameterized types to improve code reusability and maintainability.

### Where is it used?
- Collections (`List<T>`, `Dictionary<T, K>`)
- Utility functions (sorting, searching, etc.)
- Type-safe operations.

### Generic Method Example
```csharp
public class Utility
{
    public static void Print<T>(T message)
    {
        Console.WriteLine(message);
    }
}

Utility.Print<int>(100);
Utility.Print<string>("Hello Generics");
```

### Generic Class Example
```csharp
public class Box<T>
{
    private T value;
    
    public void SetValue(T item)
    {
        value = item;
    }
    
    public T GetValue()
    {
        return value;
    }
}

Box<int> intBox = new Box<int>();
intBox.SetValue(10);
Console.WriteLine(intBox.GetValue());
```

## Interview Questions and Answers

### 1. What is the difference between an abstract class and an interface?
**Answer:**
- Abstract classes can have method implementations, whereas interfaces contain only method signatures (before C# 8.0).
- A class can inherit only one abstract class but implement multiple interfaces.
- Abstract classes are used when classes share common behavior, while interfaces are used for enforcing contracts.

### 2. When would you use an abstract class instead of an interface?
**Answer:** Use an abstract class when:
- You want to provide a common base with some implemented methods.
- You need constructors or fields in the base class.

### 3. Can an interface have fields in C#?
**Answer:** No, interfaces cannot have fields because they define only method signatures and properties (until C# 8.0, which introduced default implementations).

### 4. What is multiple inheritance? Does C# support it?
**Answer:** Multiple inheritance allows a class to inherit from more than one class. C# does not support multiple class inheritance but allows multiple interface inheritance.

### 5. What is the difference between a generic method and a generic class?
**Answer:**
- A **generic method** allows defining a method with a generic type parameter inside any class.
- A **generic class** allows defining a class that operates on a specified type.

## Conclusion
- **Interfaces** enforce a contract without implementation.
- **Abstract classes** provide a base class with common functionality.
- **Multiple interfaces** enable flexible design.
- **Generics** allow type safety and reusable code.
- **Real-time scenarios** include payment processing, vehicles, and data handling.
