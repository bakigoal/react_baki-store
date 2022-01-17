import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import About from "../../pages/About";
import React, {useEffect} from "react";
import Shop from "../../pages/Shop";
import Sale from "../../pages/Sale";
import Features from "../../pages/Features";
import Blog from "../../pages/Blog";
import './Main.scss'

const Main = () => (
    <main className="main-content">
        <Routes>
            <Route path="shop" element={page("Shop", <Shop/>)}/>
            <Route path="sale" element={page("Sale", <Sale/>)}/>
            <Route path="features" element={page("Features", <Features/>)}/>
            <Route path="blog" element={page("Blog", <Blog/>)}/>
            <Route path="contact" element={page("Contact", <Contact/>)}/>
            <Route path="about" element={page("About", <About/>)}/>
            <Route path="/" element={page("Home", <Home/>)}/>
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
