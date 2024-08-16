import React, { useEffect, useState } from 'react';
import '../styles/slide.css';

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 7;

  const slides = [
    { id: 1, imageUrl: 'https://img.ebdcdn.com/cms/Classic_circle_deskt_1f072d45a5.jpg?q=80&im=Resize,width=300,height=300,aspect=fill', label: 'Classic' },
    { id: 2, imageUrl: 'https://img.ebdcdn.com/cms/ECO_circle_deskt_6a49fe770a.jpg?q=80&im=Resize,width=300,height=300,aspect=fill', label: 'Eco-Friendly' },
    { id: 3, imageUrl: 'https://img.ebdcdn.com/cms/Artsy_circle_deskt_69de7ecb45.jpg?q=80&im=Resize,width=300,height=300,aspect=fill', label: 'Artsy' },
    { id: 4, imageUrl: 'https://img.ebdcdn.com/cms/RETRO_circle_deskt_7471edeedd.jpg?q=80&im=Resize,width=300,height=300,aspect=fill', label: 'Retro' },
    { id: 5, imageUrl: 'https://img.ebdcdn.com/cms/STREET_circle_deskt_1eb3814dc3.jpg?q=80&im=Resize,width=300,height=300,aspect=fill', label: 'Street' },
    { id: 6, imageUrl: 'https://img.ebdcdn.com/cms/Bold_circle_deskt_49f05eecfd.jpg?q=80&im=Resize,width=300,height=300,aspect=fill', label: 'Bold' },
    { id: 7, imageUrl: 'https://img.ebdcdn.com/cms/RETRO_circle_deskt_7471edeedd.jpg?q=80&im=Resize,width=300,height=300,aspect=fill', label: 'Retro' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const getVisibleSlides = () => {
    let visibleSlides = [];
    for (let i = 0; i < 5; i++) {
      visibleSlides.push((currentIndex + i) % totalSlides);
    }
    return visibleSlides;
  };

  const handleImageClick = () => {
    window.location.href = '/eyeglass-product'; // Replace with the actual product page URL
  };

  return (
    <div>
      <h2 className="carousel-title">Pick a style, any style</h2> {/* Add title here */}
      <div className="carousel-container">
        <div className="carousel-track">
          {getVisibleSlides().map((slideIndex, i) => {
            const slide = slides[slideIndex];
            const isActive = i === 2; // Center image in the set of 5

            return (
              <div 
                key={slide.id} 
                className={`carousel-slide ${isActive ? 'active' : ''}`} // Fixed className syntax
                onClick={handleImageClick} // Add click handler here
              >
                <img src={slide.imageUrl} alt={`Slide ${slideIndex + 1}`} />
                {isActive && (
                  <p className="carousel-label" onClick={handleImageClick}>
                    {slide.label}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slide;
