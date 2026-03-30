import React from "react";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import App from "../../App";



const my_router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />
            }
        ]
    }
]);
 
export default my_router;