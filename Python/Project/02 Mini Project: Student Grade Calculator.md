# 🎓 Mini Project: Student Grade Calculator

This project will calculate grades based on student marks.

---

## 🔹 Requirements

1. Ask for **student name** and **marks** in 3 subjects.
2. Calculate:

   * Total marks
   * Average percentage
   * Grade (A, B, C, D, Fail)
3. Keep asking for new students until the user chooses **Exit**.

---

## 📝 Code Example

```python
# Student Grade Calculator

while True:
    print("\n--- Student Grade Calculator ---")
    name = input("Enter student name (or type 'exit' to quit): ")
    
    if name.lower() == "exit":
        print("Exiting program... 👋")
        break
    
    # Input marks
    subject1 = float(input("Enter marks for Subject 1: "))
    subject2 = float(input("Enter marks for Subject 2: "))
    subject3 = float(input("Enter marks for Subject 3: "))
    
    # Calculations
    total = subject1 + subject2 + subject3
    average = total / 3
    
    # Grade assignment
    if average >= 90:
        grade = "A"
    elif average >= 75:
        grade = "B"
    elif average >= 60:
        grade = "C"
    elif average >= 40:
        grade = "D"
    else:
        grade = "Fail"
    
    # Output
    print(f"\nStudent: {name}")
    print(f"Total Marks: {total}")
    print(f"Average: {average:.2f}%")
    print(f"Grade: {grade}")
```

---

## 🚀 Real-Time Example

```
--- Student Grade Calculator ---
Enter student name (or type 'exit' to quit): John
Enter marks for Subject 1: 95
Enter marks for Subject 2: 88
Enter marks for Subject 3: 92

Student: John
Total Marks: 275.0
Average: 91.67%
Grade: A
```

---

## 🛠 Developer Tips (0–5 Years)

👶 **0–1 Year:**

* Start with **3 subjects only**.
* Practice using `if-elif-else` conditions.

👨‍💻 **2–3 Years:**

* Validate marks (`0 ≤ marks ≤ 100`).
* Add option for **number of subjects** (use a loop to enter marks).

🧑‍💼 **4–5 Years:**

* Store multiple students in a **list of dictionaries**.
* Show a **class topper report** at the end.
* Think about **file storage** (save student records in `.csv`).

---

## 📝 Task Assignments

1. Add a feature to calculate **class topper** (highest average).
2. Store all students’ details in a list and display at the end.
3. Allow **any number of subjects** using a loop.
4. Add **grade boundaries** as configurable values (not hardcoded).
5. Save all results into a **CSV file** (advanced).

---

## 🎤 Interview Questions & Answers

**Q1. What is the difference between `if-elif-else` and multiple `if` statements?**
👉 `if-elif-else` checks only until one condition is `True`, but multiple `if` checks all conditions.

---

**Q2. How would you handle invalid marks (e.g., -10 or 150)?**
👉 Use `if not (0 <= marks <= 100): print("Invalid marks")`.

---

**Q3. What data structure would you use to store multiple students?**
👉 A **list of dictionaries** or a **dictionary of lists**.

---

**Q4. How do you avoid repeating code for multiple subjects?**
👉 Use a `for` loop to read marks dynamically.

---

**Q5. How can you extend this to a real-world school system?**
👉 By storing data in **databases**, adding **authentication**, and providing **report generation**.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)


