import React from 'react';
import '../styles/lens.css';

const Lens = () => {
  const handleImageClick = () => {
    window.location.href = '/contact-lenses-product'; // Replace with the actual product page URL
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px', fontFamily: 'Arial, sans-serif', color: '#333', }}>
        Purchase affordable, contact lens
      </h2>
      <div className="lens-container">
        <img
          src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more.jpg" // Replace with your first image URL
          alt="Lens 1"
          className="lens-image"
          onClick={handleImageClick}
        />
        <img
          src="https://static1.lenskart.com/media/desktop/img/June22/contact-lens-more-1.jpg" // Replace with your second image URL
          alt="Lens 2"
          className="lens-image"
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
};

export default Lens;
