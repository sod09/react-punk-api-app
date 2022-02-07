import React from "react";
import styles from "./CardFront.module.scss";

const CardFront = (props) => {
  const { name, image_url, abv, tagline } = props.beers;

  return (
    <div className={styles.cardFront}>
      <img src={image_url} alt="image of beer" />
      <section className={styles.cardDetails}>
        <h2>{name}</h2>
        <p>{tagline}</p>
        <p>ABV {abv}%</p>
      </section>
    </div>
  );
};

export default CardFront;
