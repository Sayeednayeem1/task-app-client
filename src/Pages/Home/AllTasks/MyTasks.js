import React, { useEffect, useState } from 'react';
import MyTaskDetail from './MyTaskDetail';

const MyTasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data));
    }, [])
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10'>
            {
                tasks.map(task => <MyTaskDetail
                    key={ task._id}
                    task={ task }
                ></MyTaskDetail>)
            }
        </div>
    );
};

export default MyTasks;