

# 📦 Download Images from Azure Container Registry (ACR)

Azure Container Registry (ACR) is a private registry for hosting container images and artifacts in Azure.
This guide explains how to **log in, list repositories, and download (pull) images** from your ACR.

---

## 🚀 Prerequisites

* [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running
* [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) installed
* Access to an Azure Container Registry (ACR) with permissions

---

## 🔑 Step 1: Log in to Azure

```bash
az login
```

If you have multiple subscriptions:

```bash
az account set --subscription "<your-subscription-id>"
```

---

## 🔑 Step 2: Log in to your Azure Container Registry

```bash
az acr login --name <your-acr-name>
```

Example:

```bash
az acr login --name myregistry
```

---

## 📋 Step 3: List Available Repositories and Tags

List all repositories:

```bash
az acr repository list --name <your-acr-name> --output table
```

List tags for a specific repository:

```bash
az acr repository show-tags --name <your-acr-name> --repository <image-name> --output table
```

---

## ⬇️ Step 4: Pull (Download) the Image

Use Docker to pull the image:

```bash
docker pull <your-acr-name>.azurecr.io/<image-name>:<tag>
```

Example:

```bash
docker pull myregistry.azurecr.io/myapp:latest
```

---

## ✅ Step 5: Verify the Image Locally

```bash
docker images
```

---

## 📦 (Optional) Save the Image to a `.tar` File

If you want to export the image:

```bash
docker save -o myapp.tar myregistry.azurecr.io/myapp:latest
```

Load it back later:

```bash
docker load -i myapp.tar
```

---

## 🎯 Summary

1. Log in to Azure
2. Log in to ACR
3. List repositories and tags
4. Pull images with Docker
5. (Optional) Save as `.tar`

