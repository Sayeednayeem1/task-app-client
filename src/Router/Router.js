import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddTasks from "../Pages/Home/AllTasks/AddTasks";
import CompletedTasks from "../Pages/Home/AllTasks/CompletedTasks";
import MyTasks from "../Pages/Home/AllTasks/MyTasks";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/myTasks",
                element: <MyTasks></MyTasks>
            },
            {
                path: "/addTasks",
                element: <AddTasks></AddTasks>
            },
            {
                path: "/completedTasks",
                element: <CompletedTasks></CompletedTasks>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
]);