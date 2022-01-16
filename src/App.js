import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";

const App = () => (
    <Router>
        <Header/>
        <div className="d-flex flex-column min-vh-100">
            <div className="flex-grow-1">
                <Main/>
            </div>
            <Footer/>
        </div>
    </Router>
)

export default App