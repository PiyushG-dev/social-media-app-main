import React from "react";
import styles from "./CreatePost.module.css";
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
import prof from "../../images/pf1.jpeg";

const CreatePost = ({ createPost, setCreatePost }) => {
  return (
    <section
      style={{ display: !createPost ? "none" : "flex" }}
      className={styles.wrapper}
    >
      <div className={styles.container}>
        <div className={styles.close_container}>
          <FontAwesomeIcon
            onClick={() => setCreatePost(!createPost)}
            className={styles.close}
            icon={faClose}
          />
          <p>Drafts</p>
        </div>
        <div className={styles.tweet_content_container}>
          <img className={styles.profile_img} src={prof} alt="profile" />
          <textarea rows="4" cols="40" placeholder="What is happening?!" />
        </div>
        <div className={styles.reply_option_container}>
          <FontAwesomeIcon className={styles.earth} icon={faEarth} />
          <p className={styles.reply_option}>Everyone can reply</p>
        </div>
        <div className={styles.features_container}>
          <div className={styles.features}>
            <label>
              <FontAwesomeIcon
                style={{ cursor: "pointer" }}
                icon={faPhotoFilm}
              />
              <input type="file" accept="image/*" style={{ display: "none" }} />
            </label>
            <FontAwesomeIcon icon={faSquareCheck} />
            <FontAwesomeIcon icon={faList} />
            <FontAwesomeIcon icon={faSmile} />
            <FontAwesomeIcon icon={faCalendarAlt} />
            <FontAwesomeIcon icon={faLocationArrow} />
          </div>
          <button className={styles.post_button}>Post</button>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
