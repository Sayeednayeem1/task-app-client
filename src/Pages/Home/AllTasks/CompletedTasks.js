import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CompletedTasks = () => {

    const { taskName, aboutTask, _id, taskDate, taskEmail, userName, taskDescription } = useLoaderData()

    return (
        <div>
            <h5>this is a test: {aboutTask}</h5>
        </div>
    );
};

export default CompletedTasks;