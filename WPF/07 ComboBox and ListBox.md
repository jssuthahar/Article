# ComboBox and ListBox 

## Overview

This guide demonstrates various ways to work with `ComboBox` and `ListBox` in WPF, including adding, inserting, and removing items dynamically.

## ComboBox - Adding and Managing Items

The `ComboBox` control allows users to select an item from a dropdown list. Here are different ways to manipulate items in a `ComboBox`.

### Adding Items Dynamically

```csharp
cmbcountry.Items.Add("USA"); // Adds an item at the end of the list
```

### Inserting Items at a Specific Position

```csharp
cmbcountry.Items.Insert(0, "Canada"); // Inserts an item at index 0
```

### Removing Items

```csharp
cmbcountry.Items.Remove("India"); // Removes the specified item
cmbcountry.Items.RemoveAt(0); // Removes the first item
```

### Clearing All Items

```csharp
cmbcountry.Items.Clear();
```

### Using ItemsSource to Bind a Collection

```csharp
string[] country = { "India", "Singapore", "Malaysia" };
cmbcountry.ItemsSource = country; // Binds an array to the ComboBox
```

## Handling Selection in ComboBox

```csharp
private void ComboBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
{
    ComboBoxItem item = (ComboBoxItem)cmbcountry.SelectedItem;
    if (item.Content != null)
    {
        MessageBox.Show(item.Content.ToString());
    }
}
```

## ListBox - Adding and Managing Items

A `ListBox` allows users to select one or multiple items from a list.

### Adding Items

```csharp
lstskill.Items.Add("C#"); // Adds an item
```

### Inserting Items

```csharp
lstskill.Items.Insert(0, "Java"); // Inserts an item at index 0
```

### Removing Items

```csharp
lstskill.Items.Remove("Python"); // Removes a specific item
lstskill.Items.RemoveAt(1); // Removes the item at index 1
```

### Clearing All Items

```csharp
lstskill.Items.Clear();
```

### Using ItemsSource

```csharp
string[] skills = { "C#", "Java", "Python" };
lstskill.ItemsSource = skills; // Binds an array to the ListBox
```

## Handling Selection in ListBox

```csharp
private void ListBox_SelectionChanged(object sender, SelectionChangedEventArgs e)
{
    int count = lstskill.SelectedItems.Count;
    for (int i = 0; i < count; i++)
    {
        ListBoxItem lst = (ListBoxItem)lstskill.SelectedItems[i];
        if (lst.Content != null)
        {
            MessageBox.Show(lst.Content.ToString());
        }
    }
}
```

## Performance: Insert vs. Add

### Why is `Insert` Performance Lower Compared to `Add`?

- `Add()` simply appends an item at the end of the collection, which is an `O(1)` operation (constant time complexity).
- `Insert(index, item)` shifts all elements after the specified index to the right to make space for the new item, making it an `O(n)` operation (linear time complexity).
- As the number of items increases, `Insert()` takes significantly more time compared to `Add()` due to the shifting overhead.

## Summary

- `Items.Add()` - Adds an item to the list.
- `Items.Insert(index, value)` - Inserts an item at a specific index.
- `Items.Remove(value)` - Removes a specific item.
- `Items.RemoveAt(index)` - Removes an item by index.
- `Items.Clear()` - Clears all items.
- `ItemsSource` - Binds a collection to the control.
- `SelectionChanged` - Handles item selection events.
- `Insert()` has lower performance than `Add()` due to shifting elements in the collection.

This guide provides a foundation for working with `ComboBox` and `ListBox` controls in WPF applications.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
