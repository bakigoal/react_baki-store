import {Card} from "react-bootstrap";
import formatCurrency from "../utils/CurrencyFormatter";
import FaIconButton from "./FaIconButton";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Link} from "react-router-dom";
import {getCartItems} from "../utils/LocalStorageUtil";
import CartItem from "../model/CartItem";

const ProductBlock = ({product, setCartItems}) => (
    <Card border="white">
        <Card.Img variant="top" src={product.image} alt={product.name}/>
        <Card.Body className="ps-0 pe-0">
            <Card.Title className="s-text3"><Link to="about">{product.name}</Link></Card.Title>
            <Card.Text className="pt-2 m-text6">
                {formatCurrency(product.price)} {"  "}
                <FaIconButton icon={faCartPlus} onclick={() => addToCart(product, setCartItems)}/>
            </Card.Text>
        </Card.Body>
    </Card>
)

const addToCart = (product, setCartItems) => {
    const cartItems = getCartItems()
    const idEqualPredicate = item => item.productId === product.id

    if (cartItems.some(idEqualPredicate)) {
        const items = cartItems.map(item => {
            if (idEqualPredicate(item)) {
                return {...item, count: item.count + 1}
            }
            return item
        })
        setCartItems(items)
    }else {
        const cartItem = new CartItem(product.id, product.image, product.name, 1, product.price)
        setCartItems([...cartItems, cartItem])
    }

}

export default ProductBlock