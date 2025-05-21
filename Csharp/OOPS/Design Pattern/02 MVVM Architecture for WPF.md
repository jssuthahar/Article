
#  MVVM Architecture for WPF

## What is MVVM?

MVVM (Model-View-ViewModel) is a design pattern used in WPF to separate UI from business logic:

* **Model:** Represents the data.
* **View:** The UI (XAML).
* **ViewModel:** Connects Model and View, contains data and commands.

---

## Why Use MVVM?

* Clear separation of concerns
* Easier to maintain and test
* Supports WPF data binding
* No code-behind logic needed for UI actions

---

## Basic Components

### 1. Model

A simple data class:

```csharp
public class Person
{
    public string Name { get; set; }
}
```

### 2. ViewModel

Implements `INotifyPropertyChanged` and exposes properties for the View to bind:

```csharp
using System.ComponentModel;
using System.Runtime.CompilerServices;

public class PersonViewModel : INotifyPropertyChanged
{
    private string name;

    public string Name
    {
        get => name;
        set
        {
            if (name != value)
            {
                name = value;
                OnPropertyChanged();
            }
        }
    }

    public event PropertyChangedEventHandler PropertyChanged;

    protected void OnPropertyChanged([CallerMemberName] string propertyName = null)
    {
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
    }
}
```

### 3. View (XAML)

Binds UI elements to ViewModel properties:

```xml
<Window x:Class="SimpleMVVM.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
        Title="Simple MVVM" Height="200" Width="400">
    <Window.DataContext>
        <local:PersonViewModel />
    </Window.DataContext>
    <StackPanel Margin="20">
        <TextBox Text="{Binding Name, UpdateSourceTrigger=PropertyChanged}" />
        <TextBlock Text="{Binding Name}" Margin="0,10,0,0" FontSize="16"/>
    </StackPanel>
</Window>
```

---

## How It Works

* When you type in the `TextBox`, it updates the `Name` property in the ViewModel.
* The `TextBlock` automatically updates because it’s bound to the same property.
* `INotifyPropertyChanged` triggers UI updates.

---

## Summary

| Layer     | Responsibility                 |
| --------- | ------------------------------ |
| Model     | Data structures                |
| ViewModel | Data & logic, notifies changes |
| View      | UI, binds to ViewModel         |

---
 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

