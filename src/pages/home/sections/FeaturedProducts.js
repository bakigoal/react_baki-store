import Container from "react-bootstrap/Container";
import SectionTitle from "../../../layouts/header/components/SectionTitle";
import ProductsSlide from "../../../layouts/header/components/ProductsSlide";

const FeaturedProducts = ({products}) => (
    <Container className="featured-products pb-5" as="section">
        <SectionTitle title="Featured Products" />
        <ProductsSlide products={products}/>
    </Container>
)

export default FeaturedProducts