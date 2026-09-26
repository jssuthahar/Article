# C# Use-Case Interview Questions

A practical collection of **50 C# use-case interview questions with detailed answers and real-world examples**.

This guide is useful for:

* 🎓 College / Campus Interviews
* 👨‍💻 Junior C# Developers
* 💼 2–5 Years .NET Developers
* 🚀 Experienced C# Developers
* 🧠 Logical Programming Interviews
* 🏗️ .NET / ASP.NET Core Interviews

The focus is not only on **"What is it?"**, but also:

> **"When would you use it in a real application?"**

---

# 📚 Table of Contents

1. [Interface](#1-why-would-you-use-interface-instead-of-a-class)
2. [Abstract Class](#2-when-would-you-use-an-abstract-class)
3. [Interface vs Abstract Class](#3-interface-vs-abstract-class)
4. [Reference Type Parameters](#4-what-happens-if-you-pass-a-reference-type-to-a-method)
5. [ref vs out](#5-what-is-the-difference-between-ref-out-and-normal-parameters)
6. [params](#6-why-would-you-use-params)
7. [Method Overloading](#7-what-is-method-overloading)
8. [Method Overriding](#8-what-is-method-overriding)
9. [virtual vs override vs new](#9-what-is-the-difference-between-virtual-override-and-new)
10. [record](#10-when-would-you-use-a-record-instead-of-a-class)
11. [const vs readonly](#11-what-is-the-difference-between-const-and-readonly)
12. [static](#12-when-would-you-use-static)
13. [Dependency Injection](#13-what-is-dependency-injection)
14. [DbContext](#14-why-shouldnt-you-create-dbcontext-everywhere)
15. [IEnumerable](#15-what-is-ienumerable)
16. [IEnumerable vs IQueryable](#16-ienumerable-vs-iqueryable)
17. [Deferred Execution](#17-what-is-deferred-execution-in-linq)
18. [First vs FirstOrDefault](#18-what-is-the-difference-between-first-and-firstordefault)
19. [Single vs First](#19-single-vs-first)
20. [Duplicate Numbers](#20-how-would-you-find-duplicate-numbers)
21. [Character Frequency](#21-how-would-you-count-character-frequency)
22. [Distinct Values](#22-how-would-you-remove-duplicate-values)
23. [Dictionary](#23-why-use-dictionary)
24. [List vs HashSet](#24-list-vs-hashset)
25. [Null Handling](#25-how-do-you-handle-null-safely)
26. [== vs Equals](#26-what-is-the-difference-between--and-equals)
27. [Exception Handling](#27-how-does-try-catch-finally-work)
28. [Exception Best Practices](#28-should-you-catch-exception-everywhere)
29. [using](#29-what-is-using-used-for)
30. [IDisposable](#30-what-is-idisposable)
31. [async/await](#31-what-is-asyncawait)
32. [Result](#32-why-is-result-dangerous-in-async-code)
33. [Task vs Thread](#33-what-is-the-difference-between-task-thread-and-async)
34. [Large Data Processing](#34-how-would-you-process-1-million-records-efficiently)
35. [SQL Injection](#35-how-would-you-prevent-sql-injection)
36. [Extension Methods](#36-what-is-an-extension-method)
37. [Delegate](#37-what-is-a-delegate)
38. [Event](#38-what-is-an-event)
39. [Action / Func / Predicate](#39-what-is-the-difference-between-action-func-and-predicate)
40. [Immutable Class](#40-how-would-you-make-a-class-immutable)
41. [Shallow vs Deep Copy](#41-what-is-shallow-copy-vs-deep-copy)
42. [Garbage Collection](#42-what-is-garbage-collection)
43. [GC Generations](#43-what-are-gen-0-gen-1-and-gen-2)
44. [LINQ Performance](#44-how-would-you-improve-slow-linq-code)
45. [N+1 Query](#45-how-would-you-prevent-multiple-database-calls-inside-a-loop)
46. [Thread Safety](#46-how-would-you-implement-a-thread-safe-counter)
47. [lock](#47-when-would-you-use-lock)
48. [Logging](#48-how-would-you-design-a-logging-system)
49. [Notification System](#49-how-would-you-design-a-notification-system)
50. [Student Admission System](#50-design-a-student-admission-system-using-c)

---

# 1. Why would you use `interface` instead of a class?

### Use Case

Imagine a payment application supporting:

* Credit Card
* UPI
* PayPal

Create a common contract:

```csharp
public interface IPayment
{
    void Pay(decimal amount);
}
```

Implementation:

```csharp
public class UpiPayment : IPayment
{
    public void Pay(decimal amount)
    {
        Console.WriteLine($"Paid {amount} using UPI");
    }
}
```

```csharp
public class CardPayment : IPayment
{
    public void Pay(decimal amount)
    {
        Console.WriteLine($"Paid {amount} using Card");
    }
}
```

Service:

```csharp
public class PaymentService
{
    private readonly IPayment _payment;

    public PaymentService(IPayment payment)
    {
        _payment = payment;
    }

    public void Process(decimal amount)
    {
        _payment.Pay(amount);
    }
}
```

### Interview Answer

Use an interface when you need to define a **contract** and allow multiple implementations.

Benefits:

* Loose coupling
* Dependency Injection
* Unit testing
* Multiple implementations
* Easier maintenance

---

# 2. When would you use an abstract class?

### Use Case

All employees have common functionality, but salary calculation differs.

```csharp
public abstract class Employee
{
    public string Name { get; set; }

    public void Login()
    {
        Console.WriteLine("Employee Login");
    }

    public abstract decimal CalculateSalary();
}
```

Implementation:

```csharp
public class Developer : Employee
{
    public override decimal CalculateSalary()
    {
        return 5000;
    }
}
```

### Interview Answer

Use an abstract class when classes share:

* Common properties
* Common methods
* Common implementation

but some behavior must be implemented differently.

---

# 3. Interface vs Abstract Class

| Requirement           | Interface     | Abstract Class  |
| --------------------- | ------------- | --------------- |
| Define contract       | ✅             | ✅               |
| Common implementation | Limited       | ✅               |
| Common state          | Limited       | ✅               |
| Multiple inheritance  | ✅ Interfaces  | ❌               |
| Dependency Injection  | Commonly used | Possible        |
| Related classes       | Not required  | Usually related |

### Simple Rule

> **Interface = What the class can do**

> **Abstract class = What the class is + common behavior**

---

# 4. What happens if you pass a reference type to a method?

```csharp
class Student
{
    public string Name { get; set; }
}
```

```csharp
static void ChangeName(Student student)
{
    student.Name = "John";
}
```

```csharp
Student s = new Student();

s.Name = "David";

ChangeName(s);

Console.WriteLine(s.Name);
```

Output:

```text
John
```

### Important Interview Point

C# passes the **reference by value** by default.

The reference is copied, but both references point to the same object.

---

# 5. What is the difference between `ref`, `out`, and normal parameters?

## Normal Parameter

```csharp
void Change(int value)
{
    value = 20;
}
```

The original value isn't changed.

## ref

```csharp
void Change(ref int value)
{
    value = 20;
}
```

The caller must initialize the variable first.

```csharp
int value = 10;

Change(ref value);
```

## out

```csharp
void Change(out int value)
{
    value = 20;
}
```

The caller doesn't need to initialize it.

```csharp
int value;

Change(out value);
```

### Interview Answer

* `value` → normal copy
* `ref` → existing variable passed by reference
* `out` → method must assign a value

---

# 6. Why would you use `params`?

Use `params` when a method can accept a variable number of arguments.

```csharp
static int Add(params int[] numbers)
{
    int total = 0;

    foreach (int number in numbers)
    {
        total += number;
    }

    return total;
}
```

Usage:

```csharp
Add(10, 20);

Add(10, 20, 30);

Add(10, 20, 30, 40);
```

### Real-World Use

Useful for:

* Logging
* Utility methods
* Calculations
* Formatting

---

# 7. What is method overloading?

Same method name with different parameter signatures.

```csharp
public int Add(int a, int b)
{
    return a + b;
}

public int Add(int a, int b, int c)
{
    return a + b + c;
}

public double Add(double a, double b)
{
    return a + b;
}
```

This is called:

> **Compile-time polymorphism**

---

# 8. What is method overriding?

A child class changes the implementation of a parent class method.

```csharp
public class Animal
{
    public virtual void Sound()
    {
        Console.WriteLine("Animal sound");
    }
}
```

```csharp
public class Dog : Animal
{
    public override void Sound()
    {
        Console.WriteLine("Dog barks");
    }
}
```

```csharp
Animal animal = new Dog();

animal.Sound();
```

Output:

```text
Dog barks
```

This demonstrates:

> **Runtime polymorphism**

---

# 9. What is the difference between `virtual`, `override`, and `new`?

Parent:

```csharp
class Parent
{
    public virtual void Show()
    {
        Console.WriteLine("Parent");
    }
}
```

Child:

```csharp
class Child : Parent
{
    public override void Show()
    {
        Console.WriteLine("Child");
    }
}
```

`override` provides runtime polymorphism.

But:

```csharp
public new void Show()
{
}
```

hides the parent method.

### Interview Point

`override` = polymorphism

`new` = method hiding

---

# 10. When would you use a `record` instead of a class?

Records are useful for data-oriented objects.

```csharp
public record Student(int Id, string Name);
```

```csharp
var student1 = new Student(1, "John");

var student2 = new Student(1, "John");

Console.WriteLine(student1 == student2);
```

Output:

```text
True
```

### Use Cases

* DTOs
* API responses
* Immutable data
* Value-based equality

---

# 11. What is the difference between `const` and `readonly`?

## const

```csharp
public const double Pi = 3.14159;
```

Must have a compile-time value.

## readonly

```csharp
public readonly string ConnectionString;

public MyClass()
{
    ConnectionString = "connection";
}
```

Can be assigned in:

* Declaration
* Constructor

### Interview Rule

Use:

```text
const
```

for true compile-time constants.

Use:

```text
readonly
```

when the value is determined during object construction.

---

# 12. When would you use `static`?

For functionality that doesn't depend on object state.

```csharp
public static class Calculator
{
    public static int Add(int a, int b)
    {
        return a + b;
    }
}
```

Usage:

```csharp
int result = Calculator.Add(10, 20);
```

No object is required.

---

# 13. What is Dependency Injection?

Instead of creating dependencies inside a class:

```csharp
public class OrderService
{
    private readonly EmailService _email =
        new EmailService();
}
```

inject the dependency:

```csharp
public class OrderService
{
    private readonly IEmailService _email;

    public OrderService(IEmailService email)
    {
        _email = email;
    }
}
```

### Benefits

* Loose coupling
* Easier testing
* Easier replacement
* Better maintainability

---

# 14. Why shouldn't you create `DbContext` everywhere?

Avoid:

```csharp
public void AddStudent()
{
    using var db = new AppDbContext();

    // Database operation
}
```

throughout the application.

Prefer Dependency Injection:

```csharp
public class StudentService
{
    private readonly AppDbContext _db;

    public StudentService(AppDbContext db)
    {
        _db = db;
    }
}
```

### Benefits

* Controlled lifetime
* Easier testing
* Centralized configuration
* Better architecture

---

# 15. What is `IEnumerable<T>`?

`IEnumerable<T>` represents a sequence that can be enumerated.

```csharp
IEnumerable<int> numbers =
    new List<int>
    {
        10,
        20,
        30
    };
```

You can iterate:

```csharp
foreach (var number in numbers)
{
    Console.WriteLine(number);
}
```

Use it when a method only needs to read/enumerate a collection.

---

# 16. `IEnumerable` vs `IQueryable`

Consider:

```csharp
var students = db.Students
                 .Where(x => x.Age > 20);
```

With Entity Framework, `IQueryable` allows the query to be translated into SQL.

Conceptually:

```sql
SELECT *
FROM Students
WHERE Age > 20
```

But:

```csharp
var students = db.Students.ToList();
```

loads the data into memory.

Then:

```csharp
students.Where(x => x.Age > 20);
```

runs in memory.

### Interview Answer

`IQueryable` is useful when queries should be executed by the data source.

`IEnumerable` is generally used for in-memory enumeration.

---

# 17. What is deferred execution in LINQ?

Consider:

```csharp
var result = students
    .Where(x => x.Age > 20);
```

The query may not execute immediately.

Execution happens when you enumerate:

```csharp
foreach (var student in result)
{
}
```

or:

```csharp
result.ToList();
```

### Interview Point

LINQ queries often use **deferred execution** until a terminal operation/materialization occurs.

---

# 18. What is the difference between `First()` and `FirstOrDefault()`?

```csharp
var student = students.First();
```

If there are no elements, an exception is thrown.

```csharp
var student = students.FirstOrDefault();
```

If there are no elements, it returns the default value.

For a reference type:

```text
null
```

### Use

Use `FirstOrDefault()` when no matching record is a valid possibility.

---

# 19. `Single()` vs `First()`

```csharp
students.Single(x => x.Email == email);
```

`Single()` expects exactly one matching record.

It throws if:

* No record exists
* More than one record exists

`First()` only requires at least one matching record.

### Example

For a unique email:

```csharp
var user = users.Single(x => x.Email == email);
```

can communicate the expectation that exactly one user should exist.

---

# 20. How would you find duplicate numbers?

```csharp
int[] numbers =
{
    1, 2, 3, 2, 4, 1, 5
};

var duplicates = numbers
    .GroupBy(x => x)
    .Where(g => g.Count() > 1)
    .Select(g => g.Key);

foreach (var item in duplicates)
{
    Console.WriteLine(item);
}
```

Output:

```text
1
2
```

### Interview Follow-Up

> Can you solve this without LINQ?

Use:

```csharp
Dictionary<int, int>
```

or:

```csharp
HashSet<int>
```

---

# 21. How would you count character frequency?

```csharp
string text = "programming";

var result = text
    .GroupBy(c => c)
    .ToDictionary(
        g => g.Key,
        g => g.Count());
```

Example:

```text
r = 2
g = 2
m = 2
```

### Interview Follow-Up

Find the **first non-repeated character**.

---

# 22. How would you remove duplicate values?

```csharp
int[] numbers =
{
    1, 2, 2, 3, 3, 4
};

var unique = numbers
    .Distinct()
    .ToList();
```

Result:

```text
1 2 3 4
```

Without LINQ:

```csharp
HashSet<int> set = new();

foreach (var number in numbers)
{
    set.Add(number);
}
```

---

# 23. Why use `Dictionary<TKey,TValue>`?

Suppose you need to find a student by ID.

```csharp
Dictionary<int, Student> students;
```

Then:

```csharp
var student = students[101];
```

### Use Cases

* Fast key-based lookup
* Caching
* Frequency counting
* Mapping IDs to objects

---

# 24. `List` vs `HashSet`

## List

```csharp
List<int> numbers = new();
```

* Allows duplicates
* Ordered collection
* Index-based access

## HashSet

```csharp
HashSet<int> numbers = new();
```

* Unique values
* Fast membership checks
* No duplicate values

### Interview Rule

Use `HashSet` when **uniqueness and membership checking** are important.

---

# 25. How do you handle null safely?

Instead of:

```csharp
if (student != null)
{
    if (student.Address != null)
    {
        Console.WriteLine(
            student.Address.City);
    }
}
```

Use:

```csharp
Console.WriteLine(
    student?.Address?.City);
```

Or:

```csharp
string city =
    student?.Address?.City
    ?? "Unknown";
```

### Operators

```text
?.  Null conditional
??  Null coalescing
```

---

# 26. What is the difference between `==` and `Equals()`?

`==` is an operator and its behavior depends on the type and any overloaded operator.

`Equals()` is a method that can be overridden to define equality.

Example:

```csharp
string a = "Hello";
string b = "Hello";

Console.WriteLine(a == b);
```

Output:

```text
True
```

`string` provides value-based equality semantics.

---

# 27. How does `try-catch-finally` work?

```csharp
try
{
    int result = 10 / 0;
}
catch (DivideByZeroException)
{
    Console.WriteLine(
        "Invalid division");
}
finally
{
    Console.WriteLine(
        "Cleanup");
}
```

### Responsibilities

| Block   | Purpose            |
| ------- | ------------------ |
| try     | Risky code         |
| catch   | Exception handling |
| finally | Cleanup            |

---

# 28. Should you catch `Exception` everywhere?

Avoid:

```csharp
try
{
    // code
}
catch (Exception ex)
{
}
```

This can hide problems.

Prefer specific exceptions when you can handle them meaningfully:

```csharp
catch (SqlException ex)
{
    // Handle database-related issue
}
```

### Important

Never silently swallow exceptions.

Bad:

```csharp
catch (Exception)
{
}
```

---

# 29. What is `using` used for?

`using` helps ensure `Dispose()` is called for disposable resources.

```csharp
using (SqlConnection connection =
       new SqlConnection(connectionString))
{
    connection.Open();
}
```

Modern syntax:

```csharp
using SqlConnection connection =
    new SqlConnection(connectionString);
```

### Common Uses

* Database connections
* File streams
* Network resources
* Other `IDisposable` objects

---

# 30. What is `IDisposable`?

A class implements `IDisposable` when it needs deterministic cleanup.

```csharp
public class FileManager : IDisposable
{
    public void Dispose()
    {
        // Release resources
    }
}
```

Usage:

```csharp
using var manager =
    new FileManager();
```

---

# 31. What is async/await?

Suppose an application calls a slow API.

Avoid blocking:

```csharp
var result =
    client.GetStringAsync(url).Result;
```

Prefer:

```csharp
var result =
    await client.GetStringAsync(url);
```

Example:

```csharp
public async Task<string> GetDataAsync()
{
    return await client.GetStringAsync(url);
}
```

### Common Use Cases

* API calls
* Database operations
* File I/O
* Network operations

---

# 32. Why is `.Result` dangerous in async code?

Avoid:

```csharp
var result =
    GetDataAsync().Result;
```

It can block the calling thread and, in some synchronization-context environments, contribute to deadlocks.

Prefer:

```csharp
var result =
    await GetDataAsync();
```

### Interview Rule

> Prefer async all the way through an I/O operation.

---

# 33. What is the difference between `Task`, `Thread`, and `async`?

### Thread

Represents an actual execution thread.

### Task

Represents an asynchronous operation.

### async/await

Language features used to write asynchronous code.

Example:

```csharp
public async Task<string>
    GetStudentAsync()
{
    return await
        service.GetStudentAsync();
}
```

For I/O-bound operations, async/await generally avoids blocking threads unnecessarily.

---

# 34. How would you process 1 million records efficiently?

Avoid:

```csharp
foreach (var student in students)
{
    db.Save(student);
}
```

if that causes one database operation per record.

Consider:

* Batch processing
* Bulk operations
* Pagination
* Streaming
* Database-side filtering
* Selecting only required columns

Example:

```csharp
var students = db.Students
    .Where(x => x.IsActive)
    .Select(x => new
    {
        x.Id,
        x.Name
    });
```

Only retrieve required data.

---

# 35. How would you prevent SQL Injection?

### Bad

```csharp
string sql =
    $"SELECT * FROM Users " +
    $"WHERE Name = '{name}'";
```

This is vulnerable to SQL injection.

### Better

Use parameterized queries or a properly used ORM.

With EF Core:

```csharp
var user =
    await db.Users
        .FirstOrDefaultAsync(
            x => x.Name == name);
```

### Interview Answer

Never concatenate untrusted user input directly into SQL.

---

# 36. What is an extension method?

Extension methods allow you to add methods to an existing type without modifying the original type.

```csharp
public static class StringExtensions
{
    public static bool IsValidEmail(
        this string value)
    {
        return value.Contains("@");
    }
}
```

Usage:

```csharp
string email =
    "test@gmail.com";

bool valid =
    email.IsValidEmail();
```

### Use Cases

* Utility functions
* Reusable helper methods
* LINQ-style APIs

---

# 37. What is a delegate?

A delegate represents a reference to a method.

```csharp
public delegate void Notify(
    string message);
```

Method:

```csharp
static void SendMessage(
    string message)
{
    Console.WriteLine(message);
}
```

Usage:

```csharp
Notify notify =
    SendMessage;

notify("Hello");
```

Delegates are used for:

* Callbacks
* Events
* Functional programming patterns

---

# 38. What is an event?

Events allow one object to notify another object when something happens.

```csharp
public event EventHandler?
    OrderCompleted;
```

Raise the event:

```csharp
OrderCompleted?
    .Invoke(
        this,
        EventArgs.Empty);
```

### Real-World Examples

* Button click
* Order completed
* Payment completed
* File uploaded
* Notification triggered

---

# 39. What is the difference between `Action`, `Func`, and `Predicate`?

## Action

Returns nothing.

```csharp
Action<string> print =
    message =>
        Console.WriteLine(message);
```

## Func

Returns a value.

```csharp
Func<int, int, int> add =
    (a, b) => a + b;
```

## Predicate

Returns `bool`.

```csharp
Predicate<int> isEven =
    number => number % 2 == 0;
```

---

# 40. How would you make a class immutable?

Instead of:

```csharp
public class Student
{
    public string Name { get; set; }
}
```

Use:

```csharp
public class Student
{
    public string Name { get; }

    public Student(string name)
    {
        Name = name;
    }
}
```

After construction, the public property cannot be changed.

Another option:

```csharp
public record Student(
    string Name);
```

---

# 41. What is shallow copy vs deep copy?

Consider:

```csharp
class Student
{
    public string Name { get; set; }

    public Address Address { get; set; }
}
```

A shallow copy may cause both objects to reference the same `Address`.

A deep copy creates a separate `Address` object as well.

### Interview Scenario

If:

```csharp
student2.Address.City =
    "Chennai";
```

also changes:

```csharp
student1.Address.City
```

then both objects may share the same nested reference.

---

# 42. What is garbage collection?

.NET automatically manages memory for managed objects.

Example:

```csharp
var student =
    new Student();
```

When an object is no longer reachable, it becomes eligible for garbage collection.

### Important

Garbage collection doesn't mean you never need `Dispose()`.

External resources such as:

* File handles
* Database connections
* Streams

may require deterministic cleanup.

---

# 43. What are Gen 0, Gen 1, and Gen 2?

.NET's garbage collector uses generations.

### Gen 0

Short-lived objects.

### Gen 1

Intermediate objects.

### Gen 2

Long-lived objects.

Most temporary objects are collected in Gen 0.

### Interview Point

Generational GC improves performance by focusing on objects likely to be short-lived.

---

# 44. How would you improve slow LINQ code?

### Less efficient

```csharp
var result = students
    .Where(x =>
        x.Name.Contains("John"))
    .ToList()
    .Where(x => x.Age > 20)
    .ToList();
```

The first `ToList()` loads data into memory.

### Better

```csharp
var result =
    await db.Students
        .Where(x =>
            x.Name.Contains("John") &&
            x.Age > 20)
        .ToListAsync();
```

The filtering can happen at the database.

---

# 45. How would you prevent multiple database calls inside a loop?

### Problem

```csharp
foreach (var student in students)
{
    var course =
        db.Courses
          .FirstOrDefault(
              x => x.Id ==
                   student.CourseId);
}
```

This can result in many database calls.

### Better

Use eager loading:

```csharp
var students =
    await db.Students
        .Include(x => x.Course)
        .ToListAsync();
```

Or projection:

```csharp
var result =
    await db.Students
        .Select(x => new
        {
            x.Name,
            CourseName =
                x.Course.Name
        })
        .ToListAsync();
```

This is related to the:

> **N+1 Query Problem**

---

# 46. How would you implement a thread-safe counter?

This isn't guaranteed to be safe for concurrent updates:

```csharp
count++;
```

For a simple atomic increment:

```csharp
Interlocked.Increment(
    ref count);
```

Example:

```csharp
private int count;

public void Add()
{
    Interlocked.Increment(
        ref count);
}
```

For more complex shared state, use appropriate synchronization.

---

# 47. When would you use `lock`?

Suppose multiple threads modify shared state.

```csharp
private readonly object _lock =
    new();

public void AddStudent(
    Student student)
{
    lock (_lock)
    {
        students.Add(student);
    }
}
```

Only one thread can execute the protected section for that lock object at a time.

### Avoid

```csharp
lock(this)
{
}
```

Use a private lock object instead.

---

# 48. How would you design a logging system?

Instead of writing file logging everywhere:

```csharp
File.AppendAllText(...);
```

Create an abstraction:

```csharp
public interface ILoggerService
{
    void Log(string message);
}
```

Implementation:

```csharp
public class FileLogger :
    ILoggerService
{
    public void Log(string message)
    {
        // Write to file
    }
}
```

Application code depends on:

```csharp
ILoggerService
```

rather than a concrete implementation.

### Benefits

* Loose coupling
* Easy testing
* Easy replacement
* Separation of concerns

---

# 49. How would you design a notification system?

Suppose your application supports:

* Email
* SMS
* WhatsApp

Create:

```csharp
public interface INotification
{
    Task SendAsync(
        string message);
}
```

Email:

```csharp
public class EmailNotification :
    INotification
{
    public Task SendAsync(
        string message)
    {
        // Send email

        return Task.CompletedTask;
    }
}
```

SMS:

```csharp
public class SmsNotification :
    INotification
{
    public Task SendAsync(
        string message)
    {
        // Send SMS

        return Task.CompletedTask;
    }
}
```

Service:

```csharp
public class NotificationService
{
    private readonly INotification
        _notification;

    public NotificationService(
        INotification notification)
    {
        _notification = notification;
    }
}
```

### Interview Concept

This demonstrates:

* Interface
* Abstraction
* Dependency Injection
* Loose coupling
* Open/Closed Principle

---

# 50. Design a Student Admission System using C#

This is a strong real-world interview scenario.

## Requirement

A student should be able to:

1. Register
2. Select a course
3. Make payment
4. Receive admission confirmation

---

## Student

```csharp
public class Student
{
    public int Id { get; set; }

    public string Name { get; set; }

    public string Email { get; set; }
}
```

---

## Course

```csharp
public class Course
{
    public int Id { get; set; }

    public string Name { get; set; }

    public decimal Fee { get; set; }
}
```

---

## Payment Interface

```csharp
public interface IPaymentService
{
    Task<bool> PayAsync(
        decimal amount);
}
```

---

## Card Payment

```csharp
public class CardPaymentService :
    IPaymentService
{
    public Task<bool> PayAsync(
        decimal amount)
    {
        Console.WriteLine(
            $"Processing payment: {amount}");

        return Task.FromResult(true);
    }
}
```

---

## Admission Service

```csharp
public class AdmissionService
{
    private readonly IPaymentService
        _paymentService;

    public AdmissionService(
        IPaymentService paymentService)
    {
        _paymentService =
            paymentService;
    }

    public async Task<bool> AdmitAsync(
        Student student,
        Course course)
    {
        bool paymentSuccessful =
            await _paymentService
                .PayAsync(course.Fee);

        if (!paymentSuccessful)
            return false;

        Console.WriteLine(
            $"Student {student.Name} " +
            $"admitted to {course.Name}");

        return true;
    }
}
```

---

# 🎯 What Is the Interviewer Testing?

The final scenario tests multiple concepts:

* Classes
* Objects
* Encapsulation
* Interfaces
* Abstraction
* Dependency Injection
* Async/await
* SOLID principles
* Separation of concerns
* Real-world design

---

# 🔥 Bonus Logical C# Questions

## 51. Value Type Parameter

```csharp
int x = 10;

void Change(int x)
{
    x = 20;
}

Change(x);

Console.WriteLine(x);
```

Output:

```text
10
```

Because `int` is a value type and the value is passed by value.

---

# 52. Reference Type

```csharp
var list1 =
    new List<int>
    {
        1, 2, 3
    };

var list2 = list1;

list2.Add(4);

Console.WriteLine(
    list1.Count);
```

Output:

```text
4
```

Both variables reference the same list object.

---

# 53. Find the Second Largest Number

```csharp
int[] numbers =
{
    10, 50, 20, 40, 30
};

int secondLargest =
    numbers
        .Distinct()
        .OrderByDescending(x => x)
        .Skip(1)
        .First();

Console.WriteLine(
    secondLargest);
```

Output:

```text
40
```

### Interview Follow-Up

> Solve it without LINQ.

---

# 54. Find the Missing Number

```csharp
int[] numbers =
{
    1, 2, 3, 5, 6
};

int n = 6;

int expected =
    n * (n + 1) / 2;

int actual =
    numbers.Sum();

int missing =
    expected - actual;

Console.WriteLine(
    missing);
```

Output:

```text
4
```

---

# 55. Reverse a String

```csharp
string input =
    "Hello";

string result =
    new string(
        input.Reverse()
             .ToArray());

Console.WriteLine(
    result);
```

Output:

```text
olleH
```

### Interview Follow-Up

> Solve it without LINQ.

---

# 56. Check Palindrome

```csharp
string input =
    "madam";

string reverse =
    new string(
        input.Reverse()
             .ToArray());

bool result =
    input == reverse;

Console.WriteLine(
    result);
```

Output:

```text
True
```

---

# 57. Why Doesn't This `const` Code Work?

Incorrect:

```csharp
public const int Value;

public MyClass()
{
    Value = 10;
}
```

A `const` requires a compile-time value.

Correct:

```csharp
public const int Value = 10;
```

If it needs constructor initialization:

```csharp
public readonly int Value;

public MyClass()
{
    Value = 10;
}
```

---

# 58. What's Wrong With This Async Code?

```csharp
public async Task GetData()
{
    GetDataFromApi();
}
```

If `GetDataFromApi()` returns a `Task`, normally await it:

```csharp
public async Task GetData()
{
    await GetDataFromApi();
}
```

Otherwise the outer method may complete before the asynchronous operation finishes.

---

# 59. What Is Wrong With This LINQ Code?

```csharp
var students =
    db.Students.ToList();

var result =
    students
        .Where(x => x.Age > 30)
        .ToList();
```

If the database contains millions of students, all records are loaded first.

Better:

```csharp
var result =
    await db.Students
        .Where(x => x.Age > 30)
        .ToListAsync();
```

Now the filtering can happen in the database.

---

# 60. How Would You Explain Your C# Architecture?

A strong interview answer:

> "I normally separate the application into presentation, business/service, and data-access responsibilities. Controllers or UI components handle requests, services contain business logic, and EF Core handles persistence. I use interfaces for abstractions and Dependency Injection for loose coupling. For I/O operations I use async APIs. I also use centralized exception handling, structured logging, validation, and unit tests around business logic."

This demonstrates that you understand **how C# features are applied in real applications**, rather than only knowing syntax.

---

# 🎓 Recommended Interview Progression

## Round 1 — C# Basics

1. Value Type vs Reference Type
2. `ref` / `out`
3. `const` / `readonly`
4. Class / Object
5. Constructor
6. Method Overloading
7. Method Overriding
8. Interface
9. Abstract Class
10. Exception Handling

---

## Round 2 — Logical Programming

11. Duplicate Numbers
12. Character Frequency
13. Second Largest
14. Missing Number
15. Palindrome
16. Reverse String
17. Array Sorting
18. Dictionary
19. HashSet
20. LINQ

---

## Round 3 — Intermediate C#

21. IEnumerable
22. IQueryable
23. Deferred Execution
24. Delegate
25. Event
26. Extension Method
27. Generics
28. async/await
29. Task
30. IDisposable
31. Garbage Collection

---

## Round 4 — Real-World .NET

32. Dependency Injection
33. SOLID
34. EF Core
35. N+1 Query
36. SQL Injection
37. API Integration
38. Authentication
39. Logging
40. Exception Handling
41. Performance

---

## Round 5 — Scenario / Design

42. Payment System
43. Notification System
44. Student Management System
45. Mentor Booking System
46. Employee Salary System
47. E-Commerce Order System
48. Banking Transaction System
49. Appointment Booking System
50. Complete .NET Application Design

---

# ⭐ Interview Preparation Strategy

Don't memorize only the definition.

For every C# feature, prepare these **5 questions**:

### 1. What is it?

Example:

> What is an interface?

### 2. Why do we use it?

> Why would you use an interface?

### 3. When do we use it?

> Give a real-world example.

### 4. What is the alternative?

> Interface vs abstract class?

### 5. What happens internally?

> How does dependency injection resolve the interface?

---

# 🚀 Final Interview Rule

A strong C# developer should be able to explain:

```text
Concept
   ↓
Syntax
   ↓
Example
   ↓
Real-world Use Case
   ↓
Advantages
   ↓
Disadvantages
   ↓
Alternative
   ↓
Performance / Security
```

For example:

```text
Interface
   ↓
Contract
   ↓
IPayment
   ↓
Payment System
   ↓
Loose Coupling
   ↓
More Abstraction
   ↓
Abstract Class
   ↓
Dependency Injection
```

> **Don't just learn C# syntax. Learn when and why to use each feature.**

