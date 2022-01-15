import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../home/Home";
import Container from "react-bootstrap/Container";
import Header from "../header/Header";
import {useTitle} from "../header/useTitle";

export default function App() {
    return (
        <Router>
            <Container className="p-3">
                <Header/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="users" element={<Users/>}/>
                    <Route path="about" element={<About/>}/>
                </Routes>
            </Container>
        </Router>
    );
}

function About() {
    useTitle("About")
    return <h2>About</h2>;
}

function Users() {
    useTitle("Users")
    return <h2>Users</h2>;
}