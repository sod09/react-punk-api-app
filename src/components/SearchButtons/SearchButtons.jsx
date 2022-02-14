import React, { useState } from "react";
import styles from "./SearchButtons.module.scss";

const SearchButtons = (props) => {
  const {
    abvCheck,
    setAbvCheck,
    classicCheck,
    setClassicCheck,
    acidicCheck,
    setAcidicCheck,
  } = props;

  return (
    <section className={styles.searchButtonsContainer}>
      <label className={styles.highAbv}>
        <input
          type="radio"
          // value={abvCheck}
          onClick={() => {
            setAbvCheck(true);
          }}
        />
        High ABV (>6%)
      </label>

      <label className={styles.classic}>
        <input
          type="radio"
          // value={classicCheck}
          onClick={() => setClassicCheck(true)}
        />
        Classic Beersssss
      </label>

      <label className={styles.acidic}>
        <input
          type="radio"
          // value={acidicCheck}
          onClick={() => setAcidicCheck(true)}
        />
        Acidic Beers
      </label>
    </section>
  );
};

export default SearchButtons;
