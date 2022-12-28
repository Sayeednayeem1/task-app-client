import React from 'react';
import MyTasks from '../AllTasks/MyTasks';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyTasks></MyTasks>
        </div>
    );
};

export default Home;