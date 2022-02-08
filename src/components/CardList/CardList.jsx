import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";
import CardFront from "../CardFront";
import CardBack from "../CardBack";

const CardList = (props) => {
  const { beers } = props;

  const getCardJsx = (beers) => (
    <div>
      <Card beers={beers} key={beers.id} />
    </div>
  );

  return (
    <div>
      <section className={styles.cards}>{beers.map(getCardJsx)}</section>
    </div>
  );
};

export default CardList;
