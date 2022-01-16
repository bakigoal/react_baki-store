import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Container from "react-bootstrap/Container";
import MainContent from "./layouts/MainContent";

export default () => (
    <Router>
        <Container fluid="true" className="d-flex flex-column min-vh-100">
            <Header/>
            <main className="flex-grow-1">
                <MainContent/>
            </main>
            <Footer/>
        </Container>
    </Router>
)