# Story Blog Web Application

A full-stack web application for creating and sharing stories, built with React, Node.js, and MongoDB. Features user authentication, story management, and search capabilities, deployed using Kubernetes and Argo CD for blue-green deployments.

## 🏗️ Architecture Overview

### Frontend (React)
- Single page application built with React
- JWT-based authentication
- Responsive design with styled-components
- Features:
  - User authentication (login/signup)
  - Story browsing and reading
  - Profile management
  - Story search functionality
  - Chapter navigation
  - Image upload for profiles

### Backend (Node.js)
- RESTful API built with Express.js
- MongoDB database with Mongoose ODM
- Redis caching for improved performance
- Features:
  - JWT authentication
  - Full-text search capabilities
  - File upload handling
  - Redis caching for story content
  - Database indexing for search optimization

### Deployment Architecture
- Kubernetes-based deployment
- Blue-Green deployment strategy using Argo CD
- Persistent storage using AWS EFS
- Horizontal Pod Autoscaling (HPA)
- Nginx reverse proxy
- Zabbix monitoring integration

## 🚀 Key Features

1. **User Management**
   - User registration and authentication
   - JWT-based session management
   - Profile customization with avatar upload
   - Work history tracking

2. **Story Management**
   - Multi-chapter story creation
   - Chapter navigation
   - Story summarization
   - Full-text search across stories and chapters

3. **Caching & Performance**
   - Redis caching for frequently accessed stories
   - MongoDB text indexing for efficient searches
   - Client-side caching strategies

4. **Infrastructure**
   - High availability with pod replication
   - Automatic scaling based on CPU utilization
   - Blue-Green deployment for zero-downtime updates
   - Persistent storage for user uploads and logs

## 🛠️ Technical Stack

### Frontend
```json
{
  "framework": "React",
  "state-management": "Context API",
  "routing": "react-router-dom",
  "styling": "styled-components",
  "icons": "react-feather",
  "http-client": "axios"
}
```

### Backend
```json
{
  "runtime": "Node.js",
  "framework": "Express",
  "database": "MongoDB",
  "caching": "Redis",
  "authentication": "JWT",
  "file-handling": "multer"
}
```

### Infrastructure
```json
{
  "container-orchestration": "Kubernetes",
  "continuous-deployment": "Argo CD",
  "storage": "AWS EFS",
  "monitoring": "Zabbix",
  "reverse-proxy": "Nginx",
  "registry": "Docker Registry"
}
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js v18.17.0
- MongoDB
- Redis
- Kubernetes cluster
- Docker

### Local Development Setup

1. **Backend Setup**
```bash
cd application/backend
npm install
cp .env.example .env  # Configure environment variables
npm start
```

2. **Frontend Setup**
```bash
cd application/frontend
npm install
cp .env.example .env  # Configure REACT_APP_BACKEND_URI
npm start
```

3. **Docker Build**
```bash
# Backend
docker build -t story-blog-backend ./application/backend

# Frontend
docker build -t story-blog-frontend ./application/frontend
```

## 📦 Deployment

### Kubernetes Deployment Structure

```
k8s-deploy/
├── backend-base/
├── frontend-base/
├── overlay/
│   ├── backend/
│   └── frontend/
├── volumes/
└── helm/
    ├── vault/
    └── argocd/
```

### Deployment Steps

1. **Prepare Persistent Volumes**
```bash
kubectl apply -f k8s-deploy/volumes/logs-volume.yaml
```

2. **Deploy Backend**
```bash
kubectl apply -k k8s-deploy/overlay/backend
```

3. **Deploy Frontend**
```bash
kubectl apply -k k8s-deploy/overlay/frontend
```

4. **Configure Argo CD**
```bash
helm install argocd k8s-deploy/helm/2_argocd
```

## 🔐 Security Features

1. **Authentication**
   - JWT-based token authentication
   - Password hashing using bcrypt
   - Token expiration and refresh mechanisms

2. **Infrastructure Security**
   - Network policies
   - Secret management using Vault
   - RBAC configurations
   - Secure communication between services

3. **Application Security**
   - Input validation
   - XSS protection
   - CORS configuration
   - File upload restrictions

## 📈 Scaling & Performance

### Horizontal Pod Autoscaling
```yaml
spec:
  scaleTargetRef:
    apiVersion: argoproj.io/v1alpha1
    kind: Rollout
  minReplicas: 2
  maxReplicas: 4
  metrics:
    - type: Resource
      resource:
        name: cpu
        target: 
          type: Utilization
          averageUtilization: 80
```

### Caching Strategy
- Redis caching for story content
- Browser caching for static assets
- MongoDB query optimization
- Text search indexing

## 🔍 Monitoring & Logging

1. **Zabbix Monitoring**
   - Pod health monitoring
   - Resource utilization tracking
   - Custom metrics collection

2. **Logging**
   - Centralized logging using EFS
   - Application logs
   - Access logs
   - Error tracking

## 🔄 CI/CD Pipeline

1. **Build Stage**
   - Docker image building
   - Unit tests
   - Code quality checks

2. **Deployment Stage**
   - Blue-Green deployment strategy
   - Automated rollbacks
   - Health checks
   - Zero-downtime updates

## 📝 Environment Variables

### Backend
```env
TOKEN_KEY=your_jwt_secret
MONGOOSE_URI=mongodb://your_mongodb_uri
REDIS_URL=redis_host
REDIS_PORT=6379
```

### Frontend
```env
REACT_APP_BACKEND_URI=backend_service_url
```


