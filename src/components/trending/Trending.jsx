import React from "react";
import styles from "./Trending.module.css";
import SearchBar from "../searchBar/SearchBar";
import Subscription from "../subscription/Subscription";
import Hastags from "../hashtags/Hastags";

const Trending = () => {
  return (
    <div className={styles.container}>
      <SearchBar />
      <Subscription />
      <Hastags />
    </div>
  );
};

export default Trending;
