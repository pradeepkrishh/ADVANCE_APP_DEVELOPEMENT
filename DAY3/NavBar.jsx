import { Link } from 'react-router-dom';
import './NavBar.css';
// import { SidebarData } from './SideBarData1';
import React, { useState } from "react";

// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { IconContext } from "react-icons";
// import "./Sidebar.css";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className='navbar1'>
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className='logo-container'>
      </div>
      <div className="container">
       
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                LOG OUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;