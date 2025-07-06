### 1. What is Garbage Collection in C#?

Garbage Collection automatically removes unused objects from memory to improve performance. It runs in the background so we don’t manage memory manually.

### 2. What is CLR?

CLR (Common Language Runtime) is the heart of .NET. It runs the code, handles memory, exceptions, and converts C# to machine code.

### 3. What is Boxing and Unboxing?

Boxing converts a value type to object. Unboxing extracts the value back. It's needed when working with collections like ArrayList.

### 4. What is Break and Continue in C#?

Break exits a loop completely. Continue skips the current loop and jumps to the next iteration.

### 5. What are Access Modifiers in C#?

They control visibility:

* public: accessible everywhere
* private: only in class
* protected: class and derived class
* internal: same assembly

### 6. What is JIT Compiler?

JIT (Just-In-Time) Compiler converts IL (Intermediate Language) code into machine code at runtime for execution.

### 7. What is Ref and Out Keyword?

Both pass by reference. Ref requires initialization before passing. Out can be set only inside the method.

### 8. Difference between Equals method and == operator?

Equals compares values. == compares references unless overridden. For strings, both check value.

### 9. Difference between String and StringBuilder?

String is immutable. StringBuilder is mutable and better for repeated string modifications.

### 10. Difference between .ToString() and Convert.ToString()?

ToString() throws error if null. Convert.ToString() safely returns empty string.

### 11. Constant vs ReadOnly?

Const is fixed at compile time. ReadOnly can be set at runtime in constructor.

### 12. Difference: throw class vs throw keyword?

Use `throw;` to preserve original error. `throw ex;` loses the stack trace.

### 13. Difference between IS and AS keyword?

IS checks type and returns true/false. AS tries to cast and returns null if it fails.

### 14. What is Enum?

Enum is a set of named constants like Days or Status codes.

### 15. What is Sealed Class?

A sealed class can’t be inherited. It protects implementation from being overridden.

### 16. Dispose vs Finalize?

Dispose is called manually to release resources. Finalize is called by GC automatically.

### 17. Use of Using keyword?

Used to automatically dispose objects like file or DB connections after use.

### 18. What is OOPS and 4 pillars?

OOPs = Object-Oriented Programming

1. Encapsulation – data hiding
2. Inheritance – reuse
3. Polymorphism – many forms
4. Abstraction – hide complexity

### 19. What is Interface?

An interface is a contract that enforces a class to implement its members.

### 20. What is Abstract Method?

A method without body in a base class that must be implemented in derived class.

### 21. Interface vs Abstract Class?

Interface has no implementation. Abstract class can have both abstract and concrete methods.

### 22. Method Overloading vs Overriding?

Overloading = same name, different parameters. Overriding = child class redefines parent method.

### 23. Array vs Collection?

Array has fixed size. Collection is dynamic and provides more features like add/remove/search.

### 24. Types of Collections in C#?

List, Dictionary, HashSet, Queue, Stack – used to manage groups of objects.

### 25. Namespace for Non-Generic Collection?

System.Collections

### 26. What is Resource in WPF?

Resources are reusable objects like styles, brushes, defined in XAML or code-behind.

### 27. What is Data Binding in WPF?

Data Binding connects UI with data source to keep UI updated automatically.

### 28. How to Pass Value Between Views?

Use constructor, shared ViewModel, or messaging like MVVM Light Messenger.

### 29. TempData vs ViewBag?

TempData persists between requests. ViewBag is for current request only.

### 30. Use of TabControl in WPF?

Displays content in multiple tabs like browser. Useful for organizing related content.

### 31. One Way vs Two Way Binding?

One way updates from data to UI. Two way syncs both directions.

### 32. Style vs Template?

Style defines look (color, font). Template defines structure/layout of controls.

### 33. Triggers in WPF and Types?

Triggers change UI based on events or property values.
Types: PropertyTrigger, DataTrigger, EventTrigger.

### 34. What is Middleware in .NET Core?

Middleware handles requests/responses like logging or authentication in the app pipeline.

### 35. What is Startup Class in .NET Core?

Defines app configuration and services. It's the entry setup of the app.

### 36. What is Dependency Injection?

It provides required objects automatically. Improves testability and code management.

### 37. What is Routing and Types?

Routing maps URLs to controllers.
Types: Conventional and Attribute Routing.

### 38. appsettings.json vs local.json?

appsettings.json holds configuration. You can override with appsettings.{env}.json for environments.

### 39. Identity Types in SQL Server?

IDENTITY columns auto-increment numbers. Also GUIDs used for unique IDs.

### 40. Joins in SQL Server?

* Inner Join: matching rows
* Left Join: all left + match right
* Right Join: all right + match left
* Full Join: all from both

### 41. What is Primary Key?

Primary key uniquely identifies each row and doesn’t allow null or duplicate.

### 42. Primary Key vs Foreign Key?

Primary Key = unique in table.
Foreign Key = links one table to another using PK.

### 43. Indexes in SQL Server?

Improve data retrieval speed.
Types: Clustered, Non-Clustered, Unique, Full Text.

### 44. Commit vs Rollback?

Commit saves changes. Rollback undoes the transaction.

### 45. Truncate vs Delete?

Truncate removes all rows fast. Delete removes selected rows and logs each one.

### 46. What is Stored Procedure?

Predefined SQL code saved in DB to perform tasks like insert or fetch.

### 47. How to Handle Exception in SP?

Use BEGIN TRY...CATCH to catch and handle errors inside stored procedure.

### 48. SP vs Function?

SP can have multiple outputs and change data.
Function returns one value and is used inside queries.

### 49. Union vs Union All?

Union removes duplicates. Union All keeps all rows.

### 50. SQL Aggregate Functions?

SUM, COUNT, AVG, MIN, MAX – used to calculate on columns.

### 51. Temp Table Types?

* Local Temp Table (#) – only for current session
* Global Temp Table (##) – visible to all
* Table Variable (@) – declared like variables

---
 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
