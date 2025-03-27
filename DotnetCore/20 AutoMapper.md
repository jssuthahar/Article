# AutoMapper in C#

## Introduction
AutoMapper is a library in .NET that simplifies object-to-object mapping, reducing manual assignment code and enhancing maintainability.

## Installation
To install AutoMapper in your .NET project, use NuGet Package Manager:
```sh
Install-Package AutoMapper
```
Or using .NET CLI:
```sh
dotnet add package AutoMapper
```

## Basic Usage
AutoMapper enables you to map properties between objects of different types. Here’s a simple example:
```csharp
using AutoMapper;

public class Source
{
    public string Name { get; set; }
    public int Age { get; set; }
}

public class Destination
{
    public string Name { get; set; }
    public int Age { get; set; }
}

var config = new MapperConfiguration(cfg => cfg.CreateMap<Source, Destination>());
var mapper = config.CreateMapper();
var source = new Source { Name = "John", Age = 30 };
var destination = mapper.Map<Destination>(source);
```

## Advanced Mapping
### Custom Mapping
You can map properties with different names using `ForMember`.
```csharp
public class Student
{
    public string fullName { get; set; }
    public string email { get; set; }
    public string password { get; set; }
    public int role { get; set; }
}

public class Employee
{
    public string fullName1 { get; set; }
    public string email1 { get; set; }
}

var mapperConfiguration = new MapperConfiguration(x => x.CreateMap<Student, Employee>()
    .ForMember(dest => dest.fullName1, opt => opt.MapFrom(src => src.fullName))
    .ForMember(dest => dest.email1, opt => opt.MapFrom(src => src.email))
);

Student student = new Student { fullName = "John Doe", email = "john@example.com", password = "pass123", role = 1 };
Employee employee = mapperConfiguration.CreateMapper().Map<Employee>(student);
```

### Reverse Mapping
You can also enable two-way mapping.
```csharp
var config = new MapperConfiguration(cfg => cfg.CreateMap<Student, Employee>().ReverseMap());
```

### Conditional Mapping
You can conditionally map properties.
```csharp
var config = new MapperConfiguration(cfg => cfg.CreateMap<Student, Employee>()
    .ForMember(dest => dest.fullName1, opt => opt.Condition(src => !string.IsNullOrEmpty(src.fullName))));
```

### Mapping Collections
AutoMapper can map collections easily.
```csharp
List<Student> students = new List<Student>
{
    new Student { fullName = "John Doe", email = "john@example.com" },
    new Student { fullName = "Jane Doe", email = "jane@example.com" }
};

var employees = mapperConfiguration.CreateMapper().Map<List<Employee>>(students);
```

## Interview Questions and Answers

### 1. What is AutoMapper in .NET?
**Answer:** AutoMapper is an object-to-object mapping library in .NET that simplifies data transformation between different object types without manually assigning values.

### 2. How do you configure AutoMapper in .NET 8?
**Answer:** In .NET 8, configure AutoMapper in `Program.cs`:
```csharp
using AutoMapper;
using Microsoft.Extensions.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddAutoMapper(typeof(Program));

var app = builder.Build();
app.Run();
```

### 3. What is the purpose of `ForMember` in AutoMapper?
**Answer:** `ForMember` allows custom property mapping when source and destination properties have different names. Example:
```csharp
cfg.CreateMap<Student, Employee>()
   .ForMember(dest => dest.fullName1, opt => opt.MapFrom(src => src.fullName));
```

### 4. What is Reverse Mapping in AutoMapper?
**Answer:** Reverse Mapping enables two-way mapping between objects:
```csharp
cfg.CreateMap<Student, Employee>().ReverseMap();
```
This allows mapping both from `Student` to `Employee` and vice versa.

### 5. How does AutoMapper handle collections?
**Answer:** AutoMapper can map collections directly:
```csharp
List<Student> students = new List<Student> { new Student { fullName = "John Doe" } };
var employees = mapper.Map<List<Employee>>(students);
```

### 6. Can you use conditions while mapping in AutoMapper?
**Answer:** Yes, conditions can be applied using `Condition`:
```csharp
cfg.CreateMap<Student, Employee>()
   .ForMember(dest => dest.fullName1, opt => opt.Condition(src => !string.IsNullOrEmpty(src.fullName)));
```

### 7. How do you inject AutoMapper into an ASP.NET Core controller in .NET 8?
**Answer:** Register AutoMapper in `Program.cs`:
```csharp
builder.Services.AddAutoMapper(typeof(Program));
```
Inject it into a controller:
```csharp
public class StudentController : Controller
{
    private readonly IMapper _mapper;

    public StudentController(IMapper mapper)
    {
        _mapper = mapper;
    }
}
```

### 8. What are Profile classes in AutoMapper?
**Answer:** Profile classes group related mappings for better maintainability.
```csharp
public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Student, Employee>();
    }
}
```
Register in `Program.cs`:
```csharp
builder.Services.AddAutoMapper(typeof(MappingProfile));
```

### 9. What happens if a property does not exist in the destination class?
**Answer:** AutoMapper ignores it by default and does not throw an error.

### 10. How can you ignore specific properties while mapping?
**Answer:** Use `Ignore()`:
```csharp
cfg.CreateMap<Student, Employee>()
   .ForMember(dest => dest.email1, opt => opt.Ignore());
```

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
