import iconHeader2 from "../../../assets/images/icons/icon-header-02.png";
import itemCart1 from "../../../assets/images/item-cart-01.jpg";
import itemCart2 from "../../../assets/images/item-cart-02.jpg";
import itemCart3 from "../../../assets/images/item-cart-03.jpg";
import './HeaderCart.scss'

import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import HeaderCartItem from "./HeaderCartItem";
import formatCurrency from "../../../utils/CurrencyFormatter";

const cartItems = [
    {
        img: itemCart1,
        title: 'White Shirt With Pleat Detail Back',
        count: 1,
        price: 19.00
    },
    {
        img: itemCart2,
        title: 'Converse All Star Hi Black Canvas',
        count: 1,
        price: 39.00
    },
    {
        img: itemCart3,
        title: 'Nixon Porter Leather Watch In Tan',
        count: 1,
        price: 17.00
    }
]

class HeaderCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartVisible: false
        }
        window.onclick = () => {
            if (this.state.cartVisible) {
                this.setState({
                    cartVisible: false
                })
            }
        }
    }

    toggleCartView(event) {
        this.setState({
            cartVisible: !this.state.cartVisible
        })
        event.stopPropagation()
    }

    onCartClick(event) {
        event.stopPropagation()
    }

    calcTotalPrice() {
        return cartItems.map(item => item.price * item.count).reduce((x, y) => x + y, 0)
    }

    render() {
        let cartClass = "header-cart header-dropdown"
        if (this.state.cartVisible) cartClass += " show-header-dropdown"

        return (
            <div className="header-wrap-icon" onClick={e => this.toggleCartView(e)}>
                <img src={iconHeader2} className="header-icon1" alt="ICON"/>
                <span className="icons-badge">3</span>

                <div className={cartClass} onClick={e => this.onCartClick(e)}>
                    <ul className="header-cart-wrapitem ps-0">
                        {cartItems.map(cartItem => (<HeaderCartItem cartItem={cartItem}/>))}
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