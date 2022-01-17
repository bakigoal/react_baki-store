import logo from "../assets/logo.svg"
import React from "react";
import Container from "react-bootstrap/Container";

const Shop = () => {
    return <Container>
        <h2><img src={logo} alt="Logo" width="100px"/> Shop</h2>
    </Container>;
}

export default Shop