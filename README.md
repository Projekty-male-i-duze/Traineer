# Traineer

Traineer project monorepo:
- `frontend/` - React + Vite + TypeScript application
- `backend/` - Django API

## Requirements

- Docker
- Docker Compose (`docker compose`)

## Structure

```text
Traineer/
├── backend/
│   ├── apps/
│   ├── config/
│   ├── Dockerfile.dev
│   ├── manage.py
│   └── requirements.txt
├── frontend/
│   ├── src/
│   ├── Dockerfile.dev
│   └── package.json
├── .env.example
└── docker-compose.yml
```

## Run (DEV)

1. Create local env file:

```bash
cp .env.example .env
```

2. Build and start containers:

```bash
docker compose up --build
```

3. (Optional) Create an admin user:

```bash
docker compose exec backend python manage.py createsuperuser
```

4. Open the apps:
- Frontend: http://localhost:5173
- Backend: http://localhost:8000
- Admin Django: http://localhost:8000/admin
- PostgreSQL: localhost:5432

> `backend` runs `python manage.py migrate` automatically on container startup.

## Useful commands

```bash
# stop containers
docker compose down

# logs
docker compose logs -f

# backend shell
docker compose exec backend sh

# frontend shell
docker compose exec frontend sh
```
