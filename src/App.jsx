import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import Premium from "./pages/Premium";
import Profile from "./pages/Profile";
import Trending from "./components/trending/Trending";
import CreatePost from "./components/createPost/CreatePost";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="layout">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Trending />
          <CreatePost />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
