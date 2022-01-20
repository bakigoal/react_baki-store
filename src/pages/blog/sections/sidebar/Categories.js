import '../../Blog.scss'

const data = ['Fashion','Beauty','Street Style','Life Style','DIY & Crafts']

const Categories = () => (
    <div className="pb-5 pt-5 sidebar-categories m-text23">
        <h4>Categories</h4>
        <ul>
            {data.map((list,index) => (
                <li key={index} className='bo6'>
                    <a href="" className="s-text13">{list}</a>
                </li>
            ))}
        </ul>
    </div>
)

export default Categories