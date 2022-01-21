import '../../Blog.scss'
import ProductBlock from "../../../../components/ProductBlock";
import UuidGenerator from "../../../../utils/UuidGenerator";

const FeaturedProducts = ({products, setCartItems}) => {
    const sortedProducts = products.sort(() => Math.random() - 0.5)
    const firstFiveProducts = sortedProducts.splice(0, 5)

    return (
        <div className="pb-5 pt-5">
            <h4 className="m-text23 fw-bold pt-65 pb-34">Featured Products</h4>
            <ul style={{width: '200px'}}>
                {
                    firstFiveProducts.map(product => (
                            <li key={UuidGenerator.uuid4()}>
                                <ProductBlock product={product} setCartItems={setCartItems}/>
                            </li>
                        )
                    )
                }
            </ul>

        </div>
    )
}

export default FeaturedProducts