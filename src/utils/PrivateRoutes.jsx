import React from "react";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Trending from "../components/trending/Trending";
import CreatePost from "../components/createPost/CreatePost";

const PrivateRoutes = () => {
  const [createPost, setCreatePost] = useState(false);

  const user = true;

  return (
    <>
      <Navbar createPost={createPost} setCreatePost={setCreatePost} />
      {user ? <Outlet /> : <Navigate to="/signin" />}
      <Trending />
      <CreatePost createPost={createPost} setCreatePost={setCreatePost} />
    </>
  );
};

export default PrivateRoutes;
