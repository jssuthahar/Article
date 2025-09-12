
# Running the MiniSuperMarket Docker Container

This guide explains how to run the **MiniSuperMarket** application from its Docker image and open it in your browser.

---

## 1. Pull the Image from Docker Hub
Make sure Docker Desktop is installed and running.  
Pull the latest image from Docker Hub:

```bash
docker pull jsuthahar/minisupermarket:latest
````

---

## 2. Run the Container

### Option A – Run on default ports (if the app is configured for port 80 inside)

```bash
docker run -d -p 8080:80 jsuthahar/minisupermarket
```

Now open in your browser:

```
http://localhost:8080
```

### Option B – Run on app’s internal ports (8080/8081 inside container)

If your app listens on **8080 (HTTP)** and **8081 (HTTPS)** inside the container, run:

```bash
docker run -d -p 9090:8080 -p 9091:8081 jsuthahar/minisupermarket
```

Now open:

* HTTP → [http://localhost:9090](http://localhost:9090)
* HTTPS → [https://localhost:9091](https://localhost:9091)

---

## 3. Verify the Container

Check running containers:

```bash
docker ps
```

Example output:

```
CONTAINER ID   IMAGE                          PORTS
abcd1234efgh   jsuthahar/minisupermarket      0.0.0.0:9090->8080/tcp, 0.0.0.0:9091->8081/tcp
```

---

## 4. Useful Commands

* **View logs**

  ```bash
  docker logs <container_id>
  ```

* **Stop container**

  ```bash
  docker stop <container_id>
  ```

* **Remove container**

  ```bash
  docker rm <container_id>
  ```

* **Remove image**

  ```bash
  docker rmi jsuthahar/minisupermarket
  ```

---

## 5. Troubleshooting

* If `http://localhost:8080` doesn’t open, your app may not be listening on port 80.
* Try mapping to `8080`/`8081` as shown in **Option B**.
* Always check logs with:

  ```bash
  docker logs <container_id>
  ```

---

🚀 You now have the MiniSuperMarket app running inside Docker!

