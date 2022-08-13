import GitHub from "/github-brands.svg";
import Twitter from "/twitter-brands.svg";
import styles from "../../styles/landing/Socials.module.scss";

const Socials = () => {
  return (
    <ul className={styles.socialMediaContainer}>
      <li>
        <a href="https://github.com/kazukitaninaka" target="_blank">
          <img src={GitHub} className={styles.socialMediaIcon} />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/azoookid" target="_blank">
          <img src={Twitter} className={styles.socialMediaIcon} />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
