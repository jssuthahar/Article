# Exception Handling in C#

Exception handling is a mechanism in C# to handle runtime errors, allowing the program to continue execution without crashing. It uses `try`, `catch`, `throw`, and `finally` blocks to gracefully manage exceptions.

---

## 🔹 Syntax

```csharp
try
{
    // Code that may throw an exception
}
catch (ExceptionType1 ex1)
{
    // Handle ExceptionType1
}
catch (ExceptionType2 ex2)
{
    // Handle ExceptionType2
}
finally
{
    // Code that will always execute
}
````

---

## 🔸 try Block

The `try` block contains code that might throw an exception during execution. Only one `try` block is allowed, and it must be followed by at least one `catch` or a `finally`.

---

## 🔸 catch Block

The `catch` block handles specific exceptions thrown in the `try` block. You can use:

* A specific exception type (e.g., `FormatException`)
* A general exception (`Exception`) to catch all types
* Multiple `catch` blocks to handle different exceptions separately

---

## 🔸 Multiple Catch Blocks

Each `catch` block is checked from top to bottom. The **most specific exceptions** should be listed first. The **base `Exception` class** should be last to avoid unreachable code.

---

## 🔸 finally Block

The `finally` block is always executed, **regardless of whether an exception occurred or not**. It is typically used for cleanup operations like closing files, releasing resources, etc.

---

## 🔸 throw Keyword

The `throw` keyword is used in two common ways in C#:

### 1. **To throw a new exception**

You can use `throw` to raise a new exception, often in validation or business logic.

```csharp
if (age < 0)
{
    throw new ArgumentOutOfRangeException("age", "Age cannot be negative");
}
```

### 2. **To re-throw a caught exception**

If you catch an exception but want to pass it up the call stack, you can re-throw it:

#### ✅ Best Practice:

```csharp
catch (Exception ex)
{
    // log if needed
    throw; // rethrows original exception with original stack trace
}
```

#### 🚫 Avoid:

```csharp
catch (Exception ex)
{
    throw ex; // resets the stack trace — bad for debugging
}
```

---

## ✅ Best Practices

* Catch only the exceptions you can handle.
* Use specific exception types when possible.
* Avoid swallowing exceptions with empty `catch` blocks.
* Always clean up resources in the `finally` block or use `using` statements.
* Use `throw;` instead of `throw ex;` to preserve stack trace.
* Log exceptions for debugging and maintenance.

---

## 📌 Summary

| Block   | Purpose                            |
| ------- | ---------------------------------- |
| try     | Code that might throw an exception |
| catch   | Handle the exception               |
| finally | Cleanup actions (always runs)      |
| throw   | Raise a new exception or re-throw  |

---

## 💬 Interview Questions and Answers

### 1. **What is the purpose of exception handling in C#?**

**Answer:**
To gracefully handle runtime errors without crashing the program. It allows developers to catch, log, and respond to errors appropriately using `try`, `catch`, and `finally`.

---

### 2. **Can we have multiple catch blocks for a single try block?**

**Answer:**
Yes. Multiple `catch` blocks are allowed, and each can handle a specific exception type. They are evaluated in order from top to bottom.

---

### 3. **What happens if no catch block matches the thrown exception?**

**Answer:**
If no matching `catch` block is found, the runtime will terminate the application and display an unhandled exception error.

---

### 4. **Is the finally block mandatory?**

**Answer:**
No, `finally` is optional. But if it's present, it will always execute, whether an exception occurred or not.

---

### 5. **Can we use a catch block without a parameter?**

**Answer:**
Yes. You can write `catch { ... }` to catch all exceptions, but it's not a best practice because it hides the exception type and message.

---

### 6. **What is the difference between throw and throw ex?**

**Answer:**

* `throw;` preserves the original stack trace and rethrows the current exception.
* `throw ex;` resets the stack trace, which makes debugging harder.

---

### 7. **Can a finally block override a return statement in try or catch?**

**Answer:**
Yes. If a `finally` block contains a `return` statement, it will override any `return` from the `try` or `catch` blocks.

---

### 8. **What is a nested try-catch block?**

**Answer:**
A try-catch block placed inside another try or catch block. It's used when different parts of code require their own exception handling.

---

### 9. **Can we have a try block without a catch block?**

**Answer:**
Yes, but only if it has a `finally` block. Either a `catch`, a `finally`, or both are required after a `try` block.

---

### 10. **What is the base class for all exceptions in C#?**

**Answer:**
`System.Exception` is the base class for all exceptions in C#.



## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

