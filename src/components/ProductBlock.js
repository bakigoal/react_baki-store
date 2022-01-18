import {Card} from "react-bootstrap";
import formatCurrency from "../utils/CurrencyFormatter";
import FaIconButton from "./FaIconButton";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Link} from "react-router-dom";
import {cartService} from "../service/CartService";

const ProductBlock = ({product, setCartItems}) => (
    <Card border="white">
        <Card.Img variant="top" src={product.image} alt={product.name}/>
        <Card.Body className="ps-0 pe-0">
            <Card.Title className="s-text3"><Link to="about">{product.name}</Link></Card.Title>
            <Card.Text className="pt-2 m-text6">
                {formatCurrency(product.price)} {"  "}
                <FaIconButton icon={faCartPlus} onclick={() => cartService.addToCart(product, setCartItems)}/>
            </Card.Text>
        </Card.Body>
    </Card>
)

export default ProductBlock