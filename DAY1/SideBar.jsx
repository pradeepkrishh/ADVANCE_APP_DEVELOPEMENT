// Sidebar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'; // Import the CSS file for styling

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open':'closed'}`}>
      <button onClick={toggleSidebar} className="toggle-btn">
        {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
      <ul className="sidebar-list">
        <li><Link to="/search" style={{color:'white'}}>Search</Link></li>
        <li><Link to="/about" style={{color:'white'}}>About</Link></li>
        <li><Link to="/postjob"  style={{color:'white'}}>Post Job</Link></li>

      </ul>
    </div>
  );
};

export default Sidebar;