import React from 'react';
import './Megamenu.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faBreadSlice, faFish, faCarrot, faCookie } from '@fortawesome/free-solid-svg-icons'; // Import different icons

const Megamenu = () => {
  return (
    <div className="megamenu">
      <h3>Food Menu</h3>
      <ul>
        <div className="row">
          <li><FontAwesomeIcon icon={faPizzaSlice} /> <Link to='BanglaFood'>Bangladesh Items</Link></li>
          <li><FontAwesomeIcon icon={faBreadSlice} /> <a href="#">Indian Items</a></li>
          <li><FontAwesomeIcon icon={faFish} /> <a href="#">Bangladesh Items</a></li>
        </div>
        <div className="row">
          <li><FontAwesomeIcon icon={faCarrot} /> <a href="#">Netherland Items</a></li>
          <li><FontAwesomeIcon icon={faCookie} /> <a href="#">African Items</a></li>
          <li><FontAwesomeIcon icon={faPizzaSlice} /> <a href="#">Japanese Items</a></li>
        </div>
      </ul>
    </div>
  );
}

export default Megamenu;
