import React, { useState } from "react";
import styles from "./Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faRetweet,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import breakfast1 from "../../assets/food1.png";
import breakfast2 from "../../assets/food3.png";
import breakfast3 from "../../assets/food2.png";

const Menu = ({ activeMenu }) => {
  const [cartItems, setCartItems] = useState([]);
  const [detailsVisible, setDetailsVisible] = useState(Array(10).fill(false)); // Assuming max 10 items in the cart

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const toggleDetails = (index) => {
    const newDetailsVisible = [...detailsVisible];
    newDetailsVisible[index] = !newDetailsVisible[index];
    setDetailsVisible(newDetailsVisible);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const FoodCard = ({ image, name, price, index }) => (
    <div>
      <div className={styles.foodCard}>
        <img src={image} alt="Food" className={styles.foodImage} />
        <div className={styles.overlayIcons}>
          <a href="#">
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faRetweet} />
          </a>
          <a href="#" onClick={() => addToCart({ name, price })}>
            <FontAwesomeIcon icon={faCartPlus} />
          </a>
        </div>
      </div>
      <h1>{name}</h1>
      <h1>Price: {price}</h1>
    </div>
  );

  const CartItem = ({ item, index }) => (
    <li className={styles.cartItem}>
      <div className={styles.cartItemInfo}>
        <p>{item.name}</p>
        <p>${item.price}</p>
      </div>
      <FontAwesomeIcon
        icon={faTrashAlt}
        className={styles.deleteIcon}
        onClick={() => removeFromCart(index)}
      />
    </li>
  );

  // Define breakfastItems
  const breakfastItems = (
    <>
      <FoodCard image={breakfast1} name="Parata Vaji" price={24} />
      <FoodCard image={breakfast2} name="Parata Vaji" price={25} />
      <FoodCard image={breakfast3} name="Parata Vaji" price={105} />
      {/* Define other breakfast items similarly */}
    </>
  );

  // Define lunchItems, dinnerItems, drinkItems, and dessertItems similarly

  return (
    <div className={styles.container}>
      <div className={styles.foodItems}>
        {/* Food items */}
        {activeMenu === "breakfast" && breakfastItems}
        {/* Render lunchItems, dinnerItems, drinkItems, and dessertItems similarly */}
      </div>
      <div className={styles.cart}>
        {/* Cart section */}
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} index={index} />
          ))}
        </ul>
        <p>Total Price: ${getTotalPrice()}</p>
      </div>
    </div>
  );
};

export default Menu;
