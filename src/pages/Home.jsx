import React, { useState } from "react";
import styles from "./css/Home.module.css";
import Post from "../components/post/Post";
import postsdummy from "../data/Posts";
import CreateHomePost from "../components/createHomePost/CreateHomePost";
import pf1 from "../images/pf1.jpeg";
import post1 from "../images/post1.webp";
import pf2 from "../images/pf2.jpg";
import post2 from "../images/post2.png";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (desc) => {
    setPosts([
      ...posts,
      {
        name: "Dennis Snellberg",
        profilePicture: pf2,
        username: "DennisSnellberg",
        time: "5h",
        uploadedImage: post2,
        desc: desc,
      },
    ]);
  };

  return (
    <div className={styles.container}>
      <CreateHomePost addPost={addPost} />
      {posts.map((post, i) => {
        return (
          <Post
            name={post.name}
            profile={post.profilePicture}
            username={post.username}
            time={post.time}
            image={post.uploadedImage}
            desc={post.desc}
            key={i}
          />
        );
      })}
      {postsdummy.map((post, i) => {
        return (
          <Post
            name={post.name}
            profile={post.profilePicture}
            username={post.username}
            time={post.time}
            image={post.uploadedImage}
            desc={post.desc}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default Home;
