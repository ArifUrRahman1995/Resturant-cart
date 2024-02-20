import React from 'react';


import "./IndianMenu.css";

const IndianMenu = () => {
  return (
    <>
      <div className="content container">
        <img src="http://ttgplanner.2017.ttgasia.com/wp-content/uploads/sites/4/2017/10/FRKL-Logo.png" width="400" alt="Greetings From The Concierge Team!" />
        <h1><b>Greetings From The Concierge Team!</b></h1>
        <h5>The purpose of this device here is to help our guests to find places to visit and restaurants</h5>
        <h5><b>**Attractions & Nightlife In Progress**</b></h5>
      </div>

      <div className="container">
        <div className="panel-group" id="accordion">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h4 className="panel-title" style={{ textAlign: 'center' }}>
                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Foods & Beverages</a>
              </h4>
            </div>
            <div id="collapse1" className="panel-collapse collapse in">
              <div className="panel-body">
                <ul className="nav nav-pills nav-justified">
                  <li><a data-toggle="pill" href="#malay_food">Malay Food</a></li>
                  <li><a data-toggle="pill" href="#indian_food">Indian Food</a></li>
                  <li><a data-toggle="pill" href="#middle_eastern_food">Middle Eastern Food</a></li>
                  <li><a data-toggle="pill" href="#chinese_food">Chinese Food</a></li>
                  <li><a data-toggle="pill" href="#dessert">Dessert</a></li>
                </ul>
                <div className="tab-content">
                  <div id="malay_food" className="tab-pane fade">
                    <ol>
                      <h2><li><b>Songket</b></li></h2>
                      <h4>Operation Hours: 12:00AM - 15:00PM, 18:00 - 23:00 (MON - FRI) <br /> <br />
                        17:00PM - 23:00PM (SAT, SUN, Public Holiday)</h4>
                      <a href="https://goo.gl/maps/goPf6JjFyeN2" target="_blank" rel="noopener noreferrer">Directions</a>
                      <br />
                      <a href="https://www.songketrestaurant.com/" target="_blank" rel="noopener noreferrer">Official Website</a>
                    </ol>
                  </div>
                  {/* Include other food sections similarly */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndianMenu;
