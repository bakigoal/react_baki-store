import CustomSelect from "../../../components/CustomSelect";

const ProductSort = () => (
    <CustomSelect options={sortOptions} defaultValue={3}/>
)

const sortOptions = [
    {value: 1, text: 'Alphabetically, A-Z'},
    {value: 2, text: 'Alphabetically, Z-A'},
    {value: 3, text: 'Price, low to high'},
    {value: 4, text: 'Price, high to low'},
    {value: 5, text: 'Date, new to old'},
    {value: 6, text: 'Date, old to new'}
]

export default ProductSort