# 🌐 Localization Task

## 📖 User Story

As a **student building a WPF app**,
I want to **select a language on the first screen and then complete a registration form in that language**,
So that **users can interact with the application in their preferred language**.

---

## ✅ Acceptance Criteria

### 1. Language Selection Screen

* **AC1.1**: The first screen must have a dropdown (or list) to select a language (e.g., English, French, Hindi, etc.).
* **AC1.2**: There must be a button labeled **"Enter"** to confirm the language choice.
* **AC1.3**: When the user selects a language and presses **"Enter"**, the selected language must be stored (in memory or settings).
* **AC1.4**: If no language is selected and **"Enter"** is pressed, an error message should appear (localized in the default language).

---

### 2. Registration Screen

* **AC2.1**: After pressing **"Enter"**, the user should be navigated to the **registration screen**.
* **AC2.2**: The registration screen must have **10 fields** (example):

  1. First Name
  2. Last Name
  3. Email
  4. Password
  5. Confirm Password
  6. Gender
  7. Date of Birth
  8. Country
  9. Phone Number
  10. Address
* **AC2.3**: All field labels, button text, and validation messages should appear in the **language selected** on the first screen.
* **AC2.4**: The registration screen should include a **"Submit"** button (localized label).
* **AC2.5**: If any field validation fails (e.g., empty email), the **error message must appear in the selected language**.

---

### 3. Localization Behavior

* **AC3.1**: Localization must be implemented using **WPF Resource files (.resx) or ResourceDictionary with `x:Uid`**, not hardcoded strings.
* **AC3.2**: Switching languages must dynamically load translated strings from resource files.
* **AC3.3**: The same form structure should be reused for all languages; only text should change.
* **AC3.4**: At least **two languages** (e.g., English + 1 more) should be fully supported and tested.

---

## 📌 Definition of Done

* The app starts with a **Language Selection Screen**.
* After choosing a language and pressing **Enter**, the **Registration Screen** opens.
* All text (labels, buttons, errors) on the registration screen reflect the **chosen language**.
* At least **10 registration fields** are localized.
* Works for at least **5 languages** without errors.

## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)

