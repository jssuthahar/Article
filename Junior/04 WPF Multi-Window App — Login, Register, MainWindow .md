# WPF Multi-Window App — Login, Register, MainWindow 

**Goal:**  how to create a simple WPF application with three windows: **Login**, **Register**, and **MainWindow**. The app will start on `Login.xaml`. The login enforces a username and password (max 10 characters). If the user enters username `Admin` and password `admin` (case-sensitive), the app opens `MainWindow`. The Register page will save the name and password to the application's settings so Login can check them.

---

## Table of Contents

1. Overview
2. Project & files you need
3. App startup — set `Login.xaml` as start page
4. Controls used & simple explanations
5. XAML samples (Login, Register, MainWindow)
6. C# code-behind samples with explanations

   * Login button logic
   * Register button logic (save to Settings)
   * How to open/close windows
7. Settings in WPF — saving and reading user values
8. Logical operators: `&&` (AND) vs `||` (OR) — explained simply
9. Using `MessageBox` for messages and errors
10. Validation and simple email check
11. Tips for teachers / students

---

## 1) Overview

We will build a WPF app with three windows:

* **Login.xaml** — first screen. Two fields: username and password. Max length 10 for each. Two buttons: **Login** and **Register**.
* **Register.xaml** — fields: name, password, age, email. Clicking **Register** stores the name and password in application settings.
* **MainWindow.xaml** — shown when a correct admin or a registered user logs in.

This README shows XAML and C# examples and explains every control and line of code.

---

## 2) Project & files you need

* `App.xaml` (set StartupUri)
* `Login.xaml` (+ `Login.xaml.cs`)
* `Register.xaml` (+ `Register.xaml.cs`)
* `MainWindow.xaml` (+ `MainWindow.xaml.cs`)
* `Properties/Settings.settings` (to store username and password)

Create a new WPF App (.NET) project in Visual Studio and add two new WPF Windows: `Login.xaml` and `Register.xaml`.

---

## 3) App startup — set `Login.xaml` as start page

In **App.xaml** set:

```xml
<Application x:Class="MyApp.App"
             xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
             xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
             StartupUri="Login.xaml">
    <Application.Resources>
    </Application.Resources>
</Application>
```

This means the application will open `Login.xaml` first.

---

## 4) Controls used & simple explanations

* **TextBox** — a control to type text. Has `MaxLength` property to limit characters.
* **PasswordBox** — used to type passwords. It hides characters. Also supports `MaxLength`.
* **Button** — clickable button (e.g. Login, Register).
* **Label / TextBlock** — to show text like "Username" or "Password".
* **Window** — a whole screen (Login, Register, MainWindow are Windows).

Important properties used:

* `Name` or `x:Name` — the program uses it to reference the control from code.
* `MaxLength` — limits how many characters can be typed.

---

## 5) XAML samples

### Login.xaml

```xml
<Window x:Class="MyApp.Login"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="Login" Height="300" Width="350">
    <Grid Margin="10">
        <TextBlock Text="Username" VerticalAlignment="Top"/>
        <TextBox x:Name="txtUsername" MaxLength="10" Margin="0,20,0,0"/>

        <TextBlock Text="Password" Margin="0,60,0,0"/>
        <PasswordBox x:Name="pwdBox" MaxLength="10" Margin="0,80,0,0"/>

        <StackPanel Orientation="Horizontal" HorizontalAlignment="Center" VerticalAlignment="Bottom" Margin="0,0,0,10">
            <Button x:Name="btnLogin" Content="Login" Width="100" Margin="5" Click="BtnLogin_Click"/>
            <Button x:Name="btnRegister" Content="Register" Width="100" Margin="5" Click="BtnRegister_Click"/>
        </StackPanel>
    </Grid>
</Window>
```

### Register.xaml

```xml
<Window x:Class="MyApp.Register"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="Register" Height="350" Width="350">
    <Grid Margin="10">
        <TextBlock Text="Name"/>
        <TextBox x:Name="txtName" MaxLength="50" Margin="0,20,0,0"/>

        <TextBlock Text="Password" Margin="0,60,0,0"/>
        <PasswordBox x:Name="pwdRegister" MaxLength="10" Margin="0,80,0,0"/>

        <TextBlock Text="Age" Margin="0,120,0,0"/>
        <TextBox x:Name="txtAge" Margin="0,140,0,0"/>

        <TextBlock Text="Email" Margin="0,180,0,0"/>
        <TextBox x:Name="txtEmail" Margin="0,200,0,0"/>

        <Button x:Name="btnDoRegister" Content="Register" Width="120" HorizontalAlignment="Center" VerticalAlignment="Bottom" Margin="0,0,0,10" Click="BtnDoRegister_Click"/>
    </Grid>
</Window>
```

### MainWindow.xaml

```xml
<Window x:Class="MyApp.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="Main Window" Height="300" Width="400">
    <Grid>
        <TextBlock Text="Welcome to the Main Window" HorizontalAlignment="Center" VerticalAlignment="Center" FontSize="18"/>
    </Grid>
</Window>
```

---

## 6) C# code-behind samples with explanations

All example namespaces use `MyApp`. Replace with your own project's namespace.

### Helper: open a window and close current

```csharp
// Open new window and close the current one
void OpenWindowAndClose(Window newWindow, Window current)
{
    newWindow.Show();
    current.Close();
}
```

### Login.xaml.cs

```csharp
using System.Windows;

namespace MyApp
{
    public partial class Login : Window
    {
        public Login()
        {
            InitializeComponent();
        }

        private void BtnLogin_Click(object sender, RoutedEventArgs e)
        {
            string user = txtUsername.Text.Trim();
            string pass = pwdBox.Password; // PasswordBox uses Password property

            // Basic validations
            if (string.IsNullOrEmpty(user) || string.IsNullOrEmpty(pass))
            {
                MessageBox.Show("Please enter username and password", "Missing data", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            // Check Admin (case-sensitive)
            if (user == "Admin" && pass == "admin")
            {
                // Open main window
                MainWindow main = new MainWindow();
                OpenWindowAndClose(main, this);
                return;
            }

            // Check saved settings (registered user)
            string savedUser = Properties.Settings.Default.SavedName; // from settings
            string savedPass = Properties.Settings.Default.SavedPassword;

            if (user == savedUser && pass == savedPass)
            {
                MainWindow main = new MainWindow();
                OpenWindowAndClose(main, this);
                return;
            }

            // Invalid credentials
            MessageBox.Show("Invalid username or password", "Login Failed", MessageBoxButton.OK, MessageBoxImage.Error);
        }

        private void BtnRegister_Click(object sender, RoutedEventArgs e)
        {
            Register reg = new Register();
            reg.Show();
            this.Close();
        }

        // Reuse the helper method inside the class
        private void OpenWindowAndClose(Window newWindow, Window current)
        {
            newWindow.Show();
            current.Close();
        }
    }
}
```

**Explanation (step-by-step)**

* `txtUsername.Text` reads the text the user typed.
* `pwdBox.Password` reads password from `PasswordBox`.
* We first check if either field is empty — if yes we show a `MessageBox` and stop.
* Then we check if they typed Admin & admin (both must match exactly) using `&&` (AND) operator.
* If not Admin, we compare against stored values in `Properties.Settings.Default` (more on Settings below).
* If nothing matches we show an error `MessageBox`.

### Register.xaml.cs

```csharp
using System.Text.RegularExpressions;
using System.Windows;

namespace MyApp
{
    public partial class Register : Window
    {
        public Register()
        {
            InitializeComponent();
        }

        private void BtnDoRegister_Click(object sender, RoutedEventArgs e)
        {
            string name = txtName.Text.Trim();
            string pass = pwdRegister.Password;
            string ageText = txtAge.Text.Trim();
            string email = txtEmail.Text.Trim();

            if (string.IsNullOrEmpty(name) || string.IsNullOrEmpty(pass))
            {
                MessageBox.Show("Name and password are required.", "Validation", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            // Optional: validate age is a number
            if (!int.TryParse(ageText, out int age))
            {
                MessageBox.Show("Please enter a valid age.", "Validation", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            // Optional: simple email validation
            if (!Regex.IsMatch(email, @"^\S+@\S+\.\S+$"))
            {
                MessageBox.Show("Please enter a valid email.", "Validation", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            // Save name and password to settings
            Properties.Settings.Default.SavedName = name;
            Properties.Settings.Default.SavedPassword = pass;
            Properties.Settings.Default.Save(); // IMPORTANT: persist to disk

            MessageBox.Show("Registration successful. Please login.", "Success", MessageBoxButton.OK, MessageBoxImage.Information);

            // Return to login
            Login login = new Login();
            login.Show();
            this.Close();
        }
    }
}
```

**Explanation**

* We check required fields.
* We optionally check age and email format.
* We save `SavedName` and `SavedPassword` in `Properties.Settings.Default` and call `.Save()` to persist the values.
* Then we show a success message and open the Login window again.

---

## 7) Settings in WPF — store values (easy steps)

1. In Visual Studio: open the project properties -> **Settings** tab (if not present, add `Settings.settings`).
2. Add two settings:

   * Name: `SavedName`, Type: `string`, Scope: `User`, Value: (leave empty)
   * Name: `SavedPassword`, Type: `string`, Scope: `User`, Value: (leave empty)

These create a `Properties.Settings` class auto-generated for you. You can read and write like:

```csharp
// Read
string user = Properties.Settings.Default.SavedName;

// Write and save
Properties.Settings.Default.SavedName = "Nikhil";
Properties.Settings.Default.Save();
```

**Notes:**

* `User` scope means each user of the machine can have different values and they are persisted.
* `Application` scope values are read-only at runtime.

**Security note:** Storing passwords in plain text in settings is only OK for learning. For real apps, use secure storage/encryption.

---

## 8) Logical operators: `&&` (AND) vs `||` (OR) — simple explanation for kids

* `&&` (AND): **both** conditions must be true.

  * Example: `if (user == "Admin" && pass == "admin")` → only true when user is exactly `Admin` **and** pass is exactly `admin`.
* `||` (OR): **either** condition is enough.

  * Example: `if (user == "Admin" || user == "SuperUser")` → true if user is `Admin` **or** `SuperUser`.

Always read the expression left-to-right to decide whether both or at least one must match.

---

## 9) Using `MessageBox`

`MessageBox.Show` displays a small dialog to the user.

Examples:

```csharp
// Simple
MessageBox.Show("Hello!");

// With title and icon
MessageBox.Show("Invalid username or password", "Login Failed", MessageBoxButton.OK, MessageBoxImage.Error);

// Ask a question
var result = MessageBox.Show("Do you want to quit?", "Confirm", MessageBoxButton.YesNo, MessageBoxImage.Question);
if (result == MessageBoxResult.Yes) Application.Current.Shutdown();
```

Use message boxes to tell the user what happened (success, error, warning).

---

## 10) Validation and "Invalid username and password"

When login fails, show a clear message:

```csharp
MessageBox.Show("Invalid username or password", "Login Failed", MessageBoxButton.OK, MessageBoxImage.Error);
```

Explain to students: this message appears when neither admin credentials nor the registered credentials match the typed values.

---

## 11) Extra tips for teachers / students

* Make UI friendly: labels close to textboxes, paddings and margins neat.
* Explain difference between `TextBox.Text` and `PasswordBox.Password`.
* Teach why we use `.Trim()` to remove accidental spaces.
* Explain why `Properties.Settings.Default.Save()` is required to persist values.
* Explain security: storing plain passwords is only for demo — in production use secure hashing and secure storage.

---

## 12) Short checklist for the lesson

* [ ] Create new WPF app
* [ ] Add `Login`, `Register` windows
* [ ] Set `StartupUri` to `Login.xaml`
* [ ] Add controls and set `MaxLength` on Username and Password to 10
* [ ] Add settings `SavedName` and `SavedPassword`
* [ ] Implement Login & Register even
