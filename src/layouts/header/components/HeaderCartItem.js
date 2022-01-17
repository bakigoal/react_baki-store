import React from "react";
import formatCurrency from "../../../utils/CurrencyFormatter";

const HeaderCartItem = ({cartItem}) => (
    <li className="d-flex pb-1 pt-1">
        <div className="header-cart-item-img">
            <img src={cartItem.img} alt="IMG"/>
        </div>

        <div className="header-cart-item-txt">
            <a href="#" className="header-cart-item-name">
                {cartItem.title}
            </a>

            <span className="header-cart-item-info">
                {cartItem.count} x {formatCurrency(cartItem.price)}
            </span>
        </div>
    </li>
)

export default HeaderCartItem