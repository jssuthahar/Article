
# 🐳 Docker Setup in Visual Studio

[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)
[![Visual Studio](https://img.shields.io/badge/Visual%20Studio-5C2D91?logo=visual-studio&logoColor=white)](https://visualstudio.microsoft.com/)
[![.NET](https://img.shields.io/badge/.NET-512BD4?logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![Windows](https://img.shields.io/badge/Windows-0078D6?logo=windows&logoColor=white)](https://www.microsoft.com/windows)

This guide explains how to configure and run **Docker** inside **Visual Studio 2019/2022** for building and debugging containerized applications.

---

## ✅ Prerequisites

- [Visual Studio 2019/2022](https://visualstudio.microsoft.com/downloads/)  
- [.NET SDK](https://dotnet.microsoft.com/en-us/download) (for .NET apps)  
- [Docker Desktop](https://www.docker.com/products/docker-desktop)  
- Windows 10/11 with **WSL 2** (recommended) or **Hyper-V**  

---

## ⚙️ 1. Install Docker Desktop

1. Download and install Docker Desktop.  
2. Enable **WSL 2 backend** during installation.  
3. Verify installation:

```bash
docker --version
````

---

## ⚙️ 2. Enable Docker Support in Visual Studio

1. Open **Visual Studio Installer** → Modify installation.
2. Under **Workloads**, enable:

   * ✅ ASP.NET and web development
   * ✅ Container Development Tools

---

## ⚙️ 3. Add Docker Support to a Project

1. Open your solution in **Visual Studio**.
2. Right-click your project → **Add** → **Docker Support**.
3. Choose **Linux** (recommended) or **Windows** container.
4. A `Dockerfile` will be created automatically.

---

## ⚙️ 4. Add Docker Compose (Optional)

For multi-container apps:

1. Right-click the solution → **Add** → **Container Orchestration Support**.
2. Select **Docker Compose**.
3. A `docker-compose.yml` file will be created.

---

## ▶️ 5. Run and Debug

1. From the **Debug target dropdown**, select **Docker**.
2. Press **F5** to build and run inside a container.
3. Visual Studio will:

   * Build the Docker image
   * Run the container
   * Attach the debugger

---

## 📝 Example `Dockerfile`

```dockerfile
# Base runtime
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80

# Build stage
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["MyApp/MyApp.csproj", "MyApp/"]
RUN dotnet restore "MyApp/MyApp.csproj"
COPY . .
WORKDIR "/src/MyApp"
RUN dotnet build "MyApp.csproj" -c Release -o /app/build

# Publish stage
FROM build AS publish
RUN dotnet publish "MyApp.csproj" -c Release -o /app/publish

# Final stage
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MyApp.dll"]
```

---

## 🛠️ Troubleshooting

* Restart **Docker Desktop** and **Visual Studio** if issues occur.
* Ensure **WSL 2** or **Hyper-V** is enabled.
* Use **Linux containers** unless you need Windows-specific features.

---

## 📚 References

* [Visual Studio Docker Tools](https://learn.microsoft.com/en-us/visualstudio/containers/overview?view=vs-2022)
* [Docker Desktop Docs](https://docs.docker.com/desktop/)
