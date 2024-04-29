import Image from "next/image";

export default function TaskItem() {
  return (
    <div className="flex justify-between items-center gap-x-3">
          <p className="flex-1 border border-gray-300 m-2 p-2 px-4 peer/add transition-all duration-300">
            TASK 1
          </p>
          <button className="bg-slate-800 text-white p-2 px-4 rounded-full w-max block peer-placeholder-shown/add:w-0">Delete Task</button>
        </div>
    );
}