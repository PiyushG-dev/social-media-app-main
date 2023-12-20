import React from "react";
import styles from "./Hastags.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const Hastags = () => {
  return (
    <div className={styles.container}>
      <h2>What's happening</h2>
      <div className={styles.hastag}>
        <div className={styles.hastag_category}>
          <p>Trending</p>
          <FontAwesomeIcon className={styles.hastag_menu} icon={faEllipsis} />
        </div>
        <h3>#cristiano</h3>
        <p className={styles.total_posts}>23,200 posts</p>
      </div>
      <div className={styles.hastag}>
        <div className={styles.hastag_category}>
          <p>Trending</p>
          <FontAwesomeIcon className={styles.hastag_menu} icon={faEllipsis} />
        </div>
        <h3>#wc2024</h3>
        <p className={styles.total_posts}>23,200 posts</p>
      </div>
      <div className={styles.hastag}>
        <div className={styles.hastag_category}>
          <p>Trending</p>
          <FontAwesomeIcon className={styles.hastag_menu} icon={faEllipsis} />
        </div>
        <h3>#election</h3>
        <p className={styles.total_posts}>23,200 posts</p>
      </div>
    </div>
  );
};

export default Hastags;
