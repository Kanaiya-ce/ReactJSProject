import React,{useState,useEffect} from 'react'
import './style.css'
import Card from '../UI/Card';
import blogPost from '../../../data/blognew.json';
/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

    const[post,setPost] = useState({
           id: "",
           blogCategory:"",
           blogTitle : "",
           slug:"",
           postedOn: "",
           author: "",
           blogImage:"",
           blogText:""
    });
    const[postid,setPostid] = useState('');

    useEffect(()=> {
      
      const postId = props.match.params.postId;
 
      const post = blogPost.data.find(post => post.id==postId);
      setPost(post);
      setPostid(postId);
  },[post, props.match.params.postId])

  if(post.blogImage === "") return null;
  
  return(
    <div className="blogPostContainer">
    <Card> 
      <div className="blogheader">
        <span className="blogcategory">{post.blogCategory}</span>
        <h1 className="postTitle">{post.blogTitle}</h1>
  <span className="postedby">posted on {post.postedOn} by {post.author}</span>
      </div>
      <div className="imageContainer">
        <img src={require(`../../blogPostImages/${post.blogImage}`)} alt="postimage"></img>
      </div>

      <div className="Postcontent">
        <h3>{post.blogTitle}</h3>
        <p>{post.blogText}</p>
      </div>
    </Card>
    </div>
   )

 }

export default BlogPost