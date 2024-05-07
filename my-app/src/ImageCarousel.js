import React, { useState } from 'react'; // Import useState from React

function ImageCarousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="image-carousel">
      <button onClick={prevImage}>Prev</button>
      <img src={images[currentImage]} alt="carousel" className="carousel-image" />
      <button onClick={nextImage}>Next</button>
    </div>
  );
}

export default ImageCarousel;



