import React from "react";
import styles from "./Subscription.module.css";

const Subscription = () => {
  return (
    <div className={styles.container}>
      <h2>Subscribe to Premium</h2>
      <p>
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <button>Subscribe</button>
    </div>
  );
};

export default Subscription;
