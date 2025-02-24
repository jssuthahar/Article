## XAML Naming Standards for Controls  

### **General Guidelines**  
1. **CamelCase with Prefix**: Use a three-letter prefix to indicate the control type (`btn`, `txt`, `lbl`, etc.), followed by a meaningful name in PascalCase.  
2. **Meaningful Names**: Names should clearly describe the control's purpose.  
3. **Avoid Abbreviations**: Use full words unless widely recognized.  
4. **Consistency**: Follow the same pattern across all controls.  

---

### **Control Naming Conventions**  

| Control Type    | Prefix  | Naming Example  |
|---------------|--------|----------------|
| `Button`      | `btn`  | `btnSubmit`    |
| `TextBox`     | `txt`  | `txtUserName`  |
| `Label`       | `lbl`  | `lblErrorMsg`  |
| `CheckBox`    | `chk`  | `chkAccept`    |
| `ComboBox`    | `cmb`  | `cmbCountry`   |
| `ListBox`     | `lst`  | `lstItems`     |
| `DataGrid`    | `dg`   | `dgOrders`     |
| `Image`       | `img`  | `imgProfile`   |
| `StackPanel`  | `sp`   | `spContainer`  |
| `Grid`        | `grd`  | `grdContent`   |
| `Border`      | `brd`  | `brdProfile`   |

---

### **Event Handler Naming**  
Use `{ControlPrefix}{ControlName}_{EventName}` for event handlers.  

**Example:**  
```xml
<Button x:Name="btnSubmit" Click="btnSubmit_Click" />
```
```csharp
private void btnSubmit_Click(object sender, RoutedEventArgs e)  
{  
    // Handle click event  
}
```

---

### **Best Practices**  
✅ Use `x:Name` only when required.  
✅ Keep names concise but descriptive.  
✅ Maintain uniform naming across all UI elements.  
