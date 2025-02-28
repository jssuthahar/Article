# C# For Loop - Top 50 Interview Questions

This repository contains 50 frequently asked C# interview questions related to `for` loops, commonly asked in product-based companies. Each question includes an explanation, code snippet, and expected output.


1. **Print numbers from 1 to 10**  
   _Explanation:_ A `for` loop is used to iterate from 1 to 10, incrementing `i` in each iteration and printing it.
   ```csharp
   for (int i = 1; i <= 10; i++)
   {
       Console.WriteLine(i);
   }
   ```
   **Output:**
   ```
   1 2 3 4 5 6 7 8 9 10
   ```

2. **Sum of first N natural numbers**  
   _Explanation:_ The loop iterates from 1 to `N`, adding each number to a sum variable to get the total sum of natural numbers.
   ```csharp
   int sum = 0;
   for (int i = 1; i <= 10; i++)
   {
       sum += i;
   }
   Console.WriteLine("Sum: " + sum);
   ```
   **Output:**
   ```
   Sum: 55
   ```

3. **Factorial of a number**  
   _Explanation:_ The factorial of a number `N` is calculated by multiplying all numbers from 1 to `N`. The loop runs from 1 to `N` and keeps multiplying the `fact` variable.
   ```csharp
   int fact = 1, num = 5;
   for (int i = 1; i <= num; i++)
   {
       fact *= i;
   }
   Console.WriteLine("Factorial: " + fact);
   ```
   **Output:**
   ```
   Factorial: 120
   ```

12. **Check if a number is a palindrome**
   ```csharp
   int num = 121, rev = 0, temp = num;
   for (; temp > 0; temp /= 10)
   {
       rev = rev * 10 + temp % 10;
   }
   Console.WriteLine(rev == num ? "Palindrome" : "Not Palindrome");
   ```
   **Output:**
   ```
   Palindrome
   ```

13. **Print the first N prime numbers**
   ```csharp
   int n = 10, count = 0, num = 2;
   while (count < n)
   {
       bool isPrime = true;
       for (int i = 2; i * i <= num; i++)
       {
           if (num % i == 0)
           {
               isPrime = false;
               break;
           }
       }
       if (isPrime)
       {
           Console.Write(num + " ");
           count++;
       }
       num++;
   }
   ```
   **Output:**
   ```
   2 3 5 7 11 13 17 19 23 29
   ```

14. **Calculate power of a number**
   ```csharp
   int baseNum = 2, exp = 5, result = 1;
   for (int i = 0; i < exp; i++)
   {
       result *= baseNum;
   }
   Console.WriteLine("Power: " + result);
   ```
   **Output:**
   ```
   Power: 32
   ```

15. **Reverse an array**
   ```csharp
   int[] arr = {1, 2, 3, 4, 5};
   for (int i = arr.Length - 1; i >= 0; i--)
   {
       Console.Write(arr[i] + " ");
   }
   ```
   **Output:**
   ```
   5 4 3 2 1
   ```


16. **Find the Largest Element in an Array**  
   _Explanation:_ Iterate through the array, keeping track of the largest element found.
   ```csharp
   int[] arr = {10, 20, 5, 25, 30};
   int max = arr[0];
   for (int i = 1; i < arr.Length; i++)
   {
       if (arr[i] > max)
           max = arr[i];
   }
   Console.WriteLine("Largest: " + max);
   ```
   **Output:**
   ```
   Largest: 30
   ```

17. **Find the Smallest Element in an Array**  
   _Explanation:_ Similar to finding the largest element, but tracking the smallest instead.
   ```csharp
   int[] arr = {10, 20, 5, 25, 30};
   int min = arr[0];
   for (int i = 1; i < arr.Length; i++)
   {
       if (arr[i] < min)
           min = arr[i];
   }
   Console.WriteLine("Smallest: " + min);
   ```
   **Output:**
   ```
   Smallest: 5
   ```

18. **Count Digits in a Number**  
   _Explanation:_ Divide the number by 10 iteratively and count the number of times.
   ```csharp
   int num = 12345, count = 0;
   for (; num > 0; num /= 10)
   {
       count++;
   }
   Console.WriteLine("Digit Count: " + count);
   ```
   **Output:**
   ```
   Digit Count: 5
   ```

19. **Reverse a Number**  
   _Explanation:_ Extract digits from the number and build the reverse number.
   ```csharp
   int num = 1234, rev = 0;
   for (; num > 0; num /= 10)
   {
       rev = rev * 10 + num % 10;
   }
   Console.WriteLine("Reversed Number: " + rev);
   ```
   **Output:**
   ```
   Reversed Number: 4321
   ```

20. **Check if Two Numbers are Co-prime**  
   _Explanation:_ Two numbers are co-prime if their GCD is 1.
   ```csharp
   int a = 35, b = 18, gcd = 1;
   for (int i = 1; i <= Math.Min(a, b); i++)
   {
       if (a % i == 0 && b % i == 0)
           gcd = i;
   }
   Console.WriteLine(gcd == 1 ? "Co-prime" : "Not Co-prime");
   ```
   **Output:**
   ```
   Co-prime
   ```

21. **Find the Largest Element in an Array**  
   _Explanation:_ Iterate through the array, keeping track of the largest element found.
   ```csharp
   int[] arr = {10, 20, 5, 25, 30};
   int max = arr[0];
   for (int i = 1; i < arr.Length; i++)
   {
       if (arr[i] > max)
           max = arr[i];
   }
   Console.WriteLine("Largest: " + max);
   ```
   **Output:**
   ```
   Largest: 30
   ```

22. **Find the Smallest Element in an Array**  
   _Explanation:_ Similar to finding the largest element, but tracking the smallest instead.
   ```csharp
   int[] arr = {10, 20, 5, 25, 30};
   int min = arr[0];
   for (int i = 1; i < arr.Length; i++)
   {
       if (arr[i] < min)
           min = arr[i];
   }
   Console.WriteLine("Smallest: " + min);
   ```
   **Output:**
   ```
   Smallest: 5
   ```

23. **Count Digits in a Number**  
   _Explanation:_ Divide the number by 10 iteratively and count the number of times.
   ```csharp
   int num = 12345, count = 0;
   for (; num > 0; num /= 10)
   {
       count++;
   }
   Console.WriteLine("Digit Count: " + count);
   ```
   **Output:**
   ```
   Digit Count: 5
   ```

24. **Reverse a Number**  
   _Explanation:_ Extract digits from the number and build the reverse number.
   ```csharp
   int num = 1234, rev = 0;
   for (; num > 0; num /= 10)
   {
       rev = rev * 10 + num % 10;
   }
   Console.WriteLine("Reversed Number: " + rev);
   ```
   **Output:**
   ```
   Reversed Number: 4321
   ```

25. **Check if Two Numbers are Co-prime**  
   _Explanation:_ Two numbers are co-prime if their GCD is 1.
   ```csharp
   int a = 35, b = 18, gcd = 1;
   for (int i = 1; i <= Math.Min(a, b); i++)
   {
       if (a % i == 0 && b % i == 0)
           gcd = i;
   }
   Console.WriteLine(gcd == 1 ? "Co-prime" : "Not Co-prime");
   ```
   **Output:**
   ```
   Co-prime
   ```


26. **Print Fibonacci Series up to N Terms**
   ```csharp
   int n = 10, a = 0, b = 1;
   for (int i = 0; i < n; i++)
   {
       Console.Write(a + " ");
       int temp = a + b;
       a = b;
       b = temp;
   }
   ```
   **Output:**
   ```
   0 1 1 2 3 5 8 13 21 34
   ```

27. **Find the Sum of Digits of a Number**
   ```csharp
   int num = 1234, sum = 0;
   for (; num > 0; num /= 10)
   {
       sum += num % 10;
   }
   Console.WriteLine("Sum: " + sum);
   ```
   **Output:**
   ```
   Sum: 10
   ```

28. **Find the Product of Digits of a Number**
   ```csharp
   int num = 234, product = 1;
   for (; num > 0; num /= 10)
   {
       product *= num % 10;
   }
   Console.WriteLine("Product: " + product);
   ```
   **Output:**
   ```
   Product: 24
   ```

29. **Find the Largest Element in an Array**  
   _Explanation:_ Iterate through the array, keeping track of the largest element found.
   ```csharp
   int[] arr = {10, 20, 5, 25, 30};
   int max = arr[0];
   for (int i = 1; i < arr.Length; i++)
   {
       if (arr[i] > max)
           max = arr[i];
   }
   Console.WriteLine("Largest: " + max);
   ```
   **Output:**
   ```
   Largest: 30
   ```

30. **Find the Smallest Element in an Array**  
   _Explanation:_ Similar to finding the largest element, but tracking the smallest instead.
   ```csharp
   int[] arr = {10, 20, 5, 25, 30};
   int min = arr[0];
   for (int i = 1; i < arr.Length; i++)
   {
       if (arr[i] < min)
           min = arr[i];
   }
   Console.WriteLine("Smallest: " + min);
   ```
   **Output:**
   ```
   Smallest: 5
   ```

31. **Count Digits in a Number**  
   _Explanation:_ Divide the number by 10 iteratively and count the number of times.
   ```csharp
   int num = 12345, count = 0;
   for (; num > 0; num /= 10)
   {
       count++;
   }
   Console.WriteLine("Digit Count: " + count);
   ```
   **Output:**
   ```
   Digit Count: 5
   ```

32. **Reverse a Number**  
   _Explanation:_ Extract digits from the number and build the reverse number.
   ```csharp
   int num = 1234, rev = 0;
   for (; num > 0; num /= 10)
   {
       rev = rev * 10 + num % 10;
   }
   Console.WriteLine("Reversed Number: " + rev);
   ```
   **Output:**
   ```
   Reversed Number: 4321
   ```

33. **Check if Two Numbers are Co-prime**  
   _Explanation:_ Two numbers are co-prime if their GCD is 1.
   ```csharp
   int a = 35, b = 18, gcd = 1;
   for (int i = 1; i <= Math.Min(a, b); i++)
   {
       if (a % i == 0 && b % i == 0)
           gcd = i;
   }
   Console.WriteLine(gcd == 1 ? "Co-prime" : "Not Co-prime");
   ```
   **Output:**
   ```
   Co-prime
   ```

36. **Print All Even Numbers up to N**
   ```csharp
   int n = 20;
   for (int i = 2; i <= n; i += 2)
   {
       Console.Write(i + " ");
   }
   ```
   **Output:**
   ```
   2 4 6 8 10 12 14 16 18 20
   ```

37. **Print All Odd Numbers up to N**
   ```csharp
   int n = 20;
   for (int i = 1; i <= n; i += 2)
   {
       Console.Write(i + " ");
   }
   ```
   **Output:**
   ```
   1 3 5 7 9 11 13 15 17 19
   ```

38. **Find the Sum of Even Numbers up to N**
   ```csharp
   int n = 10, sum = 0;
   for (int i = 2; i <= n; i += 2)
   {
       sum += i;
   }
   Console.WriteLine("Sum: " + sum);
   ```
   **Output:**
   ```
   Sum: 30
   ```

39. **Find the Sum of Odd Numbers up to N**
   ```csharp
   int n = 10, sum = 0;
   for (int i = 1; i <= n; i += 2)
   {
       sum += i;
   }
   Console.WriteLine("Sum: " + sum);
   ```
   **Output:**
   ```
   Sum: 25
   ```

40. **Print a Multiplication Table for a Number**
   ```csharp
   int num = 5;
   for (int i = 1; i <= 10; i++)
   {
       Console.WriteLine(num + " x " + i + " = " + (num * i));
   }
   ```
   **Output:**
   ```
   5 x 1 = 5
   5 x 2 = 10
   5 x 3 = 15
   ...
   5 x 10 = 50
   ```

41. **Check if a Number is a Palindrome**  
   _Explanation:_ Reverse the number and compare it with the original.
   ```csharp
   int num = 121, rev = 0, temp = num;
   for (; temp > 0; temp /= 10)
   {
       rev = rev * 10 + temp % 10;
   }
   Console.WriteLine(num == rev ? "Palindrome" : "Not Palindrome");
   ```
   **Output:**
   ```
   Palindrome
   ```

42. **Check if a Number is Armstrong**  
   _Explanation:_ A number is Armstrong if the sum of cubes of its digits equals the number itself.
   ```csharp
   int num = 153, sum = 0, temp = num;
   for (; temp > 0; temp /= 10)
   {
       int digit = temp % 10;
       sum += digit * digit * digit;
   }
   Console.WriteLine(num == sum ? "Armstrong" : "Not Armstrong");
   ```
   **Output:**
   ```
   Armstrong
   ```

43. **Find Factorial of a Number**  
   _Explanation:_ Multiply numbers from 1 to N.
   ```csharp
   int num = 5, fact = 1;
   for (int i = 1; i <= num; i++)
   {
       fact *= i;
   }
   Console.WriteLine("Factorial: " + fact);
   ```
   **Output:**
   ```
   Factorial: 120
   ```

44. **Check if a Number is Prime**  
   _Explanation:_ A prime number has no divisors other than 1 and itself.
   ```csharp
   int num = 29, flag = 1;
   for (int i = 2; i <= num / 2; i++)
   {
       if (num % i == 0)
       {
           flag = 0;
           break;
       }
   }
   Console.WriteLine(flag == 1 ? "Prime" : "Not Prime");
   ```
   **Output:**
   ```
   Prime
   ```

45. **Print the Pascal's Triangle**
   ```csharp
   int rows = 5;
   for (int i = 0; i < rows; i++)
   {
       int num = 1;
       for (int j = 0; j <= i; j++)
       {
           Console.Write(num + " ");
           num = num * (i - j) / (j + 1);
       }
       Console.WriteLine();
   }
   ```
   **Output:**
   ```
   1
   1 1
   1 2 1
   1 3 3 1
   1 4 6 4 1
   ```

46. **Print Right-Angled Triangle Pattern**  
   _Explanation:_ Print a right-angled triangle using `*`.
   ```csharp
   int n = 5;
   for (int i = 1; i <= n; i++)
   {
       for (int j = 1; j <= i; j++)
       {
           Console.Write("* ");
       }
       Console.WriteLine();
   }
   ```
   **Output:**
   ```
   *
   * *
   * * *
   * * * *
   * * * * *
   ```

47. **Print Inverted Right-Angled Triangle Pattern**  
   _Explanation:_ Print an inverted right-angled triangle using `*`.
   ```csharp
   int n = 5;
   for (int i = n; i >= 1; i--)
   {
       for (int j = 1; j <= i; j++)
       {
           Console.Write("* ");
       }
       Console.WriteLine();
   }
   ```
   **Output:**
   ```
   * * * * *
   * * * *
   * * *
   * *
   *
   ```

48. **Print Pyramid Pattern**  
   _Explanation:_ Print a pyramid shape using `*`.
   ```csharp
   int n = 5;
   for (int i = 1; i <= n; i++)
   {
       for (int j = i; j < n; j++)
           Console.Write(" ");
       for (int k = 1; k <= (2 * i - 1); k++)
           Console.Write("*");
       Console.WriteLine();
   }
   ```
   **Output:**
   ```
       *
      ***
     *****
    *******
   *********
   ```

49. **Print Diamond Pattern**  
   _Explanation:_ Print a diamond shape using `*`.
   ```csharp
   int n = 5;
   for (int i = 1; i <= n; i++)
   {
       for (int j = i; j < n; j++)
           Console.Write(" ");
       for (int k = 1; k <= (2 * i - 1); k++)
           Console.Write("*");
       Console.WriteLine();
   }
   for (int i = n - 1; i >= 1; i--)
   {
       for (int j = n; j > i; j--)
           Console.Write(" ");
       for (int k = 1; k <= (2 * i - 1); k++)
           Console.Write("*");
       Console.WriteLine();
   }
   ```
   **Output:**
   ```
       *
      ***
     *****
    *******
   *********
    *******
     *****
      ***
       *
   ```

50. **Print Hollow Square Pattern**  
   _Explanation:_ Print a hollow square using `*`.
   ```csharp
   int n = 5;
   for (int i = 1; i <= n; i++)
   {
       for (int j = 1; j <= n; j++)
       {
           if (i == 1 || i == n || j == 1 || j == n)
               Console.Write("* ");
           else
               Console.Write("  ");
       }
       Console.WriteLine();
   }
   ```
   **Output:**
   ```
   * * * * *
   *       *
   *       *
   *       *
   * * * * *
   ```





