import iconHeader1 from "../../../assets/images/icons/icon-header-01.png";
import iconHeader2 from "../../../assets/images/icons/icon-header-02.png";
import React from "react";

const HeaderIcons = () => (
    <div className="header-icons d-flex">
        <a href="#" className="header-wrap-icon dis-block">
            <img src={iconHeader1} className="header-icon1" alt="ICON"/>
        </a>

        <span className="line-divider1"/>

        <div className="header-wrap-icon">
            <img src={iconHeader2} className="header-icon1" alt="ICON"/>
            <span className="icons-badge">3</span>
        </div>
    </div>
)

export default HeaderIcons