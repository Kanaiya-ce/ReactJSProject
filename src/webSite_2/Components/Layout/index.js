import React from 'react'
import './style.css';
import Sidebar from '../../Components/Sidebar';
/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    // <div>                       is not required here bcoz it violats the flex property of side bar and main content use fragment instead.
        <div className="container">
            {props.children}
            <Sidebar/>
        </div>
   // </div>
   )

 }

export default Layout