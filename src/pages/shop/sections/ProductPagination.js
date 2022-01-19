import CustomSelect from "../../../components/CustomSelect";

const ProductPagination = () => (
    <CustomSelect options={paginationOptions} defaultValue={1}/>
)

const paginationOptions = [
    {value: 1, text: 10},
    {value: 2, text: 20},
    {value: 3, text: 30},
    {value: 4, text: 'All'},
]
export default ProductPagination