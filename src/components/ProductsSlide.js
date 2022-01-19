import React from "react";
import './ProductsSlide.scss'
import {Carousel, Col, Row} from "react-bootstrap";
import ProductBlock from "./ProductBlock";

const ProductsSlide = ({products, countPerSlide, setCartItems}) => {
    let slideCount = Math.ceil(products.length / countPerSlide)
    let slides = [...Array(slideCount).keys()]

    const getProductsForSlide = slideNumber => {
        let start = slideNumber * countPerSlide;
        let end = (slideNumber + 1) * countPerSlide;
        return products.slice(start, end)
    };

    return (
        <Carousel variant="dark" className="products-slide carousel pt-0" indicators={false} interval={10000}>
            {slides.map(slideNumber => (
                <Carousel.Item as="div" className="carousel-image-container h-100" key={slideNumber}>
                    <Row className="justify-content-center">
                        {getProductsForSlide(slideNumber).map(product => (
                            <Col sm={6} md={6} lg={3} key={product.id}>
                                <ProductBlock product={product} setCartItems={setCartItems}/>
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            ))}

        </Carousel>
    );
}

export default ProductsSlide