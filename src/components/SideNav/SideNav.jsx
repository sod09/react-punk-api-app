import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchButtons from "../SearchButtons/SearchButtons";
import Button from "../Button/Button";
import styles from "./SideNav.module.scss";

const SideNav = (props) => {
  const {
    userBeerSearch,
    setUserBeerSearch,
    abvCheck,
    setAbvCheck,
    classicCheck,
    setClassicCheck,
    acidicCheck,
    setAcidicCheck,
  } = props;

  return (
    <section className={styles.sideNavContainer}>
      <h1>PUNK API</h1>
      <SearchBar
        userBeerSearch={userBeerSearch}
        setUserBeerSearch={setUserBeerSearch}
        classname={styles.sideNavSearch}
      />
      <SearchButtons
        classname={styles.sideNavButtons}
        abvCheck={abvCheck}
        setAbvCheck={setAbvCheck}
        classicCheck={classicCheck}
        setClassicCheck={setClassicCheck}
        acidicCheck={acidicCheck}
        setAcidicCheck={setAcidicCheck}
      />

      <Button setButton="Reset Search" />
    </section>
  );
};

export default SideNav;
