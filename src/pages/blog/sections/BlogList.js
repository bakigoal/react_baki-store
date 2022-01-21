import BlogItem from "./BlogItem"
import UuidGenerator from "../../../utils/UuidGenerator";

const BlogList = ({blogs}) => blogs.map((blog) => (<BlogItem key={UuidGenerator.uuid4()} blog={blog}/>))

export default BlogList