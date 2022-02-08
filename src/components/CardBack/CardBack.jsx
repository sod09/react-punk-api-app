import React from "react";
import styles from "./CardBack.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer, faUtensils } from "@fortawesome/free-solid-svg-icons";

const CardBack = (props) => {
  const { description, food_pairing } = props.beers;

  return (
    <div className={styles.cardBack}>
      <section className={styles.textArea}>
        <div className={styles.descriptionArea}>
          {/* <FontAwesomeIcon
            className={styles.iconBeer}
            icon={faBeer}
          ></FontAwesomeIcon> */}
          <p className={styles.descriptionOpener}>Punk API says...</p>
          <p className={styles.description}>"{description}"</p>
        </div>

        <div className={styles.foodArea}>
          <FontAwesomeIcon
            className={styles.iconFood}
            icon={faUtensils}
          ></FontAwesomeIcon>
          <p className={styles.foodPairingInfo}>{food_pairing[0]}</p>
          <p className={styles.foodPairingInfo}>{food_pairing[1]}</p>
          <p className={styles.foodPairingInfo}>{food_pairing[2]}</p>
        </div>
      </section>
    </div>
  );
};

export default CardBack;
