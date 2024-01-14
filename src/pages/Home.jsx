import React, { useState } from "react";
import styles from "./css/Home.module.css";
import Post from "../components/post/Post";
import CreateHomePost from "../components/createHomePost/CreateHomePost";
import pf2 from "../images/pf2.jpg";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../features/post/postSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  // const [posts, setPosts] = useState([]);

  // const addPost = (desc, selectedImage) => {
  //   setPosts([
  //     ...posts,
  //     {
  //       name: "Dennis Snellberg",
  //       profilePicture: pf2,
  //       username: "DennisSnellberg",
  //       time: "5h",
  //       uploadedImage: selectedImage
  //         ? URL.createObjectURL(selectedImage)
  //         : null,
  //       desc: desc,
  //     },
  //   ]);
  // };
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  const notify = () => {
    toast("Post deleted!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
    notify();
  };

  return (
    <div className={styles.container}>
      <CreateHomePost />
      {posts
        .slice()
        .reverse()
        .map((post) => {
          return (
            <Post
              key={post.id}
              deletePost={() => handleDelete(post.id)}
              name={post.name}
              profile={post.profilePicture}
              username={post.username}
              time={post.time}
              image={post.selectedImage}
              desc={post.desc}
            />
          );
        })}
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Home;
