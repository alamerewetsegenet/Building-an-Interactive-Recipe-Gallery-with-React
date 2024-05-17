import React, { useState } from 'react';
import { images } from './imageList';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="gallery-container">
      <div className="image-container">
        <img src={images[currentIndex].url} alt={images[currentIndex].description} />
      </div>
      <div className="description-container">
        <p>{images[currentIndex].description}</p>
      </div>
      <div className="button-container">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Gallery;
