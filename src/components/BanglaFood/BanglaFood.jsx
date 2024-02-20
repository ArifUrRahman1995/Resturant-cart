import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Footer } from '../../container';
import Menu from './Menu';
import './BanglaFood.css';

function BanglaFood() {
  // Initialize state for tracking the active menu and active button
  const [activeMenu, setActiveMenu] = useState('breakfast');
  const [activeButton, setActiveButton] = useState('breakfast');

  // Function to handle menu clicks
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setActiveButton(menu); // Update active button when menu changes
  };

  // Render buttons
  const renderButtons = () => {
    const buttons = ['breakfast', 'lunch', 'dinner', 'drinks', 'dessert'];
    return buttons.map((button) => (
      <button
        key={button}
        className={activeButton === button ? 'active' : ''}
        onClick={() => handleMenuClick(button)}
      >
        {button.charAt(0).toUpperCase() + button.slice(1)}
      </button>
    ));
  };

  // Return JSX
  return (
    <>
      <Navbar />
      <div className="menu-buttons">
        {/* Render buttons */}
        {renderButtons()}
      </div>
      {/* Render menu based on activeMenu */}
      <Menu activeMenu={activeMenu} />
      <Footer />
    </>
  );
}

export default BanglaFood;
