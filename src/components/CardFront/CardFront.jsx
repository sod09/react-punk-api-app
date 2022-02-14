import React from "react";
import styles from "./CardFront.module.scss";

const CardFront = (props) => {
  const { name, image_url, abv, tagline, first_brewed } = props.beers;

  return (
    <div className={styles.cardFront}>
      <img src={image_url} alt="image of brew" />
      <section className={styles.textArea}>
        <h2>{name}</h2>
        <p className={styles.tagline}>"{tagline}"</p>
        <p className={styles.abvdetails}>ABV {abv}%</p>
        <p className={styles.brewdate}>Est. {first_brewed}</p>
      </section>
    </div>
  );
};

export default CardFront;
