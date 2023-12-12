import React from "react";
import styles from "./Post.module.css";
import prof from "../../images/postpf.jpeg";
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
          <img src={prof} alt="profile" />
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
              <FontAwesomeIcon className={styles.reply} icon={faReply} />
              <FontAwesomeIcon className={styles.retweet} icon={faRetweet} />
              <FontAwesomeIcon className={styles.like} icon={faHeart} />
              <FontAwesomeIcon className={styles.views} icon={faSignal} />
            </div>
            <div className={styles.features_right}>
              <FontAwesomeIcon className={styles.bookmark} icon={faBookmark} />
              <FontAwesomeIcon
                className={styles.share}
                icon={faArrowUpFromBracket}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
