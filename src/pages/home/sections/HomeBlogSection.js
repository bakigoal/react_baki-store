import Container from "react-bootstrap/Container";
import SectionTitle from "../../../components/SectionTitle";
import {Col, Row} from "react-bootstrap";
import BlogBlock from "../../../components/BlogBlock";

const HomeBlogSection = ({blogs}) => (
    <Container className="home-blog pb-5 pt-5" as="section">
        <SectionTitle title="Our Blog"/>
        <Row className="justify-content-center">
            {blogs.map(blog => (
                <Col sm={10} md={8} lg={4} key={blog.id}>
                    <BlogBlock blog={blog}/>
                </Col>
            ))}
        </Row>
    </Container>
)

export default HomeBlogSection