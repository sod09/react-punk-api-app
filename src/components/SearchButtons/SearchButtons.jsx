import React, {useState} from "react";
import styles from "./SearchButtons.module.scss";

const SearchButtons = (props) => {

  // const [ radioCheck, setRadioCheck] = useState(false);

// const [abvCheck, setAbvCheck] = useState(f);

const { abvCheck, setAbvCheck, classicCheck, setClassicCheck, acidicCheck, setAcidicCheck } = props;


  return (
    <section className={styles.searchButtonsContainer}>
      <label className={styles.highAbv}>
        <input type="radio" value={abvCheck}   onClick={() => {setAbvCheck(true)}}/>
        High ABV (>6%)
      </label>

      <label className={styles.classic}>
        <input type="radio" value={classicCheck} onInput={() => setClassicCheck(true)} />
        Classic Beers
      </label>

      <label className={styles.acidic}>
        <input type="radio" value={acidicCheck} onInput={() => setAcidicCheck(true)} />
        Acidic Beers
      </label>
    </section>
  );
};

export default SearchButtons;
