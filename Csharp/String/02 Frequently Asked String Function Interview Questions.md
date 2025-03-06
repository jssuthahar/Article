# Frequently Asked String Function Interview Questions

## Overview
This document contains commonly asked interview questions related to string functions in C#. It also includes the names of companies that have asked these questions in past interviews and sample code snippets to help you understand the concepts better.

---

## 1. What is the difference between `String` and `StringBuilder`?
**Asked by:** Microsoft, Amazon, Google

**Explanation:**
- `String` is immutable, meaning every modification creates a new string in memory.
- `StringBuilder` is mutable, meaning modifications happen in place, making it more memory-efficient for frequent modifications.

**Example:**
```csharp
string str = "Hello";
str += " World"; // New object created

StringBuilder sb = new StringBuilder("Hello");
sb.Append(" World"); // Modified in place
```

---

## 2. What is the difference between `Substring()` and `Remove()`?
**Asked by:** TCS, Infosys, Accenture

**Explanation:**
- `Substring(startIndex, length)`: Extracts a portion of a string starting from `startIndex`.
- `Remove(startIndex, length)`: Removes a portion of a string starting from `startIndex`.

**Example:**
```csharp
string text = "Interview Question";
string sub = text.Substring(0, 9); // "Interview"
string removed = text.Remove(9, 8); // "Interview"
```

---

## 3. How do `Trim()`, `TrimStart()`, and `TrimEnd()` work?
**Asked by:** Cognizant, HCL, Capgemini

**Example:**
```csharp
string text = "  Hello World  ";
string trimmed = text.Trim(); // "Hello World"
string startTrimmed = text.TrimStart(); // "Hello World  "
string endTrimmed = text.TrimEnd(); // "  Hello World"
```

---

## 4. How to efficiently capitalize the first letter of a string?
**Asked by:** Wipro, Oracle, IBM

**Bad Approach:** (Performance issue due to string immutability)
```csharp
char[] chars = text.ToCharArray();
chars[0] = char.ToUpper(chars[0]);
text = new string(chars);
```

**Best Approach:**
```csharp
string text = "kishor";
string capitalized = char.ToUpper(text[0]) + text.Substring(1).ToLower();
```

---

## 5. Difference between `IsNullOrEmpty()` and `IsNullOrWhiteSpace()`?
**Asked by:** Amazon, Google, Meta

**Example:**
```csharp
string empty = "";
string space = "   ";
bool isEmpty = string.IsNullOrEmpty(empty); // true
bool isWhiteSpace = string.IsNullOrWhiteSpace(space); // true
```

---

## 6. How does `IndexOf()` and `LastIndexOf()` work?
**Asked by:** TCS, Infosys, Capgemini

**Example:**
```csharp
string text = "Hello World Hello";
int firstIndex = text.IndexOf("Hello"); // 0
int lastIndex = text.LastIndexOf("Hello"); // 12
```

---

## 7. How to check if a string contains a specific substring?
**Asked by:** Microsoft, Google, Cognizant

**Example:**
```csharp
string email = "test@example.com";
bool containsAt = email.Contains("@"); // true
```

---

## 8. How to efficiently split and join strings?
**Asked by:** Amazon, Oracle, Infosys

**Example:**
```csharp
string names = "Kishor,Kumar,Naveen";
string[] nameArray = names.Split(',');
string joined = string.Join(" - ", nameArray); // "Kishor - Kumar - Naveen"
```

---

## 9. How to replace part of a string?
**Asked by:** IBM, Capgemini, HCL

**Example:**
```csharp
string text = "Hello World";
string replaced = text.Replace("World", "C#"); // "Hello C#"
```

---

## 10. What is the best way to validate an email string?
**Asked by:** Microsoft, Meta, Amazon

**Example:**
```csharp
bool isValid = email.Contains("@");
```

---

## Task for Candidates
Write a program that takes user input and performs the following:
- Capitalizes the first letter of each word.
- Validates email.
- Checks if a string is empty.

**Share your code!**

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)


