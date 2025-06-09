# Introduction to C# and Visual Studio - Day 1

Welcome to your first C# programming class! Here's a summary of what we covered today.

---

## 🏢 Product-Based vs Service-Based Companies

### Product-Based Company
- Develops and sells their own software products.
- Focus on innovation, scalability, and features.
- Example: Microsoft (Office, Windows), Adobe (Photoshop).

### Service-Based Company
- Offers IT services and builds software solutions for clients.
- Works on time-based projects and client requirements.
- Example: Infosys, TCS, Accenture.

---

## 🔧 Source Control - Git

- Git is used to **track code changes** and collaborate with team members.
- You can:
  - Save versions of your project.
  - Revert to older code if something breaks.
  - Collaborate through platforms like GitHub.

---

## 🐞 Bug Tracking - Jira

- Jira helps teams **track bugs, tasks, and project progress**.
- Commonly used in **Agile** development.
- Features:
  - Create issues (bugs, tasks).
  - Assign them to team members.
  - Monitor workflow (To Do → In Progress → Done).

---

## 🧰 Why Visual Studio?

- Visual Studio is an **IDE (Integrated Development Environment)**.
- Provides:
  - Code Editor
  - XAML Designer for WPF
  - IntelliSense (suggestions)
  - Debugging tools
  - Integrated Git and NuGet support

---

## 🧮 .NET Framework vs .NET Core (now just ".NET")

| Feature               | .NET Framework       | .NET Core / .NET 5+       |
|----------------------|----------------------|----------------------------|
| Platform             | Windows only         | Cross-platform             |
| Performance          | Moderate             | High-performance           |
| Deployment           | Requires full install| Can be portable/self-contained |
| Use Today?           | Legacy apps only     | Recommended for new apps   |

---

## 🖼️ Creating a WPF Application

Steps:
1. Open **Visual Studio**.
2. Click **Create a new project**.
3. Choose **WPF App (.NET Core)**.
4. Set name as `FirstApp` and click **Create**.

---

## 🧾 Solution Explorer Files

- **App.xaml**: Defines global settings, startup file.
- **App.xaml.cs**: Handles app-level events.
- **MainWindow.xaml**: The UI design using XAML.
- **MainWindow.xaml.cs**: The code-behind logic in C#.

---

## 🧰 Toolbox

The toolbox allows drag-and-drop controls like:
- `Button`, `TextBox`, `Label`, etc.
- WPF controls are customizable using properties and events.

---

## 📄 XAML Code

```xml
<StackPanel Orientation="Horizontal" VerticalAlignment="Top">
    <Button x:Name="btnred" Click="btnred_Click" Width="30" Height="30" Background="Red" />
    <Button x:Name="btnyellow" Click="btnyellow_Click" Width="30" Height="30" Background="Yellow" />
    <Button x:Name="btngreen" Click="btngreen_Click" Width="30" Height="30" Background="Green" />
    <Button x:Name="btnresult" Width="300" Height="500" />
</StackPanel>
````

### 🔍 XAML Code Explanation

* `<StackPanel>`: A layout container that arranges child elements in a **horizontal** row.
* `Orientation="Horizontal"`: Children are placed left to right.
* `VerticalAlignment="Top"`: Aligns the panel at the top.
* `<Button>`: Represents a clickable button.

  * `x:Name="btnred"`: Name used in C# to access this button.
  * `Click="btnred_Click"`: Method called when the button is clicked.
  * `Background="Red"`: Sets button color.
* `btnresult`: A large button where background color will change based on the color button clicked.

---

## 💻 C# Code (Code-Behind)

```csharp
using System.Windows;

namespace FirstApp
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent(); // Initializes UI components defined in XAML
        }

        private void btnred_Click(object sender, RoutedEventArgs e)
        {
            btnresult.Background = btnred.Background;
        }

        private void btnyellow_Click(object sender, RoutedEventArgs e)
        {
            btnresult.Background = btnyellow.Background;
        }

        private void btngreen_Click(object sender, RoutedEventArgs e)
        {
            btnresult.Background = btngreen.Background;
        }
    }
}
```

### 🔍 C# Code Explanation

* `MainWindow`: The main screen of your app.
* `InitializeComponent()`: Connects the XAML to this C# file.
* `btnred_Click`, `btnyellow_Click`, `btngreen_Click`: Event handlers.

  * These methods are triggered when the respective buttons are clicked.
  * The `btnresult` button's background changes to match the clicked button's color.

---

## 🧠 Summary of Concepts

* **Product vs Service Companies**
* **Git** for source control, **Jira** for issue tracking
* **Visual Studio** as the main development tool
* .NET Core vs .NET Framework
* Building a WPF UI using **XAML**
* Writing C# **event handlers** to control behavior

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
