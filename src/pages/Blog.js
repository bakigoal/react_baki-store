import logo from "../assets/logo.svg"
import React from "react";
import Container from "react-bootstrap/Container";
import {Image} from "react-bootstrap";

const Blog = () => {
    return <Container>
        <h2><Image src={logo} alt="Logo" width="100px"/> Blog</h2>
    </Container>;
}

export default Blog