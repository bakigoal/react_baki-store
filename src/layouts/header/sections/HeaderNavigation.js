import {Nav} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import React from "react";

const HeaderNavigation = () => (
    <Nav
        activeKey={useLocation().pathname}
        className="gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop/all">Shop</NavLink>
        <NavLink to="/sale">Sale</NavLink>
        <NavLink to="/features">Features</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </Nav>
)

export default HeaderNavigation