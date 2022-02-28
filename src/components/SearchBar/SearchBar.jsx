import React from "react";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (props) => {
  const { userBeerSearch, setUserBeerSearch } = props;

  return (
    <section className={styles.searchBar__container}>
      <FontAwesomeIcon className={styles.searchBar__icon} icon={faSearch} />
      <input
        className={styles.searchBar__input}
        type="text"
        placeholder="Search beer name..."
        name="s"
        defaultValue={userBeerSearch}
        onInput={(e) => setUserBeerSearch(e.target.value.toLowerCase())}
      ></input>
    </section>
  );
};

export default SearchBar;
