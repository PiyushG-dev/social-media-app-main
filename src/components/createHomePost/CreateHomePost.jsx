import React, { useState } from "react";
import styles from "./CreateHomePost.module.css";
import prof from "../../images/pf2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarth,
  faPhotoFilm,
  faSquareCheck,
  faList,
  faSmile,
  faCalendarAlt,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

const CreateHomePost = ({ addPost }) => {
  const [postText, setPostText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();

    reader.onloadend = () => {
      const imageDataUrl = reader.result;
      console.log(imageDataUrl);
    };

    if (file) {
      reader.readAsDataURL(file);
      console.log(file);
    }
  };

  const handlePost = () => {
    if (postText && selectedImage) {
      addPost(postText, selectedImage);
    } else {
      alert("description or image missing");
    }

    setPostText("");
    setSelectedImage(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile_container}>
        <img src={prof} alt="profile" />
      </div>
      <div className={styles.tweet_content_container}>
        <textarea
          rows="2"
          cols="45"
          placeholder="What is happening?!"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
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
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </label>
            <FontAwesomeIcon icon={faSquareCheck} />
            <FontAwesomeIcon icon={faList} />
            <FontAwesomeIcon icon={faSmile} />
            <FontAwesomeIcon icon={faCalendarAlt} />
            <FontAwesomeIcon icon={faLocationArrow} />
          </div>
          <button onClick={handlePost} className={styles.post_button}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateHomePost;
