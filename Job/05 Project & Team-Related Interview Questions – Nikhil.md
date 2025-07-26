# 💬 Project & Team-Related Interview Questions – Nikhil

A helpful guide for answering common interview questions related to your internship projects and teamwork experience as a .NET Full Stack Developer.

---

## 🔧 Project-Related Interview Questions & Suggested Answers

### 1. What was your role in the project?

> I was responsible for both frontend and backend development. I created REST APIs in ASP.NET Core for user registration, product listing, and order processing. I also developed UI screens using Razor Pages and WPF, and integrated the application with SQL Server using Entity Framework.

### 2. Did you work in a team or individually?

> I worked as part of a small team during my internship. We had weekly stand-up meetings and used Git for version control. I collaborated with a senior developer who reviewed my code and guided me through complex features like authentication and deployment.

### 3. How did you manage version control?

> We used Git and GitHub to manage our source code. I created feature branches for each module and followed pull request workflows for merging after code review.

### 4. Did you use any project management tools?

> Yes, we used tools like Trello and sometimes Azure DevOps to manage tasks and track the progress of modules like login, shopping cart, and order history.

### 5. What challenges did you face and how did you solve them?

> One major challenge was managing cart items between guest and logged-in users. I solved it by storing cart items in session and then merging them into the database once the user logs in. I also faced issues with Entity Framework migrations, which I resolved by learning rollback techniques and using fluent API configurations.

### 6. How did you ensure data validation and security?

> I used Data Annotations in C# for server-side validation, and added client-side validation using JavaScript. For security, I implemented ASP.NET Identity, encrypted passwords, and protected routes based on user roles.

### 7. How did you test your application?

> I performed manual testing and wrote unit tests for critical backend services. I used tools like Postman to test API endpoints, and used breakpoints and debug mode in Visual Studio to test UI flow.

### 8. Did you deploy your project? How?

> Yes, I deployed one of my web applications on Azure App Services. I configured the deployment pipeline using GitHub actions and updated the connection strings through the Azure Portal.

### 9. What design patterns did you follow?

> In my WPF project, I followed the MVVM (Model-View-ViewModel) pattern. For the backend APIs, I structured the code using repository and service layers to separate concerns and improve maintainability.

### 10. What technologies did you use for the frontend and backend?

> For frontend: Razor Pages, Bootstrap, and WPF/XAML.
> For backend: ASP.NET Core, C#, Web API, and Entity Framework.
> Database: SQL Server.
> For desktop apps: WPF with MVVM.

### 11. Did you integrate any third-party libraries or services?

> Yes, I integrated Bootstrap for responsive design, and used some NuGet packages like AutoMapper for object mapping and ClosedXML for Excel export in billing reports.

### 12. How did you handle performance or scalability?

> I optimized database queries using `.AsNoTracking()` in Entity Framework for read-only operations. I also paginated product listings and added indexing to frequently used columns.

### 13. Did you ever fix a major bug or production issue?

> Yes, in my billing project, I fixed an issue where GST calculations were not accurate for certain items. I restructured the calculation logic and created unit tests to confirm the correctness.

### 14. How did you handle user authentication and roles?

> I implemented ASP.NET Identity for user management, which allowed secure registration, login, and role-based access. Admin users had separate dashboards and privileges.

### 15. What did you learn from your internship projects?

> I learned how to structure full-stack applications, write scalable and clean code, and work in a team environment. It also helped me gain confidence in using .NET technologies and handling real-time business logic.

---

## 🧠 Additional Questions and Answers

### 16. What did you learn from your internship experience?

> I learned how to work in a structured development environment, how to follow Agile practices, and how to collaborate with developers through code reviews and sprints. I also learned how to communicate progress and blockers effectively.

### 17. What is Agile and did you follow it?

> Agile is a software development methodology focused on iterative development and continuous feedback. Yes, during my internship, we followed Agile with weekly sprints, daily stand-ups, and sprint retrospectives.

### 18. How did you use Git in your project?

> I used Git to create feature branches, push code, resolve merge conflicts, and raise pull requests. It helped maintain code integrity and enabled better collaboration.

### 19. How did you integrate payment gateway in your project?

> In the online shopping project, I integrated Razorpay payment gateway for secure transactions. I implemented a callback URL to verify payments and updated order status upon confirmation.

### 20. How did you implement email notifications?

> I used SMTP with MailKit to send confirmation emails for order placement and password reset. Emails were triggered using background tasks after critical events like order confirmation.

### 21. How did you design your project architecture?

> I followed a layered architecture with separate layers for presentation (Razor/WPF), business logic (Services), and data access (Repository with EF Core). This helped in keeping code modular, testable, and maintainable.

### 22. What security measures did you implement?

> I implemented authentication and authorization using ASP.NET Identity, used HTTPS, encrypted connection strings, and handled sensitive logic on the server side only.

---

## 🧠 Bonus Tips for Interview

| Scenario                              | What to Say                                                                                                       |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| If they say "Any challenges?"         | "Yes, I had to debug session handling for cart logic. I learned how to manage state across users."                |
| If they ask "Did you work in a team?" | "Yes, I worked closely with a senior developer and reported progress regularly. We used Git for version control." |
| If they ask "Do you know deployment?" | "Yes, I tested deployment using Azure App Service and configured connection strings securely."                    |

---

Use this guide to prepare for real-time project discussion during interviews. Be confident, clear, and always back your answers with examples.
