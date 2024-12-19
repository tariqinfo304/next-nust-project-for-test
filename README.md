# Project Setup and Execution Instructions

This document provides instructions for setting up and running the NestJS and Nuxt.js services defined in the provided Docker Compose configuration.

## Prerequisites

Ensure the following are installed on your system:

1. **Docker**: Version 20.x or later
2. **Docker Compose**: Version 1.29.2 or later

## Project Structure

```
project-root/
├── docker-compose.yml
├── nest-ecommerce/
│   └── ... (Backend source code)
└── ecom-frontend/
    └── ... (Frontend source code)
```

## Steps to Run the Project

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd project-root
   ```

2. **Build and Start the Containers**:

   Run the following command to build and start the containers:

   ```bash
   docker-compose up --build
   ```

   This command:
   - Builds the `nestjs` and `nuxt` services from their respective directories (`nest-ecommerce` and `ecom-frontend`).
   - Starts the containers and exposes the ports.

3. **Access the Services**:

   - **Backend (NestJS)**:
     Open your browser and navigate to `http://localhost:3000`.
   - **Frontend (Nuxt.js)**:
     Open your browser and navigate to `http://localhost:3001`.

4. **Environment Variables**:

   Both services are running in `production` mode by default. You can modify the environment variables in the `docker-compose.yml` file if necessary.

## Stopping the Services

To stop the running containers, use the following command:

```bash
docker-compose down
```

This command stops and removes the containers, but keeps the built images.

## Troubleshooting

1. **Port Conflicts**:
   - If ports `3000` or `3001` are already in use, update the `ports` section in the `docker-compose.yml` file to use different host ports.

2. **Rebuilding Containers**:
   - If you make changes to the source code, rebuild the containers using:
     
     ```bash
     docker-compose up --build
     ```

3. **Logs**:
   - View logs for a specific container:
     
     ```bash
     docker logs nestjs-container
     docker logs nuxt-container
     ```

## Network Configuration

Both services are connected to the `app-network`, which is a Docker bridge network. This allows the services to communicate internally by their service names (`nestjs` and `nuxt`).

## Additional Notes

- **Customizations**:
  Modify the `Dockerfile` or `docker-compose.yml` as needed to fit your development and production needs.

- **Scaling**:
  For scaling services, consider using Docker Swarm or Kubernetes in production environments.

- **Node Environment**:
  Ensure the `NODE_ENV` variable is correctly set for your intended use case (e.g., `development`, `production`).

