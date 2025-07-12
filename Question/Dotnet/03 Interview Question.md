# .NET & SQL Interview Preparation Guide

This document contains commonly asked interview questions for .NET developers, with expanded answers, examples, and code snippets.

---

## 1. What is a Class and Object?

A **class** is a blueprint that defines the structure and behavior (data and methods) of objects. An **object** is an instance of a class.

```csharp
class Person {
    public string Name;
    public void Greet() {
        Console.WriteLine("Hello " + Name);
    }
}
Person p = new Person();
p.Name = "John";
p.Greet();
```

---

## 2. How to access a function from another class?

Use an object of the class and call its public method.

```csharp
class A {
    public void Display() {
        Console.WriteLine("Hello from A");
    }
}
class B {
    static void Main() {
        A a = new A();
        a.Display();
    }
}
```

---

## 3. Assign values from one class to another

```csharp
class A {
    public int Id;
}
class B {
    static void Main() {
        A obj1 = new A() { Id = 10 };
        A obj2 = new A();
        obj2.Id = obj1.Id;
        Console.WriteLine(obj2.Id);
    }
}
```

---

## 4. LINQ Join Two Tables

```csharp
var result = from emp in employees
             join dept in departments on emp.DeptId equals dept.Id
             select new { emp.Name, dept.DeptName };
```

---

## 5. SQL Aggregate Functions

* `SUM()`, `AVG()`, `COUNT()`, `MIN()`, `MAX()`

---

## 6. Pyramid Pattern using Loops

```csharp
for (int i = 1; i <= 5; i++) {
    Console.WriteLine(new string('*', i));
}
```

---

## 7. What is ASP.NET?

ASP.NET is a web development framework from Microsoft to build dynamic web applications using .NET and C#.

---

## 8. ASP.NET Life Cycle (Web Forms)

1. Page Request
2. Start
3. Initialization
4. Load
5. Postback Event Handling
6. Rendering
7. Unload

---

## 9. Method Overloading vs Overriding

* **Overloading**: Same method name with different parameters.
* **Overriding**: Redefine a base class method in a derived class.

```csharp
class Base {
    public virtual void Show() {}
}
class Derived : Base {
    public override void Show() {}
}
```

**Keywords**: `virtual`, `override`, `new`

---

## 10. SQL Join Types

| JOIN Type       | Description                         |
| --------------- | ----------------------------------- |
| INNER JOIN      | Matching rows in both tables        |
| LEFT JOIN       | All left table rows + matched right |
| RIGHT JOIN      | All right table rows + matched left |
| FULL OUTER JOIN | All rows from both tables           |

---

## 11. SQL INNER JOIN Example

```sql
SELECT e.Name, d.DeptName
FROM Employees e
INNER JOIN Departments d ON e.DeptId = d.Id;
```

---

## 12. SQL Top and Last Values

```sql
-- Top 5
SELECT TOP 5 * FROM Employees ORDER BY Salary DESC;

-- Last
SELECT * FROM Employees ORDER BY ID DESC OFFSET 0 ROWS FETCH NEXT 1 ROWS ONLY;
```

---

## 13. What is Inheritance?

Inheritance is an OOP concept where one class (child) inherits the fields and methods of another (parent).

```csharp
class Animal {
    public void Eat() => Console.WriteLine("Eating...");
}
class Dog : Animal {
    public void Bark() => Console.WriteLine("Barking...");
}
```

---

## 14. What is Entity Framework?

Entity Framework (EF) is an ORM tool that allows developers to interact with databases using .NET objects instead of SQL.

---

## 15. Entity Framework Join Query

```csharp
var data = dbContext.Employees
    .Join(dbContext.Departments,
          e => e.DeptId,
          d => d.Id,
          (e, d) => new { e.Name, d.DeptName })
    .ToList();
```

---

## 16. Find Duplicate Numbers in Array

```csharp
int[] nums = { 1, 2, 3, 2, 4, 1 };
var duplicates = nums.GroupBy(n => n)
                     .Where(g => g.Count() > 1)
                     .Select(g => g.Key);
```

---

## 17. Separate Even and Odd Numbers

```csharp
int[] arr = {1,2,3,4,5};
var even = arr.Where(n => n % 2 == 0);
var odd = arr.Where(n => n % 2 != 0);
```

---

## 18. Length vs Count

* Arrays use `.Length`
* Collections like List use `.Count`

---

## 19. Number of Elements in an Array

```csharp
int[] nums = {1, 2, 3};
Console.WriteLine(nums.Length);
```

---

## 20. Run SQL in SSMS

* Press `F5` or click `Execute`

---

## 21. Execute Stored Procedure in SQL

```sql
EXEC GetEmployees;
EXEC GetEmployeeById @Id = 5;
```

---

## Final Tips:

* Avoid one-word answers.
* Always explain with an example or analogy.
* Use clear, short code snippets.
* If unsure, describe how you'd find the answer.

---

Good luck in your interview! 🚀


---
 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

