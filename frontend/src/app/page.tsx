import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen mx-auto flex flex-col max-w-3xl pt-5 shadow-xl">
      <div
        className="h-32 flex justify-center items-center rounded-t-xl text-5xl uppercase font-black !bg-clip-text text-transparent !bg-cover !bg-center backdrop-blur-2xl"
        style={{ background: 'linear-gradient(to top left, #1F1C2C,#928DAB)' }}
      >
        Todo List
      </div>
      <div className="bg-white rounded-b-xl p-5 flex-1">
        <div className="flex justify-between items-center gap-x-3">
          <input type="text" className="flex-1 border border-gray-300 p-2 px-4 rounded-full peer/add transition-all duration-300" placeholder="Add a new task" />
          <button className="bg-slate-800 text-white p-2 px-4 rounded-full w-max block peer-placeholder-shown/add:w-0 peer-placeholder-shown/add:hidden transition-all duration-300">Add Task</button>
        </div>
      </div>
    </main>
  );
}
