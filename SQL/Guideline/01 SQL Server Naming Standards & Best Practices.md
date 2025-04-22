# 📘 SQL Server Naming Standards & Best Practices

## 🎯 Goals of Naming Conventions
- Consistency
- Readability
- Avoid reserved keywords
- Easy understanding for team members

---

## 🧱 General Rules
- Use **PascalCase** or **snake_case**, but be consistent
- Avoid **spaces** or **special characters**
- Avoid **SQL reserved keywords** (like `SELECT`, `TABLE`, `FROM`)
- Use **singular names** for table names (recommended)

---

## 🧾 Table Naming Conventions
| Component         | Example                    | Notes                                  |
|------------------|----------------------------|----------------------------------------|
| Table Name       | `Employee`, `ProductOrder` | Use singular nouns                     |
| Lookup Table     | `StatusType`, `CountryList`| Describes type or list                 |
| Junction Table   | `StudentCourse`            | For many-to-many relationships         |

---

## 🔑 Column Naming Conventions
| Purpose         | Example             | Notes                                   |
|----------------|---------------------|-----------------------------------------|
| Primary Key     | `EmployeeID`        | Include table name for clarity          |
| Foreign Key     | `DepartmentID`      | Same name as referenced primary key     |
| Boolean         | `IsActive`, `HasPaid` | Prefix with `Is`, `Has`, or `Can`     |
| Date/Time       | `CreatedDate`, `LastModified` | Use full words for clarity        |

---

## ⚙️ Stored Procedures Naming
- Prefix with `sp_` **only if system procedure**, otherwise avoid it
- Use verbs for actions
```sql
usp_GetEmployeeDetails
usp_InsertNewOrder
usp_UpdateSalaryByDept
```
✅ Prefix with `usp_` (user stored procedure)

---

## 📦 Views Naming
```sql
vw_EmployeeSummary
vw_OrdersByRegion
```
✅ Use `vw_` to indicate it's a view

---

## 📜 Constraints Naming
| Type            | Format Example                 |
|----------------|---------------------------------|
| Primary Key     | `PK_Employee`                  |
| Foreign Key     | `FK_Employee_Department`       |
| Unique Key      | `UQ_Employee_Email`            |
| Check Constraint| `CK_Employee_Age`              |
| Default         | `DF_Employee_JoinDate`         |

---

## 🗃️ Index Naming
```sql
IX_Employee_LastName
IX_Order_CustomerID
```
✅ Use `IX_` prefix + table + column name

---

## ⚠️ Reserved Keywords to Avoid
Avoid using SQL keywords like:
- `SELECT`, `TABLE`, `COLUMN`, `DATE`, `INT`, etc.

If absolutely needed, wrap with square brackets:
```sql
SELECT [Date], [Order] FROM [Sales]
```
But this is discouraged in favor of clean naming.

---

## 🚫 Avoid
- Abbreviations (e.g., `EmpNm`, `DptID`) unless they’re well known
- Mixed conventions (snake_case in one place, PascalCase in another)
- Overly long names or cryptic short ones

---

## ✅ Good Naming Example
```sql
CREATE TABLE Employee (
  EmployeeID INT PRIMARY KEY,
  FirstName VARCHAR(50),
  LastName VARCHAR(50),
  Email VARCHAR(100),
  IsActive BIT,
  CreatedDate DATETIME
)

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
