import React from "react";
import Container from "react-bootstrap/Container";
import BlogBanner from "./sections/BlogBanner";
import BlogList from "./sections/BlogList";
import BlogSidebar from "./sections/BlogSidebar";
import {Col, Row} from "react-bootstrap";

const Blog = () => {
    return <Container fluid>
        <BlogBanner/>
        <Container>
            <Row>
                <Col lg={9}><BlogList/></Col>
                <Col lg={3}><BlogSidebar/></Col>
            </Row>
        </Container>
    </Container>;
}

export default Blog