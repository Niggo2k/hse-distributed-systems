"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import TaskItem from "@/components/taskItem";
import { Plus } from 'lucide-react';

export default function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(true);
  const baseAPI = "/api/todos";

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseAPI}/`);
      setTasks(response.data);
    } catch (error) {
      console.error('Failed to fetch tasks', error);
    }
    setLoading(false);
  };

  const handleAddTask = async (e: any) => {
      e.preventDefault()
      const submitData = {newTask}
      try {
          await axios.post(`${baseAPI}/${newTask}`, submitData)
      } catch (error) {
          console.log(error)
      }
      fetchTasks()
      setNewTask('')
  }

  const handleDeleteTask = async (task: string) => {
    try {
      await axios.delete(`${baseAPI}/${encodeURIComponent(task)}`);
      fetchTasks();  // Aktualisieren der Aufgabenliste nach dem Löschen
    } catch (error) {
      console.error('Failed to delete task', error);
    }
    fetchTasks()
  };
  
  return (
    <main className="min-h-screen mx-auto flex flex-col max-w-3xl py-5 shadow-xl">
      <div className="h-32 flex justify-center items-center rounded-t-xl bg-slate-50">
          <p className="text-5xl uppercase font-black !bg-clip-text text-transparent !bg-cover !bg-center" style={{ background: 'linear-gradient(to top left, #1F1C2C,#928DAB)' }}>
            Todo List
          </p>
      </div>
      <div className="bg-white rounded-b-xl p-5 flex-1">
        <form onSubmit={handleAddTask}className="flex justify-between items-center gap-x-3">
            <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} className="flex-1 border border-gray-300 p-2 px-4 rounded-full peer/add transition-all duration-300" placeholder="Add a new task" />
            <button className="group [transform:translateZ(0)] px-6 py-2 rounded-full overflow-hidden bg-slate-50 relative before:absolute before:bg-slate-900 peer-placeholder-shown/add:w-0 peer-placeholder-shown/add:hidden transition-all duration-300 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500">
              <span className="relative z-0 text-slate-800 flex gap-x-1 group-hover:text-gray-200 transition ease-in-out duration-500">Add Task <Plus /></span>
            </button>
        </form>
        
        {loading ? (
          <div className="flex flex-col justify-center items-center h-full mt-24">
            <div>
              <span className="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-bounce" />
              <span className="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 ml-2 rounded-full bg-gray-200 inline-block animate-bounce [animation-delay:0.4s]" />
            </div>
            <p className="font-semibold my-3 text-gray-500">Loading tasks...</p>
          </div>
        ) : tasks.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-full mt-24">
            <p className="font-semibold my-3 text-gray-500">No tasks found.</p>
          </div>
        ) : (
          tasks.map((task, index) => (
            <TaskItem key={index} task={task} onDelete={() => handleDeleteTask(task)} />
          ))
        )}

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