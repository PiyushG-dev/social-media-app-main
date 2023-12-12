import React from "react";
import styles from "./Post.module.css";
import profile from "../../images/postpf.jpeg";
import post from "../../images/post.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faReply,
  faRetweet,
  faHeart,
  faSignal,
  faBookmark,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Post = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <img src={profile} alt="profile" />
        </div>
        <div className={styles.content}>
          <div className={styles.post_details}>
            <div className={styles.left}>
              <p>Piers Morgan</p>
              <p>@PiersMorgan</p>
              <p> &middot; 5h</p>
            </div>
            <div className={styles.right}>
              <FontAwesomeIcon className={styles.post_menu} icon={faEllipsis} />
            </div>
          </div>
          <p className={styles.post_description}>
            Cristiano Ronaldo has just scored his 50th goal of 2023.
          </p>
          <img src={post} alt="post_img" />
          <div className={styles.features}>
            <div className={styles.features_left}>
              <FontAwesomeIcon icon={faReply} />
              <FontAwesomeIcon icon={faRetweet} />
              <FontAwesomeIcon icon={faHeart} />
              <FontAwesomeIcon icon={faSignal} />
            </div>
            <div className={styles.features_right}>
              <FontAwesomeIcon icon={faBookmark} />
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
