
# 📘 Understanding Performance in C# Generic Collections

This guide explains the meaning of `O(1)`, `O(n)`, and `O(log n)` in simple terms with easy examples using C# generic collections.

---

## 💡 What is Big-O?

Big-O notation tells how **fast** an operation is when the **collection gets bigger**.

---

## ✅ Easy Examples with Daily Life

### 1. **O(1) — Constant Time**
🕒 Always takes the same time, no matter how many items you have.

**Example: Dictionary**
```csharp
var dict = new Dictionary<int, string>();
dict.Add(1, "Apple");
dict.Add(2, "Banana");

string fruit = dict[2]; // O(1) - directly goes to item 2
```

🎯 Use when: You want to get something quickly using a key.

---

### 2. **O(n) — Linear Time**
🕒 Time grows as the number of items grows.

**Example: List**
```csharp
var list = new List<string>() { "A", "B", "C", "D" };
bool found = list.Contains("D"); // O(n) - it checks one by one
```

🎯 Use when: You don’t have a key, so it must check all items.

---

### 3. **O(log n) — Logarithmic Time**
🕒 Faster than O(n), slower than O(1). It cuts the search space in half each time.

**Example: SortedDictionary**
```csharp
var sortedDict = new SortedDictionary<int, string>();
sortedDict.Add(10, "X");
sortedDict.Add(20, "Y");
sortedDict.Add(30, "Z");

string val = sortedDict[20]; // O(log n) - uses a tree internally
```

🎯 Use when: You need data in **sorted order** and still want good performance.

---

## 💬 Summary Table

| Collection            | Operation               | Time (Big-O) | Simple Meaning                           |
|-----------------------|-------------------------|--------------|-------------------------------------------|
| Dictionary            | `dict[key]`             | O(1)         | Super fast — directly goes to the item    |
| List                  | `list.Contains(item)`   | O(n)         | Checks every item — slower as list grows  |
| SortedDictionary      | `dict[key]`             | O(log n)     | Pretty fast — uses binary tree            |
| Stack / Queue         | Push / Pop / Enqueue    | O(1)         | Very fast — works at one end              |
| LinkedList            | Insert if node is known | O(1)         | Fast if you know where to insert          |
| LinkedList            | Search item             | O(n)         | Must check one by one                     |
| HashSet               | Add / Contains          | O(1)         | Very fast and prevents duplicates         |
| SortedSet             | Add / Contains          | O(log n)     | Fast with sorted order and uniqueness     |

---

🧠 **Tip:** Use `O(1)` collections when you want **fast access**, and `O(log n)` collections when you want **sorted data with good speed**.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

