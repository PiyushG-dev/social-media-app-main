import React from "react";
import styles from "./css/Home.module.css";
import Post from "../components/post/Post";

const Home = () => {
  return (
    <div className={styles.container}>
      <Post />
    </div>
  );
};

export default Home;
