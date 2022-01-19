import BlogBlock from "../../../components/BlogBlock";
import {Container} from "react-bootstrap";

const BlogItem = ({blog}) => (
    <Container>
        <BlogBlock blog={blog} />
    </Container>
)


export default BlogItem