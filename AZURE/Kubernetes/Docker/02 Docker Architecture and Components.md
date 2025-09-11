# Docker Architecture and Components

This document provides an overview of Docker's architecture and its core components as illustrated in the diagram.

---

## Overview

Docker is a platform for building, shipping, and running applications inside containers. Containers are lightweight, portable, and ensure consistency across different environments.

Docker's architecture is based on a **client-server model**, where the client interacts with the Docker Daemon running on a host machine. The daemon manages containers, images, networks, and storage.

---

## Components of Docker Architecture

### 1. **User**

The user interacts with Docker through the **Docker Client** using commands like `docker build`, `docker pull`, and `docker run`.

### 2. **Client**

The Docker Client is the primary interface for Docker users. Commands issued by the client are translated into API calls, which are then sent to the **Docker Daemon**.

* **docker build**: Builds an image from a Dockerfile.
* **docker pull**: Pulls an image from a registry.
* **docker run**: Runs a container from an image.

### 3. **Docker Host**

The Docker Host is the machine where Docker is installed. It contains the following key components:

* **Docker Daemon**: The background service that manages Docker objects. It listens for requests from the client and handles container lifecycle, image management, and communication with registries.
* **Containers**: Running instances of Docker images that encapsulate applications and their dependencies. Each container is isolated but lightweight.
* **Images**: Read-only templates used to create containers. Images can be built locally or pulled from a registry.

### 4. **Registry**

A Registry stores Docker images. The most common registry is **Docker Hub**, but organizations can set up private registries as well.

* **Pull**: The Docker Daemon pulls images from a registry.
* **Push**: Developers can push custom-built images to a registry.

---

## Workflow (Step-by-Step with Diagram Flow)

### 1. Build (dotted line in diagram)

* User executes `docker build` from the Client.
* The Client sends the build command to the Docker Daemon.
* Docker Daemon builds the image and stores it under **Images** in the Docker Host.
* Images can then be pushed to a **Registry** for storage and sharing.

### 2. Pull (dashed line in diagram)

* User executes `docker pull` from the Client.
* The Client requests the Docker Daemon to fetch the required image.
* Docker Daemon pulls the image from the Registry into the local **Images** store.

### 3. Run (solid purple line in diagram)

* User executes `docker run` from the Client.
* The Client requests the Docker Daemon to run a container.
* Docker Daemon retrieves the required image from **Images**.
* A **Container** is created and started on the Docker Host.

---

## Key Points

* **Docker Host** contains the **Docker Daemon**, **Containers**, and **Images**.
* **Build** → Creates Docker images (from Dockerfile).
* **Pull** → Downloads images from registries into the host.
* **Run** → Launches containers from images.
* Docker ensures **portability**, **scalability**, and **efficiency** in modern application deployment.

---

## Conclusion

Docker simplifies software delivery by using containerization, ensuring applications run consistently regardless of environment. Understanding its architecture — Client, Docker Host (Daemon, Containers, Images), and Registries — along with the flow of build, pull, and run operations, is fundamental to using Docker effectively.
