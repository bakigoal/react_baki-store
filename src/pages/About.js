import {useTitle} from "../utils/useTitle";
import logo from "../assets/logo.svg"
import React from "react";

const title = "About"

const About = () => {
    useTitle(title)
    return <div>
        <h2><img src={logo} alt="Logo" width="100px"/> About</h2>
    </div>;
}

export default About