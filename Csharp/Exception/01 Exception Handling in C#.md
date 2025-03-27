# Exception Handling in C#

## Overview
Exception handling in C# allows developers to handle runtime errors gracefully and prevent application crashes. The `try-catch-finally` block is used to catch exceptions and take necessary actions.

## Code Explanation
The following code demonstrates nested try-catch blocks and different exception types in C#.

```csharp
try
{
    try
    {
        // Inner try block: Place code that may throw exceptions here
    }
    catch (Exception ex)
    {
        ExceptionHelper.LogError(ex);
        MessageBox.Show(ex.Message); // Handles any exception in the inner try block
    }
    
    // Converting user input to integer
    int i = Convert.ToInt32(txtname.Text);
}
catch (IndexOutOfRangeException ex)
{
    ExceptionHelper.LogError(ex);
    MessageBox.Show(ex.Message); // Handles IndexOutOfRangeException
}
catch (FormatException ex)
{
    ExceptionHelper.LogError(ex);
    MessageBox.Show(ex.Message); // Handles FormatException if input is not a valid number
}
catch (OverflowException ex)
{
    ExceptionHelper.LogError(ex);
    MessageBox.Show(ex.Message); // Handles OverflowException for out-of-range values
}
catch (ArgumentOutOfRangeException ex)
{
    ExceptionHelper.LogError(ex);
    MessageBox.Show(ex.Message); // Handles ArgumentOutOfRangeException
}
catch (Exception ex)
{
    ExceptionHelper.LogError(ex);
    MessageBox.Show(ex.Message); // Handles any other general exceptions
}
finally
{
    MessageBox.Show("Finally block"); // Executes regardless of an exception
}
```

## Exception Helper Class
To centralize error logging, we use an `ExceptionHelper` class:

```csharp
public static class ExceptionHelper
{
    public static void LogError(Exception ex)
    {
        // Log error to a file, database, or external system
        System.IO.File.AppendAllText("error_log.txt", $"{DateTime.Now}: {ex.Message}{Environment.NewLine}");
    }
}
```

## Key Concepts
- **`try` block**: Contains the code that may throw an exception.
- **`catch` block**: Catches specific exceptions and provides error handling.
- **Multiple catch blocks**: Used to handle different types of exceptions individually.
- **`finally` block**: Always executes, regardless of whether an exception occurred or not.
- **Nested try-catch**: An inner `try-catch` block allows handling exceptions separately within a bigger try block.
- **Logging Errors**: The `ExceptionHelper` class logs errors for debugging and monitoring purposes.

## Example Scenarios
1. **Valid Input**: If `txtname.Text` is "123", the conversion to an integer succeeds, and no exceptions occur.
2. **Invalid Format**: If `txtname.Text` is "abc", a `FormatException` is thrown.
3. **Overflow**: If `txtname.Text` is a very large number, an `OverflowException` is triggered.
4. **General Exception**: Any other unexpected errors are handled in the last `catch` block.
5. **Finally Execution**: The message "Finally block" always appears at the end.
6. **Error Logging**: Any exception caught will be logged into a file named `error_log.txt`.

## Best Practices
- Always catch specific exceptions before general exceptions.
- Avoid catching general `Exception` unless necessary.
- Use `finally` for cleanup operations like closing files, releasing resources, etc.
- Validate user input before converting to prevent exceptions.
- Implement a centralized error logging system like `ExceptionHelper`.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

