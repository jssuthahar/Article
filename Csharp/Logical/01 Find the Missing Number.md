### 1. Find the Missing Number

* **Question:** You have numbers from `1 to N`. One number is missing. Find it.
* **Real-Time Example:** Detecting a missing invoice ID in a billing system.
👉 This problem is often asked in **Amazon, Microsoft, and Flipkart interviews** to test your ability to apply mathematical logic and optimize performance.
#### Example Input:

Suppose you have invoices generated from 1 to 10:

```
1, 2, 3, 4, 6, 7, 8, 9, 10
```

Here, invoice **5** is missing.

#### Approach 1: Mathematical Formula

* Formula for sum of first N numbers = `N * (N + 1) / 2`
* Expected sum for N = 10 → `10 * (10 + 1) / 2 = 55`
* Actual sum of given numbers = `50`
* Missing number = `55 - 50 = 5`


####  Code (C#):

```csharp
using System;

class Program
{
    static void Main()
    {
        int[] arr = {1, 2, 3, 4, 6, 7, 8, 9, 10};
        int n = 10;

        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;

        foreach (int num in arr)
            actualSum += num;

        int missing = expectedSum - actualSum;
        Console.WriteLine($"Missing Number: {missing}");
    }
}
```

#### Output:

```
Missing Number: 5
```

---



### 🔔 Stay Updated with My Latest Projects

If you enjoy:
- 🧠 AI agents and automation
- 🛠️ Practical tools and utilities
- 📘 Developer tutorials and guides
- 🚀 End-to-end project templates

👉 Then **[Follow me on GitHub](https://github.com/jssuthahar)** to get notified about new repos, ideas, and updates!

[![Follow Me](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)

## ⭐ Start & Follow Me
If you find this repository useful, don't forget to **Star** ⭐ the repo and **Follow** me for more updates!

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)



