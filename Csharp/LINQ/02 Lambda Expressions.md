# LINQ with Lambda Expressions in C#

## Introduction

Lambda expressions provide a concise way to define anonymous functions in C#. When used with LINQ, they simplify queries and make code more readable and expressive. Lambda expressions are often used in method-based LINQ queries.

## Why Use Lambda Expressions in LINQ?

- **Concise and Readable:** Reduces boilerplate code compared to traditional query syntax.
- **Flexible:** Works seamlessly with LINQ methods like `Where`, `Select`, `OrderBy`, etc.
- **Improved Performance:** Directly integrates with LINQ extension methods, reducing intermediate query operations.

## Basic Syntax of Lambda Expressions

```csharp
(parameters) => expression;
```

For example, a simple lambda expression that squares a number:

```csharp
int square = (x) => x * x;
Console.WriteLine(square(5)); // Output: 25
```

## LINQ Queries Using Lambda Expressions

### Filtering Data (Where)

```csharp
void FilterEvenNumbers(List<int> numbers)
{
    var evenNumbers = numbers.Where(num => num % 2 == 0);

    Console.WriteLine("Even Numbers:");
    foreach (var num in evenNumbers)
    {
        Console.WriteLine(num);
    }
}
```

### Sorting Data (OrderBy)

```csharp
void SortNames(List<string> names)
{
    var sortedNames = names.OrderBy(name => name);

    Console.WriteLine("Sorted Names:");
    foreach (var name in sortedNames)
    {
        Console.WriteLine(name);
    }
}
```

### Selecting Specific Properties (Select)

```csharp
void SelectStudentNames(List<Student> students)
{
    var studentNames = students.Select(student => student.Name);

    Console.WriteLine("Student Names:");
    foreach (var name in studentNames)
    {
        Console.WriteLine(name);
    }
}
```

### Grouping Data (GroupBy)

```csharp
void GroupStudentsByAge(List<Student> students)
{
    var groupedStudents = students.GroupBy(student => student.Age);

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

### Joining Collections (Join)

```csharp
void JoinStudentsWithScores(List<Student> students, List<Score> scores)
{
    var studentScores = students.Join(scores,
                                      student => student.Id,
                                      score => score.StudentId,
                                      (student, score) => new { student.Name, score.Marks });

    Console.WriteLine("Student Scores:");
    foreach (var record in studentScores)
    {
        Console.WriteLine($"{record.Name}: {record.Marks}");
    }
}
```

### Finding Maximum Value (Max)

```csharp
void FindMaxValue(List<int> numbers)
{
    var maxNumber = numbers.Max();
    Console.WriteLine("Maximum Number: " + maxNumber);
}
```

### Counting Elements (Count)

```csharp
void CountElements(List<int> numbers)
{
    var count = numbers.Count();
    Console.WriteLine("Total Elements: " + count);
}
```

### Checking for a Condition (All)

```csharp
void CheckIfAllEven(List<int> numbers)
{
    var allEven = numbers.All(num => num % 2 == 0);
    Console.WriteLine("Are all numbers even? " + allEven);
}
```

## Conclusion

Lambda expressions in LINQ make queries more expressive and concise. By using LINQ extension methods like `Where`, `Select`, `OrderBy`, `GroupBy`, and `Join`, we can efficiently filter, sort, group, and manipulate collections with minimal code. Mastering lambda expressions will significantly improve your efficiency as a C# developer.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
