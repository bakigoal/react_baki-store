import BlogSidebarFeaturedProducts from "./sidebar/FeaturedProducts"
import Tags from "./sidebar/Tags"
import {Container} from "react-bootstrap"
import Search from "./sidebar/Search"
import {productService} from "../../../service/ProductService";

const BlogSidebar = () => {
    return (
        <Container>
            <Search />
            <BlogSidebarFeaturedProducts products={productService.getAllProducts()} />
            <Tags />
        </Container>
    )
}

export default BlogSidebar