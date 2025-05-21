

# MVVM Architecture in WPF – Detailed Guide

## Overview

**MVVM (Model-View-ViewModel)** is a powerful architectural pattern used in WPF applications to separate UI from business logic and data. It leverages WPF’s data binding, commanding, and notifications to create maintainable, testable, and scalable applications.

---

## MVVM Components

| Component     | Role                                                                          |
| ------------- | ----------------------------------------------------------------------------- |
| **Model**     | Represents data, business logic, and data access.                             |
| **View**      | The UI layer, built with XAML, displays data and user controls.               |
| **ViewModel** | Bridges Model and View, exposes properties, commands, and handles view logic. |

---

## Key Features in MVVM

### 1. **INotifyPropertyChanged**

* Enables ViewModel properties to notify the View when their values change.
* Essential for updating UI automatically on data changes.
* Implemented by raising `PropertyChanged` event in property setters.

### 2. **ICommand**

* Handles user actions like button clicks in the ViewModel.
* Keeps event logic out of the View’s code-behind.
* Supports enabling/disabling controls based on conditions (`CanExecute`).

### 3. **ObservableCollection<T>**

* A collection that automatically notifies the View of any changes (add/remove).
* Ideal for binding lists, grids, or any dynamic collections.

### 4. **Data Binding**

* Connects View properties to ViewModel properties.
* Supports one-way, two-way, and one-time binding modes.
* Enables synchronization between UI and data automatically.

### 5. **IValueConverter**

* Transforms data between ViewModel and View during binding.
* Useful for formatting, converting types, or conditional UI logic.

---

## Helper Classes & Patterns

### RelayCommand / DelegateCommand

* Simplifies implementing `ICommand`.
* Allows binding commands to methods without boilerplate.

```csharp
public class RelayCommand : ICommand
{
    private readonly Action<object> execute;
    private readonly Predicate<object> canExecute;

    public RelayCommand(Action<object> execute, Predicate<object> canExecute = null)
    {
        this.execute = execute;
        this.canExecute = canExecute;
    }

    public bool CanExecute(object parameter) => canExecute == null || canExecute(parameter);
    public void Execute(object parameter) => execute(parameter);
    public event EventHandler CanExecuteChanged
    {
        add => CommandManager.RequerySuggested += value;
        remove => CommandManager.RequerySuggested -= value;
    }
}
```

---

### BaseViewModel

* Abstract base class implementing `INotifyPropertyChanged`.
* Avoids repetitive code in multiple ViewModels.

```csharp
public abstract class BaseViewModel : INotifyPropertyChanged
{
    public event PropertyChangedEventHandler PropertyChanged;
    protected void OnPropertyChanged([CallerMemberName] string name = null)
    {
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(name));
    }
}
```

---

## Example: Complete MVVM Setup

### Model

```csharp
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
}
```

### ViewModel

```csharp
public class ProductViewModel : BaseViewModel
{
    private Product selectedProduct;
    public ObservableCollection<Product> Products { get; } = new();

    public Product SelectedProduct
    {
        get => selectedProduct;
        set
        {
            if (selectedProduct != value)
            {
                selectedProduct = value;
                OnPropertyChanged();
            }
        }
    }

    public ICommand AddProductCommand { get; }

    public ProductViewModel()
    {
        AddProductCommand = new RelayCommand(_ => AddProduct());
        Products.Add(new Product { Id = 1, Name = "Apple" });
    }

    private void AddProduct()
    {
        Products.Add(new Product { Id = Products.Count + 1, Name = "New Product" });
    }
}
```

### View (XAML)

```xml
<Window x:Class="MVVMDemo.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="MVVM Demo" Height="300" Width="400">

    <Window.DataContext>
        <local:ProductViewModel />
    </Window.DataContext>

    <StackPanel Margin="10">
        <ListBox ItemsSource="{Binding Products}" DisplayMemberPath="Name"
                 SelectedItem="{Binding SelectedProduct}" Height="150"/>
        <Button Content="Add Product" Command="{Binding AddProductCommand}" Margin="0,10,0,0"/>
        <TextBlock Text="{Binding SelectedProduct.Name}" FontWeight="Bold" Margin="0,10,0,0"/>
    </StackPanel>
</Window>
```

---

## Advanced MVVM Features

* **Async Commands:** Use async/await inside commands for responsive UI.
* **Messenger/Event Aggregator:** For communication between ViewModels without tight coupling.
* **Dependency Injection:** Manage ViewModel and service dependencies easily.
* **ViewModel Locator:** Centralizes ViewModel instances for View binding.
* **Data Templates:** Customize UI based on data types automatically.

---

## Tips & Best Practices

* Avoid code-behind in Views except for pure UI effects.
* Use `ObservableCollection<T>` for collections bound to UI.
* Raise `PropertyChanged` on all properties that affect UI.
* Use `IValueConverter` for UI-specific data formatting.
* Keep ViewModels free of any UI framework dependencies.
* Use frameworks like **Prism**, **MVVM Light**, or **Community Toolkit MVVM** to simplify MVVM.

---

## Summary Table

| Feature                   | Purpose                              |
| ------------------------- | ------------------------------------ |
| `INotifyPropertyChanged`  | Update UI on property value changes  |
| `ICommand`                | Bind UI actions to ViewModel methods |
| `ObservableCollection<T>` | Auto-update UI on collection changes |
| `IValueConverter`         | Transform data during binding        |
| RelayCommand              | Simplify ICommand implementation     |
| BaseViewModel             | Centralize PropertyChanged logic     |

---
 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

