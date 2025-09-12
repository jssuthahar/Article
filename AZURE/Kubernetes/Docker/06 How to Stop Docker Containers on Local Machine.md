
# How to Stop Docker Containers on Local Machine

This guide explains different ways to stop Docker containers running on your local machine.

---

## 1. List Running Containers
First, check which containers are running:

```bash
docker ps
````

Example output:

```
CONTAINER ID   IMAGE                       PORTS                            NAMES
fcc6ecd0e2a6   jsuthahar/minisupermarket   0.0.0.0:8080->80/tcp             infallible_allen
20b7157ee458   minisupermarket:dev         0.0.0.0:32768->8080,32769->8081  MiniSuperMarket
```

---

## 2. Stop a Specific Container

Use either the **container ID** or the **name**:

```bash
docker stop fcc6ecd0e2a6
```

or

```bash
docker stop infallible_allen
```

---

## 3. Stop All Running Containers

To stop every running container in one command:

```bash
docker stop $(docker ps -q)
```

---

## 4. Remove a Stopped Container (Optional)

If you no longer need the container:

```bash
docker rm fcc6ecd0e2a6
```

Or remove all stopped containers:

```bash
docker container prune
```

---

## 5. Using Docker Desktop (GUI Option)

If you’re using **Docker Desktop**:

1. Open Docker Desktop.
2. Go to the **Containers** tab.
3. Find your container.
4. Click **Stop** (square button).
5. Click **Delete** (trash icon) if you want to remove it completely.

---

✅ That’s it! You now know how to stop containers on your local machine.

