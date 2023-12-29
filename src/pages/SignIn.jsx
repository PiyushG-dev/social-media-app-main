import React from "react";
import styles from "./css/SignIn.module.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.right_container}>
        <h1>Sign into your account</h1>
        <form>
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form>
        <hr />
        <div className={styles.signUp_navigate_container}>
          <h4>don't have an account?</h4>
          <button onClick={() => navigate("/signup")}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
