
# 🛢️ Shopping Application — Database Setup Guide

## 📚 About this Project

This project provides the complete database design, creation scripts, and sample data for a **Shopping (E-Commerce)** application.

It includes:
- User Management
- Product Catalog
- Shopping Cart
- Orders and Payments

---

# ⚙️ Database Setup Instructions

## 1️⃣ Create Database

```sql
-- Create Database
CREATE DATABASE ShoppingAppDB;
GO

USE ShoppingAppDB;
GO
```

---

## 2️⃣ Create Tables

### 2.1 Users Table

```sql
CREATE TABLE Users (
    UserId INT IDENTITY(1,1) PRIMARY KEY,
    FullName NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL UNIQUE,
    PasswordHash NVARCHAR(255) NOT NULL,
    Phone NVARCHAR(20),
    Address NVARCHAR(255),
    CreatedAt DATETIME DEFAULT GETDATE()
);
GO
```

---

### 2.2 Categories Table

```sql
CREATE TABLE Categories (
    CategoryId INT IDENTITY(1,1) PRIMARY KEY,
    CategoryName NVARCHAR(100) NOT NULL,
    Description NVARCHAR(255)
);
GO
```

---

### 2.3 Products Table

```sql
CREATE TABLE Products (
    ProductId INT IDENTITY(1,1) PRIMARY KEY,
    ProductName NVARCHAR(150) NOT NULL,
    Description NVARCHAR(MAX),
    Price DECIMAL(10, 2) NOT NULL,
    StockQuantity INT NOT NULL,
    CategoryId INT FOREIGN KEY REFERENCES Categories(CategoryId),
    ImageUrl NVARCHAR(255),
    CreatedAt DATETIME DEFAULT GETDATE()
);
GO
```

---

### 2.4 Carts Table

```sql
CREATE TABLE Carts (
    CartId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT FOREIGN KEY REFERENCES Users(UserId),
    CreatedAt DATETIME DEFAULT GETDATE()
);
GO
```

---

### 2.5 CartItems Table

```sql
CREATE TABLE CartItems (
    CartItemId INT IDENTITY(1,1) PRIMARY KEY,
    CartId INT FOREIGN KEY REFERENCES Carts(CartId),
    ProductId INT FOREIGN KEY REFERENCES Products(ProductId),
    Quantity INT NOT NULL
);
GO
```

---

### 2.6 Orders Table

```sql
CREATE TABLE Orders (
    OrderId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT FOREIGN KEY REFERENCES Users(UserId),
    OrderDate DATETIME DEFAULT GETDATE(),
    TotalAmount DECIMAL(10, 2),
    Status NVARCHAR(50) DEFAULT 'Pending'
);
GO
```

---

### 2.7 OrderItems Table

```sql
CREATE TABLE OrderItems (
    OrderItemId INT IDENTITY(1,1) PRIMARY KEY,
    OrderId INT FOREIGN KEY REFERENCES Orders(OrderId),
    ProductId INT FOREIGN KEY REFERENCES Products(ProductId),
    Quantity INT NOT NULL,
    Price DECIMAL(10, 2) NOT NULL
);
GO
```

---

### 2.8 Payments Table

```sql
CREATE TABLE Payments (
    PaymentId INT IDENTITY(1,1) PRIMARY KEY,
    OrderId INT FOREIGN KEY REFERENCES Orders(OrderId),
    PaymentDate DATETIME DEFAULT GETDATE(),
    AmountPaid DECIMAL(10, 2),
    PaymentMethod NVARCHAR(50),
    PaymentStatus NVARCHAR(50) DEFAULT 'Pending'
);
GO
```

---

# 🗂️ 3️⃣ Insert Sample Data

### 3.1 Insert Categories

```sql
INSERT INTO Categories (CategoryName, Description)
VALUES 
('Electronics', 'Electronic gadgets and devices'),
('Fashion', 'Clothing, footwear, and accessories'),
('Books', 'Various types of books'),
('Home Appliances', 'Appliances for home use');
GO
```

---

### 3.2 Insert Products

```sql
INSERT INTO Products (ProductName, Description, Price, StockQuantity, CategoryId, ImageUrl)
VALUES 
('Smartphone XYZ', 'Latest 5G smartphone', 699.99, 50, 1, 'images/smartphone_xyz.jpg'),
('Laptop ABC', 'Powerful gaming laptop', 1299.99, 30, 1, 'images/laptop_abc.jpg'),
('Men\'s T-Shirt', '100% cotton t-shirt', 19.99, 100, 2, 'images/mens_tshirt.jpg'),
('Microwave Oven', '700W microwave', 89.99, 25, 4, 'images/microwave_oven.jpg'),
('Fiction Novel', 'Bestselling fiction novel', 14.99, 200, 3, 'images/fiction_novel.jpg');
GO
```

---

### 3.3 Insert Users

```sql
INSERT INTO Users (FullName, Email, PasswordHash, Phone, Address)
VALUES 
('John Doe', 'john.doe@example.com', 'hashed_password_1', '1234567890', '123 Main Street'),
('Jane Smith', 'jane.smith@example.com', 'hashed_password_2', '0987654321', '456 Park Avenue');
GO
```

---

### 3.4 Insert Carts

```sql
INSERT INTO Carts (UserId)
VALUES 
(1),
(2);
GO
```

---

### 3.5 Insert Cart Items

```sql
INSERT INTO CartItems (CartId, ProductId, Quantity)
VALUES 
(1, 1, 2), -- John Doe added 2 Smartphones
(1, 5, 1), -- John Doe added 1 Fiction Novel
(2, 3, 3); -- Jane Smith added 3 T-Shirts
GO
```

---

### 3.6 Insert Orders

```sql
INSERT INTO Orders (UserId, TotalAmount, Status)
VALUES 
(1, 1414.97, 'Completed'),
(2, 59.97, 'Pending');
GO
```

---

### 3.7 Insert Order Items

```sql
INSERT INTO OrderItems (OrderId, ProductId, Quantity, Price)
VALUES 
(1, 1, 2, 699.99),
(1, 5, 1, 14.99),
(2, 3, 3, 19.99);
GO
```

---

### 3.8 Insert Payments

```sql
INSERT INTO Payments (OrderId, AmountPaid, PaymentMethod, PaymentStatus)
VALUES 
(1, 1414.97, 'Credit Card', 'Paid'),
(2, 59.97, 'Cash on Delivery', 'Pending');
GO
```

---

# 📊 ERD (Entity Relationship Diagram)

Visual relationships between tables (described in text):

```
Users ──────< Carts ──────< CartItems >────── Products
Users ──────< Orders ──────< OrderItems >──── Products
Orders ──────< Payments
Products >──── Categories
```

---

# 🔥 Summary

| Table | Purpose |
|:---|:---|
| Users | Store user account information |
| Categories | Organize products |
| Products | Details of items for sale |
| Carts | Temporary storage of items before purchase |
| CartItems | Products added to each user's cart |
| Orders | Record of finalized purchases |
| OrderItems | Specific items in each order |
| Payments | Payment information for orders |

---

# 📌 Notes
- Passwords must be securely **hashed** (never stored as plain text).
- Stock management can be added later (e.g., decrease stock after order).
- Future improvements: Product reviews, coupons, shipping tracking.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

