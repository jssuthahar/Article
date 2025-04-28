-- Shopping Application - Full Database Setup

-- 1. Create Database
CREATE DATABASE ShoppingAppDB;
GO

USE ShoppingAppDB;
GO

-- 2. Create Tables

-- Users Table
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

-- Categories Table
CREATE TABLE Categories (
    CategoryId INT IDENTITY(1,1) PRIMARY KEY,
    CategoryName NVARCHAR(100) NOT NULL,
    Description NVARCHAR(255)
);
GO

-- Products Table
CREATE TABLE Products (
    ProductId INT IDENTITY(1,1) PRIMARY KEY,
    ProductName NVARCHAR(150) NOT NULL,
    Description NVARCHAR(MAX),
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity INT NOT NULL,
    CategoryId INT FOREIGN KEY REFERENCES Categories(CategoryId),
    ImageUrl NVARCHAR(255),
    CreatedAt DATETIME DEFAULT GETDATE()
);
GO

-- Carts Table
CREATE TABLE Carts (
    CartId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT FOREIGN KEY REFERENCES Users(UserId),
    CreatedAt DATETIME DEFAULT GETDATE()
);
GO

-- CartItems Table
CREATE TABLE CartItems (
    CartItemId INT IDENTITY(1,1) PRIMARY KEY,
    CartId INT FOREIGN KEY REFERENCES Carts(CartId),
    ProductId INT FOREIGN KEY REFERENCES Products(ProductId),
    Quantity INT NOT NULL
);
GO

-- Orders Table
CREATE TABLE Orders (
    OrderId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT FOREIGN KEY REFERENCES Users(UserId),
    OrderDate DATETIME DEFAULT GETDATE(),
    TotalAmount DECIMAL(10,2),
    Status NVARCHAR(50) DEFAULT 'Pending'
);
GO

-- OrderItems Table
CREATE TABLE OrderItems (
    OrderItemId INT IDENTITY(1,1) PRIMARY KEY,
    OrderId INT FOREIGN KEY REFERENCES Orders(OrderId),
    ProductId INT FOREIGN KEY REFERENCES Products(ProductId),
    Quantity INT NOT NULL,
    Price DECIMAL(10,2) NOT NULL
);
GO

-- Payments Table
CREATE TABLE Payments (
    PaymentId INT IDENTITY(1,1) PRIMARY KEY,
    OrderId INT FOREIGN KEY REFERENCES Orders(OrderId),
    PaymentDate DATETIME DEFAULT GETDATE(),
    AmountPaid DECIMAL(10,2),
    PaymentMethod NVARCHAR(50),
    PaymentStatus NVARCHAR(50) DEFAULT 'Pending'
);
GO

-- 3. Insert Sample Data

-- Insert Categories
INSERT INTO Categories (CategoryName, Description)
VALUES 
('Electronics', 'Electronic gadgets and devices'),
('Fashion', 'Clothing, footwear, and accessories'),
('Books', 'Various types of books'),
('Home Appliances', 'Appliances for home use');
GO

-- Insert Products
INSERT INTO Products (ProductName, Description, Price, StockQuantity, CategoryId, ImageUrl)
VALUES 
('Smartphone XYZ', 'Latest 5G smartphone', 699.99, 50, 1, 'images/smartphone_xyz.jpg'),
('Laptop ABC', 'Powerful gaming laptop', 1299.99, 30, 1, 'images/laptop_abc.jpg'),
('Men\'s T-Shirt', '100% cotton t-shirt', 19.99, 100, 2, 'images/mens_tshirt.jpg'),
('Microwave Oven', '700W microwave', 89.99, 25, 4, 'images/microwave_oven.jpg'),
('Fiction Novel', 'Bestselling fiction novel', 14.99, 200, 3, 'images/fiction_novel.jpg');
GO

-- Insert Users
INSERT INTO Users (FullName, Email, PasswordHash, Phone, Address)
VALUES 
('John Doe', 'john.doe@example.com', 'hashed_password_1', '1234567890', '123 Main Street'),
('Jane Smith', 'jane.smith@example.com', 'hashed_password_2', '0987654321', '456 Park Avenue');
GO

-- Insert Carts
INSERT INTO Carts (UserId)
VALUES 
(1),
(2);
GO

-- Insert CartItems
INSERT INTO CartItems (CartId, ProductId, Quantity)
VALUES 
(1, 1, 2),
(1, 5, 1),
(2, 3, 3);
GO

-- Insert Orders
INSERT INTO Orders (UserId, TotalAmount, Status)
VALUES 
(1, 1414.97, 'Completed'),
(2, 59.97, 'Pending');
GO

-- Insert OrderItems
INSERT INTO OrderItems (OrderId, ProductId, Quantity, Price)
VALUES 
(1, 1, 2, 699.99),
(1, 5, 1, 14.99),
(2, 3, 3, 19.99);
GO

-- Insert Payments
INSERT INTO Payments (OrderId, AmountPaid, PaymentMethod, PaymentStatus)
VALUES 
(1, 1414.97, 'Credit Card', 'Paid'),
(2, 59.97, 'Cash on Delivery', 'Pending');
GO

-- DONE!
