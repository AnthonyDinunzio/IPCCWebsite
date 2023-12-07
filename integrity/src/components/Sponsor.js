import React, { useState, useEffect } from 'react';
import '../styles/sponsors.css'; // Import your custom CSS file for styling

const SponsorsCarousel = () => {
  const sponsorNames = ['AMII', 'HSDS', 'IFPO', 'Alberta Innovates', 'Alberta Catalyzer', 'United Nations'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === sponsorNames.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds (adjust the timing as needed)
    return () => clearInterval(interval);
  }, [sponsorNames.length]);

  return (
    <div className="carousel-container">
      <div className="slide">
        {sponsorNames.map((name, idx) => (
          <div key={idx} className={idx === currentIndex ? 'show' : 'hide'}>
            <h3>{name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsCarousel;
