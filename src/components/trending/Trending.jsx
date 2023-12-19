import React from "react";
import styles from "./Trending.module.css";
import SearchBar from "../searchBar/SearchBar";
import Subscription from "../subscription/Subscription";

const Trending = () => {
  return (
    <div className={styles.container}>
      <SearchBar />
      <Subscription />
    </div>
  );
};

export default Trending;
