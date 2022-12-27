import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddTasks from "../Pages/Home/AllTasks/AddTasks";
import CompletedTasks from "../Pages/Home/AllTasks/CompletedTasks";
import MyTasks from "../Pages/Home/AllTasks/MyTasks";
import Home from "../Pages/Home/Home/Home";


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
            }
        ]
    }
]);