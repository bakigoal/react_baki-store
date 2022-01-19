import Categories from "./sidebar/Categories";
import BlogSidebarFeaturedProducts from "./sidebar/FeaturedProducts";
import Archive from "./sidebar/Archive";
import Tags from "./sidebar/Tags";
import {Container} from "react-bootstrap";
import Search from "./sidebar/Search";

const BlogSidebar = () => {
    return (
        <Container>
            <Search />
            <Categories />
            <BlogSidebarFeaturedProducts />
            <Archive />
            <Tags />
        </Container>
    )
}

export default BlogSidebar