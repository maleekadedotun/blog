// import { useState }from 'react';
import BlogList from './BlogList';
import UseFetch from './useCustom';


const Home = () => {

    const {data: blogs, isPending, error} = UseFetch(' http://localhost:8000/blogs')

    // const [name, setName]= useState("Mario")
    // const [age, setAge]= useState(25)
   

    // const handleClick = (e) => {
    //     // console.log("Maleek");
    //     setName("Luigi")
    //     setAge(30)
    // }


    // const [name, setName] = useState("Mario")

    // const handleClickAgain = (name, e) => {
    //     console.log('Hello', ' ' + name, e.target);
    // }

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlog(newBlogs);
    // }

    
    return ( 
        <div className="home">
            {/* <h2>HomePage</h2>
            <p>{name} is {age} years old</p>
              <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={(e) =>handleClickAgain('mario', e)}>Click me again</button> */}


            {error && <div> {error} </div>}
           { isPending && <div>Loading.....</div> }
           {blogs && <BlogList blogs={blogs} titles="All Blogs !" />}
           {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Mario" || blog.author ==="Luigi")} handleDelete={handleDelete} titles="Mario and Luigi Blogs" /> */}
           {/* <BlogList blogs={blogs.filter((blog) => blog.author ===  "Luigi")} titles="Luigi Blogs " /> */}

           {/* <button onClick={() => setName("Luigi")}>Change name</button>
           <p>{name}</p> */}
        </div>
    )
}

export default Home;

