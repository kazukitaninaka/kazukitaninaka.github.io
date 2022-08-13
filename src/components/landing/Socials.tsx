import GitHub from "/github-brands.svg";
import Twitter from "/twitter-brands.svg";
import styles from "../../styles/landing/Socials.module.scss";

const Socials = () => {
  return (
    <ul className={styles.socialMediaContainer}>
      <li>
        <img src={GitHub} className={styles.socialMediaIcon} />
      </li>
      <li>
        <img src={Twitter} className={styles.socialMediaIcon} />
      </li>
    </ul>
  );
};

export default Socials;
