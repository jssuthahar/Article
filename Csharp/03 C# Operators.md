# C# Operators

## Overview
This document explains different types of operators in C# using a simple example related to user authentication.

## Logical Operators

### OR (`||`) Operator
The OR operator returns `true` if either of the conditions is `true`.
```csharp
if (string.IsNullOrWhiteSpace(txtusername.Text) || string.IsNullOrWhiteSpace(pwpassword.Password))
{
    MessageBox.Show("Please provide user id and password");
}
```

### AND (`&&`) Operator
The AND operator returns `true` only if both conditions are `true`.
```csharp
if (username == uid && password == pwd)
{
    MessageBox.Show("Welcome", "JSQUARE", MessageBoxButton.YesNoCancel, MessageBoxImage.Information);
}
else
{
    MessageBox.Show("Invalid");
}
```

## Equality Operators

### Equality (`==`) Operator
Checks if two values are equal.
```csharp
if (username == password)
{
    MessageBox.Show("Welcome");
}
```

### Inequality (`!=`) Operator
Checks if two values are not equal.
```csharp
if (username != password)
{
    MessageBox.Show("User ID and password are not equal");
}
```

## Comparison Operators

### Greater Than (`>`)
Checks if the left operand is greater than the right operand.
```csharp
if (userAge > 18)
{
    MessageBox.Show("Eligible for registration");
}
```

### Less Than (`<`)
Checks if the left operand is less than the right operand.
```csharp
if (userAge < 18)
{
    MessageBox.Show("Not eligible for registration");
}
```

### Greater Than or Equal To (`>=`)
Checks if the left operand is greater than or equal to the right operand.
```csharp
if (score >= passingScore)
{
    MessageBox.Show("Passed");
}
```

### Less Than or Equal To (`<=`)
Checks if the left operand is less than or equal to the right operand.
```csharp
if (score <= maxScore)
{
    MessageBox.Show("Valid score");
}
```

## Avoiding Explicit `== true` or `== false`
In C#, using `== true` or `== false` is unnecessary since conditional expressions already evaluate to boolean values. The following examples demonstrate how to check conditions without explicitly comparing to `true` or `false`:

### Instead of:
```csharp
if (string.IsNullOrWhiteSpace(username) == true)
{
    MessageBox.Show("Username is required");
}
```
### Use:
```csharp
if (string.IsNullOrWhiteSpace(username))
{
    MessageBox.Show("Username is required");
}
```

### Instead of:
```csharp
if (isAdmin == false)
{
    MessageBox.Show("Access Denied");
}
```
### Use:
```csharp
if (!isAdmin)
{
    MessageBox.Show("Access Denied");
}
```
