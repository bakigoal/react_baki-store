import Container from "react-bootstrap/Container";
import {Navbar} from "react-bootstrap";
import React from "react";
import './Header.scss'
import HeaderBrand from "./components/HeaderBrand";
import HeaderNavigation from "./components/HeaderNavigation";
import HeaderIcons from "./components/HeaderIcons";

const Header = () => {
    return (
        <header className="header">
            <Navbar bg="white" variant="light" expand="lg" sticky="top" className="border-bottom shadow-sm mb-3">
                <Container fluid>
                    <HeaderBrand/>
                    <Navbar.Collapse id="navbarScroll">
                        <HeaderNavigation/>
                    </Navbar.Collapse>
                    <HeaderIcons/>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header