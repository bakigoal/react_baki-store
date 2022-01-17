import iconHeader2 from "../../../assets/images/icons/icon-header-02.png";
import './HeaderCart.scss'

import React from "react";
import Button from "react-bootstrap/Button";
import HeaderCartItem from "./HeaderCartItem";
import formatCurrency from "../../../utils/CurrencyFormatter";
import UuidGenerator from "../../../utils/UuidGenerator";


const HeaderCart = ({cart}) => {
    const toggleCartView = event => {
        cart.toggleVisibility()
        event.stopPropagation()
    }

    const onCartClick = event => {
        event.stopPropagation()
    }

    const calcTotalPrice = () => cart.items.map(item => item.price * item.count).reduce((x, y) => x + y, 0);

    let cartClass = "header-cart header-dropdown"
    if (cart.visible) cartClass += " show-header-dropdown"
    return (
        <div className="header-wrap-icon" onClick={e => toggleCartView(e)}>
            <img src={iconHeader2} className="header-icon1" alt="ICON"/>
            <span className="icons-badge">{cart.items.length}</span>

            <div className={cartClass} onClick={e => onCartClick(e)}>
                <ul className="header-cart-wrapitem ps-0">
                    {cart.items.map(cartItem => (<HeaderCartItem cartItem={cartItem} key={UuidGenerator.uuid4()}/>))}
                </ul>

                <div className="header-cart-total pt-2 pb-4 pr-1">
                    Total: {formatCurrency(calcTotalPrice())}
                </div>

                <div className="d-flex gap-3">
                    <Button variant="dark" type="submit" className="text-uppercase w-100">View Cart</Button>
                    <Button variant="dark" type="submit" className="text-uppercase w-100">Check Out</Button>
                </div>
            </div>
        </div>
    )
}

export default HeaderCart