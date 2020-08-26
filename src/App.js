import React from 'react';
import Home from '../src/webSite_2/Containers/Home/index';
//import ContactUs from '../src/webSite_2/Containers/Home/index';

import './App.css';
import Header from './webSite_2/Components/Header';
import Hero from './webSite_2/Components/Hero';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ContactUs from './webSite_2/Containers/ContactUs';
import Post from './webSite_2/Containers/Post';
import Container from './webSite_1/Container';
const App = () => {
    return(
        <Router>
            <div className="App">
                <Header/>
                <Hero/>
                <Route path="/" exact component={Home} />
                <Route path="/contact-us" component={ContactUs}/>
                <Route path="/Post/:postId" component={Post}/>
            </div>
        </Router>
        // <Container/>
    );
}

export default App;