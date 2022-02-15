import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  const { setButton } = props;

  const resetButton = () => {
    window.location.reload();
  };

  return (
    <button className={styles.button__reset} onClick={resetButton}>
      {setButton}
    </button>
  );
};

export default Button;
