## C# Logical/System Programming Questions (26–40)

---

### ✅ Q26. Find LCM of two numbers
```csharp
public int LCM(int a, int b)
{
    int max = Math.Max(a, b);
    while (true)
    {
        if (max % a == 0 && max % b == 0)
            return max;
        max++;
    }
}
```
**Output:** `LCM(4, 6) => 12`

---

### ✅ Q27. Convert binary to decimal
```csharp
public int BinaryToDecimal(string binary)
{
    return Convert.ToInt32(binary, 2);
}
```
**Output:** `BinaryToDecimal("1010") => 10`

---

### ✅ Q28. Convert decimal to binary
```csharp
public string DecimalToBinary(int number)
{
    return Convert.ToString(number, 2);
}
```
**Output:** `DecimalToBinary(10) => "1010"`

---

### ✅ Q29. Count set bits in an integer
```csharp
public int CountSetBits(int n)
{
    int count = 0;
    while (n > 0)
    {
        count += n & 1;
        n >>= 1;
    }
    return count;
}
```
**Output:** `CountSetBits(13) => 3`

---

### ✅ Q30. Find common elements in two arrays
```csharp
public int[] CommonElements(int[] a, int[] b)
{
    return a.Intersect(b).ToArray();
}
```
**Output:** `CommonElements([1,2,3],[2,3,4]) => [2,3]`

---

### ✅ Q31. Find first non-repeating character
```csharp
public char FirstNonRepeatingChar(string s)
{
    foreach (char c in s)
        if (s.IndexOf(c) == s.LastIndexOf(c)) return c;
    return '\0';
}
```
**Output:** `FirstNonRepeatingChar("swiss") => 'w'`

---

### ✅ Q32. Print all permutations of a string
```csharp
public void Permute(string s, string result = "")
{
    if (s.Length == 0)
        Console.WriteLine(result);
    else
    {
        for (int i = 0; i < s.Length; i++)
        {
            string rem = s.Substring(0, i) + s.Substring(i + 1);
            Permute(rem, result + s[i]);
        }
    }
}
```
**Output:** `Permute("abc") => abc, acb, bac, bca, cab, cba`

---

### ✅ Q33. Move zeros to end of array
```csharp
public int[] MoveZeros(int[] nums)
{
    int index = 0;
    foreach (var num in nums)
        if (num != 0) nums[index++] = num;
    while (index < nums.Length) nums[index++] = 0;
    return nums;
}
```
**Output:** `MoveZeros([0,1,0,3,12]) => [1,3,12,0,0]`

---

### ✅ Q34. Convert string to title case
```csharp
public string ToTitleCase(string input)
{
    return System.Globalization.CultureInfo.CurrentCulture.TextInfo.ToTitleCase(input);
}
```
**Output:** `ToTitleCase("hello world") => "Hello World"`

---

### ✅ Q35. Find majority element (more than n/2 times)
```csharp
public int? MajorityElement(int[] nums)
{
    int count = 0, candidate = 0;
    foreach (var num in nums)
    {
        if (count == 0)
        {
            candidate = num;
            count = 1;
        }
        else if (num == candidate)
            count++;
        else
            count--;
    }
    return nums.Count(x => x == candidate) > nums.Length / 2 ? candidate : null;
}
```
**Output:** `MajorityElement([2,2,1,1,2]) => 2`

---

### ✅ Q36. Check if two arrays are equal (order independent)
```csharp
public bool AreArraysEqual(int[] a, int[] b)
{
    Array.Sort(a);
    Array.Sort(b);
    return a.SequenceEqual(b);
}
```
**Output:** `AreArraysEqual([1,2,3], [3,2,1]) => true`

---

### ✅ Q37. Convert integer to Roman numeral
```csharp
public string IntToRoman(int num)
{
    var map = new[] {
        (1000, "M"), (900, "CM"), (500, "D"), (400, "CD"),
        (100, "C"), (90, "XC"), (50, "L"), (40, "XL"),
        (10, "X"), (9, "IX"), (5, "V"), (4, "IV"), (1, "I") };

    string result = "";
    foreach (var (val, sym) in map)
    {
        while (num >= val)
        {
            result += sym;
            num -= val;
        }
    }
    return result;
}
```
**Output:** `IntToRoman(58) => "LVIII"`

---

### ✅ Q38. Find min and max without sorting
```csharp
public (int min, int max) FindMinMax(int[] arr)
{
    int min = arr[0], max = arr[0];
    foreach (var num in arr)
    {
        if (num < min) min = num;
        if (num > max) max = num;
    }
    return (min, max);
}
```
**Output:** `FindMinMax([5,1,9,3]) => (1, 9)`

---

### ✅ Q39. Find power using recursion
```csharp
public int Power(int x, int y)
{
    if (y == 0) return 1;
    return x * Power(x, y - 1);
}
```
**Output:** `Power(2, 3) => 8`

---

### ✅ Q40. Generate prime numbers up to N
```csharp
public List<int> GeneratePrimes(int n)
{
    var primes = new List<int>();
    for (int i = 2; i <= n; i++)
    {
        bool isPrime = true;
        for (int j = 2; j <= Math.Sqrt(i); j++)
            if (i % j == 0)
            {
                isPrime = false;
                break;
            }
        if (isPrime) primes.Add(i);
    }
    return primes;
}
```
**Output:** `GeneratePrimes(10) => [2, 3, 5, 7]`

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
