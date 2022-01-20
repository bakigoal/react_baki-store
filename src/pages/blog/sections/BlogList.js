import BlogItem from "./BlogItem"

const BlogList = ({blogs}) => {
    return (
        <div style={{background:"red"}}>
            {blogs.map((blog) => (<BlogItem blog={blog} />))}
        </div>
    )
}

export default BlogList