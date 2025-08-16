### 1. Find the Missing Number

* **Question:** You have numbers from `1 to N`. One number is missing. Find it.
* **Real-Time Example:** Detecting a missing invoice ID in a billing system.

#### Example Input:

Suppose you have invoices generated from 1 to 10:

```
1, 2, 3, 4, 6, 7, 8, 9, 10
```

Here, invoice **5** is missing.

#### Approach 1: Mathematical Formula (Works only if sequence is continuous 1..N)

* Formula for sum of first N numbers = `N * (N + 1) / 2`
* Expected sum for N = 10 → `10 * (10 + 1) / 2 = 55`
* Actual sum of given numbers = `50`
* Missing number = `55 - 50 = 5`

#### Approach 2: XOR Technique (Also requires continuous 1..N)

* XOR all numbers from 1 to N
* XOR with given numbers
* Result = missing number

⚠️ **Limitation:** Both above approaches only work if numbers are guaranteed to be from `1..N` with exactly one missing. If the numbers are not sequential (e.g., random set of IDs, multiple gaps, or not starting at 1), these approaches will fail.

#### Approach 3: HashSet / Dictionary (Works for non-sequential data)

* Insert all numbers into a HashSet.
* Iterate from the minimum to maximum expected value.
* Check which number is not present.

##### Sample Code (C# - HashSet Method):

```csharp
using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        int[] arr = {101, 102, 103, 105, 106}; // invoice IDs, not sequential from 1
        int min = 101, max = 106;
        var set = new HashSet<int>(arr);

        for (int i = min; i <= max; i++)
        {
            if (!set.Contains(i))
                Console.WriteLine($"Missing Number: {i}");
        }
    }
}
```

#### Sample Output (Non-Sequential Example):

```
Missing Number: 104
```

---

👉 This problem is often asked in **Amazon, Microsoft, and Flipkart interviews** to test your ability to apply mathematical logic and also handle real-world irregularities in data.

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




