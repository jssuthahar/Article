
### 📘  WPF Interview Q\&A

````markdown
# WPF Interview Questions & Answers – C#, XAML

This document contains logical and technical questions often asked in interviews related to WPF (Windows Presentation Foundation) using C#. Topics include layout panels, controls, resources, and application settings.

---

## 🔹 StackPanel vs Grid

### Q1: What is the default orientation of a StackPanel?
**A:** The default orientation is `Vertical`.

### Q2: When should you use StackPanel over Grid?
**A:** Use `StackPanel` for simple vertical or horizontal layouts. Use `Grid` when precise row/column alignment is needed.

---

## 🔹 Grid

### Q3: What is the difference between `*`, `Auto`, and fixed size in Grid?
- `*` (Star): Takes remaining space proportionally.
- `Auto`: Sizes to content.
- `100`: Fixed size in pixels.

### Q4: What is a RowDefinition and ColumnDefinition?
**A:** These define the layout structure of a `Grid`:
```xml
<Grid>
  <Grid.RowDefinitions>
    <RowDefinition Height="Auto"/>
    <RowDefinition Height="*"/>
  </Grid.RowDefinitions>
</Grid>
````

---

## 🔹 TextBox

### Q5: How do you bind a TextBox to a property in ViewModel?

**A:**

```xml
<TextBox Text="{Binding Name, Mode=TwoWay}" />
```

### Q6: How to allow only numeric input in TextBox?

**A:** Handle the `PreviewTextInput` event and validate the input:

```csharp
private void TextBox_PreviewTextInput(object sender, TextCompositionEventArgs e)
{
    e.Handled = !int.TryParse(e.Text, out _);
}
```

---

## 🔹 ComboBox

### Q7: How to bind ComboBox to a list of objects?

**A:**

```xml
<ComboBox ItemsSource="{Binding CountryList}" DisplayMemberPath="Name" SelectedItem="{Binding SelectedCountry}" />
```

### Q8: Difference between SelectedItem, SelectedValue, SelectedIndex?

* `SelectedItem`: The selected object.
* `SelectedValue`: The value of the property specified in `SelectedValuePath`.
* `SelectedIndex`: Index of the selected item.

---

## 🔹 Label vs TextBlock

### Q9: Difference between Label and TextBlock?

* `Label`: Can contain access keys and focus other controls via `Target`.
* `TextBlock`: Lightweight and better for rendering text, especially multiline.

**Recommendation:** Use `TextBlock` for read-only text and `Label` when associating with an input control.

---

## 🔹 Resources

### Q10: How do you define and use a SolidColorBrush resource?

**A:**

```xml
<SolidColorBrush x:Key="PrimaryBrush" Color="Blue" />
<TextBlock Foreground="{StaticResource PrimaryBrush}" />
```

### Q11: Difference between StaticResource and DynamicResource?

* `StaticResource`: Evaluated at load time, faster.
* `DynamicResource`: Evaluated at runtime, useful for theme or style changes.

---

## 🔹 Settings

### Q12: How to persist user settings between sessions?

**A:**

1. Go to `Properties > Settings.settings`.
2. Add a new setting: e.g., `FontSize` (User scope).
3. Save/Read settings:

```csharp
Properties.Settings.Default.FontSize = 14;
Properties.Settings.Default.Save();
```

### Q13: Difference between Application scope and User scope?

* **Application:** Read-only at runtime. Shared for all users.
* **User:** Read/write at runtime. Stored per user.

---

## 🔹 Bonus Logical Questions

### Q14: Can we nest Grid inside a StackPanel?

**A:** Yes, but be aware: StackPanel does not limit the height/width of its children, so content may overflow.

### Q15: What happens if duplicate resource keys are defined?

**A:** The closest scope (control > window > app) takes precedence. Duplicate keys at the same level will throw a runtime error.

---

## ✅ Real-Time Coding Task Example

### Simple Grid Form with TextBox & ComboBox

```xml
<Grid>
  <Grid.RowDefinitions>
    <RowDefinition Height="Auto"/>
    <RowDefinition Height="Auto"/>
    <RowDefinition Height="Auto"/>
  </Grid.RowDefinitions>
  <Grid.ColumnDefinitions>
    <ColumnDefinition Width="Auto"/>
    <ColumnDefinition Width="*" />
  </Grid.ColumnDefinitions>

  <TextBlock Text="Name:" Grid.Row="0" Grid.Column="0" Margin="5"/>
  <TextBox Grid.Row="0" Grid.Column="1" Margin="5"/>

  <TextBlock Text="Gender:" Grid.Row="1" Grid.Column="0" Margin="5"/>
  <ComboBox Grid.Row="1" Grid.Column="1" Margin="5"
            ItemsSource="{Binding GenderList}" 
            SelectedItem="{Binding SelectedGender}" />

  <Button Content="Submit" Grid.Row="2" Grid.ColumnSpan="2" Margin="5"/>
</Grid>
```

---

---


## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

