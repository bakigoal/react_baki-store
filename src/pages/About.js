import {useTitle} from "../utils/useTitle";
import logo from "../assets/logo.svg"
import React from "react";
import Container from "react-bootstrap/Container";

const title = "About"

const About = () => {
    useTitle(title)
    return <Container>
        <h2><img src={logo} alt="Logo" width="100px"/> About</h2>
    </Container>;
}

export default About