import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Main from "./layouts/main/Main";

const App = () => (
    <Router>
        <div className="d-flex flex-column min-vh-100">
            <Header/>
            <div className="flex-grow-1">
                <Main/>
            </div>
            <Footer/>
        </div>
    </Router>
)

export default App