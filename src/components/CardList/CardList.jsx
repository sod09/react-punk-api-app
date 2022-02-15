import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";

const CardList = (props) => {
  const { beers } = props;

  const getCardJsx = (beers) => (
    <div>
      <Card beers={beers} />
    </div>
  );

  return (
    <div>
      <section key={beers.id} className={styles.cardList__container}>
        {beers.map(getCardJsx)}
      </section>
    </div>
  );
};

export default CardList;
