
# 📘 WPF XAML and XAML.cs Linking 

## 📌 What is XAML and XAML.cs?

In a **WPF application**, each window has **two linked files**:

* **MainWindow.xaml** → UI design (buttons, textbox, layout)
* **MainWindow.xaml.cs** → C# logic (events, calculations, messages)

They are connected using the **x:Class** attribute.

---

## 🔗 Linking XAML Page to XAML.cs Page

### XAML File

```xml
<Window x:Class="FirstApp.MainWindow">
```

### Meaning

* `FirstApp` → Project / Namespace name
* `MainWindow` → Class name
* This must **match exactly** with the class in `MainWindow.xaml.cs`

---

## 🌐 Understanding xmlns (XML Namespaces)

```xml
xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
xmlns:d="http://schemas.microsoft.com/expression/blend/2008"
xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"
xmlns:local="clr-namespace:FirstApp"
```

### Explanation

| Namespace     | Purpose                                      |
| ------------- | -------------------------------------------- |
| `xmlns`       | Default WPF controls (Button, TextBox, Grid) |
| `xmlns:x`     | XAML keywords like `x:Class`, `x:Name`       |
| `xmlns:d`     | Design-time support (Blend / Designer only)  |
| `xmlns:mc`    | Compatibility with older XAML versions       |
| `xmlns:local` | Access classes inside your project           |

✅ **Tip:** `d` and `mc` are used only in designer view.

---

## 🎛 Control Name (Access UI from C#)

```xml
<TextBox Name="txtfirstnum"></TextBox>
```

### Why `Name` is Important?

* Allows access in C# code-behind
* Example usage:

```csharp
string value = txtfirstnum.Text;
```

---

## 🧲 Button Click Event in XAML

```xml
<Button Content="Submit" Click="NumberClikc"></Button>
```

### Meaning

* `Click="NumberClikc"` → Calls method in XAML.cs
* Method name must match exactly

---

## ⚙ Event Method in C# (XAML.cs)

```csharp
private void NumberClikc(object sender, RoutedEventArgs e)
{
    MessageBox.Show("Hi Welcome");
}
```

### Event Parameters

* `object sender` → Button that triggered event
* `RoutedEventArgs e` → Event data

---

## 🧵 String Data Type Examples

### 1️⃣ Simple Message

```csharp
MessageBox.Show("Hi Welcome");
```

---

### 2️⃣ Using String Variable

```csharp
string mess = "Welcome to JSQUARE";
MessageBox.Show(mess);
```

---

### 3️⃣ Getting TextBox Value

```csharp
string mess = txtname.Text;
MessageBox.Show(mess);
```

---

### 4️⃣ String Concatenation

```csharp
string name = txtname.Text;
string mess = "Welcome to ";
string full = mess + name;
MessageBox.Show(full);
```

---

## 🏗 Class and Constructor

### Class Definition

```csharp
public partial class MainWindow : Window
{
```

* `partial` → Class split between XAML and C#
* `Window` → Base WPF window class

---

### Constructor

```csharp
public MainWindow()
{
    InitializeComponent();
}
```

### Why Constructor?

* Runs when window loads
* `InitializeComponent()` loads XAML UI

---

## 📦 Using Statements

```csharp
using System;
using System.Windows;
using System.Windows.Controls;
```

### Purpose

* Imports required .NET libraries
* Without `using`, classes like `MessageBox` won’t work

---

## 🧹 Remove Unused Namespaces

### Before

```csharp
using System.Text;
using System.Threading.Tasks;
```

### After (Clean Code)

```csharp
// Removed unused namespaces
```

✅ **Tip:**

* Visual Studio shows **greyed-out** namespaces
* Press **Ctrl + . → Remove unused usings**

---

## ✅ Full Minimal Example

### MainWindow.xaml

```xml
<Window x:Class="FirstApp.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="JSQUARE" Height="200" Width="300">
    <StackPanel>
        <TextBox Name="txtname" Margin="10"/>
        <Button Content="Submit" Click="NumberClikc" Margin="10"/>
    </StackPanel>
</Window>
```

---

### MainWindow.xaml.cs

```csharp
using System.Windows;

namespace FirstApp
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void NumberClikc(object sender, RoutedEventArgs e)
        {
            string name = txtname.Text;
            string full = "Welcome to " + name;
            MessageBox.Show(full);
        }
    }
}
```

---

## 🎯 Key Takeaways

✔ XAML = UI
✔ XAML.cs = Logic
✔ `x:Class` links both
✔ `Name` allows control access
✔ Events connect UI → C#
✔ Constructor loads XAML
✔ Remove unused namespaces for clean code

---

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

