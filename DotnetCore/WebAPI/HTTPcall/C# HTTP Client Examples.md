# 🌐 HTTP API Calls in C# (.NET)

This guide demonstrates how to call HTTP APIs in C# using `HttpClient`. It includes examples for:
- ✅ GET (with and without parameters)
- ✅ POST, PUT, PATCH (with body and headers)
- ✅ Query strings and custom headers

> `HttpClient` is the recommended way to interact with web APIs in modern .NET applications.

---

## 🛠️ Setup

```csharp
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
```

Create and reuse a single `HttpClient` instance:

```csharp
HttpClient client = new HttpClient();
```

---

## ✅ GET Request – No Parameters

```csharp
var response = await client.GetAsync("https://api.example.com/data");
var result = await response.Content.ReadAsStringAsync();
Console.WriteLine(result);
```

---

## ✅ GET Request – With Query String

```csharp
var url = "https://api.example.com/users?name=John&age=30";
var response = await client.GetAsync(url);
var result = await response.Content.ReadAsStringAsync();
Console.WriteLine(result);
```

---

## ✅ POST Request – With JSON Body

```csharp
var user = new { Name = "John", Age = 30 };
var json = JsonSerializer.Serialize(user);
var content = new StringContent(json, Encoding.UTF8, "application/json");

var response = await client.PostAsync("https://api.example.com/users", content);
var result = await response.Content.ReadAsStringAsync();
Console.WriteLine(result);
```

---

## ✅ PUT Request – Update Resource

```csharp
var userUpdate = new { Age = 31 };
var json = JsonSerializer.Serialize(userUpdate);
var content = new StringContent(json, Encoding.UTF8, "application/json");

var response = await client.PutAsync("https://api.example.com/users/1", content);
var result = await response.Content.ReadAsStringAsync();
Console.WriteLine(result);
```

---

## ✅ PATCH Request – Partial Update

```csharp
var patchData = new { Age = 32 };
var json = JsonSerializer.Serialize(patchData);
var content = new StringContent(json, Encoding.UTF8, "application/json");

var method = new HttpMethod("PATCH");
var request = new HttpRequestMessage(method, "https://api.example.com/users/1") {
    Content = content
};

var response = await client.SendAsync(request);
var result = await response.Content.ReadAsStringAsync();
Console.WriteLine(result);
```

---

## 🔐 Adding Headers (e.g., Auth Token)

```csharp
client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "your_token_here");
client.DefaultRequestHeaders.Add("X-Custom-Header", "value");
```

---

## 📚 Tips

- Always reuse `HttpClient` to avoid socket exhaustion.
- Use `HttpClientFactory` in ASP.NET Core for dependency injection.
- Handle exceptions with `try-catch` blocks and check `response.IsSuccessStatusCode`.

---

## 📎 References

- [Microsoft Docs – HttpClient](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpclient)
- [Using HTTPClientFactory in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/http-requests)

---

> ✅ This guide helps you interact with RESTful APIs using C# in a clean and reliable way.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
