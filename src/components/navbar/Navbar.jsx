import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/logo.png";
import {
  faHomeAlt,
  faSearch,
  faBell,
  faUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { logoutUser } from "../../features/auth/authSlice";

const Navbar = ({
  createPost,
  setCreatePost,
  logoutConfirm,
  setLogoutConfirm,
}) => {
  // const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
      <Link className={styles.link} to="/">
        <FontAwesomeIcon icon={faHomeAlt} />
        <p>Home</p>
      </Link>
      <Link className={styles.link} to="/explore">
        <FontAwesomeIcon icon={faSearch} />
        <p>Explore</p>
      </Link>
      <Link className={styles.link} to="/Notifications">
        <FontAwesomeIcon icon={faBell} />
        <p>Notifications</p>
      </Link>
      <Link className={styles.link} to="/Premium">
        <img src={Logo} alt="premium" />
        <p>Premium</p>
      </Link>
      <Link className={styles.link} to="/Profile">
        <FontAwesomeIcon icon={faUser} />
        <p>Profile</p>
      </Link>
      <button
        onClick={() => setCreatePost(!createPost)}
        className={styles.post_btn}
      >
        Post
      </button>
      <button
        onClick={() => setLogoutConfirm(!logoutConfirm)}
        className={styles.logout_btn}
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        logout
      </button>
    </div>
  );
};

export default Navbar;
