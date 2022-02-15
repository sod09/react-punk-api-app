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
    <>
      <section className={styles.sideNav__container}>
        <h1>PUNK API</h1>
        <SearchBar
          userBeerSearch={userBeerSearch}
          setUserBeerSearch={setUserBeerSearch}
          classname={styles.sideNav__searchbar}
        />
        <SearchButtons
          classname={styles.sideNav__filterbuttons}
          abvCheck={abvCheck}
          setAbvCheck={setAbvCheck}
          classicCheck={classicCheck}
          setClassicCheck={setClassicCheck}
          acidicCheck={acidicCheck}
          setAcidicCheck={setAcidicCheck}
        />

        <Button setButton="Reset Search" />

        <footer className={styles.sideNav__footer}>
          Created by Sasha O'Donovan | 2022
        </footer>
      </section>
    </>
  );
};

export default SideNav;
