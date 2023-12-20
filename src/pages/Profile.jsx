import React from "react";
import styles from "./css/Profile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faLocation,
  faLink,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import cover from "../images/cover.png";
import profile from "../images/pf2.png";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.account_details_container}>
        <FontAwesomeIcon icon={faArrowLeft} className={styles.back} />
        <div className={styles.account_details}>
          <h3>Dennis Snellberg</h3>
          <p>77 posts</p>
        </div>
      </div>
      <div className={styles.images_container}>
        <img src={cover} alt="cover" />
        <div className={styles.profile_image_container}>
          <img src={profile} alt="profile" />
          <button>Edit profile</button>
        </div>
      </div>
      <div className={styles.username_container}>
        <h3>Dennis Snellberg</h3>
        <p>@dennissnellberg</p>
      </div>
      <div className={styles.description_container}>
        <p>Freelance Developer & Designer</p>
      </div>
      <div className={styles.other_details_container}>
        <div className={styles.location_container}>
          <FontAwesomeIcon icon={faLocation} className={styles.location} />
          <p>Silicon Valley, United States</p>
        </div>
        <div className={styles.personal_website_container}>
          <FontAwesomeIcon icon={faLink} className={styles.link} />
          <p>github.com/dennissnellberg</p>
        </div>
        <div className={styles.joining_date_container}>
          <FontAwesomeIcon icon={faCalendarAlt} className={styles.calender} />
          <p>Joined November 2017</p>
        </div>
      </div>
      <div className={styles.follow_container}>
        <p>
          <span>98</span>Following
        </p>
        <p>
          <span>4235</span>Followers
        </p>
      </div>
    </div>
  );
};

export default Profile;
