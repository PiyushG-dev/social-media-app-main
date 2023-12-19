import React from "react";
import styles from "./Trending.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Trending = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search_container}>
        <FontAwesomeIcon className={styles.search} icon={faSearch} />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Trending;
