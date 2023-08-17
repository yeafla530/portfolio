import React, { useEffect, useState } from 'react';

const Sprinkles = () => {
  const [sprinkles, setSprinkles] = useState([]);

  const generateRandomPosition = () => {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    return { x: randomX, y: randomY };
  };

  useEffect(() => {
    const sprinkleCount = 200; // Number of total sprinkles
    const flickeringCount = 100; // Number of sprinkles to flicker

    const generatedSprinkles = [];
    for (let i = 0; i < sprinkleCount; i++) {
      const position = generateRandomPosition();
      const isFlickering = i < flickeringCount;
      generatedSprinkles.push(
        <div
          key={i}
          className={`sprinkle ${isFlickering ? 'flicker' : ''}`}
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
        ></div>
      );
    }

    setSprinkles(generatedSprinkles);
  }, []);

  return (
    <div className="sprinkles-container">
      {sprinkles}
    </div>
  );
};

export default Sprinkles;
