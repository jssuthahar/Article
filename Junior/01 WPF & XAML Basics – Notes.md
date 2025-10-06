
# WPF & XAML Basics – Notes

This README provides a quick reference for **WPF, XAML, .NET, and C# fundamentals** for beginners.

---

## 1. Full Forms

| Term      | Full Form / Meaning |
|-----------|---------------------|
| **WPF**   | **Windows Presentation Foundation** → Microsoft framework for Windows desktop apps. |
| **XAML**  | **Extensible Application Markup Language** → XML-based markup for designing UI. |
| **XML**   | **Extensible Markup Language** → Stores and shares structured data. |
| **XAMLNS**| **XAML Namespace** → References assemblies/classes in XAML files. |
| **.cs**   | **C# source code file** → Contains backend logic and event handling. |

---

## 2. Types of Applications

| Type                  | Description                          | Examples |
|-----------------------|--------------------------------------|----------|
| **Windows Desktop App** | Runs on Windows OS (WPF, WinForms). | Notepad, Calculator |
| **Web Application**     | Runs in a browser via HTTP/HTTPS. | Gmail, Facebook |
| **Mobile Application**  | Runs on mobile OS (Android, iOS). | WhatsApp, Instagram |

---

## 3. Types of Browsers

- **Desktop Browsers:** Chrome, Edge, Firefox, Safari  
- **Mobile Browsers:** Chrome Mobile, Safari (iOS), Opera Mini  
- **Headless Browsers:** Used for testing automation (e.g., Puppeteer, Playwright)

---

## 4. Types of Operating Systems

- **Desktop OS:** Windows, macOS, Linux  
- **Mobile OS:** Android, iOS  
- **Server OS:** Windows Server, Ubuntu Server  
- **Embedded OS:** RTOS, QNX

---

## 5. WPF XAML Design Layers

### Structure
```

WPF Application
└── Windows (MainWindow.xaml, etc.)
└── Layouts (Grid, StackPanel, DockPanel…)
└── Controls (TextBox, Label, Button…)

````

---

## 6. Common Layout Controls

| Layout Control | Purpose |
|----------------|---------|
| **Grid**       | Table-like layout with rows & columns. |
| **StackPanel** | Stacks child elements vertically or horizontally. |
| **DockPanel**  | Docks child elements to top/bottom/left/right. |
| **WrapPanel**  | Wraps controls to next line when space ends. |
| **Canvas**     | Absolute positioning with `Canvas.Left`, `Canvas.Top`. |

---

## 7. Common UI Controls

| Control   | Purpose |
|-----------|---------|
| **TextBox** | For text input. |
| **Label**   | For displaying text. |
| **Button**  | For clickable actions. |

### Example (XAML)
```xml
<Window x:Class="MyApp.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="Demo" Height="200" Width="300">

    <StackPanel Margin="10">
        <Label Content="Enter your name:"/>
        <TextBox x:Name="txtName" Width="200" Margin="0,5,0,5"/>
        <Button Content="Submit" Width="100" Click="Button_Click"/>
    </StackPanel>
</Window>
````

---

## 8. `x:Name` in XAML

* Used to give a control a **unique identifier** so it can be accessed in the C# code-behind.

```xml
<TextBox x:Name="txtUserName"/>
```

Code-behind (`.cs`):

```csharp
string name = txtUserName.Text;  // Access TextBox value
```

---

## 9. WPF Project Structure

| File                   | Purpose                                 |
| ---------------------- | --------------------------------------- |
| **MainWindow.xaml**    | UI design (buttons, textboxes, layout). |
| **MainWindow.xaml.cs** | Backend logic & event handling.         |
| **App.xaml**           | Application-level resources & styles.   |
| **App.xaml.cs**        | Startup logic for the app.              |
| **.cs files**          | Classes, models, and services.          |

---

## 10. C# File Structure – SARP Explanation

**SARP → Structure → Access → Response → Processing**

1. **Namespace**

```csharp
namespace MyApp
{
    // Classes inside
}
```

2. **Class**

```csharp
public class MainWindow
{
    // Fields, Properties, Methods
}
```

3. **Constructor**

```csharp
public MainWindow()
{
    InitializeComponent(); // Loads the XAML UI
}
```

4. **Event**

```csharp
private void Button_Click(object sender, RoutedEventArgs e)
{
    MessageBox.Show("Hello, " + txtName.Text);
}
```

---

## 11. Event Flow in WPF

1. User interacts with UI (e.g., clicks a button).
2. Event handler defined in XAML (`Click="Button_Click"`) triggers.
3. The associated C# method in `.cs` executes.

---

## ✅ Summary

* **WPF:** UI framework for Windows apps.
* **XAML:** Markup for UI design.
* **x:Name:** Connects UI to code-behind.
* **Namespace → Class → Constructor → Event:** Core structure of C# backend.
* **Layouts & Controls:** Define app UI and interactions.

