import React from 'react'
import './style.css';
import BlogPost from '../../Components/BlogPost';
import Layout from '../../Components/Layout';
/**
* @author
* @function Post
**/

const Post = (props) => {
  
  return(
    <Layout>
        <BlogPost {...props}/>
    </Layout>
   )

 }

export default Post