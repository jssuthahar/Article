# 📘 Python Full Stack + AI Agent (Day-by-Day with Coding Challenges)

---

## **Month 2 – Backend & Full Stack (Days 21–40)**

---

### **Week 5: Flask/FastAPI Basics**

**Day 21: Flask Setup & Routes**

* Topics: Flask setup, routes, views
* Tasks:

  1. Install Flask & create Hello World app.
  2. Add route `/about` returning “About Page”.
  3. Add route `/contact` returning JSON.
  4. Route with variable `/user/<name>`.
  5. Return list of users as JSON.

**Day 22: Templates (Jinja2)**

* Topics: Templates, static files
* Tasks:

  1. Render HTML from Flask.
  2. Pass variables to template.
  3. Use loop inside template.
  4. Use `if` condition in template.
  5. Add CSS file to template.

**Day 23: Forms & Input Handling**

* Topics: Forms, GET/POST
* Tasks:

  1. Create login form.
  2. Validate username/password.
  3. Show success/failure message.
  4. Store submitted data in list.
  5. Display all submitted users.

**Day 24: Flask + DB (SQLAlchemy)**

* Topics: DB integration
* Tasks:

  1. Connect Flask with SQLite.
  2. Create User model.
  3. Insert user via form.
  4. Fetch all users.
  5. Display users in template.

**Day 25: Flask Mini Project**

* 🎯 Mini Project: **Blog Backend**

  * Add new post
  * View all posts
  * Edit & delete post
  * Store posts in DB
  * Display posts in template

---

### **Week 6: REST APIs with Flask/FastAPI**

**Day 26: REST Principles**

* Topics: REST, JSON APIs
* Tasks:

  1. Create `/api/hello` returning JSON.
  2. `/api/time` → return current time.
  3. `/api/users` → return hardcoded users.
  4. `/api/user/<id>` → return single user.
  5. `/api/sum/<a>/<b>` → return sum.

**Day 27: CRUD APIs with DB**

* Tasks:

  1. POST → add user.
  2. GET → fetch all users.
  3. GET → fetch user by ID.
  4. PUT → update user.
  5. DELETE → remove user.

**Day 28: Authentication (JWT)**

* Tasks:

  1. Install PyJWT.
  2. Generate token for login.
  3. Verify token before accessing API.
  4. Protect route `/api/secure`.
  5. Expired token handling.

**Day 29: API Documentation (Swagger)**

* Tasks:

  1. Install flasgger / FastAPI (has built-in docs).
  2. Add Swagger UI.
  3. Document `/api/users`.
  4. Add input parameters.
  5. Test APIs from Swagger.

**Day 30: API Mini Project**

* 🎯 Mini Project: **Student Management API**

  * Add student
  * View all students
  * Update student
  * Delete student
  * API secured with JWT

---

### **Week 7: .NET Core Web API (Optional)**

**Day 31: .NET Setup**

* Topics: Controllers, routing
* Tasks:

  1. Create .NET Core Web API project.
  2. Add controller `/api/hello`.
  3. Add route with parameter.
  4. Return JSON from API.
  5. Test API in Postman.

**Day 32: Models & EF Core**

* Tasks:

  1. Create Student model.
  2. Setup EF Core DB context.
  3. Add migration & create DB.
  4. Insert student into DB.
  5. Fetch all students.

**Day 33: CRUD APIs**

* Tasks:

  1. Add student (POST).
  2. Get all students (GET).
  3. Get student by ID.
  4. Update student.
  5. Delete student.

**Day 34: JWT Authentication in .NET**

* Tasks:

  1. Configure JWT auth.
  2. Generate token.
  3. Protect endpoint.
  4. Access token from header.
  5. Handle invalid token.

**Day 35: Comparison Project**

* 🎯 Mini Project: **Rebuild Student API in .NET**

  * Same features as Flask Student API
  * Compare code differences

---

### **Week 8: Full Stack Integration**

**Day 36: API + HTML Integration**

* Topics: HTML consuming Flask API
* Tasks:

  1. Fetch API data with JS.
  2. Display data in table.
  3. Add user form (POST API).
  4. Delete user (API call).
  5. Update user (API call).

**Day 37: AJAX & Fetch**

* Tasks:

  1. Create search bar calling API.
  2. Display search results.
  3. Add loading spinner.
  4. Handle API errors.
  5. Display success messages.

**Day 38: Authentication Flow**

* Tasks:

  1. Login form → Flask API (JWT).
  2. Store token in localStorage.
  3. Protect dashboard page.
  4. Logout functionality.
  5. Redirect unauthenticated users.

**Day 39: Products + Cart System**

* Tasks:

  1. API for products.
  2. Fetch products to UI.
  3. Add product to cart.
  4. Remove product from cart.
  5. Display total price.

**Day 40: Full Stack Mini Project**

* 🎯 Mini Project: **E-Commerce Lite App**

  * Login/Register
  * Browse products
  * Add to cart
  * Checkout
  * Store orders in DB
