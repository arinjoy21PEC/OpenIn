import React from 'react';
import './Card.css'; // Import the CSS file
import { Email, Instagram, WhatsApp, YouTube } from '@mui/icons-material'

const Cardi = ({ formData }) => {
  return (
    <div className="card">
      <h3 className="card-heading">{formData.name}</h3>
      <div className="card-content">
        <div className="column">
            <div className='C'>
                <WhatsApp/>
                <p>{formData.phone}</p>
            </div>
            <div className='C'>
                <Email/>
                <p>{formData.email}</p>
            </div>
        </div>
        <div className="column">
            <div className='C'>
                <Instagram/>
                <p>{formData.instagramLink}</p>
            </div>
            <div className='C'>
                <YouTube/>
                <p>{formData.youtubeLink}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cardi;
