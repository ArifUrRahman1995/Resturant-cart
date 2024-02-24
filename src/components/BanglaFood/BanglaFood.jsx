import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Footer } from '../../container';
import Menu from './Menu';
import Modal from './Modal'; // Import your modal component
import './BanglaFood.css';

function BanglaFood() {
  const [activeMenu, setActiveMenu] = useState('breakfast');
  const [activeButton, setActiveButton] = useState('breakfast');
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [cartContent, setCartContent] = useState({ items: [], totalPrice: 0 });

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setActiveButton(menu); // Update active button when menu changes
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const updateCartContent = (items, totalPrice) => {
    setCartContent({ items, totalPrice });
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
        {/* Render Cart Button */}
        <button onClick={toggleModal}>Cart</button>
      </div>
      {/* Render menu based on activeMenu */}
      <Menu activeMenu={activeMenu} onCartUpdate={updateCartContent} />
      {/* Render Modal */}
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        {/* Modal Content Goes Here */}
        <h2>Cart</h2>
        <ul>
          {cartContent.items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <p>Total Price: ${cartContent.totalPrice}</p>
      </Modal>
      <Footer />
    </>
  );
}

export default BanglaFood;
