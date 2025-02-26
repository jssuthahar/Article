  # WPF MessageBox and Navigation Between Pages


## Code Example

```csharp
using System.Windows;
using System.Windows.Controls;

namespace MessageBoxExample
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void ShowMessageBox_Click(object sender, RoutedEventArgs e)
        {
            MessageBoxResult result = MessageBox.Show("Welcome", "MSDEVBUILD", MessageBoxButton.YesNoCancel, MessageBoxImage.Information);
            
            if (result == MessageBoxResult.Yes)
            {
                MessageBox.Show("You clicked Yes.", "Response", MessageBoxButton.OK, MessageBoxImage.Information);
            }
            else if (result == MessageBoxResult.No)
            {
                MessageBox.Show("You clicked No.", "Response", MessageBoxButton.OK, MessageBoxImage.Information);
            }
            else if (result == MessageBoxResult.Cancel)
            {
                MessageBox.Show("You clicked Cancel.", "Response", MessageBoxButton.OK, MessageBoxImage.Information);
            }
        }
    }
}
```

## Explanation
- **Message**: Displays `"Welcome"` as the main content.
- **Title**: Sets the title of the message box to `"MSDEVBUILD"`.
- **Buttons**: Includes `Yes`, `No`, and `Cancel` buttons.
- **Icon**: Displays an information icon (`MessageBoxImage.Information`).
- **Button Click Event**: Shows the message box when a button is clicked and processes the user's response.
- **Conditional Statements**: Instead of using a `switch` statement, the code now uses `if-else` conditions to check the user's response and display the appropriate message box.
### Example:
```csharp
int count = 0;
private void BtnLogin_Click(object sender, RoutedEventArgs e)
{
    string username = txtusername.Text;
    string password = pwpassword.Password;

    if (username == "admin" && password == "password")
    {
        Home homepage = new Home(username);
        homepage.Show();
        this.Close();
    }
    else
    {
        count++;
        if (count == 1)
        {
            MessageBoxResult result = MessageBox.Show("Invalid Username and Password, Do you want to continue?", "Alert", MessageBoxButton.YesNo);
            if (result == MessageBoxResult.Yes)
            {
                txtusername.Text = "";
                pwpassword.Password = "";
            }
            else
            {
                btnlogin.Visibility = Visibility.Hidden;
            }
        }
        if (count >= 3)
        {
            spmain.Visibility = Visibility.Collapsed;
        }
    }
}
```

## Navigating Between Pages

### Navigation with Argument
In WPF, we can pass arguments to another page using constructors. Below is an example where the `username` is passed to the `Home` page.

#### Example:
```csharp
Home homepage = new Home(username);
homepage.Show();
this.Close();
```

#### Home.xaml.cs:
```csharp
public partial class Home : Window
{
    private string _username;
    public Home(string username)
    {
        InitializeComponent();
        _username = username;
        lblWelcome.Content = "Welcome " + _username;
    }
}
```

### Navigation Without Argument
If you don't need to pass an argument, you can simply create an instance of the page and navigate to it.

#### Example:
```csharp
Home homepage = new Home();
homepage.Show();
this.Close();
```

## Conclusion
- `MessageBox` is useful for displaying alerts and getting user confirmations.
- Navigation in WPF can be done with or without passing arguments using constructors.
- Handling multiple invalid login attempts can be implemented using simple conditional checks.

This guide provides a basic understanding of message boxes and navigation between pages in WPF.



