import {Nav, NavDropdown} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import React from "react";

const HeaderNavigation = () => (
    <Nav
        activeKey={useLocation().pathname}
        className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/users">Users</Nav.Link>
        <NavDropdown title="Link" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/about">About</NavDropdown.Item>
            <NavDropdown.Item href="/users">Users</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
            Link
        </Nav.Link>
    </Nav>
)

export default HeaderNavigation