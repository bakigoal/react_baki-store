import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";
import About from "../pages/About";
import React from "react";

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="users" element={<Users/>}/>
            <Route path="about" element={<About/>}/>
        </Routes>
    )
}

export default Main