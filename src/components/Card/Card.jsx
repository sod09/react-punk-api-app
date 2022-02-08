import React from "react";
import CardBack from "../CardBack";
import CardFront from "../CardFront";

const Card = (props) => {
  const { beers } = props;

  return (
    <div>
      <CardFront beers={beers} />
      <CardBack beers={beers} />
    </div>
  );
};

export default Card;
