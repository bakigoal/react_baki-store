import '../../Blog.scss'
import {NavLink} from "react-router-dom";

const data = ['Fashion','Beauty','Street Style','Life Style','DIY & Crafts']

const Categories = () => (
    <div className="pb-5 pt-5 sidebar-categories m-text23">
        <h4>Categories</h4>
        <ul>
            {data.map((list,index) => (
                <li key={index} className='bo6'>
                    <NavLink className="s-text13" to="home">{list}</NavLink>
                </li>
            ))}
        </ul>
    </div>
)

export default Categories