import ProductSort from "./ProductSort";
import ProductPagination from "./ProductPagination";
import {Col, Row} from "react-bootstrap";

const ProductSortAndPagination = () => (
    <div style={{background: "beige"}} className="d-flex pb-40 justify-content-between align-items-center flex-md-wrap">
        <Row>
            <Col className="w-200">
                <ProductSort/>
            </Col>
            <div className="w-200">
                <ProductPagination/>
            </div>
        </Row>

        <div>
            Showing 1 to 6 of 8 items
        </div>
    </div>
)

export default ProductSortAndPagination