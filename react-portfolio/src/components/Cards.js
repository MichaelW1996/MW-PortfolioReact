import React, { useState } from 'react';


const Cards = ({ icon, language }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="icon-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`icon ${isHovered ? 'hovered' : ''}`}>
        {/* Replace 'icon' with the actual SVG component or SVG file */}
        {icon}
      </div>
      {isHovered && <div className="z-50 language-name">{language}</div>}
    </div>
  );
};

export default Cards;
