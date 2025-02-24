# Switch Case Benefits and Code Explanation

## Benefits of Using Switch Case

1. **Improves Readability**: The `switch` statement provides a clean and organized way to handle multiple conditions compared to multiple `if-else` statements.
2. **Better Performance**: In some cases, `switch` statements perform better than `if-else` because they use jump tables or optimized lookup mechanisms.
3. **Avoids Redundant Comparisons**: Unlike multiple `if-else` statements that check every condition, `switch` jumps directly to the matching case.
4. **Ease of Maintenance**: Adding or modifying cases is easier in a `switch` statement than modifying a long `if-else` block.
5. **Code Simplification**: Reduces the complexity and enhances clarity when handling multiple conditions.

## Code Explanation

```csharp
int first = Convert.ToInt16(firstnumber);
int second = Convert.ToInt16(secondnumber);
int result = 0;
switch(oper)
{
    case "+":
        {
            result = first + second;
            break;
        }
    case "-":
        {
            result = first - second;
            break;
        }
    case "*":
        {
            result = first * second;
            break;
        }
    case "/":
        {
            result = first / second;
            break;
        }
}

 txtresult.Text = result.ToString();
```

### Breakdown of the Code

1. **Converting Input Values**:
   ```csharp
   int first = Convert.ToInt16(firstnumber);
   int second = Convert.ToInt16(secondnumber);
   ```
   - Converts `firstnumber` and `secondnumber` from string or other types into `int16` (short integer).
   - `Convert.ToInt16()` ensures that valid numeric values are processed.

2. **Initializing Result Variable**:
   ```csharp
   int result = 0;
   ```
   - Declares an integer variable `result` to store the final computed value.

3. **Using Switch Statement**:
   ```csharp
   switch(oper)
   ```
   - The `switch` statement checks the value of `oper` (operator variable) to determine which arithmetic operation to perform.

4. **Handling Each Case**:
   - **Addition (`+`)**:
     ```csharp
     case "+":
         result = first + second;
         break;
     ```
     - Adds `first` and `second`, storing the sum in `result`.
   
   - **Subtraction (`-`)**:
     ```csharp
     case "-":
         result = first - second;
         break;
     ```
     - Subtracts `second` from `first`.
   
   - **Multiplication (`*`)**:
     ```csharp
     case "*":
         result = first * second;
         break;
     ```
     - Multiplies `first` and `second`.
   
   - **Division (`/`)**:
     ```csharp
     case "/":
         result = first / second;
         break;
     ```
     - Divides `first` by `second`. (Note: This may cause a division by zero error if `second` is 0.)

5. **Displaying the Result**:
   ```csharp
   txtresult.Text = result.ToString();
   ```
   - Converts `result` to a string and displays it in `txtresult`, which is likely a text box.

## Default Case
- **Add a Default Case**: A `default` case should be included to handle invalid operators.

### Example of Default Case
```csharp
int first = Convert.ToInt32(firstnumber);
int second = Convert.ToInt32(secondnumber);
int result = 0;

switch (oper)
{
    case "+":
        result = first + second;
        break;
    case "-":
        result = first - second;
        break;
    case "*":
        result = first * second;
        break;
    case "/":
        if (second != 0)
            result = first / second;
        else
            txtresult.Text = "Error: Division by zero";
        break;
    default:
        txtresult.Text = "Error: Invalid operator";
        return;
}

if (oper != "/" || second != 0)
    txtresult.Text = result.ToString();
```
