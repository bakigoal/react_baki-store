import BlogSidebarCategories from "./BlogSidebarCategories";
import BlogSidebarFeaturedProducts from "./BlogSidebarFeaturedProd";
import BlogSidebarArchive from "./BlogSidebarArchive";
import BlogSidebarTags from "./BlogSidebarTags";
import {Container} from "react-bootstrap";
import BlogSidebarSearch from "./BlogSidebarSearch";

const BlogSidebar = () => {
    return (
        <Container>
            <BlogSidebarSearch />
            <BlogSidebarCategories />
            <BlogSidebarFeaturedProducts />
            <BlogSidebarArchive />
            <BlogSidebarTags />
        </Container>
    )
}

export default BlogSidebar