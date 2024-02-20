import React from 'react';
import './SubscriptionMegamenu.css'; // Create CSS file for styling
import { Link } from 'react-router-dom';

const SubscriptionMegamenu = () => {
  return (
    <div className="subscription-megamenu">
      <h3>Subscription Plans</h3>
      <div className="subscription-cards">
        <Link to="/Subscription" className="subscription-card">
          <h4>Basic</h4>
          <p>Get access to basic features</p>
        </Link>
        <Link to="/Subscription" className="subscription-card">
          <h4>Premium</h4>
          <p>Unlock premium features and benefits</p>
        </Link>
        <Link to="/Subscription" className="subscription-card">
          <h4>Others</h4>
          <p>Explore other subscription options</p>
        </Link>
      </div>
    </div>
  );
}

export default SubscriptionMegamenu;
