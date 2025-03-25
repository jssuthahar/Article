# ASP.NET Core Web API - Different Ways to Pass Parameters

## 📌 Overview
ASP.NET Core Web API allows passing parameters in multiple ways. Choosing the correct method depends on the use case and HTTP method. This guide covers different ways to pass parameters in a Web API and their practical applications.

---

## 1️⃣ Query String Parameters (`FromQuery`)

### ✅ What is it?
- Used in `GET` requests.
- Parameters are passed in the URL after `?`.

### 📌 Example:
```csharp
[HttpGet("GetUser")]
public IActionResult GetUser(string name, int age)
{
    return Ok($"Name: {name}, Age: {age}");
}
```

### 🛠 How to Call:
```
GET /GetUser?name=John&age=30
```

### 📌 Real-world Use Case:
- Searching for a user by name.
- Filtering products by category and price.

---

## 2️⃣ Route Parameters (`FromRoute`)

### ✅ What is it?
- Defined in the route URL pattern.
- Used for identifying specific resources.

### 📌 Example:
```csharp
[HttpGet("GetUser/{id}")]
public IActionResult GetUser(int id)
{
    return Ok($"User ID: {id}");
}
```

### 🛠 How to Call:
```
GET /GetUser/5
```

### 📌 Real-world Use Case:
- Retrieving user details using their ID.
- Getting order details using order number.

---

## 3️⃣ Request Body (`FromBody`)

### ✅ What is it?
- Used in `POST`, `PUT`, or `PATCH` requests.
- Sends JSON data in the request body.

### 📌 Example:
```csharp
public class User
{
    public string Name { get; set; }
    public int Age { get; set; }
}

[HttpPost("CreateUser")]
public IActionResult CreateUser([FromBody] User user)
{
    return Ok($"Created User: {user.Name}, Age: {user.Age}");
}
```

### 🛠 How to Call:
```
POST /CreateUser
Content-Type: application/json

{
    "name": "John",
    "age": 30
}
```

### 📌 Real-world Use Case:
- Creating a new user.
- Updating profile details.

---

## 4️⃣ Form Data (`FromForm`)

### ✅ What is it?
- Used for handling `multipart/form-data` requests.
- Primarily for file uploads.

### 📌 Example:
```csharp
[HttpPost("Upload")]
public IActionResult Upload([FromForm] IFormFile file)
{
    return Ok($"Uploaded File: {file.FileName}");
}
```

### 🛠 How to Call:
```
POST /Upload
Content-Type: multipart/form-data
```

### 📌 Real-world Use Case:
- Uploading profile pictures.
- Submitting a contact form.

---

## 5️⃣ Headers (`FromHeader`)

### ✅ What is it?
- Extracts values from HTTP headers.

### 📌 Example:
```csharp
[HttpGet("GetClientInfo")]
public IActionResult GetClientInfo([FromHeader] string userAgent)
{
    return Ok($"User-Agent: {userAgent}");
}
```

### 🛠 How to Call:
```
GET /GetClientInfo
Headers: { "User-Agent": "Mozilla/5.0" }
```

### 📌 Real-world Use Case:
- Checking the user's device type.
- Authentication tokens in headers.

---

## 6️⃣ Complex Objects as Query Parameters

### ✅ What is it?
- Used for filtering, pagination, and searching.

### 📌 Example:
```csharp
public class FilterParams
{
    public string Name { get; set; }
    public int Age { get; set; }
}

[HttpGet("FilterUsers")]
public IActionResult FilterUsers([FromQuery] FilterParams filter)
{
    return Ok($"Filtering: Name={filter.Name}, Age={filter.Age}");
}
```

### 🛠 How to Call:
```
GET /FilterUsers?Name=John&Age=25
```

### 📌 Real-world Use Case:
- Advanced filtering of user lists.
- Paginating data in reports.

---

## 7️⃣ Dependency Injection (`FromServices`)

### ✅ What is it?
- Injects dependencies directly into an API method.

### 📌 Example:
```csharp
[HttpGet("GetService")]
public IActionResult GetService([FromServices] IConfiguration config)
{
    return Ok($"Config Value: {config["AppSettingKey"]}");
}
```

### 📌 Real-world Use Case:
- Fetching configuration settings.
- Accessing a database service.

---

## 🎯 Summary Table

| Parameter Type  | Example Attribute  | Used In    | Data Source |
|---------------|------------------|-----------|-------------|
| Query String | `[FromQuery]` | GET | URL Query |
| Route | `[FromRoute]` | GET | URL Path |
| Request Body | `[FromBody]` | POST, PUT | JSON Body |
| Form Data | `[FromForm]` | POST | Form Fields |
| Header | `[FromHeader]` | Any | HTTP Header |
| Dependency Injection | `[FromServices]` | Any | Services |

---

## 🎯 When to Use Each Approach?

| Scenario | Best Approach |
|----------|--------------|
| Fetching data using an ID | Route Parameter (`[FromRoute]`) |
| Searching, filtering, pagination | Query String (`[FromQuery]`) |
| Sending JSON data (POST/PUT) | Request Body (`[FromBody]`) |
| Uploading files | Form Data (`[FromForm]`) |
| Custom headers (like API keys) | Headers (`[FromHeader]`) |
| Accessing services | Dependency Injection (`[FromServices]`) |

---
## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)


