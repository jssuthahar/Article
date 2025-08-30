# **Hotel Management System Database Design Project**

## **Objective**

Design and implement a **Hotel Management System Database** using relational database principles.
The system should manage hotel operations such as **hotels, rooms, customers, bookings, payments, staff, services, and more**.

---

## ✅ **General Rules & Guidelines**

1. **Normalization**: Database must be normalized up to **3rd Normal Form (3NF)**.
2. **Primary Keys & Foreign Keys**:

   * Each table must have a **Primary Key**.
   * Use **Foreign Keys** to establish relationships between tables.
3. **Identity Columns**:

   * Use **Identity (Auto Increment)** for numeric primary keys.
4. **Constraints**:

   * Use **NOT NULL**, **UNIQUE**, **DEFAULT**, and **CHECK** constraints.
5. **Composite Keys**:

   * At least **two tables** should have **Composite Primary Keys**.
6. **Data Types**:

   * `INT` for IDs
   * `VARCHAR` or `NVARCHAR` for names and text
   * `DATE` or `DATETIME` for dates
   * `DECIMAL` for prices
   * `BIT` for Yes/No values
7. **Relationships**:

   * Use **One-to-Many** and **Many-to-Many** relationships where required.
8. **Documentation**:

   * Provide an **ER Diagram** and **Table Design Document**.

---

## ✅ **Project Deliverables**

* **ER Diagram** (with all tables and relationships)
* **Table Design Document** (table name, columns, data types, constraints)
* **Normalization Explanation**
* **Sample Data** (at least 3 records per table) *(optional if specified by instructor)*
* **Short Notes on Composite Key & Identity**

---

## ✅ **Tables & Columns (15 Tables)**

### **1. Hotels**

* HotelID (**Primary Key**, INT, Identity)
* HotelName (VARCHAR, NOT NULL)
* Address (VARCHAR)
* City (VARCHAR)
* State (VARCHAR)
* ZipCode (VARCHAR)
* ContactNumber (VARCHAR, UNIQUE)
* Email (VARCHAR, UNIQUE)
* Rating (DECIMAL(2,1), DEFAULT 3.0)

---

### **2. Rooms**

* RoomID (**Primary Key**, INT, Identity)
* HotelID (**Foreign Key → Hotels**)
* RoomNumber (VARCHAR, UNIQUE)
* RoomType (VARCHAR) (Single, Double, Suite)
* PricePerNight (DECIMAL, CHECK > 0)
* Status (VARCHAR, DEFAULT 'Available')

---

### **3. Customers**

* CustomerID (**Primary Key**, INT, Identity)
* FirstName (VARCHAR)
* LastName (VARCHAR)
* Email (VARCHAR, UNIQUE)
* PhoneNumber (VARCHAR, UNIQUE)
* Address (VARCHAR)
* LoyaltyPoints (INT, DEFAULT 0)

---

### **4. Bookings**

* BookingID (**Primary Key**, INT, Identity)
* CustomerID (**Foreign Key → Customers**)
* RoomID (**Foreign Key → Rooms**)
* CheckInDate (DATE)
* CheckOutDate (DATE)
* NumberOfGuests (INT)
* BookingStatus (VARCHAR, DEFAULT 'Confirmed')

---

### **5. Payments**

* PaymentID (**Primary Key**, INT, Identity)
* BookingID (**Foreign Key → Bookings**)
* PaymentDate (DATE)
* Amount (DECIMAL, CHECK > 0)
* PaymentMethod (VARCHAR) (Cash/Card/Online)
* PaymentStatus (VARCHAR, DEFAULT 'Pending')

---

### **6. Staff**

* StaffID (**Primary Key**, INT, Identity)
* HotelID (**Foreign Key → Hotels**)
* FirstName (VARCHAR)
* LastName (VARCHAR)
* Role (VARCHAR) (Manager, Receptionist, Housekeeping)
* PhoneNumber (VARCHAR, UNIQUE)
* Email (VARCHAR, UNIQUE)

---

### **7. Departments**

* DepartmentID (**Primary Key**, INT, Identity)
* HotelID (**Foreign Key → Hotels**)
* DepartmentName (VARCHAR, UNIQUE)
* Description (VARCHAR)

---

### **8. Shifts**

* ShiftID (**Primary Key**, INT, Identity)
* StaffID (**Foreign Key → Staff**)
* ShiftDate (DATE)
* StartTime (DATETIME)
* EndTime (DATETIME)

---

### **9. Services**

* ServiceID (**Primary Key**, INT, Identity)
* ServiceName (VARCHAR)
* Price (DECIMAL, CHECK > 0)
* Description (VARCHAR)

---

### **10. BookingServices** *(Composite Key Example)*

* BookingID (**Foreign Key → Bookings**)
* ServiceID (**Foreign Key → Services**)
* Quantity (INT)
* **Primary Key (BookingID + ServiceID)**

---

### **11. Amenities**

* AmenityID (**Primary Key**, INT, Identity)
* HotelID (**Foreign Key → Hotels**)
* AmenityName (VARCHAR)
* IsFree (BIT, DEFAULT 1)

---

### **12. RoomAmenities** *(Composite Key Example)*

* RoomID (**Foreign Key → Rooms**)
* AmenityID (**Foreign Key → Amenities**)
* **Primary Key (RoomID + AmenityID)**

---

### **13. Discounts**

* DiscountID (**Primary Key**, INT, Identity)
* HotelID (**Foreign Key → Hotels**)
* DiscountName (VARCHAR)
* DiscountPercentage (DECIMAL, CHECK between 0 and 100)
* ValidFrom (DATE)
* ValidTo (DATE)

---

### **14. Feedback**

* FeedbackID (**Primary Key**, INT, Identity)
* CustomerID (**Foreign Key → Customers**)
* HotelID (**Foreign Key → Hotels**)
* Rating (INT, CHECK between 1 and 5)
* Comments (VARCHAR)
* CreatedDate (DATE, DEFAULT current date)

---

### **15. LoginUsers**

* UserID (**Primary Key**, INT, Identity)
* Username (VARCHAR, UNIQUE)
* PasswordHash (VARCHAR)
* Role (VARCHAR) (Admin/Staff/Customer)
* LastLogin (DATETIME, DEFAULT NULL)

---

## ✅ **Relationships Overview**

* **Hotels → Rooms (One-to-Many)**
* **Hotels → Staff (One-to-Many)**
* **Hotels → Departments (One-to-Many)**
* **Hotels → Amenities (One-to-Many)**
* **Customers → Bookings (One-to-Many)**
* **Bookings → Payments (One-to-One)**
* **Bookings → BookingServices (One-to-Many)**
* **Rooms → RoomAmenities (One-to-Many)**

---

## ✅ **Additional Notes**

* Use **Identity** for ID columns (e.g., HotelID, RoomID).
* Use **Composite Keys** for mapping tables:

  * `BookingServices (BookingID + ServiceID)`
  * `RoomAmenities (RoomID + AmenityID)`
* At least **one column in each table should have a DEFAULT value**.
* At least **two CHECK constraints** should be applied (e.g., price > 0, rating between 1 and 5).

---

## ✅ **What to Submit**

* **Create Query**
* **Sample Data Inserts** 

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

