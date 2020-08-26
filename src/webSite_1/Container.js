import React from 'react';
import Content from './Content';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import './Style.css';
const Container = () => {
    return(
        <>
            <div className="wrapper">
                <Header/>
                <Nav/>
                <Content/>
                <Footer/>
            </div>
        </>
    );
}
export default Container;