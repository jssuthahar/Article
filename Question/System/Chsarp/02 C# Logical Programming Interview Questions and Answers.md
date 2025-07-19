# ⭐ C# Logical Programming Interview Questions and Answers


---

### 1. Reverse a String

**Q:** Write a program to reverse the string "hello" without using `Reverse()` method.

```csharp
string input = "hello";
string reversed = "";
for (int i = input.Length - 1; i >= 0; i--)
{
    reversed += input[i];
}
Console.WriteLine(reversed);
```

**Output:**

```
olleh
```

---

### 2. Palindrome Check

**Q:** Check if the string "madam" is a palindrome.

```csharp
string input = "madam";
bool isPalindrome = true;
for (int i = 0; i < input.Length / 2; i++)
{
    if (input[i] != input[input.Length - i - 1])
    {
        isPalindrome = false;
        break;
    }
}
Console.WriteLine(isPalindrome);
```

**Output:**

```
True
```

---

### 3. Find Second Highest Number

**Q:** Find the second largest number in the array `{10, 20, 30, 25}`.

```csharp
int[] arr = {10, 20, 30, 25};
int first = int.MinValue, second = int.MinValue;
foreach (int num in arr)
{
    if (num > first)
    {
        second = first;
        first = num;
    }
    else if (num > second && num < first)
    {
        second = num;
    }
}
Console.WriteLine(second);
```

**Output:**

```
25
```

---

### 4. Count Vowels

**Q:** Count the number of vowels in the string "education".

```csharp
string input = "education";
int count = 0;
foreach (char c in input.ToLower())
{
    if ("aeiou".Contains(c)) count++;
}
Console.WriteLine(count);
```

**Output:**

```
5
```

---

### 5. Fibonacci Series

**Q:** Print the first 5 Fibonacci numbers.

```csharp
int a = 0, b = 1;
Console.Write(a + " " + b + " ");
for (int i = 2; i < 5; i++)
{
    int c = a + b;
    Console.Write(c + " ");
    a = b;
    b = c;
}
```

**Output:**

```
0 1 1 2 3
```

---

### 6. Factorial (Recursive-style Inline)

**Q:** Calculate the factorial of 5.

```csharp
int n = 5;
int result = 1;
for (int i = 1; i <= n; i++)
{
    result *= i;
}
Console.WriteLine(result);
```

**Output:**

```
120
```

---

### 7. Duplicate Characters

**Q:** Find duplicate characters in the string "programming".

```csharp
string input = "programming";
Dictionary<char, int> dict = new();
foreach (char c in input)
{
    if (dict.ContainsKey(c)) dict[c]++;
    else dict[c] = 1;
}
foreach (var kv in dict)
{
    if (kv.Value > 1)
        Console.WriteLine(kv.Key + ": " + kv.Value);
}
```

**Output:**

```
r: 2
g: 2
m: 2
```

---

### 8. Sum of Digits

**Q:** Find the sum of digits of number 1234.

```csharp
int number = 1234;
int sum = 0;
while (number > 0)
{
    sum += number % 10;
    number /= 10;
}
Console.WriteLine(sum);
```

**Output:**

```
10
```

---

### 9. Swap Without Temp

**Q:** Swap two numbers `a = 5`, `b = 10` without a temp variable.

```csharp
int a = 5, b = 10;
a = a + b;
b = a - b;
a = a - b;
Console.WriteLine("a=" + a + " b=" + b);
```

**Output:**

```
a=10 b=5
```

---

### 10. Prime Check

**Q:** Check if the number 17 is prime.

```csharp
int number = 17;
bool isPrime = true;
for (int i = 2; i <= Math.Sqrt(number); i++)
{
    if (number % i == 0)
    {
        isPrime = false;
        break;
    }
}
Console.WriteLine(isPrime);
```

**Output:**

```
True
```

---


## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

