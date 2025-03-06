# C# Collections and Specialized Collections Interview Questions

## Beginner Level

### 1. What is the difference between `ArrayList` and `Array`?
**Asked by:** Infosys
**Answer:** `ArrayList` is a dynamic collection that can grow in size, whereas `Array` has a fixed size. `ArrayList` can store different data types, whereas `Array` is type-specific.

### 2. What are the key differences between `Hashtable` and `SortedList`?
**Asked by:** TCS
**Answer:** `Hashtable` stores key-value pairs without any order, whereas `SortedList` maintains key-value pairs in sorted order by key.

### 3. How does a `Queue` differ from a `Stack`?
**Asked by:** Wipro
**Answer:** `Queue` follows FIFO (First-In, First-Out), whereas `Stack` follows LIFO (Last-In, First-Out).

### 4. What is a `BitArray`, and when would you use it?
**Asked by:** Accenture
**Answer:** `BitArray` is used for memory-efficient storage of boolean values, useful in scenarios requiring large boolean flag collections.

### 5. Explain the difference between `ListDictionary` and `HybridDictionary`.
**Asked by:** Cognizant
**Answer:** `ListDictionary` is optimized for small collections, while `HybridDictionary` switches between `ListDictionary` (for small collections) and `Hashtable` (for large collections).

---

## Intermediate Level

### 6. Why is `ArrayList` not recommended for performance-critical applications?
**Asked by:** IBM
**Answer:** `ArrayList` involves boxing/unboxing for value types, leading to performance overhead compared to type-safe collections.

### 7. How does `NameValueCollection` differ from a `Hashtable`?
**Asked by:** Capgemini
**Answer:** `NameValueCollection` allows multiple values per key, whereas `Hashtable` only allows a single value per key.

### 8. What is `StringCollection`, and how is it different from `ArrayList`?
**Asked by:** Oracle
**Answer:** `StringCollection` is a strongly-typed collection for strings, whereas `ArrayList` can store any object type.

### 9. What happens if you try to add duplicate keys in a `SortedList`?
**Asked by:** HCL
**Answer:** `SortedList` does not allow duplicate keys and throws an exception if attempted.

### 10. How can you iterate through a `Hashtable`?
**Asked by:** Microsoft
**Answer:** You can iterate using `foreach` on `Keys`, `Values`, or `DictionaryEntry` objects.

---

## Expert Level

### 11. When should you use `HybridDictionary` over `Hashtable`?
**Asked by:** Google
**Answer:** `HybridDictionary` is useful when working with collections that start small but may grow significantly, as it automatically switches to `Hashtable`.

### 12. How does `TrimToSize()` improve performance in `ArrayList`?
**Asked by:** Amazon
**Answer:** `TrimToSize()` reduces memory overhead by adjusting capacity to match the actual number of elements.

### 13. What is the time complexity of lookup operations in `Hashtable` and `SortedList`?
**Asked by:** Facebook
**Answer:** `Hashtable` has O(1) average time complexity, whereas `SortedList` has O(log n) due to sorting.

### 14. How does `Stack` manage memory differently from `Queue`?
**Asked by:** Netflix
**Answer:** `Stack` uses LIFO, which helps in function call management (recursion), whereas `Queue` processes elements in the order they arrive.

### 15. Can `BitArray` be resized dynamically?
**Asked by:** Adobe
**Answer:** No, `BitArray` has a fixed size and does not support resizing after initialization.

---

## Best Practices
- Use **`Dictionary<TKey, TValue>` over `Hashtable`** for better performance and type safety.
- Prefer **`List<T>` over `ArrayList`** unless type-safety is not a concern.
- Use **`SortedDictionary<TKey, TValue>` over `SortedList`** for frequent insertions/deletions.
- Optimize memory by **calling `TrimToSize()` on resizable collections when needed**.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

