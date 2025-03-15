# Generic Collections in C#

## Overview
Generic collections in C# provide type safety, performance benefits, and flexibility compared to non-generic collections. They help in reducing boxing/unboxing overhead and prevent runtime type mismatches.

## List of Generic Collections
Below is a list of common generic collections available in C# along with their real-time use cases, performance characteristics, and best practices.

### 1. **Dictionary<TKey, TValue>**
- **Description**: A collection of key-value pairs that allows fast lookups.
- **Real-time Example**: Storing employee IDs and names.
- **Performance**: O(1) for lookup, O(n) for iteration.
- **Good Approach**:
  - Use when frequent key-based lookups are required.
  - Ensure keys are unique.
  
```csharp
Dictionary<int, string> employees = new Dictionary<int, string>();
employees.Add(1, "Suganthi");
employees.Add(2, "Nandhini");
employees.Add(3, "Sujatha");

string name = employees[1]; // Retrieves "Suganthi"
```

---
### 2. **SortedDictionary<TKey, TValue>**
- **Description**: Similar to Dictionary but maintains items in sorted order by key.
- **Real-time Example**: Maintaining an ordered list of customers.
- **Performance**: O(log n) for lookup and insertion.
- **Good Approach**:
  - Use when ordered keys are needed.
  - Avoid if frequent insertions and deletions are expected.
  
```csharp
SortedDictionary<int, Register> customers = new SortedDictionary<int, Register>();
customers.Add(1, new Register { CustomerID = 10 });
```

---
### 3. **SortedList<TKey, TValue>**
- **Description**: Similar to SortedDictionary but uses a list internally.
- **Real-time Example**: Keeping a sorted list of students.
- **Performance**: O(log n) for lookup, O(n) for insertion.
- **Good Approach**:
  - Use when maintaining an ordered collection of key-value pairs with fewer insertions.
  
```csharp
SortedList<int, string> students = new SortedList<int, string>();
```

---
### 4. **Stack<T>**
- **Description**: A last-in, first-out (LIFO) collection.
- **Real-time Example**: Implementing undo-redo functionality.
- **Performance**: O(1) for push and pop.
- **Good Approach**:
  - Use when only last-in-first-out operations are needed.
  
```csharp
Stack<Register> stack = new Stack<Register>();
stack.Push(new Register { CustomerID = 1 });
```

---
### 5. **Queue<T>**
- **Description**: A first-in, first-out (FIFO) collection.
- **Real-time Example**: Task scheduling in a printing queue.
- **Performance**: O(1) for enqueue and dequeue.
- **Good Approach**:
  - Use when processing elements in order.
  
```csharp
Queue<int> queue = new Queue<int>();
queue.Enqueue(1);
```

---
### 6. **HashSet<T>**
- **Description**: A collection that stores unique elements without maintaining order.
- **Real-time Example**: Keeping track of unique customer IDs.
- **Performance**: O(1) for insertion and lookup.
- **Good Approach**:
  - Use when duplicates should be avoided.
  
```csharp
HashSet<int> uniqueNumbers = new HashSet<int>();
uniqueNumbers.Add(1);
uniqueNumbers.Add(2);
```

---
### 7. **SortedSet<T>**
- **Description**: A sorted collection of unique elements.
- **Real-time Example**: Maintaining sorted unique rankings.
- **Performance**: O(log n) for insertion and lookup.
- **Good Approach**:
  - Use when ordering and uniqueness are required.
  
```csharp
SortedSet<int> sortedNumbers = new SortedSet<int>();
sortedNumbers.Add(1);
sortedNumbers.Add(2);
```

---
### 8. **LinkedList<T>**
- **Description**: A doubly linked list for fast insertions and deletions.
- **Real-time Example**: Implementing navigation history.
- **Performance**: O(1) for insertions/deletions if the node is known, O(n) for searching.
- **Good Approach**:
  - Use when frequent insertions/deletions are required.
  
```csharp
LinkedList<int> linkedList = new LinkedList<int>();
linkedList.AddFirst(1);
linkedList.AddFirst(2);
LinkedListNode<int> find = linkedList.Find(2);
linkedList.AddBefore(find, 10);
linkedList.AddAfter(find, 10);
```

---
## Interview Questions and Answers

### 1. What is the difference between List<T> and LinkedList<T>?
**Answer:** List<T> is a dynamic array-based collection, providing O(1) access time but O(n) insertion/deletion in the middle. LinkedList<T> is a doubly linked list that allows fast O(1) insertions/deletions but slower O(n) access time.

### 2. When should you use a HashSet<T> instead of a List<T>?
**Answer:** Use HashSet<T> when you need to store unique elements and require fast O(1) lookup times, whereas List<T> allows duplicates and has O(n) lookup time.

### 3. What is the key difference between Dictionary<TKey, TValue> and SortedDictionary<TKey, TValue>?
**Answer:** Dictionary<TKey, TValue> provides fast O(1) lookups, while SortedDictionary<TKey, TValue> maintains sorted keys but has O(log n) lookup time due to its tree-based structure.


 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
