# Consuming APIs with HttpClient in .NET Core

## Introduction

`HttpClient` is a powerful and flexible class in .NET used to send HTTP requests and receive HTTP responses from web services. This guide explains how to consume APIs using `HttpClient` with a focus on `async` and `await` for asynchronous programming.

## Why Use `HttpClient`?

- Supports asynchronous operations.
- Handles HTTP requests efficiently.
- Provides built-in methods for sending GET, POST, PUT, DELETE requests.
- Manages network resources properly.

## Understanding `async` and `await`

### What is `async`?
The `async` keyword in C# allows a method to run asynchronously without blocking the main execution thread.

### What is `await`?
The `await` keyword pauses the execution of an `async` method until the awaited task is completed. This helps in writing non-blocking code.

## Setting Up `HttpClient`

First, install the required package if necessary:
```sh
dotnet add package System.Net.Http
```

### Using `HttpClient` in .NET Core

The following example demonstrates a simple GET request using `HttpClient`:

```csharp
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    private static readonly HttpClient client = new HttpClient();

    static async Task Main()
    {
        string url = "https://jsonplaceholder.typicode.com/posts/1";
        string response = await FetchDataAsync(url);
        Console.WriteLine(response);
    }

    static async Task<string> FetchDataAsync(string url)
    {
        HttpResponseMessage response = await client.GetAsync(url);
        response.EnsureSuccessStatusCode(); // Throws an exception if the response is not successful
        return await response.Content.ReadAsStringAsync();
    }
}
```

## Explanation of `async` and `await` in `HttpClient`

1. **`async Task<string> FetchDataAsync(string url)`**
   - The method is marked as `async`, meaning it runs asynchronously.
   - It returns a `Task<string>` because it performs an asynchronous operation.

2. **`await client.GetAsync(url)`**
   - `GetAsync(url)` sends a GET request asynchronously.
   - The `await` keyword ensures the program waits for the request to complete before proceeding.

3. **`response.EnsureSuccessStatusCode()`**
   - This checks if the response was successful (status code 200-299).
   - If not, it throws an exception.

4. **`await response.Content.ReadAsStringAsync()`**
   - Reads the response content asynchronously as a string.

## Using `HttpClient` for POST Requests

The following example demonstrates how to send a POST request:

```csharp
using System;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

class Program
{
    private static readonly HttpClient client = new HttpClient();

    static async Task Main()
    {
        string url = "https://jsonplaceholder.typicode.com/posts";
        var postData = new { title = "foo", body = "bar", userId = 1 };
        string response = await PostDataAsync(url, postData);
        Console.WriteLine(response);
    }

    static async Task<string> PostDataAsync(string url, object data)
    {
        string json = JsonSerializer.Serialize(data);
        HttpContent content = new StringContent(json, Encoding.UTF8, "application/json");

        HttpResponseMessage response = await client.PostAsync(url, content);
        response.EnsureSuccessStatusCode();
        return await response.Content.ReadAsStringAsync();
    }
}
```

### Explanation
- Converts the object `data` into JSON format using `JsonSerializer.Serialize()`.
- Creates `HttpContent` with `StringContent()`.
- Sends the data asynchronously using `PostAsync()`.

## Best Practices for Using `HttpClient`

1. **Use a Singleton or `IHttpClientFactory`**
   - Avoid creating multiple instances of `HttpClient` to prevent socket exhaustion.
   - Use dependency injection to manage `HttpClient`.

2. **Handle Exceptions**
   - Always use `try-catch` to handle potential HTTP request failures.

3. **Use `ConfigureAwait(false)` in Library Code**
   - Helps improve performance in certain cases when running tasks.

4. **Dispose `HttpClient` Properly**
   - Avoid disposing `HttpClient` frequently; reuse a single instance.

## Conclusion

- `HttpClient` allows efficient communication with APIs.
- Using `async` and `await` prevents blocking operations.
- Proper error handling and best practices enhance reliability.

By following these guidelines, you can seamlessly integrate API calls into your .NET applications while ensuring optimal performance and resource management.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
