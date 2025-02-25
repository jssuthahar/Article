# Calculator Application

## Overview
This application is a simple calculator built using C# and WPF (Windows Presentation Foundation). The calculator allows users to enter numerical values using buttons and displays the input dynamically on the screen. The core functionality of handling number button clicks is managed by the `Number_Click` event handler.

## Code Explanation

### Number_Click Event Handler
The `Number_Click` event is assigned to all number buttons (0-9). When a number button is clicked, this event is triggered, capturing the button's value and updating the display accordingly.

```csharp
private void Number_Click(object sender, RoutedEventArgs e)
{
    Button btnvnumber = (Button)sender;

    if (oper == "")
    {
        firstnumber = firstnumber + btnvnumber.Content.ToString();
        txtresult.Text = firstnumber;
    }
    else
    {
        secondnumber = secondnumber + btnvnumber.Content.ToString();
        txtresult.Text = secondnumber;
    }
}
```

### How It Works
1. The method retrieves the button that triggered the event using `(Button)sender`.
2. It then checks whether an operator (`oper`) has been set:
   - If no operator is selected (`oper == ""`), the clicked number is appended to `firstnumber`.
   - If an operator is selected, the clicked number is appended to `secondnumber`.
3. The updated value is displayed in `txtresult`.

### Assigning Number_Click to Number Buttons
To ensure that the `Number_Click` event is triggered when any number button (0-9) is clicked, the event handler is assigned in XAML:

```xml
<Button Content="1" Click="Number_Click"/>
<Button Content="2" Click="Number_Click"/>
<Button Content="3" Click="Number_Click"/>
<Button Content="4" Click="Number_Click"/>
<Button Content="5" Click="Number_Click"/>
<Button Content="6" Click="Number_Click"/>
<Button Content="7" Click="Number_Click"/>
<Button Content="8" Click="Number_Click"/>
<Button Content="9" Click="Number_Click"/>
<Button Content="0" Click="Number_Click"/>
```

### Why This Approach?
- **Code Reusability**: Instead of writing separate event handlers for each number button, a single `Number_Click` event is used, reducing code duplication.
- **Scalability**: If additional buttons need similar functionality, they can be easily integrated without modifying the event handler logic.
- **Improved Readability**: Keeping the logic centralized in one method makes it easier to understand and maintain.

## Conclusion
This implementation efficiently captures number button clicks and updates the display dynamically. It ensures smooth user interaction and keeps the code organized and maintainable.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)

