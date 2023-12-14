import React from "react";
import styles from "./CreateHomePost.module.css";
import prof from "../../images/pf1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faEarth,
  faPhotoFilm,
  faSquareCheck,
  faList,
  faSmile,
  faCalendarAlt,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

const CreateHomePost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile_container}>
        <img src={prof} alt="profile" />
      </div>
      <div className={styles.tweet_content_container}>
        <textarea rows="2" cols="45" placeholder="What is happening?!" />
        <div className={styles.reply_option_container}>
          <FontAwesomeIcon className={styles.earth} icon={faEarth} />
          <p className={styles.reply_option}>Everyone can reply</p>
        </div>
        <div className={styles.features_container}>
          <div className={styles.features}>
            <FontAwesomeIcon icon={faPhotoFilm} />
            <FontAwesomeIcon icon={faSquareCheck} />
            <FontAwesomeIcon icon={faList} />
            <FontAwesomeIcon icon={faSmile} />
            <FontAwesomeIcon icon={faCalendarAlt} />
            <FontAwesomeIcon icon={faLocationArrow} />
          </div>
          <button className={styles.post_button}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreateHomePost;
