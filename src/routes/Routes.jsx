import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Booking from "../pages/Booking/Booking";
import Home from "../pages/Header/Home"
import Login from "../pages/Login/Login";
import DescriptionLayout from "../layout/DescriptionLayout";
import Register from "../pages/Register/Register";
import VerifyEmail from "../pages/VerifyEmail/VerifyEmail";
import TravelCard from "../pages/TravelCard/TravelCard";
import PrivateRoute from "./PrivateRoute";
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
                path: "/details",
                element: <PrivateRoute><TravelCard></TravelCard></PrivateRoute>,
                loader: () => fetch("http://localhost:5000/travelinfo")
            },
            {
                path: "/booking",
                element: <Booking></Booking>
            },
            {
                path: "/verify",
                element: <VerifyEmail></VerifyEmail>,

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