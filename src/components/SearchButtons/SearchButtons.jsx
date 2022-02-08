import React from "react";
import styles from "./SearchButtons.module.scss";

const SearchButtons = () => {
  return (
    <section className={styles.searchButtonsContainer}>
      <label>
        <input type="radio" value="" />
        High ABV (>6%)
      </label>

      <label>
        <input type="radio" value="" />
        Classic Beers
      </label>

      <label>
        <input type="radio" value="" />
        Acidic Beers
      </label>
    </section>
  );
};

export default SearchButtons;
