
# 💡 C# Logical Coding Interview Questions – Strings, Arrays, and For Loops

This repository contains **25 logical coding problems** commonly asked in interviews at **TCS, Wipro, Accenture, Flipkart, and Paytm**. The focus is on:
- ✅ Strings
- ✅ Arrays
- ✅ For-Loops

---

## 📘 Strings – 9 Questions

### 1. Reverse a String without Built-in Methods
```csharp
string input = "hello";
string reversed = "";
for (int i = input.Length - 1; i >= 0; i--) reversed += input[i];
Console.WriteLine(reversed);
````

---

### 2. Check if a String is Palindrome

```csharp
string input = "madam";
bool isPalindrome = true;
for (int i = 0; i < input.Length / 2; i++)
    if (input[i] != input[input.Length - i - 1])
        isPalindrome = false;
```

---

### 3. Count Vowels and Consonants

```csharp
string str = "Accenture";
int v = 0, c = 0;
foreach (char ch in str.ToLower())
{
    if ("aeiou".Contains(ch)) v++;
    else if (char.IsLetter(ch)) c++;
}
```

---

### 4. Remove Duplicate Characters

```csharp
string input = "interview";
string result = "";
foreach (char c in input)
    if (!result.Contains(c)) result += c;
```

---

### 5. Count Occurrence of Each Character

```csharp
string str = "google";
Dictionary<char, int> dict = new();
foreach (char c in str)
    dict[c] = dict.ContainsKey(c) ? dict[c] + 1 : 1;
```

---

### 6. Find First Non-Repeating Character

```csharp
string str = "swiss";
Dictionary<char, int> freq = new();
foreach (char c in str) freq[c] = freq.ContainsKey(c) ? freq[c] + 1 : 1;
char result = freq.FirstOrDefault(x => x.Value == 1).Key;
```

---

### 7. Reverse Each Word in a Sentence

```csharp
string input = "flipkart interview";
string[] words = input.Split(' ');
string output = string.Join(" ", words.Select(w => new string(w.Reverse().ToArray())));
```

---

### 8. Compare Two Strings Without Using Equals

```csharp
bool AreEqual(string a, string b)
{
    if (a.Length != b.Length) return false;
    for (int i = 0; i < a.Length; i++)
        if (a[i] != b[i]) return false;
    return true;
}
```

---

### 9. Convert String to Integer (Manual Parsing)

```csharp
string str = "1234";
int result = 0;
foreach (char c in str)
    result = result * 10 + (c - '0');
```

---

## 📘 Arrays – 9 Questions

### 10. Find Max and Min in an Array

```csharp
int[] nums = { 2, 5, 9, 1 };
int max = nums[0], min = nums[0];
foreach (int n in nums) { if (n > max) max = n; if (n < min) min = n; }
```

---

### 11. Remove Duplicates from an Array

```csharp
int[] arr = { 1, 2, 2, 3 };
int[] unique = arr.Distinct().ToArray();
```

---

### 12. Find Second Largest Without Sorting

```csharp
int[] arr = { 10, 30, 20 };
int first = int.MinValue, second = int.MinValue;
foreach (int num in arr)
{
    if (num > first) { second = first; first = num; }
    else if (num > second && num != first) second = num;
}
```

---

### 13. Count Even and Odd Numbers

```csharp
int[] nums = { 1, 2, 3, 4, 5 };
int even = 0, odd = 0;
foreach (int n in nums) { if (n % 2 == 0) even++; else odd++; }
```

---

### 14. Merge Two Arrays Without Built-in Functions

```csharp
int[] a = { 1, 2 }, b = { 3, 4 };
int[] merged = new int[a.Length + b.Length];
for (int i = 0; i < a.Length; i++) merged[i] = a[i];
for (int i = 0; i < b.Length; i++) merged[a.Length + i] = b[i];
```

---

### 15. Find Duplicate Elements

```csharp
int[] arr = { 1, 2, 2, 3 };
HashSet<int> seen = new();
foreach (int n in arr)
    if (!seen.Add(n)) Console.WriteLine("Duplicate: " + n);
```

---

### 16. Sum of All Elements in Array

```csharp
int[] nums = { 1, 2, 3 };
int sum = 0;
foreach (int n in nums) sum += n;
```

---

### 17. Reverse an Array

```csharp
int[] arr = { 1, 2, 3 };
for (int i = 0, j = arr.Length - 1; i < j; i++, j--)
{
    int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
}
```

---

### 18. Find Common Elements in Two Arrays

```csharp
int[] a = { 1, 2, 3 }, b = { 2, 3, 4 };
var common = a.Intersect(b);
```

---

## 📘 For-Loops – 7 Questions

### 19. Print Numbers 1 to 10 Using For Loop

```csharp
for (int i = 1; i <= 10; i++)
    Console.Write(i + " ");
```

---

### 20. Print Even Numbers from 1 to 20

```csharp
for (int i = 2; i <= 20; i += 2)
    Console.WriteLine(i);
```

---

### 21. Generate Fibonacci Series (First 10 Terms)

```csharp
int a = 0, b = 1, c;
Console.Write($"{a} {b} ");
for (int i = 2; i < 10; i++)
{
    c = a + b;
    Console.Write($"{c} ");
    a = b;
    b = c;
}
```

---

### 22. Factorial of a Number

```csharp
int num = 5, fact = 1;
for (int i = 1; i <= num; i++)
    fact *= i;
Console.WriteLine("Factorial: " + fact);
```

---

### 23. Multiplication Table of a Number

```csharp
int n = 7;
for (int i = 1; i <= 10; i++)
    Console.WriteLine($"{n} x {i} = {n * i}");
```

---

### 24. Sum of Digits of a Number

```csharp
int number = 1234, sum = 0;
while (number != 0)
{
    sum += number % 10;
    number /= 10;
}
Console.WriteLine(sum);
```

---

### 25. Print a Right-Angled Triangle

```csharp
for (int i = 1; i <= 5; i++)
{
    for (int j = 1; j <= i; j++)
        Console.Write("*");
    Console.WriteLine();
}
```

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)
