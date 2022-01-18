import {Card} from "react-bootstrap";
import formatCurrency from "../utils/CurrencyFormatter";
import FaIconButton from "./FaIconButton";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ProductBlock = ({product}) => (
    <Card border="white">
        <Card.Img variant="top" src={product.image} alt={product.name}/>
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text className="pt-3">
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