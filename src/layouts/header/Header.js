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
                <Container fluid className="ps-5 pe-5 header-desktop">
                    <HeaderBrand/>
                    <Navbar.Toggle aria-controls="navbarScroll" className="header-toggle"/>
                    <Navbar.Collapse id="navbarScroll" className="header-collapse flex-grow-0">
                        <HeaderNavigation/>
                    </Navbar.Collapse>
                    <HeaderIcons/>
                </Container>

                <Container fluid className="header-mobile">
                    <HeaderBrand/>
                    <div className="d-flex justify-content-center align-items-center">
                        <HeaderIcons/>
                        <Navbar.Toggle aria-controls="navbarScroll" className="header-toggle ms-4"/>
                    </div>
                    <Navbar.Collapse id="navbarScroll" className="header-collapse border-top">
                        <HeaderNavigation/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header