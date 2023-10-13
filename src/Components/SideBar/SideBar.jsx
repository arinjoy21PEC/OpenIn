import React, { useState } from 'react';
import './SideBar.css';
import { AccountCircleRounded, CalendarMonthOutlined, PieChartOutline, SellOutlined, Settings } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div>
    <div className='sidebar'>
      <div className="sidebar-heading">
        Board.
      </div>
      <ul className="sidebar-list">
        <div className='r'>
          <PieChartOutline />
          <li>Dashboard</li>
        </div>
        <div className='r'>
          <SellOutlined />
          <li>Transactions</li>
        </div>
        <div className='r'>
          <CalendarMonthOutlined />
          <li>Schedules</li>
        </div>
        <div className='r'>
          <AccountCircleRounded />
          <li>Users</li>
        </div>
        <div className='r'>
          <Settings />
          <li>Settings</li>
        </div>
      </ul>
      <div className="sidebar-bottom">
        <div className="help-contact">
          <span>Help</span>
          <span>Contact Us</span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Sidebar;
