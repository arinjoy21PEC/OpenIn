import React, { useState } from 'react';
import './PopUp.css';

export default function Popup({ isOpen, onClose, updateWidgetSm }) {
  console.log("Popup component rendered");
  const [showBasicForm, setShowBasicForm] = useState(true);
  const [showSocialForm, setShowSocialForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instagramLink: '',
    youtubeLink: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const toggleBasicForm = () => {
    setShowBasicForm(true);
    setShowSocialForm(false);
  };

  const toggleSocialForm = () => {
    setShowBasicForm(false);
    setShowSocialForm(true);
  };

  const handleNext = () => {
    toggleSocialForm();
  };

  const handleBack = () => {
    toggleBasicForm();
  };

  const handleDone = () => {
    // Here, you can use formData to display the data in a widgetSm component.
    console.log('Form Data:', formData);
    updateWidgetSm(formData);
  };

  return isOpen ? (
    <div className="popup">
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <p className="addProfileText">Add Profile</p>
        <div className="form-links">
          <p className={showBasicForm ? 'activeLink' : ''}>
            Basic
          </p>
          <p className={showSocialForm ? 'activeLink' : ''}>
            Social
          </p>
        </div>
        {showBasicForm && (
          <form className="form-container">
            <label>Enter Name:</label>
            <input
              type="text"
              className="input-field"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
            <label>Enter Email:</label>
            <input
              type="email"
              className="input-field"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
            <label>Enter Phone:</label>
            <input
              type="tel"
              className="input-field"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
            <button onClick={handleNext}>Next</button>
          </form>
        )}
        {showSocialForm && (
          <form className="form-container">
            <label>Instagram Link:</label>
            <input
              type="url"
              className="input-field"
              placeholder="Instagram Link"
              value={formData.instagramLink}
              onChange={(e) => handleInputChange('instagramLink', e.target.value)}
            />
            <label>Youtube Link:</label>
            <input
              type="url"
              className="input-field"
              placeholder="Youtube Link"
              value={formData.youtubeLink}
              onChange={(e) => handleInputChange('youtubeLink', e.target.value)}
            />
            <div className='U'>
              <button onClick={handleBack}>Back</button>
              <button onClick={handleDone}>Done</button>
            </div>
          </form>
        )}
      </div>
    </div>
  ) : null;
}
