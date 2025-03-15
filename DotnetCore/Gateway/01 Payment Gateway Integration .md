# Razorpay Payment Gateway Integration in .NET Core

## What is a Payment Gateway?

A **payment gateway** is a technology that enables online transactions by authorizing and processing payments between customers and merchants. It acts as an intermediary between the customer’s bank and the merchant’s website to ensure secure and seamless transactions. Payment gateways encrypt sensitive payment details, verify the authenticity of transactions, and facilitate fund transfers.

## Payment Gateway Options

There are several payment gateway providers available, each offering different features, pricing, and integration options. Some of the most popular payment gateways include:

- **Razorpay** - A widely used payment gateway in India, offering seamless API integration and multiple payment methods.
- **PayPal** - A globally recognized payment gateway that supports international transactions and provides secure checkout options.
- **Stripe** - A developer-friendly gateway with robust API support, popular among startups and enterprises.
- **PayU** - A preferred choice in emerging markets, offering easy integration and localized payment options.
- **CCAvenue** - A popular gateway in India with a variety of payment options and strong security features.
- **Instamojo** - A simple payment gateway focused on small businesses and startups in India.
- **Authorize.Net** - A reliable and secure payment solution widely used in North America.

This guide explains how to integrate the Razorpay payment gateway into a .NET Core web application step by step.

## Prerequisites

- .NET Core SDK installed
- Visual Studio or any preferred IDE
- Razorpay account (Signup at [Razorpay](https://razorpay.com/))
- API Key from Razorpay Dashboard

## Step 1: Create a .NET Core Web Application

1. Open Visual Studio and create a new **ASP.NET Core Web Application**.
2. Choose **Web Application (Model-View-Controller)**.
3. Click **Create**.

## Step 2: Install Razorpay NuGet Package

Run the following command in the **Package Manager Console**:

```sh
Install-Package Razorpay
```

Or using .NET CLI:

```sh
dotnet add package Razorpay
```

## Step 3: Configure Razorpay API Keys

1. Log in to your Razorpay dashboard.
2. Navigate to **Settings > API Keys**.
3. Generate a new API key and note down the **Key ID** and **Key Secret**.
4. Store them in `appsettings.json`:

```json
{
  "Razorpay": {
    "Key": "your_key_id",
    "Secret": "your_key_secret"
  }
}
```

## Step 4: Create Razorpay Service

Create a new service file **RazorpayService.cs** inside the `Services` folder.

```csharp
using Razorpay.Api;
using System;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;

public class RazorpayService
{
    private readonly string _key;
    private readonly string _secret;

    public RazorpayService(IConfiguration configuration)
    {
        _key = configuration["Razorpay:Key"];
        _secret = configuration["Razorpay:Secret"];
    }

    public Order CreateOrder(int amount, string currency = "INR")
    {
        Dictionary<string, object> options = new Dictionary<string, object>
        {
            { "amount", amount * 100 }, // Amount in paise
            { "currency", currency },
            { "payment_capture", 1 }
        };

        RazorpayClient client = new RazorpayClient(_key, _secret);
        return client.Order.Create(options);
    }
}
```

## Step 5: Add Service to Dependency Injection

In `Startup.cs` or `Program.cs` (for .NET 6+), register the service:

```csharp
builder.Services.AddSingleton<RazorpayService>();
```

## Step 6: Create Payment Controller

Create **PaymentController.cs** inside the `Controllers` folder.

```csharp
using Microsoft.AspNetCore.Mvc;
using System;

public class PaymentController : Controller
{
    private readonly RazorpayService _razorpayService;
    
    public PaymentController(RazorpayService razorpayService)
    {
        _razorpayService = razorpayService;
    }

    public IActionResult Index()
    {
        return View();
    }

    [HttpPost]
    public IActionResult CreateOrder(int amount)
    {
        var order = _razorpayService.CreateOrder(amount);
        return Json(order);
    }
}
```

## Step 7: Create Payment View

Inside `Views/Payment/Index.cshtml`, add the following Razorpay checkout script:

```html
<button id="pay-btn">Pay Now</button>
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<script>
    document.getElementById("pay-btn").addEventListener("click", function () {
        fetch("/Payment/CreateOrder", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ amount: 500 }) })
        .then(response => response.json())
        .then(order => {
            var options = {
                "key": "your_key_id",
                "amount": order.amount,
                "currency": order.currency,
                "order_id": order.id,
                "handler": function (response) {
                    alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
                }
            };
            var rzp1 = new Razorpay(options);
            rzp1.open();
        });
    });
</script>
```

## Step 8: Run the Application

Run the application and navigate to `/Payment/Index`. Click **Pay Now** to test the integration.

## Conclusion

You have successfully integrated Razorpay into your .NET Core application. You can now extend it by adding webhook handling and database storage for payment details.

### Further Enhancements
- Add payment status handling and logging.
- Store transaction details in a database.
- Implement webhooks to track payment events.

 ## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
