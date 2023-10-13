import React, { useState } from 'react';
import './WidgetSm.css'; 
import Popup from '../PopUp/PopUp.jsx';
import Cardi from '../Card/Card.jsx'

export default function Card() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState(null);
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const updateWidgetSmWithData = (formData) => {
    console.log('Updating widgetSm with form data:', formData);
    setFormData(formData);
    setShowPopup(false);
  };

  return (
    <div className="card">
      {!formData?(
      <div className='Utr'>
        <div className="circle" onClick={openPopup}>
          <i className="fas fa-plus">+</i>
        </div>
        <p className="addProfileText">Add Profile</p>
      </div>
      ):(
      <div className='er'>
        <Cardi formData={formData} />
      </div>
      )}
      <Popup isOpen={showPopup} onClose={closePopup} updateWidgetSm={updateWidgetSmWithData} />
    </div>
  );
}
