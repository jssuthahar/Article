# C# HTTP Client Examples

This repository provides examples of making `GET`, `POST`, and `PATCH` requests in C# using `HttpClient`.

## Prerequisites
- .NET SDK installed
- Basic knowledge of C#
- Internet connection (for API calls)
- Newtonsoft.Json package (for JSON serialization)

To install Newtonsoft.Json, run:
```sh
dotnet add package Newtonsoft.Json
```

## 1. GET Request with Parameters
A `GET` request fetches data from a server. Parameters are passed as query strings in the URL.

```csharp
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        using HttpClient client = new HttpClient();
        string baseUrl = "https://jsonplaceholder.typicode.com/posts";
        int id = 1;

        HttpResponseMessage response = await client.GetAsync($"{baseUrl}/{id}");
        
        if (response.IsSuccessStatusCode)
        {
            string responseData = await response.Content.ReadAsStringAsync();
            Console.WriteLine(responseData);
        }
    }
}
```

## 2. POST Request with Parameters
A `POST` request sends data to a server.

```csharp
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

class Program
{
    static async Task Main()
    {
        using HttpClient client = new HttpClient();
        string baseUrl = "https://jsonplaceholder.typicode.com/posts";
        
        var data = new
        {
            title = "foo",
            body = "bar",
            userId = 1
        };

        string json = JsonConvert.SerializeObject(data);
        StringContent content = new StringContent(json, Encoding.UTF8, "application/json");

        HttpResponseMessage response = await client.PostAsync(baseUrl, content);

        if (response.IsSuccessStatusCode)
        {
            string responseData = await response.Content.ReadAsStringAsync();
            Console.WriteLine(responseData);
        }
    }
}
```

## 3. PATCH Request with Parameters
A `PATCH` request updates partial data.

```csharp
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

class Program
{
    static async Task Main()
    {
        using HttpClient client = new HttpClient();
        string baseUrl = "https://jsonplaceholder.typicode.com/posts/1";

        var updateData = new
        {
            title = "Updated Title"
        };

        string json = JsonConvert.SerializeObject(updateData);
        StringContent content = new StringContent(json, Encoding.UTF8, "application/json");

        HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Patch, baseUrl)
        {
            Content = content
        };

        HttpResponseMessage response = await client.SendAsync(request);

        if (response.IsSuccessStatusCode)
        {
            string responseData = await response.Content.ReadAsStringAsync();
            Console.WriteLine(responseData);
        }
    }
}
```

## Key Takeaways
- **GET** → Parameters in the URL (`?id=1` or `/1`).
- **POST** → Send parameters in the request body as JSON.
- **PATCH** → Send partial data in the request body.


