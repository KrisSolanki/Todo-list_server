# To-Do list application 

## Table of Contents
1. [Getting Started](#getting-started)
2. [Features](#features)
3. [Project Setup](#project-setup)
5. [Bonus Features](#bonus-features)

---

## Getting Started

### Prerequisites
Ensure the following are installed on your system:
- **Node.js**: [Download Node.js](https://nodejs.org)
- **Database**: MongoDB
- **Git**: For version control

### Development Tools
- **Code Editor**: Visual Studio Code

## Features

### Core Functionality
- **Task Management**
  - Create tasks with title and description.
  - View all tasks.
  - Mark tasks as complete.
  - Edit tasks
  - Delete tasks
  
- **Data Persistence**
  -Tasks are stored in a database(MongoDB).
- **Validation**
  -Task title cannot be empty.
  -Prevent marking tasks as completed more than once.
-**Error Handling**
  -Error handling with meaningful error message

---

## Project Setup 

1. Clone the repository:
   ```bash
   git clone https://github.com/KrisSolanki/Todo-list_server.git
   cd Todo-list_server

2. Install Dependencies:
  - check if node is installed or not
   ```bash
     npm node -v
   ```
  - Dependencies
    ```bash
      npm install express cors dotenv mongoose nodemon
    ```
3. Modify package.json
  - Ensure package.json includes the following configurations:
    ```json
    "type":"module",
    "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
    ```

4. Configure Environment Variables
   - Create a .env file in the root directory and add the following configurations:
     ```env
     PORT:4000 (you can add any port)
     MONGO_URI:your_mongodb_connection_string
     ```
  
5. Start the Application
   - Run the application in development mode using:
     ```bash
     npm run dev

## Bonus Features 
  - Due Dates: Add due dates for tasks
  - Categorization: User can create Categorize tasks 
     
