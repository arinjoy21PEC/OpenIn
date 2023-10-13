import React from 'react';
import Sidebar from './../../Components/SideBar/SideBar.jsx';
import Navbar from './../../Components/Navbar/Navbar.jsx';
import FeaturedInfo from './../../Components/FeaturedInfo/FeaturedInfo.jsx';
import Chart from './../../Components/Chart/Chart.jsx';
import WidgetLg from './../../Components/WidgetLg/WidgetLg.jsx';
import Card from './../../Components/WidgetSm/WidgetSm.jsx';
import './Dasboard.css'

function Dashboard() {
  return (
    <div className="Dashboard">
      <Sidebar className='sidebar'/>
      <Navbar className='navbar'/>
      <FeaturedInfo/>
      <Chart/>
      <div className='R'>
        <WidgetLg/>
        <Card/>
      </div>
    </div>
  );
}

export default Dashboard;