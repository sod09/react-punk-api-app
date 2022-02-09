import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchButtons from "../SearchButtons/SearchButtons";
import styles from "./SideNav.module.scss";

const SideNav = (props) => {
  const { userBeerSearch, setUserBeerSearch } = props;

  return (
    <section className={styles.sideNavContainer}>
      <h1>PUNK API</h1>
      <SearchBar
        userBeerSearch={userBeerSearch}
        setUserBeerSearch={setUserBeerSearch}
        classname={styles.sideNavSearch}
      />
      <SearchButtons classname={styles.sideNavButtons} />
    </section>
  );
};

export default SideNav;
