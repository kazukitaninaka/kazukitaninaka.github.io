import styles from "../../styles/landing/Info.module.css";
import GitHub from "/github-brands.svg";
import Twitter from "/twitter-brands.svg";

const Info = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>
        <span className={styles.emoji}>🌏</span> azoookid.me
      </h1>
      <ul className={styles.socialMediaContainer}>
        <li>
          <img src={GitHub} className={styles.socialMediaIcon} />
        </li>
        <li>
          <img src={Twitter} className={styles.socialMediaIcon} />
        </li>
      </ul>
    </div>
  );
};

export default Info;
