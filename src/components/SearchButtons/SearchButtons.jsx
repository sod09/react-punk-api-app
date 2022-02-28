import React from "react";
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
    <section className={styles.radioButtons__container}>
      <label className={styles.radioButtons__highAbv}>
        <input
          name="filter"
          type="radio"
          value={abvCheck}
          onClick={() => {
            setAbvCheck(true);
          }}
        />
        High ABV >6%
      </label>

      <label className={styles.radioButtons__classic}>
        <input
          name="filter"
          type="radio"
          value={classicCheck}
          onClick={() => setClassicCheck(true)}
        />
        Classic Beers
      </label>

      <label className={styles.radioButtons__acidic}>
        <input
          name="filter"
          type="radio"
          value={acidicCheck}
          onClick={() => setAcidicCheck(true)}
        />
        Acidic Beers
      </label>
    </section>
  );
};

export default SearchButtons;
