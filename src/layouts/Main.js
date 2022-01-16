import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";
import About from "../pages/About";
import React from "react";
import Page from "../components/Page";

const Main = () => {
    return (
        <main className="flex-grow-1">
            <Routes>
                <Route path="/" element={page("Home", Home)}/>
                <Route path="users" element={page("Users", Users)}/>
                <Route path="about" element={page("About", About)}/>
            </Routes>
        </main>
    )
}

const page = (title, Component) => <Page title={title}><Component/></Page>;

export default Main