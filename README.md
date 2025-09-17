# BikeApp - Docker Setup Guide

This guide explains how to set up and run the BikeApp using Docker and Docker Compose.

## Project Structure

```
BikeApp/
├── compose.yaml                    # Docker Compose configuration
├── src/
│   ├── BikeApp.Api/               # .NET 8 Web API
│   │   ├── Dockerfile
│   │   └── ...
│   └── BikeApp.Client/            # Angular 19 Frontend
│       ├── Dockerfile
│       ├── nginx/
│       └── ...
└── README.md
```

## Services Overview

The application consists of three main services:

### 1. MySQL Database (`mysql`)
- **Image**: `mysql:8.0`
- **Port**: `3308:3306` (external:internal)
- **Database**: `BikeAppDb`
- **Credentials**: root/examplepassword
- **Data**: Persisted in Docker volume `mysql-data`

### 2. .NET API (`api`)
- **Framework**: .NET 8 Web API
- **Port**: `7176:8080` (external:internal)
- **Features**: Swagger UI, Entity Framework with MySQL
- **Endpoints**: Available at `http://localhost:7176/swagger`

### 3. Angular Client (`client`)
- **Framework**: Angular 19
- **Port**: `4200:80` (external:internal)
- **Server**: Nginx
- **URL**: `http://localhost:4200`

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed
- At least 4GB of available RAM
- Ports 3308, 4200, and 7176 available on your machine

## Quick Start

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd BikeApp
   ```

2. **Start all services**:
   ```bash
   docker-compose up --build
   ```

3. **Access the application**:
   - **Frontend**: http://localhost:4200
   - **API/Swagger**: http://localhost:7176/swagger
   - **Database**: localhost:3308

## Docker Commands

### Basic Operations

```bash
# Start all services (build if needed)
docker-compose up --build

# Start services in background
docker-compose up -d

# Stop all services
docker-compose down

# Stop and remove volumes (deletes database data)
docker-compose down -v

# View logs
docker-compose logs

# View logs for specific service
docker-compose logs api
docker-compose logs client
docker-compose logs mysql
```

### Development Workflow

```bash
# Rebuild and restart after code changes
docker-compose up --build

# Rebuild only the API service
docker-compose build api
docker-compose up api

# Rebuild only the Client service
docker-compose build client
docker-compose up client

# Force rebuild without cache
docker-compose build --no-cache
```

### Database Operations

```bash
# Connect to MySQL database
docker exec -it cycling-database mysql -u root -p
# Password: examplepassword

# Backup database
docker exec cycling-database mysqldump -u root -pexamplepassword BikeAppDb > backup.sql

# Restore database
docker exec -i cycling-database mysql -u root -pexamplepassword BikeAppDb < backup.sql
```

## Configuration

### Environment Variables

The API service uses these environment variables:

```yaml
environment:
  - ASPNETCORE_ENVIRONMENT=Development
  - ConnectionStrings__DefaultConnection=Server=mysql;Port=3306;Database=BikeAppDb;Uid=root;Pwd=examplepassword
```

### API Configuration

The API is configured in [`src/BikeApp.Api/appsettings.json`](src/BikeApp.Api/appsettings.json):

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Port=3307;Database=BikeAppDb;Uid=root;Pwd=examplepassword"
  }
}
```

### Client Configuration

The Angular client API base URL is configured in [`src/BikeApp.Client/src/app/app.config.ts`](src/BikeApp.Client/src/app/app.config.ts):

```typescript
{ provide: API_BASE_URL, useValue: 'http://192.168.0.195:7176' }
```

## Development vs Production

### Development Mode
- Uses multi-stage Docker builds
- Includes development tools and debugging
- Hot reload is **not** enabled (requires rebuild for changes)

### Making Code Changes

**Important**: The current setup does **not** support hot reload. After making code changes:

1. **For API changes**:
   ```bash
   docker-compose up --build api
   ```

2. **For Client changes**:
   ```bash
   docker-compose up --build client
   ```

3. **For both**:
   ```bash
   docker-compose up --build
   ```

## Troubleshooting

### Common Issues

1. **Port already in use**:
   ```bash
   # Check what's using the port
   netstat -tulpn | grep :4200
   
   # Kill the process or change port in compose.yaml
   ```

2. **Database connection fails**:
   ```bash
   # Check if MySQL is ready
   docker-compose logs mysql
   
   # Restart with fresh database
   docker-compose down -v
   docker-compose up --build
   ```

3. **Build failures**:
   ```bash
   # Clean rebuild
   docker-compose down
   docker system prune -f
   docker-compose build --no-cache
   docker-compose up
   ```

4. **API not accessible**:
   - Ensure the API container is running: `docker-compose ps`
   - Check API logs: `docker-compose logs api`
   - Verify port mapping in [`compose.yaml`](compose.yaml)

### Health Checks

The MySQL service includes a health check:
```yaml
healthcheck:
  test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
  timeout: 20s
  retries: 10
```

## Data Persistence

- **Database data** is persisted in the `mysql-data` Docker volume
- **Application logs** are available via `docker-compose logs`
- **Seed data** is automatically loaded on first API startup via [`DbInitializer`](src/BikeApp.Api/BikeApp.Api/SeedData/DbInitializer.cs)

## API Documentation

Once running, the API documentation is available at:
- **Swagger UI**: http://localhost:7176/swagger
- **OpenAPI spec**: http://localhost:7176/swagger/v1/swagger.json

## Network Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Angular App   │    │   .NET API      │    │     MySQL       │
│   (Port 4200)   │────│   (Port 7176)   │────│   (Port 3308)   │
│   Nginx Server  │    │   Swagger UI    │    │   BikeAppDb     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Production Deployment

For production deployment, consider:

1. **Environment variables**: Use production connection strings
2. **Secrets management**: Don't hardcode passwords
3. **SSL/TLS**: Configure HTTPS certificates
4. **Reverse proxy**: Use nginx or similar for load balancing
5. **Monitoring**: Add health checks and logging
6. **Backup**: Implement regular database backups

## Additional Resources

- [Docker Compose documentation](https://docs.docker.com/compose/)
- [.NET in Docker](https://docs.microsoft.com/en-us/dotnet/core/docker/)
- [Angular deployment guide](https://angular.io/guide/deployment)
- [MySQL Docker Hub](https://hub.docker.com/_/mysql)