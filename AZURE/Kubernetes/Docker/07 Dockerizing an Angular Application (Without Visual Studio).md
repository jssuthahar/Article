
# Dockerizing an Angular Application (Without Visual Studio)

This guide shows how to build and run an Angular application inside Docker using **Node.js** for building and **Nginx** for serving the production build.

---

## 1. Prerequisites
- Install [Node.js](https://nodejs.org/) (for local build, optional).
- Install [Angular CLI](https://angular.io/cli) (optional if building locally).
- Install [Docker Desktop](https://www.docker.com/products/docker-desktop).

---

## 2. Angular Project Structure
Typical Angular project after running `ng new my-app`:

```

my-app/
├── src/
├── angular.json
├── package.json
├── package-lock.json
└── tsconfig.json

````

---

## 3. Create a Dockerfile
Inside the root of your Angular project (`my-app/`), create a file named **Dockerfile**:

```dockerfile
# Step 1: Build Angular app using Node
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Step 2: Serve using Nginx
FROM nginx:alpine

# Copy build output from Angular to Nginx html folder
COPY --from=build /app/dist/my-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
````

> ⚠️ Replace `my-app` in `/app/dist/my-app` with your Angular project’s **output folder name** (check in `angular.json → outputPath`).

---

## 4. Create a `.dockerignore` File

This keeps the image clean:

```
node_modules
.git
.gitignore
Dockerfile
.dockerignore
```

---

## 5. Build the Docker Image

Open terminal in the project folder:

```bash
docker build -t angular-docker-app .
```

---

## 6. Run the Container

```bash
docker run -d -p 8080:80 angular-docker-app
```

Now open in your browser:

```
http://localhost:8080
```

---

## 7. Verify Running Container

```bash
docker ps
```

---

## 8. Stop & Remove Container

```bash
docker stop <container_id>
docker rm <container_id>
```

---

## 9. Push to Docker Hub (Optional)

If you want to share the image:

```bash
docker tag angular-docker-app <your-dockerhub-username>/angular-docker-app:latest
docker push <your-dockerhub-username>/angular-docker-app:latest
```

Others can then run:

```bash
docker run -d -p 8080:80 <your-dockerhub-username>/angular-docker-app:latest
```

---

🚀 Your Angular app is now running inside Docker with Nginx!

