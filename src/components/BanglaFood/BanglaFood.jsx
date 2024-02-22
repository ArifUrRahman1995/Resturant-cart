import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar/Navbar';
import { Footer } from '../../container';
import Menu from './Menu';
import Modal from './Modal'; // Import your modal component
import './BanglaFood.css';

function BanglaFood() {
  // Initialize state for tracking the active menu and active button
  const [activeMenu, setActiveMenu] = useState('breakfast');
  const [activeButton, setActiveButton] = useState('breakfast');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  // Function to handle menu clicks
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setActiveButton(menu); // Update active button when menu changes
  };

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
        {/* Render Cart Button with icon */}
        <button onClick={toggleModal}>
          <FontAwesomeIcon icon={faShoppingCart} /> Your Cart
        </button>
      </div>
      {/* Render menu based on activeMenu */}
      <Menu activeMenu={activeMenu} />
      {/* Render Modal */}
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        {/* Modal Content Goes Here */}
        <p>This is the cart modal content</p>
      </Modal>
      <Footer />
    </>
  );
}

export default BanglaFood;
