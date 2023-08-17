import React, { useEffect } from 'react';
// import './Sprinkles.css';

const Sprinkles = () => {
  useEffect(() => {
    const sprinkleContainer = document.querySelector('.sprinkle-container');

    if (sprinkleContainer) {
      const numSprinkles = 150;

      for (let i = 0; i < numSprinkles; i++) {
        const sprinkle = document.createElement('div');
        sprinkle.className = 'sprinkle';
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        sprinkle.style.left = x + 'vw';
        sprinkle.style.top = y + 'vh';
        sprinkleContainer.appendChild(sprinkle);
      }
    }
  }, []);

  return (
    <div className="sprinkle-container"></div>
  );
};

export default Sprinkles;
