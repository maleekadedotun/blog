import { Link } from 'react-router-dom'

const BlogList = ({blogs, titles}) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return ( 
        <div className="blog-list">
            <h2>{ titles  }</h2>
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog-details/ ${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    </Link>
                    
                    {/* <button onClick={() => handleDelete(blog.id)}>delete</button> */}
                </div> 
            ))}
        </div>
     );
}
 
export default BlogList;