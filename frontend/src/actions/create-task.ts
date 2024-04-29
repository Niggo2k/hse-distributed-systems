"use server"

export async function createTask(formdata: FormData) {
    const todo = formdata.get('task'); // Assuming 'task' is the name of your form input field
    try {
    const res = await fetch(`http://localhost:8080/todos/${todo}`, {
        method: 'POST',
    });

    if (!res.ok) {
        throw new Error('Server returned an error');
    }

    // Handle successful response
    console.log('Post request successful');
    const data = await res.json();
    console.log(data);
    return data;
    } catch (error: any) {
    console.error('Error:', error.message);
    // Handle errors here
    return { error: error.message };
    }
}