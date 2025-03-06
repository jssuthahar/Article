# C# Collections and Specialized Collections

## Overview
C# provides various collection classes in `System.Collections` and `System.Collections.Specialized`. These collections serve different purposes based on performance, flexibility, and specialization.

### Key Differences
| Collection Type | Namespace | Use Case | Performance | 
|---------------|------------|----------|------------|
| `ArrayList` | `System.Collections` | Dynamic-size array with multiple data types | Slower than generic lists due to boxing/unboxing |
| `Hashtable` | `System.Collections` | Key-value pairs with unordered storage | Lookup is fast, but iteration is unordered |
| `Stack` | `System.Collections` | LIFO (Last-In, First-Out) collection | Fast push/pop operations |
| `Queue` | `System.Collections` | FIFO (First-In, First-Out) collection | Fast enqueue/dequeue operations |
| `SortedList` | `System.Collections` | Key-value pairs sorted by key | Slower than Dictionary but maintains order |
| `BitArray` | `System.Collections` | Compact storage of Boolean values | Efficient for memory optimization |
| `ListDictionary` | `System.Collections.Specialized` | Optimized for small collections | Faster than `Hashtable` for small datasets |
| `HybridDictionary` | `System.Collections.Specialized` | Uses `ListDictionary` for small, `Hashtable` for large | Adaptive and efficient |
| `NameValueCollection` | `System.Collections.Specialized` | Stores key-value pairs, allowing multiple values per key | Useful for handling multiple values per key |
| `StringCollection` | `System.Collections.Specialized` | Collection optimized for strings | Simpler than `List<string>` |
| `StringDictionary` | `System.Collections.Specialized` | Hashtable optimized for string keys | Case-insensitive keys |

## When to Use Each Collection
- **Use `List<T>` instead of `ArrayList`** for better performance and type safety.
- **Use `Dictionary<TKey, TValue>` instead of `Hashtable`** when type safety is required.
- **Use `Queue<T>` and `Stack<T>`** for optimized FIFO and LIFO operations.
- **Use `SortedDictionary<TKey, TValue>` instead of `SortedList`** for better performance in dynamic data.
- **Use `BitArray` for boolean flags** when memory optimization is critical.
- **Use `HybridDictionary`** when working with datasets that may grow dynamically.
- **Use `NameValueCollection`** when needing multiple values per key.
- **Use `StringCollection` and `StringDictionary`** for string-specific operations.

## Code Examples with Explanation
### ArrayList
```csharp
using System;
using System.Collections;

class Program
{
    static void Main()
    {
        // ArrayList: A dynamically resizable collection of objects
        ArrayList arrayList = new ArrayList();
        
        // Adding different types of elements
        arrayList.Add("Vijay");  // String
        arrayList.Add(1);        // Integer
        arrayList.Add(true);     // Boolean
        
        // Removing an element
        arrayList.Remove("Vijay");
        
        // Iterating through elements
        foreach (var item in arrayList)
        {
            Console.WriteLine(item);
        }
    }
}
```
### Hashtable
```csharp
using System;
using System.Collections;

class Program
{
    static void Main()
    {
        // Hashtable: Stores key-value pairs with no specific order
        Hashtable hashtable = new Hashtable();
        
        // Adding key-value pairs
        hashtable.Add("name", "Suganthi");
        hashtable.Add("age", 21);
        
        // Retrieving a value by key
        Console.WriteLine("Age: " + hashtable["age"]);
        
        // Removing a key-value pair
        hashtable.Remove("age");
    }
}
```
### Stack (LIFO)
```csharp
using System;
using System.Collections;

class Program
{
    static void Main()
    {
        // Stack: Last-In, First-Out (LIFO) collection
        Stack stack = new Stack();
        
        // Pushing elements onto the stack
        stack.Push("Vijay");
        stack.Push("Karthi");
        
        // Peeking at the top element
        Console.WriteLine("Top element: " + stack.Peek());
        
        // Popping an element (removes top element)
        stack.Pop();
    }
}
```
### Queue (FIFO)
```csharp
using System;
using System.Collections;

class Program
{
    static void Main()
    {
        // Queue: First-In, First-Out (FIFO) collection
        Queue queue = new Queue();
        
        // Enqueueing elements
        queue.Enqueue("Vignesh");
        queue.Enqueue("Gopal");
        
        // Peeking at the front element
        Console.WriteLine("Front element: " + queue.Peek());
        
        // Dequeueing (removes front element)
        queue.Dequeue();
    }
}
```
### SortedList
```csharp
using System;
using System.Collections;

class Program
{
    static void Main()
    {
        // SortedList: Stores key-value pairs sorted by key
        SortedList sortedList = new SortedList();
        
        sortedList.Add("A", "Value A");
        sortedList.Add("B", "Value B");
        
        foreach (DictionaryEntry item in sortedList)
        {
            Console.WriteLine(item.Key + ": " + item.Value);
        }
    }
}
```
### BitArray
```csharp
using System;
using System.Collections;

class Program
{
    static void Main()
    {
        // BitArray: Optimized storage of boolean values
        BitArray bitArray = new BitArray(5);
        bitArray.Set(0, true);
        bitArray.Set(1, false);
        
        foreach (bool bit in bitArray)
        {
            Console.WriteLine(bit);
        }
    }
}
```
### NameValueCollection
```csharp
using System;
using System.Collections.Specialized;

class Program
{
    static void Main()
    {
        // NameValueCollection: Allows multiple values for a single key
        NameValueCollection nameValueCollection = new NameValueCollection();
        nameValueCollection.Add("Name", "Karthi");
        nameValueCollection.Add("Name", "Gopal");
        
        foreach (string key in nameValueCollection)
        {
            Console.WriteLine(key + ": " + nameValueCollection[key]);
        }
    }
}
```

## Best Practices
1. Prefer **generic collections** (e.g., `List<T>`, `Dictionary<TKey, TValue>`) over non-generic collections (`ArrayList`, `Hashtable`).
2. Use **`SortedDictionary<TKey, TValue>` instead of `SortedList`** for frequent insert/delete operations.
3. Use **`HybridDictionary`** when collection size fluctuates significantly.
4. **Trim unused capacity** in collections to optimize memory (`TrimToSize()` in `ArrayList`).
5. **Use `Dictionary<TKey, TValue>` over `Hashtable`** for better type safety and performance.

By following these best practices, you can select the most efficient collection for your use case and improve performance in C# applications.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
