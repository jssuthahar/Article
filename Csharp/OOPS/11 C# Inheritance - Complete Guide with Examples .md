
# 📘 C# Inheritance - Complete Guide with Examples 

---

## 🔹 What is Inheritance?

Inheritance is a fundamental concept of Object-Oriented Programming (OOP) that allows one class to **inherit** properties and methods from another class.

### 🔑 Benefits:
- Code Reusability
- Easy Maintenance
- Scalability
- Reduces Code Duplication

---

## 🔸 Syntax

```csharp
class BaseClass
{
    // Members
}

class DerivedClass : BaseClass
{
    // Inherited members + New members
}
```

---

# 🧑‍💼 Real-World Example: Register, Employee, Student

### 🔹 Base Class: Register

```csharp
public class Register
{
    public string Name { get; set; }
    public string Email { get; set; }

    public void ShowDetails()
    {
        Console.WriteLine($"Name: {Name}");
        Console.WriteLine($"Email: {Email}");
    }
}
```

---

### 🔸 Derived Class: Employee

```csharp
public class Employee : Register
{
    public string EmployeeID { get; set; }
    public string Department { get; set; }

    public void ShowEmployeeDetails()
    {
        ShowDetails(); // Inherited method
        Console.WriteLine($"Employee ID: {EmployeeID}");
        Console.WriteLine($"Department: {Department}");
    }
}
```

---

### 🔸 Derived Class: Student

```csharp
public class Student : Register
{
    public string StudentID { get; set; }
    public string Course { get; set; }

    public void ShowStudentDetails()
    {
        ShowDetails(); // Inherited method
        Console.WriteLine($"Student ID: {StudentID}");
        Console.WriteLine($"Course: {Course}");
    }
}
```

---

### ✅ Full Program

```csharp
class Program
{
    static void Main()
    {
        Employee emp = new Employee
        {
            Name = "Alice",
            Email = "alice@example.com",
            EmployeeID = "EMP123",
            Department = "IT"
        };

        Console.WriteLine("=== Employee ===");
        emp.ShowEmployeeDetails();

        Console.WriteLine();

        Student stu = new Student
        {
            Name = "Bob",
            Email = "bob@example.com",
            StudentID = "STU456",
            Course = "Computer Science"
        };

        Console.WriteLine("=== Student ===");
        stu.ShowStudentDetails();
    }
}
```

---

## 🔍 Output

```
=== Employee ===
Name: Alice
Email: alice@example.com
Employee ID: EMP123
Department: IT

=== Student ===
Name: Bob
Email: bob@example.com
Student ID: STU456
Course: Computer Science
```

---

# 🧱 Types of Inheritance in C#

| Type             | Description                                  | Supported in C# |
|------------------|----------------------------------------------|------------------|
| Single           | One class inherits from one base class       | ✅ Yes           |
| Multilevel       | A class inherits from a class that is already derived | ✅ Yes |
| Hierarchical     | Multiple classes inherit from one base class | ✅ Yes           |
| Multiple         | One class inherits from multiple classes      | ❌ No (Use Interfaces) |

---

## 1️⃣ Single Inheritance

```csharp
class A
{
    public void MethodA() => Console.WriteLine("A");
}

class B : A
{
    public void MethodB() => Console.WriteLine("B");
}
```

---

## 2️⃣ Multilevel Inheritance

```csharp
class A
{
    public void MethodA() => Console.WriteLine("A");
}

class B : A
{
    public void MethodB() => Console.WriteLine("B");
}

class C : B
{
    public void MethodC() => Console.WriteLine("C");
}
```

---

## 3️⃣ Hierarchical Inheritance

```csharp
class A
{
    public void MethodA() => Console.WriteLine("A");
}

class B : A
{
    public void MethodB() => Console.WriteLine("B");
}

class C : A
{
    public void MethodC() => Console.WriteLine("C");
}
```

---

## 4️⃣ Multiple Inheritance (Not Supported - Use Interface)

```csharp
interface I1
{
    void Method1();
}

interface I2
{
    void Method2();
}

class MyClass : I1, I2
{
    public void Method1() => Console.WriteLine("Method1");
    public void Method2() => Console.WriteLine("Method2");
}
```

---

# ❓ Interview Questions & Answers on Inheritance

### 1. **What is inheritance in C#?**
Inheritance allows a class to inherit methods and properties from another class, promoting code reusability.

---

### 2. **Can you inherit multiple classes in C#?**
No, but you can implement multiple interfaces.

---

### 3. **Difference between `base` and `this`?**
- `base` refers to the base class
- `this` refers to the current class

---

### 4. **What is method overriding?**
Redefining a base class method using `override` in the derived class and `virtual` in the base class.

---

### 5. **Access modifiers and inheritance?**

| Modifier   | Accessible in Derived Class? |
|------------|-------------------------------|
| public     | ✅ Yes                         |
| protected  | ✅ Yes                         |
| private    | ❌ No                          |

---

# 🧪 Practice Exercise

- Create a class `Trainer` that inherits from `Register`
- Add `TrainerID` and `Subject`
- Create a method `ShowTrainerDetails()`

---

# ✅ Summary

- Inheritance enables reuse of existing code.
- Use `:` to inherit from a class.
- C# supports single, multilevel, hierarchical inheritance.
- Use interfaces for multiple inheritance-like behavior.
- Remember `virtual` and `override` for polymorphism.

   ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
