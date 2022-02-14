import React, { useState } from "react";
import CardBack from "../CardBack";
import CardFront from "../CardFront";
import styles from "./Card.module.scss";

const Card = (props) => {
  const { beers } = props;
  const [isFaceUp, setIsFaceUp] = useState(false);

  const flipCard = isFaceUp ? styles.faceDown : "";

  return (
    <section
      className={`${styles.beerCard} ${flipCard}`}
      onClick={() => setIsFaceUp(!isFaceUp)}
    >
      <div className={styles.front}>
        <CardFront beers={beers} />
      </div>

      <div className={styles.back}>
        <CardBack beers={beers} />
      </div>
    </section>
  );
};

export default Card;
