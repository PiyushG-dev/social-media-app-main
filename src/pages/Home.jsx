import React, { useState } from "react";
import styles from "./css/Home.module.css";
import Post from "../components/post/Post";
import CreateHomePost from "../components/createHomePost/CreateHomePost";
import pf2 from "../images/pf2.jpg";
import { useSelector } from "react-redux";

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

  const posts = useSelector((state) => state.posts);

  return (
    <div className={styles.container}>
      <CreateHomePost />
      {posts.posts
        .slice()
        .reverse()
        .map((post) => {
          return (
            <Post
              key={post.id}
              name={post.name}
              profile={post.profilePicture}
              username={post.username}
              time={post.time}
              image={post.selectedImage}
              desc={post.desc}
            />
          );
        })}
    </div>
  );
};

export default Home;
