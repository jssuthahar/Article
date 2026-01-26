# 📘  Visual Studio & WPF Basics 
---

## 1️⃣ What is Visual Studio?

**Visual Studio** is an Integrated Development Environment (IDE) developed by Microsoft. It is used to build different types of applications.

You can create:

* Windows Desktop Applications (WPF, Windows Forms)
* Web Applications (ASP.NET)
* APIs and Cloud Applications

Visual Studio provides:

* Code editor
* Design (UI) window
* Debugging tools
* Build and Run options
* Project and Solution management

---

## 2️⃣ What is WPF?

**WPF (Windows Presentation Foundation)** is a framework used to build **Windows desktop applications**.

Key features:

* Uses **XAML** for UI design
* Modern UI support
* Data binding
* Styles and layouts
* Clear separation between UI and logic

---

## 3️⃣ Create a New WPF Application

Follow these steps:

1. Open **Visual Studio**
2. Click **Create a new project**
3. Select **WPF App**
4. Click **Next**
5. Enter:

   * Project Name
   * Location
   * Solution Name
6. Click **Create**

---

## 4️⃣ Solution vs Project

### 🔹 Solution

* A **Solution** is a container
* Can hold **multiple projects**
* Used for managing large applications

### 🔹 Project

* A **Project** contains:

  * XAML files
  * Code-behind files
  * Resources
* One application usually has one project

📌 Example structure:

```
Solution
 ├── WpfApp1
 ├── ClassLibrary
 └── WebAPI
```

---

## 5️⃣ Important Visual Studio Shortcuts

| Action            | Shortcut       |
| ----------------- | -------------- |
| Toolbox           | Ctrl + Alt + X |
| Solution Explorer | Ctrl + Alt + L |
| Build Solution    | F6             |
| Run Application   | F5             |

---

## 6️⃣ Toolbox

The **Toolbox** contains UI controls such as:

* Button
* TextBox
* TextBlock
* Label
* StackPanel

📌 Shortcut: **Ctrl + Alt + X**
You can **drag and drop** controls into the design window.

---

## 7️⃣ Solution Explorer

The **Solution Explorer** shows:

* Project structure
* XAML files
* Code-behind (.xaml.cs)
* References

📌 Shortcut: **Ctrl + Alt + L**

---

## 8️⃣ Build and Run

* **Build (F6)** → Checks errors and compiles code
* **Run (F5)** → Builds and runs the application

---

## 9️⃣ What is XAML?

**XAML (Extensible Application Markup Language)** is used to design the UI in WPF.

Benefits:

* Easy to read
* Separates UI from logic
* Supports data binding and styling

Example file:

```
MainWindow.xaml
```

---

## 🔟 Design Window (Very Important for Students)

The **Design Window** is used to visually design the WPF UI.

### 📌 To Open / Fix Design Layout

Use the following menu sequence exactly:

**Design → Window → Next Layout → Control Design**

✅ This layout will show:

* Design View
* XAML View
* Code View

Use this when:

* Design window is missing
* XAML view is not visible
* Layout is broken

### 🔁 Alternative Option

You can also reset everything using:

**Window → Layout → Reset to Default**

---

## 1️⃣1️⃣ XAML Example – Explanation

### XAML Code:

```xml
<Window
    Background="Green"
    Title="JSQUARE" Height="200" Width="300">

    <StackPanel>
        <TextBlock Text="Name"></TextBlock>
        <TextBox></TextBox>

        <TextBlock Text="Age"></TextBlock>
        <TextBox></TextBox>

        <Button Content="Submit"></Button>
    </StackPanel>
</Window>
```

---

### 🔹 Window

* **Background="Green"** → Sets window color
* **Title="JSQUARE"** → Window title
* **Height & Width** → Window size

---

### 🔹 StackPanel

* Arranges controls **vertically**
* Simple and beginner-friendly layout

---

### 🔹 TextBlock

* Displays text (label)
* Read-only control

---

### 🔹 TextBox

* Used to accept user input
* Example: Name, Age

---

### 🔹 Button

* Clickable control
* **Content="Submit"** shows button text

---

## ✅ Output UI

* Green background window
* Name input
* Age input
* Submit button
* All controls aligned vertically

---

## 📌 Summary 
* Visual Studio is the development tool
* WPF is used for Windows desktop apps
* XAML designs the UI
* StackPanel arranges controls
* Use shortcuts to work faster
* Use **Control Design layout** for better learning

---

🎯 *Happy Learning with WPF & Visual Studio!*

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


