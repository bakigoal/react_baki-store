import logo from "../assets/logo.svg"
import React from "react";
import Container from "react-bootstrap/Container";

const Blog = () => {
    return <Container>
        <h2><img src={logo} alt="Logo" width="100px"/> Blog</h2>
    </Container>;
}

export default Blog