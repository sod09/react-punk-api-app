import React from "react";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <section className={styles.seachBarContainer}>
      <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
      <input className={styles.searchInput} placeholder="Search..."></input>
    </section>
  );
};

export default SearchBar;
