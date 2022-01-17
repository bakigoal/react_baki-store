import iconHeader2 from "../../../assets/images/icons/icon-header-02.png";
import './HeaderCart.scss'

import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import HeaderCartItem from "./HeaderCartItem";
import formatCurrency from "../../../utils/CurrencyFormatter";
import UuidGenerator from "../../../utils/UuidGenerator";


class HeaderCart extends Component {
    constructor(props) {
        super(props);
    }

    toggleCartView(event) {
        this.props.cart.toggleVisibility()
        event.stopPropagation()
    }

    onCartClick(event) {
        event.stopPropagation()
    }

    calcTotalPrice() {
        return this.props.cart.items.map(item => item.price * item.count).reduce((x, y) => x + y, 0)
    }

    render() {
        let cartClass = "header-cart header-dropdown"
        if (this.props.cart.visible===true) cartClass += " show-header-dropdown"

        return (
            <div className="header-wrap-icon" onClick={e => this.toggleCartView(e)}>
                <img src={iconHeader2} className="header-icon1" alt="ICON"/>
                <span className="icons-badge">3</span>

                <div className={cartClass} onClick={e => this.onCartClick(e)}>
                    <ul className="header-cart-wrapitem ps-0">
                        {this.props.cart.items.map(cartItem => (
                            <HeaderCartItem cartItem={cartItem} key={UuidGenerator.uuid4()}/>))}
                    </ul>

                    <div className="header-cart-total pt-2 pb-4 pr-1">
                        Total: {formatCurrency(this.calcTotalPrice())}
                    </div>

                    <div className="d-flex gap-3">
                        <Button variant="dark" type="submit" className="text-uppercase w-100">View Cart</Button>
                        <Button variant="dark" type="submit" className="text-uppercase w-100">Check Out</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderCart