import '../Blog.scss'

const data = ['Fashion','Beauty','Street Style','Life Style','DIY & Crafts']

const BlogSidebarCategories = () => (
    <div className="pb-5 pt-5 SidebarCategories">
        <h4>Categories</h4>
        <ul>
            {data.map(list => (
                <li className='bo6'>
                    <a href="">{list}</a>
                </li>
            ))}
        </ul>
    </div>
)

export default BlogSidebarCategories