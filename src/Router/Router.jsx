
import {
    createBrowserRouter,

} from "react-router-dom";
import "../index.css";

import LoginPage from "../Components/Login";
import Dashboard from "../Page/Dashboard";
import RegistrationPage from "../Components/Register";



const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage></LoginPage>,
    },
    {
        path: '/registration',
        element: <RegistrationPage></RegistrationPage>
    },
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
    }
]);



export default router;