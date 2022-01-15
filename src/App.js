import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";

export default function App() {
    return (
        <Container className="p-3">
            <Router>
                <Header/>
                <Main/>
                <Footer/>
            </Router>
        </Container>
    );
}