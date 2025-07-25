

### ✅  Understanding `async` and `await` vs Synchronous Code

````markdown
# ⚙️ Async and Await in C#

`async` and `await` are key features in C# that allow you to write **non-blocking**, **asynchronous code** that is easier to read and maintain. They help prevent your application from freezing or becoming unresponsive during long-running tasks, such as I/O operations or API calls.

---

## 🔁 Synchronous vs Asynchronous – The Difference

| Feature              | Synchronous                           | Asynchronous (`async`/`await`)              |
|----------------------|----------------------------------------|---------------------------------------------|
| Blocking             | Yes – blocks execution until done     | No – allows other operations to run         |
| UI Responsiveness    | Freezes UI during long tasks           | UI remains responsive                       |
| Performance          | Slower under high I/O workloads        | Faster and scalable                         |
| Code Complexity      | Simple but limited                     | Slightly complex but more powerful          |

---

## 🚀 Real-world Use Case

### Use Case: Calling an API to fetch data

Imagine a **mobile or web app** that fetches weather data from an external API.  
- With **synchronous code**, the app freezes while waiting for a response.
- With **asynchronous code**, the request runs in the background and the app remains responsive.

---

## ✅ Code Demo – Synchronous vs Asynchronous

### 🔴 Synchronous Example

```csharp
public string GetWeather()
{
    var client = new HttpClient();
    var result = client.GetStringAsync("https://api.weather.com/today").Result; // Blocks here
    return result;
}

// Usage
Console.WriteLine(GetWeather()); // UI or thread is blocked until this finishes
````

### ✅ Asynchronous Example with `async`/`await`

```csharp
public async Task<string> GetWeatherAsync()
{
    var client = new HttpClient();
    var result = await client.GetStringAsync("https://api.weather.com/today"); // Non-blocking
    return result;
}

// Usage
Console.WriteLine(await GetWeatherAsync()); // Await the result asynchronously
```

> 🔍 In the async version, the program continues to run other tasks while waiting for the API call to complete.

---

## 🧑‍💻 Real-Time Example: UI Application

### ❌ Without `async`/`await`

```csharp
private void btnFetch_Click(object sender, EventArgs e)
{
    var data = GetWeather(); // Blocks UI
    lblResult.Text = data;
}
```

### ✅ With `async`/`await`

```csharp
private async void btnFetch_Click(object sender, EventArgs e)
{
    var data = await GetWeatherAsync(); // Doesn't block UI
    lblResult.Text = data;
}
```

---

## 🧠 Why Use Async/Await?

* Prevents UI freezing in desktop/mobile apps.
* Improves scalability in web servers (ASP.NET).
* Handles thousands of I/O operations efficiently.
* Works well with databases, APIs, and file systems.

---

## 🔗 Further Reading

* [Microsoft Docs – async and await](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/)
* [Task-based Asynchronous Pattern (TAP)](https://learn.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap)

---

> ✅ `async` and `await` help you write clean, maintainable, non-blocking code that improves app performance and user experience.

