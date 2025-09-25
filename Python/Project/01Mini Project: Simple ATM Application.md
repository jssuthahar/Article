# 🏦 Mini Project: Simple ATM Application

This project will simulate a **basic ATM system**.
👉 Students will practice **input, conditions, loops, and print formatting**.

---

## 🔹 Requirements

1. User should **enter PIN** to access.
2. Show a **menu** with options:

   * Check Balance
   * Deposit Money
   * Withdraw Money
   * Exit
3. Perform actions until the user chooses **Exit**.

---

## 📝 Code Example

```python
# Simple ATM Program

balance = 1000
pin = "1234"

# Step 1: PIN check
entered_pin = input("Enter your PIN: ")

if entered_pin == pin:
    print("Login successful ✅")
    
    while True:
        print("\n----- ATM Menu -----")
        print("1. Check Balance")
        print("2. Deposit Money")
        print("3. Withdraw Money")
        print("4. Exit")
        
        choice = input("Choose an option: ")
        
        if choice == "1":
            print(f"Your balance is: ${balance}")
        
        elif choice == "2":
            amount = float(input("Enter amount to deposit: "))
            balance += amount
            print(f"Deposited ${amount}. New balance: ${balance}")
        
        elif choice == "3":
            amount = float(input("Enter amount to withdraw: "))
            if amount <= balance:
                balance -= amount
                print(f"Withdrew ${amount}. New balance: ${balance}")
            else:
                print("Insufficient balance ❌")
        
        elif choice == "4":
            print("Thank you for using the ATM. Goodbye 👋")
            break
        
        else:
            print("Invalid choice, try again ❌")
else:
    print("Incorrect PIN ❌ Access Denied")
```

---

## 🚀 Real-Time Example

```
Enter your PIN: 1234
Login successful ✅

----- ATM Menu -----
1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Exit
Choose an option: 1
Your balance is: $1000
```

---

## 🛠 Developer Tips (0–5 Years)

👶 **0–1 Year:**

* Start with a **fixed PIN and balance**.
* Focus on using `if-else`, `while`, and `input()`.

👨‍💻 **2–3 Years:**

* Add **validation** (e.g., no negative deposits).
* Format balance with **two decimals** using `f"{balance:.2f}"`.

🧑‍💼 **4–5 Years:**

* Use **constants** for PIN attempts.
* Replace `print` with **logging** in real systems.
* Think about **security** (never store PIN as plain text in real-world).

---

## 📝 Task Assignments

1. Modify the program to allow **3 attempts** for entering the PIN, then block access.
2. Add a **transaction history** (list of deposits & withdrawals).
3. Prevent the user from depositing or withdrawing **negative amounts**.
4. Add a **minimum balance check** (cannot go below $100).
5. Allow the user to **change their PIN** inside the menu.

---

## 🎤 Interview Questions & Answers

**Q1. How do you keep looping until a user exits?**
👉 Use a `while True` loop and break when exit condition is met.

---

**Q2. How would you prevent infinite loops?**
👉 Always include a condition or `break` to stop.

---

**Q3. What happens if user enters text when number is expected?**
👉 `ValueError`. Use `try-except` to handle gracefully.

---

**Q4. How do you secure input like PIN in real projects?**
👉 Use hashing (e.g., bcrypt) and never store raw PINs.

---

**Q5. How can you make the ATM program modular?**
👉 By using **functions** (`def check_balance()`, `def deposit()`, etc.) → that’s the next step in learning.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
- [![Follow on GitHub](https://img.shields.io/github/followers/jssuthahar?label=Follow&style=social)](https://github.com/jssuthahar)


