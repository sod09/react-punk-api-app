import React from "react";
import styles from "./SearchBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (props) => {
  const { userBeerSearch, setUserBeerSearch } = props;

  return (
    <section className={styles.seachBarContainer}>
      <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search by name..."
        name="s"
        value={userBeerSearch}
        onInput={(e) => setUserBeerSearch(e.target.value.toLowerCase())}
      ></input>
    </section>
  );
};

export default SearchBar;
