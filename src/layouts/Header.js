import Container from "react-bootstrap/Container";
import {Nav, Navbar} from "react-bootstrap";
import React from "react";
import {useLocation} from "react-router-dom";

const Header = () => {
    return (
        <Navbar fluid="true" bg="light" expand="lg" sticky="top" className="border-bottom shadow-sm mb-3">
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav activeKey={useLocation().pathname} className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/users">Users</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header