# C# and XAML Naming Standards

## C# Naming Conventions

### **1. Project and Class Library Naming**
- Use PascalCase.
- Project names should be descriptive and align with the business domain.
- Class library names should be meaningful and indicate their purpose.

**Examples:**
```
CompanyName.ProductName.Module
CompanyName.Utilities
MyApp.DataAccess
MyApp.Services
```

### **2. Class Naming**
- Use PascalCase.
- Use nouns or noun phrases.
- Avoid abbreviations.

```csharp
public class EmployeeManager
{
    // Class implementation
}
```

### **3. Method Naming**
- Use PascalCase.
- Use verbs or verb phrases.
- Methods should be named based on their behavior.

```csharp
public void CalculateSalary()
{
    // Method implementation
}
```

### **4. Variable Naming**
#### **Local Variables & Fields**
- Use camelCase.
- Avoid using underscores (`_`) for local variables.
- For private fields, use `_camelCase`.

```csharp
private int _employeeCount;

public void SetEmployeeCount(int count)
{
    int localVariable = count;
    _employeeCount = localVariable;
}
```

#### **Constants**
- Use PascalCase.
- Prefix with `readonly` if it's a runtime constant.

```csharp
public const int DefaultEmployeeCount = 100;
private readonly string CompanyName = "TechCorp";
```

### **5. Property Naming**
- Use PascalCase.
- Avoid prefixing properties with `Get` or `Set`.

```csharp
public string FirstName { get; set; }
public int Age { get; private set; }
```

### **6. Interface Naming**
- Prefix interface names with `I`.
- Use PascalCase.

```csharp
public interface IEmployeeService
{
    void ProcessPayroll();
}
```

### **7. Enum Naming**
- Use PascalCase for enum type and members.

```csharp
public enum PaymentStatus
{
    Pending,
    Completed,
    Failed
}
```

### **8. Event Naming**
- Use PascalCase.
- Use `EventHandler` suffix for event handlers.

```csharp
public event EventHandler EmployeeHired;
```

## XAML Naming Conventions

### **1. Controls & UI Elements**
- Use PascalCase.
- Use meaningful names.
- Use `<ControlType> + Name` pattern.

```xml
<Button x:Name="SubmitButton" Content="Submit" Click="OnSubmitClick"/>
<TextBox x:Name="UserNameTextBox"/>
```

### **2. Event Naming**
- Use PascalCase.
- Event names should be prefixed with `On`.

```csharp
private void OnSubmitClick(object sender, RoutedEventArgs e)
{
    // Event handler logic
}
```

### **3. Styles and Resources Naming**
- Use PascalCase.
- Prefix `Style`, `Brush`, `Template`, etc., for clarity.

```xml
<SolidColorBrush x:Key="PrimaryColorBrush" Color="#007ACC"/>
<Style x:Key="PrimaryButtonStyle" TargetType="Button">
    <Setter Property="Background" Value="{StaticResource PrimaryColorBrush}"/>
</Style>
```

## Best Practices
- **Follow SOLID Principles** for maintainable code.
- **Avoid Magic Numbers**; use constants or enums.
- **Comment Meaningfully**, not redundantly.
- **Use Async/Await Properly** for asynchronous operations.
- **Follow MVVM Pattern** in XAML applications.

## Additional Resources
- Website: [MS Dev Build](https://www.msdevbuild.com/)
- YouTube Channels:
  - English: [MS Dev Build](https://www.youtube.com/@MSDEVBUILD)
  - Tamil: [MS Dev Build Tamil](https://www.youtube.com/@MSDEVBUILDTamil)

By following these guidelines, you ensure consistency, readability, and maintainability in your C# and XAML projects.
