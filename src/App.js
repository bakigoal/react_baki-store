import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import Container from "react-bootstrap/Container";

export default function App() {
    return (
        <Router>
            <Container fluid="true" className="d-flex flex-column min-vh-100">
                <Header/>
                <Main/>
                <Footer/>
            </Container>
        </Router>
    );
}