import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import styles from "./LogoutConfirm.module.css";
import logo from "../../assets/logo.png";

const LogoutConfirm = ({ logoutConfirm, setLogoutConfirm }) => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <section
      style={{ display: logoutConfirm ? "flex" : "none" }}
      className={styles.wrapper}
    >
      <div className={styles.container}>
        <img src={logo} alt="logo" />
        <div className={styles.logout_msg_container}>
          <p>Log out of X?</p>
          <p>
            You can always log back in at any time. If you just want to switch
            accounts, you can do that by adding an existing account.
          </p>
        </div>
        <button onClick={logoutUser} className={styles.logout_btn}>
          Log out
        </button>
        <button
          onClick={() => setLogoutConfirm(!logoutConfirm)}
          className={styles.cancel_btn}
        >
          Cancel
        </button>
      </div>
    </section>
  );
};

export default LogoutConfirm;
