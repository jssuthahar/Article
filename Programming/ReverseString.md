# Reverse a String Without Using Built-in Functions

## Introduction
This repository provides a simple implementation of reversing a string without using built-in functions such as `Reverse()`, `reversed()`, or string slicing. This approach demonstrates a manual way to reverse a string using loops.

## Approach
To reverse a string manually, we iterate through the characters and construct the reversed string. This can be done using a loop or recursion.

### Method 1: Using a Loop
1. Initialize an empty string to store the reversed result.
2. Iterate through the original string from the last character to the first.
3. Append each character to the new string.
4. Return the reversed string.

#### Example Code (C#):
```csharp
using System;

class Program
{
    static string ReverseString(string s)
    {
        string reversedStr = "";
        foreach (char c in s)
        {
            reversedStr = c + reversedStr; // Prepend each character
        }
        return reversedStr;
    }

    static void Main()
    {
        string original = "msdebuild";
        Console.WriteLine("Reversed: " + ReverseString(original)); // Output: "olleh"
    }
}
```

### Method 2: Using Recursion
1. Base case: If the string length is 0 or 1, return the string itself.
2. Recursive case: Take the first character, place it at the end, and recursively reverse the remaining string.

#### Example Code (C#):
```csharp
using System;

class Program
{
    static string ReverseStringRecursive(string s)
    {
        if (s.Length <= 1)
            return s;
        return ReverseStringRecursive(s.Substring(1)) + s[0];
    }

    static void Main()
    {
        string original = "msdebuild";
        Console.WriteLine("Reversed: " + ReverseStringRecursive(original)); // Output: "olleh"
    }
}
```

## Complexity Analysis
- **Loop method:** \(O(n)\) time complexity since we traverse the string once.
- **Recursive method:** \(O(n)\) time complexity, but has an additional space overhead due to recursive calls.

## Usage
1. Clone this repository.
2. Run the script with C# to test the reversing functions.
3. Modify the implementation to suit your needs.

## Conclusion
This demonstrates how to reverse a string manually using fundamental programming techniques. Understanding this helps reinforce concepts of string manipulation, recursion, and iteration.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)

