
import React, { useState, useEffect } from 'react';
import blogPost from '../data/blog.json';
import { NavLink } from 'react-router-dom';
import '../../components/AllPosts/index.css';

/**
* @author
* @function AllPosts 
**/

const AllPosts  = (props) => {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{

    const posts = blogPost.data;
    setPosts(posts);
  }, posts);

  return(

    <div className="row">

{
  posts.map(post => {

    return(

     


      <div className="col-md-3">


           
   
    <p className="lead">
    <NavLink key={post.id} to={`/post/${post.id}`}>
    <img src={post.blogImage} style={{width: "200px"},{height: "150px"}} />
      <div className = "post-title">{post.blogTitle} </div>  </NavLink>

    </p>


       </div>
           
     




    )

  })
}

    </div>
   )

 }

export default AllPosts 