import SectionTitle from "../../../components/SectionTitle";
import ProductsSlide from "../../../components/ProductsSlide";
import Container from "react-bootstrap/Container";
import './FeaturedProducts.scss'

const FeaturedProducts = ({products}) => (
    <Container className="featured-products pb-5" as="section">
        <SectionTitle title="Featured Products" />
        <div className="featured-products-mobile">
            <ProductsSlide products={products} countPerPage={1}/>
        </div>
        <div className="featured-products-pad">
            <ProductsSlide products={products} countPerPage={2}/>
        </div>
        <div className="featured-products-desktop">
            <ProductsSlide products={products} countPerPage={4}/>
        </div>
    </Container>
)

export default FeaturedProducts