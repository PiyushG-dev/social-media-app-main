import React from "react";
import styles from "./css/SignUp.module.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.right_container}>
        <h1>Happening now</h1>
        <h3>Join today.</h3>
        <form>
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>create account</button>
        </form>
        <hr />
        <div className={styles.signIn_navigate_container}>
          <h4>Already have an account?</h4>
          <button onClick={() => navigate("/signin")}>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
