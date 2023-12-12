import React from "react";
import styles from "./css/Home.module.css";
import Post from "../components/post/Post";
import posts from "../data/Posts";

const Home = () => {
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <Post
            name={post.name}
            profile={post.profilePicture}
            username={post.username}
            time={post.time}
            image={post.uploadedImage}
            desc={post.desc}
          />
        );
      })}
    </div>
  );
};

export default Home;
