# Sending Emails in .NET Core - Step by Step Guide

## Introduction
Sending emails in a .NET Core application is a common requirement for notifications, confirmations, and alerts. This guide provides a step-by-step approach to sending emails using `SmtpClient` and third-party services like SendGrid.

---

## Step 1: Install Required Packages
To send emails in .NET Core, you can use the built-in `SmtpClient` (deprecated) or third-party libraries like MailKit or SendGrid.

### Using `SmtpClient` (Not Recommended for .NET Core 6 and later)
If you still want to use `SmtpClient`, install:
```sh
Install-Package System.Net.Mail
```

### Using MailKit (Recommended)
```sh
Install-Package MailKit
```

### Using SendGrid (For Cloud-Based Email Services)
```sh
Install-Package SendGrid
```

---

## Step 2: Configure SMTP Settings
Update `appsettings.json` with SMTP details:
```json
{
  "EmailSettings": {
    "SmtpServer": "smtp.gmail.com",
    "Port": 587,
    "SenderEmail": "your-email@gmail.com",
    "SenderPassword": "your-password"
  }
}
```

---

## Step 3: Sending Email Using `SmtpClient`
```csharp
using System;
using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Configuration;

class Program
{
    static void Main()
    {
        var config = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json")
            .Build();

        var smtpClient = new SmtpClient(config["EmailSettings:SmtpServer"], int.Parse(config["EmailSettings:Port"]))
        {
            Credentials = new NetworkCredential(config["EmailSettings:SenderEmail"], config["EmailSettings:SenderPassword"]),
            EnableSsl = true
        };

        var mailMessage = new MailMessage
        {
            From = new MailAddress(config["EmailSettings:SenderEmail"]),
            Subject = "Test Email",
            Body = "This is a test email from .NET Core",
            IsBodyHtml = true,
        };
        mailMessage.To.Add("recipient@example.com");

        smtpClient.Send(mailMessage);
        Console.WriteLine("Email sent successfully!");
    }
}
```

---

## Step 4: Sending Email Using MailKit (Recommended)
```csharp
using System;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MimeKit;
using Microsoft.Extensions.Configuration;

class Program
{
    static async Task Main()
    {
        var config = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json")
            .Build();

        var email = new MimeMessage();
        email.From.Add(new MailboxAddress("Sender Name", config["EmailSettings:SenderEmail"]));
        email.To.Add(new MailboxAddress("Recipient Name", "recipient@example.com"));
        email.Subject = "Test Email";
        email.Body = new TextPart("plain") { Text = "Hello from MailKit!" };

        using var smtp = new SmtpClient();
        await smtp.ConnectAsync(config["EmailSettings:SmtpServer"], int.Parse(config["EmailSettings:Port"]), MailKit.Security.SecureSocketOptions.StartTls);
        await smtp.AuthenticateAsync(config["EmailSettings:SenderEmail"], config["EmailSettings:SenderPassword"]);
        await smtp.SendAsync(email);
        await smtp.DisconnectAsync(true);

        Console.WriteLine("Email sent successfully!");
    }
}
```

---

## Step 5: Sending Email Using SendGrid (Cloud-Based Solution)
### Get SendGrid API Key
1. Create an account at [SendGrid](https://sendgrid.com/).
2. Generate an API key.

### Send Email with SendGrid
```csharp
using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using SendGrid;
using SendGrid.Helpers.Mail;

class Program
{
    static async Task Main()
    {
        var config = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json")
            .Build();

        var client = new SendGridClient(config["EmailSettings:SendGridApiKey"]);
        var from = new EmailAddress("your-email@gmail.com", "Sender Name");
        var subject = "Test Email from SendGrid";
        var to = new EmailAddress("recipient@example.com", "Recipient Name");
        var plainTextContent = "Hello, this is a test email using SendGrid!";
        var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, null);

        var response = await client.SendEmailAsync(msg);
        Console.WriteLine(response.StatusCode);
    }
}
```

---

## Conclusion
- **Use `SmtpClient`** for simple email sending (deprecated but still works for SMTP servers).
- **Use `MailKit`** for better performance and reliability.
- **Use `SendGrid`** for cloud-based email delivery and scalability.


 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
