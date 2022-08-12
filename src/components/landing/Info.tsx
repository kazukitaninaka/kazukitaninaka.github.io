import styles from "./Info.module.css";
import GitHubIcon from "../../../public/GitHubIcon.png";
import TwitterIcon from "../../../public/TwitterIcon.png";

const Info = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>👋azoookid.me</h1>
      <p className={styles.paragraph}>
        A software engineer with an interest in web frontend development
      </p>
      <ul className={styles.socialMediaContainer}>
        <li>
          <img src={GitHubIcon} className={styles.socialMediaIcon} />
        </li>
        <li>
          <img src={TwitterIcon} className={styles.socialMediaIcon} />
        </li>
      </ul>
    </div>
  );
};

export default Info;
