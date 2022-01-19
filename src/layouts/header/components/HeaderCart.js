import iconHeader2 from "../../../assets/images/icons/icon-header-02.png";
import './HeaderCart.scss'

import React from "react";
import HeaderCartItem from "./HeaderCartItem";
import UuidGenerator from "../../../utils/UuidGenerator";
import DarkButton from "../../../components/DarkButton";
import {Badge, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import TextFormatter from "../../../utils/TextFormatter";


const HeaderCart = ({cart}) => {

    const calcTotalPrice = () => cart.items.map(item => item.price * item.count).reduce((x, y) => x + y, 0);
    const navigate = useNavigate()
    return (
        <div className="header-wrap-icon" onClick={e => e.stopPropagation()}>
            {/* Image with Badge */}
            <div onClick={() => cart.toggleVisibility()}>
                <Image src={iconHeader2} className="header-icon1" alt="ICON"/>
                <span className="icons-badge">
                    <Badge bg="dark" pill={true}>{cart.items.length}</Badge>
                </span>
            </div>

            {/* Cart Items */}
            <div className={cartItemsClass(cart.visible)}>
                <ul className="header-cart-wrapitem ps-0">
                    {cart.items.map(cartItem => (<HeaderCartItem cartItem={cartItem} key={UuidGenerator.uuid4()}/>))}
                </ul>

                <div className="header-cart-total pt-2 pb-4 pr-1">
                    Total: {TextFormatter.formatCurrency(calcTotalPrice())}
                </div>

                <div className="d-flex gap-3">
                    <DarkButton text="View Cart" type="submit" onClick={() => navigate("cart", {replace: true})}/>
                    <DarkButton text="Check Out" type="submit" onClick={() => navigate("cart", {replace: true})}/>
                </div>
            </div>
        </div>
    )
}

const cartItemsClass = visible => {
    return visible ? "header-cart header-dropdown show-header-dropdown" : "header-cart header-dropdown";
};

export default HeaderCart