import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/explore">
        Explore
      </Link>
      <Link className={styles.link} to="/Notifications">
        Notifications
      </Link>
      <Link className={styles.link} to="/Premium">
        Premium
      </Link>
      <Link className={styles.link} to="/Profile">
        Profile
      </Link>
      <button className={styles.post_btn}>Post</button>
    </div>
  );
};

export default Navbar;
