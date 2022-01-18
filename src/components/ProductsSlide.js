import React from "react";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import FaIconButton from "./FaIconButton";
import {Col, Row} from "react-bootstrap";
import ProductBlock from "./ProductBlock";

const ProductsSlide = ({products, countPerPage}) => {
    const slidedProducts = products.slice(0, countPerPage)

    return (
        <div className="d-flex products-slide align-items-center">
            <div className="flex-grow-0 pe-1">
                <FaIconButton icon={faAngleLeft} onclick={onLeftClick} size="2x"/>
            </div>

            <div className="flex-grow-1">
                <Row className="justify-content-center">
                    {slidedProducts.map(product => (
                        <Col sm={6} md={6} lg={3} key={product.id}>
                            <ProductBlock product={product}/>
                        </Col>
                    ))}
                </Row>
            </div>

            <div className="flex-grow-0 ps-1">
                <FaIconButton icon={faAngleRight} onclick={onRightClick} size="2x"/>
            </div>
        </div>
    );
}

const onLeftClick = () => {
    console.log("left clicked...")
}

const onRightClick = () => {
    console.log("right clicked...")
}

export default ProductsSlide