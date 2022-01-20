import '../../Blog.scss'

const BlogSidebarFeaturedProducts = ({products}) => (
    <div className="pb-5 pt-5">
        <h4 className="m-text23 pt-65 pb-34">Featured Products</h4>
                <ul className="p-lg-0">
                    <li className="flex-w pb-20 ls-none">
                        <a href="" className="d-block wrap-pic-w w-size22 mr-20 trans-0-4  ">
                            <img src={products[0].image} alt={products[0].name}/>
                        </a>
                        <div className="w-size23 pt-1">
                            <a href="" className="s-text20">
                                {products[0].name}
                            </a>
                            <span className="dis-block s-text17 pt-6">
                                <span>$20.00</span>
                            </span>
                        </div>

                    </li>
                </ul>
    </div>
)

export default BlogSidebarFeaturedProducts