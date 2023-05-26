import React, { useState } from 'react';

const Navbar = ({ buttons, handleButtonClick }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (buttonName) => {
    setSelectedButton(buttonName);
    handleButtonClick(buttonName);
  };

  return (
    <div className='navbar-container'>
      <nav className="flex items-center justify-center h-16 bg-inherit py-4">
        {buttons.map((button) => (
          <button
            key={button.name}
            className={`custom-btn ${selectedButton === button.name ? 'btn-selected' : ''}`}
            onClick={() => handleClick(button.name)}
          >
            {button.text}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;