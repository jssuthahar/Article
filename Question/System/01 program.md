// ✅ Q1. Write a program to print Fibonacci series up to N terms
public void PrintFibonacci(int n)
{
    int a = 0, b = 1, c;
    Console.Write(a + " " + b + " ");
    for (int i = 2; i < n; i++)
    {
        c = a + b;
        Console.Write(c + " ");
        a = b;
        b = c;
    }
}
// Output (n = 7): 0 1 1 2 3 5 8


// ✅ Q2. Check whether a given number is a prime
public bool IsPrime(int number)
{
    if (number <= 1) return false;
    for (int i = 2; i <= Math.Sqrt(number); i++)
        if (number % i == 0) return false;
    return true;
}
// Output: IsPrime(7) => true


// ✅ Q3. Reverse a given number without using string functions
public int ReverseNumber(int number)
{
    int reversed = 0;
    while (number > 0)
    {
        int digit = number % 10;
        reversed = reversed * 10 + digit;
        number /= 10;
    }
    return reversed;
}
// Output: ReverseNumber(1234) => 4321


// ✅ Q4. Find the factorial of a number using recursion
public int Factorial(int n)
{
    if (n == 0 || n == 1) return 1;
    return n * Factorial(n - 1);
}
// Output: Factorial(5) => 120


// ✅ Q5. Check whether a string is a palindrome
public bool IsPalindrome(string input)
{
    int left = 0, right = input.Length - 1;
    while (left < right)
    {
        if (input[left] != input[right])
            return false;
        left++; right--;
    }
    return true;
}
// Output: IsPalindrome("level") => true


// ✅ Q6. Count the frequency of characters in a string
public void CharFrequency(string input)
{
    var dict = new Dictionary<char, int>();
    foreach (char c in input)
    {
        if (dict.ContainsKey(c)) dict[c]++;
        else dict[c] = 1;
    }
    foreach (var item in dict)
        Console.WriteLine($"{item.Key}: {item.Value}");
}
// Output for "apple": a:1, p:2, l:1, e:1


// ✅ Q7. Check if a number is Armstrong
public bool IsArmstrong(int number)
{
    int temp = number, sum = 0, digits = number.ToString().Length;
    while (number > 0)
    {
        int digit = number % 10;
        sum += (int)Math.Pow(digit, digits);
        number /= 10;
    }
    return sum == temp;
}
// Output: IsArmstrong(153) => true


// ✅ Q8. Replace spaces in a string with '%20'
public string URLify(string str)
{
    return str.Replace(" ", "%20");
}
// Output: URLify("hello world") => "hello%20world"


// ✅ Q9. Find the second largest number in an array
public int SecondLargest(int[] arr)
{
    int first = int.MinValue, second = int.MinValue;
    foreach (int num in arr)
    {
        if (num > first)
        {
            second = first;
            first = num;
        }
        else if (num > second && num != first)
        {
            second = num;
        }
    }
    return second;
}
// Output: SecondLargest(new int[]{1, 5, 2, 8, 7}) => 7


// ✅ Q10. Find the longest word in a sentence
public string LongestWord(string sentence)
{
    var words = sentence.Split(' ');
    string longest = "";
    foreach (var word in words)
        if (word.Length > longest.Length)
            longest = word;
    return longest;
}
// Output: LongestWord("I love programming challenges") => "programming"


// ✅ Q11. Count vowels and consonants in a string
public void CountVowelsConsonants(string input)
{
    int vowels = 0, consonants = 0;
    input = input.ToLower();
    foreach (char c in input)
    {
        if (char.IsLetter(c))
        {
            if ("aeiou".Contains(c)) vowels++;
            else consonants++;
        }
    }
    Console.WriteLine($"Vowels: {vowels}, Consonants: {consonants}");
}
// Output for "Hello World": Vowels: 3, Consonants: 7


// ✅ Q12. Print Pascal's Triangle
public void PrintPascalsTriangle(int rows)
{
    for (int i = 0; i < rows; i++)
    {
        int val = 1;
        for (int j = 0; j <= i; j++)
        {
            Console.Write(val + " ");
            val = val * (i - j) / (j + 1);
        }
        Console.WriteLine();
    }
}
// Output: First 5 rows of Pascal's Triangle


// ✅ Q13. Check if a number is a perfect number
public bool IsPerfect(int number)
{
    int sum = 0;
    for (int i = 1; i < number; i++)
        if (number % i == 0) sum += i;
    return sum == number;
}
// Output: IsPerfect(28) => true


// ✅ Q14. Find all pairs in array that sum to a specific value
public void FindPairs(int[] arr, int target)
{
    for (int i = 0; i < arr.Length; i++)
    {
        for (int j = i + 1; j < arr.Length; j++)
        {
            if (arr[i] + arr[j] == target)
                Console.WriteLine($"Pair: {arr[i]}, {arr[j]}");
        }
    }
}
// Output: For arr = [1, 2, 3, 4], target = 5 => (1,4), (2,3)


// ✅ Q15. Rotate array to right by k steps
public int[] RotateArray(int[] nums, int k)
{
    int n = nums.Length;
    k = k % n;
    int[] result = new int[n];
    for (int i = 0; i < n; i++)
    {
        result[(i + k) % n] = nums[i];
    }
    return result;
}
// Output: RotateArray([1,2,3,4,5], 2) => [4,5,1,2,3]

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

