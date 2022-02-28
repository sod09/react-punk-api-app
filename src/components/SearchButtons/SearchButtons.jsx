import React from "react";
import styles from "./SearchButtons.module.scss";

const SearchButtons = (props) => {
  const {
    isAbvCheck,
    setAbvCheck,
    isClassicCheck,
    setClassicCheck,
    isAcidicCheck,
    setAcidicCheck,
  } = props;

  return (
    <section className={styles.radioButtons__container}>
      <label className={styles.radioButtons__highAbv}>
        <input
          name="filter"
          type="radio"
          value={isAbvCheck}
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
          value={isClassicCheck}
          onClick={() => setClassicCheck(true)}
        />
        Classic Beers
      </label>

      <label className={styles.radioButtons__acidic}>
        <input
          name="filter"
          type="radio"
          value={isAcidicCheck}
          onClick={() => setAcidicCheck(true)}
        />
        Acidic Beers
      </label>
    </section>
  );
};

export default SearchButtons;
