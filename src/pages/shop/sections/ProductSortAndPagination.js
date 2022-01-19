import {Col, Row} from "react-bootstrap";
import CustomSelect from "../../../components/CustomSelect";

const ProductSortAndPagination = () => (
    <div className="d-flex pb-40 justify-content-between align-items-center flex-md-wrap">
        <Row>
            <Col className="w-200">
                <CustomSelect options={sortOptions} defaultValue={3}/>
            </Col>
            <div className="w-200">
                <CustomSelect options={paginationOptions} defaultValue={1}/>
            </div>
        </Row>

        <div>
            Showing 1 to 6 of 8 items
        </div>
    </div>
)

const sortOptions = [
    {value: 1, text: 'Alphabetically, A-Z'},
    {value: 2, text: 'Alphabetically, Z-A'},
    {value: 3, text: 'Price, low to high'},
    {value: 4, text: 'Price, high to low'},
    {value: 5, text: 'Date, new to old'},
    {value: 6, text: 'Date, old to new'}
]

const paginationOptions = [
    {value: 1, text: 10},
    {value: 2, text: 20},
    {value: 3, text: 30},
    {value: 4, text: 'All'},
]

export default ProductSortAndPagination