
# 📘 SQL Stored Procedures – Beginner to Expert Guide

Welcome! This guide will help you understand **stored procedures in SQL**, step by step—from **beginner** to **expert**. You’ll also find a full explanation of a practical stored procedure used to add items to a shopping cart.

---

## 🔍 What is a Stored Procedure?

A **stored procedure** is a **named group of SQL statements** that you can save and reuse.

Instead of writing SQL queries again and again, we write a procedure once and call it whenever needed.

### ✅ Benefits of Stored Procedures

- 📦 **Reusable** – Write once, use many times.
- 🔒 **Secure** – You can restrict direct table access and only allow stored procedures.
- 🚀 **Faster** – Stored procedures are compiled and optimized by SQL Server.
- 🧼 **Cleaner Code** – Keeps logic out of application code and centralizes database operations.

---

## 🧭 Learning Path: Beginner to Expert

### 🟢 1. Beginner Level

📘 **What to Learn:**
- Basic syntax: `CREATE`, `ALTER`, `DROP PROCEDURE`
- Input parameters
- Using SELECT, INSERT, UPDATE in procedures

📌 **Example:**
```sql
CREATE PROCEDURE GetAllUsers
AS
BEGIN
    SELECT * FROM Users
END
````

👨‍💻 **Try it yourself:**

* Create a procedure to insert a new product.
* Call it using: `EXEC AddNewProduct 'Soap', 50`

---

### 🟡 2. Intermediate Level

📘 **What to Learn:**

* Use of variables (`DECLARE`, `SET`)
* Conditions (`IF`, `ELSE`)
* `SCOPE_IDENTITY()` – to get last inserted ID
* Joins and filtering inside stored procedures
* Basic error handling

📌 **Example:**

```sql
CREATE PROCEDURE UpdateStock
@productId INT,
@newStock INT
AS
BEGIN
    IF @newStock > 0
        UPDATE Products SET StockQuantity = @newStock WHERE ProductId = @productId
END
```

👨‍💻 **Try it yourself:**

* Create a procedure to check product availability before adding to cart.

---

### 🔴 3. Expert Level

📘 **What to Learn:**

* Transactions (`BEGIN TRAN`, `COMMIT`, `ROLLBACK`)
* Error handling with `TRY...CATCH`
* Dynamic SQL
* Returning custom result sets
* Using procedures in .NET, Java, or Python apps
* Performance tuning

📌 **Example:**

```sql
BEGIN TRY
    BEGIN TRAN
        -- Insert logic
    COMMIT
END TRY
BEGIN CATCH
    ROLLBACK
END CATCH
```

👨‍💻 **Try it yourself:**

* Create a complete shopping cart system using procedures.

---

## 🛒 Real-Life Example: `usp_AddItem`

This stored procedure helps a user add a product to a shopping cart.

### 📌 Syntax

```sql
ALTER PROCEDURE usp_AddItem
@userid NUMERIC(10),
@productid NUMERIC(10),
@Quantity NUMERIC(10),
@caid NUMERIC(10) -- Cart ID (optional)
AS
BEGIN
    DECLARE @cid INT

    -- 1. Create a new cart if no cart ID is provided
    IF (@caid IS NULL)
    BEGIN
        INSERT INTO CARTS(USERID) VALUES(@userid)
        SET @cid = SCOPE_IDENTITY()
    END
    ELSE
    BEGIN
        SET @cid = @caid
    END

    -- 2. Add product to the cart
    INSERT INTO CARTITEMS(CartId, ProductId, Quantity)
    VALUES (@cid, @productid, @Quantity)

    -- 3. Return current cart summary
    SELECT 
        ca.CartId,
        p.ProductName AS Product,
        p.Price AS 'Unit price',
        p.StockQuantity AS Unit,
        c.Quantity AS Qty,
        p.Price * c.Quantity AS Total
    FROM Products p
    INNER JOIN CARTITEMS c ON p.ProductId = c.ProductId
    INNER JOIN CARTS ca ON c.CartId = ca.CartId
    WHERE ca.UserId = @userid AND ca.CartId = @cid
END
```

---

### 🧠 Step-by-Step Explanation

| Step | What Happens                                | Purpose                                              |
| ---- | ------------------------------------------- | ---------------------------------------------------- |
| 1    | Checks if `@caid` is NULL                   | If no cart is passed, create a new cart for the user |
| 2    | `INSERT INTO CARTS(USERID)`                 | Adds a new cart row                                  |
| 3    | `SCOPE_IDENTITY()`                          | Captures the newly created Cart ID                   |
| 4    | If `@caid` is not NULL                      | Uses the existing cart                               |
| 5    | Inserts product into `CARTITEMS`            | Adds the selected product with quantity              |
| 6    | `SELECT` query joins Products and CartItems | Returns the updated cart details for display         |

---

### ▶️ Sample Execution

```sql
EXEC usp_AddItem 2, 1, 1, NULL
```

📝 This means:

* Add product ID `1` to user ID `2`’s cart
* Quantity = `1`
* No existing cart ID is provided → a new cart is created

---

### 🛍️ Sample Output

| CartId | Product | Unit Price | Unit | Qty | Total |
| ------ | ------- | ---------- | ---- | --- | ----- |
| 101    | Laptop  | 1000       | 10   | 1   | 1000  |
| 101    | Mouse   | 50         | 200  | 2   | 100   |

---

## 💡 Summary

* Stored procedures are powerful for data access and business logic.
* Learn in levels: Start simple, then add logic and optimization.
* `usp_AddItem` is a real-world procedure that helps build shopping cart features.
* Stored procedures are heavily used in enterprise systems.

---

## 🎓 Want to Practice?

Try building these on your own:

1. `usp_RemoveItem` – Remove product from cart
2. `usp_Checkout` – Finalize the cart and reduce stock
3. `usp_GetCartSummary` – Show all items in a cart

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
