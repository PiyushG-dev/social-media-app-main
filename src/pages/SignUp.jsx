import React, { useState } from "react";
import styles from "./css/SignUp.module.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, registerUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userInfo = { name, email, password };
    registerUser(userInfo);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.right_container}>
        <h1>Happening now</h1>
        <h3>Join today.</h3>
        <form>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>create account</button>
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
