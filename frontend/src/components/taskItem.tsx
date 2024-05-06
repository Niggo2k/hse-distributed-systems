import { Trash } from "lucide-react";
import Image from "next/image";

interface TaskItemProps {
    task: string;
    onDelete: () => void; // Methode zum Löschen der Aufgabe
}

export default function TaskItem({ task, onDelete }: TaskItemProps) {
    return (
        <div className="flex justify-between items-center gap-x-3 p-4">
            <p className="flex-1">
                {task}
            </p>
            <button onClick={onDelete} className="p-3 rounded-full transition duration-300 bg-transparent text-red-500 hover:bg-red-500 hover:text-white">
                <Trash size={18} />
            </button>
        </div>
    );
}