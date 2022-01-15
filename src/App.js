import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";

export default function App() {
    return (
        <Router>
            <Header/>
            <Main/>
            <Footer/>
        </Router>
    );
}