# MessageBox.Show Example


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

