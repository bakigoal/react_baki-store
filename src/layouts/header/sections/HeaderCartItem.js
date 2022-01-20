import React from "react";
import {Image} from "react-bootstrap";
import TextFormatter from "../../../utils/TextFormatter";
import {NavLink} from "react-router-dom";

const HeaderCartItem = ({cartItem}) => (
    <li className="d-flex pb-1 pt-1">
        <div className="header-cart-item-img">
            <Image src={cartItem.img} alt="IMG" rounded/>
        </div>

        <div className="header-cart-item-txt">
            <NavLink className="header-cart-item-name" to="blog">
                {cartItem.title}
            </NavLink>

            <span className="header-cart-item-info">
                {cartItem.count} x {TextFormatter.formatCurrency(cartItem.price)}
            </span>
        </div>
    </li>
)

export default HeaderCartItem