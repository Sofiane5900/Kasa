import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import Locations from "../pages/Locations";


const AppRouter = () => {
    return (
        <Router>
        <Route path="/" element={<Home/>} />
        <Route path="/locations/:id" element={<Locations/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Error />} />
        </Router>
    );
};

export default AppRouter;