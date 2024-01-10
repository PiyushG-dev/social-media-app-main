import React, { useState } from "react";
import styles from "./css/SignIn.module.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../features/auth/authSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = { email, password };
    loginUser(userInfo);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.right_container}>
        <h1>Sign into your account</h1>
        <form>
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
          <button onClick={handleSubmit}>Sign in</button>
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
