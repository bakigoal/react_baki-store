import React from "react"
import Container from "react-bootstrap/Container"
import banner from "../../assets/images/heading-pages-05.jpg"
import BlogList from "./sections/BlogList"
import BlogSidebar from "./sections/BlogSidebar"
import {Col, Row} from "react-bootstrap"
import {blogService} from "../../service/BlogService"
import PageTitleBanner from "../../components/PageTitleBanner"

const Blog = ({setCartItems}) => {
    return (
        <Container fluid>
            <PageTitleBanner img={banner}/>
            <Container>
                <Row className="pb-5 pt-5">
                    <Col className="ps-5 pe-5" lg={8}>
                        <BlogList blogs={blogService.getAllBlogs()}/>
                    </Col>
                    <Col lg={4}>
                        <BlogSidebar setCartItems={setCartItems}/>
                    </Col>
                </Row>
            </Container>
        </Container>
)
}

export default Blog