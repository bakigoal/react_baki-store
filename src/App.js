import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import Container from "react-bootstrap/Container";

export default function App() {
    return (
        <Router>
            <Header/>
            <Container className="flex-column">
                <Main/>
                <Footer/>
            </Container>
        </Router>
    );
}