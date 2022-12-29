import React from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';

const MyTaskDetail = ({ task }) => {

    const { taskName, aboutTask, _id, taskDate, taskEmail, userName, taskDescription } = task;

    return (
        <div>
            <div className="p-6 animate__animated animate__backInLeft bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{taskName}</h5>
                </a>
                <a href="/">
                    <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{aboutTask}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{taskDescription}</p>
                <div>
                    <Link to={`/completedTasks/${_id}`} className="inline-flex items-center mr-2 px-3 py-2 text-sm font-medium text-center">
                        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Task Complete</button>
                    </Link>
                    <Link to={`/myTaskDetails/${_id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Details

                        {/* <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> */}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyTaskDetail;