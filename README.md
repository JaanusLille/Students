# Students

A full-stack CRUD application for managing students.

- Frontend: React (`frontend-React`)
- Backend: Spring Boot (`backend-Spring-Boot`)
- Database: PostgreSQL

## Features

- List all students
- Add a new student
- Edit existing student data
- Delete a student

Each student contains:
- `id`
- `firstName`
- `lastName`
- `emailId`

## Tech Stack

### Frontend

- React 17
- React Router DOM 5
- Axios
- Bootstrap
- Create React App (`react-scripts` 5)

### Backend

- Java 17
- Spring Boot 2.7
- Spring Data JPA
- PostgreSQL
- Lombok

## Project Structure

```text
Students/
├─ backend-Spring-Boot/
└─ frontend-React/
```

## Prerequisites

Install the following before running:

- Java 17
- Node.js 20 (recommended for this frontend setup)
- npm 10
- PostgreSQL

## Database Setup

The backend reads DB settings from:
`backend-Spring-Boot/src/main/resources/application.properties`

Default values in this project:

- URL: `jdbc:postgresql://localhost:5432/student`
- Username: `postgres`
- Password: `root`

Create a PostgreSQL database named `student` before starting the backend.

## Run the Application

Start services in this order: database -> backend -> frontend.

### 1) Start PostgreSQL

Make sure PostgreSQL is running and the `student` database exists.

### 2) Start backend

From project root:

```bash
cd backend-Spring-Boot
./mvnw spring-boot:run
```

If you are using Git Bash on Windows and `./mvnw` fails, use:

```bash
cmd.exe /c mvnw.cmd spring-boot:run
```

Backend URL:
- `http://localhost:8080`

Main API base URL:
- `http://localhost:8080/api/v1/students`

### 3) Start frontend

From project root (new terminal):

```bash
cd frontend-React
npm install
npm start
```

Frontend URL:
- `http://localhost:3000`


## API Endpoints

Base path: `/api/v1/students`

- `GET /api/v1/students` - list students
- `POST /api/v1/students` - create student
- `GET /api/v1/students/{id}` - get student by id
- `PUT /api/v1/students/{id}` - update student by id
- `DELETE /api/v1/students/{id}` - delete student by id

## Notes and Troubleshooting

- This is a learning/demo project and uses simple local configuration.
- If you see build/tooling deprecation noise, use Node 20 for best compatibility with this setup.
