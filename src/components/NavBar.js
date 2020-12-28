import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => {
      setIsOpen(!isOpen);
   }

   return (
      <div className='navbar-container'>
         <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" className="navbar-brand">
               Application Tracker
            </a>
            <div className="navbar-nav ml-auto">
               <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                     Log in
                  </Link>
               </li>
               <li className="nav-item">
                  <Link to={"/logout"} className="nav-link">
                     Logout
                  </Link>
               </li>
               <li className="nav-item">
                  <Link to={"/add"} className="nav-link">
                     Add
                  </Link>
               </li>
            </div>
         </nav>
      </div>
   )
};

export default NavBar;