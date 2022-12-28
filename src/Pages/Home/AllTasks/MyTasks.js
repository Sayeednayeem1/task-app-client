import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import MyTaskDetail from './MyTaskDetail';

const MyTasks = () => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myTasks?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTasks(data));
    }, [user?.email])
    return (
        <div className='container mx-auto mt-10'>
            <h4 className='text-4xl mb-8 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 dark:text-white'>All My Tasks</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 mb-10'>
                {
                    tasks.map(task => <MyTaskDetail
                        key={task._id}
                        task={task}
                    ></MyTaskDetail>)
                }
            </div>
        </div>
    );
};

export default MyTasks;