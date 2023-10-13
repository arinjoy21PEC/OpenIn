import React from 'react';
import './Navbar.css';
import {NotificationsNoneOutlined, Search} from "@mui/icons-material"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <span>Dashboard</span>
      </div>
      <div className="navbar-icons">
        <div className="notification-icon">
          <i className="fas fa-bell"></i>
        </div>
        <div className="search-icon">
          <i className="fas-fa-search">
          </i>
          <form>
            <input type="text" placeholder="Search" />
          </form>
        </div>
        <div className="topbarIconContainer">
            <NotificationsNoneOutlined/>
        </div>
        <div className="avatar">
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="User Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
