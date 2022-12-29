import React from 'react';
import { useLoaderData } from 'react-router-dom';
import 'animate.css';
import { toast } from 'react-hot-toast';

const CompletedTasks = () => {

    const { taskName, aboutTask, _id, taskDate, taskEmail, userName, taskDescription } = useLoaderData();


    return (
        <div className='container flex justify-center items-center'>
            <div className="p-6 animate__animated animate__backInLeft bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h4 >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Task Name: {taskName}</h5>
                </h4>
                <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">About Task: {aboutTask}</h5>
                <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">My Name: {userName}</h5>
                <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">My Email: {taskEmail}</h5>
                <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Task Creation Date: {taskDate}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Task Description: {taskDescription}</p>
            </div>
        </div>
    );
};

export default CompletedTasks;