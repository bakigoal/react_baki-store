import React from "react";
import {Image} from "react-bootstrap";
import TextFormatter from "../../../utils/TextFormatter";

const HeaderCartItem = ({cartItem}) => (
    <li className="d-flex pb-1 pt-1">
        <div className="header-cart-item-img">
            <Image src={cartItem.img} alt="IMG" rounded/>
        </div>

        <div className="header-cart-item-txt">
            <a href="#" className="header-cart-item-name">
                {cartItem.title}
            </a>

            <span className="header-cart-item-info">
                {cartItem.count} x {TextFormatter.formatCurrency(cartItem.price)}
            </span>
        </div>
    </li>
)

export default HeaderCartItem