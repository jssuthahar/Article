# 🐳 Publishing a Docker Image to Docker Hub

Docker Hub is a cloud registry where you can **store and share container images**. Below are the steps to publish your image.

---

## ✅ Prerequisites

* A [Docker Hub account](https://hub.docker.com/signup)
* [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running
* A project with a working `Dockerfile`

---

## ⚙️ 1. Login to Docker Hub

Run in terminal/PowerShell:

```bash
docker login
```

Enter your **Docker Hub username** and **password (or access token)**.

---

## ⚙️ 2. Build Your Docker Image

Navigate to your project folder (where `Dockerfile` exists) and run:

```bash
docker build -t <dockerhub-username>/<repository-name>:<tag> .
```

Example:

```bash
docker build -t myusername/myapp:1.0 .
```

* `myusername` → your Docker Hub username
* `myapp` → repository name
* `1.0` → version tag

---

## ⚙️ 3. Test the Image Locally

Before pushing, test your image:

```bash
docker run -d -p 8080:80 myusername/myapp:1.0
```

Now open `http://localhost:8080` to verify.

---

## ⚙️ 4. Push Image to Docker Hub

Run:

```bash
docker push myusername/myapp:1.0
```

This uploads your image to Docker Hub.

---

## ⚙️ 5. Pull Image from Docker Hub (Verify)

On another system (or after removing it locally), try:

```bash
docker pull myusername/myapp:1.0
```

Run it:

```bash
docker run -d -p 8080:80 myusername/myapp:1.0
```

---

## 📝 Example Workflow

```bash
# Login to Docker Hub
docker login

# Build image
docker build -t myusername/helloworld:latest .

# Push image
docker push myusername/helloworld:latest

# Pull image (test)
docker pull myusername/helloworld:latest
```

---

## 📚 References

* [Docker Hub Docs](https://docs.docker.com/docker-hub/)
* [Docker CLI Reference](https://docs.docker.com/engine/reference/commandline/cli/)

