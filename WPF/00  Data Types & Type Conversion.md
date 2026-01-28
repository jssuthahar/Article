
# 📘  Data Types & Type Conversion 

This guide is for **absolute beginners in C#**, especially those working with **WPF applications** and **TextBox input**.

---

## 🔹 What is a Data Type?

A **data type** tells C# **what kind of value** a variable can store.

Example:

* Text → `string`
* Numbers → `int`

---

## 🔹 Common Data Types

### 1️⃣ `string`

* Used to store **text**
* Anything inside double quotes `" "` is a string

```csharp
string name = "Suthahar";
string ageText = "25";
```

✔ Comes mostly from **TextBox**, **Label**, **API**, **File**, **User Input**

---

### 2️⃣ `int`

* Used to store **whole numbers**
* Cannot store letters or symbols

```csharp
int age = 25;
int total = 100;
```

✔ Used for **calculations**, **loops**, **counts**, **prices**, **totals**

---

## 🔹 Why Do We Need Type Conversion?

👉 **TextBox always gives value as `string`**

Even if the user types `10`, C# sees it as:

```csharp
"10"  // string
```

But:

* `string` ❌ cannot do math
* `int` ✅ can do math

So we **convert string → int**

---

## 🔹 What Happens Without Conversion?

### ❌ Without Conversion (Wrong Result)

```csharp
string firstnumber = txtfirstnum.Text;
string secondnumber = txtsecondnum.Text;

string result = firstnumber + secondnumber;
txtresult.Text = result;
```

### 🔍 Example Input

```
First Number: 10
Second Number: 20
```

### ❌ Output

```
1020
```

⚠ Because:

* `+` means **joining text**, not adding numbers

---

## ✅ With Conversion (Correct Result)

```csharp
int firstnumber = Convert.ToInt16(txtfirstnum.Text);
int secondnumber = Convert.ToInt16(txtsecondnum.Text);

int result = firstnumber + secondnumber;
txtresult.Text = Convert.ToString(result);
```

### ✔ Output

```
30
```

🎉 Correct math operation!

---

## 🔹 String ➝ Int Conversion

### Method Used

```csharp
Convert.ToInt16(stringValue)
```

Example:

```csharp
int number = Convert.ToInt16("100");
```

✔ Converts text into number
❌ Will throw error if text is not a number (`abc`)

---

## 🔹 Int ➝ String Conversion

### Why?

Because:

* `TextBox.Text` accepts **only string**

### Method Used

```csharp
Convert.ToString(intValue)
```

Example:

```csharp
txtresult.Text = Convert.ToString(result);
```

---

## 🔹 Real-Time Use Cases

### 🧮 Calculator App

* User enters numbers in TextBox
* Convert to int
* Calculate
* Convert back to string

---

### 🛒 Shopping Cart

```csharp
string price = txtPrice.Text;   // "500"
string qty = txtQty.Text;       // "2"

int total = Convert.ToInt16(price) * Convert.ToInt16(qty);
txtTotal.Text = total.ToString();
```

---

### 🧾 Salary / EMI / Marks Calculation

* Forms always send **string**
* Logic needs **int**

---

## 🔹 XAML Design (UI)

```xml
<TextBlock Text="First Number"></TextBlock>
<TextBox Name="txtfirstnum"></TextBox>

<TextBlock Text="Second Number"></TextBlock>
<TextBox Name="txtsecondnum"></TextBox>

<TextBlock Text="Result"></TextBlock>
<TextBox Name="txtresult"></TextBox>

<Button Content="Submit" Click="NumberClikc"></Button>
```

---

## 🔹 Code Behind (Button Click)

```csharp
private void NumberClikc(object sender, RoutedEventArgs e)
{
    int firstnumber = Convert.ToInt16(txtfirstnum.Text);
    int secondnumber = Convert.ToInt16(txtsecondnum.Text);

    int result = firstnumber + secondnumber;

    txtresult.Text = Convert.ToString(result);
}
```

---

## 🔹 Key Takeaways ⭐

✔ TextBox → **string always**
✔ Math → **int required**
✔ Convert before calculation
✔ Convert back before showing result

---

## 🚀 Beginner Tip

Always remember this flow:

```
TextBox (string)
   ↓ Convert
Calculation (int)
   ↓ Convert
Show Result (string)
```

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

