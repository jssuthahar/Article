# C# Properties with Generic List Example

## Introduction
Properties in C# provide a flexible mechanism to access and modify fields in a class. They encapsulate data, ensuring controlled access using **getters** and **setters**. This document explains how to use properties effectively, particularly in conjunction with **generic lists**.

## Understanding Properties
A **property** in C# is a member of a class that provides a way to read, write, or compute the value of a private field. It consists of **accessors**:
- `get` accessor returns the property value.
- `set` accessor assigns a value.

### Syntax
```csharp
private datatype field;
public datatype PropertyName {
    get { return field; }
    set { field = value; }
}
```

## Using Properties with Generic Lists
Generic lists (`List<T>`) are commonly used in C# to store and manipulate collections of objects. Using properties with `List<T>` allows controlled access and ensures data encapsulation.

### Example: Managing a List of Students
```csharp
using System;
using System.Collections.Generic;

class Student
{
    public string Name { get; set; }
    public int Age { get; set; }
}

class Classroom
{
    private List<Student> students = new List<Student>();

    public List<Student> Students
    {
        get { return students; }
        set { students = value; }
    }

    public void AddStudent(string name, int age)
    {
        students.Add(new Student { Name = name, Age = age });
    }
}

class Program
{
    static void Main()
    {
        Classroom classroom = new Classroom();
        classroom.AddStudent("Alice", 20);
        classroom.AddStudent("Bob", 22);

        foreach (var student in classroom.Students)
        {
            Console.WriteLine($"Name: {student.Name}, Age: {student.Age}");
        }
    }
}
```

## Explanation
1. The `Student` class has **auto-implemented properties** for `Name` and `Age`.
2. The `Classroom` class contains a **private field** `students`, which is a `List<Student>`.
3. A **public property** `Students` provides controlled access to the private field.
4. The `AddStudent()` method allows adding students to the list.
5. In the `Main()` method, we create a `Classroom` instance, add students, and display their details.

## Best Practices
- Use **auto-implemented properties** (`{ get; set; }`) when direct access is safe.
- For **mutable collections**, provide controlled access to prevent unintended modifications.
- Consider **read-only properties** if modification should only occur internally:
    ```csharp
    public List<Student> Students { get; } = new List<Student>();
    ```
- Use **private setters** if external modification should be restricted:
    ```csharp
    public List<Student> Students { get; private set; }
    ```

## Conclusion
Using properties with generic lists ensures **data encapsulation** and **controlled access**. The example above demonstrates a structured way to manage a list of objects while maintaining code clarity and safety.

