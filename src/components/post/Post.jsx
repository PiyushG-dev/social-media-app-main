import React from "react";
import styles from "./Post.module.css";
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

const Post = ({ name, profile, username, time, image, desc }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.profile}>
          <img src={profile} alt="profile" />
        </div>
        <div className={styles.content}>
          <div className={styles.post_details}>
            <div className={styles.left}>
              <p>{name}</p>
              <p>@{username}</p>
              <p> &middot; {time}</p>
            </div>
            <div className={styles.right}>
              <FontAwesomeIcon className={styles.post_menu} icon={faEllipsis} />
            </div>
          </div>
          <p className={styles.post_description}>{desc}</p>
          <img src={image} alt="post_img" />
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
