import React from "react";
import HeaderCart from "./HeaderCart";
import HeaderUser from "./HeaderUser";

const HeaderIcons = (props) => {
    return (
        <div className="header-icons d-flex">
            <HeaderUser/>
            <span className="line-divider1"/>
            <HeaderCart {...props}/>
        </div>
    );
}

export default HeaderIcons