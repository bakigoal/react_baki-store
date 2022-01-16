import {changeTitle} from "../utils/TitleUtil";
import logo from "../assets/logo.svg"
import React from "react";
import Container from "react-bootstrap/Container";

const title = "About"

const About = () => {
    changeTitle(title)
    return <Container>
        <h2><img src={logo} alt="Logo" width="100px"/> About</h2>
    </Container>;
}

export default About