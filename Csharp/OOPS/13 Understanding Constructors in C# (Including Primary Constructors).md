
# 🚀 Understanding Constructors in C# (Including Primary Constructors)

Constructors are special methods in C# used to initialize objects. They play a vital role in setting initial values and performing setup tasks when an object is created.

---

## 🔹 Types of Constructors in C#

### 1. **Default Constructor**
- **Definition**: A constructor without parameters.
- **Purpose**: Initializes fields with default values.
- **Example**:
  ```csharp
  public class Person
  {
      public string Name;

      public Person()
      {
          Name = "Unknown";
      }
  }
  ```

---

### 2. **Parameterized Constructor**
- **Definition**: A constructor that accepts parameters.
- **Purpose**: Allows setting values at object creation.
- **Example**:
  ```csharp
  public class Employee
  {
      public string Name;
      public int Age;

      public Employee(string name, int age)
      {
          Name = name;
          Age = age;
      }
  }
  ```

---

### 3. **Static Constructor**
- **Definition**: A constructor declared with the `static` keyword.
- **Purpose**: Used to initialize static data or perform actions that need to be done only once.
- **Example**:
  ```csharp
  public class Logger
  {
      static Logger()
      {
          // Initialize log file, configuration etc.
      }
  }
  ```

---

### 4. **Copy Constructor**
- **Definition**: A constructor that creates a new object by copying data from another object.
- **Example**:
  ```csharp
  public class Product
  {
      public string Name;
      public double Price;

      public Product(Product other)
      {
          Name = other.Name;
          Price = other.Price;
      }
  }
  ```

---

### 5. **Private Constructor**
- **Purpose**: Used in singleton design patterns or to prevent instantiation.
- **Example**:
  ```csharp
  public class Utility
  {
      private Utility() { }

      public static void DoWork() { }
  }
  ```

---

### 6. **Primary Constructor (C# 12 and later)**
- **Definition**: Allows parameters to be passed directly into the class declaration.
- **Where to use**: Useful in small, immutable types like record types or simple models.
- **Example**:
  ```csharp
  public class Student(string name, int age)
  {
      public string Name { get; set; } = name;
      public int Age { get; set; } = age;
  }
  ```

---

## 🔸 Constructor Parameters and Inheritance

### How Constructor Parameters Work in Inheritance:

- **Base class constructor is called from the derived class using `base(...)` keyword.**
- You can pass parameters to the base constructor from the derived class.

**Example**:
```csharp
public class Animal
{
    public string Name;

    public Animal(string name)
    {
        Name = name;
    }
}

public class Dog : Animal
{
    public string Breed;

    public Dog(string name, string breed) : base(name)
    {
        Breed = breed;
    }
}
```

---

## 💡 Best Practices and Usage Scenarios

| Constructor Type       | When to Use                                    | Why Use It                                                                 |
|------------------------|------------------------------------------------|-----------------------------------------------------------------------------|
| Default                | For basic initialization                      | Keeps object usable without parameters                                     |
| Parameterized          | When data is available during object creation | Reduces number of lines for setting properties                             |
| Static                 | For one-time initialization                   | Useful for global configurations or settings                               |
| Copy                   | To duplicate an object                        | Avoids modifying original object                                           |
| Private                | Singleton patterns, utility classes           | Prevents unwanted object creation                                          |
| Primary (C# 12+)       | Small, simple, data-holding classes           | Reduces boilerplate, improves readability                                  |

---

## ✅ Summary

Constructors are fundamental for object initialization. By choosing the right type of constructor, you can write clean, efficient, and maintainable code. With C# 12, **Primary Constructors** make it easier than ever to create simple types.

  ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

