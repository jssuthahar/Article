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

 DemoAPI.Service

## Overview
The `DemoAPI.Service` namespace contains the `APICall` class, which provides methods for interacting with an external API. This class performs HTTP operations such as:
- **POST**: Save student data.
- **GET**: Retrieve student data.
- **PUT/PATCH**: Update student data.

## API Base URL
```
https://jsonplaceholder.typicode.com/
```

## Dependencies
This project uses `Newtonsoft.Json` for JSON serialization and `System.Net.Http` for making API calls.
Ensure you have the following package installed:
```sh
Install-Package Newtonsoft.Json
```

## Class: `APICall`
The `APICall` class contains methods to call the API.

### 1. Save Student Data (POST)
```csharp
public async Task<string> SaveStudent(Student # README - DemoAPI.Service

## Overview
The `DemoAPI.Service` namespace contains the `APICall` class, which provides methods for interacting with an external API. This class performs HTTP operations such as:
- **POST**: Save student data.
- **GET**: Retrieve student data.
- **PUT/PATCH**: Update student data.

## API Base URL
```
https://jsonplaceholder.typicode.com/
```

## Dependencies
This project uses `Newtonsoft.Json` for JSON serialization and `System.Net.Http` for making API calls.
Ensure you have the following package installed:
```sh
Install-Package Newtonsoft.Json
```

## Class: `APICall`
The `APICall` class contains methods to call the API.

### 1. Save Student Data (POST)
```csharp
public async Task<string> SaveStudent(Student stud)
{
    string APIUrl = "https://jsonplaceholder.typicode.com/posts";
    HttpClient client = new HttpClient();
    string json = JsonConvert.SerializeObject(stud);
    HttpContent content = new StringContent(json, Encoding.UTF8, "application/json");
    HttpResponseMessage response = await client.PostAsync(APIUrl, content);
    response.EnsureSuccessStatusCode();
    return await response.Content.ReadAsStringAsync();
}
```
**Usage:**
```csharp
APICall apiCall = new APICall();
Student student = new Student { Name = "John Doe", Age = 25 };
string response = await apiCall.SaveStudent(student);
```

### 2. Get Student Data (GET)
```csharp
public async Task<string> GetData()
{
    string APIUrl = "https://jsonplaceholder.typicode.com/posts/1";
    HttpClient client = new HttpClient();
    HttpResponseMessage response = await client.GetAsync(APIUrl);
    response.EnsureSuccessStatusCode();
    return await response.Content.ReadAsStringAsync();
}
```
**Usage:**
```csharp
string response = await apiCall.GetData();
```

### 3. Get Student Data with Parameter (GET)
```csharp
public async Task<string> GetDataWithParam(int id)
{
    string APIUrl = $"https://jsonplaceholder.typicode.com/posts/{id}";
    HttpClient client = new HttpClient();
    HttpResponseMessage response = await client.GetAsync(APIUrl);
    response.EnsureSuccessStatusCode();
    return await response.Content.ReadAsStringAsync();
}
```
**Usage:**
```csharp
int studentId = 1;
string response = await apiCall.GetDataWithParam(studentId);
```

---

## Adding PUT & PATCH Methods
The `PUT` and `PATCH` methods allow updating student data.

### 4. Update Student Data (PUT)
```csharp
public async Task<string> UpdateStudent(Student stud)
{
    string APIUrl = "https://jsonplaceholder.typicode.com/posts/1";
    HttpClient client = new HttpClient();
    string json = JsonConvert.SerializeObject(stud);
    HttpContent content = new StringContent(json, Encoding.UTF8, "application/json");
    HttpResponseMessage response = await client.PutAsync(APIUrl, content);
    response.EnsureSuccessStatusCode();
    return await response.Content.ReadAsStringAsync();
}
```
**Usage:**
```csharp
Student student = new Student { Name = "John Doe", Age = 26 };
string response = await apiCall.UpdateStudent(student);
```

### 5. Partially Update Student Data (PATCH)
```csharp
public async Task<string> PatchStudent(Student stud)
{
    string APIUrl = "https://jsonplaceholder.typicode.com/posts/1";
    HttpClient client = new HttpClient();
    string json = JsonConvert.SerializeObject(stud);
    HttpContent content = new StringContent(json, Encoding.UTF8, "application/json");
    HttpRequestMessage request = new HttpRequestMessage(new HttpMethod("PATCH"), APIUrl)
    {
        Content = content
    };
    HttpResponseMessage response = await client.SendAsync(request);
    response.EnsureSuccessStatusCode();
    return await response.Content.ReadAsStringAsync();
}
```
**Usage:**
```csharp
Student student = new Student { Age = 27 }; // Updating only age
string response = await apiCall.PatchStudent(student);
```

## Testing the API
You can test the API endpoints using **Postman** or **Swagger**.

### Example Request (POST)
```
POST https://jsonplaceholder.typicode.com/posts
Content-Type: application/json
{
    "title": "foo",
    "body": "bar",
    "userId": 1
}
```
### Example Request (GET)
```
GET https://jsonplaceholder.typicode.com/posts/1
```
### Example Request (GET with Parameter)
```
GET https://jsonplaceholder.typicode.com/posts/1
```
### Example Request (PUT)
```
PUT https://jsonplaceholder.typicode.com/posts/1
Content-Type: application/json
{
    "id": 1,
    "title": "foo",
    "body": "bar",
    "userId": 1
}
```
### Example Request (PATCH)
```
PATCH https://jsonplaceholder.typicode.com/posts/1
Content-Type: application/json
{
    "title": "updated title"
}
```

## Conclusion
This document provides an overview of the API calling methods within `DemoAPI.Service`. It covers how to call the API using **POST**, **GET**, **GET with parameter**, **PUT**, and **PATCH** methods with appropriate examples. The test API `https://jsonplaceholder.typicode.com/` has been used for demonstration.



 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
