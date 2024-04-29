import Image from "next/image";

interface TaskItemProps {
    task: string;
    onDelete: () => void; // Methode zum Löschen der Aufgabe
}

export default function TaskItem({ task, onDelete }: TaskItemProps) {
    return (
        <div className="flex justify-between items-center gap-x-3 m-2 p-2 px-4 border border-gray-300 rounded-lg">
            <p className="flex-1">
                {task}
            </p>
            <button onClick={onDelete} className="bg-slate-800 text-white p-2 px-4 rounded-full">
                Delete Task
            </button>
        </div>
    );
}