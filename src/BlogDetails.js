import { useParams } from "react-router-dom";
import useFetch  from './useCustom'
// import BlogList from './BlogList'



const BlogDetails = () =>{
    
    const {id} = useParams();
    const {data, error, isPending} = useFetch('http://localhost:8000/blogs' + id);
    
    return (
        <div className="blog-details">
           {isPending && <div> Loading.....</div>}
           {error && <div> { error }</div>}
           <h2>blog details - {id}</h2>
           {data(
                <article>   
                    <h2>{data.title}</h2>
                    <p>Written by {data.author}</p>
                    <div>{data.body}</div> 
                </article>
           

            )}
           
        </div>
    )
}

export default BlogDetails