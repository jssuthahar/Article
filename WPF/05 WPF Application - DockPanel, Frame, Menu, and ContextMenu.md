# WPF Application - DockPanel, Frame, Menu, and ContextMenu

## Overview
This WPF application demonstrates the use of `DockPanel`, `Frame`, `Menu`, `StackPanel`, and `StatusBar` to create a structured UI with navigation features. The application consists of a main window (`Home.xaml.cs`) that manages different pages (`MyProfile`, `DailyActivity`, `Exp`) using a `Frame`.

## Features
- **DockPanel Layout**: Organizes UI components in a structured manner.
- **Menu**: Provides navigation options for the user.
- **Frame for Page Navigation**: Loads different pages dynamically.
- **Back and Forward Navigation**: Allows the user to navigate between pages.
- **Status Bar**: Displays welcome message and date.
- **Left Panel Navigation**: Quick access buttons for different sections.

## Code Explanation
### XAML (Home.xaml)
```xml
<DockPanel LastChildFill="True">
    <Menu DockPanel.Dock="Top">
        <MenuItem Header="Account">
            <MenuItem Header="Change Password"/>
            <MenuItem Header="My Profile"/>
        </MenuItem>
        <MenuItem Header="Setting">
            <MenuItem Header="Change Theme"/>
            <MenuItem Header="Logout"/>
        </MenuItem>
    </Menu>
    <StackPanel DockPanel.Dock="Left" Background="Azure">
        <Button Content="My Profile" Click="Button_Click" Width="100" Height="50"/>
        <Button Content="Exp" Click="Button_Click_1" Width="100" Height="50"/>
        <Button Content="Daily Activity" Click="Button_Click_2" Width="100" Height="50"/>
    </StackPanel>
    <Frame x:Name="mainframe" NavigationUIVisibility="Hidden"/>
</DockPanel>
```
### Explanation:
- **`DockPanel`**: Defines the main layout.
- **`Menu`**: Provides navigation options.
- **`StackPanel`**: Contains navigation buttons.
- **`Frame`**: Loads different pages dynamically.

### C# (Home.xaml.cs)
```csharp
public partial class Home : Window
{
    DailyActivity odailyactivitypage;
    Exp oexppages;
    MyProfile omyprofilepage;

    public Home(string username)
    {
        InitializeComponent();
        txtdate.Text = DateTime.Now.ToString();
        odailyactivitypage = new DailyActivity();
        oexppages = new Exp();
        omyprofilepage = new MyProfile();
        mainframe.Content = omyprofilepage;
    }

    private void Button_Click(object sender, RoutedEventArgs e)
    {
        mainframe.Content = omyprofilepage;
    }

    private void Button_Click_1(object sender, RoutedEventArgs e)
    {
        mainframe.Content = oexppages;
    }

    private void Button_Click_2(object sender, RoutedEventArgs e)
    {
        mainframe.Content = odailyactivitypage;
    }
}
```
### Explanation:
- **`Home` Constructor**: Initializes components and sets default page.
- **Button Click Events**:
  - Loads respective pages when buttons are clicked.

---

## Interview Questions and Answers

### Q1: What is a `DockPanel` in WPF?
**A:** A `DockPanel` is a layout container that arranges child elements along the edges (top, bottom, left, right) with an option to fill the remaining space.

### Q2: How does the `Frame` control work in WPF?
**A:** The `Frame` control is used for navigation within an application. It can load `Page` elements and supports forward and backward navigation using `CanGoBack`, `CanGoForward`, `GoBack()`, and `GoForward()` methods.

### Q3: What is the difference between `Page` and `Window` in WPF?
**A:**
- `Page` is used for navigation within a `Frame`.
- `Window` is a standalone container that represents an entire application window.

### Q4: How do you navigate between pages using `Frame`?
**A:** You can set the `Content` property of `Frame` to a new page instance, e.g., `mainframe.Content = new MyProfile();`.

### Q5: How can you add a ContextMenu in WPF?
**A:** You can define a `ContextMenu` inside a control, for example:
```xml
<Button Content="Right Click Me">
    <Button.ContextMenu>
        <ContextMenu>
            <MenuItem Header="Option 1"/>
            <MenuItem Header="Option 2"/>
        </ContextMenu>
    </Button.ContextMenu>
</Button>
```

### Q6: What is `NavigationUIVisibility` in `Frame`?
**A:** It controls whether the navigation UI (forward/back buttons) is visible. Setting `NavigationUIVisibility="Hidden"` hides the navigation bar.

### Q7: What are the different layout containers in WPF?
**A:** Common layout containers include:
- `Grid`
- `StackPanel`
- `DockPanel`
- `WrapPanel`
- `Canvas`

### Q8: How do you handle events in WPF?
**A:** Events can be handled using event handlers in the code-behind file. Example:
```csharp
private void Button_Click(object sender, RoutedEventArgs e)
{
    MessageBox.Show("Button Clicked");
}
```

---

## Conclusion
This application demonstrates the usage of various WPF controls, including `DockPanel`, `Menu`, `Frame`, `StackPanel`, and `StatusBar`. It allows users to navigate between different pages while maintaining a structured UI layout.

### Future Enhancements
- Implement a `ContextMenu` for additional user actions.
- Add styling and themes for better UI experience.
- Improve navigation history tracking.

---

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

