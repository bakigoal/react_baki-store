import Container from "react-bootstrap/Container";
import {Navbar} from "react-bootstrap";
import React, {useState} from "react";
import './Header.scss'
import HeaderBrand from "./sections/HeaderBrand";
import HeaderNavigation from "./sections/HeaderNavigation";
import HeaderIcons from "./sections/HeaderIcons";

const Header = ({cartItems}) => {
    const [visibleCart, changeCartVisibility] = useState(false)

    window.onclick = () => {
        changeCartVisibility(false)
    }

    const cart = {
        items: cartItems,
        visible: visibleCart,
        toggleVisibility: () => changeCartVisibility(!visibleCart)
    }

    return (
        <header className="header">

            {/* Desktop Header */}
            <Navbar collapseOnSelect bg="white" variant="light" expand="lg" fixed="top"
                    className="border-bottom shadow-sm header-desktop">
                <Container fluid className="ps-5 pe-5">
                    <HeaderBrand/>
                    <Navbar.Toggle aria-controls="navbarScroll" className="header-toggle"/>
                    <Navbar.Collapse id="navbarScroll" className="header-collapse flex-grow-0">
                        <HeaderNavigation/>
                    </Navbar.Collapse>
                    <HeaderIcons cart={cart}/>
                </Container>
            </Navbar>

            {/* Mobile Header */}
            <Navbar collapseOnSelect bg="white" variant="light" expand="lg" sticky="top"
                    className="border-bottom shadow-sm header-mobile">
                <Container fluid className="ps-0 pe-0">
                    <HeaderBrand/>
                    <div className="d-flex justify-content-center align-items-center pe-4">
                        <HeaderIcons cart={cart}/>
                        <Navbar.Toggle aria-controls="navbarScroll" className="header-toggle ms-5"/>
                    </div>
                    <Navbar.Collapse id="navbarScroll" className="header-collapse border-top item-menu-mobile ps-4">
                        <HeaderNavigation/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}

export default Header