import React from "react";
import styles from "./CardFront.module.scss";

const CardFront = (props) => {
  const { name, image_url, abv, tagline, first_brewed } = props.beers;

  return (
    <section className={styles.cardFront__container}>
      <img src={image_url} alt="image of brew" />
      <section className={styles.cardFront__textArea}>
        <h2>{name}</h2>
        <p className={styles.cardFront__tagline}>"{tagline}"</p>
        <p className={styles.cardFront__brewdate}>Est. {first_brewed}</p>
        <p className={styles.cardFront__abvdetails}>ABV {abv}%</p>
      </section>
    </section>
  );
};

export default CardFront;
