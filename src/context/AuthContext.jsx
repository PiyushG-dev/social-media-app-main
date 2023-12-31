import React, { createContext, useEffect, useState } from "react";
import { account } from "../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetails = await account.get();
      setUser(accountDetails);

      navigate("/");
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const logoutUser = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  const registerUser = async (userInfo) => {
    try {
      let response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password,
        userInfo.name
      );

      await account.createEmailSession(userInfo.email, userInfo.password);
      let accountDetails = await account.get();
      setUser(accountDetails);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const contextValue = {
    user,
    loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {loading ? <p>loading...</p> : children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
