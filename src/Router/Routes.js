import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login";
import Main from "../Components/Main";
import Home from './../Components/Home';
import About from './../Components/About';
import Reviews from './../Components/Reviews';
import ContactUs from "../Components/ContactUs";
import Appointment from './../Components/Appointment/Appointment';
import SignUp from "../Components/SignUp";
import Dashboard from "../Components/Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";


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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/contactus',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
    }
    
    
])