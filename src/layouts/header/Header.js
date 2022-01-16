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
            <Navbar collapseOnSelect bg="white" variant="light" expand="lg" sticky="top" className="border-bottom shadow-sm mb-3">
                <Container fluid>
                    <HeaderBrand/>
                    <HeaderIcons />
                    <Navbar.Toggle aria-controls="navbarScroll" className="header-toggle"/>
                    <Navbar.Collapse id="navbarScroll" className="header-collapse">
                        <HeaderNavigation/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header