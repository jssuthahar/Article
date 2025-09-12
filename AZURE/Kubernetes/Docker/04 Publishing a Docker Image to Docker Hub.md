# 🐳 Publish Docker Image to Docker Hub from Visual Studio

---

## ✅ Prerequisites

* [Visual Studio 2019/2022](https://visualstudio.microsoft.com/downloads/)
* [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running
* A [Docker Hub account](https://hub.docker.com/signup)

---

## ⚙️ Step 1: Add Docker Support to Your Project

1. In **Visual Studio**, right-click your project → **Add** → **Docker Support**.
2. Choose **Linux** (recommended) or **Windows** container.
3. Visual Studio generates a `Dockerfile`.

---

## ⚙️ Step 2: Configure Docker Hub Login

1. Open a terminal (inside VS or outside).
2. Run:

```bash
docker login
```

3. Enter your **Docker Hub username** and **password (or token)**.

---

## ⚙️ Step 3: Build Image from Visual Studio

1. In **Solution Explorer**, right-click the project → **Publish**.
2. Select **Container Registry**.
3. Choose **Docker Hub**.
4. Sign in with your Docker Hub credentials (from VS prompt).
5. Enter:

   * **Repository** → `username/repository`
   * **Tag** → e.g., `latest` or `1.0`

---

## ⚙️ Step 4: Publish Image

1. Click **Publish**.
2. Visual Studio will:

   * Build the Docker image
   * Tag it
   * Push it to Docker Hub

---

## ⚙️ Step 5: Verify on Docker Hub

1. Go to [Docker Hub Repositories](https://hub.docker.com/repositories).
2. Check if your image (`username/repository:tag`) appears.

---

## 🛠 Alternative (Command Line from VS Terminal)

If you prefer CLI inside Visual Studio Terminal:

```bash
# Build
docker build -t username/myapp:latest .

# Push
docker push username/myapp:latest
```

---

## 📚 References

* [Publish Docker Images from Visual Studio](https://learn.microsoft.com/en-us/visualstudio/containers/container-tools-publish?view=vs-2022)
* [Docker Hub Docs](https://docs.docker.com/docker-hub/)
