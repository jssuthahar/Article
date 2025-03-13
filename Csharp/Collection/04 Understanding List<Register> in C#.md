# README: Understanding List<Register> in C#

## Overview
This document explains the `List<Register>` collection used in the provided C# code. It covers how to initialize, add, remove, and manipulate the list, along with an explanation of how data is bound to the UI components.

## Understanding `List<Register>`
`List<T>` is a dynamic collection in C# that allows adding, removing, and manipulating objects efficiently.

### Declaration:
```csharp
List<Register> register;
```
This declares a list of `Register` objects but does not initialize it yet.

### Initialization:
Before using the list, it must be initialized to avoid `NullReferenceException`:
```csharp
if (register is null)
{
    register = new List<Register>();
}
```

## Adding Elements to the List
### Using `Add()`
The `Add()` method appends a new object to the end of the list:
```csharp
register.Add(new Register { CutomerName = txtname.Text, Email = txtemail.Text, Phone = txtphone.Text, CustomerID = count });
```

### Using `Insert()`
Inserts an item at a specified index:
```csharp
register.Insert(1, new Register { CutomerName = "John", Email = "john@example.com", Phone = "12345" });
```

### Using `AddRange()`
Adds multiple items at once:
```csharp
register.AddRange(new List<Register> {
    new Register { CutomerName = "Alice", Email = "alice@example.com", Phone = "54321" },
    new Register { CutomerName = "Bob", Email = "bob@example.com", Phone = "67890" }
});
```

## Removing Elements from the List
### Using `RemoveAt()`
Removes an item at a specific index:
```csharp
register.RemoveAt(0); // Removes the first item
```

### Using `RemoveRange()`
Removes multiple items:
```csharp
register.RemoveRange(0, 2); // Removes first two elements
```

### Using `Clear()`
Clears all items:
```csharp
register.Clear();
```

## Iterating Over the List
### Using `foreach`
```csharp
foreach (Register item in register)
{
    MessageBox.Show(item.Email);
}
```

### Using `for` Loop
```csharp
for (int i = 0; i < register.Count; i++)
{
    MessageBox.Show(register[i].CutomerName);
}
```

## Binding Data to UI Components
### Binding List to ComboBox
```csharp
cmbcustomer.ItemsSource = null;
cmbcustomer.DisplayMemberPath = "CutomerName";
cmbcustomer.SelectedValuePath = "CustomerID";
cmbcustomer.ItemsSource = register;
```

### Handling Selection Change in ComboBox
```csharp
if (cmbcustomer is not null)
{
    int customerid = (int)cmbcustomer.SelectedValue;
    Register regi = (Register)cmbcustomer.SelectedItem;
    txtemail.Text = regi.Email;
    txtname.Text = regi.CutomerName;
    txtphone.Text = regi.Phone;
}
```

## Summary
- `List<T>` is a flexible collection that can dynamically grow.
- Use `Add()`, `Insert()`, and `AddRange()` to add items.
- Use `RemoveAt()`, `RemoveRange()`, and `Clear()` to delete items.
- Data binding allows easy UI interaction with `List<T>`.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

