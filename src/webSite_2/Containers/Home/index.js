import React from 'react';
import Card from '../../Components/UI/Card';
import './style.css';
import RecentPosts from './RecentPosts';
import Layout from '../../Components/Layout';


const SideImage =props => {
    return(
        <div>
            <img src={props.src} alt="fashion"/>
        </div>
    )
};

const ImageGallary = props => (
        <div className="galaryPost">
              <section style={{width:props.lastWidth}}>
                <div className="galarypostdiv">
                    <img src={require('../../blogPostImages/'+props.imagArr[0])} alt="fashion"/>
                </div>
              </section>
              <section key="index" className="sideImageWrapper" style={{width:props.smallWidth}}>
                {props.imagArr.map(image => 
                        <SideImage src={require('../../blogPostImages/'+image)} alt="fashion"/>    
                )}
                {/* <SideImage src={require('../../blogPostImages/'+props.imagArr[2])} alt="fashion"/> */}
                {/* <SideImage src={require('../../blogPostImages/'+props.imagArr[3])} alt="fashion"/> */}
              </section>
        </div>
    );
const Home = () => {
        return(
        <div>
            <Card>
                <ImageGallary 
                    lastWidth="70%"
                    smallWidth="30%"
                    imagArr = {
                        [
                            "Fashion_1.jpg",
                            "Fashion_2.jpg",
                            "Fashion_3.jpg",
                            "Fashion_4.jpg"
                        ]
                    }
                />    
            </Card>
            <Layout>
                <RecentPosts style={{width:'70%'}}/>
            </Layout>
        </div>
    );
}

export default Home;