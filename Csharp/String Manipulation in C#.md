# String Manipulation in C#

## Overview
This document explains different ways to manipulate strings in C# using:
- `string.Replace`
- `string.Format`
- String Interpolation (`$""`)

## 1. Using `string.Replace`
`string.Replace` is used to replace specific substrings within a string.

### Example:
```csharp
string invoiceText = "Thank you for your order.\r\n\r\nDear {username},\r\n\r\nPlease be informed that the payment for your order was successful. You will receive your printed receipt with your order.\r\nHere's the summary of your order:\r\n\r\n\r\nDate:\r\n\r\n{date}\r\n\r\nRestaurant:\r\n\r\n{location}\r\n\r\nOrder Number:\r\n\r\n{orderno}\r\n\r\nTotal:\r\n\r\n{total}\r\n\r\nCard:\r\n\r\n{paymentmode}";

// Replacing placeholders with actual values
invoiceText = invoiceText.Replace("{username}", "Vijay")
                         .Replace("{date}", DateTime.Now.ToString())
                         .Replace("{location}", "Coimbatore")
                         .Replace("{orderno}", "1234")
                         .Replace("{total}", "RS 100")
                         .Replace("{paymentmode}", "CC");

Console.WriteLine(invoiceText);
```

### Output:
```
Thank you for your order.

Dear Vijay,

Please be informed that the payment for your order was successful. You will receive your printed receipt with your order.
Here's the summary of your order:

Date:

[Current Date]

Restaurant:

Coimbatore

Order Number:

1234

Total:

RS 100

Card:

CC
```

### When to Use:
- When you need simple text replacement.
- When working with predefined placeholders.

### Drawback:
- Not efficient for complex string formatting.
- Can be error-prone if placeholders are similar.

---

## 2. Using `string.Format`
`string.Format` provides a structured way to format strings with indexed placeholders.

### Example:
```csharp
string printText = string.Format("Welcome Mr {0}, Congratulations, You are {0} selected in {2} our company {1}", "Vijay", "JSQUARE", "MSDEEV");
Console.WriteLine(printText);
```

### Output:
```
Welcome Mr Vijay, Congratulations, You are Vijay selected in MSDEEV our company JSQUARE
```

### When to Use:
- When formatting strings with multiple placeholders.
- When placeholder positions are consistent.

### Drawback:
- Less readable compared to string interpolation.

---

## 3. Using String Interpolation (`$""`)
String interpolation is a more readable and modern approach.

### Example:
```csharp
string printText = $"Welcome Mr {txtUsername.Text}, your age is {txtAge.Text}, name {txtUsername.Text}";
Console.WriteLine(printText);
```

### Output:
```
Welcome Mr [User Input], your age is [User Input], name [User Input]
```

### When to Use:
- When working with variables inside a string.
- When code readability is important.

### Drawback:
- Requires C# 6.0 or later.

---

## Best Approach to Use
| Approach | Best Use Case |
|----------|--------------|
| `string.Replace` | Simple placeholder replacement |
| `string.Format` | Formatting text with indexed placeholders |
| String Interpolation (`$""`) | Readable and concise way of formatting |

For modern C# development, **String Interpolation (`$""`)** is the best choice due to its readability and ease of use.

---

## Interview Questions & Answers

### 1. What is the difference between `string.Replace`, `string.Format`, and string interpolation?
**Answer:**
- `string.Replace` is used for replacing substrings within a string.
- `string.Format` allows formatting with indexed placeholders.
- String interpolation (`$""`) is a more readable and modern way of formatting strings.

### 2. Which is better, `string.Format` or string interpolation?
**Answer:** String interpolation is preferred due to better readability and maintainability.

### 3. Can `string.Replace` be used for dynamic formatting?
**Answer:** No, it only replaces text and doesn’t support advanced formatting like `string.Format` or `$""`.

### 4. Why should we prefer string interpolation over `string.Format`?
**Answer:**
- Easier to read and maintain.
- Eliminates indexing errors.
- Less verbose and more intuitive.

### 5. What is the performance difference between these approaches?
**Answer:**
- `string.Replace` is efficient for small, fixed replacements.
- `string.Format` has overhead due to parsing and processing.
- String interpolation is optimized at compile-time, making it more efficient.

---

## Conclusion
- **For simple replacements:** Use `string.Replace`.
- **For structured formatting:** Use `string.Format`.
- **For modern, readable code:** Use **String Interpolation (`$""`)**.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)


