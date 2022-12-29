import React, { useContext } from 'react';
import 'animate.css';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddTasks = () => {

    const {user} = useContext(AuthContext);

    const handleAddTask = (event) => {
        event.preventDefault();
        const form = event.target;
        const taskName = form.taskName.value;
        const aboutTask = form.aboutTask.value;
        const taskDate = form.taskDate.value;
        const taskEmail = user?.email || "unregistered";
        const userName = user?.displayName || "No name available";
        const taskDescription = form.taskDescription.value;

        const tasks = {
            taskName,
            aboutTask,
            taskDate,
            taskEmail,
            userName,
            taskDescription,
        };

        fetch('https://task-server-mu.vercel.app/myTasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tasks)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast('task created successfully');
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <section className="bg-white dark:bg-gray-900 animate__animated animate__backInLeft ">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Task</h2>
                    <form onSubmit={handleAddTask}>
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Name</label>
                                <input type="text" name="taskName" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your task name" required="" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">About</label>
                                <input type="text" name="aboutTask" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="About Task" required="" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="text" name="taskEmail" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={user?.email} readOnly required="" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input type="text" name="userName" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={user?.displayName} readOnly required="" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                                <input type="text" name="taskDate" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Task date" required="" />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea name='taskDescription' id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Add Task
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddTasks;