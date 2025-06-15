# 📘 Common Event Handler in WPF - `Number_Click`

This document explains how to set up a **common event handler** in a WPF (Windows Presentation Foundation) C# application. The example covers a single method called `Number_Click`, which is designed to handle number button clicks in a unified way.

---

## ✅ Purpose

To reduce redundancy by using a **single event handler** (`Number_Click`) for multiple buttons (e.g., 0–9), often used in data input forms or calculators.

---

## 🧠 C# Code

```csharp
private void Number_Click(object sender, RoutedEventArgs e)
{
    Button buttonvalue = sender as Button;

    if (txboper.Text == " ")
    {
        txtfirst.Text = txtfirst.Text + buttonvalue.Content;
    }
    else
    {
        txtsecond.Text = txtsecond.Text + buttonvalue.Content;
    }
}
```

---

## 🧩 XAML Example

Here's how you define buttons in XAML and attach them to the common `Number_Click` event handler:

```xml
<Button Content="1" Click="Number_Click" Width="50" Height="50"/>
<Button Content="2" Click="Number_Click" Width="50" Height="50"/>
<Button Content="3" Click="Number_Click" Width="50" Height="50"/>
<!-- Repeat for all numeric buttons -->
```

---

## 🧾 Table Explanation

| Element                    | Type     | Description                                                                    |
| -------------------------- | -------- | ------------------------------------------------------------------------------ |
| `sender`                   | `object` | Represents the control that triggered the event (i.e., the clicked button).    |
| `Button buttonvalue`       | `Button` | Casts the sender object to a `Button` so you can access its `Content`.         |
| `buttonvalue.Content`      | `object` | The content (usually a number like "1", "2", etc.) shown on the button.        |
| `txboper.Text`             | `string` | Stores an operator (like "+", "-", or " ") used to determine the input phase.  |
| `txtfirst.Text`            | `string` | Holds the first number entered (before an operator is chosen).                 |
| `txtsecond.Text`           | `string` | Holds the second number entered (after an operator is chosen).                 |
| `if (txboper.Text == " ")` | `bool`   | Checks if the operator is not yet selected (user still entering first number). |
| `else`                     | -        | Executes if the operator is selected — the second number is being entered.     |

---

## 🔄 If-Else Logic Flow

| Condition                    | Resulting Action                                 |
| ---------------------------- | ------------------------------------------------ |
| `txboper.Text == " "`        | The clicked number is added to `txtfirst.Text`.  |
| `txboper.Text != " "` (Else) | The clicked number is added to `txtsecond.Text`. |

This logic ensures that the user's input is routed to the correct TextBox based on whether an operator has been selected.

---

## 🧼 Benefits of Common Handler

| Feature         | Benefit                                                         |
| --------------- | --------------------------------------------------------------- |
| 🔁 Reusable     | Avoid writing separate methods for each number button           |
| 📦 Compact      | All logic in one place – easier to manage                       |
| 🔧 Maintainable | Updating input logic is straightforward, just change one method |
| 🧪 Testable     | Can easily test input flow since it's centralized               |

---

## ✅ Summary

| Concept              | Explanation                                                                |
| -------------------- | -------------------------------------------------------------------------- |
| `Number_Click`       | A shared event method for all number buttons.                              |
| `if-else` logic      | Determines where to store input – either in `txtfirst` or `txtsecond`.     |
| XAML `Click` binding | Connects all number buttons to the same method, reducing code duplication. |
| Operator `txboper`   | Acts as a switch to decide when the user is entering the second number.    |

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
