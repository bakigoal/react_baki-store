import {Image, Navbar} from "react-bootstrap";
import logo from "../../../assets/images/icons/logo.png";
import React from "react";

const HeaderBrand = () => (
    <Navbar.Brand href="/" className="header-brand">
        <Image src={logo}
             alt=""
             height="27"
             className="d-inline-block align-top"/>
    </Navbar.Brand>
)

export default HeaderBrand