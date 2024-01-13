import React from "react";
import styles from "./Loader.module.css";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.loader}>
        <ClipLoader color="#1da1f2" size={50} margin={4} />
      </div>
      <p>hey</p>
    </section>
  );
};

export default Loader;
