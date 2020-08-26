import React,{useState,useEffect} from 'react'
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../../data/blognew.json';
import { NavLink } from 'react-router-dom';
/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {


  const[posts,setPosts] = useState([]);

    useEffect(()=> {
      const posts = blogPost.data;
      setPosts(posts);
  },[posts]);

  return(
    <div className="sidebarContainer">
      <Card style={{marginBottom:'20px',padding:'20px'}}>
        <div className="cardHeader"> 
          <span>About-US</span>
        </div>
        <div className="profileImageContainer">
          <img src={require('../../blogPostImages/profile.jpg')} alt="profileImg"/>
        </div>
        <div className="cardbody">
          <p className="personalBio">My Name is Kanaiya Patel and I am really really interested to become Front End Developer...</p>
        </div>
      </Card>

      <Card style={{marginBottom:'20px',padding:'20px'}}>
        <div className="cardHeader"> 
          <span>Social Network</span>
        </div>
      </Card>

      <Card style={{marginBottom:'20px',padding:'20px'}}>
      <div className="cardHeader"> 
          <span>Recent Posts</span>
        </div>
        <div className="recentPosts">
          {
              posts.map(post =>{
                return(
                  <NavLink key={post.id} to={`/post/${post.id}`}>
                    <div className="recentPost">  
                      <h3>{post.blogTitle}</h3>
                      <span>{post.postedOn}</span>
                    </div>
                  </NavLink>
                );
              })
          }
          
        </div>
      </Card>
    </div>
   )

 }

export default Sidebar