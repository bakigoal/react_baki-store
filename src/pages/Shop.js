import logo from "../assets/logo.svg"
import React from "react";
import Container from "react-bootstrap/Container";
import {Image} from "react-bootstrap";

const Shop = () => {
    return <Container>
        <h2><Image src={logo} alt="Logo" width="100px"/> Super Shop</h2>
    </Container>;
}

export default Shop