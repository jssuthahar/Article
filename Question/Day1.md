# README.md

## 1. Full form of WPF
**WPF** stands for **Windows Presentation Foundation**. It is a UI framework developed by Microsoft for building Windows desktop applications. WPF provides rich UI elements, data binding, animation, and powerful rendering capabilities using XAML and C#.

## 2. Difference between Enable & Read-only
- **Enable**: When a control (like a textbox or button) is enabled, users can interact with it. They can type in an enabled textbox or click an enabled button.
- **Read-only**: A read-only control displays content but does not allow users to edit or interact with it. For example, a **ReadOnly TextBox** allows users to copy text but not modify it.

## 3. What are different types of style?
In WPF, styles define the appearance and behavior of UI elements. Different types of styles include:
- **Control-Level Style**: Applied to a specific control in XAML.
- **Layout-Level Style**: Applied to a group of controls inside a layout container.
- **Window-Level Style**: Defined at the window level and applied to elements within that window.
- **Application-Level Style**: Defined in `App.xaml` and applied across the entire application.

## 4. What NuGet package is needed for resource files in C#?
To work with resource files in C#, install the **System.Resources.Extensions** package using the following command:
```sh
Install-Package System.Resources.Extensions
```
This package allows better handling of resource files, including globalization support.

## 5. How to create an object for ResourceManager?
To use a resource file, create a **ResourceManager** object:
```csharp
ResourceManager rm = new ResourceManager("Namespace.ResourceFileName", Assembly.GetExecutingAssembly());
```
This allows you to fetch localized string resources in C#.

## 6. What is object data type and dynamic data type?
- **object**: The base type for all data types in C#. It can hold any type of data but requires explicit casting before usage.
- **dynamic**: Similar to object but resolved at runtime, meaning it does not require explicit casting.

Example:
```csharp
object obj = 10;
dynamic dyn = 10;
Console.WriteLine(obj.GetType()); // Output: System.Int32
Console.WriteLine(dyn.GetType()); // Output: System.Int32
```

## 7. How to find data types in object?
Use the **GetType()** method to determine the data type of an object:
```csharp
object obj = 10;
Console.WriteLine(obj.GetType()); // Output: System.Int32
```

## 8. How will you do pattern matching?
Pattern matching is used in **switch** and **is** expressions to check and extract values.
```csharp
if (obj is int number)
{
    Console.WriteLine($"It's an integer: {number}");
}
```

## 9. What values can be assigned to a char data type?
A **char** in C# holds a single Unicode character.
Examples:
```csharp
char c1 = 'A';
char c2 = '\u0041'; // Unicode representation of 'A'
char c3 = '1'; // A numeric character
char c4 = '\n'; // New line character
```

## 10. Substring and Remove
- **Substring** extracts part of a string.
- **Remove** deletes part of a string.
```csharp
string text = "HelloWorld";
string sub = text.Substring(5); // Output: "World"
string removed = text.Remove(5); // Output: "Hello"
```

## 11. How to split a word into each character?
Convert a string to a character array:
```csharp
string word = "Hello";
char[] chars = word.ToCharArray();
```

## 12. How to count total records (or) values in an array?
Use the **Length** property:
```csharp
int[] arr = { 1, 2, 3, 4, 5 };
int count = arr.Length;
Console.WriteLine(count); // Output: 5
```

## 13. Types of StackPanel Orientation
StackPanel can have two orientations:
- **Horizontal**: Elements are arranged from left to right.
- **Vertical**: Elements are arranged from top to bottom (default).

Example:
```xaml
<StackPanel Orientation="Horizontal">
    <Button Content="Button1" />
    <Button Content="Button2" />
</StackPanel>
```

## 14. Substring 5?
Extracts the substring starting from index 5:
```csharp
string str = "HelloWorld";
string result = str.Substring(5); // Output: "World"
```

## 15. Remove 4?
Removes characters from index 4 onwards:
```csharp
string str = "HelloWorld";
string result = str.Remove(4); // Output: "Hell"
```

## 16. Remove 3, 2?
Removes 2 characters starting from index 3:
```csharp
string str = "HelloWorld";
string result = str.Remove(3, 2); // Output: "HeloWorld"
```

## 17. Syntax of For Loop
```csharp
for (initialization; condition; increment/decrement)
{
    // Code block
}
```

Example:
```csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}
```

## 18. How For Loop Works?
1. **Initialization**: Variable is initialized before the loop starts.
2. **Condition**: Evaluated before each iteration. If true, the loop executes.
3. **Execution**: The loop body runs if the condition holds.
4. **Update**: After execution, the loop variable updates.

Example:
```csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}
```
Output:
```
0
1
2
3
4
```

This covers all the questions with detailed explanations and examples. 🚀

