import React from "react";
import styles from "./FoodDetailsModal.module.css";

const FoodDetailsModal = ({ name, details, closeModal }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={closeModal}>
          &times;
        </span>
        <h2>{name}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default FoodDetailsModal;