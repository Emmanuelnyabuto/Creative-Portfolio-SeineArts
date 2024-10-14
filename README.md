# Creative Portfolio Platform - Backend

This repository contains the backend microservices for the Creative Portfolio Platform. Each service is dedicated to handling specific functionality in the platform, such as artist portfolio management, project management, messaging, payment processing, and user matching.

## Table of Contents
- [Project Structure](#project-structure)
- [Services](#services)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running Locally](#running-locally)
- [Testing](#testing)
- [Deployment](#deployment)
- [License](#license)

---

## Project Structure

```
├── artist-portfolio-service/
├── project-management-service/
├── matching-service/
├── payment-service/
└── messaging-notification-service/
```

Each service is responsible for a specific functionality within the platform, and they communicate with each other via HTTP or through events when necessary.

### Key Folders and Files in Each Service:
- `src/` - Contains the service code, broken down into:
  - `routes/` - Defines the service-specific API endpoints.
  - `controllers/` - Handles the business logic for each route.
  - `services/` - Handles specific tasks like database interaction and external API calls.
  - `models/` - Defines the database schema for the service.
  - `middlewares/` - Middleware for tasks like authentication and validation.
  - `utils/` - Utility functions used across the service.
- `config/` - Configuration settings, such as database connection and environment variables.
- `package.json` - Defines dependencies and scripts for each service.

---

## Services

### 1. **Artist Portfolio Service**
   - **Port**: `3001`
   - **Description**: Manages user portfolios, handles creation, updates, and retrieval of portfolio information.
   - **Endpoints**:
     - `GET /portfolios/:id` - Get a specific portfolio.
     - `POST /portfolios` - Create a new portfolio.
     - `PUT /portfolios/:id` - Update an existing portfolio.
     - `DELETE /portfolios/:id` - Delete a portfolio.

### 2. **Project Management Service**
   - **Port**: `3002`
   - **Description**: Handles the creation and management of client projects.
   - **Endpoints**:
     - `GET /projects/:id` - Get project details.
     - `POST /projects` - Create a new project.
     - `PUT /projects/:id` - Update a project.
     - `DELETE /projects/:id` - Delete a project.

### 3. **Matching Service**
   - **Port**: `3003`
   - **Description**: Matches clients with suitable artists based on project requirements.
   - **Endpoints**:
     - `GET /matches/:projectId` - Get matches for a project.
     - `POST /matches` - Generate matches for a new project.

### 4. **Payment Service**
   - **Port**: `3004`
   - **Description**: Manages payments between clients and artists.
   - **Endpoints**:
     - `POST /payments` - Process a new payment.
     - `GET /payments/:id` - Get details of a payment transaction.

### 5. **Messaging & Notification Service**
   - **Port**: `3005`
   - **Description**: Handles communication between clients and artists, including notifications.
   - **Endpoints**:
     - `POST /messages` - Send a new message.
     - `GET /messages/:conversationId` - Retrieve messages from a conversation.
     - `POST /notifications` - Send notifications.

---

## Getting Started

### Prerequisites

- **Node.js** (v14 or above)
- **MongoDB** - Each service uses MongoDB for data storage.
- **Redis** (optional) - For caching and pub/sub functionality between microservices (for real-time notifications and messaging).
  
### Install Dependencies
To install dependencies for each service, navigate to the service folder and run:

```bash
cd artist-portfolio-service
npm install
```

Repeat the process for the other services.

---

## Environment Variables

Each service requires environment variables for configuration. Create a `.env` file in the root of each service and configure it with the following variables:

```bash
# Example for artist-portfolio-service

# Server Port
PORT=3001

# MongoDB Connection String
MONGODB_URI=mongodb://localhost:27017/artist-portfolio

# JWT Secret
JWT_SECRET=your_jwt_secret

# Redis (optional)
REDIS_URL=redis://localhost:6379
```

Each service will have a similar setup with variables customized for their respective needs.

---

## Running Locally

1. **MongoDB**: Ensure that MongoDB is running on your local machine.
   ```bash
   mongod
   ```

2. **Start the Services**: Navigate to each service folder and run:

   ```bash
   npm start
   ```

   Example for starting `artist-portfolio-service`:

   ```bash
   cd artist-portfolio-service
   npm start
   ```

Repeat this process for the other services.

### Run All Services Concurrently

Alternatively, you can run all services concurrently using a process manager like `pm2` or with multiple terminal windows.

---

## Testing

Each service has unit tests located in the `tests/` folder. To run the tests for each service, navigate to the service folder and run:

```bash
npm test
```

---

## Deployment

For deployment, each service can be hosted separately. Here are a few options for deployment:

### Vercel
- Vercel is ideal for frontend deployments, but it also supports serverless functions. You can deploy the backend microservices as serverless functions if desired.

### Render
- Render is a suitable platform for backend services and offers free tier hosting with Docker support.

### Fly.io
- Fly.io allows you to deploy each microservice as a Docker container with free credits.

### Setup for Docker (Optional)
If you're using Docker to run your services, ensure that each service has a `Dockerfile` (which is already included) and modify the `docker-compose.yml` file to orchestrate the services.

```bash
# Build and run all services with Docker Compose
docker-compose up --build
```

---

## License

This project is licensed under the MIT License.

---
