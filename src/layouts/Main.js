import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";
import About from "../pages/About";
import React, {useEffect} from "react";

const Main = () => (
    <main>
        <Routes>
            <Route path="/" element={page("Home", <Home/>)}/>
            <Route path="users" element={page("Users", <Users/>)}/>
            <Route path="about" element={page("About", <About/>)}/>
        </Routes>
    </main>
);

const page = (title, component) => <Page title={title}>{component}</Page>;

const Page = props => {
    useEffect(() => {
        props.title && (document.title = props.title);
    }, [props.title]);
    return props.children;
};

export default Main
