import React, { useState } from "react";
import styles from "./css/Home.module.css";
import Post from "../components/post/Post";
import CreateHomePost from "../components/createHomePost/CreateHomePost";
import pf2 from "../images/pf2.jpg";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (desc, selectedImage) => {
    setPosts([
      ...posts,
      {
        name: "Dennis Snellberg",
        profilePicture: pf2,
        username: "DennisSnellberg",
        time: "5h",
        uploadedImage: selectedImage
          ? URL.createObjectURL(selectedImage)
          : null,
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
    </div>
  );
};

export default Home;
