import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Privet from "../Privet/Privet";
import ErrorPage from "../Pages/ErrorPage";
import AllTasks from "../Pages/AllTasks/AllTasks";
import CreateTask from "../Pages/CreateTask/CreateTask";
import ManageTask from "../Pages/ManageTask";
import UpdateTask from "../Pages/UpdateTask";
import Dashboard from "../Layout/Dashboard";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";

export const router = createBrowserRouter([ 
    {
        path:'/',
        element:<MainLayout />,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/contactUs',
                element:<ContactUs/>
            },
            {
                path:'/aboutUs',
                element:<AboutUs/>
            },
            {
                path:'/signup',
                element:<Signup/>
            },
            {
                path:'/updateTask/:id',
                element:<UpdateTask/>,
                loader:({params})=>fetch(`https://job-task-server-eight.vercel.app/tasks/${params.id}`,{credentials:'include'})
            },
          
        ]
    },
    {
        path:'dashboard',
        element:<Privet><Dashboard/></Privet>,
        children:[
            {
                path:'allTasks',
                element:<AllTasks/>
            },
            {
                path:'createTask',
                element:<Privet><CreateTask/></Privet>
            },
            {
                path:'manageTasks',
                element:<ManageTask/>,
            },
            
          
        ]
    }
  
])