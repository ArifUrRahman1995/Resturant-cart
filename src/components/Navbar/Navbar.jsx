import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import { Link } from 'react-router-dom';
import Megamenu from '../Megamenu/Megamenu'; // Adjust the path as needed
import SubscriptionMegamenu from '../SubscriptionMegamenu/SubscriptionMegamenu';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSubscriptionMegamenu, setShowSubscriptionMegamenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.foodymoody} alt="app__logo" />
      </div>

      <ul className="app__navbar-links"> 
        <li className="p__opensans"><a href="/">Home</a></li>
        <li className="p__opensans"><Link to='/About'>About Us</Link></li>
        {/* Add a mouseEnter event to show the Megamenu */}
        <li className="p__opensans" onMouseEnter={() => setToggleMenu(true)} onMouseLeave={() => setToggleMenu(false)}>
         <Link to='/menu'>Menu</Link>
          {toggleMenu && <Megamenu />} {/* Render Megamenu conditionally */}
        </li>
        <li className="p__opensans"><Link to='/Feature'>Featured-Bonus</Link></li>
        <li className="p__opensans" onMouseEnter={() => setShowSubscriptionMegamenu(true)} onMouseLeave={() => setShowSubscriptionMegamenu(false)}>
          <Link to='/Subscription'>Subscription</Link>
          {showSubscriptionMegamenu && <SubscriptionMegamenu />} {/* Render SubscriptionMegamenu conditionally */}
        </li>
        <li className="p__opensans"><Link to='/shef'>Chef-At-Home</Link></li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><a href="#home">Home</a></li>
              <li className="p__opensans"><a href="#about">About</a></li>
              <li className="p__opensans"><a href="#menu">Menu</a></li>
              <li className="p__opensans"><a href="#awards">Awards</a></li>
              <li className="p__opensans"><a href="#contact">Contacts</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
