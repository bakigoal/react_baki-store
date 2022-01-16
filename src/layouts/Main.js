import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";
import About from "../pages/About";
import React from "react";

const Main = () => {
    return (
        <main className="flex-grow-1">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="users" element={<Users/>}/>
                <Route path="about" element={<About/>}/>
            </Routes>
        </main>
    )
}

export default Main