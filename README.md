# todo-application

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Docker
- Docker Compose

## Tech Stack

This project uses the following technologies:

- **Frontend**: React + TypeScript
- **Backend**: Node.js + TypeScript
- **Database**: MySQL

## Setup and Run the Project

1. **Clone the repository**:
git clone https://github.com/AnujaLd/todo-application.git

2. **Build the Docker containers**:
docker-compose build

3. **Start the Docker containers**:
docker-compose up -d

4. **Wait for the containers to initialize**:
It may take between 60 seconds to 10 minutes for the containers to be fully up and running. 

5. **Access the application**
Open your browser and navigate to http://localhost:3000

6. **Todo App Run Successfully**
Add Todo and Done Todos

7. **Testing the Backend**
To run the backend tests, use the following command:
docker-compose run todo-app-backend npm test