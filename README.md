# Todo List Application Documentation

This repository contains the frontend code for a Todo List application built with React. The application allows users to add, delete, and manage tasks.
## Prerequisites
   Docker installed on your machine
   
## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Niggo2k/hse-distributed-systems.git
   ```

2. Navigate to the directory:

   ```bash
   cd hse-distributed-systems
   ```

3. Start the docker compose:

   ```bash
   docker compose up
   ```

## Usage

### Dependencies

This project relies on the following dependencies:

- Axios: Used for making HTTP requests to the backend API.
- React: JavaScript library for building user interfaces.
- Lucide-React: Provides a set of SVG icons for use in the application.
- Springboot: Used for the Backend of the REST API


## Frontend

### Components

##### Home

The `Home` component is the main component of the application. It renders a Todo List interface where users can view, add, and delete tasks.

##### TaskItem

The `TaskItem` component is responsible for rendering individual tasks in the Todo List. It displays the task text and provides a delete button for removing the task.

### Functionality

#### Fetching Tasks

Tasks are fetched from the backend API using the `fetchTasks` function. This function is called when the component mounts using the `useEffect` hook.

#### Adding Tasks

New tasks can be added using the input field in the form. When the user submits the form, the `handleAddTask` function is called. This function sends a POST request to the backend API to add the new task.

#### Deleting Tasks

Tasks can be deleted by clicking the delete button next to each task. The `handleDeleteTask` function is called when the delete button is clicked. This function sends a DELETE request to the backend API to remove the task.


## Backend

## Endpoints

### GET /todos

Returns a list of all tasks.

### POST /todos/{todo}

Adds a new task to the list.

### DELETE /todos/{todo}

Removes a task from the list.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
