import {Image, Navbar} from "react-bootstrap";
import logo from "../../../assets/images/icons/logo.png";
import brand from '../../../assets/images/icons/baki-brand.png'
import React from "react";

const HeaderBrand = () => (
    <Navbar.Brand href="/" className="header-brand ps-4">
        <Image src={brand}
             alt=""
             height="30"
             className="d-inline-block align-top"/>
    </Navbar.Brand>
)

export default HeaderBrand