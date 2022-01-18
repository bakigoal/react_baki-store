import React from "react";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import FaIconButton from "./FaIconButton";
import {Col, Row} from "react-bootstrap";
import ImageBlock from "./ImageBlock";
import banner1 from "../assets/images/banner-01.jpg";

const ProductsSlide = ({products, countPerPage}) => {
    const slidedProducts = products.slice(0, countPerPage)

    return (
        <div className="d-flex products-slide align-items-center">
            <div className="flex-grow-0">
                <FaIconButton icon={faAngleLeft} onclick={onLeftClick}/>
            </div>

            <div className="flex-grow-1 bg-light">
                <Row className="justify-content-center">
                    {slidedProducts.map(product => (
                        <Col sm={6} md={6} lg={3}>
                            <ImageBlock img={banner1} label="Dresses"/>
                        </Col>
                    ))}
                </Row>
            </div>

            <div className="flex-grow-0">
                <FaIconButton icon={faAngleRight} onclick={onRightClick}/>
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