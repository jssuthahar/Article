# C# Data Types: `string`, `int` and Type Conversion with WPF Calculator Example

## 📌 Overview

This project demonstrates the basic usage of C# built-in data types `string` and `int`, and how to convert between them using `Convert.ToInt16()` and `Convert.ToString()`. A simple WPF application is used as a real-time example that performs arithmetic operations (Add, Subtract, Multiply) on two user inputs.

---

## 🧠 Concepts Covered

### 1. `string` (Text Data Type)
- Used to store textual data.
- In WPF, the `Text` property of a `TextBox` returns a `string`.

### 2. `int` (Integer Data Type)
- Used to store numeric values.
- Supports mathematical operations like addition, subtraction, multiplication, etc.

### 3. `Convert.ToInt16()`
- Converts a string input (e.g., from a `TextBox`) into an `int` (16-bit integer).
- Required when performing calculations on inputs from UI elements.

### 4. `Convert.ToString()`
- Converts a numeric value (e.g., result of calculation) back into a string.
- Needed to display numeric results in a `TextBox` which accepts only `string`.

---

## 🖥️ Real-Time WPF UI Example

### XAML Code

```xml
<StackPanel Orientation="Vertical">
    <Label Content="First Number"></Label>
    <TextBox x:Name="txtfirst"></TextBox>

    <Label Content="Second Number"></Label>
    <TextBox x:Name="txtsecond"></TextBox>

    <Label Content="Result"></Label>
    <TextBox x:Name="txtresult"></TextBox>

    <StackPanel Orientation="Horizontal">
        <Button x:Name="btnAdd" Width="50" Content="Add" Click="btnAdd_Click"/>
        <Button x:Name="btnsub" Width="50" Content="Sub" Click="btnsub_Click"/>
        <Button x:Name="btnmult" Width="50" Content="Mult" Click="btnmult_Click"/>
    </StackPanel>
</StackPanel>
````

---

### C# Code Behind (MainWindow\.xaml.cs)

```csharp
private void btnAdd_Click(object sender, RoutedEventArgs e)
{
    int first = Convert.ToInt16(txtfirst.Text);       // Convert string to int
    int second = Convert.ToInt16(txtsecond.Text);
    int result = first + second;

    txtresult.Text = Convert.ToString(result);        // Convert int to string
}

private void btnsub_Click(object sender, RoutedEventArgs e)
{
    int first = Convert.ToInt16(txtfirst.Text);
    int second = Convert.ToInt16(txtsecond.Text);
    int result = first - second;

    txtresult.Text = Convert.ToString(result);
}

private void btnmult_Click(object sender, RoutedEventArgs e)
{
    int first = Convert.ToInt16(txtfirst.Text);
    int second = Convert.ToInt16(txtsecond.Text);
    int result = first * second;

    txtresult.Text = Convert.ToString(result);
}
```

---

## 💡 Why Conversion is Important

In WPF (and many UI frameworks), user inputs are taken as `string`:

* You **cannot** perform mathematical operations directly on strings.
* Use `Convert.ToInt16()` to **parse input** strings into integers.
* Use `Convert.ToString()` to **convert result** back to string to display.

### Example

If you don't convert:

```csharp
txtresult.Text = txtfirst.Text + txtsecond.Text;
```

This will concatenate strings like `"10" + "20"` → `"1020"` instead of `30`.

---

## ✅ Output Sample

**Input:**

* First Number: `10`
* Second Number: `20`

**On Click Add:**

* Result: `30`

---

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
