import CategoryFilter from "./filter/CategoryFilter";
import SearchFilter from "./filter/SearchFilter";
import ColorFilter from "./filter/ColorFilter";
import PriceFilter from "./filter/PriceFilter";
import SizeFilter from "./filter/SizeFilter";

const ProductFilterSidebar = () => (
    <div>
        <CategoryFilter/>
        <ColorFilter/>
        <PriceFilter/>
        <SizeFilter/>
        <SearchFilter/>
    </div>
)

export default ProductFilterSidebar