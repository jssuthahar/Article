# Stack Memory vs. Heap Memory, Value Type vs. Reference Type, Mutable vs. Immutable, and StringBuilder

## Stack Memory vs. Heap Memory

### Stack Memory:
- Stores value types and method call details.
- Works in LIFO (Last-In-First-Out) order.
- Memory is automatically allocated and deallocated when a function call is completed.
- Faster access compared to heap memory.
- Example:
  ```csharp
  int a = 10;  // Stored in stack memory
  int b = a;   // b is a copy of a, so changing b does not affect a.
  ```

### Heap Memory:
- Stores reference types (objects, arrays, classes, etc.).
- Memory is managed by the Garbage Collector.
- Objects remain in memory until they are no longer referenced.
- Slower access compared to stack memory.
- Example:
  ```csharp
  string str1 = "Hello";
  string str2 = str1;
  str2 = "World"; // str1 remains "Hello", str2 is now "World"
  ```

### Diagram:
```
Stack Memory:       Heap Memory:
------------------  ----------------
a = 10              str1 -> "Hello"
b = a               str2 -> "World"
```

## Value Type vs. Reference Type

### Value Type:
- Stores actual data.
- Located in stack memory.
- Assignment creates a copy.
- Examples: int, float, char, struct, bool.
- Example:
  ```csharp
  int x = 5;
  int y = x; // y gets a copy of x
  y = 10;    // x remains 5, y is now 10
  ```

### Reference Type:
- Stores a reference to the data (not the actual data).
- Located in heap memory.
- Assignment copies the reference, not the data.
- Example:
  ```csharp
  string str1 = "Hello";
  string str2 = str1;
  str2 = "World"; // str1 remains "Hello", str2 is now "World"
  ```

## Mutable vs. Immutable

### Mutable:
- Can be modified after creation.
- Examples: StringBuilder, List<T>, Dictionary<T,T>.
- Example:
  ```csharp
  StringBuilder sb = new StringBuilder("Hello");
  sb.Append(" World"); // Changes original object
  Console.WriteLine(sb); // Output: "Hello World"
  ```

### Immutable:
- Cannot be modified after creation.
- A new instance is created when modified.
- Examples: string, int, double.
- Example:
  ```csharp
  string str1 = "Hello";
  string str2 = str1 + " World"; // New object created
  ```

## StringBuilder vs. String
- `string` is immutable; every modification creates a new object.
- `StringBuilder` is mutable; changes occur within the same object.
- Example:
  ```csharp
  // Using string (inefficient)
  string str = "Hello";
  str += " World"; // Creates new objects
  
  // Using StringBuilder (efficient)
  StringBuilder sb = new StringBuilder("Hello");
  sb.Append(" World"); // Modifies same object
  ```

## Sample Code with StringBuilder
```csharp
StringBuilder ostring = new StringBuilder();
ostring.Append(txtusername.Text);
ostring.Append("|");
ostring.Append(pwpassword.Password);
ostring.Append("|");
ostring.Append(txtage.Text);
ostring.Append("|");
ostring.Append(txteducation.Text);

// Using string (less efficient)
string content = txtusername.Text + "|" + pwpassword.Password + "|" + txtage.Text + "|" + txteducation.Text;

string filepath = Path.Combine(userfolder, txtusername.Text + ".txt");
File.WriteAllText(filepath, ostring.ToString());
```

## Interview Questions and Answers

1. **What is the difference between Stack and Heap memory?**
   - Stack stores value types and method calls, while heap stores reference types and dynamically allocated objects.
   - Stack is faster, but heap is managed by the Garbage Collector.

2. **What happens when a reference type is assigned to another variable?**
   - Both variables refer to the same memory location.
   - Modifying one variable affects the other.

3. **Why is `StringBuilder` preferred over `string` for concatenation?**
   - `StringBuilder` is mutable, making operations more efficient compared to immutable `string`, which creates a new object on modification.

4. **What are examples of mutable and immutable types?**
   - Mutable: List<T>, StringBuilder, Dictionary<T, T>
   - Immutable: string, int, double

5. **What happens if you modify a string?**
   - A new string object is created because strings are immutable.

6. **What is the difference between Value Type and Reference Type?**
   - Value types store data directly, while reference types store references to data.
   - Value types are stored in stack memory, whereas reference types are stored in heap memory.


## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)


