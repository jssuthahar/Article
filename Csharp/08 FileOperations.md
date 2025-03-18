# C# File Operations

This document provides detailed information on handling files and directories in a WPF application using the `System.IO` namespace. It covers file creation, deletion, existence checking, and directory operations.

## File Operations in WPF

### 1. Creating a File
A file can be created using the `File.Create` method. Before creating a file, we check if it already exists to prevent overwriting existing data. The file is closed immediately after creation to release the file handle.

```csharp
using System;
using System.IO;
using System.Windows;

namespace WpfFileOperations
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            CreateFile();
        }

        private void CreateFile()
        {
            string filePath = "example.txt";
            
            if (!File.Exists(filePath))
            {
                File.Create(filePath).Close(); // Create and close to free the handle
                MessageBox.Show("File created successfully.");
            }
            else
            {
                MessageBox.Show("File already exists.");
            }
        }
    }
}
```

### 2. Writing to a File
The `File.WriteAllText` method writes text content into a specified file. If the file does not exist, it will be created automatically.

```csharp
File.WriteAllText("example.txt", "Hello, World!");
```

### 3. Reading from a File
The `File.ReadAllText` method reads all the contents of a specified file and returns it as a string.

```csharp
string content = File.ReadAllText("example.txt");
MessageBox.Show(content);
```

### 4. Checking if a File Exists
The `File.Exists` method is used to check whether a file exists at a given path.

```csharp
if (File.Exists("example.txt"))
{
    MessageBox.Show("File exists.");
}
else
{
    MessageBox.Show("File does not exist.");
}
```

### 5. Deleting a File
The `File.Delete` method is used to delete a specified file. We check if the file exists before attempting to delete it to avoid exceptions.

```csharp
if (File.Exists("example.txt"))
{
    File.Delete("example.txt");
    MessageBox.Show("File deleted.");
}
```

## Directory Operations in WPF

### 1. Creating a Directory
A directory can be created using the `Directory.CreateDirectory` method. If the directory already exists, it does nothing.

```csharp
string directoryPath = "MyDirectory";
Directory.CreateDirectory(directoryPath);
```

### 2. Checking if a Directory Exists
The `Directory.Exists` method checks whether a directory exists at a specified path.

```csharp
if (Directory.Exists(directoryPath))
{
    MessageBox.Show("Directory exists.");
}
```

### 3. Deleting a Directory
The `Directory.Delete` method deletes a directory. If the second parameter is `true`, it also deletes all files and subdirectories inside it.

```csharp
if (Directory.Exists(directoryPath))
{
    Directory.Delete(directoryPath, true); // 'true' removes subdirectories and files
    MessageBox.Show("Directory deleted.");
}
```

## FileInfo and DirectoryInfo Operations in WPF

### 1. Using FileInfo to Get File Details
The `FileInfo` class provides detailed information about a file, such as its name, size, and creation time.

```csharp
FileInfo fileInfo = new FileInfo("example.txt");
if (fileInfo.Exists)
{
    MessageBox.Show($"File Name: {fileInfo.Name}\nSize: {fileInfo.Length} bytes\nCreated: {fileInfo.CreationTime}");
}
```

### 2. Using DirectoryInfo to Get Directory Details
The `DirectoryInfo` class provides detailed information about a directory, such as its name, creation time, and number of files.

```csharp
DirectoryInfo dirInfo = new DirectoryInfo("MyDirectory");
if (dirInfo.Exists)
{
    MessageBox.Show($"Directory Name: {dirInfo.Name}\nCreated: {dirInfo.CreationTime}\nFiles Count: {dirInfo.GetFiles().Length}");
}
```

## Path Operations in WPF

### 1. Joining Paths Using `Path.Join`
The `Path.Join` method is used to create a valid path string from multiple parts.

```csharp
string fullPath = Path.Join("C:", "Users", "Public", "example.txt");
MessageBox.Show("Full Path: " + fullPath);
```

### 2. Getting Temporary Folder Path
The `Path.GetTempPath` method retrieves the path of the system's temporary folder.

```csharp
string tempPath = Path.GetTempPath();
MessageBox.Show("Temporary Path: " + tempPath);
```

### 3. Finding the AppData Location
The AppData folder is used to store application-specific data. Use `Environment.GetFolderPath` with `Environment.SpecialFolder.ApplicationData` to retrieve its location.

```csharp
string appDataPath = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);
MessageBox.Show("AppData Path: " + appDataPath);
```

## Conclusion
This guide covers the basic file and directory operations in WPF, including the use of `FileInfo`, `DirectoryInfo`, `Path.Join`, `TempData`, and `AppData` location retrieval. You can extend this functionality by handling exceptions and using advanced file I/O methods like `FileStream` and `StreamReader/Writer` for better control.

## Interview Questions and Answers

### Q1: What is the difference between `File` and `FileInfo` in C#?
**A:** `File` is a static class that provides utility methods for file operations, whereas `FileInfo` is an instance-based class that provides detailed metadata and instance methods for file handling.

### Q2: How do you handle exceptions while working with files in C#?
**A:** Use `try-catch` blocks to handle exceptions like `FileNotFoundException`, `IOException`, and `UnauthorizedAccessException`.

### Q3: How can you read a file line by line in C#?
**A:** Use `File.ReadLines` or `StreamReader.ReadLine` to read files line by line efficiently.

```csharp
foreach (string line in File.ReadLines("example.txt"))
{
    Console.WriteLine(line);
}
```

### Q4: What happens if you try to delete a file that does not exist?
**A:** The `File.Delete` method does not throw an error if the file does not exist; it simply does nothing.

### Q5: How can you get all files in a directory using C#?
**A:** Use `Directory.GetFiles` or `DirectoryInfo.GetFiles`.

```csharp
string[] files = Directory.GetFiles("MyDirectory");
foreach (string file in files)
{
    Console.WriteLine(file);
}
```

### Q6: How do you create a temporary file in C#?
**A:** Use `Path.GetTempFileName()` to create a temporary file in the system’s temp folder.

```csharp
string tempFile = Path.GetTempFileName();
Console.WriteLine("Temporary file created: " + tempFile);
```


## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
