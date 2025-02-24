# WPF Styles in Different Levels

In WPF, styles allow you to define reusable property settings for controls, layouts, windows, and applications. Styles improve consistency, maintainability, and ease of modification. Styles can be applied at four levels:

1. **Control-Level Styles** – Applied to individual controls like buttons or textboxes.
2. **Layout-Level Styles** – Applied to containers like `Grid`, `StackPanel`, and `Border`.
3. **Window-Level Styles** – Applied to entire windows.
4. **Application-Level Styles** – Global styles defined in `App.xaml`.

---

## **1. Control-Level Styles**
Control-level styles are used to define the look and feel of specific controls such as buttons, textboxes, labels, and checkboxes.

### **Example: Styling a Button**
```xml
<Style x:Key="PrimaryButtonStyle" TargetType="Button">
    <Setter Property="Background" Value="Blue" />
    <Setter Property="Foreground" Value="White" />
    <Setter Property="FontSize" Value="14" />
    <Setter Property="Padding" Value="10,5" />
</Style>
```

### **Usage**
```xml
<Button Content="Submit" Style="{StaticResource PrimaryButtonStyle}" />
```

---

## **2. Layout-Level Styles**
Layout styles apply to container elements such as `Grid`, `StackPanel`, and `Border`. These styles help maintain uniform spacing, alignment, and appearance of layouts.

### **Example: Styling a Grid Layout**
```xml
<Style x:Key="MainGridStyle" TargetType="Grid">
    <Setter Property="Margin" Value="10" />
    <Setter Property="Background" Value="LightGray" />
</Style>
```

### **Usage**
```xml
<Grid Style="{StaticResource MainGridStyle}">
    <!-- Child controls -->
</Grid>
```

---

## **3. Window-Level Styles**
Window-level styles define properties for the entire window, ensuring a consistent look across different windows in the application.

### **Example: Styling a Window**
```xml
<Style x:Key="MainWindowStyle" TargetType="Window">
    <Setter Property="Background" Value="WhiteSmoke" />
    <Setter Property="WindowStartupLocation" Value="CenterScreen" />
    <Setter Property="ResizeMode" Value="NoResize" />
</Style>
```

### **Usage**
```xml
<Window x:Class="MainWindow" Style="{StaticResource MainWindowStyle}">
    <!-- Content -->
</Window>
```

---

## **4. Application-Level Styles**
Application-wide styles are typically defined in `App.xaml` and apply across the entire WPF application.

### **Example: Defining Global Styles in `App.xaml`**
```xml
<Application.Resources>
    <!-- Common Color Resources -->
    <Color x:Key="PrimaryColor">#0078D7</Color>
    <Color x:Key="SecondaryColor">#005A9E</Color>
    <Color x:Key="TextColor">#FFFFFF</Color>

    <!-- Global Button Style -->
    <Style x:Key="GlobalButtonStyle" TargetType="Button" BasedOn="{StaticResource {x:Type Button}}">
        <Setter Property="Background" Value="{StaticResource PrimaryColor}" />
        <Setter Property="Foreground" Value="{StaticResource TextColor}" />
        <Setter Property="FontSize" Value="14" />
        <Setter Property="Padding" Value="10,5" />
    </Style>

    <!-- Global TextBlock Style -->
    <Style x:Key="GlobalTextBlockStyle" TargetType="TextBlock">
        <Setter Property="FontSize" Value="14" />
        <Setter Property="FontFamily" Value="Segoe UI" />
        <Setter Property="Foreground" Value="{StaticResource SecondaryColor}" />
    </Style>
</Application.Resources>
```

### **Usage**
All `TextBlock` elements in the application will automatically use this style without explicitly setting it.

```xml
<TextBlock Text="Welcome to WPF!" Style="{StaticResource GlobalTextBlockStyle}" />
<Button Content="Click Me" Style="{StaticResource GlobalButtonStyle}" />
```

---

## **DynamicResource in WPF**
A `DynamicResource` allows WPF applications to update styles dynamically at runtime. Unlike `StaticResource`, which is resolved at compile-time, `DynamicResource` resolves at runtime and can reflect changes without restarting the application.

### **Example: Using DynamicResource**
```xml
<Application.Resources>
    <SolidColorBrush x:Key="DynamicPrimaryColor" Color="Blue" />
</Application.Resources>

<Button Content="Click Me" Background="{DynamicResource DynamicPrimaryColor}" />
```

### **Changing the Resource Dynamically in Code-Behind**
```csharp
Application.Current.Resources["DynamicPrimaryColor"] = new SolidColorBrush(Colors.Red);
```

---

## **Best Practices**
✅ Use `x:Key` for reusable styles and `TargetType` for implicit styles.  
✅ Organize styles in separate **resource dictionaries** for better maintainability.  
✅ Use **theme-based styles** for dark and light mode variations.  
✅ Avoid hardcoded colors; prefer using `StaticResource` or `DynamicResource`.  

By leveraging styles effectively, you can create a consistent and scalable WPF application design. 🚀

---

## **Interview Questions and Answers**

### **Q1: What is a Style in WPF?**
**A:** A Style in WPF is a collection of property values that can be applied to multiple controls to ensure a consistent look and feel across an application.

### **Q2: How do you apply a Style in WPF?**
**A:** A style can be applied using the `Style` attribute of a control, referencing a `StaticResource` or `DynamicResource`.

### **Q3: What is the difference between StaticResource and DynamicResource in WPF?**
**A:** 
- **StaticResource** is resolved at compile-time and cannot change at runtime.
- **DynamicResource** is resolved at runtime and allows for changes without restarting the application.

### **Q4: Can a Style be inherited in WPF?**
**A:** Yes, a Style can be based on another Style using the `BasedOn` property.

### **Q5: What are implicit and explicit styles in WPF?**
**A:** 
- **Implicit Styles** apply automatically to all elements of a given type.
- **Explicit Styles** require a `x:Key` and must be referenced explicitly.

### **Q6: How can you define an application-wide Style in WPF?**
**A:** Application-wide styles are defined inside `<Application.Resources>` in `App.xaml`, making them available globally.

### **Q7: What is a Resource Dictionary in WPF?**
**A:** A Resource Dictionary allows styles and other resources to be organized separately and reused across multiple WPF files.

### **Q8: How do you merge multiple Resource Dictionaries in WPF?**
**A:** Multiple Resource Dictionaries can be merged using `<ResourceDictionary.MergedDictionaries>` inside `App.xaml`.

### **Q9: How can you override a Style in WPF?**
**A:** A Style can be overridden by defining another Style with the same `x:Key` or by applying a new Style directly to a control.

### **Q10: What are the performance implications of using DynamicResource over StaticResource?**
**A:** `DynamicResource` is resolved at runtime, which may impact performance if frequently used, while `StaticResource` is resolved at compile-time and is more efficient.
