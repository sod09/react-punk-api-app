import React from "react";
import styles from "./CardBack.module.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardBack = (props) => {
  const { description, food_pairing } = props.beers;

  return (
    <div className={styles.cardBack}>
      <section className={styles.textArea}>
        <p className={styles.description}>{description}</p>
        <i class="fas fa-utensils"></i>
        <p className={styles.food}>{food_pairing}</p>
      </section>
    </div>
  );
};

export default CardBack;
