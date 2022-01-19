import React from "react";
import Container from "react-bootstrap/Container";
import BlogBanner from "./sections/BlogBanner";
import BlogList from "./sections/BlogList";
import BlogSidebar from "./sections/BlogSidebar";
import {Col, Row} from "react-bootstrap";
import {blogService} from "../../service/BlogService";

const Blog = () => {
    return <Container fluid>
        <BlogBanner/>
        <Container>
            <Row className="pb-5 pt-5" >
                <Col className="ps-5 pe-5" lg={8}>
                    <BlogList blogs={blogService.getAllBlogs()}/>
                </Col>
                <Col lg={4}>
                    <BlogSidebar/>
                </Col>
            </Row>
        </Container>
    </Container>;
}

export default Blog