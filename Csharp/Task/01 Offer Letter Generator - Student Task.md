
# 📝 Offer Letter Generator -  Task

## ✅ Objective

Create a **dynamic offer letter generator** that:

* **Collects all required inputs** related to an offer letter (candidate name, job title, joining date, salary, etc.).
* **Validates** all user inputs to ensure correctness (e.g., non-empty, proper format for date, numeric salary).
* **Replaces placeholders** in an offer letter template with user-provided values.
* **Displays the generated offer letter as a message** (in the console or as a formatted UI output).

---

## 📌 Requirements

### 1. Inputs to Collect

The program should ask the user for the following details:

* **Candidate Name** (string, required, only alphabets allowed)
* **Position/Job Title** (string, required)
* **Joining Date**
* **Annual Salary** (numeric, required, positive number)
* **Company Name** (string, required)
* **Company Address** (string, required)
* **HR Name** (string, required)
* **HR Contact Email** (valid email format)

---

### 2. Validations

* **Candidate Name & Job Title** → Must not be empty, only alphabets allowed.
* **Annual Salary** → Must be a positive number (greater than 0).
* **Company Name & Address** → Not empty.
* **Email** → Must be a valid email format.

---

### 3. Offer Letter Template

Use the following template with placeholders:

```
Dear [CandidateName],

We are pleased to offer you the position of [JobTitle] at [CompanyName]. Your joining date will be [JoiningDate], and your annual salary will be [Salary].

Please report to our office at [CompanyAddress] on your joining date. For any queries, feel free to contact [HRName] at [HREmail].

Congratulations and welcome to the team!

Best Regards,  
[CompanyName]  
```

---

### 4. Output

* Replace all placeholders with user-provided values.
* Display the **final offer letter** in the console (or in a UI if using WPF/WinForms).



## ✅ Example Output

```
Dear JapaPriya,

We are pleased to offer you the position of Software Engineer at MSDEVBUILD. Your joining date will be 01-10-2025, and your annual salary will be 80,000 INR.

Please report to our office at 123, Tech Park, Kuala Lumpur on your joining date. For any queries, feel free to contact Sarah Lee at hr@devbrains.com.

Congratulations and welcome to the team!

Best Regards,  
MSDEVBRAINS
```
