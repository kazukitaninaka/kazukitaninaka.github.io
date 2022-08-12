import React from "react";
import Me from "../../../public/me.jpg";
import styles from "./MyPicture.module.css";

const MyPicture: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={Me} className={styles.me} />
    </div>
  );
};

export default MyPicture;
