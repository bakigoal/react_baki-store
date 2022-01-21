import iconHeader1 from "../../../assets/images/icons/icon-header-01.png";
import React from "react";
import {Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const HeaderUser = () => {
    return (
        <NavLink href="#" className="header-wrap-icon dis-block" to="shop">
            <Image src={iconHeader1} className="header-icon1" alt="ICON"/>
        </NavLink>
    );
}

export default HeaderUser