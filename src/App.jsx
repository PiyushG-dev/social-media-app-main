import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import Premium from "./pages/Premium";
import Profile from "./pages/Profile";
import PrivateRoutes from "./utils/PrivateRoutes";
import AuthContextProvider from "./context/authContext";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/premium" element={<Premium />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
