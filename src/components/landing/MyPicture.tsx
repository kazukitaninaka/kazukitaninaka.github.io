import React from "react";
import Me from "/me.jpg";
import styles from "../../styles/landing/MyPicture.module.css";

const MyPicture: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pictureContainer}>
        <img src={Me} className={styles.me} />
      </div>
    </div>
  );
};

export default MyPicture;
