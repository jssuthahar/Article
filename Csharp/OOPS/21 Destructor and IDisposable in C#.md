
# Destructor and IDisposable in C#

This README explains the concepts of **Destructors** and **IDisposable** in C# and their usage in managing resource cleanup and memory management.

## 1. Destructor in C#

A **Destructor** is a special method in C# that is called when an object is destroyed or goes out of scope. It is used to perform cleanup operations on unmanaged resources before the object is garbage collected.

- **Syntax**:
  ```csharp
  class MyClass
  {
      // Destructor
      ~MyClass()
      {
          // Cleanup code here
      }
  }
  ```

### Key Points:
- A destructor is defined using the `~` symbol followed by the class name.
- A destructor cannot take parameters or return any value.
- The destructor is automatically called by the .NET runtime during garbage collection.
- Destructors are not deterministic, meaning you can't predict exactly when they will be called.
- Destructors are used mainly for releasing unmanaged resources, but the .NET runtime handles memory management for managed objects.

### Example:

```csharp
using System;

class ResourceManager
{
    // Destructor
    ~ResourceManager()
    {
        Console.WriteLine("Destructor called. Cleanup performed.");
    }

    public void SimulateUsage()
    {
        Console.WriteLine("Simulating resource usage...");
    }
}

class Program
{
    static void Main()
    {
        ResourceManager rm = new ResourceManager();
        rm.SimulateUsage();
        // Destructor will be called when rm goes out of scope
    }
}
```

In this example, the destructor will be called when the `ResourceManager` object is garbage collected.

---

## 2. IDisposable in C#

The **IDisposable** interface provides a method, `Dispose()`, which allows for explicit resource cleanup, especially when working with unmanaged resources. Unlike destructors, `Dispose()` can be called manually to release resources at a precise moment.

### Syntax:

```csharp
using System;

public class ResourceManager : IDisposable
{
    private bool disposed = false;

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this); // Prevents the destructor from being called
    }

    protected virtual void Dispose(bool disposing)
    {
        if (!disposed)
        {
            if (disposing)
            {
                // Release managed resources
            }
            // Release unmanaged resources
            disposed = true;
        }
    }

    // Destructor
    ~ResourceManager()
    {
        Dispose(false);
    }
}
```

### Key Points:
- `IDisposable` requires you to implement the `Dispose()` method to clean up resources manually.
- The `Dispose()` method can be called explicitly, giving you more control over when the resources are released.
- `GC.SuppressFinalize(this)` tells the garbage collector not to call the finalizer (destructor) if `Dispose()` has already been called.
- The `Dispose(bool disposing)` method should release both managed and unmanaged resources.
- `Dispose()` is typically used in the **Dispose Pattern**, which involves overriding the `Dispose()` method and a finalizer (destructor).

### Example:

```csharp
using System;

class ResourceManager : IDisposable
{
    private bool disposed = false;

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this); // Prevent finalizer from being called
    }

    protected virtual void Dispose(bool disposing)
    {
        if (!disposed)
        {
            if (disposing)
            {
                // Dispose managed resources
                Console.WriteLine("Disposing managed resources.");
            }
            // Dispose unmanaged resources
            Console.WriteLine("Disposing unmanaged resources.");
            disposed = true;
        }
    }

    // Destructor
    ~ResourceManager()
    {
        Dispose(false);
    }
}

class Program
{
    static void Main()
    {
        using (ResourceManager rm = new ResourceManager())
        {
            rm.Dispose(); // Manual disposal of resources
        }
    }
}
```

In this example, `Dispose()` is called explicitly to clean up resources. The destructor will only be called if `Dispose()` is not manually invoked.

---

## 3. When to Use Destructor vs IDisposable

- Use **IDisposable** when you need to control resource cleanup in a deterministic manner. This is particularly useful when dealing with unmanaged resources like file handles, network connections, or database connections.
- **Destructors** are less predictable and are used when relying on the garbage collector to clean up resources is sufficient (typically for unmanaged resources).
  
In most cases, it's recommended to implement the **Dispose pattern** to ensure resources are released as soon as they are no longer needed.

---

## Conclusion

- **Destructor** is used automatically by the garbage collector and is non-deterministic.
- **IDisposable** is used to manually release resources at a specific time, providing more control over resource management.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
