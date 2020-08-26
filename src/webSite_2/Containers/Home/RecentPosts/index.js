import React from 'react'
import './style.css';
import Card from '../../../Components/UI/Card';
/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom:'20px'}}>
            <div className="postImageWrapper">
                <img src={require('../../../blogPostImages/Fashion_5.jpg')} alt="fashion"/>
            </div>
            <div style={{textAlign:'center'}}>
                <span className="blogcategory">Featured</span>
                <h2 className="postTitle">Fitness Mantra To Live Fit Life</h2>
                <span className="postedby">Posted on 21 july, 2020 by Sona Mahapatra</span>
                <p className="Postcontent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit ullam ipsa, explicabo temporibus repellendus officia hic omnis laudantium, velit voluptatem ad eos. Tempore qui veniam fugit delectus cupiditate harum.</p>
                <button className="btnreadmore">Read More</button>
            </div>
        </Card>
    </div>
   )

 }

export default RecentPosts