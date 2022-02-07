import React from "react";
import styles from "./CardBack.module.scss";

const CardBack = (props) => {
  const { first_brewed, description, food_pairing } = props.beers;

  return (
    <div className={styles.CardBack}>
      <section className={styles.cardDetails}>
        <p>{first_brewed}</p>
        <p>{description}</p>
        <p>{food_pairing}</p>
      </section>
    </div>
  );
};

export default CardBack;
