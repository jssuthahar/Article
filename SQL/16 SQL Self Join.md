
# SQL Self Join

## 📘 What is a Self Join?

A **self join** is a regular join, but the table is joined with itself. It's useful when rows in the same table are related to each other in a hierarchical or relational way.

You typically use **aliases** to differentiate between the two instances of the same table.

---

## 📊 Sample Table: `Employees`

| EmployeeID | Name     | ManagerID |
|------------|----------|-----------|
| 1          | Alice    | NULL      |
| 2          | Bob      | 1         |
| 3          | Charlie  | 1         |
| 4          | David    | 2         |
| 5          | Eve      | 2         |

---

## 🧠 Use Case

Find all employees and their managers' names.

---

## 🧾 Self Join Query

```sql
SELECT 
    E.Name AS Employee,
    M.Name AS Manager
FROM 
    Employees E
LEFT JOIN 
    Employees M ON E.ManagerID = M.EmployeeID;
````

---

## 🔍 Explanation

* `E` is the alias for the employee.
* `M` is the alias for the manager.
* We're joining the table `Employees` with itself:

  * `E.ManagerID = M.EmployeeID` matches each employee to their manager.

---

## 📈 Diagram

```plaintext
+-------------+            +-------------+
| Employees E |            | Employees M |
+-------------+            +-------------+
| EmployeeID  |<---------->| ManagerID   |
| Name        |            | Name        |
| ManagerID   |            | EmployeeID  |
+-------------+            +-------------+
```

For example, Bob reports to Alice. So:

* Bob's `ManagerID` is `1`
* Alice's `EmployeeID` is `1`
* The self join matches them.

---

## ✅ Output of the Query

| Employee | Manager |
| -------- | ------- |
| Alice    | NULL    |
| Bob      | Alice   |
| Charlie  | Alice   |
| David    | Bob     |
| Eve      | Bob     |

---

## 💬 Interview Questions and Answers

### ❓ 1. What is a self join in SQL?

**Answer:** A self join is a join where a table is joined with itself to compare rows within the same table.

---

### ❓ 2. When do you use a self join?

**Answer:** When data within a table has a hierarchical or parent-child relationship, such as employees and managers.

---

### ❓ 3. Can a self join be an INNER JOIN or OUTER JOIN?

**Answer:** Yes. A self join can be any type of join: `INNER JOIN`, `LEFT JOIN`, etc., depending on the requirement.

---

### ❓ 4. Why do we use table aliases in a self join?

**Answer:** To differentiate between the two instances of the same table during the join.

---

### ❓ 5. What are the performance implications of a self join?

**Answer:** Self joins can be resource-intensive on large tables, especially without proper indexing on the join keys.

---

## 🧪 Practice Exercise

Try this:

> Write a query to list all employees who don't have a manager.

```sql
SELECT Name FROM Employees WHERE ManagerID IS NULL;
```

---

---
 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
