## C# Logical/System Programming Questions (16–25)

---

### ✅ Q16. Find the missing number in an array from 1 to n
```csharp
public int FindMissingNumber(int[] arr, int n)
{
    int total = n * (n + 1) / 2;
    int sum = arr.Sum();
    return total - sum;
}
```
**Output:** `FindMissingNumber([1,2,4,5], 5) => 3`

---

### ✅ Q17. Swap two numbers without using a temp variable
```csharp
public void Swap(ref int a, ref int b)
{
    a = a + b;
    b = a - b;
    a = a - b;
}
```
**Output:** `a = 5, b = 10 => a = 10, b = 5`

---

### ✅ Q18. Print duplicate elements in an array
```csharp
public void PrintDuplicates(int[] arr)
{
    var dict = new Dictionary<int, int>();
    foreach (var item in arr)
    {
        if (dict.ContainsKey(item)) dict[item]++;
        else dict[item] = 1;
    }
    foreach (var kv in dict)
        if (kv.Value > 1)
            Console.WriteLine($"Duplicate: {kv.Key}");
}
```
**Output:** `For arr = [1, 2, 3, 2, 4, 1] => 1, 2`

---

### ✅ Q19. Find the maximum occurring character in a string
```csharp
public char MaxOccurringChar(string input)
{
    var dict = new Dictionary<char, int>();
    foreach (char c in input)
    {
        if (dict.ContainsKey(c)) dict[c]++;
        else dict[c] = 1;
    }
    return dict.Aggregate((x, y) => x.Value > y.Value ? x : y).Key;
}
```
**Output:** `MaxOccurringChar("hello") => 'l'`

---

### ✅ Q20. Merge two sorted arrays into one sorted array
```csharp
public int[] MergeSortedArrays(int[] arr1, int[] arr2)
{
    int[] result = new int[arr1.Length + arr2.Length];
    int i = 0, j = 0, k = 0;
    while (i < arr1.Length && j < arr2.Length)
    {
        if (arr1[i] < arr2[j]) result[k++] = arr1[i++];
        else result[k++] = arr2[j++];
    }
    while (i < arr1.Length) result[k++] = arr1[i++];
    while (j < arr2.Length) result[k++] = arr2[j++];
    return result;
}
```
**Output:** `MergeSortedArrays([1,3,5],[2,4,6]) => [1,2,3,4,5,6]`

---

### ✅ Q21. Reverse a string using recursion
```csharp
public string ReverseString(string input)
{
    if (input.Length <= 1) return input;
    return ReverseString(input.Substring(1)) + input[0];
}
```
**Output:** `ReverseString("chat") => "tahc"`

---

### ✅ Q22. Count number of words in a string
```csharp
public int WordCount(string sentence)
{
    return sentence.Split(new[] { ' ', '\t' }, StringSplitOptions.RemoveEmptyEntries).Length;
}
```
**Output:** `WordCount("This is a test") => 4`

---

### ✅ Q23. Check if two strings are anagrams
```csharp
public bool AreAnagrams(string str1, string str2)
{
    return string.Concat(str1.OrderBy(c => c)) == string.Concat(str2.OrderBy(c => c));
}
```
**Output:** `AreAnagrams("listen", "silent") => true`

---

### ✅ Q24. Sum of all digits of a number
```csharp
public int SumOfDigits(int number)
{
    int sum = 0;
    while (number > 0)
    {
        sum += number % 10;
        number /= 10;
    }
    return sum;
}
```
**Output:** `SumOfDigits(1234) => 10`

---

### ✅ Q25. Find GCD of two numbers
```csharp
public int GCD(int a, int b)
{
    while (b != 0)
    {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```
**Output:** `GCD(48, 18) => 6`

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

