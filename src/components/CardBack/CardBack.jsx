import React from "react";
import styles from "./CardBack.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const CardBack = (props) => {
  const { description, food_pairing } = props.beers;

  return (
    <div className={styles.cardBack__container}>
      <section className={styles.cardBack__textArea}>
        <div className={styles.cardBack__descriptionArea}>
          <p className={styles.cardBack__descriptionOpener}>Punk API says...</p>
          <p className={styles.cardBack__description}>"{description}"</p>
        </div>

        <div className={styles.cardBack__foodArea}>
          {/* <FontAwesomeIcon
            className={styles.cardBack__iconFood}
            icon={faUtensils}
          ></FontAwesomeIcon> */}
          <p className={styles.cardBack__foorPairingHeader}>Food Pairings</p>
          <p className={styles.cardBack__foodPairingInfo}>{food_pairing[0]}</p>
          <p className={styles.cardBack__foodPairingInfo}>{food_pairing[1]}</p>
          <p className={styles.cardBack__foodPairingInfo}>{food_pairing[2]}</p>
        </div>
      </section>
    </div>
  );
};

export default CardBack;
