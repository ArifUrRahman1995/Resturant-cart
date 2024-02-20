import React from "react";

import "./Header.css";
import { images } from "../../constants";
import "../../constants/script";

const Header = () => (<div className="app__header app__wrapper section__padding" id="home">
<div className="app__wrapper_info">
  <div class="container">
    <div class="sun">
    <img src={images.foody_moody_logo} alt="sun" />
      </div>
    <div class="earth"></div>
    <div class="jupiter"></div>
    <div class="saturn"></div>
    <div class="uranus"></div>
    <div class="neptune"></div>
    <div class="pluto"></div>
  </div>
</div>
</div>
);

export default Header;
