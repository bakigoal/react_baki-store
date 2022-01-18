import iconHeader2 from "../../../assets/images/icons/icon-header-02.png";
import './HeaderCart.scss'

import React from "react";
import HeaderCartItem from "./HeaderCartItem";
import formatCurrency from "../../../utils/CurrencyFormatter";
import UuidGenerator from "../../../utils/UuidGenerator";
import DarkButton from "../../../components/DarkButton";
import {Badge, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


const HeaderCart = ({cart}) => {
    const toggleCartView = event => {
        cart.toggleVisibility()
        event.stopPropagation()
    }

    const onCartClick = event => {
        event.stopPropagation()
    }

    const calcTotalPrice = () => cart.items.map(item => item.price * item.count).reduce((x, y) => x + y, 0);

    const navigate = useNavigate()
    const navigateToCartPage = () => {
        navigate("cart", {replace: true})
    }

    let cartClass = "header-cart header-dropdown"
    if (cart.visible) cartClass += " show-header-dropdown"
    return (
        <div className="header-wrap-icon" onClick={e => toggleCartView(e)}>
            <Image src={iconHeader2} className="header-icon1" alt="ICON"/>
            <span className="icons-badge">
                <Badge bg="dark" pill={true}>{cart.items.length}</Badge>
            </span>

            <div className={cartClass} onClick={e => onCartClick(e)}>
                <ul className="header-cart-wrapitem ps-0">
                    {cart.items.map(cartItem => (<HeaderCartItem cartItem={cartItem} key={UuidGenerator.uuid4()}/>))}
                </ul>

                <div className="header-cart-total pt-2 pb-4 pr-1">
                    Total: {formatCurrency(calcTotalPrice())}
                </div>

                <div className="d-flex gap-3">
                    <DarkButton text="View Cart" type="submit" onClick={() => navigateToCartPage()}/>
                    <DarkButton text="Check Out" type="submit" onClick={() => navigateToCartPage()}/>
                </div>
            </div>
        </div>
    )
}

export default HeaderCart