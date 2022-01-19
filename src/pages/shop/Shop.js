import React from "react";
import Container from "react-bootstrap/Container";
import ProductFilterSidebar from "./sections/ProductFilterSidebar";
import {Col, Row} from "react-bootstrap";
import ProductList from "./sections/ProductList";
import banner from '../../assets/images/heading-pages-01.jpg'
import PageTitleBanner from "../../components/PageTitleBanner";
import ProductSortAndPagination from "./sections/ProductSortAndPagination";

const Shop = () => (
    <>
        <PageTitleBanner title="Products" img={banner}/>
        <Container>
            <Row>
                <Col sm={6} md={4} lg={3} className="pb-40">
                    <ProductFilterSidebar/>
                </Col>
                <Col sm={6} md={8} lg={9} className="pb-40">
                    <ProductSortAndPagination/>
                    <ProductList/>
                </Col>
            </Row>
        </Container>
    </>
)

export default Shop