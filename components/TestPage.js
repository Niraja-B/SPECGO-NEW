import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TestPage.css'; // Importing the CSS file

const TestPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/App1');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
        Do you need to check your eyes at Home?
      </h2>
      <img 
        src="https://static1.lenskart.com/media/desktop/img/2024/jun/eyetest/Turban-DesktopBanner.jpg" // Replace this URL with your image URL
        alt="Test Image"
        style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }}
        onClick={handleClick}
      />
    </div>
  );
};

export default TestPage;
