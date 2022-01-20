import {NavLink} from "react-router-dom";

const CategoryFilter = ({categories}) => (
    <div>
        <h4 className="m-text14 fw-bold">Categories</h4>

        <ul className="pb-40">
            {categories.map(category => (
                <li className="pt-1" key={category.url}>
                    <NavLink to={category.url}>{category.name}</NavLink>
                </li>
            ))}
        </ul>
    </div>
)

export default CategoryFilter