import {Col, Row} from "react-bootstrap";
import ProductBlock from "../../../components/ProductBlock";
import React from "react";

const ProductList = ({products, setCartItems}) => (
    <Row className="justify-content-center">
        {products.map(product => (
            <Col sm={12} md={6} lg={3} key={product.id}>
                <ProductBlock product={product} setCartItems={setCartItems}/>
            </Col>
        ))}
    </Row>
)

export default ProductList