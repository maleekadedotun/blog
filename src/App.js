// import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import About from "./About";
import BlogDetails from "./BlogDetails";

function App() {

  // const title = "Welcome to the new blog"
  // const likes = 50
  // const link = "http//:www.google.com"
  return (
    <Router>
    <div className="App">
       <Navbar />
      <div className="content">
       
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/about'>
           <About />
          </Route>

          <Route path='/blog-details/:id'>
           <BlogDetails />
          </Route>
        </Switch>
        {/* <h1>{ title }</h1>
        <p>Liked {likes} times</p>
        <p> {[1,2,3,4,5,]} times</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google Site</a> */}
        {/* <h1>Home Page</h1> */}
      </div>
    </div>
    </Router>
  );
}


export default App;
