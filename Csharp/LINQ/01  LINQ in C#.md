# LINQ in C#

## Introduction

Language Integrated Query (LINQ) is a powerful feature in C# that allows you to query collections, databases, XML, and other data sources using a consistent syntax. LINQ provides an easy and readable way to filter, sort, and manipulate data.

## Why Do We Need LINQ?

Before LINQ, developers relied on traditional loops (`for`, `foreach`, `while`) and conditional statements to filter, sort, and manipulate data. This approach led to lengthy and error-prone code.

### Example Without LINQ:

```csharp
List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
List<int> evenNumbers = new List<int>();

foreach (int num in numbers)
{
    if (num % 2 == 0)
    {
        evenNumbers.Add(num);
    }
}

foreach (var num in evenNumbers)
{
    Console.WriteLine(num);
}
```

This approach is verbose and requires manually managing lists. LINQ simplifies this process using query syntax.

### Example Using LINQ:

```csharp
var evenNumbers = from num in numbers
                  where num % 2 == 0
                  select num;

foreach (var num in evenNumbers)
{
    Console.WriteLine(num);
}
```

With LINQ, we reduce the amount of code and improve readability.

## Basic LINQ Syntax

LINQ queries follow a simple structure:

```csharp
var result = from variable in collection
             where condition
             select variable;
```

## Example Methods for LINQ

### Filtering Data

```csharp
void FilterEvenNumbers(List<int> numbers)
{
    var evenNumbers = from num in numbers
                      where num % 2 == 0
                      select num;

    Console.WriteLine("Even Numbers:");
    foreach (var num in evenNumbers)
    {
        Console.WriteLine(num);
    }
}
```

### Sorting Data

```csharp
void SortNames(List<string> names)
{
    var sortedNames = from name in names
                      orderby name
                      select name;

    Console.WriteLine("Sorted Names:");
    foreach (var name in sortedNames)
    {
        Console.WriteLine(name);
    }
}
```

### Selecting Specific Data

```csharp
void SelectStudentNames(List<Student> students)
{
    var studentNames = from student in students
                       select student.Name;

    Console.WriteLine("Student Names:");
    foreach (var name in studentNames)
    {
        Console.WriteLine(name);
    }
}
```

### Grouping Data

```csharp
void GroupStudentsByAge(List<Student> students)
{
    var groupedStudents = from student in students
                          group student by student.Age;

    Console.WriteLine("Grouped Students by Age:");
    foreach (var group in groupedStudents)
    {
        Console.WriteLine($"Age: {group.Key}");
        foreach (var student in group)
        {
            Console.WriteLine(" - " + student.Name);
        }
    }
}
```

### Joining Collections

```csharp
void JoinStudentsWithScores(List<Student> students, List<Score> scores)
{
    var studentScores = from student in students
                        join score in scores on student.Id equals score.StudentId
                        select new { student.Name, score.Marks };

    Console.WriteLine("Student Scores:");
    foreach (var record in studentScores)
    {
        Console.WriteLine($"{record.Name}: {record.Marks}");
    }
}
```

### Finding Maximum Value

```csharp
void FindMaxValue(List<int> numbers)
{
    var maxNumber = (from num in numbers select num).Max();
    Console.WriteLine("Maximum Number: " + maxNumber);
}
```

### Counting Elements

```csharp
void CountElements(List<int> numbers)
{
    var count = (from num in numbers select num).Count();
    Console.WriteLine("Total Elements: " + count);
}
```

### Checking for a Condition

```csharp
void CheckIfAllEven(List<int> numbers)
{
    var allEven = (from num in numbers select num).All(num => num % 2 == 0);
    Console.WriteLine("Are all numbers even? " + allEven);
}
```

## Conclusion

LINQ simplifies data queries in C# by providing a powerful, readable, and efficient way to work with collections. By using LINQ, you can perform filtering, sorting, grouping, joining, and data selection with minimal code. Additionally, LINQ enhances code maintainability and reduces errors compared to traditional looping approaches.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
