import CategoryFilter from "./filter/CategoryFilter";
import SearchFilter from "./filter/SearchFilter";
import ColorFilter from "./filter/ColorFilter";
import PriceFilter from "./filter/PriceFilter";
import SizeFilter from "./filter/SizeFilter";
import {productService} from "../../../service/ProductService";

const ProductFilterSidebar = () => (
    <div>
        <CategoryFilter categories={productService.getCategories()}/>
        <ColorFilter/>
        <PriceFilter/>
        <SizeFilter/>
        <SearchFilter/>
    </div>
)

export default ProductFilterSidebar