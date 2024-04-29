"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import TaskItem from "@/components/taskItem";
import TaskListInput from "@/components/taskListInput"; 

const API_BASE_URL = 'http://localhost:8080'; // Setzen Sie hier die Basis-URL Ihrer API ein

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`/api/todos/`);
      setTasks(response.data);
    } catch (error) {
      console.error('Failed to fetch tasks', error);
    }
  };

  const handleAddTask = async () => {
    if (newTask.trim() !== "") {
      try {
        await axios.post(`/api/todos/${encodeURIComponent(newTask.trim())}`);
        fetchTasks();  // Aktualisieren der Aufgabenliste nach dem Hinzufügen
        setNewTask('');
      } catch (error) {
        console.error('Failed to add task', error);
      }
    }
  };

  const handleDeleteTask = async (task: string) => {
    try {
      await axios.delete(`/api/todos/${encodeURIComponent(task)}`);
      fetchTasks();  // Aktualisieren der Aufgabenliste nach dem Löschen
    } catch (error) {
      console.error('Failed to delete task', error);
    }
  };
  
  return (
    <main className="min-h-screen mx-auto flex flex-col max-w-3xl pt-5 shadow-xl">
      <div className="h-32 flex justify-center items-center rounded-t-xl bg-slate-50">
          <p className="text-5xl uppercase font-black !bg-clip-text text-transparent !bg-cover !bg-center" style={{ background: 'linear-gradient(to top left, #1F1C2C,#928DAB)' }}>
            Todo List
          </p>
      </div>
      <div className="bg-white rounded-b-xl p-5 flex-1">
        <TaskListInput />
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} onDelete={() => handleDeleteTask(task)} />
        ))}
      </div>
    </main>
  );
}













/*
  return (
    <main className="min-h-screen mx-auto flex flex-col max-w-3xl pt-5 shadow-xl">
      <div className="h-32 flex justify-center items-center rounded-t-xl text-5xl uppercase font-black !bg-clip-text text-transparent !bg-cover !bg-center backdrop-blur-2xl"
        style={{ background: 'linear-gradient(to top left, #1F1C2C,#928DAB)' }}>
        Todo List
      </div>
      <div className="bg-white rounded-b-xl p-5 flex-1">
        <div className="flex justify-between items-center gap-x-3">
          <input
            type="text"
            className="flex-1 border border-gray-300 p-2 px-4 rounded-full"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
          />
          <button
            className="bg-slate-800 text-white p-2 px-4 rounded-full w-max"
            onClick={handleAddTask}
          >
            Add Task
          </button>
        </div>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} onDelete={() => handleDeleteTask(task)} />
        ))}
      </div>
    </main>
  );
}*/