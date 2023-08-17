import React, { useState } from 'react';
import '../assets/Slider.css';


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'logo192.png',
    'logo512.png',
    'profile.png',
    // Add more image paths here
    ] ;

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      goToNextSlide();
    } else {
      goToPreviousSlide();
    }
  };

  return (
    <div className="carousel-container" onWheel={handleWheel}>
      <button className="prev" onClick={goToPreviousSlide}>Previous</button>
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={process.env.PUBLIC_URL + image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="next" onClick={goToNextSlide}>Next</button>
    </div>
  );
};

export default Slider;
