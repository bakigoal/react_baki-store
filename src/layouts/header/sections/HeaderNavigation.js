import {Nav} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import React from "react";

const HeaderNavigation = () => (
    <Nav
        activeKey={useLocation().pathname}
        className="gap-4">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/shop">Shop</Nav.Link>
        <Nav.Link href="/sale">Sale</Nav.Link>
        <Nav.Link href="/features">Features</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
)

export default HeaderNavigation