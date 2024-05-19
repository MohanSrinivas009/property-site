import React from 'react'
import './Buyerpage.css'

const BuyerPage = ({ area, bedrooms, bathrooms, hospitals }) => {
  const handleInterestClick = () => {
    alert('You have expressed interest in this property!');
  };

  return (
    <>
    <div className="card">
      <h2>Property Details</h2>
      <p><strong>Area:balaji nagar</strong> {area}</p>
      <p><strong>Bedrooms: 2</strong> {bedrooms}</p>
      <p><strong>Bathrooms:3</strong> {bathrooms}</p>
      <p><strong>Nearby Hospitals:0</strong> {hospitals}</p>
      <button onClick={handleInterestClick}>I am interested</button>
    </div>
    <div className="card">
      <h2>Property Details</h2>
      <p><strong>Area:balaji nagar</strong> {area}</p>
      <p><strong>Bedrooms: 2</strong> {bedrooms}</p>
      <p><strong>Bathrooms:3</strong> {bathrooms}</p>
      <p><strong>Nearby Hospitals:0</strong> {hospitals}</p>
      <button onClick={handleInterestClick}>I am interested</button>
    </div>
    <div className="card">
      <h2>Property Details</h2>
      <p><strong>Area:balaji nagar</strong> {area}</p>
      <p><strong>Bedrooms: 2</strong> {bedrooms}</p>
      <p><strong>Bathrooms:3</strong> {bathrooms}</p>
      <p><strong>Nearby Hospitals:0</strong> {hospitals}</p>
      <button onClick={handleInterestClick}>I am interested</button>
    </div>
    </>
  );
};


export default BuyerPage