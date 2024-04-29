import Image from "next/image";

interface TaskItemProps {
    task: string;
    taskArray: [];
    onDelete: () => void; // Methode zum Löschen der Aufgabe
}

export default function TaskItem({ task, taskArray, onDelete }: TaskItemProps) {
    return (
    <div className="flex justify-between items-center gap-x-3">
          <p className="flex-1 border border-gray-300 m-2 p-2 px-4 peer/add transition-all duration-300">
            {task}
          </p>
          <button onClick={onDelete} className="bg-slate-800 text-white p-2 px-4 rounded-full w-max block peer-placeholder-shown/add:w-0">Delete Task</button>
        </div>
    );
}