import {Card} from "react-bootstrap";
import formatCurrency from "../utils/CurrencyFormatter";
import FaIconButton from "./FaIconButton";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Link} from "react-router-dom";

const ProductBlock = ({product}) => (
    <Card border="white">
        <Card.Img variant="top" src={product.image} alt={product.name}/>
        <Card.Body className="ps-0 pe-0">
            <Card.Title className="s-text3"><Link to="about">{product.name}</Link></Card.Title>
            <Card.Text className="pt-2 m-text6">
                    {formatCurrency(product.price)} {"  "}
                    <FaIconButton icon={faCartPlus} onclick={() => addToCart(product)}/>
            </Card.Text>
        </Card.Body>
    </Card>
)

const addToCart = (product) => {
    console.log("added to cart product:", product)
}

export default ProductBlock