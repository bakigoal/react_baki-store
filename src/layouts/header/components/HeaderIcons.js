import React from "react";
import HeaderCart from "./HeaderCart";
import HeaderUser from "./HeaderUser";

const HeaderIcons = ({cartItems}) => {
    return (
        <div className="header-icons d-flex">
            <HeaderUser/>
            <span className="line-divider1"/>
            <HeaderCart cartItems={cartItems}/>
        </div>
    );
}

export default HeaderIcons