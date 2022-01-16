import Container from "react-bootstrap/Container";
import {Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from "react";
import {useLocation} from "react-router-dom";
import logo from '../../assets/logo.svg'
import Button from "react-bootstrap/Button";

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="border-bottom shadow-sm mb-3">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src={logo}
                             alt=""
                             width="30"
                             height="30"
                             className="d-inline-block align-top"/>{' '}Bakigoal
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            activeKey={useLocation().pathname}
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px'}}
                            navbarScroll>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/users">Users</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/about">About</NavDropdown.Item>
                                <NavDropdown.Item href="/users">Users</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"/>
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header