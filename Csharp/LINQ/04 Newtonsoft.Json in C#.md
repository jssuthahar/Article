# Guide to Using Newtonsoft.Json in C#

## What is JSON?
JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy to read and write for both humans and machines. It is widely used for transmitting data between a server and a client in web applications.

### Example JSON Data:
```json
{
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com",
    "skills": ["C#", "ASP.NET", "SQL"]
}
```

## Why Do We Need JSON?
1. **Data Exchange Format:** JSON is commonly used to transfer data between a server and a client in web APIs and mobile applications.
2. **Lightweight:** Compared to XML, JSON is smaller in size and faster to parse.
3. **Easy to Read and Write:** JSON is human-readable and easier to understand than other formats like XML.
4. **Supported by Multiple Languages:** JSON is widely supported in programming languages such as C#, Java, Python, JavaScript, and more.
5. **Used in Web Services:** Modern APIs use JSON for request and response data (e.g., RESTful APIs).
6. **Database Storage:** NoSQL databases like MongoDB use JSON-like formats for data storage.

## Introduction
Newtonsoft.Json is a popular JSON framework for .NET used for serializing and deserializing JSON data in C# applications. It is widely used in ASP.NET Core, console applications, and other .NET projects.

## Installation
To install Newtonsoft.Json, use NuGet Package Manager:

### Using .NET CLI:
```sh
 dotnet add package Newtonsoft.Json
```

### Using Package Manager Console:
```sh
Install-Package Newtonsoft.Json
```

## Serializing Objects to JSON
Serialization is the process of converting a C# object into a JSON string.

### Example:
```csharp
using Newtonsoft.Json;
using System;

class Program
{
    static void Main()
    {
        var person = new Person { Name = "John", Age = 30 };
        string json = JsonConvert.SerializeObject(person);
        Console.WriteLine(json);
    }
}

class Person
{
    public string Name { get; set; }
    public int Age { get; set; }
}
```
**Output:**
```json
{"Name":"John","Age":30}
```

## Deserializing JSON to Objects
Deserialization is the process of converting a JSON string back into a C# object.

### Example:
```csharp
using Newtonsoft.Json;
using System;

class Program
{
    static void Main()
    {
        string json = "{\"Name\":\"John\",\"Age\":30}";
        Person person = JsonConvert.DeserializeObject<Person>(json);
        Console.WriteLine($"Name: {person.Name}, Age: {person.Age}");
    }
}
```
**Output:**
```
Name: John, Age: 30
```

## Working with JSON Arrays
### Serializing a List to JSON
```csharp
var people = new List<Person>
{
    new Person { Name = "John", Age = 30 },
    new Person { Name = "Jane", Age = 25 }
};
string json = JsonConvert.SerializeObject(people);
Console.WriteLine(json);
```

### Deserializing a JSON Array to a List
```csharp
string json = "[{\"Name\":\"John\",\"Age\":30},{\"Name\":\"Jane\",\"Age\":25}]";
List<Person> people = JsonConvert.DeserializeObject<List<Person>>(json);
foreach (var person in people)
{
    Console.WriteLine($"Name: {person.Name}, Age: {person.Age}");
}
```

## Handling Null Values
You can control how null values are handled using `NullValueHandling`.

```csharp
string json = JsonConvert.SerializeObject(person, new JsonSerializerSettings
{
    NullValueHandling = NullValueHandling.Ignore
});
```

## Formatting JSON Output
To format JSON output for readability, use `Formatting.Indented`.

```csharp
string formattedJson = JsonConvert.SerializeObject(person, Formatting.Indented);
Console.WriteLine(formattedJson);
```
**Output:**
```json
{
  "Name": "John",
  "Age": 30
}
```

## Customizing Property Names with Attributes
You can change property names in JSON using `[JsonProperty]`.

```csharp
class Person
{
    [JsonProperty("full_name")]
    public string Name { get; set; }
    public int Age { get; set; }
}
```

**Serialized Output:**
```json
{"full_name":"John","Age":30}
```

## Conclusion
Newtonsoft.Json is a powerful tool for handling JSON data in C#. It provides flexibility in serialization and deserialization, handling null values, formatting, and custom property mappings.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
