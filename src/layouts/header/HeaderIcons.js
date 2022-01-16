import iconHeader1 from "../../assets/images/icons/icon-header-01.png";
import iconHeader2 from "../../assets/images/icons/icon-header-02.png";
import React from "react";

const HeaderIcons = () => (
    <div className="header-icons">
        <a href="#" className="header-wrapicon1 dis-block">
            <img src={iconHeader1} className="header-icon1" alt="ICON"/>
        </a>

        <span className="linedivide1"/>

        <div className="header-wrapicon2">
            <img src={iconHeader2} className="header-icon1" alt="ICON"/>
            <span className="header-icons-noti">3</span>
        </div>
    </div>
)

export default HeaderIcons