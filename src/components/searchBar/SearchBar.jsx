import React from "react";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon className={styles.search} icon={faSearch} />
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default SearchBar;
