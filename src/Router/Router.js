import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddTasks from "../Pages/Home/AllTasks/AddTasks";
import CompletedTasks from "../Pages/Home/AllTasks/CompletedTasks";
import MyTaskDetails from "../Pages/Home/AllTasks/MyTaskDetails";
import MyTasks from "../Pages/Home/AllTasks/MyTasks";
import TestTask from "../Pages/Home/AllTasks/TestTask";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
                path: '/completedTasks/:id',
                element: <CompletedTasks></CompletedTasks>,
                loader: ({params}) => fetch(`http://localhost:5000/myTasks/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/testTask',
                element: <TestTask></TestTask>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/myTaskDetails/:id',
                element: <PrivateRoute><MyTaskDetails></MyTaskDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/myTasks/${params.id}`)
            }
        ]
    }
]);