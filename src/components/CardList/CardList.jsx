import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";
import CardFront from "../CardFront";
import CardBack from "../CardBack";

const CardList = (props) => {
  const { beers } = props;

  const getCardJsx = (beers) => (
    <div>
      <Card beers={beers} />
    </div>
  );

  return (
    <div>
      <section key={beers.id} className={styles.cards}>
        {beers.map(getCardJsx)}
      </section>
    </div>
  );
};

export default CardList;
