import iconHeader1 from "../../../assets/images/icons/icon-header-01.png";
import React from "react";
import {Image} from "react-bootstrap";

const HeaderUser = () => {
    return (
        <a href="#" className="header-wrap-icon dis-block">
            <Image src={iconHeader1} className="header-icon1" alt="ICON"/>
        </a>
    );
}

export default HeaderUser