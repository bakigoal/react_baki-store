import FeaturedProducts from "./sidebar/FeaturedProducts"
import Tags from "./sidebar/Tags"
import {Container} from "react-bootstrap"
import Search from "./sidebar/Search"
import {productService} from "../../../service/ProductService";

const BlogSidebar = ({setCartItems}) => {
    let productsByCategory = productService.getProductsByCategory('featured')
    return (
        <Container>
            <Search />
            <FeaturedProducts products={productsByCategory} setCartItems={setCartItems} />
            <Tags />
        </Container>
    )
}

export default BlogSidebar