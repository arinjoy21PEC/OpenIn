import React from 'react';
import './FeaturedInfo.css';
import {   PaymentsTwoTone, PeopleAltOutlined, SellOutlined, ThumbUpSharp } from '@mui/icons-material';
import { UNSAFE_mapRouteProperties } from 'react-router';

const FeaturedInfo = () => {
  return (
    <div className="featured-info">
      <div className="info-card">
       <PaymentsTwoTone/>
        <h2>Total Revenues</h2>
        <p>$1,234,567</p>
        <div className="percentage-container">
          <span className="percentage">+2.3%</span>
        </div>
      </div>
      <div className="info-card">
        <SellOutlined/>
        <h2>Total Transactions</h2>
        <p>5,678</p>
        <div className="percentage-container">
          <span className="percentage">+1.7%</span>
        </div>
      </div>
      <div className="info-card">
        <ThumbUpSharp/>
        <h2>Total Likes</h2>
        <p>1,234</p>
        <div className="percentage-container">
          <span className="percentage">+1.4%</span>
        </div>
      </div>
      <div className="info-card">
        <PeopleAltOutlined/>
        <h2>Total Users</h2>
        <p>23,456</p>
        <div className="percentage-container">
          <span className="percentage">+4.2%</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
