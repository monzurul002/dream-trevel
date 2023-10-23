import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Booking from "../pages/Booking/Booking";
import Home from "../pages/Header/Home"
import Login from "../pages/Login/Login";
import DescriptionLayout from "../layout/DescriptionLayout";
import Register from "../pages/Register/Register";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/booking",
                element: <Booking></Booking>
            }

        ]
    },
    {
        path: "/login",
        element: <DescriptionLayout></DescriptionLayout>,
        children: [
            {
                path: "/login",
                element: <Login></Login>
            }

        ]
    },
    {
        path: "/register",
        element: <DescriptionLayout></DescriptionLayout>,
        children: [
            {
                path: "/register",
                element: <Register></Register>
            },

        ]
    },

])
export default router