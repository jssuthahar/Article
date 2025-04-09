
# 🔹 C# Core Concepts: Singleton, Struct, and Jagged Array

This repository explains three important concepts in C# with real-time examples and interview-style Q&A.

---

## 🧵 1. Singleton Pattern

The Singleton pattern ensures that a class has only **one instance** and provides a global point of access to it.

### ✅ Real-World Use Cases
- Logging service
- Configuration settings manager
- Database connection pool
- Printer spooler
- Caching services

### 🔧 Example:

```csharp
public sealed class Logger
{
    private static readonly Logger _instance = new Logger();
    private Logger() { }

    public static Logger Instance => _instance;

    public void Log(string msg)
    {
        Console.WriteLine("Log: " + msg);
    }
}
```

---

### 💬 Interview Questions – Singleton

**Q1. What is a Singleton Pattern?**  
A design pattern that restricts the instantiation of a class to one object.

**Q2. How do you implement a thread-safe singleton in C#?**  
Use `static readonly` with a private constructor. Or use `Lazy<T>` for lazy initialization.

**Q3. What are the disadvantages of Singleton?**  
- Hidden dependencies  
- Difficult to test (global state)  
- Violates single responsibility if not used carefully

---

## 🧱 2. Struct in C#

A `struct` is a **value type** in C# used for small, lightweight objects.

### ✅ Real-World Use Cases
- Coordinates (e.g., `Point`)
- Colors (e.g., `Color`)
- Money values (e.g., `Amount + Currency`)
- Sensor data
- Complex numbers in scientific apps

### 🔧 Example:

```csharp
public struct Point
{
    public int X, Y;

    public Point(int x, int y)
    {
        X = x;
        Y = y;
    }
}
```

---

### 💬 Interview Questions – Struct

**Q1. What is the difference between class and struct?**  
- `class` is a reference type, `struct` is a value type.  
- Structs are stored on the stack, classes on the heap.  
- Structs can't be inherited.

**Q2. When should you use a struct?**  
When creating small data objects that don’t need inheritance or complex behavior.

**Q3. Are structs immutable?**  
They can be, but you need to make fields `readonly` and avoid setters.

---

## 🧩 3. Jagged Array

A **jagged array** is an array of arrays, where each inner array can have a **different length**.

### ✅ Real-World Use Cases
- Student marks (subjects per student vary)
- Seating arrangement in theatres
- Sparse matrices
- Data with irregular structure

### 🔧 Example:

```csharp
int[][] jagged = new int[3][];
jagged[0] = new int[] { 1, 2 };
jagged[1] = new int[] { 3, 4, 5 };
jagged[2] = new int[] { 6 };
```

---

### 💬 Interview Questions – Jagged Array

**Q1. What is a jagged array?**  
An array where each element is itself an array, and inner arrays can vary in length.

**Q2. How is a jagged array different from a 2D array?**  
- Jagged arrays are arrays of arrays; 2D arrays are a matrix with fixed rows and columns.
- Jagged arrays use less memory if data is irregular.

**Q3. Can jagged arrays be multidimensional?**  
Yes, you can have arrays like `int[][][]`, which are jagged arrays of jagged arrays.

---

## 📚 Summary

| Concept        | Type         | Key Feature                          | Best Use Case                      |
|----------------|--------------|--------------------------------------|------------------------------------|
| Singleton      | Design Pattern | Only one instance, globally accessible | Logging, Config, Caching           |
| Struct         | Value Type   | Lightweight, immutable, fast         | Coordinates, Money, Sensor Data    |
| Jagged Array   | Data Structure | Irregular data shapes                | Student marks, seating arrangements|

