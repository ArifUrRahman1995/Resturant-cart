import React from "react";
import Navbar from "../Navbar/Navbar"; // Import your Navbar component from its file
import Footer from "../../container/Footer/Footer"; // Import your Footer component from its file
import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <div className="title">
          <h4>
            <span>fresh food for good health </span>our menu
          </h4>
        </div>

        <div className="menu">
          <div className="single-menu">
            <img
              src="https://feastandfarm.com/wp-content/uploads/chickentendersalad-787x1024.jpg"
              width="162px"
              height="211px"
              alt=""
            />
            <div className="menu-content">
              <h4>
                Our Indian Item <span>45K</span>
              </h4>
              <p>
                Fried chicken salad is the perfect blend of crispy chicken and
                fresh veggies tossed in your favorite dressing. Make it even
                quicker with frozen chicken tenders or pick up a few in your
                deli section
              </p>
              <Link to="/indian-menu">
                <button>View Indian Menu</button>
              </Link>
            </div>
          </div>

          <div class="single-menu">
            <img
              src="https://healthyfitnessmeals.com/wp-content/uploads/2020/05/instagram-In-Stream_Square___Shrimp-spaghetti-3.jpg"
              width="162px"
              height="211px"
              alt=""
            />
            <div class="menu-content">
              <h4>
                Bangladesh Item <span>50K</span>
              </h4>
              <p>
                Shrimp Spaghetti is such a comforting pasta dish, perfect for
                busy weeknights! Plump, garlicky prawns nestle on a bed of
                spaghetti, bejeweled with bright red baby tomatoes and vibrant
                green spinach. It’s simple but loaded with flavor from the
                seasoned seafood broth. Bright, easy, filling, and so delicious!
                Make it with any other protein like chicken
                or salmon chunks.
              </p>
              <Link to="/BanglaFood">
                <button>Bangladeshi Food</button>
              </Link>
            </div>
          </div>

          <div class="single-menu">
            <img
              src="https://www.vvsupremo.com/wp-content/uploads/2018/05/Pepperoni-Pizza-1.jpg"
              width="162px"
              height="211px"
              alt=""
            />
            <div class="menu-content">
              <h4>
                pepperoni pizza <span>85K</span>
              </h4>
              <p>
                Pepperoni is characteristically soft, slightly smoky, and bright
                red in color. Thinly sliced pepperoni is a popular pizza topping
                in American pizzerias.
              </p>
            </div>
          </div>

          <div class="single-menu">
            <img
              src="https://assets.bonappetit.com/photos/58ff5f162278cd3dbd2c069c/master/pass/churros.jpg"
              width="162px"
              height="211px"
              alt=""
            />
            <div class="menu-content">
              <h4>
                churros <span>30K</span>
              </h4>
              <p>
                Elongated, crispy, crunchy and intensely fragrant, churros
                consist of deep-fried yeast dough encrusted with sugar.Although
                some may argue against consuming these sweet treats, warning
                others about the dangerous effects of sugar and fat on human
                bodies, the popularity of churros throughout the world doesn't
                seem to wane.
              </p>
            </div>
          </div>

          <div class="single-menu">
            <img
              src="https://caferestodiary.files.wordpress.com/2018/10/tzof94381.png?w=340&h=341"
              width="162px"
              height="211px"
              alt=""
            />
            <div class="menu-content">
              <h4>
                fish&chips <span>100K</span>
              </h4>
              <p>
                Fish and chips is a hot dish consisting of fried fish in batter
                served with chips. The dish originated in England and is an
                example of culinary fusion, combining Iberian Jewish fried fish
                with Belgian fried potatoes..
              </p>
            </div>
          </div>

          <div class="single-menu">
            <img
              src="https://recipes-secure-graphics.grocerywebsite.com/0_GraphicsRecipes/5607_4k.jpg"
              width="162px"
              height="211px"
              alt=""
            />
            <div class="menu-content">
              <h4>
                Chiken Wings <span>75K</span>
              </h4>
              <p>
                Buffalo wings, also called hot wings, chicken wings, or simply
                wings, deep-fried, unbreaded chicken wings or drums coated with
                a vinegar-and-cayenne-pepper hot sauce mixed with butter. They
                are commonly served with celery and a blue cheese dipping sauce,
                which acts as a cooling agent for the mouth
              </p>
            </div>
          </div>

          {/* Repeat the structure for other menu items */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
