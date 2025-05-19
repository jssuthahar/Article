# 📘 How to Connect C# Code with Azure API Management (APIM)

This guide explains how to **call an API published on Azure API Management (APIM)** using a simple C# console application.

---

## 🧾 Overview

You will:

1. Get the API URL from Azure APIM
2. Create a new C# console app
3. Write simple code using `HttpClient`
4. Add headers like the **subscription key** if needed

---

## ✅ Prerequisites

* Azure API Management instance with an API published
* API **Base URL** and **Resource Path**
* **Subscription key** (if required)
* Visual Studio or .NET SDK installed

---

## 🔗 Step 1: Get Your API Endpoint

From Azure Portal:

1. Go to **API Management service**
2. Navigate to **APIs**
3. Choose your API and copy the **Frontend URL**, e.g.:

```
https://myapi.azure-api.net/products
```

> You may need a **subscription key** (found under **Subscriptions**).

---

## 🛠️ Step 2: Create a C# Project

```bash
dotnet new console -n AzureApiClient
cd AzureApiClient
```

---

## ✍️ Step 3: Write C# Code to Call Azure API

Open `Program.cs` and use this code:

```csharp
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        string apiUrl = "https://myapi.azure-api.net/products"; // Replace with your API URL
        string subscriptionKey = "your-subscription-key";       // Replace with your key if required

        using var client = new HttpClient();

        // Add subscription key to header if needed
        client.DefaultRequestHeaders.Add("Ocp-Apim-Subscription-Key", subscriptionKey);

        var response = await client.GetAsync(apiUrl);

        if (response.IsSuccessStatusCode)
        {
            var content = await response.Content.ReadAsStringAsync();
            Console.WriteLine("API Response:\n" + content);
        }
        else
        {
            Console.WriteLine($"API Call Failed: {response.StatusCode}");
        }
    }
}
```

---

## 🚀 Step 4: Run the App

```bash
dotnet run
```

✅ The response from your Azure API should display in the terminal.

---

## 🔒 Optional: Secure Your API (If Not Yet Done)

Azure APIs can use:

| Method             | Description                                      |
| ------------------ | ------------------------------------------------ |
| Subscription key   | Basic header check (`Ocp-Apim-Subscription-Key`) |
| OAuth 2.0 / JWT    | Advanced, used with Azure AD                     |
| Client Certificate | For backend calls                                |

---

## 📌 Summary

| Step                           | Status |
| ------------------------------ | ------ |
| Get API URL from Azure         | ✅      |
| Create C# Console App          | ✅      |
| Add API Call with `HttpClient` | ✅      |
| Add subscription key           | ✅      |
| Run and test                   | ✅      |

---

## 📂 Folder Structure

```
AzureApiClient/
│
├── Program.cs
└── AzureApiClient.csproj
```


## Connect with Me
- **LinkedIn**: [Suthahar Jeganathan](https://www.linkedin.com/in/jssuthahar/)
- **YouTube**: [MSDEVBUILD](https://www.youtube.com/@MSDEVBUILD)
- **YouTube Tamil**: [MSDEVBUILD TAMIL](https://www.youtube.com/@MSDEVBUILDTamil)
- **Blog**: [Blog](https://www.msdevbuild.com/)
- **Follow Whatsapp**: [Whatsapp](https://www.whatsapp.com/channel/0029Va5j2rHEFeXcTlUhQB0J)
f you'd like this version tailored for a **.NET + Angular full-stack app** setup, or if you want to include a **GitHub Actions CI/CD pipeline** for deploying APIs to Azure APIM.
```
