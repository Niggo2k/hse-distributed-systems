'use client'
import { createTask } from '@/actions/create-task';
import { useForm } from 'react-hook-form'; 

export default function TaskListInput(){
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (formData: FormData) => {
        try {
            await createTask(formData);
            // Optionally, you can handle success (e.g., reset form, show success message)
        } catch (error:any) {
            console.error('Error:', error.message);
            // Handle errors here (e.g., show error message to user)
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}className="flex justify-between items-center gap-x-3">
            <input type="text" name="task" className="flex-1 border border-gray-300 p-2 px-4 rounded-full peer/add transition-all duration-300" placeholder="Add a new task" />
            <button 
                className="group rounded-full p-0.5 w-max text-white peer-placeholder-shown/add:w-0 peer-placeholder-shown/add:hidden transition-all duration-300"
                style={{backgroundImage: 'linear-gradient(to left top, rgb(31, 28, 44), rgb(146, 141, 171))'}}
                type="submit"
            >
                <div className="px-6 py-1.5 w-full flex h-full font-semibold text-base bg-slate-800/90 rounded-full group-hover:bg-slate-800/80 items-center">
                    Add Task
                </div>
            </button>
        </form>
    )
};