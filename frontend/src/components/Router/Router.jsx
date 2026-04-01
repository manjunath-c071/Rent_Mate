import React from "react";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from "react-router-dom";
import App from "../../App";

import HomePage from "../../pages/HomePage/HomePage";
import Loing from "../Loing/Loing.jsx";
import SignUp from "../SignUp/SignUp.jsx";

const my_router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/Login",
                element: <Loing />
            },
            {
                path: "/SignUp",
                element: <SignUp />
            }
        ]
    }
]);
 
export default my_router;