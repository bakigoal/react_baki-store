import iconHeader2 from "../../../assets/images/icons/icon-header-02.png";
import itemCart1 from "../../../assets/images/item-cart-01.jpg";
import itemCart2 from "../../../assets/images/item-cart-02.jpg";
import itemCart3 from "../../../assets/images/item-cart-03.jpg";
import './HeaderCart.scss'

import React, {Component} from "react";

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

    toggleCartView(event){
        this.setState({
            cartVisible: !this.state.cartVisible
        })
        event.stopPropagation()
    }

    onCartClick(event) {
        event.stopPropagation()
    }

    render() {
        let cartClass = "header-cart header-dropdown"
        if (this.state.cartVisible) cartClass += " show-header-dropdown"

        return (
            <div className="header-wrap-icon" onClick={e => this.toggleCartView(e)}>
                <img src={iconHeader2} className="header-icon1" alt="ICON"/>
                <span className="icons-badge">3</span>

                <div className={cartClass} onClick={e => this.onCartClick(e)}>
                    <ul className="header-cart-wrapitem">
                        <li className="header-cart-item">
                            <div className="header-cart-item-img">
                                <img src={itemCart1} alt="IMG"/>
                            </div>

                            <div className="header-cart-item-txt">
                                <a href="#" className="header-cart-item-name">
                                    White Shirt With Pleat Detail Back
                                </a>

                                <span className="header-cart-item-info">
                                                1 x $19.00
                                            </span>
                            </div>
                        </li>

                        <li className="header-cart-item">
                            <div className="header-cart-item-img">
                                <img src={itemCart2} alt="IMG"/>
                            </div>

                            <div className="header-cart-item-txt">
                                <a href="#" className="header-cart-item-name">
                                    Converse All Star Hi Black Canvas
                                </a>

                                <span className="header-cart-item-info">
                                                1 x $39.00
                                            </span>
                            </div>
                        </li>

                        <li className="header-cart-item">
                            <div className="header-cart-item-img">
                                <img src={itemCart3} alt="IMG"/>
                            </div>

                            <div className="header-cart-item-txt">
                                <a href="#" className="header-cart-item-name">
                                    Nixon Porter Leather Watch In Tan
                                </a>

                                <span className="header-cart-item-info">
                                                1 x $17.00
                                            </span>
                            </div>
                        </li>
                    </ul>

                    <div className="header-cart-total">
                        Total: $75.00
                    </div>

                    <div className="header-cart-buttons">
                        <div className="header-cart-wrapbtn">
                            <a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                View Cart
                            </a>
                        </div>

                        <div className="header-cart-wrapbtn">
                            <a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                Check Out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderCart