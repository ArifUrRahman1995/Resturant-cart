import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className= "app__bg app__wrapper section__padding">

    <div className="app__wrapper_img app__wrapper_img_reverse">
      <img src= {images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title= "Chef's word"/>
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-contect_quote">
          <img src= {images.quote} alt="quote" />

          <p className="p__opensans">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, quos, iusto est nulla sequi dignissimos laboriosam corporis fugiat ducimus nesciunt culpa. Culpa, accusantium autem dolorem quisquam 
            reiciendis cupiditate eligendi nisi.
          </p>

          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aperiam.

          </p>
        </div>

        <div className="app__chef-sign">
          <p>Arif Ur Rahman</p>
          <p className="p__opensans"> Chef & founder</p>
          <img src= {images.sign} alt="sign" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
